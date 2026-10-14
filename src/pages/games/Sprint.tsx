import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import LicensedAdminNote from '../lcca/LicensedAdminNote';
import { shuffle, readBest, writeBest, bestKey, type GameQuestion, type Track } from '../tracks/config';

type Phase = 'menu' | 'playing' | 'over';
type Mode = 'all' | 'ch748' | 'scenario';

const START_LIVES = 3;
const SECONDS_PER_QUESTION = 25;
const ROUND_LENGTH = 15;

// Shuffle answer order so players learn the rule, not the letter.
function shuffleOptions(q: GameQuestion): GameQuestion {
  const order = shuffle(q.options.map((_, i) => i));
  return {
    ...q,
    options: order.map(i => q.options[i]),
    correct: order.indexOf(q.correct),
  };
}

function isScenario(q: GameQuestion) {
  return q.question.length > 140 || (q.question.length > 90 && /^(you are|a |an |during|your |at |when)/i.test(q.question));
}

function rankFor(pct: number) {
  if (pct >= 90) return { title: 'Licensed-Ready', icon: 'ri-trophy-line' };
  if (pct >= 75) return { title: 'Compliance Pro', icon: 'ri-medal-line' };
  if (pct >= 55) return { title: 'Rising Administrator', icon: 'ri-seedling-line' };
  return { title: 'Keep Studying', icon: 'ri-book-open-line' };
}

// ── PAGE ─────────────────────────────────────────────────────────────────────
export default function SprintGame({ track }: { track: Track }) {
  const pool = track.pool;
  const BEST_KEY = bestKey(track.id, 'sprint');
  const [phase, setPhase] = useState<Phase>('menu');
  const [mode, setMode] = useState<Mode>('all');
  const [queue, setQueue] = useState<GameQuestion[]>([]);
  const [idx, setIdx] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState(SECONDS_PER_QUESTION);
  const [lives, setLives] = useState(START_LIVES);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [fiftyUsed, setFiftyUsed] = useState(false);
  const [hidden, setHidden] = useState<number[]>([]);
  const [missed, setMissed] = useState<GameQuestion[]>([]);
  const [best, setBest] = useState(() => readBest(BEST_KEY));
  const [newBest, setNewBest] = useState(false);
  const [gain, setGain] = useState<number | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const q = queue[idx];
  const locked = picked !== null;

  const poolFor = useCallback(
    (m: Mode) => {
      if (m === 'ch748') return pool.filter(q => track.chapterRegex.test(`${q.domain} ${q.question} ${q.explanation}`));
      if (m === 'scenario') return pool.filter(isScenario);
      return pool;
    },
    [pool, track]
  );

  const counts = useMemo(
    () => ({ all: poolFor('all').length, ch748: poolFor('ch748').length, scenario: poolFor('scenario').length }),
    [poolFor]
  );

  const stopTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  useEffect(() => stopTimer, []);

  const finish = useCallback(
    (finalScore: number) => {
      stopTimer();
      if (finalScore > readBest(BEST_KEY)) {
        writeBest(BEST_KEY, finalScore);
        setBest(finalScore);
        setNewBest(finalScore > 0);
      }
      setPhase('over');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    []
  );

  const start = (m: Mode) => {
    const chosen = shuffle(poolFor(m)).slice(0, ROUND_LENGTH).map(shuffleOptions);
    setMode(m);
    setQueue(chosen);
    setIdx(0);
    setPicked(null);
    setLives(START_LIVES);
    setScore(0);
    setStreak(0);
    setBestStreak(0);
    setCorrectCount(0);
    setFiftyUsed(false);
    setHidden([]);
    setMissed([]);
    setNewBest(false);
    setGain(null);
    setTimeLeft(SECONDS_PER_QUESTION);
    setPhase('playing');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Per-question countdown.
  useEffect(() => {
    if (phase !== 'playing' || locked) return;
    stopTimer();
    timerRef.current = setInterval(() => {
      setTimeLeft(t => (t <= 1 ? 0 : t - 1));
    }, 1000);
    return stopTimer;
  }, [phase, idx, locked]);

  // Time ran out → counts as a miss.
  useEffect(() => {
    if (phase === 'playing' && !locked && timeLeft === 0) answer(-1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeLeft]);

  function answer(choice: number) {
    if (!q || locked) return;
    stopTimer();
    setPicked(choice);
    if (choice === q.correct) {
      const nextStreak = streak + 1;
      const points = 100 + Math.min(nextStreak - 1, 5) * 20 + timeLeft * 2;
      setStreak(nextStreak);
      setBestStreak(b => Math.max(b, nextStreak));
      setScore(s => s + points);
      setCorrectCount(c => c + 1);
      setGain(points);
    } else {
      setStreak(0);
      setLives(l => l - 1);
      setMissed(m => [...m, q]);
      setGain(null);
    }
  }

  const next = () => {
    const outOfLives = lives <= 0;
    const lastQuestion = idx + 1 >= queue.length;
    if (outOfLives || lastQuestion) {
      finish(score);
      return;
    }
    setIdx(i => i + 1);
    setPicked(null);
    setHidden([]);
    setGain(null);
    setTimeLeft(SECONDS_PER_QUESTION);
  };

  const useFifty = () => {
    if (!q || locked || fiftyUsed) return;
    const wrong = q.options.map((_, i) => i).filter(i => i !== q.correct);
    setHidden(shuffle(wrong).slice(0, 2));
    setFiftyUsed(true);
  };

  const answered = idx + (locked ? 1 : 0);
  const pct = answered > 0 ? Math.round((correctCount / answered) * 100) : 0;
  const rank = rankFor(pct);

  // ── MENU ──
  if (phase === 'menu') {
    const modes: { id: Mode; title: string; blurb: string; icon: string }[] = [
      { id: 'all', title: 'Full Mix', blurb: 'Questions from every domain and every practice exam.', icon: 'ri-shuffle-line' },
      { id: 'ch748', title: `${track.chapterLabel} Blitz`, blurb: `${track.governs} rules, timelines and limits only.`, icon: 'ri-building-2-line' },
      { id: 'scenario', title: 'Scenario Showdown', blurb: 'Longer, real-world situations. You are the administrator.', icon: 'ri-discuss-line' },
    ];
    return (
      <div className="min-h-screen bg-[#F5F1E8]" style={{ fontFamily: 'Inter, sans-serif' }}>
        <div className="bg-[#0A0A0A] px-6 md:px-12 lg:px-20 py-16 md:py-24">
          <div className="max-w-screen-xl mx-auto">
            <Link
              to={track.basePath + "/games"}
              className="whitespace-nowrap inline-flex items-center gap-2 text-[#8B8680] hover:text-[#C9A84C] text-xs tracking-[0.2em] uppercase mb-10 transition-all cursor-pointer"
            >
              <i className="ri-arrow-left-line"></i>
              All Games
            </Link>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
              <div>
                <div className="inline-flex items-center gap-3 bg-[#C9A84C]/10 border border-[#C9A84C]/30 rounded-full px-5 py-2 mb-6">
                  <i className="ri-gamepad-line text-[#C9A84C] text-sm"></i>
                  <span className="text-[#C9A84C] text-xs tracking-[0.2em] uppercase font-medium">{track.short} Exam Prep</span>
                </div>
                <h1 className="text-[#F5F1E8] text-4xl md:text-6xl lg:text-7xl font-light leading-[1.1]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  Compliance
                  <br />
                  <span className="italic text-[#C9A84C]">Sprint</span>
                </h1>
              </div>
              <div className="max-w-sm">
                <p className="text-[#8B8680] text-sm leading-relaxed mb-6">
                  A fast-paced review game. Answer {ROUND_LENGTH} questions before the clock runs out. You have {START_LIVES} lives — build a streak for bonus points and use your 50/50 wisely.
                </p>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { value: `${ROUND_LENGTH}`, label: 'Per Round' },
                    { value: `${START_LIVES}`, label: 'Lives' },
                    { value: `${best}`, label: 'Best Score' },
                  ].map(s => (
                    <div key={s.label} className="bg-white/5 rounded-2xl p-4 text-center">
                      <p className="text-[#F5F1E8] text-2xl font-light mb-1" style={{ fontFamily: 'Cormorant Garamond, serif' }}>{s.value}</p>
                      <p className="text-[#C9A84C] text-[10px] tracking-[0.2em] uppercase">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-20">
          <p className="text-[#C9A84C] text-[10px] tracking-[0.3em] uppercase mb-10">Choose Your Round</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {modes.map(m => (
              <div key={m.id} className="bg-white rounded-3xl border border-[#0A0A0A]/6 hover:border-[#C9A84C]/40 transition-all duration-300 p-8">
                <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-[#C9A84C]/10 border border-[#C9A84C]/20 mb-5">
                  <i className={`${m.icon} text-[#C9A84C] text-xl`}></i>
                </div>
                <h3 className="text-[#0A0A0A] text-xl font-light mb-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>{m.title}</h3>
                <p className="text-[#5C5752] text-sm leading-relaxed mb-2">{m.blurb}</p>
                <p className="text-[#8B8680] text-xs mb-6">{counts[m.id]} questions in the pool</p>
                <button
                  onClick={() => start(m.id)}
                  disabled={counts[m.id] === 0}
                  className="whitespace-nowrap w-full text-center text-xs tracking-[0.15em] uppercase py-3 rounded-full bg-[#0A0A0A] text-[#F5F1E8] hover:bg-[#C9A84C] hover:text-[#0A0A0A] transition-all duration-300 cursor-pointer font-medium disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Play
                </button>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-[#0A0A0A] rounded-3xl p-8 md:p-12">
            <p className="text-[#C9A84C] text-[10px] tracking-[0.3em] uppercase mb-6">How Scoring Works</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: 'ri-flashlight-line', title: 'Speed Bonus', body: `Every correct answer earns 100 points plus 2 for each second left on the ${SECONDS_PER_QUESTION}-second clock.` },
                { icon: 'ri-fire-line', title: 'Streaks', body: 'Each correct answer in a row adds +20 bonus points, up to +100. A miss resets your streak.' },
                { icon: 'ri-heart-line', title: 'Lives', body: `A wrong answer or a timeout costs a life. Lose all ${START_LIVES} and the round ends — missed questions are reviewed with explanations.` },
              ].map(t => (
                <div key={t.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#C9A84C]/15 shrink-0">
                    <i className={`${t.icon} text-[#C9A84C] text-lg`}></i>
                  </div>
                  <div>
                    <h4 className="text-[#F5F1E8] text-base font-light mb-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>{t.title}</h4>
                    <p className="text-[#8B8680] text-sm leading-relaxed">{t.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <LicensedAdminNote />
          </div>
        </div>
      </div>
    );
  }

  // ── GAME OVER ──
  if (phase === 'over') {
    const total = answered;
    const finalPct = total > 0 ? Math.round((correctCount / total) * 100) : 0;
    const finalRank = rankFor(finalPct);
    const cleared = lives > 0;
    return (
      <div className="min-h-screen bg-[#F5F1E8]" style={{ fontFamily: 'Inter, sans-serif' }}>
        <div className="bg-[#0A0A0A] px-6 md:px-12 lg:px-20 py-16 md:py-20">
          <div className="max-w-screen-xl mx-auto text-center">
            <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-2xl bg-[#C9A84C]/15 border border-[#C9A84C]/30 mb-6">
              <i className={`${finalRank.icon} text-[#C9A84C] text-3xl`}></i>
            </div>
            <p className="text-[#C9A84C] text-[10px] tracking-[0.3em] uppercase mb-2">{cleared ? 'Round Complete' : 'Out of Lives'}</p>
            <h2 className="text-[#F5F1E8] text-4xl md:text-6xl font-light mb-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>{finalRank.title}</h2>
            <p className="text-[#8B8680] text-sm mb-8">
              {correctCount} of {total} correct · {finalPct}% accuracy
              {newBest && <span className="text-[#C9A84C] font-semibold"> · New personal best!</span>}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-10">
              {[
                { value: `${score}`, label: 'Score' },
                { value: `${best}`, label: 'Best Score' },
                { value: `${bestStreak}`, label: 'Best Streak' },
                { value: `${missed.length}`, label: 'To Review' },
              ].map(s => (
                <div key={s.label} className="bg-white/5 rounded-2xl p-4">
                  <p className="text-[#F5F1E8] text-2xl font-light mb-1" style={{ fontFamily: 'Cormorant Garamond, serif' }}>{s.value}</p>
                  <p className="text-[#C9A84C] text-[10px] tracking-[0.2em] uppercase">{s.label}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => start(mode)}
                className="whitespace-nowrap inline-flex items-center gap-3 bg-[#C9A84C] text-[#0A0A0A] text-xs tracking-[0.2em] uppercase px-8 py-4 rounded-full hover:bg-[#F5F1E8] transition-all duration-300 cursor-pointer font-semibold"
              >
                Play Again
                <i className="ri-refresh-line"></i>
              </button>
              <button
                onClick={() => setPhase('menu')}
                className="whitespace-nowrap text-xs tracking-[0.2em] uppercase px-8 py-4 rounded-full border border-white/30 text-white hover:bg-white/10 transition-all cursor-pointer"
              >
                Change Round
              </button>
              <Link
                to={track.basePath + "/practice-exams"}
                className="whitespace-nowrap text-xs tracking-[0.2em] uppercase px-8 py-4 rounded-full border border-white/30 text-white hover:bg-white/10 transition-all cursor-pointer"
              >
                Practice Exams
              </Link>
            </div>
          </div>
        </div>

        <div className="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-20 py-12 md:py-16 space-y-10">
          {missed.length > 0 ? (
            <div>
              <p className="text-[#C9A84C] text-[10px] tracking-[0.3em] uppercase mb-6">Review What You Missed</p>
              <div className="space-y-5">
                {missed.map((m, i) => (
                  <div key={`${m.id}-${i}`} className="bg-white rounded-3xl border border-[#0A0A0A]/8 p-7">
                    <span className="text-[#C9A84C] text-[10px] tracking-[0.2em] uppercase font-medium block mb-2">{m.domain}</span>
                    <p className="text-[#0A0A0A] text-base leading-relaxed font-medium mb-4">{m.question}</p>
                    <div className="flex items-start gap-3 p-4 rounded-xl bg-[#4a7c59]/8 border border-[#4a7c59]/20 mb-3">
                      <i className="ri-checkbox-circle-line text-[#4a7c59] text-base mt-0.5 shrink-0"></i>
                      <p className="text-[#4a7c59] text-sm font-medium">{m.options[m.correct]}</p>
                    </div>
                    <p className="text-[#5C5752] text-sm leading-relaxed">{m.explanation}</p>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-3xl border border-[#4a7c59]/30 p-8 text-center">
              <i className="ri-checkbox-circle-line text-[#4a7c59] text-3xl"></i>
              <p className="text-[#0A0A0A] text-lg font-light mt-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Perfect round — nothing to review.</p>
            </div>
          )}
          <LicensedAdminNote />
        </div>
      </div>
    );
  }

  // ── PLAYING ──
  if (!q) return null;
  const timePct = (timeLeft / SECONDS_PER_QUESTION) * 100;
  const timeColor = timeLeft <= 5 ? 'bg-red-500' : timeLeft <= 10 ? 'bg-[#C9A84C]' : 'bg-[#4a7c59]';
  const wasCorrect = locked && picked === q.correct;
  const lastQuestionNow = idx + 1 >= queue.length;

  return (
    <div className="min-h-screen bg-[#F5F1E8]" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="bg-[#0A0A0A] px-6 md:px-12 lg:px-20 py-5 sticky top-0 z-40">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between gap-4">
          <button
            onClick={() => { stopTimer(); setPhase('menu'); }}
            className="whitespace-nowrap inline-flex items-center gap-2 text-[#8B8680] hover:text-[#F5F1E8] text-xs tracking-[0.2em] uppercase transition-all cursor-pointer"
          >
            <i className="ri-close-line"></i>
            Quit
          </button>
          <div className="flex items-center gap-1" aria-label={`${lives} lives left`}>
            {Array.from({ length: START_LIVES }).map((_, i) => (
              <i key={i} className={`text-xl ${i < lives ? 'ri-heart-fill text-[#C9A84C]' : 'ri-heart-line text-[#8B8680]/50'}`}></i>
            ))}
          </div>
          <div className="text-right">
            <p className="text-[#F5F1E8] text-lg font-light leading-none" style={{ fontFamily: 'Cormorant Garamond, serif' }}>{score}</p>
            <p className="text-[#8B8680] text-[10px] tracking-[0.2em] uppercase mt-1">
              {streak > 1 ? <span className="text-[#C9A84C]"><i className="ri-fire-line"></i> {streak} streak</span> : 'Score'}
            </p>
          </div>
        </div>
        <div className="max-w-screen-xl mx-auto mt-4 w-full bg-white/10 rounded-full h-1.5">
          <div className={`h-1.5 rounded-full transition-all duration-1000 ease-linear ${timeColor}`} style={{ width: `${timePct}%` }} />
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 md:px-8 py-10 md:py-14">
        <div className="flex items-center justify-between mb-5">
          <span className="text-[#8B8680] text-xs tracking-[0.2em] uppercase">Question {idx + 1} of {queue.length}</span>
          <span className={`text-xs font-semibold ${timeLeft <= 5 && !locked ? 'text-red-500' : 'text-[#5C5752]'}`}>
            <i className="ri-time-line mr-1"></i>{timeLeft}s
          </span>
        </div>

        <div className="bg-white rounded-3xl border border-[#0A0A0A]/8 p-7 md:p-9">
          <span className="text-[#C9A84C] text-[10px] tracking-[0.2em] uppercase font-medium block mb-3">{q.domain}</span>
          <p className="text-[#0A0A0A] text-lg leading-relaxed font-medium mb-6">{q.question}</p>

          <div className="space-y-3">
            {q.options.map((opt, i) => {
              if (hidden.includes(i) && !locked) return null;
              let style = 'border-[#0A0A0A]/10 bg-[#F5F1E8]/60 text-[#3A3632] hover:border-[#C9A84C]/40 cursor-pointer';
              if (locked) {
                if (i === q.correct) style = 'border-[#4a7c59] bg-[#4a7c59]/10 text-[#4a7c59] font-medium cursor-default';
                else if (i === picked) style = 'border-red-400 bg-red-50 text-red-600 cursor-default';
                else style = 'border-[#0A0A0A]/6 bg-[#F5F1E8]/40 text-[#8B8680] cursor-default opacity-50';
              }
              return (
                <button
                  key={i}
                  onClick={() => answer(i)}
                  disabled={locked}
                  className={`whitespace-normal w-full text-left px-5 py-3.5 rounded-xl border text-sm leading-relaxed transition-all duration-200 ${style}`}
                >
                  <span className="font-semibold mr-2">{String.fromCharCode(65 + i)}.</span>{opt}
                </button>
              );
            })}
          </div>

          {!locked && (
            <div className="mt-6 flex justify-end">
              <button
                onClick={useFifty}
                disabled={fiftyUsed}
                className="whitespace-nowrap inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-[#C9A84C] border border-[#C9A84C]/30 rounded-full px-5 py-2.5 hover:bg-[#C9A84C]/10 transition-all cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <i className="ri-scissors-cut-line"></i>
                {fiftyUsed ? '50/50 used' : '50/50'}
              </button>
            </div>
          )}

          {locked && (
            <div className="mt-6">
              <div className={`flex items-start gap-3 p-4 rounded-xl ${wasCorrect ? 'bg-[#4a7c59]/8' : 'bg-red-50'}`}>
                <i className={`text-base mt-0.5 shrink-0 ${wasCorrect ? 'ri-checkbox-circle-line text-[#4a7c59]' : 'ri-close-circle-line text-red-500'}`}></i>
                <div>
                  <p className={`text-xs font-semibold tracking-[0.15em] uppercase mb-1 ${wasCorrect ? 'text-[#4a7c59]' : 'text-red-500'}`}>
                    {wasCorrect ? `Correct${gain ? ` · +${gain}` : ''}` : picked === -1 ? "Time's up" : 'Incorrect'}
                  </p>
                  <p className="text-[#5C5752] text-sm leading-relaxed">{q.explanation}</p>
                </div>
              </div>
              <button
                onClick={next}
                className="whitespace-nowrap mt-5 w-full inline-flex items-center justify-center gap-3 bg-[#0A0A0A] text-[#F5F1E8] text-xs tracking-[0.2em] uppercase px-8 py-4 rounded-full hover:bg-[#C9A84C] hover:text-[#0A0A0A] transition-all duration-300 cursor-pointer font-semibold"
              >
                {lives <= 0 || lastQuestionNow ? 'See Results' : 'Next Question'}
                <i className="ri-arrow-right-line"></i>
              </button>
            </div>
          )}
        </div>

        <p className="text-center text-[#8B8680] text-[10px] tracking-[0.2em] uppercase mt-6">{rank.title} · {pct}% accuracy</p>
      </div>
    </div>
  );
}
