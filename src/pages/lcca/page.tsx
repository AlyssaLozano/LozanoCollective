import { useState } from 'react';
import { Link } from 'react-router-dom';
import { lccaDomains } from '@/mocks/lccaContent';

type AnswerMap = Record<string, number>;
type RevealMap = Record<string, boolean>;
type ViewMode = 'home' | 'study';

type DomainType = typeof lccaDomains[number];

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
function ScenarioCard({ scenario }: { scenario: DomainType['scenarios'][number] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-3xl border border-[#C9A84C]/20 bg-[#0A0A0A]/3 overflow-hidden">
      <div className="px-8 py-6">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#C9A84C]/15 shrink-0">
            <i className="ri-discuss-line text-[#C9A84C] text-lg"></i>
          </div>
          <div>
            <p className="text-[#C9A84C] text-[10px] tracking-[0.25em] uppercase mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>Scenario Discussion</p>
            <h4 className="text-[#0A0A0A] text-xl font-light" style={{ fontFamily: 'Cormorant Garamond, serif' }}>{scenario.title}</h4>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 mb-4 border border-[#0A0A0A]/6">
          <p className="text-[#C9A84C] text-[10px] tracking-[0.2em] uppercase mb-2 font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>The Situation</p>
          <p className="text-[#3A3632] text-sm leading-[1.85]">{scenario.situation}</p>
        </div>

        <div className="bg-[#C9A84C]/8 rounded-2xl px-6 py-4 mb-5 border border-[#C9A84C]/20">
          <p className="text-[#C9A84C] text-[10px] tracking-[0.2em] uppercase mb-1 font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>Discussion Question</p>
          <p className="text-[#0A0A0A] text-sm font-medium leading-relaxed">{scenario.question}</p>
        </div>

        <button
          onClick={() => setOpen(v => !v)}
          className="whitespace-nowrap inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[#C9A84C] border border-[#C9A84C]/30 rounded-full px-5 py-2.5 hover:bg-[#C9A84C]/10 transition-all cursor-pointer"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          <i className={`${open ? 'ri-eye-off-line' : 'ri-eye-line'} text-sm`}></i>
          {open ? 'Hide Discussion' : 'Reveal Discussion'}
        </button>
      </div>

      {open && (
        <div className="border-t border-[#C9A84C]/15 bg-[#0A0A0A] px-8 py-7">
          <p className="text-[#C9A84C] text-[10px] tracking-[0.25em] uppercase mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>Expert Discussion</p>
          <p className="text-[#F5F1E8]/85 text-sm leading-[1.9] mb-6">{scenario.discussion}</p>
          <div className="flex items-start gap-3 bg-[#C9A84C]/10 border border-[#C9A84C]/25 rounded-2xl px-5 py-4">
            <i className="ri-lightbulb-line text-[#C9A84C] text-base mt-0.5 shrink-0"></i>
            <div>
              <p className="text-[#C9A84C] text-[10px] tracking-[0.2em] uppercase mb-1 font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>Key Takeaway</p>
              <p className="text-[#F5F1E8]/80 text-sm leading-relaxed">{scenario.keyTakeaway}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ── STUDY MATERIAL VIEW ──────────────────────────────────────────────────────
function StudyMaterialView({
  domain,
  onStartQuiz,
  onNextDomain,
}: {
  domain: DomainType;
  onStartQuiz: () => void;
  onNextDomain?: () => void;
}) {
  return (
    <div className="space-y-8">
      {/* Content sections */}
      {domain.sections.map((sec, i) => (
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

      {/* Scenario discussions */}
      {domain.scenarios && domain.scenarios.length > 0 && (
        <div className="space-y-5">
          <div className="flex items-center gap-4">
            <p className="text-[#C9A84C] text-[10px] tracking-[0.3em] uppercase shrink-0" style={{ fontFamily: 'Inter, sans-serif' }}>
              Real-World Scenarios
            </p>
            <div className="flex-1 h-px bg-[#0A0A0A]/10"></div>
            <span className="text-[#8B8680] text-[10px] shrink-0">{domain.scenarios.length} scenarios</span>
          </div>
          {domain.scenarios.map(scenario => (
            <ScenarioCard key={scenario.id} scenario={scenario} />
          ))}
        </div>
      )}

      {/* CTA to quiz */}
      <div className="bg-[#0A0A0A] rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="text-[#C9A84C] text-[10px] tracking-[0.3em] uppercase mb-2">Ready to Test Yourself?</p>
          <h3 className="text-[#F5F1E8] text-2xl font-light" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            Take the Domain {domain.number} Quiz — {domain.quiz.length} Questions
          </h3>
        </div>
        <button
          onClick={onStartQuiz}
          className="whitespace-nowrap inline-flex items-center gap-3 bg-[#C9A84C] text-[#0A0A0A] text-xs tracking-[0.2em] uppercase px-8 py-4 rounded-full hover:bg-[#F5F1E8] transition-all duration-300 cursor-pointer font-semibold shrink-0"
        >
          Start Quiz
          <i className="ri-arrow-right-line"></i>
        </button>
      </div>

      {onNextDomain && (
        <div className="flex justify-end">
          <button
            onClick={onNextDomain}
            className="whitespace-nowrap inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[#5C5752] hover:text-[#0A0A0A] transition-all cursor-pointer"
          >
            Next: Domain {domain.number + 1}
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>
      )}
    </div>
  );
}

// ── MAIN PAGE ────────────────────────────────────────────────────────────────
export default function LCCAPage() {
  const [view, setView] = useState<ViewMode>('home');
  const [activeDomainId, setActiveDomainId] = useState<string>(lccaDomains[0].id);
  const [studyTab, setStudyTab] = useState<'material' | 'quiz'>('material');
  const [answers, setAnswers] = useState<AnswerMap>({});
  const [revealed, setRevealed] = useState<RevealMap>({});

  const activeDomain = lccaDomains.find(d => d.id === activeDomainId)!;

  const domainScore = (domainId: string) => {
    const domain = lccaDomains.find(d => d.id === domainId)!;
    const correct = domain.quiz.filter(q => answers[q.id] === q.correct).length;
    const answered = domain.quiz.filter(q => answers[q.id] !== undefined).length;
    return { correct, answered, total: domain.quiz.length };
  };

  const totalQuestions = lccaDomains.reduce((a, d) => a + d.quiz.length, 0);
  const totalAnswered = Object.keys(answers).length;
  const totalCorrect = lccaDomains.reduce((a, d) => a + d.quiz.filter(q => answers[q.id] === q.correct).length, 0);

  const handleAnswer = (qId: string, idx: number) => {
    if (answers[qId] !== undefined) return;
    setAnswers(prev => ({ ...prev, [qId]: idx }));
    setRevealed(prev => ({ ...prev, [qId]: true }));
  };

  const openDomain = (id: string, tab: 'material' | 'quiz' = 'material') => {
    setActiveDomainId(id);
    setStudyTab(tab);
    setView('study');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // ── HOME VIEW ──────────────────────────────────────────────────────────────
  if (view === 'home') {
    return (
      <div className="min-h-screen bg-[#F5F1E8]" style={{ fontFamily: 'Inter, sans-serif' }}>
        {/* Hero */}
        <div className="bg-[#0A0A0A] px-6 md:px-12 lg:px-20 pt-16 md:pt-24 pb-0">
          <div className="max-w-screen-xl mx-auto">
            <div className="flex flex-col lg:flex-row lg:items-end gap-12 lg:gap-16">
              {/* Left */}
              <div className="flex-1 pb-16 md:pb-24">
                <div className="inline-flex items-center gap-3 bg-[#C9A84C]/10 border border-[#C9A84C]/30 rounded-full px-5 py-2 mb-8">
                  <i className="ri-heart-fill text-[#C9A84C] text-sm"></i>
                  <span className="text-[#C9A84C] text-xs tracking-[0.2em] uppercase font-medium">100% Free — For Foster Families &amp; Caregivers</span>
                </div>
                <h1 className="text-[#F5F1E8] text-4xl md:text-6xl lg:text-7xl font-light leading-[1.1] mb-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  Licensed Child Care
                  <br />
                  <span className="italic text-[#C9A84C]">Administrator</span>
                  <br />
                  Study Guide
                </h1>
                <p className="text-[#8B8680] text-sm md:text-base leading-relaxed max-w-xl mb-8">
                  A comprehensive, in-depth study resource offered completely free of charge — especially for those dedicated to supporting foster children and vulnerable families in Texas. Each domain includes detailed study material, real-world scenario discussions, and a practice quiz.
                </p>
                {totalAnswered > 0 && (
                  <div className="max-w-md mb-8">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[#8B8680] text-xs tracking-[0.2em] uppercase">Overall Progress</span>
                      <span className="text-[#C9A84C] text-xs">{totalAnswered}/{totalQuestions} answered — {totalCorrect} correct</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-1.5">
                      <div className="bg-[#C9A84C] h-1.5 rounded-full transition-all duration-500" style={{ width: `${(totalAnswered / totalQuestions) * 100}%` }} />
                    </div>
                  </div>
                )}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { value: '7', label: 'Core Domains' },
                    { value: `${totalQuestions}`, label: 'Practice Questions' },
                    { value: 'Texas HHS', label: 'Governing Body' },
                    { value: 'Free', label: 'Cost' },
                  ].map(s => (
                    <div key={s.label} className="bg-white/5 rounded-2xl p-5">
                      <p className="text-[#F5F1E8] text-2xl font-light mb-1" style={{ fontFamily: 'Cormorant Garamond, serif' }}>{s.value}</p>
                      <p className="text-[#C9A84C] text-[10px] tracking-[0.2em] uppercase">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
              {/* Right — photo */}
              <div className="lg:w-[380px] xl:w-[440px] shrink-0">
                <div className="relative w-full" style={{ height: '520px' }}>
                  <img
                    src="https://raw.githubusercontent.com/AlyssaLozano/LozanoCollective/main/public/images/Alyssa%20Phillips.jpg"
                    alt="Alyssa Lozano"
                    className="w-full h-full object-cover object-top rounded-t-3xl"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent rounded-t-3xl"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-7 space-y-3">
                    <Link
                      to="/"
                      className="whitespace-nowrap w-full flex items-center justify-between gap-4 bg-[#C9A84C] text-[#0A0A0A] rounded-2xl px-6 py-5 hover:bg-[#F5F1E8] transition-all duration-300 cursor-pointer group"
                    >
                      <div>
                        <p className="text-[10px] tracking-[0.25em] uppercase font-semibold mb-0.5" style={{ fontFamily: 'Inter, sans-serif' }}>Meet the Creator</p>
                        <p className="text-lg font-light leading-tight" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Learn about Alyssa Lozano —<br />the person who made this free</p>
                      </div>
                      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0A0A0A]/15 group-hover:bg-[#0A0A0A]/25 transition-all shrink-0">
                        <i className="ri-arrow-right-line text-lg"></i>
                      </div>
                    </Link>
                    <Link
                      to="/ventures/inner-empire-consulting"
                      className="whitespace-nowrap w-full flex items-center justify-between gap-4 bg-white/10 border border-white/20 text-[#F5F1E8] rounded-2xl px-6 py-4 hover:bg-white/20 hover:border-white/40 transition-all duration-300 cursor-pointer group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#C9A84C]/20 shrink-0">
                          <i className="ri-calendar-check-line text-[#C9A84C] text-sm"></i>
                        </div>
                        <p className="text-sm font-light" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Set Up a Consultation</p>
                      </div>
                      <i className="ri-arrow-right-line text-[#C9A84C] text-sm group-hover:translate-x-1 transition-transform"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Practice Exams CTA */}
        <div className="bg-[#F5F1E8] px-6 md:px-12 lg:px-20 py-10">
          <div className="max-w-screen-xl mx-auto">
            <div className="bg-[#0A0A0A]/4 border border-[#C9A84C]/20 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-[#C9A84C]/15 border border-[#C9A84C]/20 shrink-0">
                  <i className="ri-file-list-3-line text-[#C9A84C] text-2xl"></i>
                </div>
                <div>
                  <p className="text-[#C9A84C] text-[10px] tracking-[0.3em] uppercase mb-1">Ready to Test Yourself?</p>
                  <h3 className="text-[#0A0A0A] text-2xl font-light" style={{ fontFamily: 'Cormorant Garamond, serif' }}>5 Full-Length Practice Exams</h3>
                  <p className="text-[#5C5752] text-sm mt-1">25 questions each · 125 total · All 7 domains · Scored with explanations</p>
                </div>
              </div>
              <Link
                to="/lcca/practice-exams"
                className="whitespace-nowrap inline-flex items-center gap-3 bg-[#0A0A0A] text-[#F5F1E8] text-xs tracking-[0.2em] uppercase px-8 py-4 rounded-full hover:bg-[#C9A84C] hover:text-[#0A0A0A] transition-all duration-300 cursor-pointer font-semibold shrink-0"
              >
                Take a Practice Exam
                <i className="ri-arrow-right-line"></i>
              </Link>
            </div>
          </div>
        </div>

        {/* Domain cards */}
        <div className="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-24">
          <p className="text-[#C9A84C] text-[10px] tracking-[0.3em] uppercase mb-10">Select a Domain to Begin</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lccaDomains.map(domain => {
              const { correct, answered, total } = domainScore(domain.id);
              const allDone = answered === total;
              const pct = answered > 0 ? Math.round((correct / total) * 100) : null;
              return (
                <div key={domain.id} className="bg-white rounded-3xl border border-[#0A0A0A]/6 hover:border-[#C9A84C]/40 transition-all duration-300 overflow-hidden">
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-5">
                      <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-[#C9A84C]/10 border border-[#C9A84C]/20">
                        <i className={`${domain.icon} text-[#C9A84C] text-xl`}></i>
                      </div>
                      {allDone && answered > 0 && (
                        <span className={`text-xs font-semibold px-3 py-1 rounded-full ${pct! >= 80 ? 'bg-[#4a7c59]/10 text-[#4a7c59]' : 'bg-[#C9A84C]/10 text-[#C9A84C]'}`}>
                          {pct}%
                        </span>
                      )}
                    </div>
                    <p className="text-[#C9A84C] text-[10px] tracking-[0.25em] uppercase mb-2">Domain {domain.number}</p>
                    <h3 className="text-[#0A0A0A] text-xl font-light leading-tight mb-3" style={{ fontFamily: 'Cormorant Garamond, serif' }}>{domain.title}</h3>
                    <p className="text-[#5C5752] text-sm leading-relaxed mb-2">{domain.summary}</p>
                    <p className="text-[#8B8680] text-xs mb-5">
                      {domain.scenarios?.length || 0} scenario{(domain.scenarios?.length || 0) !== 1 ? 's' : ''} included
                    </p>
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
                        onClick={() => openDomain(domain.id, 'material')}
                        className="whitespace-nowrap flex-1 text-center text-xs tracking-[0.15em] uppercase py-3 rounded-full bg-[#0A0A0A] text-[#F5F1E8] hover:bg-[#C9A84C] hover:text-[#0A0A0A] transition-all duration-300 cursor-pointer font-medium"
                      >
                        Study
                      </button>
                      <button
                        onClick={() => openDomain(domain.id, 'quiz')}
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
        </div>

        {/* Disclaimer */}
        <div className="bg-[#0A0A0A]/4 border-t border-[#0A0A0A]/8 px-6 md:px-12 lg:px-20 py-10">
          <div className="max-w-screen-xl mx-auto">
            <p className="text-[#C9A84C] text-[10px] tracking-[0.3em] uppercase mb-4">Disclaimer</p>
            <div className="bg-white rounded-2xl border border-[#0A0A0A]/6 p-6 md:p-8">
              <p className="text-[#5C5752] text-xs leading-[1.9]">
                This study guide is an independent educational resource and is not affiliated with, endorsed by, or approved by the Texas Health and Human Services Commission (HHSC), Child Care Regulation (CCR), the University of Texas at Arlington (UTA), or any state or federal agency.<br /><br />
                The content is based on the author's interpretation of 26 Texas Administrative Code Chapter 748 (Minimum Standards for General Residential Operations) as of the publication date. Rules, standards, and exam content are subject to change. The official and authoritative source is the current Minimum Standards published by HHSC at hhs.texas.gov.<br /><br />
                Practice questions are designed to reinforce study of the Minimum Standards and do not reflect actual exam questions, exam format, or the exam question bank used by HHSC or UTA. No guarantee is made that studying this guide will result in passing the LCCA exam.<br /><br />
                This guide does not constitute legal, regulatory, or professional advice. Users should consult HHSC Child Care Regulation, qualified legal counsel, or licensed professionals for guidance on specific compliance, licensure, or operational questions.<br /><br />
                The author and publisher disclaim any liability for errors, omissions, or outcomes related to use of this material.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-[#0A0A0A]/8 px-6 md:px-12 lg:px-20 py-8">
          <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[#8B8680] text-xs">Free resource for foster families and child care professionals in Texas.</p>
            <div className="flex items-center gap-6">
              <Link to="/" className="whitespace-nowrap inline-flex items-center gap-2 text-[#C9A84C] text-xs tracking-[0.15em] uppercase hover:underline cursor-pointer transition-all">
                <i className="ri-user-heart-line text-sm"></i>
                Who made this?
              </Link>
              <p className="text-[#C9A84C] text-sm italic shrink-0" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Lozano Collective</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ── STUDY VIEW ─────────────────────────────────────────────────────────────
  const { correct: dCorrect, answered: dAnswered, total: dTotal } = domainScore(activeDomainId);
  const currentDomainIdx = lccaDomains.findIndex(d => d.id === activeDomainId);

  return (
    <div className="min-h-screen bg-[#F5F1E8]" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Top bar */}
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
              onClick={() => setStudyTab('material')}
              className={`whitespace-nowrap px-6 py-2 rounded-full text-xs tracking-[0.15em] uppercase transition-all duration-300 cursor-pointer ${studyTab === 'material' ? 'bg-[#C9A84C] text-[#0A0A0A] font-semibold' : 'text-[#8B8680] hover:text-[#F5F1E8]'}`}
            >
              Study Material
            </button>
            <button
              onClick={() => setStudyTab('quiz')}
              className={`whitespace-nowrap px-6 py-2 rounded-full text-xs tracking-[0.15em] uppercase transition-all duration-300 cursor-pointer ${studyTab === 'quiz' ? 'bg-[#C9A84C] text-[#0A0A0A] font-semibold' : 'text-[#8B8680] hover:text-[#F5F1E8]'}`}
            >
              Quiz ({dTotal} Qs)
            </button>
          </div>
          <div className="hidden md:flex items-center gap-3">
            {lccaDomains.map((d, i) => {
              const { answered, total } = domainScore(d.id);
              const done = answered === total && answered > 0;
              return (
                <button
                  key={d.id}
                  onClick={() => { setActiveDomainId(d.id); setStudyTab('material'); }}
                  className={`whitespace-nowrap w-7 h-7 flex items-center justify-center rounded-full text-xs font-medium transition-all cursor-pointer ${d.id === activeDomainId ? 'bg-[#C9A84C] text-[#0A0A0A]' : done ? 'bg-[#4a7c59]/30 text-[#4a7c59]' : 'bg-white/10 text-[#8B8680] hover:bg-white/20'}`}
                >
                  {i + 1}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Domain header */}
      <div className="bg-[#0A0A0A] px-6 md:px-12 lg:px-20 pb-12">
        <div className="max-w-screen-xl mx-auto">
          <p className="text-[#C9A84C] text-[10px] tracking-[0.3em] uppercase mb-3">Domain {activeDomain.number} of {lccaDomains.length}</p>
          <h2 className="text-[#F5F1E8] text-3xl md:text-5xl font-light leading-tight mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            {activeDomain.title}
          </h2>
          <p className="text-[#8B8680] text-sm leading-relaxed max-w-2xl">{activeDomain.summary}</p>
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
        {/* STUDY MATERIAL */}
        {studyTab === 'material' && (
          <StudyMaterialView
            domain={activeDomain}
            onStartQuiz={() => setStudyTab('quiz')}
            onNextDomain={currentDomainIdx < lccaDomains.length - 1 ? () => openDomain(lccaDomains[currentDomainIdx + 1].id, 'material') : undefined}
          />
        )}

        {/* QUIZ */}
        {studyTab === 'quiz' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-[#0A0A0A] text-2xl font-light" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Domain {activeDomain.number} Quiz
              </h3>
              <span className="text-[#5C5752] text-xs tracking-[0.2em] uppercase">{dAnswered}/{dTotal} answered</span>
            </div>

            {activeDomain.quiz.map((q, qi) => {
              const selected = answers[q.id];
              const isAnswered = selected !== undefined;
              const isCorrect = selected === q.correct;
              return (
                <div
                  key={q.id}
                  className={`rounded-3xl border p-8 transition-all duration-300 ${isAnswered ? isCorrect ? 'border-[#4a7c59]/30 bg-[#4a7c59]/5' : 'border-red-300/30 bg-red-50/40' : 'border-[#0A0A0A]/8 bg-white'}`}
                >
                  <div className="flex items-start gap-4 mb-6">
                    <span className="shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-[#0A0A0A]/6 text-[#0A0A0A] text-sm font-medium" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                      {qi + 1}
                    </span>
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
                        <p className={`text-xs font-semibold tracking-[0.15em] uppercase mb-1 ${isCorrect ? 'text-[#4a7c59]' : 'text-red-500'}`}>
                          {isCorrect ? 'Correct' : 'Incorrect'}
                        </p>
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
                  <p className="text-[#C9A84C] text-[10px] tracking-[0.3em] uppercase mb-2">Domain {activeDomain.number} Complete</p>
                  <p className="text-[#F5F1E8] text-5xl font-light mb-1" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                    {Math.round((dCorrect / dTotal) * 100)}%
                  </p>
                  <p className="text-[#8B8680] text-sm">{dCorrect} of {dTotal} correct</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => {
                      const newAnswers = { ...answers };
                      const newRevealed = { ...revealed };
                      activeDomain.quiz.forEach(q => { delete newAnswers[q.id]; delete newRevealed[q.id]; });
                      setAnswers(newAnswers);
                      setRevealed(newRevealed);
                    }}
                    className="whitespace-nowrap text-xs tracking-[0.2em] uppercase px-6 py-3 rounded-full border border-white/20 text-[#8B8680] hover:text-[#F5F1E8] hover:border-white/40 transition-all cursor-pointer"
                  >
                    Retake
                  </button>
                  {currentDomainIdx < lccaDomains.length - 1 && (
                    <button
                      onClick={() => openDomain(lccaDomains[currentDomainIdx + 1].id, 'material')}
                      className="whitespace-nowrap inline-flex items-center gap-2 bg-[#C9A84C] text-[#0A0A0A] text-xs tracking-[0.2em] uppercase px-6 py-3 rounded-full hover:bg-[#F5F1E8] transition-all cursor-pointer font-semibold"
                    >
                      Next Domain
                      <i className="ri-arrow-right-line"></i>
                    </button>
                  )}
                  {currentDomainIdx === lccaDomains.length - 1 && (
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
                onClick={() => setStudyTab('material')}
                className="whitespace-nowrap inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[#5C5752] hover:text-[#0A0A0A] transition-all cursor-pointer"
              >
                <i className="ri-arrow-left-line"></i>
                Back to Study Material
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Disclaimer */}
      <div className="bg-[#0A0A0A]/4 border-t border-[#0A0A0A]/8 px-6 md:px-12 lg:px-20 py-10">
        <div className="max-w-screen-xl mx-auto">
          <p className="text-[#C9A84C] text-[10px] tracking-[0.3em] uppercase mb-4">Disclaimer</p>
          <div className="bg-white rounded-2xl border border-[#0A0A0A]/6 p-6 md:p-8">
            <p className="text-[#5C5752] text-xs leading-[1.9]">
              This study guide is an independent educational resource and is not affiliated with, endorsed by, or approved by the Texas Health and Human Services Commission (HHSC), Child Care Regulation (CCR), the University of Texas at Arlington (UTA), or any state or federal agency.<br /><br />
              The content is based on the author's interpretation of 26 Texas Administrative Code Chapter 748 (Minimum Standards for General Residential Operations) as of the publication date. Rules, standards, and exam content are subject to change. The official and authoritative source is the current Minimum Standards published by HHSC at hhs.texas.gov.<br /><br />
              Practice questions are designed to reinforce study of the Minimum Standards and do not reflect actual exam questions, exam format, or the exam question bank used by HHSC or UTA. No guarantee is made that studying this guide will result in passing the LCCA exam.<br /><br />
              This guide does not constitute legal, regulatory, or professional advice. Users should consult HHSC Child Care Regulation, qualified legal counsel, or licensed professionals for guidance on specific compliance, licensure, or operational questions.<br /><br />
              The author and publisher disclaim any liability for errors, omissions, or outcomes related to use of this material.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-[#0A0A0A]/8 px-6 md:px-12 lg:px-20 py-8">
        <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#8B8680] text-xs">Free resource for foster families and child care professionals in Texas.</p>
          <div className="flex items-center gap-6">
            <Link to="/" className="whitespace-nowrap inline-flex items-center gap-2 text-[#C9A84C] text-xs tracking-[0.15em] uppercase hover:underline cursor-pointer transition-all">
              <i className="ri-user-heart-line text-sm"></i>
              Who made this?
            </Link>
            <p className="text-[#C9A84C] text-sm italic shrink-0" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Lozano Collective</p>
          </div>
        </div>
      </div>
    </div>
  );
}
