import { useState } from 'react';
import { useReveal } from '@/hooks/useReveal';

const milestones = [
  {
    label: 'Age 19',
    title: 'First Investment',
    desc: 'Started with a duplex — learning the fundamentals of cash flow, tenants, and property management before most people had their first real job.',
  },
  {
    label: 'Early Portfolio',
    title: 'Single Families & Duplexes',
    desc: 'Scaled through single-family homes and small multifamily properties, building equity and operational systems one door at a time.',
  },
  {
    label: 'The Shift',
    title: 'Multi-Family & Apartments',
    desc: 'Moved into the apartment building and multi-family space — larger assets, larger impact, and a more sophisticated approach to capital deployment.',
  },
  {
    label: 'Development',
    title: 'Major Construction Projects',
    desc: 'Beyond acquiring and holding, Alyssa has developed property through major construction projects — ground-up and value-add work that most investors never attempt.',
  },
];

const propertyPairs = [
  {
    id: 'property-1',
    label: 'Property 1',
    before: 'https://raw.githubusercontent.com/AlyssaLozano/LozanoCollective/main/public/images/char.png',
    after: 'https://raw.githubusercontent.com/AlyssaLozano/LozanoCollective/main/public/images/ater%20char.png',
  },
  {
    id: 'property-2',
    label: 'Property 2',
    before: 'https://raw.githubusercontent.com/AlyssaLozano/LozanoCollective/main/public/images/Broadway1.png',
    after: 'https://raw.githubusercontent.com/AlyssaLozano/LozanoCollective/main/public/images/Broadway_St-18.jpg',
  },
  {
    id: 'property-3',
    label: 'Property 3',
    before: 'https://raw.githubusercontent.com/AlyssaLozano/LozanoCollective/main/public/images/chartres1.png',
    after: 'https://raw.githubusercontent.com/AlyssaLozano/LozanoCollective/main/public/images/after%20barb.png',
  },
  {
    id: 'property-4',
    label: 'Property 4',
    before: 'https://raw.githubusercontent.com/AlyssaLozano/LozanoCollective/main/public/images/290434322_608060007156187_73918581961655303_n.jpg',
    after: 'https://raw.githubusercontent.com/AlyssaLozano/LozanoCollective/main/public/images/290555297_421935503182882_5685989387358868386_n.jpg',
  },
  {
    id: 'property-5',
    label: 'Property 5',
    before: 'https://raw.githubusercontent.com/AlyssaLozano/LozanoCollective/main/public/images/broadway%202.png',
    after: 'https://raw.githubusercontent.com/AlyssaLozano/LozanoCollective/main/public/images/IMG_0063.jpg',
  },
  {
    id: 'property-6',
    label: 'Property 6',
    before: 'https://raw.githubusercontent.com/AlyssaLozano/LozanoCollective/main/public/images/Screenshot_20211204-135528_Chrome.jpg',
    after: 'https://raw.githubusercontent.com/AlyssaLozano/LozanoCollective/main/public/images/289611374_357942549782506_4544959039348860593_n.jpg',
  },
  {
    id: 'property-7',
    label: 'Property 7',
    before: 'https://raw.githubusercontent.com/AlyssaLozano/LozanoCollective/main/public/images/290820755_353873290228171_21096874379294813_n.jpg',
    after: 'https://raw.githubusercontent.com/AlyssaLozano/LozanoCollective/main/public/images/img-3.jpeg',
  },
  {
    id: 'property-8',
    label: 'Property 8',
    before: 'https://raw.githubusercontent.com/AlyssaLozano/LozanoCollective/main/public/images/broadmead.png',
    after: 'https://raw.githubusercontent.com/AlyssaLozano/LozanoCollective/main/public/images/broadmead.jpeg',
  },
];

const constructionAfterPhotos = [
  'https://raw.githubusercontent.com/AlyssaLozano/LozanoCollective/main/public/images/290461631_411111827630790_2347344700588687887_n.jpg',
  'https://raw.githubusercontent.com/AlyssaLozano/LozanoCollective/main/public/images/290466737_403475581806009_7084288586909982285_n.jpg',
  'https://raw.githubusercontent.com/AlyssaLozano/LozanoCollective/main/public/images/IMG_0647.JPG',
  'https://raw.githubusercontent.com/AlyssaLozano/LozanoCollective/main/public/images/IMG_0648.JPG',
  'https://raw.githubusercontent.com/AlyssaLozano/LozanoCollective/main/public/images/IMG_0649.JPG',
  'https://raw.githubusercontent.com/AlyssaLozano/LozanoCollective/main/public/images/IMG_0650.JPG',
  'https://raw.githubusercontent.com/AlyssaLozano/LozanoCollective/main/public/images/IMG_0651.JPG',
  'https://raw.githubusercontent.com/AlyssaLozano/LozanoCollective/main/public/images/IMG_0652.JPG',
  'https://raw.githubusercontent.com/AlyssaLozano/LozanoCollective/main/public/images/IMG_0653.JPG',
  'https://raw.githubusercontent.com/AlyssaLozano/LozanoCollective/main/public/images/img-1%20(1).jpeg',
  'https://raw.githubusercontent.com/AlyssaLozano/LozanoCollective/main/public/images/img-12.jpeg',
  'https://raw.githubusercontent.com/AlyssaLozano/LozanoCollective/main/public/images/img-2.jpeg',
  'https://raw.githubusercontent.com/AlyssaLozano/LozanoCollective/main/public/images/img-20%20(1).jpeg',
  'https://raw.githubusercontent.com/AlyssaLozano/LozanoCollective/main/public/images/img-20.jpeg',
  'https://raw.githubusercontent.com/AlyssaLozano/LozanoCollective/main/public/images/img-22.jpeg',
  'https://raw.githubusercontent.com/AlyssaLozano/LozanoCollective/main/public/images/img-25.jpeg',
  'https://raw.githubusercontent.com/AlyssaLozano/LozanoCollective/main/public/images/img-27.jpeg',
  'https://raw.githubusercontent.com/AlyssaLozano/LozanoCollective/main/public/images/img-3.jpeg',
  'https://raw.githubusercontent.com/AlyssaLozano/LozanoCollective/main/public/images/img-31.jpeg',
  'https://raw.githubusercontent.com/AlyssaLozano/LozanoCollective/main/public/images/img-33.jpeg',
  'https://raw.githubusercontent.com/AlyssaLozano/LozanoCollective/main/public/images/img-38.jpeg',
  'https://raw.githubusercontent.com/AlyssaLozano/LozanoCollective/main/public/images/img-4.jpeg',
  'https://raw.githubusercontent.com/AlyssaLozano/LozanoCollective/main/public/images/img-41.jpeg',
  'https://raw.githubusercontent.com/AlyssaLozano/LozanoCollective/main/public/images/img-44.jpeg',
  'https://raw.githubusercontent.com/AlyssaLozano/LozanoCollective/main/public/images/img-45.jpeg',
  'https://raw.githubusercontent.com/AlyssaLozano/LozanoCollective/main/public/images/img-47.jpeg',
  'https://raw.githubusercontent.com/AlyssaLozano/LozanoCollective/main/public/images/img-7.jpeg',
  'https://raw.githubusercontent.com/AlyssaLozano/LozanoCollective/main/public/images/img-9.jpeg',
  'https://raw.githubusercontent.com/AlyssaLozano/LozanoCollective/main/public/images/n2.jpeg',
];

const inProgressPhotos = [
  'https://raw.githubusercontent.com/AlyssaLozano/LozanoCollective/main/public/images/290424164_837025650826313_4865875113411295532_n.jpg',
  'https://raw.githubusercontent.com/AlyssaLozano/LozanoCollective/main/public/images/290553431_1012830619376562_4941515039546042924_n.jpg',
  'https://raw.githubusercontent.com/AlyssaLozano/LozanoCollective/main/public/images/290456160_564944241749216_7939236840950059981_n.jpg',
  'https://raw.githubusercontent.com/AlyssaLozano/LozanoCollective/main/public/images/290593573_1802842203257891_7254462805028144449_n.jpg',
  'https://raw.githubusercontent.com/AlyssaLozano/LozanoCollective/main/public/images/IMG_1159.jpeg',
  'https://raw.githubusercontent.com/AlyssaLozano/LozanoCollective/main/public/images/IMG_1170.jpeg',
];

const duringConstructionPhotos = inProgressPhotos;

const afterPhotosRow1: string[] = [];

const afterPhotosRow2: string[] = [];

const afterPhotosRow3: string[] = [];

const afterPhotosRow4: string[] = [];

const afterPhotosRow5 = [
  'https://raw.githubusercontent.com/AlyssaLozano/LozanoCollective/main/public/images/img-8.jpeg',
  'https://raw.githubusercontent.com/AlyssaLozano/LozanoCollective/main/public/images/img-9.jpeg',
  'https://raw.githubusercontent.com/AlyssaLozano/LozanoCollective/main/public/images/b1.jpeg',
  'https://raw.githubusercontent.com/AlyssaLozano/LozanoCollective/main/public/images/n2.jpeg',
];

const afterPhotosRow6: string[] = [];

const rentalPortfolioPhotos = [
  'https://raw.githubusercontent.com/AlyssaLozano/LozanoCollective/main/public/images/56%20front.jpg',
  'https://raw.githubusercontent.com/AlyssaLozano/LozanoCollective/main/public/images/kitchen%20broadway.jpg',
  'https://raw.githubusercontent.com/AlyssaLozano/LozanoCollective/main/public/images/kitchen.png',
  'https://raw.githubusercontent.com/AlyssaLozano/LozanoCollective/main/public/images/living%20room%20broadway.jpg',
  'https://raw.githubusercontent.com/AlyssaLozano/LozanoCollective/main/public/images/outside.png',
  'https://raw.githubusercontent.com/AlyssaLozano/LozanoCollective/main/public/images/290466737_403475581806009_7084288586909982285_n.jpg',
  'https://raw.githubusercontent.com/AlyssaLozano/LozanoCollective/main/public/images/img-8.jpeg',
  'https://raw.githubusercontent.com/AlyssaLozano/LozanoCollective/main/public/images/living%20room.jpg',
];

function PropertyCard({ pair }: { pair: typeof propertyPairs[0] }) {
  const [active, setActive] = useState<'before' | 'after'>('before');

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <p className="text-[#C9A84C] text-[10px] tracking-[0.25em] uppercase" style={{ fontFamily: 'Inter, sans-serif' }}>
          {pair.label}
        </p>
        <div className="flex items-center gap-1 bg-white/8 rounded-full p-1">
          <button
            onClick={() => setActive('before')}
            className={`whitespace-nowrap text-[10px] tracking-[0.15em] uppercase px-4 py-1.5 rounded-full transition-all duration-300 cursor-pointer ${active === 'before' ? 'bg-white/20 text-[#F5F1E8]' : 'text-[#8B8680] hover:text-[#F5F1E8]'}`}
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Before
          </button>
          <button
            onClick={() => setActive('after')}
            className={`whitespace-nowrap text-[10px] tracking-[0.15em] uppercase px-4 py-1.5 rounded-full transition-all duration-300 cursor-pointer ${active === 'after' ? 'bg-[#C9A84C] text-[#0A0A0A] font-semibold' : 'text-[#8B8680] hover:text-[#F5F1E8]'}`}
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            After
          </button>
        </div>
      </div>
      <div className="relative rounded-2xl overflow-hidden bg-[#1a1a1a]" style={{ height: '260px' }}>
        <img
          src={active === 'before' ? pair.before : pair.after}
          alt={`${pair.label} — ${active}`}
          className="w-full h-full object-cover object-center transition-opacity duration-500"
          referrerPolicy="no-referrer"
          onError={(e) => {
            const t = e.currentTarget as HTMLImageElement;
            t.style.opacity = '0.3';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>
        <div className="absolute bottom-4 left-4">
          <span
            className={`text-[10px] tracking-[0.2em] uppercase px-3 py-1.5 rounded-full font-semibold ${active === 'after' ? 'bg-[#C9A84C] text-[#0A0A0A]' : 'bg-black/70 backdrop-blur-sm text-[#F5F1E8] border border-white/20'}`}
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            {active === 'before' ? 'Before' : 'After'}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function RealEstate() {
  const headRef = useReveal(0.1);
  const storyRef = useReveal(0.1);
  const galleryRef = useReveal(0.08);
  const constructionRef = useReveal(0.08);
  const milestonesRef = useReveal(0.08);
  const originRef = useReveal(0.1);

  return (
    <section id="real-estate" className="bg-[#0A0A0A] py-28 md:py-40 overflow-hidden">
      <div className="px-6 md:px-12 lg:px-20 max-w-screen-xl mx-auto">

        <div ref={headRef} className="opacity-0 translate-y-8 transition-all duration-1000 ease-out mb-12 md:mb-16">
          <p className="text-[#C9A84C] text-xs tracking-[0.35em] uppercase mb-6 italic" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '13px' }}>
            Real Estate
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-10">
            <h2 className="text-[#F5F1E8] text-5xl md:text-7xl font-light leading-[1.1]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              Built on
              <br />
              <span className="italic text-[#C9A84C]">Brick &amp; Equity</span>
            </h2>
            <p className="text-[#8B8680] text-sm font-light leading-relaxed max-w-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
              A real estate journey that started at 19 and never stopped. From a single duplex to a multi-million dollar portfolio spanning multi-family assets and major construction projects.
            </p>
          </div>

        </div>

        <div ref={storyRef} className="opacity-0 translate-y-8 transition-all duration-1000 ease-out mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <p className="text-[#C9A84C] text-[10px] tracking-[0.25em] uppercase" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {propertyPairs[0].label}
                </p>
              </div>
              <div className="space-y-3">
                <div className="relative rounded-2xl overflow-hidden bg-[#1a1a1a]" style={{ height: '210px' }}>
                  <img src={propertyPairs[0].before} alt="Property before renovation" className="w-full h-full object-cover object-center" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-black/70 backdrop-blur-sm text-[#F5F1E8] text-[10px] tracking-[0.2em] uppercase px-3 py-1.5 rounded-full border border-white/20" style={{ fontFamily: 'Inter, sans-serif' }}>Before</span>
                  </div>
                </div>
                <div className="relative rounded-2xl overflow-hidden bg-[#1a1a1a]" style={{ height: '210px' }}>
                  <img src={propertyPairs[0].after} alt="Property after renovation" className="w-full h-full object-cover object-center" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#C9A84C] text-[#0A0A0A] text-[10px] tracking-[0.2em] uppercase px-3 py-1.5 rounded-full font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>After</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <p className="text-[#C9A84C] text-[10px] tracking-[0.3em] uppercase mb-5" style={{ fontFamily: 'Inter, sans-serif' }}>The Investor</p>
                <h3 className="text-[#F5F1E8] text-3xl md:text-4xl font-light leading-[1.2] mb-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  Investing Since
                  <br />
                  <span className="italic">19 Years Old</span>
                </h3>
                <p className="text-[#8B8680] text-[15px] leading-[1.9]" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Alyssa entered real estate at 19 — not as a side hustle, but as a conviction. She started where most investors start: a duplex, then single-family homes, learning the mechanics of cash flow, tenant management, and long-term equity building from the ground up.
                </p>
                <p className="text-[#8B8680] text-[15px] leading-[1.9] mt-5" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Over time, the portfolio grew into multi-million dollar territory — and so did the complexity. She moved into the multi-family and apartment building space, where the deals are larger, the operations are more demanding, and the returns reflect the discipline required to execute at that level.
                </p>
                <p className="text-[#8B8680] text-[15px] leading-[1.9] mt-5" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Most investors hold property. Alyssa has also developed it — taking on major construction projects that go well beyond acquisition and into the full lifecycle of real estate development.
                </p>
              </div>
              <blockquote className="border-l-2 border-[#C9A84C] pl-6">
                <p className="text-[#F5F1E8] text-xl md:text-2xl font-light italic leading-[1.5]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  &ldquo;Managing a growing portfolio became a full-time job in itself. That reality was the birth of Three Pillars.&rdquo;
                </p>
              </blockquote>
            </div>
          </div>
        </div>

        <div ref={galleryRef} className="opacity-0 translate-y-8 transition-all duration-1000 ease-out mb-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 mb-8 border-b border-white/8 pb-4">
            <p className="text-[#C9A84C] text-[10px] tracking-[0.3em] uppercase" style={{ fontFamily: 'Inter, sans-serif' }}>
              Portfolio — Before &amp; After
            </p>
            <p className="text-[#8B8680] text-xs italic" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '15px' }}>
              A snapshot — not the full picture.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {propertyPairs.map((pair) => (
              <PropertyCard key={pair.id} pair={pair} />
            ))}
          </div>
        </div>

        <div ref={constructionRef} className="opacity-0 translate-y-8 transition-all duration-1000 ease-out mb-12">
          <p className="text-[#C9A84C] text-[10px] tracking-[0.3em] uppercase mb-3 border-b border-white/8 pb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
            Major Construction Projects
          </p>
          <p className="text-[#8B8680] text-sm leading-relaxed mb-8 max-w-xl" style={{ fontFamily: 'Inter, sans-serif' }}>
            Beyond buy-and-hold — ground-up development and full-scale renovation work across the portfolio.
          </p>

          <p className="text-[#8B8680] text-[10px] tracking-[0.25em] uppercase mb-3 mt-2" style={{ fontFamily: 'Inter, sans-serif' }}>During Construction</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            {duringConstructionPhotos.map((src, i) => (
              <div key={i} className="relative rounded-2xl overflow-hidden" style={{ height: '280px' }}>
                <img src={src} alt={`During construction ${i + 1}`} className="w-full h-full object-cover object-center" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-black/70 backdrop-blur-sm text-[#F5F1E8] text-[10px] tracking-[0.2em] uppercase px-3 py-1.5 rounded-full border border-white/20 font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>During Construction</span>
                </div>
              </div>
            ))}
          </div>

          {constructionAfterPhotos.length > 0 && (
            <>
              <p className="text-[#8B8680] text-[10px] tracking-[0.25em] uppercase mb-3 mt-2" style={{ fontFamily: 'Inter, sans-serif' }}>After Construction</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                {constructionAfterPhotos.map((src, i) => (
                  <div key={i} className="relative rounded-2xl overflow-hidden" style={{ height: '280px' }}>
                    <img src={src} alt={`After construction ${i + 1}`} className="w-full h-full object-cover object-center" referrerPolicy="no-referrer" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#C9A84C] text-[#0A0A0A] text-[10px] tracking-[0.2em] uppercase px-3 py-1.5 rounded-full font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>After Construction</span>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          <p className="text-[#8B8680] text-[10px] tracking-[0.25em] uppercase mb-3 mt-2" style={{ fontFamily: 'Inter, sans-serif' }}>Rental Portfolio</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {rentalPortfolioPhotos.map((src, i) => (
              <div key={i} className="relative rounded-2xl overflow-hidden" style={{ height: '260px' }}>
                <img src={src} alt={`Rental property ${i + 1}`} className="w-full h-full object-cover object-center" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-[#C9A84C] text-[#0A0A0A] text-[10px] tracking-[0.2em] uppercase px-3 py-1.5 rounded-full font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>After</span>
                </div>
              </div>
            ))}
          </div>


        </div>

        <div ref={milestonesRef} className="opacity-0 translate-y-8 transition-all duration-1000 ease-out mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/8 rounded-2xl overflow-hidden">
            {milestones.map((m, i) => (
              <div key={m.label} className="bg-[#141414] p-8 hover:bg-[#1a1a1a] transition-colors duration-300" style={{ transitionDelay: `${i * 60}ms` }}>
                <p className="text-[#C9A84C] text-[10px] tracking-[0.3em] uppercase mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>{m.label}</p>
                <h4 className="text-[#F5F1E8] text-xl font-light leading-tight mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>{m.title}</h4>
                <p className="text-[#8B8680] text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div ref={originRef} className="opacity-0 translate-y-8 transition-all duration-1000 ease-out">
          <div className="relative rounded-3xl overflow-hidden" style={{ minHeight: '280px' }}>
            <img
              src="https://readdy.ai/api/search-image?query=elegant%20property%20management%20company%20office%20interior%20warm%20professional%20environment%20cream%20dark%20tones%20sophisticated%20real%20estate%20business%20setting%20warm%20ambient%20lighting%20editorial%20photography&width=1200&height=280&seq=re_3pillars_cta01&orientation=landscape"
              alt="Three Pillars Property Management"
              className="w-full h-full object-cover object-center absolute inset-0"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/40"></div>
            <div className="relative z-10 p-10 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div>
                <p className="text-[#C9A84C] text-[10px] tracking-[0.3em] uppercase mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>The Venture It Built</p>
                <h3 className="text-[#F5F1E8] text-3xl md:text-4xl font-light leading-[1.2] mb-3" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  Three Pillars
                  <br />
                  <span className="italic">Property Management</span>
                </h3>
                <p className="text-[#F5F1E8]/60 text-sm leading-relaxed max-w-md" style={{ fontFamily: 'Inter, sans-serif' }}>
                  What started as managing her own portfolio became a full-service property management company, built on the same integrity-first principles that guided every acquisition.
                </p>
              </div>
              <a
                href="/ventures/three-pillars"
                className="whitespace-nowrap inline-flex items-center gap-3 bg-[#C9A84C] text-[#0A0A0A] text-xs tracking-[0.2em] uppercase px-8 py-4 rounded-full hover:bg-[#F5F1E8] transition-all duration-300 cursor-pointer font-semibold shrink-0"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                View the Venture
                <i className="ri-arrow-right-line text-sm"></i>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
