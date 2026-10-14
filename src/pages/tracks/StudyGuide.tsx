import { useState } from 'react';
import { Link } from 'react-router-dom';
import type { StudyDomain, StudyScenario } from '@/mocks/studyTypes';
import LicensedAdminNote from '../lcca/LicensedAdminNote';
import type { Track } from './config';

type AnswerMap = Record<string, number>;
type RevealMap = Record<string, boolean>;
type ViewMode = 'home' | 'study';

// ── SECTION BODY RENDERER ────────────────────────────────────────────────────
function SectionBody({ body }: { body: string }) {
  return (
    <>
      {body.split('\n\n').map((para, pi) => {
        if (para.startsWith('•') || para.includes('\n•')) {
          const lines = para.split('\n');
          return (
            <div key={pi} className="mb-4">
              {lines.map((line, li) =>
                line.startsWith('•') ? (
                  <div key={li} className="flex items-start gap-3 mb-2">
                    <span className="text-[#C9A84C] text-xs mt-1 shrink-0">—</span>
                    <span className="text-[#3A3632] text-sm leading-relaxed">{line.replace('• ', '')}</span>
                  </div>
                ) : line.trim() ? (
                  <p key={li} className="text-[#3A3632] text-sm leading-relaxed mb-2 font-medium">{line}</p>
                ) : null
              )}
            </div>
          );
        }
        return <p key={pi} className="text-[#3A3632] text-sm leading-[1.9] mb-4">{para}</p>;
      })}
    </>
  );
}

// ── SCENARIO CARD ────────────────────────────────────────────────────────────
function ScenarioCard({ scenario }: { scenario: StudyScenario }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-3xl border border-[#C9A84C]/20 bg-[#0A0A0A]/3 overflow-hidden">
      <div className="px-8 py-6">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#C9A84C]/15 shrink-0">
            <i className="ri-discuss-line text-[#C9A84C] text-lg"></i>
          </div>
          <div>
            <p className="text-[#C9A84C] text-[10px] tracking-[0.25em] uppercase mb-1">Scenario Discussion</p>
            <h4 className="text-[#0A0A0A] text-xl font-light" style={{ fontFamily: 'Cormorant Garamond, serif' }}>{scenario.title}</h4>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-6 mb-4 border border-[#0A0A0A]/6">
          <p className="text-[#C9A84C] text-[10px] tracking-[0.2em] uppercase mb-2 font-medium">The Situation</p>
          <p className="text-[#3A3632] text-sm leading-[1.85]">{scenario.situation}</p>
        </div>
        <div className="bg-[#C9A84C]/8 rounded-2xl px-6 py-4 mb-5 border border-[#C9A84C]/20">
          <p className="text-[#C9A84C] text-[10px] tracking-[0.2em] uppercase mb-1 font-medium">Discussion Question</p>
          <p className="text-[#0A0A0A] text-sm font-medium leading-relaxed">{scenario.question}</p>
        </div>
        <button
          onClick={() => setOpen(v => !v)}
          className="whitespace-nowrap inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[#C9A84C] border border-[#C9A84C]/30 rounded-full px-5 py-2.5 hover:bg-[#C9A84C]/10 transition-all cursor-pointer"
        >
          <i className={`${open ? 'ri-eye-off-line' : 'ri-eye-line'} text-sm`}></i>
          {open ? 'Hide Discussion' : 'Reveal Discussion'}
        </button>
      </div>
      {open && (
        <div className="border-t border-[#C9A84C]/15 bg-[#0A0A0A] px-8 py-7">
          <p className="text-[#C9A84C] text-[10px] tracking-[0.25em] uppercase mb-3">Expert Discussion</p>
          <p className="text-[#F5F1E8]/85 text-sm leading-[1.9] mb-6">{scenario.discussion}</p>
          <div className="flex items-start gap-3 bg-[#C9A84C]/10 border border-[#C9A84C]/25 rounded-2xl px-5 py-4">
            <i className="ri-lightbulb-line text-[#C9A84C] text-base mt-0.5 shrink-0"></i>
            <div>
              <p className="text-[#C9A84C] text-[10px] tracking-[0.2em] uppercase mb-1 font-semibold">Key Takeaway</p>
              <p className="text-[#F5F1E8]/80 text-sm leading-relaxed">{scenario.keyTakeaway}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ── MAIN ─────────────────────────────────────────────────────────────────────
export default function StudyGuide({ track, domains }: { track: Track; domains: StudyDomain[] }) {
  const [view, setView] = useState<ViewMode>('home');
  const [activeId, setActiveId] = useState<string>(domains[0]?.id ?? '');
  const [tab, setTab] = useState<'material' | 'quiz'>('material');
  const [answers, setAnswers] = useState<AnswerMap>({});
  const [revealed, setRevealed] = useState<RevealMap>({});

  if (domains.length === 0) return null;
  const active = domains.find(d => d.id === activeId) ?? domains[0];
  const activeIdx = domains.findIndex(d => d.id === active.id);

  const score = (d: StudyDomain) => {
    const correct = d.quiz.filter(q => answers[q.id] === q.correct).length;
    const answered = d.quiz.filter(q => answers[q.id] !== undefined).length;
    return { correct, answered, total: d.quiz.length };
  };

  const totalQuestions = domains.reduce((a, d) => a + d.quiz.length, 0);
  const totalAnswered = Object.keys(answers).length;
  const totalCorrect = domains.reduce((a, d) => a + d.quiz.filter(q => answers[q.id] === q.correct).length, 0);

  const handleAnswer = (qId: string, idx: number) => {
    if (answers[qId] !== undefined) return;
    setAnswers(p => ({ ...p, [qId]: idx }));
    setRevealed(p => ({ ...p, [qId]: true }));
  };

  const open = (id: string, t: 'material' | 'quiz' = 'material') => {
    setActiveId(id);
    setTab(t);
    setView('study');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const Footer = (
    <div className="border-t border-[#0A0A0A]/8 px-6 md:px-12 lg:px-20 py-8">
      <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[#8B8680] text-xs">Free resource for foster care and adoption professionals in Texas.</p>
        <p className="text-[#C9A84C] text-sm italic shrink-0" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Lozano Collective</p>
      </div>
    </div>
  );

  const Disclaimer = (
    <div className="bg-[#0A0A0A]/4 border-t border-[#0A0A0A]/8 px-6 md:px-12 lg:px-20 py-10">
      <div className="max-w-screen-xl mx-auto">
        <p className="text-[#C9A84C] text-[10px] tracking-[0.3em] uppercase mb-4">Disclaimer</p>
        <div className="bg-white rounded-2xl border border-[#0A0A0A]/6 p-6 md:p-8">
          <p className="text-[#5C5752] text-xs leading-[1.9]">
            This study guide is an independent educational resource and is not affiliated with, endorsed by, or approved by the Texas Health and Human Services Commission (HHSC), Child Care Regulation (CCR), or any state or federal agency.
            <br /><br />
            Content is based on the author&apos;s interpretation of 26 Texas Administrative Code Chapter 749 (Minimum Standards for Child-Placing Agencies) as revised August 2026. Rules and exam content are subject to change; the official and authoritative source is the current Minimum Standards published by HHSC. Practice questions do not reflect actual exam questions, and no guarantee is made that studying this guide will result in passing the {track.short} exam. This guide is not legal, regulatory or professional advice.
          </p>
        </div>
      </div>
    </div>
  );

  // ── HOME ──
  if (view === 'home') {
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
                  <i className="ri-book-open-line text-[#C9A84C] text-sm"></i>
                  <span className="text-[#C9A84C] text-xs tracking-[0.2em] uppercase font-medium">{track.short} Exam Prep</span>
                </div>
                <h1 className="text-[#F5F1E8] text-4xl md:text-6xl lg:text-7xl font-light leading-[1.1]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  Study
                  <br />
                  <span className="italic text-[#C9A84C]">Guide</span>
                </h1>
              </div>
              <div className="max-w-sm">
                <p className="text-[#8B8680] text-sm leading-relaxed mb-6">
                  {domains.length} domains covering {track.chapterLabel} — detailed study material, real-world scenario discussions and a quiz for each domain.
                </p>
                {totalAnswered > 0 && (
                  <div className="mb-2">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[#8B8680] text-xs tracking-[0.2em] uppercase">Progress</span>
                      <span className="text-[#C9A84C] text-xs">{totalAnswered}/{totalQuestions} answered — {totalCorrect} correct</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-1.5">
                      <div className="bg-[#C9A84C] h-1.5 rounded-full transition-all duration-500" style={{ width: `${(totalAnswered / totalQuestions) * 100}%` }} />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-20 py-16">
          <Link
            to={`${track.basePath}/games/admin-shift`}
            className="group mb-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 bg-[#0A0A0A] rounded-3xl p-6 md:p-8 border border-[#C9A84C]/30 hover:border-[#C9A84C] transition-all"
          >
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-[#C9A84C]/15 border border-[#C9A84C]/30 shrink-0">
                <i className="ri-gamepad-line text-[#C9A84C] text-2xl"></i>
              </div>
              <div>
                <p className="text-[#C9A84C] text-[10px] tracking-[0.3em] uppercase mb-1">Warm Up</p>
                <h3 className="text-[#F5F1E8] text-xl md:text-2xl font-light" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Play the Admin Game after each domain</h3>
                <p className="text-[#8B8680] text-sm mt-1">Put the rules to work as the {track.role} in Admin Shift.</p>
              </div>
            </div>
            <span className="whitespace-nowrap inline-flex items-center gap-3 bg-[#C9A84C] text-[#0A0A0A] text-xs tracking-[0.2em] uppercase px-8 py-4 rounded-full group-hover:bg-[#F5F1E8] transition-all font-semibold shrink-0">
              Play Admin Shift
              <i className="ri-arrow-right-line"></i>
            </span>
          </Link>

          <p className="text-[#C9A84C] text-[10px] tracking-[0.3em] uppercase mb-10">Select a Domain to Begin</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {domains.map(d => {
              const { correct, answered, total } = score(d);
              const pct = answered > 0 ? Math.round((correct / total) * 100) : null;
              return (
                <div key={d.id} className="bg-white rounded-3xl border border-[#0A0A0A]/6 hover:border-[#C9A84C]/40 transition-all duration-300 overflow-hidden">
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-5">
                      <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-[#C9A84C]/10 border border-[#C9A84C]/20">
                        <i className={`${d.icon} text-[#C9A84C] text-xl`}></i>
                      </div>
                      {answered === total && pct !== null && (
                        <span className={`text-xs font-semibold px-3 py-1 rounded-full ${pct >= 80 ? 'bg-[#4a7c59]/10 text-[#4a7c59]' : 'bg-[#C9A84C]/10 text-[#C9A84C]'}`}>{pct}%</span>
                      )}
                    </div>
                    <p className="text-[#C9A84C] text-[10px] tracking-[0.25em] uppercase mb-2">Domain {d.number}</p>
                    <h3 className="text-[#0A0A0A] text-xl font-light leading-tight mb-3" style={{ fontFamily: 'Cormorant Garamond, serif' }}>{d.title}</h3>
                    <p className="text-[#5C5752] text-sm leading-relaxed mb-2">{d.summary}</p>
                    <p className="text-[#8B8680] text-xs mb-5">{d.scenarios.length} scenarios · {d.quiz.length} quiz questions</p>
                    {answered > 0 && (
                      <div className="mb-5">
                        <div className="flex justify-between text-[10px] text-[#8B8680] mb-1">
                          <span>Quiz progress</span>
                          <span>{correct}/{total} correct</span>
                        </div>
                        <div className="w-full bg-[#0A0A0A]/8 rounded-full h-1">
                          <div className="bg-[#C9A84C] h-1 rounded-full transition-all duration-500" style={{ width: `${(answered / total) * 100}%` }} />
                        </div>
                      </div>
                    )}
                    <div className="flex gap-3">
                      <button
                        onClick={() => open(d.id, 'material')}
                        className="whitespace-nowrap flex-1 text-center text-xs tracking-[0.15em] uppercase py-3 rounded-full bg-[#0A0A0A] text-[#F5F1E8] hover:bg-[#C9A84C] hover:text-[#0A0A0A] transition-all duration-300 cursor-pointer font-medium"
                      >
                        Study
                      </button>
                      <button
                        onClick={() => open(d.id, 'quiz')}
                        className="whitespace-nowrap flex-1 text-center text-xs tracking-[0.15em] uppercase py-3 rounded-full border border-[#0A0A0A]/15 text-[#5C5752] hover:border-[#C9A84C]/40 hover:text-[#C9A84C] transition-all duration-300 cursor-pointer"
                      >
                        {answered > 0 ? 'Retake Quiz' : 'Take Quiz'}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              to={`${track.basePath}/practice-exams`}
              className="whitespace-nowrap inline-flex items-center justify-between gap-3 bg-[#0A0A0A]/4 border border-[#C9A84C]/20 rounded-3xl px-8 py-6 hover:border-[#C9A84C] transition-all"
            >
              <span className="text-[#0A0A0A] text-xl font-light" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Take a Practice Exam</span>
              <i className="ri-arrow-right-line text-[#C9A84C] text-xl"></i>
            </Link>
            <Link
              to={`${track.basePath}/games`}
              className="whitespace-nowrap inline-flex items-center justify-between gap-3 bg-[#0A0A0A]/4 border border-[#C9A84C]/20 rounded-3xl px-8 py-6 hover:border-[#C9A84C] transition-all"
            >
              <span className="text-[#0A0A0A] text-xl font-light" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Play the Study Games</span>
              <i className="ri-arrow-right-line text-[#C9A84C] text-xl"></i>
            </Link>
          </div>

          <div className="mt-10">
            <LicensedAdminNote />
          </div>
        </div>
        {Disclaimer}
        {Footer}
      </div>
    );
  }

  // ── STUDY VIEW ──
  const { correct: dCorrect, answered: dAnswered, total: dTotal } = score(active);

  return (
    <div className="min-h-screen bg-[#F5F1E8]" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="bg-[#0A0A0A] px-6 md:px-12 lg:px-20 py-5 sticky top-0 z-40">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between gap-4">
          <button
            onClick={() => setView('home')}
            className="whitespace-nowrap inline-flex items-center gap-2 text-[#8B8680] hover:text-[#F5F1E8] text-xs tracking-[0.2em] uppercase transition-all cursor-pointer"
          >
            <i className="ri-arrow-left-line"></i>
            All Domains
          </button>
          <div className="flex items-center gap-1 bg-white/6 rounded-full p-1">
            <button
              onClick={() => setTab('material')}
              className={`whitespace-nowrap px-5 py-2 rounded-full text-xs tracking-[0.15em] uppercase transition-all duration-300 cursor-pointer ${tab === 'material' ? 'bg-[#C9A84C] text-[#0A0A0A] font-semibold' : 'text-[#8B8680] hover:text-[#F5F1E8]'}`}
            >
              Study Material
            </button>
            <button
              onClick={() => setTab('quiz')}
              className={`whitespace-nowrap px-5 py-2 rounded-full text-xs tracking-[0.15em] uppercase transition-all duration-300 cursor-pointer ${tab === 'quiz' ? 'bg-[#C9A84C] text-[#0A0A0A] font-semibold' : 'text-[#8B8680] hover:text-[#F5F1E8]'}`}
            >
              Quiz ({dTotal} Qs)
            </button>
          </div>
          <div className="hidden md:flex items-center gap-3">
            {domains.map((d, i) => {
              const s = score(d);
              const done = s.answered === s.total && s.answered > 0;
              return (
                <button
                  key={d.id}
                  onClick={() => { setActiveId(d.id); setTab('material'); }}
                  className={`whitespace-nowrap w-7 h-7 flex items-center justify-center rounded-full text-xs font-medium transition-all cursor-pointer ${d.id === active.id ? 'bg-[#C9A84C] text-[#0A0A0A]' : done ? 'bg-[#4a7c59]/30 text-[#4a7c59]' : 'bg-white/10 text-[#8B8680] hover:bg-white/20'}`}
                >
                  {i + 1}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="bg-[#0A0A0A] px-6 md:px-12 lg:px-20 pb-12">
        <div className="max-w-screen-xl mx-auto">
          <p className="text-[#C9A84C] text-[10px] tracking-[0.3em] uppercase mb-3">Domain {active.number} of {domains.length}</p>
          <h2 className="text-[#F5F1E8] text-3xl md:text-5xl font-light leading-tight mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>{active.title}</h2>
          <p className="text-[#8B8680] text-sm leading-relaxed max-w-2xl">{active.summary}</p>
          {dAnswered > 0 && (
            <div className="mt-5 max-w-xs">
              <div className="flex justify-between text-[10px] text-[#8B8680] mb-1.5">
                <span>Quiz: {dAnswered}/{dTotal} answered</span>
                <span>{dCorrect} correct</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-1">
                <div className="bg-[#C9A84C] h-1 rounded-full transition-all" style={{ width: `${(dAnswered / dTotal) * 100}%` }} />
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-20 py-12 md:py-16">
        {tab === 'material' && (
          <div className="space-y-8">
            {active.sections.map((sec, i) => (
              <div key={i} className="bg-white rounded-3xl border border-[#0A0A0A]/6 overflow-hidden">
                <div className="bg-[#0A0A0A]/4 px-8 py-5 border-b border-[#0A0A0A]/6">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 flex items-center justify-center rounded-full bg-[#C9A84C]/15 text-[#C9A84C] text-xs font-semibold shrink-0">{i + 1}</span>
                    <h3 className="text-[#0A0A0A] text-xl font-light" style={{ fontFamily: 'Cormorant Garamond, serif' }}>{sec.heading}</h3>
                  </div>
                </div>
                <div className="px-8 py-7">
                  <SectionBody body={sec.body} />
                </div>
              </div>
            ))}

            {active.scenarios.length > 0 && (
              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <p className="text-[#C9A84C] text-[10px] tracking-[0.3em] uppercase shrink-0">Real-World Scenarios</p>
                  <div className="flex-1 h-px bg-[#0A0A0A]/10"></div>
                  <span className="text-[#8B8680] text-[10px] shrink-0">{active.scenarios.length} scenarios</span>
                </div>
                {active.scenarios.map(s => <ScenarioCard key={s.id} scenario={s} />)}
              </div>
            )}

            <div className="bg-[#0A0A0A] rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <p className="text-[#C9A84C] text-[10px] tracking-[0.3em] uppercase mb-2">Ready to Test Yourself?</p>
                <h3 className="text-[#F5F1E8] text-2xl font-light" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  Take the Domain {active.number} Quiz — {active.quiz.length} Questions
                </h3>
              </div>
              <button
                onClick={() => { setTab('quiz'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="whitespace-nowrap inline-flex items-center gap-3 bg-[#C9A84C] text-[#0A0A0A] text-xs tracking-[0.2em] uppercase px-8 py-4 rounded-full hover:bg-[#F5F1E8] transition-all duration-300 cursor-pointer font-semibold shrink-0"
              >
                Start Quiz
                <i className="ri-arrow-right-line"></i>
              </button>
            </div>

            {activeIdx < domains.length - 1 && (
              <div className="flex justify-end">
                <button
                  onClick={() => open(domains[activeIdx + 1].id, 'material')}
                  className="whitespace-nowrap inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[#5C5752] hover:text-[#0A0A0A] transition-all cursor-pointer"
                >
                  Next: Domain {active.number + 1}
                  <i className="ri-arrow-right-line"></i>
                </button>
              </div>
            )}
          </div>
        )}

        {tab === 'quiz' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-[#0A0A0A] text-2xl font-light" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Domain {active.number} Quiz</h3>
              <span className="text-[#5C5752] text-xs tracking-[0.2em] uppercase">{dAnswered}/{dTotal} answered</span>
            </div>

            {active.quiz.map((q, qi) => {
              const selected = answers[q.id];
              const isAnswered = selected !== undefined;
              const isCorrect = selected === q.correct;
              return (
                <div
                  key={q.id}
                  className={`rounded-3xl border p-8 transition-all duration-300 ${isAnswered ? (isCorrect ? 'border-[#4a7c59]/30 bg-[#4a7c59]/5' : 'border-red-300/30 bg-red-50/40') : 'border-[#0A0A0A]/8 bg-white'}`}
                >
                  <div className="flex items-start gap-4 mb-6">
                    <span className="shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-[#0A0A0A]/6 text-[#0A0A0A] text-sm font-medium" style={{ fontFamily: 'Cormorant Garamond, serif' }}>{qi + 1}</span>
                    <p className="text-[#0A0A0A] text-base leading-relaxed font-medium">{q.question}</p>
                  </div>
                  <div className="space-y-3 ml-12">
                    {q.options.map((opt, idx) => {
                      let style = 'border-[#0A0A0A]/10 bg-[#F5F1E8]/60 text-[#3A3632] hover:border-[#C9A84C]/40 cursor-pointer';
                      if (isAnswered) {
                        if (idx === q.correct) style = 'border-[#4a7c59] bg-[#4a7c59]/10 text-[#4a7c59] font-medium cursor-default';
                        else if (idx === selected) style = 'border-red-400 bg-red-50 text-red-600 cursor-default';
                        else style = 'border-[#0A0A0A]/6 bg-[#F5F1E8]/40 text-[#8B8680] cursor-default opacity-50';
                      }
                      return (
                        <button
                          key={idx}
                          onClick={() => handleAnswer(q.id, idx)}
                          disabled={isAnswered}
                          className={`whitespace-normal w-full text-left px-5 py-3.5 rounded-xl border text-sm leading-relaxed transition-all duration-200 ${style}`}
                        >
                          <span className="font-semibold mr-2">{String.fromCharCode(65 + idx)}.</span>{opt}
                        </button>
                      );
                    })}
                  </div>
                  {revealed[q.id] && (
                    <div className="ml-12 mt-5 flex items-start gap-3 p-4 rounded-xl bg-[#0A0A0A]/4">
                      <i className={`text-base mt-0.5 shrink-0 ${isCorrect ? 'ri-checkbox-circle-line text-[#4a7c59]' : 'ri-close-circle-line text-red-500'}`}></i>
                      <div>
                        <p className={`text-xs font-semibold tracking-[0.15em] uppercase mb-1 ${isCorrect ? 'text-[#4a7c59]' : 'text-red-500'}`}>{isCorrect ? 'Correct' : 'Incorrect'}</p>
                        <p className="text-[#5C5752] text-sm leading-relaxed">{q.explanation}</p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}

            {dAnswered === dTotal && (
              <div className="bg-[#0A0A0A] rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <p className="text-[#C9A84C] text-[10px] tracking-[0.3em] uppercase mb-2">Domain {active.number} Complete</p>
                  <p className="text-[#F5F1E8] text-5xl font-light mb-1" style={{ fontFamily: 'Cormorant Garamond, serif' }}>{Math.round((dCorrect / dTotal) * 100)}%</p>
                  <p className="text-[#8B8680] text-sm">{dCorrect} of {dTotal} correct</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => {
                      const a = { ...answers };
                      const r = { ...revealed };
                      active.quiz.forEach(q => { delete a[q.id]; delete r[q.id]; });
                      setAnswers(a);
                      setRevealed(r);
                    }}
                    className="whitespace-nowrap text-xs tracking-[0.2em] uppercase px-6 py-3 rounded-full border border-white/20 text-[#8B8680] hover:text-[#F5F1E8] hover:border-white/40 transition-all cursor-pointer"
                  >
                    Retake
                  </button>
                  {activeIdx < domains.length - 1 ? (
                    <button
                      onClick={() => open(domains[activeIdx + 1].id, 'material')}
                      className="whitespace-nowrap inline-flex items-center gap-2 bg-[#C9A84C] text-[#0A0A0A] text-xs tracking-[0.2em] uppercase px-6 py-3 rounded-full hover:bg-[#F5F1E8] transition-all cursor-pointer font-semibold"
                    >
                      Next Domain
                      <i className="ri-arrow-right-line"></i>
                    </button>
                  ) : (
                    <button
                      onClick={() => setView('home')}
                      className="whitespace-nowrap inline-flex items-center gap-2 bg-[#C9A84C] text-[#0A0A0A] text-xs tracking-[0.2em] uppercase px-6 py-3 rounded-full hover:bg-[#F5F1E8] transition-all cursor-pointer font-semibold"
                    >
                      All Done — View Summary
                      <i className="ri-arrow-right-line"></i>
                    </button>
                  )}
                </div>
              </div>
            )}

            <div className="flex justify-start">
              <button
                onClick={() => setTab('material')}
                className="whitespace-nowrap inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[#5C5752] hover:text-[#0A0A0A] transition-all cursor-pointer"
              >
                <i className="ri-arrow-left-line"></i>
                Back to Study Material
              </button>
            </div>
          </div>
        )}
      </div>
      {Disclaimer}
      {Footer}
    </div>
  );
}
