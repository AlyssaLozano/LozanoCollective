import { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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

const pricingCards = [
  {
    id: 'hourly',
    title: 'Hourly Consulting',
    price: '$200',
    unit: 'per hour',
    badge: null,
    tagline: 'Best for targeted needs, quick problem-solving, or ongoing coaching.',
    includes: [
      'One-on-one strategy or Q&A sessions',
      'Policy or document review with feedback',
      'Coaching calls with action steps',
      'Pay-as-you-go flexibility',
    ],
    note: null,
    examples: null,
    dark: false,
  },
  {
    id: 'startup',
    title: 'The Lozano Collective Consulting\u2122',
    subtitle: 'Business Startup Experience',
    price: '$3,500',
    unit: 'or 5 payments',
    badge: 'Most Popular',
    tagline: 'The full startup experience \u2014 turns your idea into a registered, operational business with brand, systems, marketing, and launch plan.',
    includes: [
      'Business entity formation and EIN',
      'Mission, vision, and values clarity',
      'CEO mindset coaching',
      'Personalized financial blueprint and budget',
      'Brand identity and client avatar development',
      'Marketing funnel, social strategy, and content plan',
      'SOPs, dashboards, and automation workflows',
      'Full launch plan with checklists and timelines',
      'Accountability, structure, and real partnership',
    ],
    note: 'Includes a workbook used during consultations. The business plan developed in this program is built for execution, not financing. Clients seeking bank loans, grants, or investors should consider the Project Engagement option for multi-year projections and market valuations.',
    examples: null,
    dark: true,
  },
  {
    id: 'project',
    title: 'Project Engagements',
    price: 'Starting at $3,000',
    unit: 'per project',
    badge: null,
    tagline: 'Ideal for clients who need a defined scope with deliverables.',
    includes: [
      'Discovery consultation and needs assessment',
      'Detailed project plan with timelines',
      'Written reports, policies, pitch decks, or playbooks',
      'Implementation guidance and resource templates',
      'Final review and presentation of deliverables',
    ],
    note: null,
    examples: [
      'Complete business plan with pitch deck for financing or SBA loan',
      'Real estate portfolio strategy with acquisition roadmap',
      'Policy and procedure manuals for social service or childcare programs',
      'Government contract readiness package',
    ],
    dark: false,
  },
  {
    id: 'retainer',
    title: 'Monthly Retainer',
    price: 'Starting at $2,500',
    unit: 'per month',
    badge: null,
    tagline: 'For leaders and organizations needing ongoing advisory access.',
    includes: [
      'Priority access to Alyssa for questions and guidance',
      'Standing monthly or bi-weekly strategy calls',
      'Ongoing document, contract, or deal reviews',
      'Quarterly planning and KPI scorecards',
      'Continuous improvement and accountability support',
    ],
    note: 'Many clients use this as a \u201cfractional advisor\u201d \u2014 executive-level support without a full-time hire.',
    examples: null,
    dark: false,
  },
  {
    id: 'custom',
    title: 'Custom Packages',
    price: 'Tailored Pricing',
    unit: 'custom proposal',
    badge: null,
    tagline: 'For complex initiatives requiring a custom proposal matched to unique goals, timelines, and deliverables.',
    includes: [],
    note: null,
    examples: [
      'Multi-site expansion plans for childcare or treatment programs',
      'Acquisition strategy with SBA financing package',
      'Full-service government contracting readiness and proposal support',
      'Real estate portfolio growth with financing and tax-aware strategies',
    ],
    dark: false,
  },
  {
    id: 'credit',
    title: 'Business Credit Establishment',
    price: '$199 setup',
    unit: '+ $99/month',
    badge: null,
    tagline: 'Build the business credit foundation your company needs to access capital.',
    includes: [
      'EIN and business credit file setup',
      'D-U-N-S registration assistance',
      'Vendor credit account guidance (Net-30, Net-60)',
      'Business tradeline and credit score tracking',
      'Business funding readiness checklist',
    ],
    note: null,
    examples: null,
    dark: false,
  },
];

export default function InnerEmpirePage() {
  const navigate = useNavigate();
  const heroRef = useReveal(0.05);
  const introRef = useReveal(0.1);
  const pricingRef = useReveal(0.05);
  const ctaRef = useReveal(0.1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const relatedVentures = ventures.filter((v) => v.id !== 'inner-empire-consulting').slice(0, 3);

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
        {/* Placeholder image — replace with venture_innerempire.jpg */}
        <img
          src="https://readdy.ai/api/search-image?query=elegant%20luxury%20consulting%20firm%20office%2C%20sophisticated%20dark%20interior%20with%20warm%20gold%20accents%2C%20professional%20advisory%20environment%2C%20cream%20and%20charcoal%20tones%2C%20editorial%20photography%2C%20warm%20ambient%20lighting%2C%20executive%20boardroom%20aesthetic%2C%20minimalist%20luxury%20design%2C%20dark%20walls%20with%20champagne%20gold%20details&width=1400&height=700&seq=ie_hero001&orientation=landscape"
          alt="Inner Empire Consulting — Strategic Advisory by Alyssa Lozano"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent"></div>

        <div
          ref={heroRef}
          className="absolute bottom-0 left-0 right-0 px-6 md:px-12 lg:px-20 pb-16 opacity-0 translate-y-6 transition-all duration-1000 ease-out"
        >
          <div className="max-w-screen-xl mx-auto">
            <p
              className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase mb-4"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Strategic Advisory
            </p>
            <h1
              className="text-[#F5F1E8] text-4xl md:text-6xl lg:text-7xl font-light leading-[1.1] mb-4"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              Inner Empire
              <br />
              <span className="italic">Consulting</span>
            </h1>
            <p
              className="text-[#F5F1E8]/70 text-base md:text-lg font-light italic max-w-2xl"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              &ldquo;Clear, flexible consulting designed to meet your goals.&rdquo;
            </p>
            <div className="flex items-center gap-4 mt-6">
              <span
                className="inline-flex items-center gap-1.5 text-[10px] tracking-[0.2em] uppercase px-3 py-1.5 rounded-full border bg-[#C9A84C]/10 text-[#C9A84C] border-[#C9A84C]/30"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] inline-block animate-pulse"></span>
                Operating
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Intro */}
      <div className="px-6 md:px-12 lg:px-20 py-20 md:py-28 max-w-screen-xl mx-auto">
        <div
          ref={introRef}
          className="opacity-0 translate-y-8 transition-all duration-1000 ease-out"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-20 mb-24">
            <div className="lg:col-span-2 space-y-12">
              <div>
                <p className="text-[#C9A84C] text-[10px] tracking-[0.3em] uppercase mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                  About
                </p>
                <h2 className="text-[#0A0A0A] text-3xl md:text-4xl font-light leading-[1.2] mb-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  Where Strategy Meets Execution
                </h2>
                <p className="text-[#3A3632] text-base leading-[1.9]" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Inner Empire Consulting is where Alyssa&apos;s federal cyber leadership, real estate experience, and operator instincts come together to help clients build businesses that last. Every engagement is grounded in strategy, structure, and results.
                </p>
                <p className="text-[#3A3632] text-base leading-[1.9] mt-5" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Most founders don&apos;t fail because they lack ambition — they fail because they lack structure. Inner Empire was built to be the strategic partner Alyssa wished she had when she was starting out. Whether you&apos;re launching your first business, scaling a portfolio, or navigating the complexity of social service operations, Inner Empire meets you where you are and walks with you toward where you&apos;re going.
                </p>
              </div>

              <div className="w-full h-px bg-[#0A0A0A]/10"></div>

              {/* Domains of Expertise */}
              <div>
                <p className="text-[#C9A84C] text-[10px] tracking-[0.3em] uppercase mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Domains I Help In
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { icon: 'ri-building-2-line', title: 'Real Estate Development', desc: 'From land acquisition to project completion — strategy, financing, and execution.' },
                    { icon: 'ri-bar-chart-box-line', title: 'Real Estate Portfolio', desc: 'Building and scaling residential or commercial portfolios with tax-aware strategies.' },
                    { icon: 'ri-briefcase-4-line', title: 'Business Consulting', desc: 'Open to any business — startups, scaling, operations, and strategic pivots.' },
                    { icon: 'ri-home-heart-line', title: 'Group Home & GRO', desc: 'Starting group homes, adult homes, and residential treatment programs — licensing to launch.' },
                    { icon: 'ri-hand-heart-line', title: 'Nonprofit Formation', desc: 'From 501(c)(3) filing to board development, fundraising strategy, and program design.' },
                  ].map((d) => (
                    <div key={d.title} className="bg-white rounded-2xl border border-[#0A0A0A]/6 p-6 hover:border-[#C9A84C]/30 transition-all duration-300">
                      <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#C9A84C]/10 mb-4">
                        <i className={`${d.icon} text-[#C9A84C] text-lg`}></i>
                      </div>
                      <h4 className="text-[#0A0A0A] text-base font-light mb-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>{d.title}</h4>
                      <p className="text-[#5C5752] text-xs leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>{d.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-full h-px bg-[#0A0A0A]/10"></div>

              <div>
                <p className="text-[#C9A84C] text-[10px] tracking-[0.3em] uppercase mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Who It Serves
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {[
                    { icon: 'ri-building-line', label: 'Founders', desc: 'At any stage — from idea to scale' },
                    { icon: 'ri-home-4-line', label: 'Real Estate Investors', desc: 'Building or scaling portfolios' },
                    { icon: 'ri-heart-line', label: 'Social Service Operators', desc: 'Navigating compliance, growth, and sustainability' },
                  ].map((item) => (
                    <div key={item.label} className="bg-[#0A0A0A]/4 rounded-2xl p-6">
                      <div className="w-10 h-10 flex items-center justify-center mb-4">
                        <i className={`${item.icon} text-[#C9A84C] text-xl`}></i>
                      </div>
                      <p className="text-[#0A0A0A] text-base font-light mb-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                        {item.label}
                      </p>
                      <p className="text-[#5C5752] text-xs leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-[#0A0A0A] rounded-2xl p-8">
                <p className="text-[#C9A84C] text-[10px] tracking-[0.3em] uppercase mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Quick Facts
                </p>
                <div className="space-y-5">
                  {[
                    { label: 'Status', value: 'Operating' },
                    { label: 'Sector', value: 'Strategic Advisory' },
                    { label: 'Engagements', value: 'Hourly · Project · Retainer' },
                    { label: 'Founder', value: 'Alyssa "Lyssa" Lozano' },
                  ].map((item) => (
                    <div key={item.label}>
                      <p className="text-[#8B8680] text-[10px] tracking-[0.2em] uppercase mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {item.label}
                      </p>
                      <p className="text-[#F5F1E8] text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <a
                href="mailto:alyssa@lozanoholdings.com"
                className="whitespace-nowrap w-full flex items-center justify-center gap-3 bg-[#C9A84C] text-[#0A0A0A] text-xs tracking-[0.2em] uppercase px-8 py-4 rounded-full hover:bg-[#0A0A0A] hover:text-[#F5F1E8] transition-all duration-300 cursor-pointer font-medium"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                <i className="ri-mail-line text-sm"></i>
                Email Alyssa
              </a>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div ref={pricingRef} className="opacity-0 translate-y-8 transition-all duration-1000 ease-out">
          <div className="mb-16">
            <p className="text-[#C9A84C] text-[10px] tracking-[0.35em] uppercase mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
              Services &amp; Pricing
            </p>
            <h2 className="text-[#0A0A0A] text-4xl md:text-6xl font-light leading-[1.1]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              The Consulting Menu
            </h2>
            <p className="mt-4 text-[#5C5752] text-sm font-light leading-relaxed max-w-xl" style={{ fontFamily: 'Inter, sans-serif' }}>
              Every engagement is tailored. Every deliverable is intentional. Choose the format that fits your goals — or reach out to build something custom.
            </p>
          </div>

          {/* Pricing Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {pricingCards.map((card, i) => (
              <div
                key={card.id}
                className={`relative rounded-2xl p-8 flex flex-col border transition-all duration-300 hover:-translate-y-1 ${
                  card.dark
                    ? 'bg-[#0A0A0A] border-[#C9A84C]/20'
                    : 'bg-white border-[#0A0A0A]/8 hover:border-[#C9A84C]/30'
                }`}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                {/* Badge */}
                {card.badge && (
                  <div className="absolute -top-3 left-8">
                    <span
                      className="inline-flex items-center gap-1.5 bg-[#C9A84C] text-[#0A0A0A] text-[10px] tracking-[0.2em] uppercase px-4 py-1.5 rounded-full font-semibold"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      <i className="ri-star-fill text-[10px]"></i>
                      {card.badge}
                    </span>
                  </div>
                )}

                {/* Header */}
                <div className="mb-6">
                  <p
                    className={`text-[10px] tracking-[0.25em] uppercase mb-3 ${card.dark ? 'text-[#C9A84C]' : 'text-[#C9A84C]'}`}
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {card.id === 'startup' ? 'Signature Package' : card.id === 'credit' ? 'Add-On Service' : 'Engagement Type'}
                  </p>
                  <h3
                    className={`text-2xl font-light leading-tight mb-1 ${card.dark ? 'text-[#F5F1E8]' : 'text-[#0A0A0A]'}`}
                    style={{ fontFamily: 'Cormorant Garamond, serif' }}
                  >
                    {card.title}
                  </h3>
                  {card.subtitle && (
                    <p
                      className={`text-sm italic font-light ${card.dark ? 'text-[#C9A84C]' : 'text-[#C9A84C]'}`}
                      style={{ fontFamily: 'Cormorant Garamond, serif' }}
                    >
                      {card.subtitle}
                    </p>
                  )}
                </div>

                {/* Price */}
                <div className={`pb-6 mb-6 border-b ${card.dark ? 'border-white/10' : 'border-[#0A0A0A]/8'}`}>
                  <p
                    className={`text-3xl md:text-4xl font-light leading-none ${card.dark ? 'text-[#F5F1E8]' : 'text-[#0A0A0A]'}`}
                    style={{ fontFamily: 'Cormorant Garamond, serif' }}
                  >
                    {card.price}
                  </p>
                  <p
                    className={`text-xs tracking-[0.15em] uppercase mt-1 ${card.dark ? 'text-[#8B8680]' : 'text-[#8B8680]'}`}
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {card.unit}
                  </p>
                </div>

                {/* Tagline */}
                <p
                  className={`text-sm leading-relaxed mb-6 ${card.dark ? 'text-[#8B8680]' : 'text-[#5C5752]'}`}
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {card.tagline}
                </p>

                {/* Includes */}
                {card.includes.length > 0 && (
                  <div className="flex-1 mb-6">
                    <p
                      className={`text-[10px] tracking-[0.2em] uppercase mb-4 ${card.dark ? 'text-[#C9A84C]' : 'text-[#C9A84C]'}`}
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      Includes
                    </p>
                    <ul className="space-y-3">
                      {card.includes.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className={`mt-1 shrink-0 text-xs ${card.dark ? 'text-[#C9A84C]' : 'text-[#C9A84C]'}`}>—</span>
                          <span
                            className={`text-sm leading-relaxed ${card.dark ? 'text-[#F5F1E8]/70' : 'text-[#3A3632]'}`}
                            style={{ fontFamily: 'Inter, sans-serif' }}
                          >
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Examples */}
                {card.examples && card.examples.length > 0 && (
                  <div className="flex-1 mb-6">
                    <p
                      className="text-[10px] tracking-[0.2em] uppercase mb-4 text-[#C9A84C]"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      Example Projects
                    </p>
                    <ul className="space-y-3">
                      {card.examples.map((ex) => (
                        <li key={ex} className="flex items-start gap-3">
                          <span className={`mt-1 shrink-0 text-xs ${card.dark ? 'text-[#C9A84C]/50' : 'text-[#C9A84C]/60'}`}>◆</span>
                          <span
                            className={`text-sm leading-relaxed italic ${card.dark ? 'text-[#F5F1E8]/60' : 'text-[#5C5752]'}`}
                            style={{ fontFamily: 'Cormorant Garamond, serif' }}
                          >
                            {ex}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Note */}
                {card.note && (
                  <p
                    className={`text-xs leading-relaxed italic mt-auto pt-4 border-t ${
                      card.dark ? 'text-[#8B8680] border-white/8' : 'text-[#8B8680] border-[#0A0A0A]/8'
                    }`}
                    style={{ fontFamily: 'Cormorant Garamond, serif' }}
                  >
                    {card.note}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Pricing note */}
          <p
            className="text-center text-[#8B8680] text-xs leading-relaxed max-w-xl mx-auto"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            All pricing is subject to scope and complexity. A discovery call is always the first step — no commitment required.
          </p>
        </div>

        {/* CTA Section */}
        <div
          ref={ctaRef}
          className="opacity-0 translate-y-8 transition-all duration-1000 ease-out mt-24"
        >
          <div className="bg-[#0A0A0A] rounded-3xl px-8 md:px-16 py-16 md:py-20 text-center">
            <p
              className="text-[#C9A84C] text-xs tracking-[0.35em] uppercase mb-6"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Ready to Begin?
            </p>
            <h2
              className="text-[#F5F1E8] text-4xl md:text-6xl font-light leading-[1.1] mb-6"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              Let&apos;s Build Something
              <br />
              <span className="italic text-[#C9A84C]">That Lasts.</span>
            </h2>
            <p
              className="text-[#8B8680] text-sm font-light leading-relaxed max-w-md mx-auto mb-10"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Every engagement starts with a conversation. Book a discovery call and let&apos;s figure out exactly what you need — and how to get there.
            </p>
            <a
              href="mailto:alyssa@lozanoholdings.com"
              className="whitespace-nowrap inline-flex items-center gap-3 bg-[#C9A84C] text-[#0A0A0A] text-xs tracking-[0.2em] uppercase px-12 py-5 rounded-full hover:bg-[#F5F1E8] transition-all duration-300 cursor-pointer font-semibold"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              <i className="ri-mail-line text-sm"></i>
              alyssa@lozanoholding.com
            </a>
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
