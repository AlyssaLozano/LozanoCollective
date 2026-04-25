import { useState } from 'react';
import { Link } from 'react-router-dom';
import { lccaPracticeExams, PracticeExam } from '@/mocks/lccaExams';

type AnswerMap = Record<string, number>;
type RevealMap = Record<string, boolean>;
type ViewMode = 'list' | 'exam' | 'results';

function ExamView({
  exam,
  onBack,
}: {
  exam: PracticeExam;
  onBack: () => void;
}) {
  const [answers, setAnswers] = useState<AnswerMap>({});
  const [revealed, setRevealed] = useState<RevealMap>({});
  const [submitted, setSubmitted] = useState(false);

  const answered = Object.keys(answers).length;
  const total = exam.questions.length;
  const correct = exam.questions.filter(q => answers[q.id] === q.correct).length;
  const pct = submitted ? Math.round((correct / total) * 100) : 0;

  const handleAnswer = (qId: string, idx: number) => {
    if (submitted) return;
    setAnswers(prev => ({ ...prev, [qId]: idx }));
  };

  const handleSubmit = () => {
    const newRevealed: RevealMap = {};
    exam.questions.forEach(q => { newRevealed[q.id] = true; });
    setRevealed(newRevealed);
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReset = () => {
    setAnswers({});
    setRevealed({});
    setSubmitted(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F5F1E8]" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Top bar */}
      <div className="bg-[#0A0A0A] px-6 md:px-12 lg:px-20 py-5 sticky top-0 z-40">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between gap-4">
          <button
            onClick={onBack}
            className="whitespace-nowrap inline-flex items-center gap-2 text-[#8B8680] hover:text-[#F5F1E8] text-xs tracking-[0.2em] uppercase transition-all cursor-pointer"
          >
            <i className="ri-arrow-left-line"></i>
            All Exams
          </button>
          <div className="text-center">
            <p className="text-[#C9A84C] text-[10px] tracking-[0.25em] uppercase" style={{ fontFamily: 'Inter, sans-serif' }}>Practice Exam {exam.number}</p>
            <p className="text-[#F5F1E8] text-sm font-light" style={{ fontFamily: 'Cormorant Garamond, serif' }}>{exam.title}</p>
          </div>
          <div className="text-right">
            <p className="text-[#8B8680] text-xs">{answered}/{total} answered</p>
            {submitted && <p className="text-[#C9A84C] text-xs font-semibold">{correct} correct</p>}
          </div>
        </div>
      </div>

      {/* Score banner after submit */}
      {submitted && (
        <div className={`px-6 md:px-12 lg:px-20 py-8 ${pct >= 80 ? 'bg-[#4a7c59]' : pct >= 60 ? 'bg-[#C9A84C]' : 'bg-[#8B3A3A]'}`}>
          <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-white/70 text-[10px] tracking-[0.3em] uppercase mb-1">Exam {exam.number} Results</p>
              <p className="text-white text-5xl font-light mb-1" style={{ fontFamily: 'Cormorant Garamond, serif' }}>{pct}%</p>
              <p className="text-white/80 text-sm">{correct} of {total} correct — {pct >= 80 ? 'Excellent! You\'re exam ready.' : pct >= 60 ? 'Good progress — review the missed questions.' : 'Keep studying — focus on the explanations below.'}</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={handleReset}
                className="whitespace-nowrap text-xs tracking-[0.2em] uppercase px-6 py-3 rounded-full border border-white/30 text-white hover:bg-white/10 transition-all cursor-pointer"
              >
                Retake Exam
              </button>
              <button
                onClick={onBack}
                className="whitespace-nowrap text-xs tracking-[0.2em] uppercase px-6 py-3 rounded-full bg-white text-[#0A0A0A] hover:bg-white/90 transition-all cursor-pointer font-semibold"
              >
                Choose Another Exam
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Review Form — appears after submission */}
      {submitted && (
        <div className="bg-[#F5F1E8] border-b border-[#0A0A0A]/8 px-6 md:px-12 lg:px-20 py-10">
          <div className="max-w-screen-xl mx-auto">
            <div className="bg-white rounded-3xl border border-[#0A0A0A]/8 p-8 md:p-10">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#C9A84C]/15 shrink-0">
                  <i className="ri-message-3-line text-[#C9A84C] text-lg"></i>
                </div>
                <div>
                  <p className="text-[#C9A84C] text-[10px] tracking-[0.3em] uppercase mb-1">Quick Feedback</p>
                  <h3 className="text-[#0A0A0A] text-xl font-light" style={{ fontFamily: 'Cormorant Garamond, serif' }}>How was this exam?</h3>
                  <p className="text-[#5C5752] text-sm mt-1">Your feedback helps us improve these practice exams for future test-takers.</p>
                </div>
              </div>

              <form
                id="lcca-exam-review"
                data-readdy-form
                action="https://readdy.ai/api/form/d7mi7q7u2vahpmebf8g0"
                method="POST"
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.currentTarget;
                  const formData = new FormData(form);
                  fetch(form.action, {
                    method: 'POST',
                    body: new URLSearchParams(formData as any),
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                  }).then(() => {
                    form.reset();
                    const msg = form.querySelector('.form-feedback') as HTMLElement;
                    if (msg) msg.style.display = 'block';
                  }).catch(() => {
                    alert('Something went wrong. Please try again.');
                  });
                }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className="text-[#0A0A0A] text-xs font-medium block mb-2">Name <span className="text-[#8B8680] font-normal">(optional)</span></label>
                    <input type="text" name="name" placeholder="Your name" className="w-full px-4 py-3 rounded-xl border border-[#0A0A0A]/10 bg-[#F5F1E8]/40 text-sm text-[#0A0A0A] placeholder-[#8B8680] focus:outline-none focus:border-[#C9A84C]/50" />
                  </div>
                  <div>
                    <label className="text-[#0A0A0A] text-xs font-medium block mb-2">Email <span className="text-[#8B8680] font-normal">(optional)</span></label>
                    <input type="email" name="email" placeholder="your@email.com" className="w-full px-4 py-3 rounded-xl border border-[#0A0A0A]/10 bg-[#F5F1E8]/40 text-sm text-[#0A0A0A] placeholder-[#8B8680] focus:outline-none focus:border-[#C9A84C]/50" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
                  <div>
                    <label className="text-[#0A0A0A] text-xs font-medium block mb-2">Exam Taken</label>
                    <select name="exam_taken" className="w-full px-4 py-3 rounded-xl border border-[#0A0A0A]/10 bg-[#F5F1E8]/40 text-sm text-[#0A0A0A] focus:outline-none focus:border-[#C9A84C]/50">
                      <option value="">Select exam...</option>
                      <option value="Exam 1 — Foundational">Exam 1 — Foundational</option>
                      <option value="Exam 2 — Foundational">Exam 2 — Foundational</option>
                      <option value="Exam 3 — Applied">Exam 3 — Applied</option>
                      <option value="Exam 4 — Advanced">Exam 4 — Advanced</option>
                      <option value="Exam 5 — Final Prep">Exam 5 — Final Prep</option>
                      <option value="Exam 6 — Final Prep 1">Exam 6 — Final Prep 1</option>
                      <option value="Exam 7 — Final Prep 2">Exam 7 — Final Prep 2</option>
                      <option value="Exam 8 — Scenario Exam">Exam 8 — Scenario Exam</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[#0A0A0A] text-xs font-medium block mb-2">Your Score</label>
                    <input type="text" name="score" placeholder="e.g. 84%" className="w-full px-4 py-3 rounded-xl border border-[#0A0A0A]/10 bg-[#F5F1E8]/40 text-sm text-[#0A0A0A] placeholder-[#8B8680] focus:outline-none focus:border-[#C9A84C]/50" />
                  </div>
                  <div>
                    <label className="text-[#0A0A0A] text-xs font-medium block mb-2">Overall Rating</label>
                    <select name="rating" className="w-full px-4 py-3 rounded-xl border border-[#0A0A0A]/10 bg-[#F5F1E8]/40 text-sm text-[#0A0A0A] focus:outline-none focus:border-[#C9A84C]/50">
                      <option value="">Rate this exam...</option>
                      <option value="5">5 — Excellent</option>
                      <option value="4">4 — Very Good</option>
                      <option value="3">3 — Good</option>
                      <option value="2">2 — Fair</option>
                      <option value="1">1 — Needs Improvement</option>
                    </select>
                  </div>
                </div>

                <div className="mb-5">
                  <label className="text-[#0A0A0A] text-xs font-medium block mb-2">What did you find most helpful? <span className="text-[#8B8680] font-normal">(optional)</span></label>
                  <textarea name="most_helpful" rows={3} maxLength={500} placeholder="e.g. The explanations after each question, the scenario-based questions, the domain coverage..." className="w-full px-4 py-3 rounded-xl border border-[#0A0A0A]/10 bg-[#F5F1E8]/40 text-sm text-[#0A0A0A] placeholder-[#8B8680] focus:outline-none focus:border-[#C9A84C]/50 resize-none"></textarea>
                  <p className="text-[#8B8680] text-[10px] mt-1">Max 500 characters</p>
                </div>

                <div className="mb-5">
                  <label className="text-[#0A0A0A] text-xs font-medium block mb-2">What could be improved? <span className="text-[#8B8680] font-normal">(optional)</span></label>
                  <textarea name="improvement" rows={3} maxLength={500} placeholder="e.g. More questions on fiscal management, clearer explanations, a timer feature..." className="w-full px-4 py-3 rounded-xl border border-[#0A0A0A]/10 bg-[#F5F1E8]/40 text-sm text-[#0A0A0A] placeholder-[#8B8680] focus:outline-none focus:border-[#C9A84C]/50 resize-none"></textarea>
                  <p className="text-[#8B8680] text-[10px] mt-1">Max 500 characters</p>
                </div>

                <div className="mb-6">
                  <label className="text-[#0A0A0A] text-xs font-medium block mb-2">Would you recommend these exams to someone preparing for the LCCA test?</label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="recommend" value="Yes" className="accent-[#C9A84C]" />
                      <span className="text-sm text-[#3A3632]">Yes</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="recommend" value="Maybe" className="accent-[#C9A84C]" />
                      <span className="text-sm text-[#3A3632]">Maybe</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="recommend" value="No" className="accent-[#C9A84C]" />
                      <span className="text-sm text-[#3A3632]">No</span>
                    </label>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <button
                    type="submit"
                    className="whitespace-nowrap inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase px-8 py-3.5 rounded-full bg-[#0A0A0A] text-[#F5F1E8] hover:bg-[#C9A84C] hover:text-[#0A0A0A] transition-all duration-300 cursor-pointer font-semibold"
                  >
                    Submit Feedback
                    <i className="ri-send-plane-line"></i>
                  </button>
                  <p className="form-feedback hidden text-[#4a7c59] text-sm">
                    <i className="ri-checkbox-circle-line mr-1"></i>
                    Thanks! Your feedback has been submitted.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Questions */}
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-20 py-12 md:py-16">
        <div className="space-y-6">
          {exam.questions.map((q, qi) => {
            const selected = answers[q.id];
            const isAnswered = selected !== undefined;
            const isCorrect = selected === q.correct;
            const showResult = submitted && isAnswered;

            return (
              <div
                key={q.id}
                className={`rounded-3xl border p-8 transition-all duration-300 ${showResult ? isCorrect ? 'border-[#4a7c59]/30 bg-[#4a7c59]/5' : 'border-red-300/30 bg-red-50/40' : isAnswered ? 'border-[#C9A84C]/30 bg-white' : 'border-[#0A0A0A]/8 bg-white'}`}
              >
                <div className="flex items-start gap-4 mb-2">
                  <span className="shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-[#0A0A0A]/6 text-[#0A0A0A] text-sm font-medium" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                    {qi + 1}
                  </span>
                  <div className="flex-1">
                    <span className="text-[#C9A84C] text-[10px] tracking-[0.2em] uppercase font-medium block mb-2">{q.domain}</span>
                    <p className="text-[#0A0A0A] text-base leading-relaxed font-medium">{q.question}</p>
                  </div>
                </div>

                <div className="space-y-3 ml-12 mt-4">
                  {q.options.map((opt, idx) => {
                    let style = 'border-[#0A0A0A]/10 bg-[#F5F1E8]/60 text-[#3A3632] hover:border-[#C9A84C]/40 cursor-pointer';
                    if (submitted) {
                      if (idx === q.correct) style = 'border-[#4a7c59] bg-[#4a7c59]/10 text-[#4a7c59] font-medium cursor-default';
                      else if (idx === selected && !isCorrect) style = 'border-red-400 bg-red-50 text-red-600 cursor-default';
                      else style = 'border-[#0A0A0A]/6 bg-[#F5F1E8]/40 text-[#8B8680] cursor-default opacity-50';
                    } else if (isAnswered) {
                      if (idx === selected) style = 'border-[#C9A84C] bg-[#C9A84C]/10 text-[#0A0A0A] font-medium cursor-pointer';
                      else style = 'border-[#0A0A0A]/8 bg-[#F5F1E8]/40 text-[#8B8680] cursor-pointer hover:border-[#C9A84C]/30';
                    }
                    return (
                      <button
                        key={idx}
                        onClick={() => handleAnswer(q.id, idx)}
                        disabled={submitted}
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
        </div>

        {/* Submit button */}
        {!submitted && (
          <div className="mt-10 bg-[#0A0A0A] rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-[#C9A84C] text-[10px] tracking-[0.3em] uppercase mb-2">Ready to Score?</p>
              <p className="text-[#F5F1E8] text-2xl font-light" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                {answered < total ? `${total - answered} questions remaining` : 'All questions answered — submit when ready'}
              </p>
            </div>
            <button
              onClick={handleSubmit}
              disabled={answered < total}
              className={`whitespace-nowrap inline-flex items-center gap-3 text-xs tracking-[0.2em] uppercase px-8 py-4 rounded-full transition-all duration-300 cursor-pointer font-semibold shrink-0 ${answered === total ? 'bg-[#C9A84C] text-[#0A0A0A] hover:bg-[#F5F1E8]' : 'bg-white/10 text-[#8B8680] cursor-not-allowed'}`}
            >
              Submit Exam
              <i className="ri-send-plane-line"></i>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default function PracticeExamsPage() {
  const [activeExam, setActiveExam] = useState<PracticeExam | null>(null);
  const [scores, setScores] = useState<Record<string, number>>({});

  if (activeExam) {
    return <ExamView exam={activeExam} onBack={() => setActiveExam(null)} />;
  }

  const difficultyLabel = (n: number) => {
    if (n <= 2) return 'Foundational';
    if (n === 3) return 'Applied';
    if (n === 4) return 'Advanced';
    if (n === 5) return 'Final Prep';
    if (n === 6 || n === 7) return 'Comprehensive Final';
    if (n === 8) return 'All Scenarios';
    if (n === 9) return 'Ch. 748 Mastery';
    return 'Practice';
  };

  const difficultyColor = (n: number) => {
    if (n <= 2) return 'text-[#4a7c59] bg-[#4a7c59]/10';
    if (n === 3) return 'text-[#C9A84C] bg-[#C9A84C]/10';
    if (n === 4) return 'text-[#8B3A3A] bg-[#8B3A3A]/10';
    if (n === 5) return 'text-[#C9A84C] bg-[#C9A84C]/10';
    if (n === 9) return 'text-[#4a7c59] bg-[#4a7c59]/10';
    return 'text-[#0A0A0A] bg-[#0A0A0A]/10';
  };

  return (
    <div className="min-h-screen bg-[#F5F1E8]" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Header */}
      <div className="bg-[#0A0A0A] px-6 md:px-12 lg:px-20 py-16 md:py-24">
        <div className="max-w-screen-xl mx-auto">
          <Link
            to="/lcca"
            className="whitespace-nowrap inline-flex items-center gap-2 text-[#8B8680] hover:text-[#C9A84C] text-xs tracking-[0.2em] uppercase mb-10 transition-all cursor-pointer"
          >
            <i className="ri-arrow-left-line"></i>
            Back to Study Guide
          </Link>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div>
              <div className="inline-flex items-center gap-3 bg-[#C9A84C]/10 border border-[#C9A84C]/30 rounded-full px-5 py-2 mb-6">
                <i className="ri-file-list-3-line text-[#C9A84C] text-sm"></i>
                <span className="text-[#C9A84C] text-xs tracking-[0.2em] uppercase font-medium">LCCA Exam Prep</span>
              </div>
              <h1 className="text-[#F5F1E8] text-4xl md:text-6xl lg:text-7xl font-light leading-[1.1]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Practice
                <br />
                <span className="italic text-[#C9A84C]">Exams</span>
              </h1>
            </div>
            <div className="max-w-sm">
              <p className="text-[#8B8680] text-sm leading-relaxed mb-6">
                11 full-length practice exams — 5 foundational (25 questions each), 2 comprehensive final prep exams (50 questions each), 1 all-scenario exam (50 questions), and 3 Chapter 748 Mastery Exams (50 questions each), 423 total. Each exam covers all domains. Answer all questions, then submit to see your score and detailed explanations.
              </p>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: '11', label: 'Exams' },
                  { value: '423', label: 'Questions' },
                  { value: '7', label: 'Domains' },
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

      {/* Exam cards */}
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-24">
        <p className="text-[#C9A84C] text-[10px] tracking-[0.3em] uppercase mb-10">Select an Exam to Begin</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lccaPracticeExams.map(exam => {
            const score = scores[exam.id];
            return (
              <div key={exam.id} className="bg-white rounded-3xl border border-[#0A0A0A]/6 hover:border-[#C9A84C]/40 transition-all duration-300 overflow-hidden">
                <div className="p-8">
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-[#C9A84C]/10 border border-[#C9A84C]/20">
                      <span className="text-[#C9A84C] text-xl font-light" style={{ fontFamily: 'Cormorant Garamond, serif' }}>{exam.number}</span>
                    </div>
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${difficultyColor(exam.number)}`}>
                      {difficultyLabel(exam.number)}
                    </span>
                  </div>
                  <h3 className="text-[#0A0A0A] text-xl font-light leading-tight mb-3" style={{ fontFamily: 'Cormorant Garamond, serif' }}>{exam.title}</h3>
                  <p className="text-[#5C5752] text-sm leading-relaxed mb-2">{exam.description}</p>
                  <p className="text-[#8B8680] text-xs mb-6">{exam.questions.length} questions · All 7 domains · {exam.questions.length >= 40 ? '50 min' : '25 min'} recommended</p>

                  {score !== undefined && (
                    <div className="mb-5">
                      <div className="flex justify-between text-[10px] text-[#8B8680] mb-1">
                        <span>Last score</span>
                        <span className={score >= 80 ? 'text-[#4a7c59]' : score >= 60 ? 'text-[#C9A84C]' : 'text-red-500'}>{score}%</span>
                      </div>
                      <div className="w-full bg-[#0A0A0A]/8 rounded-full h-1">
                        <div className={`h-1 rounded-full transition-all duration-500 ${score >= 80 ? 'bg-[#4a7c59]' : score >= 60 ? 'bg-[#C9A84C]' : 'bg-red-400'}`} style={{ width: `${score}%` }} />
                      </div>
                    </div>
                  )}

                  <button
                    onClick={() => setActiveExam(exam)}
                    className="whitespace-nowrap w-full text-center text-xs tracking-[0.15em] uppercase py-3 rounded-full bg-[#0A0A0A] text-[#F5F1E8] hover:bg-[#C9A84C] hover:text-[#0A0A0A] transition-all duration-300 cursor-pointer font-medium"
                  >
                    {score !== undefined ? 'Retake Exam' : 'Start Exam'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Tips */}
        <div className="mt-16 bg-[#0A0A0A] rounded-3xl p-8 md:p-12">
          <p className="text-[#C9A84C] text-[10px] tracking-[0.3em] uppercase mb-6">Exam Tips</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: 'ri-time-line', title: 'Simulate Test Conditions', body: 'Try to complete each exam in one sitting without notes. The real LCCA exam is timed — practice building your pace.' },
              { icon: 'ri-book-open-line', title: 'Review Every Explanation', body: 'Even when you get a question right, read the explanation. Understanding the "why" is more valuable than memorizing answers.' },
              { icon: 'ri-repeat-line', title: 'Retake Until You Score 80%+', body: 'Aim for 80% or higher on each exam before test day. If you miss questions in a domain, go back to the study material for that domain.' },
            ].map(tip => (
              <div key={tip.title} className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#C9A84C]/15 shrink-0">
                  <i className={`${tip.icon} text-[#C9A84C] text-lg`}></i>
                </div>
                <div>
                  <h4 className="text-[#F5F1E8] text-base font-light mb-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>{tip.title}</h4>
                  <p className="text-[#8B8680] text-sm leading-relaxed">{tip.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-[#0A0A0A]/8 px-6 md:px-12 lg:px-20 py-8">
        <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#8B8680] text-xs">Free resource for foster families and child care professionals in Texas.</p>
          <div className="flex items-center gap-6">
            <Link to="/lcca" className="whitespace-nowrap inline-flex items-center gap-2 text-[#C9A84C] text-xs tracking-[0.15em] uppercase hover:underline cursor-pointer transition-all">
              <i className="ri-arrow-left-line text-sm"></i>
              Study Guide
            </Link>
            <p className="text-[#C9A84C] text-sm italic shrink-0" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Lozano Collective</p>
          </div>
        </div>
      </div>
    </div>
  );
}
