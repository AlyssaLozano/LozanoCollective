import { useState } from 'react';
import LicensedAdminNote from '../lcca/LicensedAdminNote';
import { shuffle, readBest, writeBest, bestKey, type Track } from '../tracks/config';
import type { Meter, ShiftChoice, ShiftScenario } from '@/mocks/gameTypes';
import { GameHero, ResultsHero } from './shared';

type Phase = 'menu' | 'playing' | 'over';
type Meters = Record<Meter, number>;

const ROUND = 10;
const START: Meters = { safety: 8, compliance: 8, morale: 8, budget: 8 };
const MAX = 10;

const METERS: { key: Meter; label: string; icon: string; bar: string }[] = [
  { key: 'safety', label: 'Child Safety', icon: 'ri-shield-check-line', bar: 'bg-[#4a7c59]' },
  { key: 'compliance', label: 'Compliance', icon: 'ri-file-list-3-line', bar: 'bg-[#C9A84C]' },
  { key: 'morale', label: 'Staff Morale', icon: 'ri-team-line', bar: 'bg-[#6b8f71]' },
  { key: 'budget', label: 'Budget', icon: 'ri-money-dollar-circle-line', bar: 'bg-[#8B8680]' },
];

const clamp = (n: number) => Math.max(0, Math.min(MAX, n));

function rankFor(bestPct: number, collapsed: boolean) {
  if (collapsed) return { title: 'Shift Cut Short', icon: 'ri-alarm-warning-line' };
  if (bestPct >= 90) return { title: 'Administrator of the Year', icon: 'ri-trophy-line' };
  if (bestPct >= 70) return { title: 'Seasoned Administrator', icon: 'ri-medal-line' };
  if (bestPct >= 50) return { title: 'Getting There', icon: 'ri-seedling-line' };
  return { title: 'Rookie Shift', icon: 'ri-book-open-line' };
}

function MeterBars({ meters, last }: { meters: Meters; last?: Meters | null }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {METERS.map(m => {
        const v = meters[m.key];
        const delta = last ? v - last[m.key] : 0;
        const low = v <= 2;
        return (
          <div key={m.key} className="bg-white/5 rounded-2xl p-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[#8B8680] text-[10px] tracking-[0.15em] uppercase flex items-center gap-1.5">
                <i className={`${m.icon} text-sm`}></i>
                {m.label}
              </span>
              {delta !== 0 && (
                <span className={`text-[10px] font-semibold ${delta > 0 ? 'text-[#4a7c59]' : 'text-red-400'}`}>{delta > 0 ? `+${delta}` : delta}</span>
              )}
            </div>
            <div className="w-full bg-white/10 rounded-full h-2">
              <div className={`h-2 rounded-full transition-all duration-500 ${low ? 'bg-red-500' : m.bar}`} style={{ width: `${(v / MAX) * 100}%` }} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function AdminShift({ track }: { track: Track }) {
  const KEY = bestKey(track.id, 'admin-shift');
  const pool = track.gameData.shift;
  const [phase, setPhase] = useState<Phase>('menu');
  const [queue, setQueue] = useState<ShiftScenario[]>([]);
  const [idx, setIdx] = useState(0);
  const [meters, setMeters] = useState<Meters>(START);
  const [prev, setPrev] = useState<Meters | null>(null);
  const [chosen, setChosen] = useState<ShiftChoice | null>(null);
  const [history, setHistory] = useState<{ s: ShiftScenario; c: ShiftChoice }[]>([]);
  const [collapsed, setCollapsed] = useState<Meter | null>(null);
  const [best, setBest] = useState(() => readBest(KEY));
  const [newBest, setNewBest] = useState(false);
  const [finalScore, setFinalScore] = useState(0);

  const cur = queue[idx];

  const start = () => {
    // Random subset, kept in clock order.
    const picked = shuffle(pool.map((s, i) => ({ s, i })))
      .slice(0, ROUND)
      .sort((a, b) => a.i - b.i)
      .map(x => x.s);
    setQueue(picked);
    setIdx(0);
    setMeters(START);
    setPrev(null);
    setChosen(null);
    setHistory([]);
    setCollapsed(null);
    setNewBest(false);
    setPhase('playing');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const choose = (c: ShiftChoice) => {
    if (chosen || !cur) return;
    const next: Meters = {
      safety: clamp(meters.safety + c.effects.safety),
      compliance: clamp(meters.compliance + c.effects.compliance),
      morale: clamp(meters.morale + c.effects.morale),
      budget: clamp(meters.budget + c.effects.budget),
    };
    setPrev(meters);
    setMeters(next);
    setChosen(c);
    setHistory(h => [...h, { s: cur, c }]);
    const dead = METERS.find(m => next[m.key] <= 0);
    if (dead) setCollapsed(dead.key);
  };

  const proceed = () => {
    const last = idx + 1 >= queue.length;
    if (collapsed || last) {
      const bestCount = history.filter(h => h.c.best).length;
      const total = METERS.reduce((a, m) => a + meters[m.key], 0);
      const score = bestCount * 100 + total * 10;
      setFinalScore(score);
      if (score > readBest(KEY)) {
        writeBest(KEY, score);
        setBest(score);
        setNewBest(true);
      }
      setPhase('over');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    setIdx(i => i + 1);
    setChosen(null);
    setPrev(null);
  };

  if (phase === 'menu') {
    return (
      <div className="min-h-screen bg-[#F5F1E8]" style={{ fontFamily: 'Inter, sans-serif' }}>
        <GameHero
          track={track}
          titleTop="Admin"
          titleEm="Shift"
          blurb={`Run a full day as the ${track.role}. Every decision moves four meters — Child Safety, Compliance, Staff Morale and Budget — and the right call follows ${track.chapterLabel}. Play this before you take the practice exams.`}
          stats={[
            { value: `${ROUND}`, label: 'Decisions' },
            { value: '4', label: 'Meters' },
            { value: `${best}`, label: 'Best Score' },
          ]}
        />
        <div className="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-20">
          <div className="bg-[#0A0A0A] rounded-3xl p-8 md:p-12 mb-10">
            <p className="text-[#C9A84C] text-[10px] tracking-[0.3em] uppercase mb-6">How the Shift Works</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: 'ri-time-line', title: 'A Day of Decisions', body: `From early morning to evening, ${ROUND} situations land on your desk. Each has three possible responses.` },
                { icon: 'ri-equalizer-line', title: 'Keep Every Meter Alive', body: 'Shortcuts can feel cheap now and cost you later. If any meter hits zero, your shift ends early.' },
                { icon: 'ri-lightbulb-line', title: 'Learn the Rule', body: 'After every choice you see what happened, which response the standards support, and the exact citation.' },
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
            disabled={pool.length === 0}
            className="whitespace-nowrap w-full md:w-auto inline-flex items-center justify-center gap-3 bg-[#0A0A0A] text-[#F5F1E8] text-xs tracking-[0.2em] uppercase px-10 py-5 rounded-full hover:bg-[#C9A84C] hover:text-[#0A0A0A] transition-all duration-300 cursor-pointer font-semibold disabled:opacity-40"
          >
            Clock In
            <i className="ri-time-line"></i>
          </button>
          <div className="mt-10">
            <LicensedAdminNote />
          </div>
        </div>
      </div>
    );
  }

  if (phase === 'over') {
    const bestCount = history.filter(h => h.c.best).length;
    const pct = Math.round((bestCount / Math.max(history.length, 1)) * 100);
    const endedEarly = collapsed !== null;
    const rank = rankFor(pct, endedEarly);
    const collapsedLabel = METERS.find(m => m.key === collapsed)?.label;
    return (
      <div className="min-h-screen bg-[#F5F1E8]" style={{ fontFamily: 'Inter, sans-serif' }}>
        <ResultsHero
          track={track}
          icon={rank.icon}
          kicker={endedEarly ? `${collapsedLabel} collapsed` : 'Shift Complete'}
          title={rank.title}
          subtitle={
            <>
              {bestCount} of {history.length} decisions matched the standards
              {newBest && <span className="text-[#C9A84C] font-semibold"> · New personal best!</span>}
            </>
          }
          stats={[
            { value: `${finalScore}`, label: 'Score' },
            { value: `${best}`, label: 'Best Score' },
            { value: `${bestCount}`, label: 'Right Calls' },
            { value: `${history.length - bestCount}`, label: 'To Review' },
          ]}
          onAgain={start}
          onMenu={() => setPhase('menu')}
        />
        <div className="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-20 py-12 md:py-16 space-y-10">
          <div>
            <p className="text-[#C9A84C] text-[10px] tracking-[0.3em] uppercase mb-6">Your Shift, Decision by Decision</p>
            <div className="space-y-4">
              {history.map(({ s, c }) => (
                <div key={s.id} className={`bg-white rounded-3xl border p-6 ${c.best ? 'border-[#4a7c59]/30' : 'border-red-300/40'}`}>
                  <div className="flex items-center gap-3 mb-2">
                    <i className={`text-base ${c.best ? 'ri-checkbox-circle-line text-[#4a7c59]' : 'ri-close-circle-line text-red-500'}`}></i>
                    <span className="text-[#8B8680] text-xs tracking-[0.15em] uppercase">{s.time}</span>
                    <span className="text-[#0A0A0A] text-base font-medium">{s.title}</span>
                  </div>
                  <p className="text-[#5C5752] text-sm mb-2"><span className="font-medium text-[#0A0A0A]">You chose:</span> {c.text}</p>
                  {!c.best && (
                    <p className="text-[#5C5752] text-sm mb-2"><span className="font-medium text-[#4a7c59]">Better call:</span> {s.choices.find(x => x.best)?.text}</p>
                  )}
                  <p className="text-[#5C5752] text-sm leading-relaxed">{s.lesson} <span className="text-[#8B8680]">{s.cite}</span></p>
                </div>
              ))}
            </div>
          </div>
          <LicensedAdminNote />
        </div>
      </div>
    );
  }

  if (!cur) return null;
  const last = idx + 1 >= queue.length;

  return (
    <div className="min-h-screen bg-[#F5F1E8]" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="bg-[#0A0A0A] px-6 md:px-12 lg:px-20 py-5 sticky top-0 z-40">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex items-center justify-between gap-4 mb-4">
            <button
              onClick={() => setPhase('menu')}
              className="whitespace-nowrap inline-flex items-center gap-2 text-[#8B8680] hover:text-[#F5F1E8] text-xs tracking-[0.2em] uppercase transition-all cursor-pointer"
            >
              <i className="ri-close-line"></i>
              Clock Out
            </button>
            <p className="text-[#C9A84C] text-xs tracking-[0.2em] uppercase">{cur.time}</p>
            <p className="text-[#8B8680] text-xs tracking-[0.2em] uppercase">{idx + 1} / {queue.length}</p>
          </div>
          <MeterBars meters={meters} last={chosen ? prev : null} />
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 md:px-8 py-10 md:py-14">
        <div className="bg-white rounded-3xl border border-[#0A0A0A]/8 p-7 md:p-9">
          <p className="text-[#C9A84C] text-[10px] tracking-[0.3em] uppercase mb-2">{cur.time}</p>
          <h2 className="text-[#0A0A0A] text-2xl md:text-3xl font-light mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>{cur.title}</h2>
          <p className="text-[#3A3632] text-sm md:text-base leading-[1.85] mb-7">{cur.situation}</p>

          <div className="space-y-3">
            {cur.choices.map((c, i) => {
              let style = 'border-[#0A0A0A]/10 bg-[#F5F1E8]/60 text-[#3A3632] hover:border-[#C9A84C]/60 cursor-pointer';
              if (chosen) {
                if (c === chosen) style = c.best ? 'border-[#4a7c59] bg-[#4a7c59]/10 text-[#2f5a3b] cursor-default' : 'border-red-400 bg-red-50 text-red-700 cursor-default';
                else if (c.best) style = 'border-[#4a7c59]/50 bg-[#4a7c59]/5 text-[#4a7c59] cursor-default';
                else style = 'border-[#0A0A0A]/6 bg-[#F5F1E8]/40 text-[#8B8680] opacity-50 cursor-default';
              }
              return (
                <button
                  key={i}
                  onClick={() => choose(c)}
                  disabled={!!chosen}
                  className={`whitespace-normal w-full text-left px-5 py-4 rounded-xl border text-sm leading-relaxed transition-all duration-200 ${style}`}
                >
                  <span className="font-semibold mr-2">{String.fromCharCode(65 + i)}.</span>
                  {c.text}
                </button>
              );
            })}
          </div>

          {chosen && (
            <div className="mt-6">
              <div className={`p-5 rounded-xl ${chosen.best ? 'bg-[#4a7c59]/8' : 'bg-red-50'}`}>
                <p className={`text-xs font-semibold tracking-[0.15em] uppercase mb-2 ${chosen.best ? 'text-[#4a7c59]' : 'text-red-500'}`}>
                  {chosen.best ? 'Right call' : 'Not what the standards support'}
                </p>
                <p className="text-[#3A3632] text-sm leading-relaxed mb-3">{chosen.outcome}</p>
                <p className="text-[#5C5752] text-sm leading-relaxed">
                  <i className="ri-lightbulb-line text-[#C9A84C] mr-1"></i>
                  {cur.lesson} <span className="text-[#8B8680]">{cur.cite}</span>
                </p>
              </div>
              {collapsed && (
                <p className="mt-4 text-red-600 text-sm font-medium">
                  <i className="ri-alarm-warning-line mr-1"></i>
                  {METERS.find(m => m.key === collapsed)?.label} has collapsed — your shift ends here.
                </p>
              )}
              <button
                onClick={proceed}
                className="whitespace-nowrap mt-5 w-full inline-flex items-center justify-center gap-3 bg-[#0A0A0A] text-[#F5F1E8] text-xs tracking-[0.2em] uppercase px-8 py-4 rounded-full hover:bg-[#C9A84C] hover:text-[#0A0A0A] transition-all duration-300 cursor-pointer font-semibold"
              >
                {collapsed || last ? 'End Shift' : 'Next Situation'}
                <i className="ri-arrow-right-line"></i>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
