import { useReveal } from '@/hooks/useReveal';

const pressFeatures = [
  {
    outlet: 'Voyage Maryland',
    headline: 'Meet Alyssa Lozano of Three Pillars Property Management',
    type: 'Feature',
    url: 'https://voyagemaryland.com/interview/meet-alyssa-lozano-of-three-pillars-property-management',
  },
  {
    outlet: 'Voyage Houston',
    headline: 'Exploring Life & Business with Alyssa Phillips of Three Pillars Property Management',
    type: 'Feature',
    url: 'https://voyagehouston.com/interview/exploring-life-business-with-alyssa-phillips-of-three-pillars-property-management/',
  },
  {
    outlet: 'Medium — Visionary Minds Media',
    headline: 'Owner of Empower Youth Homes, Alyssa Phillips, on Helping Misplaced Teens Obtain Success',
    type: 'Profile',
    url: 'https://medium.com/visionarymindsmedia/owner-of-empower-youth-homes-alyssa-phillips-on-helping-misplaced-teens-obtain-success-and-have-a-ee160a5a8966',
  },
  {
    outlet: 'Vocal',
    headline: 'Visionary Women Spotlight: Entrepreneur & Humanitarian Alyssa Phillips',
    type: 'Spotlight',
    url: 'https://vocal.media/interview/visionary-women-spotlight-entrepreneur-humanitarian-alyssa-phillips',
  },
  {
    outlet: 'LinkedIn',
    headline: 'Connect with Alyssa Lozano — Cybersecurity Leader, Educator & Founder',
    type: 'Professional',
    url: 'https://www.linkedin.com/in/innerempire/',
  },
];

const typeColors: Record<string, string> = {
  Feature: 'text-[#C9A84C] border-[#C9A84C]/30',
  Profile: 'text-[#F5F1E8]/60 border-white/20',
  Spotlight: 'text-[#C9A84C] border-[#C9A84C]/30',
  Professional: 'text-[#F5F1E8]/60 border-white/20',
};

export default function Media() {
  const headRef = useReveal(0.1);
  const stripRef = useReveal(0.05);
  const ctaRef = useReveal(0.1);

  return (
    <section id="media" className="bg-[#0A0A0A] py-28 md:py-40 overflow-hidden">
      <div className="px-6 md:px-12 lg:px-20 max-w-screen-xl mx-auto">

        {/* Header */}
        <div
          ref={headRef}
          className="opacity-0 translate-y-8 transition-all duration-1000 ease-out mb-20 md:mb-24"
        >
          <p
            className="text-[#C9A84C] text-xs tracking-[0.35em] uppercase mb-6 italic"
            style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '13px' }}
          >
            Media &amp; Press
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <h2
              className="text-[#F5F1E8] text-5xl md:text-7xl font-light leading-[1.1]"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              As Seen &amp;
              <br />
              <span className="italic">Heard</span>
            </h2>
            <p
              className="text-[#8B8680] text-sm font-light leading-relaxed max-w-sm"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Featured across national publications and media platforms, bringing depth to conversations on entrepreneurship, cybersecurity, and social impact.
            </p>
          </div>
        </div>

        {/* Editorial Press Strip */}
        <div
          ref={stripRef}
          className="opacity-0 translate-y-8 transition-all duration-1000 ease-out"
        >
          <div className="divide-y divide-white/8">
            {pressFeatures.map((item, i) => (
              <a
                key={item.url}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-8 md:py-10 hover:bg-white/[0.02] transition-colors duration-300 cursor-pointer"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="flex items-start sm:items-center gap-6 flex-1 min-w-0">
                  {/* Index */}
                  <span
                    className="text-[#8B8680]/40 text-xs tracking-[0.2em] shrink-0 mt-1 sm:mt-0"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    0{i + 1}
                  </span>
                  {/* Outlet + Headline */}
                  <div className="min-w-0">
                    <p
                      className="text-[#C9A84C] text-[10px] tracking-[0.25em] uppercase mb-2"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {item.outlet}
                    </p>
                    <h3
                      className="text-[#F5F1E8] text-xl md:text-2xl font-light leading-snug group-hover:text-[#C9A84C] transition-colors duration-300"
                      style={{ fontFamily: 'Cormorant Garamond, serif' }}
                    >
                      {item.headline}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-6 shrink-0 pl-10 sm:pl-0">
                  <span
                    className={`text-[10px] tracking-[0.2em] uppercase px-3 py-1.5 rounded-full border ${typeColors[item.type] || 'text-[#8B8680] border-white/10'}`}
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {item.type}
                  </span>
                  <span className="text-[#8B8680] group-hover:text-[#C9A84C] transition-colors duration-300 w-8 h-8 flex items-center justify-center">
                    <i className="ri-arrow-right-up-line text-lg"></i>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Speaking CTA */}
        <div
          ref={ctaRef}
          className="opacity-0 translate-y-8 transition-all duration-1000 ease-out mt-20 border-t border-white/10 pt-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
        >
          <div>
            <p
              className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase mb-3"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Speaking Engagements
            </p>
            <p
              className="text-[#F5F1E8] text-2xl md:text-3xl font-light"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              Available for keynotes, panels,
              <br />
              <span className="italic">and media appearances.</span>
            </p>
          </div>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="whitespace-nowrap inline-flex items-center gap-3 border border-[#C9A84C]/40 text-[#C9A84C] text-xs tracking-[0.2em] uppercase px-8 py-4 rounded-full hover:bg-[#C9A84C] hover:text-[#0A0A0A] transition-all duration-300 cursor-pointer"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Inquire Now
            <i className="ri-arrow-right-line text-sm"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
