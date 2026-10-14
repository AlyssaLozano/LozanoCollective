import { Link } from 'react-router-dom';
import LicensedAdminNote from '../lcca/LicensedAdminNote';
import { tracks } from '../tracks/config';
import { lcpaaDomains as domains } from '@/mocks/lcpaaContent';

const track = tracks.lcpaa;

export default function LCPAAPage() {
  const totalQuestions = track.exams.reduce((a, e) => a + e.questions.length, 0);
  const deadlines = track.gameData.deadlines;

  return (
    <div className="min-h-screen bg-[#F5F1E8]" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Hero */}
      <div className="bg-[#0A0A0A] px-6 md:px-12 lg:px-20 pt-16 md:pt-24 pb-16 md:pb-24">
        <div className="max-w-screen-xl mx-auto">
          <Link
            to="/admin"
            className="whitespace-nowrap inline-flex items-center gap-2 text-[#8B8680] hover:text-[#C9A84C] text-xs tracking-[0.2em] uppercase mb-10 transition-all cursor-pointer"
          >
            <i className="ri-arrow-left-line"></i>
            All Licenses
          </Link>
          <div className="inline-flex items-center gap-3 bg-[#C9A84C]/10 border border-[#C9A84C]/30 rounded-full px-5 py-2 mb-8">
            <i className="ri-heart-fill text-[#C9A84C] text-sm"></i>
            <span className="text-[#C9A84C] text-xs tracking-[0.2em] uppercase font-medium">100% Free — For Foster Care &amp; Adoption Professionals</span>
          </div>
          <h1 className="text-[#F5F1E8] text-4xl md:text-6xl lg:text-7xl font-light leading-[1.1] mb-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            Licensed Child-Placing
            <br />
            <span className="italic text-[#C9A84C]">Agency Administrator</span>
            <br />
            Exam Prep
          </h1>
          <p className="text-[#8B8680] text-sm md:text-base leading-relaxed max-w-xl mb-8">
            A free study guide, practice exams and study games built from Chapter 749 of the Texas Minimum Standards for Child-Placing Agencies (revised August 2026) — foster home screenings, placement, service planning, child rights, discipline, medical care and more.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl">
            {[
              { value: `${track.exams.length}`, label: 'Practice Exams' },
              { value: `${totalQuestions}`, label: 'Questions' },
              { value: `${domains.length}`, label: 'Study Domains' },
              { value: 'Ch. 749', label: 'Standards' },
            ].map(s => (
              <div key={s.label} className="bg-white/5 rounded-2xl p-5">
                <p className="text-[#F5F1E8] text-2xl font-light mb-1" style={{ fontFamily: 'Cormorant Garamond, serif' }}>{s.value}</p>
                <p className="text-[#C9A84C] text-[10px] tracking-[0.2em] uppercase">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Start here / Practice / Games */}
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-20 py-12 space-y-6">
        <Link
          to={`${track.basePath}/games/admin-shift`}
          className="group flex flex-col md:flex-row items-start md:items-center justify-between gap-6 bg-[#0A0A0A] rounded-3xl p-8 border border-[#C9A84C]/30 hover:border-[#C9A84C] transition-all"
        >
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-[#C9A84C]/15 border border-[#C9A84C]/30 shrink-0">
              <i className="ri-gamepad-line text-[#C9A84C] text-2xl"></i>
            </div>
            <div>
              <p className="text-[#C9A84C] text-[10px] tracking-[0.3em] uppercase mb-1">Start Here</p>
              <h3 className="text-[#F5F1E8] text-2xl font-light" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Play the Admin Game before you take the practice test</h3>
              <p className="text-[#8B8680] text-sm mt-1">Admin Shift: run a day as a CPA administrator and learn Chapter 749 by making the calls.</p>
            </div>
          </div>
          <span className="whitespace-nowrap inline-flex items-center gap-3 bg-[#C9A84C] text-[#0A0A0A] text-xs tracking-[0.2em] uppercase px-8 py-4 rounded-full group-hover:bg-[#F5F1E8] transition-all font-semibold shrink-0">
            Play Admin Shift
            <i className="ri-arrow-right-line"></i>
          </span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-[#0A0A0A]/4 border border-[#C9A84C]/20 rounded-3xl p-8 flex flex-col justify-between gap-6">
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-[#C9A84C]/15 border border-[#C9A84C]/20 shrink-0">
                <i className="ri-flashlight-line text-[#C9A84C] text-2xl"></i>
              </div>
              <div>
                <p className="text-[#C9A84C] text-[10px] tracking-[0.3em] uppercase mb-1">Study Games</p>
                <h3 className="text-[#0A0A0A] text-2xl font-light" style={{ fontFamily: 'Cormorant Garamond, serif' }}>4 Ways to Play</h3>
                <p className="text-[#5C5752] text-sm mt-1">Admin Shift · Deadline Dash · Citation Court · Compliance Sprint</p>
              </div>
            </div>
            <Link
              to={`${track.basePath}/games`}
              className="whitespace-nowrap inline-flex items-center justify-center gap-3 bg-[#0A0A0A] text-[#F5F1E8] text-xs tracking-[0.2em] uppercase px-8 py-4 rounded-full hover:bg-[#C9A84C] hover:text-[#0A0A0A] transition-all duration-300 cursor-pointer font-semibold"
            >
              Open the Games
              <i className="ri-arrow-right-line"></i>
            </Link>
          </div>
          <div className="bg-[#0A0A0A]/4 border border-[#C9A84C]/20 rounded-3xl p-8 flex flex-col justify-between gap-6">
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-[#C9A84C]/15 border border-[#C9A84C]/20 shrink-0">
                <i className="ri-file-list-3-line text-[#C9A84C] text-2xl"></i>
              </div>
              <div>
                <p className="text-[#C9A84C] text-[10px] tracking-[0.3em] uppercase mb-1">Ready to Test Yourself?</p>
                <h3 className="text-[#0A0A0A] text-2xl font-light" style={{ fontFamily: 'Cormorant Garamond, serif' }}>{track.exams.length} Practice Exams</h3>
                <p className="text-[#5C5752] text-sm mt-1">{totalQuestions} questions · Scored with explanations and section citations</p>
              </div>
            </div>
            <Link
              to={`${track.basePath}/practice-exams`}
              className="whitespace-nowrap inline-flex items-center justify-center gap-3 bg-[#0A0A0A] text-[#F5F1E8] text-xs tracking-[0.2em] uppercase px-8 py-4 rounded-full hover:bg-[#C9A84C] hover:text-[#0A0A0A] transition-all duration-300 cursor-pointer font-semibold"
            >
              Take a Practice Exam
              <i className="ri-arrow-right-line"></i>
            </Link>
          </div>
          <div className="bg-[#0A0A0A]/4 border border-[#C9A84C]/20 rounded-3xl p-8 flex flex-col justify-between gap-6">
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-[#C9A84C]/15 border border-[#C9A84C]/20 shrink-0">
                <i className="ri-book-open-line text-[#C9A84C] text-2xl"></i>
              </div>
              <div>
                <p className="text-[#C9A84C] text-[10px] tracking-[0.3em] uppercase mb-1">Learn the Rules</p>
                <h3 className="text-[#0A0A0A] text-2xl font-light" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Study Guide</h3>
                <p className="text-[#5C5752] text-sm mt-1">{domains.length} domains · study material, real-world scenarios and a quiz for each</p>
              </div>
            </div>
            <Link
              to={`${track.basePath}/study`}
              className="whitespace-nowrap inline-flex items-center justify-center gap-3 bg-[#0A0A0A] text-[#F5F1E8] text-xs tracking-[0.2em] uppercase px-8 py-4 rounded-full hover:bg-[#C9A84C] hover:text-[#0A0A0A] transition-all duration-300 cursor-pointer font-semibold"
            >
              Open the Study Guide
              <i className="ri-arrow-right-line"></i>
            </Link>
          </div>
        </div>

        <LicensedAdminNote />
      </div>

      {/* Cheat sheet */}
      {deadlines.length > 0 && (
        <div className="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-20 pb-16">
          <p className="text-[#C9A84C] text-[10px] tracking-[0.3em] uppercase mb-6">Quick Reference</p>
          <details className="bg-white rounded-3xl border border-[#0A0A0A]/6 overflow-hidden group">
            <summary className="cursor-pointer list-none px-8 py-6 flex items-center justify-between gap-4">
              <div>
                <h3 className="text-[#0A0A0A] text-xl font-light" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Key Numbers &amp; Deadlines Cheat Sheet</h3>
                <p className="text-[#8B8680] text-xs mt-1">{deadlines.length} timeframes, limits and ages from Chapter 749 — the same facts used in Deadline Dash</p>
              </div>
              <i className="ri-arrow-down-s-line text-[#C9A84C] text-2xl group-open:rotate-180 transition-transform"></i>
            </summary>
            <div className="px-8 pb-8 border-t border-[#0A0A0A]/6">
              <div className="divide-y divide-[#0A0A0A]/6">
                {deadlines.map(d => (
                  <div key={d.id} className="py-3 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-6">
                    <p className="text-[#3A3632] text-sm">{d.prompt}</p>
                    <p className="shrink-0 text-sm">
                      <span className="text-[#0A0A0A] font-semibold">{d.answer}</span>
                      <span className="text-[#8B8680] text-xs ml-2">{d.cite}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </details>
        </div>
      )}

      {/* Disclaimer */}
      <div className="bg-[#0A0A0A]/4 border-t border-[#0A0A0A]/8 px-6 md:px-12 lg:px-20 py-10">
        <div className="max-w-screen-xl mx-auto">
          <p className="text-[#C9A84C] text-[10px] tracking-[0.3em] uppercase mb-4">Disclaimer</p>
          <div className="bg-white rounded-2xl border border-[#0A0A0A]/6 p-6 md:p-8">
            <p className="text-[#5C5752] text-xs leading-[1.9]">
              This resource is an independent educational tool and is not affiliated with, endorsed by, or approved by the Texas Health and Human Services Commission (HHSC), Child Care Regulation (CCR), or any state or federal agency. Content is based on the author&apos;s interpretation of 26 Texas Administrative Code Chapter 749 (Minimum Standards for Child-Placing Agencies) as revised August 2026. Rules and exam content are subject to change; the official and authoritative source is the current Minimum Standards published by HHSC.
              <br /><br />
              Practice questions and games reinforce study of the Minimum Standards and do not reflect actual exam questions, format, or question bank. No guarantee is made that using this resource will result in passing the exam. This is not legal, regulatory or professional advice.
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-[#0A0A0A]/8 px-6 md:px-12 lg:px-20 py-8">
        <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#8B8680] text-xs">Free resource for foster care and adoption professionals in Texas.</p>
          <div className="flex items-center gap-6">
            <Link to="/admin" className="whitespace-nowrap inline-flex items-center gap-2 text-[#C9A84C] text-xs tracking-[0.15em] uppercase hover:underline cursor-pointer transition-all">
              <i className="ri-swap-line text-sm"></i>
              Switch to LCCA
            </Link>
            <p className="text-[#C9A84C] text-sm italic shrink-0" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Lozano Collective</p>
          </div>
        </div>
      </div>
    </div>
  );
}
