import { useEffect, useRef, useState } from 'react';
import LicensedAdminNote from '../lcca/LicensedAdminNote';
import { shuffle, readBest, writeBest, bestKey, type Track } from '../tracks/config';
import type { DeadlineItem } from '@/mocks/gameTypes';
import { GameHero, ResultsHero } from './shared';

type Phase = 'menu' | 'playing' | 'over';
type Result = 'fast' | 'slow' | 'wrong' | 'timeout';
type Card = { item: DeadlineItem; options: string[] };

const ROUND = 15;
const SECONDS = 8;
const TICK_MS = 100;
const START_DIST = 4;
const MAX_DIST = 6;

function rankFor(escaped: boolean, correct: number, total: number) {
  const pct = total > 0 ? correct / total : 0;
  if (escaped && pct >= 0.9) return { title: 'Untouchable', icon: 'ri-flashlight-line' };
  if (escaped) return { title: 'Beat the Deadline', icon: 'ri-medal-line' };
  return { title: 'Caught by the Clock', icon: 'ri-alarm-warning-line' };
}

export default function DeadlineDash({ track }: { track: Track }) {
  const KEY = bestKey(track.id, 'deadline-dash');
  const items = track.gameData.deadlines;
  const [phase, setPhase] = useState<Phase>('menu');
  const [queue, setQueue] = useState<Card[]>([]);
  const [idx, setIdx] = useState(0);
  const [picked, setPicked] = useState<string | null>(null);
  const [result, setResult] = useState<Result | null>(null);
  const [msLeft, setMsLeft] = useState(SECONDS * 1000);
  const [dist, setDist] = useState(START_DIST);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [missed, setMissed] = useState<DeadlineItem[]>([]);
  const [best, setBest] = useState(() => readBest(KEY));
  const [newBest, setNewBest] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);
  const advance = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cur = queue[idx];
  const locked = result !== null;

  const clearTimers = () => {
    if (timer.current) clearInterval(timer.current);
    if (advance.current) clearTimeout(advance.current);
    timer.current = null;
    advance.current = null;
  };
  useEffect(() => clearTimers, []);

  const start = () => {
    clearTimers();
    const cards = shuffle(items).slice(0, ROUND).map(item => ({ item, options: shuffle([item.answer, ...item.distractors]) }));
    setQueue(cards);
    setIdx(0);
    setPicked(null);
    setResult(null);
    setMsLeft(SECONDS * 1000);
    setDist(START_DIST);
    setScore(0);
    setStreak(0);
    setBestStreak(0);
    setCorrectCount(0);
    setMissed([]);
    setNewBest(false);
    setPhase('playing');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Countdown for the current card.
  useEffect(() => {
    if (phase !== 'playing' || locked) return;
    timer.current = setInterval(() => setMsLeft(m => Math.max(m - TICK_MS, 0)), TICK_MS);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [phase, idx, locked]);

  useEffect(() => {
    if (phase === 'playing' && !locked && msLeft === 0) answer(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [msLeft]);

  function finish(finalScore: number) {
    clearTimers();
    if (finalScore > readBest(KEY)) {
      writeBest(KEY, finalScore);
      setBest(finalScore);
      setNewBest(finalScore > 0);
    }
    setPhase('over');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function answer(choice: string | null) {
    if (!cur || locked) return;
    if (timer.current) clearInterval(timer.current);
    setPicked(choice);
    const right = choice === cur.item.answer;
    const fast = msLeft >= (SECONDS * 1000) / 2;
    let newDist = dist - 1;
    let newScore = score;
    if (right) {
      const nextStreak = streak + 1;
      newScore = score + 100 + Math.round(msLeft / 100) * 2 + Math.min(nextStreak - 1, 5) * 15;
      newDist = dist - 1 + (fast ? 2 : 1);
      setStreak(nextStreak);
      setBestStreak(b => Math.max(b, nextStreak));
      setCorrectCount(c => c + 1);
      setResult(fast ? 'fast' : 'slow');
    } else {
      setStreak(0);
      setMissed(m => [...m, cur.item]);
      setResult(choice === null ? 'timeout' : 'wrong');
    }
    newDist = Math.min(newDist, MAX_DIST);
    setScore(newScore);
    setDist(newDist);
    const caught = newDist <= 0;
    const last = idx + 1 >= queue.length;
    advance.current = setTimeout(() => {
      if (caught || last) {
        finish(newScore);
        return;
      }
      setIdx(i => i + 1);
      setPicked(null);
      setResult(null);
      setMsLeft(SECONDS * 1000);
    }, right ? 1100 : 2400);
  }

  // ── MENU ──
  if (phase === 'menu') {
    return (
      <div className="min-h-screen bg-[#F5F1E8]" style={{ fontFamily: 'Inter, sans-serif' }}>
        <GameHero
          track={track}
          titleTop="Deadline"
          titleEm="Dash"
          blurb={`Outrun the deadline. Every answer is a number from ${track.chapterLabel} — a timeframe, a limit, an age. Answer fast to gain ground; miss and the Deadline closes in.`}
          stats={[
            { value: `${ROUND}`, label: 'Cards' },
            { value: `${SECONDS}s`, label: 'Per Card' },
            { value: `${best}`, label: 'Best Score' },
          ]}
        />
        <div className="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-20">
          <div className="bg-[#0A0A0A] rounded-3xl p-8 md:p-12 mb-10">
            <p className="text-[#C9A84C] text-[10px] tracking-[0.3em] uppercase mb-6">How to Escape</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: 'ri-flashlight-line', title: 'Answer Fast', body: `Answer with more than half the ${SECONDS}-second clock left and you pull 2 steps ahead of the Deadline.` },
                { icon: 'ri-alarm-warning-line', title: 'Mind the Gap', body: 'Every card the Deadline gains a step. A slow right answer holds your gap; a wrong answer or timeout lets it gain.' },
                { icon: 'ri-run-line', title: 'Finish the Course', body: `Survive all ${ROUND} cards without being caught. Every missed rule is shown with its citation afterward.` },
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
          <button
            onClick={start}
            disabled={items.length === 0}
            className="whitespace-nowrap w-full md:w-auto inline-flex items-center justify-center gap-3 bg-[#0A0A0A] text-[#F5F1E8] text-xs tracking-[0.2em] uppercase px-10 py-5 rounded-full hover:bg-[#C9A84C] hover:text-[#0A0A0A] transition-all duration-300 cursor-pointer font-semibold disabled:opacity-40"
          >
            Start Running
            <i className="ri-run-line"></i>
          </button>
          <div className="mt-10">
            <LicensedAdminNote />
          </div>
        </div>
      </div>
    );
  }

  // ── RESULTS ──
  if (phase === 'over') {
    const escaped = dist > 0;
    const rank = rankFor(escaped, correctCount, queue.length);
    return (
      <div className="min-h-screen bg-[#F5F1E8]" style={{ fontFamily: 'Inter, sans-serif' }}>
        <ResultsHero
          track={track}
          icon={rank.icon}
          kicker={escaped ? 'You Escaped' : 'Caught'}
          title={rank.title}
          subtitle={
            <>
              {correctCount} of {idx + 1} correct{newBest && <span className="text-[#C9A84C] font-semibold"> · New personal best!</span>}
            </>
          }
          stats={[
            { value: `${score}`, label: 'Score' },
            { value: `${best}`, label: 'Best Score' },
            { value: `${bestStreak}`, label: 'Best Streak' },
            { value: `${missed.length}`, label: 'To Review' },
          ]}
          onAgain={start}
          onMenu={() => setPhase('menu')}
        />
        <div className="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-20 py-12 md:py-16 space-y-10">
          {missed.length > 0 ? (
            <div>
              <p className="text-[#C9A84C] text-[10px] tracking-[0.3em] uppercase mb-6">Rules to Lock In</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {missed.map((m, i) => (
                  <div key={`${m.id}-${i}`} className="bg-white rounded-3xl border border-[#0A0A0A]/8 p-7">
                    <p className="text-[#0A0A0A] text-base leading-relaxed font-medium mb-3">{m.prompt}</p>
                    <p className="text-[#4a7c59] text-lg font-medium mb-1" style={{ fontFamily: 'Cormorant Garamond, serif' }}>{m.answer}</p>
                    <p className="text-[#8B8680] text-xs">{m.cite}</p>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-3xl border border-[#4a7c59]/30 p-8 text-center">
              <i className="ri-checkbox-circle-line text-[#4a7c59] text-3xl"></i>
              <p className="text-[#0A0A0A] text-lg font-light mt-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Flawless run — nothing to review.</p>
            </div>
          )}
          <LicensedAdminNote />
        </div>
      </div>
    );
  }

  // ── PLAYING ──
  if (!cur) return null;
  const gapPct = (dist / MAX_DIST) * 100;
  const timePct = (msLeft / (SECONDS * 1000)) * 100;
  const timeColor = timePct <= 30 ? 'bg-red-500' : timePct <= 55 ? 'bg-[#C9A84C]' : 'bg-[#4a7c59]';

  return (
    <div className="min-h-screen bg-[#F5F1E8]" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="bg-[#0A0A0A] px-6 md:px-12 lg:px-20 py-5 sticky top-0 z-40">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between gap-4 mb-4">
          <button
            onClick={() => { clearTimers(); setPhase('menu'); }}
            className="whitespace-nowrap inline-flex items-center gap-2 text-[#8B8680] hover:text-[#F5F1E8] text-xs tracking-[0.2em] uppercase transition-all cursor-pointer"
          >
            <i className="ri-close-line"></i>
            Quit
          </button>
          <p className="text-[#8B8680] text-xs tracking-[0.2em] uppercase">Card {idx + 1} / {queue.length}</p>
          <div className="text-right">
            <p className="text-[#F5F1E8] text-lg font-light leading-none" style={{ fontFamily: 'Cormorant Garamond, serif' }}>{score}</p>
            <p className="text-[#8B8680] text-[10px] tracking-[0.2em] uppercase mt-1">
              {streak > 1 ? <span className="text-[#C9A84C]"><i className="ri-fire-line"></i> {streak} streak</span> : 'Score'}
            </p>
          </div>
        </div>
        {/* Chase track */}
        <div className="max-w-screen-xl mx-auto relative h-9" aria-label={`The deadline is ${dist} steps behind you`}>
          <div className="absolute left-0 right-8 top-1/2 h-1 -translate-y-1/2 rounded-full bg-white/10" />
          <div className="absolute top-1/2 -translate-y-1/2 transition-all duration-700 ease-out" style={{ left: `calc((100% - 2rem) * ${(100 - gapPct) / 100})` }}>
            <i className="ri-alarm-warning-fill text-red-500 text-2xl"></i>
          </div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2">
            <i className="ri-run-line text-[#C9A84C] text-2xl"></i>
          </div>
        </div>
        <div className="max-w-screen-xl mx-auto mt-3 w-full bg-white/10 rounded-full h-1.5">
          <div className={`h-1.5 rounded-full transition-all duration-100 ease-linear ${timeColor}`} style={{ width: `${timePct}%` }} />
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 md:px-8 py-10 md:py-14">
        <div className="bg-white rounded-3xl border border-[#0A0A0A]/8 p-7 md:p-9">
          <p className="text-[#0A0A0A] text-xl md:text-2xl leading-snug font-light mb-8" style={{ fontFamily: 'Cormorant Garamond, serif' }}>{cur.item.prompt}</p>
          <div className="grid grid-cols-2 gap-3">
            {cur.options.map(opt => {
              let style = 'border-[#0A0A0A]/10 bg-[#F5F1E8]/60 text-[#0A0A0A] hover:border-[#C9A84C] hover:bg-[#C9A84C]/10 cursor-pointer';
              if (locked) {
                if (opt === cur.item.answer) style = 'border-[#4a7c59] bg-[#4a7c59]/10 text-[#4a7c59] font-semibold cursor-default';
                else if (opt === picked) style = 'border-red-400 bg-red-50 text-red-600 cursor-default';
                else style = 'border-[#0A0A0A]/6 bg-[#F5F1E8]/40 text-[#8B8680] cursor-default opacity-50';
              }
              return (
                <button
                  key={opt}
                  onClick={() => answer(opt)}
                  disabled={locked}
                  className={`whitespace-normal text-center px-4 py-5 rounded-2xl border text-base md:text-lg leading-snug transition-all duration-200 ${style}`}
                >
                  {opt}
                </button>
              );
            })}
          </div>
          {locked && (
            <p className={`mt-6 text-sm font-medium ${result === 'fast' || result === 'slow' ? 'text-[#4a7c59]' : 'text-red-500'}`}>
              {result === 'fast' && <><i className="ri-flashlight-line"></i> Fast! You gained ground. </>}
              {result === 'slow' && <><i className="ri-check-line"></i> Correct — the gap holds. </>}
              {result === 'wrong' && <><i className="ri-close-line"></i> Not quite. The Deadline gains. </>}
              {result === 'timeout' && <><i className="ri-time-line"></i> Out of time. The Deadline gains. </>}
              <span className="text-[#8B8680] font-normal">{cur.item.cite}</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
