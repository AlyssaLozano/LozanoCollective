import { Link } from 'react-router-dom';
import { useReveal } from '@/hooks/useReveal';
import { ventures } from '@/mocks/ventures';

export default function Ventures() {
  const headRef = useReveal(0.1);
  const gridRef = useReveal(0.05);

  const operating = ventures.filter((v) => v.status === 'Operating');
  const inDev = ventures.filter((v) => v.status === 'In Development' || v.status === 'Pending');

  return (
    <section id="ventures" className="bg-[#0A0A0A] py-28 md:py-40 overflow-hidden">
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
            The Portfolio
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <h2
              className="text-[#F5F1E8] text-5xl md:text-7xl font-light leading-[1.1]"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              Building Across
              <br />
              <span className="italic">Industries</span>
            </h2>
            <p
              className="text-[#8B8680] text-sm font-light leading-relaxed max-w-sm"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              From federal operations to the classroom to the boardroom — a portfolio of ventures built on expertise, integrity, and vision.
            </p>
          </div>
        </div>

        {/* Operating Ventures */}
        <div ref={gridRef} className="opacity-0 translate-y-8 transition-all duration-1000 ease-out">
          <p
            className="text-[#8B8680] text-[10px] tracking-[0.3em] uppercase mb-8 border-b border-white/8 pb-4"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Operating
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {operating.map((venture, i) => (
              <Link
                key={venture.id}
                to={`/ventures/${venture.id}`}
                className="group cursor-pointer"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="bg-[#141414] rounded-2xl overflow-hidden border border-white/5 hover:border-[#C9A84C]/20 transition-all duration-500 h-full flex flex-col">
                  <div className="relative overflow-hidden" style={{ height: '200px' }}>
                    <img
                      src={venture.image}
                      alt={venture.name}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span
                        className="inline-flex items-center gap-1.5 bg-[#0A0A0A]/80 text-[#C9A84C] text-[10px] tracking-[0.2em] uppercase px-3 py-1.5 rounded-full border border-[#C9A84C]/30"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] inline-block animate-pulse"></span>
                        Operating
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <p
                      className="text-[#C9A84C] text-[10px] tracking-[0.25em] uppercase mb-2"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {venture.category}
                    </p>
                    <h3
                      className="text-[#F5F1E8] text-xl font-light mb-3 leading-tight"
                      style={{ fontFamily: 'Cormorant Garamond, serif' }}
                    >
                      {venture.name}
                    </h3>
                    <p
                      className="text-[#8B8680] text-sm leading-relaxed mb-5 flex-1"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {venture.description}
                    </p>
                    <span
                      className="text-[#C9A84C] text-xs tracking-[0.2em] uppercase font-medium flex items-center gap-2 group-hover:gap-3 transition-all"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      View Venture
                      <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* In Development */}
          <p
            className="text-[#8B8680] text-[10px] tracking-[0.3em] uppercase mb-8 border-b border-white/8 pb-4"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            In Development
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {inDev.map((venture, i) => (
              <Link
                key={venture.id}
                to={`/ventures/${venture.id}`}
                className="group cursor-pointer"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="bg-[#141414] rounded-2xl overflow-hidden border border-white/5 hover:border-[#C9A84C]/20 transition-all duration-500 flex flex-col md:flex-row">
                  <div className="relative overflow-hidden md:w-48 shrink-0" style={{ height: '180px' }}>
                    <img
                      src={venture.image}
                      alt={venture.name}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#141414]/60 md:block hidden"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#141414]/60 to-transparent md:hidden"></div>
                  </div>
                  <div className="p-6 flex flex-col justify-between flex-1">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <p
                          className="text-[#C9A84C] text-[10px] tracking-[0.25em] uppercase"
                          style={{ fontFamily: 'Inter, sans-serif' }}
                        >
                          {venture.category}
                        </p>
                        <span
                          className={`text-[10px] tracking-[0.15em] uppercase border px-2.5 py-1 rounded-full ${
                            venture.status === 'Pending'
                              ? 'text-[#C9A84C] border-[#C9A84C]/30'
                              : 'text-[#8B8680] border-white/10'
                          }`}
                          style={{ fontFamily: 'Inter, sans-serif' }}
                        >
                          {venture.status === 'Pending' ? 'Pending Authorization' : 'In Development'}
                        </span>
                      </div>
                      <h3
                        className="text-[#F5F1E8] text-xl font-light mb-2 leading-tight"
                        style={{ fontFamily: 'Cormorant Garamond, serif' }}
                      >
                        {venture.name}
                      </h3>
                      <p
                        className="text-[#C9A84C] text-xs italic mb-3"
                        style={{ fontFamily: 'Cormorant Garamond, serif' }}
                      >
                        &ldquo;{venture.tagline}&rdquo;
                      </p>
                    </div>
                    {venture.progress !== undefined && (
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <span
                            className="text-[#8B8680] text-[10px] tracking-[0.15em] uppercase"
                            style={{ fontFamily: 'Inter, sans-serif' }}
                          >
                            Progress
                          </span>
                          <span
                            className="text-[#C9A84C] text-[10px]"
                            style={{ fontFamily: 'Inter, sans-serif' }}
                          >
                            {venture.progress}%
                          </span>
                        </div>
                        <div className="w-full h-px bg-white/10 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-[#C9A84C] rounded-full transition-all duration-1000"
                            style={{ width: `${venture.progress}%` }}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
