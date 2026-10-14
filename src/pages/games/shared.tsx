import { Link } from 'react-router-dom';
import type { Track } from '../tracks/config';

type HeroProps = {
  track: Track;
  titleTop: string;
  titleEm: string;
  blurb: string;
  stats: { value: string; label: string }[];
};

/** Dark intro band used by every game's start screen. */
export function GameHero({ track, titleTop, titleEm, blurb, stats }: HeroProps) {
  return (
    <div className="bg-[#0A0A0A] px-6 md:px-12 lg:px-20 py-16 md:py-24">
      <div className="max-w-screen-xl mx-auto">
        <Link
          to={`${track.basePath}/games`}
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
              {titleTop}
              <br />
              <span className="italic text-[#C9A84C]">{titleEm}</span>
            </h1>
          </div>
          <div className="max-w-sm">
            <p className="text-[#8B8680] text-sm leading-relaxed mb-6">{blurb}</p>
            <div className="grid grid-cols-3 gap-4">
              {stats.map(s => (
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
  );
}

type ResultsProps = {
  track: Track;
  icon: string;
  kicker: string;
  title: string;
  subtitle: React.ReactNode;
  stats: { value: string; label: string }[];
  onAgain: () => void;
  onMenu: () => void;
};

/** Dark results band shared by the game end screens. */
export function ResultsHero({ track, icon, kicker, title, subtitle, stats, onAgain, onMenu }: ResultsProps) {
  return (
    <div className="bg-[#0A0A0A] px-6 md:px-12 lg:px-20 py-16 md:py-20">
      <div className="max-w-screen-xl mx-auto text-center">
        <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-2xl bg-[#C9A84C]/15 border border-[#C9A84C]/30 mb-6">
          <i className={`${icon} text-[#C9A84C] text-3xl`}></i>
        </div>
        <p className="text-[#C9A84C] text-[10px] tracking-[0.3em] uppercase mb-2">{kicker}</p>
        <h2 className="text-[#F5F1E8] text-4xl md:text-6xl font-light mb-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>{title}</h2>
        <p className="text-[#8B8680] text-sm mb-8">{subtitle}</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-10">
          {stats.map(s => (
            <div key={s.label} className="bg-white/5 rounded-2xl p-4">
              <p className="text-[#F5F1E8] text-2xl font-light mb-1" style={{ fontFamily: 'Cormorant Garamond, serif' }}>{s.value}</p>
              <p className="text-[#C9A84C] text-[10px] tracking-[0.2em] uppercase">{s.label}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={onAgain}
            className="whitespace-nowrap inline-flex items-center gap-3 bg-[#C9A84C] text-[#0A0A0A] text-xs tracking-[0.2em] uppercase px-8 py-4 rounded-full hover:bg-[#F5F1E8] transition-all duration-300 cursor-pointer font-semibold"
          >
            Play Again
            <i className="ri-refresh-line"></i>
          </button>
          <button
            onClick={onMenu}
            className="whitespace-nowrap text-xs tracking-[0.2em] uppercase px-8 py-4 rounded-full border border-white/30 text-white hover:bg-white/10 transition-all cursor-pointer"
          >
            Back to Start
          </button>
          <Link
            to={`${track.basePath}/games`}
            className="whitespace-nowrap text-xs tracking-[0.2em] uppercase px-8 py-4 rounded-full border border-white/30 text-white hover:bg-white/10 transition-all cursor-pointer"
          >
            All Games
          </Link>
          <Link
            to={`${track.basePath}/practice-exams`}
            className="whitespace-nowrap text-xs tracking-[0.2em] uppercase px-8 py-4 rounded-full border border-white/30 text-white hover:bg-white/10 transition-all cursor-pointer"
          >
            Practice Exams
          </Link>
        </div>
      </div>
    </div>
  );
}
