import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { ventures } from '@/mocks/ventures';
import ALLogo from '@/components/base/ALLogo';

function useReveal(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('opacity-100', 'translate-y-0');
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return ref;
}

export default function VenturePage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const venture = ventures.find((v) => v.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const heroRef = useReveal(0.05);
  const bodyRef = useReveal(0.1);
  const ctaRef = useReveal(0.1);

  if (!venture) {
    return (
      <div className="min-h-screen bg-[#F5F1E8] flex items-center justify-center">
        <div className="text-center">
          <p className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
            Not Found
          </p>
          <h1 className="text-[#0A0A0A] text-4xl font-light mb-8" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            Venture not found
          </h1>
          <Link
            to="/"
            className="text-[#C9A84C] text-xs tracking-[0.2em] uppercase hover:underline cursor-pointer"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const relatedVentures = ventures.filter((v) => v.id !== venture.id).slice(0, 3);

  return (
    <div className="bg-[#F5F1E8] min-h-screen">

      {/* Sticky Nav */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#F5F1E8]/95 backdrop-blur-sm border-b border-[#0A0A0A]/8">
        <div className="px-6 md:px-12 lg:px-20 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 cursor-pointer">
            <ALLogo variant="light" size="sm" />
            <span className="hidden sm:block text-sm font-light text-[#0A0A0A] tracking-[0.08em]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Alyssa Lozano</span>
          </Link>
          <div className="flex items-center gap-6">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-[#5C5752] hover:text-[#C9A84C] text-xs tracking-[0.2em] uppercase transition-colors cursor-pointer whitespace-nowrap"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              <i className="ri-arrow-left-line text-sm"></i>
              Back
            </button>
            <Link
              to="/#ventures"
              className="text-[#5C5752] hover:text-[#C9A84C] text-xs tracking-[0.2em] uppercase transition-colors cursor-pointer whitespace-nowrap"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              All Ventures
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <div className="relative w-full overflow-hidden" style={{ height: '70vh', minHeight: '500px' }}>
        <img
          src={venture.heroImage}
          alt={venture.name}
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/20"></div>

        <div
          ref={heroRef}
          className="absolute bottom-0 left-0 right-0 px-6 md:px-12 lg:px-20 pb-16 opacity-0 translate-y-6 transition-all duration-1000 ease-out"
        >
          <div className="max-w-screen-xl mx-auto">
            <p
              className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase mb-4"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {venture.category}
            </p>
            <h1
              className="text-[#F5F1E8] text-4xl md:text-6xl lg:text-7xl font-light leading-[1.1] mb-4"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              {venture.name}
            </h1>
            <p
              className="text-[#F5F1E8]/70 text-base md:text-lg font-light italic max-w-2xl"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              &ldquo;{venture.tagline}&rdquo;
            </p>
            <div className="flex items-center gap-4 mt-6">
              <span
                className={`inline-flex items-center gap-1.5 text-[10px] tracking-[0.2em] uppercase px-3 py-1.5 rounded-full border ${
                  venture.status === 'Operating'
                    ? 'bg-[#C9A84C]/10 text-[#C9A84C] border-[#C9A84C]/30'
                    : venture.status === 'Pending'
                    ? 'bg-[#C9A84C]/10 text-[#C9A84C] border-[#C9A84C]/30'
                    : 'bg-white/10 text-[#F5F1E8]/60 border-white/20'
                }`}
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {(venture.status === 'Operating' || venture.status === 'Pending') && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] inline-block animate-pulse"></span>
                )}
                {venture.status === 'Pending' ? 'Pending Authorization' : venture.status}
              </span>
              {venture.location && (
                <span
                  className="text-[#F5F1E8]/50 text-xs flex items-center gap-1.5"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  <i className="ri-map-pin-line text-xs"></i>
                  {venture.location}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="px-6 md:px-12 lg:px-20 py-20 md:py-28 max-w-screen-xl mx-auto">
        <div
          ref={bodyRef}
          className="opacity-0 translate-y-8 transition-all duration-1000 ease-out"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-20">

            {/* Main Content */}
            <div className="lg:col-span-2 space-y-16">

              {/* Origin Story */}
              <div>
                <p
                  className="text-[#C9A84C] text-[10px] tracking-[0.3em] uppercase mb-6"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Origin
                </p>
                <h2
                  className="text-[#0A0A0A] text-3xl md:text-4xl font-light leading-[1.2] mb-6"
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}
                >
                  Why It Exists
                </h2>
                <p
                  className="text-[#3A3632] text-base leading-[1.9]"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {venture.origin}
                </p>
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-[#0A0A0A]/10"></div>

              {/* Acumen Value Proposition — only for Acumen Career Academy */}
              {venture.id === 'acumen-career-academy' && (
                <div>
                  <p
                    className="text-[#C9A84C] text-[10px] tracking-[0.3em] uppercase mb-6"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    The Difference
                  </p>
                  <h2
                    className="text-[#0A0A0A] text-3xl md:text-4xl font-light leading-[1.2] mb-6"
                    style={{ fontFamily: 'Cormorant Garamond, serif' }}
                  >
                    Faster. Cheaper. Built for Real Work.
                  </h2>
                  <p
                    className="text-[#3A3632] text-base leading-[1.9] mb-8"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    Acumen Career Academy gets you working in cybersecurity in 8 weeks for $4,725 — less than half what national bootcamps charge for programs that take twice as long. We don't waste your time on memorization drills or recycled lecture videos. From day one you're using the same tools real SOC analysts use every day: Splunk, Sigma, Wireshark, TheHive, n8n. You'll build a portfolio of investigation reports, detection rules, and case documentation that proves to employers you can do the work — not just pass a test.
                  </p>

                  {/* Comparison cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                    {[
                      { label: 'Duration', acumen: '8 weeks', them: '6–12 months', icon: 'ri-time-line' },
                      { label: 'Cost', acumen: '$4,725', them: '$10,000–$15,000', icon: 'ri-money-dollar-circle-line' },
                      { label: 'You Graduate With', acumen: 'A portfolio of evidence', them: 'A certificate', icon: 'ri-folder-chart-line' },
                    ].map((row) => (
                      <div key={row.label} className="bg-white rounded-2xl border border-[#0A0A0A]/6 p-6">
                        <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#C9A84C]/10 mb-4">
                          <i className={`${row.icon} text-[#C9A84C] text-lg`}></i>
                        </div>
                        <p className="text-[#8B8680] text-[10px] tracking-[0.2em] uppercase mb-3">{row.label}</p>
                        <p className="text-[#0A0A0A] text-lg font-light mb-1" style={{ fontFamily: 'Cormorant Garamond, serif' }}>{row.acumen}</p>
                        <p className="text-[#8B8680] text-xs line-through">{row.them}</p>
                      </div>
                    ))}
                  </div>

                  <div className="bg-[#0A0A0A] rounded-2xl p-8">
                    <p className="text-[#C9A84C] text-[10px] tracking-[0.25em] uppercase mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>What You Build</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[
                        'Written investigation reports',
                        'Three original detection rules across three ATT&CK tactics',
                        'A multi-source SOAR workflow',
                        'Documented case management evidence',
                      ].map((item) => (
                        <div key={item} className="flex items-start gap-3">
                          <span className="text-[#C9A84C] text-xs mt-1 shrink-0">—</span>
                          <span className="text-[#F5F1E8]/80 text-sm leading-relaxed">{item}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-[#F5F1E8]/50 text-xs italic mt-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                      "Where competitors hand you a certificate, we hand you evidence."
                    </p>
                  </div>
                </div>
              )}

              {/* Divider */}
              {venture.id === 'acumen-career-academy' && <div className="w-full h-px bg-[#0A0A0A]/10"></div>}

              {/* Who It Serves */}
              <div>
                <p
                  className="text-[#C9A84C] text-[10px] tracking-[0.3em] uppercase mb-6"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Who It Serves
                </p>
                <h2
                  className="text-[#0A0A0A] text-3xl md:text-4xl font-light leading-[1.2] mb-6"
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}
                >
                  The Mission in Practice
                </h2>
                <p
                  className="text-[#3A3632] text-base leading-[1.9]"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {venture.whoItServes}
                </p>
              </div>

              {/* Progress bar for In Development */}
              {venture.status === 'In Development' && venture.progress !== undefined && (
                <div className="bg-[#0A0A0A]/4 rounded-2xl p-8">
                  <p
                    className="text-[#C9A84C] text-[10px] tracking-[0.3em] uppercase mb-4"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    Development Progress
                  </p>
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className="text-[#0A0A0A] text-sm"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      In Development
                    </span>
                    <span
                      className="text-[#C9A84C] text-sm font-medium"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {venture.progress}%
                    </span>
                  </div>
                  <div className="w-full h-1.5 bg-[#0A0A0A]/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#C9A84C] rounded-full"
                      style={{ width: `${venture.progress}%` }}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-10">
              <div className="bg-[#0A0A0A] rounded-2xl p-8">
                <p
                  className="text-[#C9A84C] text-[10px] tracking-[0.3em] uppercase mb-6"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Quick Facts
                </p>
                <div className="space-y-5">
                  <div>
                    <p className="text-[#8B8680] text-[10px] tracking-[0.2em] uppercase mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Status
                    </p>
                    <p className="text-[#F5F1E8] text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {venture.status}
                    </p>
                  </div>
                  <div>
                    <p className="text-[#8B8680] text-[10px] tracking-[0.2em] uppercase mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Sector
                    </p>
                    <p className="text-[#F5F1E8] text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {venture.category}
                    </p>
                  </div>
                  {venture.location && (
                    <div>
                      <p className="text-[#8B8680] text-[10px] tracking-[0.2em] uppercase mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                        Location
                      </p>
                      <p className="text-[#F5F1E8] text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {venture.location}
                      </p>
                    </div>
                  )}
                  <div>
                    <p className="text-[#8B8680] text-[10px] tracking-[0.2em] uppercase mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Founder
                    </p>
                    <p className="text-[#F5F1E8] text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Alyssa &ldquo;Lyssa&rdquo; Lozano
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div
                ref={ctaRef}
                className="opacity-0 translate-y-8 transition-all duration-1000 ease-out space-y-4"
              >
                {venture.externalUrl && venture.ctaUrl !== '#' && (
                  <a
                    href={venture.ctaUrl || venture.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="whitespace-nowrap w-full flex items-center justify-center gap-3 bg-[#0A0A0A] text-[#F5F1E8] text-xs tracking-[0.2em] uppercase px-8 py-4 rounded-full hover:bg-[#C9A84C] hover:text-[#0A0A0A] transition-all duration-300 cursor-pointer"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {venture.ctaLabel}
                    <i className="ri-arrow-right-up-line text-sm"></i>
                  </a>
                )}
                <a
                  href={`mailto:${venture.contactEmail || 'alyssa@lozanoholdings.com'}`}
                  className="whitespace-nowrap w-full flex items-center justify-center gap-3 border border-[#0A0A0A]/20 text-[#0A0A0A] text-xs tracking-[0.2em] uppercase px-8 py-4 rounded-full hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all duration-300 cursor-pointer"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Get in Touch
                  <i className="ri-mail-line text-sm"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Related Ventures */}
        <div className="mt-24 pt-16 border-t border-[#0A0A0A]/10">
          <p
            className="text-[#C9A84C] text-[10px] tracking-[0.3em] uppercase mb-10"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            More Ventures
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedVentures.map((v) => (
              <Link
                key={v.id}
                to={`/ventures/${v.id}`}
                className="group cursor-pointer"
              >
                <div className="bg-[#0A0A0A] rounded-2xl overflow-hidden border border-white/5 hover:border-[#C9A84C]/20 transition-all duration-500">
                  <div className="relative overflow-hidden" style={{ height: '160px' }}>
                    <img
                      src={v.image}
                      alt={v.name}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/60 to-transparent"></div>
                  </div>
                  <div className="p-5">
                    <p className="text-[#C9A84C] text-[10px] tracking-[0.2em] uppercase mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {v.category}
                    </p>
                    <h3 className="text-[#F5F1E8] text-lg font-light leading-tight group-hover:text-[#C9A84C] transition-colors" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                      {v.name}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#0A0A0A] py-10 px-6 md:px-12 lg:px-20">
        <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-3 cursor-pointer">
            <ALLogo variant="dark" size="sm" />
            <span className="text-[#F5F1E8] text-sm font-light tracking-[0.08em]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Alyssa Lozano</span>
          </Link>
          <p className="text-[#8B8680] text-xs" style={{ fontFamily: 'Inter, sans-serif' }}>
            &copy; 2026 Alyssa Lozano. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
