interface ALLogoProps {
  /** 'light' = cream letters on dark bg (for dark navbars/footers), 'dark' = dark letters on light bg */
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
}

const sizeMap = {
  sm: { outer: 'w-8 h-8', text: 'text-base', bar: 'w-3 h-px' },
  md: { outer: 'w-10 h-10', text: 'text-xl', bar: 'w-4 h-px' },
  lg: { outer: 'w-14 h-14', text: 'text-3xl', bar: 'w-5 h-px' },
};

export default function ALLogo({ variant = 'dark', size = 'md' }: ALLogoProps) {
  const s = sizeMap[size];

  const bgClass = variant === 'light' ? 'bg-[#F5F1E8]' : 'bg-[#0A0A0A]';
  const letterClass = variant === 'light' ? 'text-[#0A0A0A]' : 'text-[#F5F1E8]';

  return (
    <div className={`relative ${s.outer} flex items-center justify-center shrink-0`}>
      {/* Outer square with thin gold border */}
      <div
        className={`absolute inset-0 ${bgClass} border border-[#C9A84C]/60`}
        style={{ borderRadius: '2px' }}
      />
      {/* Gold corner accent — top right */}
      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#C9A84C]" style={{ borderRadius: '0 2px 0 0' }} />
      {/* Gold corner accent — bottom left */}
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#C9A84C]" style={{ borderRadius: '0 0 0 2px' }} />

      {/* Monogram */}
      <span
        className={`relative z-10 ${s.text} ${letterClass} tracking-[-0.04em] select-none`}
        style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontWeight: 300,
          lineHeight: 1,
          letterSpacing: '-0.02em',
        }}
      >
        <span>A</span>
        <span className="text-[#C9A84C]">L</span>
      </span>
    </div>
  );
}
