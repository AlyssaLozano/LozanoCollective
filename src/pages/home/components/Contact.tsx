import { useReveal } from '@/hooks/useReveal';

export default function Contact() {
  const headRef = useReveal(0.1);
  const infoRef = useReveal(0.1);

  return (
    <section id="contact" className="bg-[#F5F1E8] py-28 md:py-40 overflow-hidden">
      <div className="px-6 md:px-12 lg:px-20 max-w-screen-xl mx-auto">

        {/* Header */}
        <div ref={headRef} className="opacity-0 translate-y-8 transition-all duration-1000 ease-out mb-20 md:mb-24">
          <p className="text-[#C9A84C] text-xs tracking-[0.35em] uppercase mb-6 italic" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '13px' }}>
            Get in Touch
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <h2 className="text-[#0A0A0A] text-5xl md:text-7xl font-light leading-[1.1]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              Let&apos;s Build
              <br />
              <span className="italic">Something</span>
              <br />
              Extraordinary
            </h2>
            <p className="text-[#5C5752] text-sm font-light leading-relaxed max-w-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
              Whether you&apos;re looking for a keynote speaker, a strategic advisor, a collaborator, or simply want to connect, reach out. Every great partnership begins with a conversation.
            </p>
          </div>
        </div>

        {/* Contact Info */}
        <div ref={infoRef} className="opacity-0 translate-y-8 transition-all duration-1000 ease-out">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

            {/* Left — details */}
            <div className="space-y-10">
              <div>
                <p className="text-[#C9A84C] text-[10px] tracking-[0.3em] uppercase mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>Location</p>
                <p className="text-[#0A0A0A] text-xl font-light" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Houston, Texas</p>
              </div>
              <div>
                <p className="text-[#C9A84C] text-[10px] tracking-[0.3em] uppercase mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>Email</p>
                <a
                  href="mailto:alyssa@lozanoholdings.com"
                  className="text-[#0A0A0A] text-xl font-light hover:text-[#C9A84C] transition-colors cursor-pointer"
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}
                >
                  alyssa@lozanoholdings.com
                </a>
              </div>
              <div>
                <p className="text-[#C9A84C] text-[10px] tracking-[0.3em] uppercase mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>Inquiries</p>
                <p className="text-[#0A0A0A] text-base font-light leading-relaxed" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  Speaking &amp; Media<br />
                  Advisory &amp; Consulting<br />
                  Academic Collaboration<br />
                  Press &amp; Interviews
                </p>
              </div>
              <div>
                <p className="text-[#C9A84C] text-[10px] tracking-[0.3em] uppercase mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>Connect</p>
                <div className="flex items-center gap-4">
                  <a
                    href="https://www.linkedin.com/in/innerempire/"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    aria-label="LinkedIn"
                    className="w-10 h-10 flex items-center justify-center border border-[#0A0A0A]/15 rounded-full text-[#0A0A0A] hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all duration-300 cursor-pointer"
                  >
                    <i className="ri-linkedin-line text-base"></i>
                  </a>
                  <a
                    href="mailto:alyssa@lozanoholdings.com"
                    aria-label="Email"
                    className="w-10 h-10 flex items-center justify-center border border-[#0A0A0A]/15 rounded-full text-[#0A0A0A] hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all duration-300 cursor-pointer"
                  >
                    <i className="ri-mail-line text-base"></i>
                  </a>
                </div>
              </div>

            </div>

            {/* Right — CTA card */}
            <div className="relative rounded-3xl overflow-hidden bg-[#0A0A0A] p-10 md:p-14 flex flex-col justify-between" style={{ minHeight: '420px' }}>
              <div>
                <p className="text-[#C9A84C] text-[10px] tracking-[0.3em] uppercase mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>Direct Line</p>
                <h3 className="text-[#F5F1E8] text-3xl md:text-4xl font-light leading-[1.3] mb-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  The best conversations
                  <br />
                  <span className="italic text-[#C9A84C]">start with a simple email.</span>
                </h3>
                <p className="text-[#8B8680] text-sm leading-relaxed max-w-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                  No forms, no gatekeepers. Send a note and let&apos;s see what we can build together.
                </p>
              </div>
              <a
                href="mailto:alyssa@lozanoholdings.com"
                className="whitespace-nowrap mt-10 inline-flex items-center gap-3 bg-[#C9A84C] text-[#0A0A0A] text-xs tracking-[0.2em] uppercase px-8 py-4 rounded-full hover:bg-[#F5F1E8] transition-all duration-300 cursor-pointer font-semibold self-start"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                alyssa@lozanoholdings.com
                <i className="ri-arrow-right-line text-sm"></i>
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
