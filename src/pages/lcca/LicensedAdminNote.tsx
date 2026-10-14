type Props = {
  variant?: 'light' | 'dark';
};

export default function LicensedAdminNote({ variant = 'light' }: Props) {
  const dark = variant === 'dark';
  return (
    <div
      className={`flex flex-col md:flex-row items-start md:items-center justify-between gap-5 rounded-3xl border p-6 md:p-8 ${
        dark ? 'bg-white/5 border-[#C9A84C]/30' : 'bg-white border-[#C9A84C]/30'
      }`}
    >
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-[#C9A84C]/15 border border-[#C9A84C]/20 shrink-0">
          <i className="ri-award-line text-[#C9A84C] text-2xl"></i>
        </div>
        <div>
          <p className="text-[#C9A84C] text-[10px] tracking-[0.3em] uppercase mb-1">Once You&apos;re Licensed</p>
          <h3
            className={`text-xl md:text-2xl font-light leading-tight mb-1 ${dark ? 'text-[#F5F1E8]' : 'text-[#0A0A0A]'}`}
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Get your name on licensedadmin.com
          </h3>
          <p className={`text-sm leading-relaxed ${dark ? 'text-[#8B8680]' : 'text-[#5C5752]'}`}>
            After you pass the exam and receive your license, request to have your name added to the licensedadmin.com page by submitting your details through the form there.
          </p>
        </div>
      </div>
      <a
        href="https://licensedadmin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="whitespace-nowrap inline-flex items-center gap-3 bg-[#C9A84C] text-[#0A0A0A] text-xs tracking-[0.2em] uppercase px-8 py-4 rounded-full hover:bg-[#F5F1E8] hover:text-[#0A0A0A] transition-all duration-300 cursor-pointer font-semibold shrink-0"
      >
        Visit licensedadmin.com
        <i className="ri-external-link-line"></i>
      </a>
    </div>
  );
}
