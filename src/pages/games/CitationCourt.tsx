import { useState } from 'react';
import LicensedAdminNote from '../lcca/LicensedAdminNote';
import { shuffle, readBest, writeBest, bestKey, type Track } from '../tracks/config';
import type { CitationItem, Weight } from '@/mocks/gameTypes';
import { GameHero, ResultsHero } from './shared';

type Phase = 'menu' | 'playing' | 'over';

const ROUND = 15;
const WEIGHTS: Weight[] = ['High', 'Medium-High', 'Medium', 'Medium-Low', 'Low'];
const WEIGHT_STYLE: Record<Weight, { bg: string; text: string; ring: string; hover: string }> = {
  High: { bg: 'bg-[#8B3A3A]', text: 'text-[#8B3A3A]', ring: 'border-[#8B3A3A]', hover: 'hover:bg-[#8B3A3A]' },
  'Medium-High': { bg: 'bg-[#B8643A]', text: 'text-[#B8643A]', ring: 'border-[#B8643A]', hover: 'hover:bg-[#B8643A]' },
  Medium: { bg: 'bg-[#C9A84C]', text: 'text-[#9a7d2e]', ring: 'border-[#C9A84C]', hover: 'hover:bg-[#C9A84C]' },
  'Medium-Low': { bg: 'bg-[#6b8f71]', text: 'text-[#6b8f71]', ring: 'border-[#6b8f71]', hover: 'hover:bg-[#6b8f71]' },
  Low: { bg: 'bg-[#4a7c59]', text: 'text-[#4a7c59]', ring: 'border-[#4a7c59]', hover: 'hover:bg-[#4a7c59]' },
};

type Verdict = 'exact' | 'close' | 'off';

function rankFor(pct: number) {
  if (pct >= 85) return { title: 'Chief Inspector', icon: 'ri-scales-3-line' };
  if (pct >= 65) return { title: 'Senior Inspector', icon: 'ri-medal-line' };
  if (pct >= 40) return { title: 'Field Inspector', icon: 'ri-search-eye-line' };
  return { title: 'Trainee Inspector', icon: 'ri-book-open-line' };
}

export default function CitationCourt({ track }: { track: Track }) {
  const KEY = bestKey(track.id, 'citation-court');
  const items = track.gameData.citations;
  const [phase, setPhase] = useState<Phase>('menu');
  const [queue, setQueue] = useState<CitationItem[]>([]);
  const [idx, setIdx] = useState(0);
  const [ruled, setRuled] = useState<Weight | null>(null);
  const [verdict, setVerdict] = useState<Verdict | null>(null);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [exact, setExact] = useState(0);
  const [close, setClose] = useState(0);
  const [missed, setMissed] = useState<{ item: CitationItem; ruled: Weight }[]>([]);
  const [best, setBest] = useState(() => readBest(KEY));
  const [newBest, setNewBest] = useState(false);

  const cur = queue[idx];

  const start = () => {
    setQueue(shuffle(items).slice(0, ROUND));
    setIdx(0);
    setRuled(null);
    setVerdict(null);
    setScore(0);
    setStreak(0);
    setBestStreak(0);
    setExact(0);
    setClose(0);
    setMissed([]);
    setNewBest(false);
    setPhase('playing');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const rule = (w: Weight) => {
    if (!cur || ruled) return;
    const gap = Math.abs(WEIGHTS.indexOf(w) - WEIGHTS.indexOf(cur.weight));
    setRuled(w);
    if (gap === 0) {
      const next = streak + 1;
      setVerdict('exact');
      setExact(e => e + 1);
      setStreak(next);
      setBestStreak(b => Math.max(b, next));
      setScore(s => s + 100 + Math.min(next - 1, 5) * 10);
    } else if (gap === 1) {
      setVerdict('close');
      setClose(c => c + 1);
      setStreak(0);
      setScore(s => s + 40);
      setMissed(m => [...m, { item: cur, ruled: w }]);
    } else {
      setVerdict('off');
      setStreak(0);
      setMissed(m => [...m, { item: cur, ruled: w }]);
    }
  };

  const next = () => {
    if (idx + 1 >= queue.length) {
      if (score > readBest(KEY)) {
        writeBest(KEY, score);
        setBest(score);
        setNewBest(score > 0);
      }
      setPhase('over');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    setIdx(i => i + 1);
    setRuled(null);
    setVerdict(null);
  };

  if (phase === 'menu') {
    return (
      <div className="min-h-screen bg-[#F5F1E8]" style={{ fontFamily: 'Inter, sans-serif' }}>
        <GameHero
          track={track}
          titleTop="Citation"
          titleEm="Court"
          blurb={`You're the inspector. Read each finding and rule on how serious it is under ${track.chapterLabel}: High, Medium-High, Medium, Medium-Low or Low. Weights decide how fast violations must be fixed — and how they're cited.`}
          stats={[
            { value: `${ROUND}`, label: 'Cases' },
            { value: '5', label: 'Weights' },
            { value: `${best}`, label: 'Best Score' },
          ]}
        />
        <div className="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-20">
          <div className="bg-[#0A0A0A] rounded-3xl p-8 md:p-12 mb-10">
            <p className="text-[#C9A84C] text-[10px] tracking-[0.3em] uppercase mb-6">Court Rules</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: 'ri-scales-3-line', title: 'Exact Ruling', body: 'Rule the exact weight the standard assigns: 100 points, plus streak bonuses for back-to-back exact rulings.' },
                { icon: 'ri-focus-2-line', title: 'Close Call', body: 'One level off earns 40 points and a note to review. Two or more levels off earns nothing.' },
                { icon: 'ri-book-open-line', title: 'Read the Record', body: 'After each ruling you see the real weight, what the rule requires and its citation. Review misses at the end.' },
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
            Open Court
            <i className="ri-scales-3-line"></i>
          </button>
          <div className="mt-10">
            <LicensedAdminNote />
          </div>
        </div>
      </div>
    );
  }

  if (phase === 'over') {
    const pct = Math.round(((exact + close * 0.4) / Math.max(queue.length, 1)) * 100);
    const rank = rankFor(pct);
    return (
      <div className="min-h-screen bg-[#F5F1E8]" style={{ fontFamily: 'Inter, sans-serif' }}>
        <ResultsHero
          track={track}
          icon={rank.icon}
          kicker="Court Adjourned"
          title={rank.title}
          subtitle={
            <>
              {exact} exact · {close} close · {queue.length - exact - close} off
              {newBest && <span className="text-[#C9A84C] font-semibold"> · New personal best!</span>}
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
              <p className="text-[#C9A84C] text-[10px] tracking-[0.3em] uppercase mb-6">Rulings to Review</p>
              <div className="space-y-5">
                {missed.map(({ item, ruled: r }, i) => (
                  <div key={`${item.id}-${i}`} className="bg-white rounded-3xl border border-[#0A0A0A]/8 p-7">
                    <p className="text-[#0A0A0A] text-base leading-relaxed font-medium mb-4">{item.scenario}</p>
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="text-xs text-[#8B8680]">You ruled</span>
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${WEIGHT_STYLE[r].ring} ${WEIGHT_STYLE[r].text}`}>{r}</span>
                      <span className="text-xs text-[#8B8680]">Actual</span>
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full text-white ${WEIGHT_STYLE[item.weight].bg}`}>{item.weight}</span>
                    </div>
                    <p className="text-[#5C5752] text-sm leading-relaxed">{item.why} <span className="text-[#8B8680]">{item.cite}</span></p>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-3xl border border-[#4a7c59]/30 p-8 text-center">
              <i className="ri-checkbox-circle-line text-[#4a7c59] text-3xl"></i>
              <p className="text-[#0A0A0A] text-lg font-light mt-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Every ruling exact — nothing to review.</p>
            </div>
          )}
          <LicensedAdminNote />
        </div>
      </div>
    );
  }

  if (!cur) return null;

  return (
    <div className="min-h-screen bg-[#F5F1E8]" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="bg-[#0A0A0A] px-6 md:px-12 lg:px-20 py-5 sticky top-0 z-40">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between gap-4">
          <button
            onClick={() => setPhase('menu')}
            className="whitespace-nowrap inline-flex items-center gap-2 text-[#8B8680] hover:text-[#F5F1E8] text-xs tracking-[0.2em] uppercase transition-all cursor-pointer"
          >
            <i className="ri-close-line"></i>
            Leave Court
          </button>
          <p className="text-[#8B8680] text-xs tracking-[0.2em] uppercase">Case {idx + 1} / {queue.length}</p>
          <div className="text-right">
            <p className="text-[#F5F1E8] text-lg font-light leading-none" style={{ fontFamily: 'Cormorant Garamond, serif' }}>{score}</p>
            <p className="text-[#8B8680] text-[10px] tracking-[0.2em] uppercase mt-1">
              {streak > 1 ? <span className="text-[#C9A84C]"><i className="ri-fire-line"></i> {streak} streak</span> : 'Score'}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 md:px-8 py-10 md:py-14">
        <div className="bg-white rounded-3xl border border-[#0A0A0A]/8 p-7 md:p-9">
          <p className="text-[#C9A84C] text-[10px] tracking-[0.3em] uppercase mb-3">The Finding</p>
          <p className="text-[#0A0A0A] text-xl md:text-2xl leading-snug font-light mb-8" style={{ fontFamily: 'Cormorant Garamond, serif' }}>{cur.scenario}</p>
          <p className="text-[#8B8680] text-xs tracking-[0.2em] uppercase mb-3">Your ruling — how heavy is this deficiency?</p>
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-2">
            {WEIGHTS.map(w => {
              const isActual = ruled && w === cur.weight;
              const isMine = ruled === w;
              let style = `border ${WEIGHT_STYLE[w].ring} ${WEIGHT_STYLE[w].text} ${WEIGHT_STYLE[w].hover} hover:text-white cursor-pointer bg-white`;
              if (ruled) {
                if (isActual) style = `${WEIGHT_STYLE[w].bg} text-white border ${WEIGHT_STYLE[w].ring} cursor-default`;
                else if (isMine) style = 'border border-red-400 bg-red-50 text-red-600 cursor-default';
                else style = 'border border-[#0A0A0A]/8 bg-[#F5F1E8]/40 text-[#8B8680] opacity-50 cursor-default';
              }
              return (
                <button
                  key={w}
                  onClick={() => rule(w)}
                  disabled={!!ruled}
                  className={`whitespace-normal px-2 py-4 rounded-xl text-xs font-semibold tracking-[0.05em] transition-all duration-200 ${style}`}
                >
                  {w}
                </button>
              );
            })}
          </div>

          {ruled && verdict && (
            <div className="mt-6">
              <div className={`p-4 rounded-xl ${verdict === 'exact' ? 'bg-[#4a7c59]/8' : verdict === 'close' ? 'bg-[#C9A84C]/10' : 'bg-red-50'}`}>
                <p className={`text-xs font-semibold tracking-[0.15em] uppercase mb-1 ${verdict === 'exact' ? 'text-[#4a7c59]' : verdict === 'close' ? 'text-[#9a7d2e]' : 'text-red-500'}`}>
                  {verdict === 'exact' ? 'Exact ruling' : verdict === 'close' ? `Close — actual weight is ${cur.weight}` : `Off — actual weight is ${cur.weight}`}
                </p>
                <p className="text-[#5C5752] text-sm leading-relaxed">{cur.why} <span className="text-[#8B8680]">{cur.cite}</span></p>
              </div>
              <button
                onClick={next}
                className="whitespace-nowrap mt-5 w-full inline-flex items-center justify-center gap-3 bg-[#0A0A0A] text-[#F5F1E8] text-xs tracking-[0.2em] uppercase px-8 py-4 rounded-full hover:bg-[#C9A84C] hover:text-[#0A0A0A] transition-all duration-300 cursor-pointer font-semibold"
              >
                {idx + 1 >= queue.length ? 'Adjourn Court' : 'Next Case'}
                <i className="ri-arrow-right-line"></i>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
