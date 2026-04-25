import { useReveal } from '@/hooks/useReveal';

const investigationCapabilities = [
  {
    icon: 'ri-shield-check-line',
    title: 'Background Investigations',
    desc: 'Comprehensive personnel vetting investigations supporting federal security clearance adjudications, including interviews, record checks, and fieldwork.',
  },
  {
    icon: 'ri-lock-line',
    title: 'Top Secret Clearance',
    desc: 'Maintains an active Top Secret security clearance, enabling access to classified environments and sensitive national security matters.',
  },
  {
    icon: 'ri-file-search-line',
    title: 'Adjudicator Support',
    desc: 'Conducts thorough investigations that provide adjudicators and decision-makers with the factual basis needed to determine clearance eligibility.',
  },
  {
    icon: 'ri-government-line',
    title: 'Federal Contracting',
    desc: 'Serves as a contracted federal investigator, continuing her service to the nation through independent investigative work.',
  },
];

export default function Investigations() {
  const headRef = useReveal(0.1);
  const bodyRef = useReveal(0.1);
  const capsRef = useReveal(0.08);
  const quoteRef = useReveal(0.1);

  return (
    <section id="investigations" className="bg-[#0A0A0A] py-28 md:py-40 overflow-hidden">
      <div className="px-6 md:px-12 lg:px-20 max-w-screen-xl mx-auto">

        {/* Header */}
        <div
          ref={headRef}
          className="opacity-0 translate-y-8 transition-all duration-1000 ease-out mb-20 md:mb-24 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10"
        >
          <div>
            <p
              className="text-[#C9A84C] text-xs tracking-[0.35em] uppercase mb-6 italic"
              style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '13px' }}
            >
              Contracted Federal Investigation
            </p>
            <h2
              className="text-[#F5F1E8] text-5xl md:text-7xl font-light leading-[1.1]"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              Behind the
              <br />
              <span className="italic">Clearance</span>
            </h2>
          </div>
          <p
            className="text-[#8B8680] text-sm font-light leading-relaxed max-w-sm lg:text-right"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Continuing service to the nation as a contracted federal background investigator, conducting investigations that support adjudicators in determining eligibility for Top Secret clearance.
          </p>
        </div>

        {/* Two-column body */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
          {/* Left — narrative */}
          <div
            ref={bodyRef}
            className="opacity-0 translate-y-8 transition-all duration-1000 ease-out"
          >
            <p
              className="text-[#F5F1E8] leading-[1.9] text-[15px]"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              <span
                className="float-left text-[#C9A84C] leading-none mr-3 mt-1 font-light"
                style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '88px', lineHeight: '0.8' }}
              >
                S
              </span>
              ecurity is not only about what you build or what you teach. It is also about who you trust. Alyssa Lozano holds a Top Secret clearance and continues her service to the nation as a contracted federal background investigator, conducting investigations that support adjudicators and decision-makers in determining an individual&apos;s eligibility for Top Secret clearance.
            </p>
            <p
              className="text-[#F5F1E8]/70 leading-[1.9] text-[15px] mt-6"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              This work sits at the intersection of national security and human judgment. Every investigation requires discretion, thoroughness, and an unwavering commitment to accuracy. The stakes are high: a clearance determination can shape careers, protect classified programs, and safeguard the institutions that depend on trusted personnel.
            </p>
            <p
              className="text-[#F5F1E8]/70 leading-[1.9] text-[15px] mt-6"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Her active Top Secret clearance and deep familiarity with federal processes make her uniquely qualified for this role. It is a continuation of the same mission that defined her time at the NSA: ensuring that the people entrusted with the nation&apos;s most sensitive work are worthy of that trust.
            </p>
          </div>

          {/* Right — image + pull quote */}
          <div className="space-y-10">
            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden" style={{ height: '360px' }}>
              <img
                src="https://readdy.ai/api/search-image?query=professional%20federal%20investigation%20desk%20setup%20with%20security%20clearance%20paperwork%2C%20confidential%20case%20files%2C%20government%20badge%2C%20fingerprint%20cards%2C%20official%20federal%20documents%2C%20dark%20moody%20lighting%2C%20top%20secret%20folder%20stamps%2C%20investigative%20workspace%2C%20no%20people%2C%20editorial%20photography%20style%2C%20warm%20amber%20and%20dark%20tones&width=700&height=460&seq=investigations_img_01&orientation=landscape"
                alt="Federal background investigation work"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
              <div className="absolute bottom-5 left-5">
                <p className="text-[#F5F1E8] text-xs tracking-[0.2em] uppercase" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Contracted Federal Investigator
                </p>
                <p className="text-[#C9A84C] text-[10px] tracking-[0.15em] uppercase mt-0.5" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Active Top Secret Clearance
                </p>
              </div>
            </div>

            {/* Pull quote */}
            <blockquote className="border-l-2 border-[#C9A84C] pl-8">
              <p
                className="text-[#F5F1E8] text-2xl md:text-3xl font-light italic leading-[1.5]"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                &ldquo;The people entrusted with the nation&apos;s most sensitive work must be worthy of that trust. Every investigation is a promise kept.&rdquo;
              </p>
            </blockquote>
          </div>
        </div>

        {/* Capabilities Grid */}
        <div
          ref={capsRef}
          className="opacity-0 translate-y-8 transition-all duration-1000 ease-out grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {investigationCapabilities.map((cap) => (
            <div
              key={cap.title}
              className="border border-[#F5F1E8]/10 rounded-2xl p-7 hover:border-[#C9A84C]/30 transition-colors duration-300"
            >
              <div className="w-10 h-10 flex items-center justify-center mb-5">
                <i className={`${cap.icon} text-[#C9A84C] text-xl`}></i>
              </div>
              <h4
                className="text-[#F5F1E8] text-lg font-light leading-tight mb-3"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                {cap.title}
              </h4>
              <p
                className="text-[#8B8680] text-sm leading-relaxed"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {cap.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom quote */}
        <div
          ref={quoteRef}
          className="opacity-0 translate-y-8 transition-all duration-1000 ease-out border-t border-[#F5F1E8]/10 pt-16 text-center"
        >
          <p
            className="text-[#F5F1E8]/50 text-xs tracking-[0.3em] uppercase mb-6"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Clearance Level
          </p>
          <p
            className="text-[#C9A84C] text-4xl md:text-6xl font-light italic leading-[1.2]"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Top Secret
          </p>
          <p
            className="text-[#8B8680] text-sm mt-4"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Active &middot; Federal Contract &middot; Background Investigations
          </p>
        </div>
      </div>
    </section>
  );
}