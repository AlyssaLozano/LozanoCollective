import { useEffect, useRef } from 'react';

export default function Hero() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add('opacity-100', 'translate-y-0');
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleScrollDown = () => {
    const about = document.querySelector('#about');
    if (about) about.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative w-full h-screen min-h-[700px] flex items-end overflow-hidden"
    >
      <div className="absolute inset-0 bg-[#1a1200]">
        <img
          src="https://raw.githubusercontent.com/AlyssaLozano/LozanoCollective/main/public/images/Me%20or%20read.png"
          alt="Alyssa Lozano"
          referrerPolicy="no-referrer"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', display: 'block' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/10 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1200]/30 via-transparent to-transparent"></div>
      </div>

      <div
        ref={scrollRef}
        className="relative z-10 w-full px-6 md:px-12 lg:px-20 pb-20 md:pb-28 opacity-0 translate-y-6 transition-all duration-1000 ease-out"
      >
        <div className="max-w-3xl">
          <p
            className="text-[#D4AF37] text-xs tracking-[0.35em] uppercase mb-5 font-medium"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Founder &nbsp;·&nbsp; Educator &nbsp;·&nbsp; Builder &nbsp;·&nbsp; Author
          </p>
          <h1
            className="text-[#F5F1E8] text-5xl md:text-7xl lg:text-8xl font-light leading-[1.05] mb-4"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Alyssa
            <br />
            <span className="italic font-normal">Lozano</span>
          </h1>
          <p
            className="text-[#D4AF37] text-sm md:text-base tracking-[0.15em] font-light mt-3"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            M.S. &nbsp;·&nbsp; M.P.A.
          </p>
          <div className="w-16 h-px bg-[#D4AF37] mt-8 mb-6"></div>
          <p
            className="text-[#F5F1E8]/70 text-sm md:text-base font-light tracking-wide max-w-md leading-relaxed"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Cybersecurity professor. Former NSA leader. Multi-industry founder. Houston, Texas.
          </p>
        </div>
      </div>

      <button
        onClick={handleScrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 cursor-pointer group"
        aria-label="Scroll down"
      >
        <span
          className="text-[#D4AF37]/60 text-[10px] tracking-[0.3em] uppercase group-hover:text-[#D4AF37] transition-colors"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          Scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-[#D4AF37]/60 to-transparent animate-pulse"></div>
      </button>
    </section>
  );
}
