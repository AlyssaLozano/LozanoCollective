import { useReveal } from '@/hooks/useReveal';

const books = [
  {
    id: 'cybersecurity',
    title: 'So You Want to Get Into Cybersecurity?',
    subtitle: 'Career Pathways, Real Roles, and Where You Fit',
    author: 'Professor Lozano',
    description:
      'A practical, no-fluff guide for anyone trying to break into cybersecurity — mapping real career paths, demystifying certifications, and helping you find exactly where you fit. Written by a former NSA professional and cybersecurity professor.',
    amazonUrl: 'https://www.amazon.com/You-Want-Get-Into-Cybersecurity/dp/B0GC5JFJJH',
    coverUrl: 'https://static.readdy.ai/image/eeec8f72bff1cf0b863e9b5d60a6e4df/1d1123d4c53ed1bc66d6372a6cc5b33a.png',
    coverBg: '#0D1A2E',
    coverAccent: '#C9A84C',
    comingSoon: false,
  },
  {
    id: 'pattern-work',
    title: 'THE PATTERN WORK',
    subtitle: 'A Workbook for Clarity in Love, Business, and Self',
    author: 'Lyssa Monroe',
    description:
      'A reflective workbook for identifying unhealthy patterns, learning power strategies, and taking action steps toward the life you actually want.',
    amazonUrl: 'https://www.amazon.com/PATTERN-WORK-Workbook-Clarity-Business/dp/B0G819PL6Q',
    coverUrl: 'https://m.media-amazon.com/images/I/613ITgT9UKL._SY466_.jpg',
    coverBg: '#F5EDD8',
    coverAccent: '#C9A84C',
    comingSoon: false,
  },
  {
    id: 'real-estate',
    title: "Real Estate Investor's Journal",
    subtitle: 'A Guided Path for New Investors to Put Capital to Work',
    author: 'Lyssa Monroe',
    description:
      'A structured, guided journal for new real estate investors — helping you think clearly, move strategically, and put your capital to work with intention.',
    amazonUrl: 'https://www.amazon.com/Real-Estate-Investors-Journal-Capital/dp/B0G7Z7YYVM',
    coverUrl: 'https://images-na.ssl-images-amazon.com/images/I/71PJPrHiGgL._AC_UL495_SR495,495_.jpg',
    coverBg: '#0D1A0D',
    coverAccent: '#C9A84C',
    comingSoon: false,
  },
  {
    id: 'credit-repair',
    title: 'The Credit Repair Workbook',
    subtitle: 'A Practical Workbook for Understanding, Repairing, and Maintaining Credit',
    author: 'Lyssa Monroe',
    description:
      'A no-shame, no-shortcut workbook for anyone with bad, damaged, or limited credit who wants to understand how credit really works — and fix it for good.',
    amazonUrl: 'https://www.amazon.com/Credit-Repair-Workbook-Understanding-Maintaining/dp/B0G8XMPBYH',
    coverUrl: 'https://images-na.ssl-images-amazon.com/images/I/71B1I8AzpuL._AC_UL495_SR495,495_.jpg',
    coverBg: '#0A1A1A',
    coverAccent: '#D4AF37',
    comingSoon: false,
  },
];

function BookCover({ book }: { book: typeof books[0] }) {
  return (
    <div
      className="relative w-full rounded-lg overflow-hidden"
      style={{
        height: '340px',
        background: book.coverBg,
        boxShadow: '10px 10px 30px rgba(0,0,0,0.5), -3px 0 0 rgba(255,255,255,0.06), inset -1px 0 0 rgba(0,0,0,0.3)',
      }}
    >
      {/* Spine shadow */}
      <div
        className="absolute left-0 top-0 bottom-0 w-4 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.5), transparent)' }}
      />
      {/* Top sheen */}
      <div className="absolute top-0 left-0 right-0 h-px bg-white/15 z-10" />

      {book.comingSoon ? (
        /* Placeholder for cybersecurity book */
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
          <div className="w-10 h-px mb-6" style={{ background: book.coverAccent }} />
          <p className="text-[10px] tracking-[0.3em] uppercase mb-3 opacity-50" style={{ fontFamily: 'Inter, sans-serif', color: book.coverAccent }}>
            Cover Coming Soon
          </p>
          <p
            className="text-[#F5F1E8] text-xl font-light leading-tight text-center px-4"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            {book.title}
          </p>
          <div className="w-8 h-px mt-5 mb-3" style={{ background: book.coverAccent }} />
          <p className="text-[10px] tracking-[0.2em] uppercase opacity-50" style={{ fontFamily: 'Inter, sans-serif', color: book.coverAccent }}>
            {book.author}
          </p>
        </div>
      ) : (
        /* Real cover image */
        <img
          src={book.coverUrl!}
          alt={`${book.title} by ${book.author}`}
          className="w-full h-full object-cover object-top"
          onError={(e) => {
            /* Fallback if image fails to load */
            const target = e.currentTarget as HTMLImageElement;
            target.style.display = 'none';
            const fallback = target.nextElementSibling as HTMLElement;
            if (fallback) fallback.style.display = 'flex';
          }}
        />
      )}

      {/* Fallback for broken images */}
      {!book.comingSoon && (
        <div
          className="absolute inset-0 flex-col items-center justify-center p-6 text-center hidden"
          style={{ background: book.coverBg }}
        >
          <p className="text-[#F5F1E8] text-xl font-light leading-tight text-center px-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            {book.title}
          </p>
          <div className="w-8 h-px mt-4" style={{ background: book.coverAccent }} />
          <p className="text-[10px] tracking-[0.2em] uppercase mt-3 opacity-50" style={{ fontFamily: 'Inter, sans-serif', color: book.coverAccent }}>
            {book.author}
          </p>
        </div>
      )}
    </div>
  );
}

export default function Publications() {
  const headRef = useReveal(0.1);
  const booksRef = useReveal(0.05);
  const quoteRef = useReveal(0.1);

  return (
    <section id="publications" className="bg-[#F5F1E8] py-28 md:py-40 overflow-hidden">
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
              Published Works
            </p>
            <h2
              className="text-[#0A0A0A] text-5xl md:text-7xl font-light leading-[1.1]"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              Words That
              <br />
              <span className="italic">Shape the</span>
              <br />
              Conversation
            </h2>
          </div>
          <p
            className="text-[#5C5752] text-sm font-light leading-relaxed max-w-sm lg:text-right"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Four books across cybersecurity, personal development, real estate, and financial literacy. Written under two names, for one purpose: to give people the tools they were never handed. All available now on Amazon.
          </p>
        </div>

        {/* Books Shelf Grid */}
        <div
          ref={booksRef}
          className="opacity-0 translate-y-8 transition-all duration-1000 ease-out"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {books.map((book, i) => (
              <div
                key={book.id}
                className="group"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {/* Cover with hover lift */}
                <div className="transition-transform duration-500 group-hover:-translate-y-3">
                  <BookCover book={book} />
                </div>

                {/* Info */}
                <div className="mt-6">
                  <h3
                    className="text-[#0A0A0A] text-lg font-light leading-tight mb-1"
                    style={{ fontFamily: 'Cormorant Garamond, serif' }}
                  >
                    {book.title}
                  </h3>
                  <p
                    className="text-[#8B8680] text-xs leading-relaxed mb-3 italic"
                    style={{ fontFamily: 'Cormorant Garamond, serif' }}
                  >
                    {book.subtitle}
                  </p>
                  <p
                    className="text-[#C9A84C] text-[10px] tracking-[0.2em] uppercase mb-4"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    by {book.author}
                  </p>
                  <p
                    className="text-[#5C5752] text-xs leading-relaxed mb-5"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {book.description}
                  </p>
                  {!book.comingSoon ? (
                    <a
                      href={book.amazonUrl}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="whitespace-nowrap inline-flex items-center gap-2 border border-[#0A0A0A]/20 text-[#0A0A0A] text-[10px] tracking-[0.2em] uppercase px-5 py-2.5 rounded-full hover:bg-[#0A0A0A] hover:text-[#F5F1E8] transition-all duration-300 cursor-pointer"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      <i className="ri-amazon-line text-sm"></i>
                      Order on Amazon
                    </a>
                  ) : (
                    <span
                      className="whitespace-nowrap inline-flex items-center gap-2 border border-[#C9A84C]/30 text-[#C9A84C] text-[10px] tracking-[0.2em] uppercase px-5 py-2.5 rounded-full"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      Link Coming Soon
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quote */}
        <div
          ref={quoteRef}
          className="opacity-0 translate-y-8 transition-all duration-1000 ease-out mt-24 border-t border-[#0A0A0A]/10 pt-16 text-center"
        >
          <p
            className="text-[#0A0A0A] text-3xl md:text-5xl font-light italic leading-[1.4] max-w-3xl mx-auto"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            &ldquo;Always present the respectful truth rather than artificial harmony.&rdquo;
          </p>
          <p
            className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase mt-6"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            — Alyssa Lozano
          </p>
        </div>
      </div>
    </section>
  );
}
