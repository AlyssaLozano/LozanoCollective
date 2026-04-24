import { useState, useEffect } from 'react';
import ALLogo from '@/components/base/ALLogo';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Real Estate', href: '#real-estate' },
  { label: 'Teaching', href: '#teaching' },
  { label: 'Ventures', href: '#ventures' },
  { label: 'Publications', href: '#publications' },
  { label: 'Media', href: '#media' },
  { label: 'The Journey', href: '#personal-story' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-[#F5F1E8] shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="px-6 md:px-12 lg:px-20 py-5 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" onClick={(e) => handleNav(e, '#hero')} className="flex items-center gap-3 cursor-pointer group">
          <ALLogo variant={scrolled ? 'light' : 'dark'} size="md" />
          <span
            className={`hidden sm:block text-sm font-light tracking-[0.08em] transition-colors duration-300 ${scrolled ? 'text-[#0A0A0A]' : 'text-[#F5F1E8]'}`}
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Alyssa Lozano
          </span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={(e) => handleNav(e, link.href)}
                className={`text-xs tracking-[0.2em] uppercase font-medium transition-colors duration-300 cursor-pointer whitespace-nowrap ${
                  scrolled ? 'text-[#0A0A0A] hover:text-[#C9A84C]' : 'text-[#F5F1E8] hover:text-[#D4AF37]'
                }`}
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          className={`md:hidden w-8 h-8 flex items-center justify-center cursor-pointer ${scrolled ? 'text-[#0A0A0A]' : 'text-[#F5F1E8]'}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <i className={`text-xl ${menuOpen ? 'ri-close-line' : 'ri-menu-3-line'}`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-[#F5F1E8] overflow-hidden transition-all duration-400 ${
          menuOpen ? 'max-h-96 py-6' : 'max-h-0'
        }`}
      >
        <ul className="flex flex-col items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={(e) => handleNav(e, link.href)}
                className="text-xs tracking-[0.2em] uppercase font-medium text-[#0A0A0A] hover:text-[#C9A84C] transition-colors cursor-pointer whitespace-nowrap"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
