import { Link } from 'react-router-dom';
import LicensedAdminNote from '../lcca/LicensedAdminNote';
import { tracks, type Track } from './config';

const cards: { track: Track; icon: string; audience: string; blurb: string }[] = [
  {
    track: tracks.lcca,
    icon: 'ri-building-2-line',
    audience: 'Residential child care',
    blurb: 'For people becoming administrators of general residential operations (GRO). Built on Chapter 748 of the Texas Minimum Standards.',
  },
  {
    track: tracks.lcpaa,
    icon: 'ri-home-heart-line',
    audience: 'Foster care & adoption agencies',
    blurb: 'For people becoming administrators of child-placing agencies (CPA). Built on Chapter 749 of the Texas Minimum Standards.',
  },
];

export default function AdminChooser() {
  return (
    <div className="min-h-screen bg-[#F5F1E8]" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="bg-[#0A0A0A] px-6 md:px-12 lg:px-20 py-16 md:py-24">
        <div className="max-w-screen-xl mx-auto">
          <Link
            to="/"
            className="whitespace-nowrap inline-flex items-center gap-2 text-[#8B8680] hover:text-[#C9A84C] text-xs tracking-[0.2em] uppercase mb-10 transition-all cursor-pointer"
          >
            <i className="ri-arrow-left-line"></i>
            Lozano Collective
          </Link>
          <div className="inline-flex items-center gap-3 bg-[#C9A84C]/10 border border-[#C9A84C]/30 rounded-full px-5 py-2 mb-6">
            <i className="ri-heart-fill text-[#C9A84C] text-sm"></i>
            <span className="text-[#C9A84C] text-xs tracking-[0.2em] uppercase font-medium">100% Free Exam Prep</span>
          </div>
          <h1 className="text-[#F5F1E8] text-4xl md:text-6xl lg:text-7xl font-light leading-[1.1] mb-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            Licensed
            <br />
            <span className="italic text-[#C9A84C]">Administrator</span> Prep
          </h1>
          <p className="text-[#8B8680] text-sm md:text-base leading-relaxed max-w-xl">
            Study guides, practice exams and games for the Texas administrator licensing exams. Choose the license you&apos;re working toward.
          </p>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-20">
        <p className="text-[#C9A84C] text-[10px] tracking-[0.3em] uppercase mb-10">Choose Your License</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map(({ track, icon, audience, blurb }) => (
            <Link
              key={track.id}
              to={track.basePath}
              className="group bg-white rounded-3xl border border-[#0A0A0A]/6 hover:border-[#C9A84C]/60 transition-all duration-300 p-8 md:p-10 flex flex-col"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-[#C9A84C]/10 border border-[#C9A84C]/20 mb-6">
                <i className={`${icon} text-[#C9A84C] text-2xl`}></i>
              </div>
              <p className="text-[#C9A84C] text-[10px] tracking-[0.25em] uppercase mb-2">{audience}</p>
              <h2 className="text-[#0A0A0A] text-4xl md:text-5xl font-light mb-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>{track.short}</h2>
              <p className="text-[#0A0A0A] text-lg font-light mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>{track.name}</p>
              <p className="text-[#5C5752] text-sm leading-relaxed mb-6 flex-1">{blurb}</p>
              <p className="text-[#8B8680] text-xs mb-6">
                Study guide · {track.exams.length} practice exams · 4 games · {track.chapterLabel}
              </p>
              <span className="whitespace-nowrap w-full text-center text-xs tracking-[0.15em] uppercase py-3.5 rounded-full bg-[#0A0A0A] text-[#F5F1E8] group-hover:bg-[#C9A84C] group-hover:text-[#0A0A0A] transition-all duration-300 font-medium">
                Start {track.short} Prep
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-12">
          <LicensedAdminNote />
        </div>
      </div>

      <div className="border-t border-[#0A0A0A]/8 px-6 md:px-12 lg:px-20 py-8">
        <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#8B8680] text-xs">Independent study resource — not affiliated with HHSC, Child Care Regulation, or any state agency.</p>
          <p className="text-[#C9A84C] text-sm italic shrink-0" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Lozano Collective</p>
        </div>
      </div>
    </div>
  );
}
