import ALLogo from '@/components/base/ALLogo';

export default function Footer() {
  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A0A0A] py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-screen-xl mx-auto">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 pb-12 border-b border-white/10">
          {/* Logo + Tagline */}
          <div className="flex items-center gap-4">
            <ALLogo variant="dark" size="md" />
            <div>
              <p
                className="text-[#F5F1E8] text-sm font-light"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                Alyssa Lozano
              </p>
              <p
                className="text-[#8B8680] text-[10px] tracking-[0.2em] uppercase"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                M.S. · M.P.A.
              </p>
            </div>
          </div>

          {/* Nav Links */}
          <nav>
            <ul className="flex flex-wrap gap-8">
              {[
                { label: 'About', href: '#about' },
                { label: 'Ventures', href: '#ventures' },
                { label: 'Publications', href: '#publications' },
                { label: 'Media', href: '#media' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNav(e, link.href)}
                    className="text-[#8B8680] hover:text-[#C9A84C] text-[10px] tracking-[0.2em] uppercase transition-colors cursor-pointer whitespace-nowrap"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social */}
          <div className="flex items-center gap-4">
            {[
              { icon: 'ri-linkedin-line', label: 'LinkedIn', href: 'https://www.linkedin.com/in/innerempire/' },
              { icon: 'ri-mail-line', label: 'Email', href: 'mailto:mrs.alyssa.lozano@gmail.com' },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={social.href.startsWith('http') ? 'noopener noreferrer nofollow' : undefined}
                aria-label={social.label}
                className="w-9 h-9 flex items-center justify-center border border-white/10 rounded-full text-[#8B8680] hover:border-[#C9A84C]/40 hover:text-[#C9A84C] transition-all duration-300 cursor-pointer"
              >
                <i className={`${social.icon} text-sm`}></i>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-8">
          <p
            className="text-[#8B8680] text-xs"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            &copy; 2026 Alyssa Lozano. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-[#8B8680] hover:text-[#C9A84C] text-xs transition-colors cursor-pointer"
              style={{ fontFamily: 'Inter, sans-serif' }}
              rel="nofollow"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-[#8B8680] hover:text-[#C9A84C] text-xs transition-colors cursor-pointer"
              style={{ fontFamily: 'Inter, sans-serif' }}
              rel="nofollow"
            >
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
