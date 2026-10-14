import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import LicensedAdminNote from '../lcca/LicensedAdminNote';
import { bestKey, readBest, type GameId, type Track } from '../tracks/config';

type GameCard = {
  id: GameId;
  path: string;
  icon: string;
  title: string;
  tagline: string;
  body: string;
  badge?: string;
  count: string;
};

export default function GamesHub({ track }: { track: Track }) {
  const d = track.gameData;
  const cards: GameCard[] = useMemo(
    () => [
      {
        id: 'admin-shift',
        path: 'admin-shift',
        icon: 'ri-time-line',
        title: 'Admin Shift',
        tagline: `A day as the ${track.role}`,
        body: 'Make the call in realistic situations. Every choice moves Child Safety, Compliance, Staff Morale and Budget — and teaches the rule behind the right answer.',
        badge: 'Start here',
        count: `${d.shift.length} situations`,
      },
      {
        id: 'deadline-dash',
        path: 'deadline-dash',
        icon: 'ri-run-line',
        title: 'Deadline Dash',
        tagline: 'Outrun the clock',
        body: 'Rapid-fire timeframes, limits and ages. Answer fast to pull ahead of the Deadline — miss and it closes in.',
        count: `${d.deadlines.length} facts`,
      },
      {
        id: 'citation-court',
        path: 'citation-court',
        icon: 'ri-scales-3-line',
        title: 'Citation Court',
        tagline: 'You are the inspector',
        body: 'Read the finding and rule on its weight: High, Medium-High, Medium, Medium-Low or Low. Learn how seriously the standards treat each violation.',
        count: `${d.citations.length} cases`,
      },
      {
        id: 'sprint',
        path: 'sprint',
        icon: 'ri-flashlight-line',
        title: 'Compliance Sprint',
        tagline: 'Beat the clock, keep your lives',
        body: 'A fast quiz round drawn from every practice exam. Build streaks, spend your 50/50 wisely and review what you missed.',
        count: `${track.pool.length} questions`,
      },
    ],
    [track, d]
  );

  return (
    <div className="min-h-screen bg-[#F5F1E8]" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="bg-[#0A0A0A] px-6 md:px-12 lg:px-20 py-16 md:py-24">
        <div className="max-w-screen-xl mx-auto">
          <Link
            to={track.basePath}
            className="whitespace-nowrap inline-flex items-center gap-2 text-[#8B8680] hover:text-[#C9A84C] text-xs tracking-[0.2em] uppercase mb-10 transition-all cursor-pointer"
          >
            <i className="ri-arrow-left-line"></i>
            {track.short} Home
          </Link>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div>
              <div className="inline-flex items-center gap-3 bg-[#C9A84C]/10 border border-[#C9A84C]/30 rounded-full px-5 py-2 mb-6">
                <i className="ri-gamepad-line text-[#C9A84C] text-sm"></i>
                <span className="text-[#C9A84C] text-xs tracking-[0.2em] uppercase font-medium">{track.short} Exam Prep</span>
              </div>
              <h1 className="text-[#F5F1E8] text-4xl md:text-6xl lg:text-7xl font-light leading-[1.1]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Study
                <br />
                <span className="italic text-[#C9A84C]">Games</span>
              </h1>
            </div>
            <p className="text-[#8B8680] text-sm leading-relaxed max-w-sm">
              Four ways to learn {track.chapterLabel} by playing. Start with Admin Shift, then take a practice exam when you feel ready. Best scores are saved on this device.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-20">
        <p className="text-[#C9A84C] text-[10px] tracking-[0.3em] uppercase mb-10">Choose a Game</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map(c => {
            const best = readBest(bestKey(track.id, c.id));
            return (
              <div key={c.id} className="bg-white rounded-3xl border border-[#0A0A0A]/6 hover:border-[#C9A84C]/40 transition-all duration-300 p-8 flex flex-col">
                <div className="flex items-start justify-between mb-5">
                  <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-[#C9A84C]/10 border border-[#C9A84C]/20">
                    <i className={`${c.icon} text-[#C9A84C] text-2xl`}></i>
                  </div>
                  {c.badge && <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#C9A84C] text-[#0A0A0A]">{c.badge}</span>}
                </div>
                <p className="text-[#C9A84C] text-[10px] tracking-[0.25em] uppercase mb-2">{c.tagline}</p>
                <h3 className="text-[#0A0A0A] text-2xl font-light leading-tight mb-3" style={{ fontFamily: 'Cormorant Garamond, serif' }}>{c.title}</h3>
                <p className="text-[#5C5752] text-sm leading-relaxed mb-4 flex-1">{c.body}</p>
                <p className="text-[#8B8680] text-xs mb-6">
                  {c.count}
                  {best > 0 && <span> · Best score <span className="text-[#C9A84C] font-semibold">{best}</span></span>}
                </p>
                <Link
                  to={`${track.basePath}/games/${c.path}`}
                  className="whitespace-nowrap w-full text-center text-xs tracking-[0.15em] uppercase py-3 rounded-full bg-[#0A0A0A] text-[#F5F1E8] hover:bg-[#C9A84C] hover:text-[#0A0A0A] transition-all duration-300 cursor-pointer font-medium"
                >
                  {best > 0 ? 'Play Again' : 'Play'}
                </Link>
              </div>
            );
          })}
        </div>

        <div className="mt-12 bg-[#0A0A0A]/4 border border-[#C9A84C]/20 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-[#C9A84C] text-[10px] tracking-[0.3em] uppercase mb-1">Ready to Test Yourself?</p>
            <h3 className="text-[#0A0A0A] text-2xl font-light" style={{ fontFamily: 'Cormorant Garamond, serif' }}>{track.exams.length} Full-Length Practice Exams</h3>
          </div>
          <Link
            to={`${track.basePath}/practice-exams`}
            className="whitespace-nowrap inline-flex items-center gap-3 bg-[#0A0A0A] text-[#F5F1E8] text-xs tracking-[0.2em] uppercase px-8 py-4 rounded-full hover:bg-[#C9A84C] hover:text-[#0A0A0A] transition-all duration-300 cursor-pointer font-semibold shrink-0"
          >
            Take a Practice Exam
            <i className="ri-arrow-right-line"></i>
          </Link>
        </div>

        <div className="mt-10">
          <LicensedAdminNote />
        </div>
      </div>
    </div>
  );
}
