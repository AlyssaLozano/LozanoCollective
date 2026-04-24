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
    before: 'https://storage.readdy-site.link/project_files/b5779f47-cadb-49df-8244-c7ee24f8547b/269ee8c1-c044-423a-868e-65dc96e8a3ca_char.png?v=9299db2e67164f267492fd0793c3af01',
    after: 'https://storage.readdy-site.link/project_files/b5779f47-cadb-49df-8244-c7ee24f8547b/d29043b4-021a-4c69-ade1-9b12a745ac56_ChatGPT-Image-Apr-24-2026-01_27_44-PM.png?v=2d8b7cdf3ead020584d699fb715a41d6',
  },
  {
    id: 'property-2',
    label: 'Property 2',
    before: 'https://storage.readdy-site.link/project_files/b5779f47-cadb-49df-8244-c7ee24f8547b/9037a906-a5c5-4b5e-9892-66bbb5f7c5a5_Broadway1.png?v=d067be27080de042fea216c28cce776a',
    after: 'https://storage.readdy-site.link/project_files/b5779f47-cadb-49df-8244-c7ee24f8547b/3ed19986-47b6-40ee-be81-adcad6e2eae9_ChatGPT-Image-Apr-24-2026-02_40_57-PM.png?v=d6b008e132902dcc0b50fffbd73a9f16',
  },
  {
    id: 'property-3',
    label: 'Property 3',
    before: 'https://storage.readdy-site.link/project_files/b5779f47-cadb-49df-8244-c7ee24f8547b/52772686-3e73-4184-ae11-fc5fb551361d_chartres1.png?v=17162bdeba04dded9260c94b172a1df2',
    after: 'https://storage.readdy-site.link/project_files/b5779f47-cadb-49df-8244-c7ee24f8547b/721d62eb-d885-45af-905d-c73c350bb8f4_IMG_0936.jpg?v=d0b948b4802190f6ba71d9149c746c29',
  },
  {
    id: 'property-4',
    label: 'Property 4',
    before: 'https://storage.readdy-site.link/project_files/b5779f47-cadb-49df-8244-c7ee24f8547b/740a66f6-71cb-470e-83b0-284dac77ff4d_290434322_608060007156187_73918581961655303_n.jpg?v=75bfc099630cee9e468b510a59f406f3',
    after: 'https://storage.readdy-site.link/project_files/b5779f47-cadb-49df-8244-c7ee24f8547b/dbbf891b-0c85-4d47-aa36-47a95d5074c1_290555297_421935503182882_5685989387358868386_n.jpg?v=d54892b4f0139116929757211b7bf8b4',
  },
  {
    id: 'property-5',
    label: 'Property 5',
    before: 'https://storage.readdy-site.link/project_files/b5779f47-cadb-49df-8244-c7ee24f8547b/8a91ab81-c343-49d7-89f7-ab4d4b13fc65_broadway-2.png?v=0fdb7c87a11cedf40811c8bd7f68336f',
    after: 'https://storage.readdy-site.link/project_files/b5779f47-cadb-49df-8244-c7ee24f8547b/3cd51c5c-5a44-4249-a0ce-425abad243ba_IMG_0063.jpg?v=8a8d5f6152c444b3d8e3de5233727e7f',
  },
  {
    id: 'property-6',
    label: 'Property 6',
    before: 'https://storage.readdy-site.link/project_files/b5779f47-cadb-49df-8244-c7ee24f8547b/3ec5392d-3bd3-4ba9-99d5-eab0812b1fc3_Screenshot_20211204-135528_Chrome.jpg?v=42086d736ceb6d78d92a802a94de3c7b',
    after: 'https://storage.readdy-site.link/project_files/b5779f47-cadb-49df-8244-c7ee24f8547b/a2782af1-e665-4b6d-a61f-14f2b608747e_289611374_357942549782506_4544959039348860593_n.jpg?v=b20f5c94f15af1bc37cdbaecd7e4bc5e',
  },
];

const inProgressPhotos = [
  'https://storage.readdy-site.link/project_files/b5779f47-cadb-49df-8244-c7ee24f8547b/effc30f4-c249-4902-b4a4-1606943b37d6_290456160_564944241749216_7939236840950059981_n.jpg?v=a5a09836908b21932d6065b207aae02f',
  'https://storage.readdy-site.link/project_files/b5779f47-cadb-49df-8244-c7ee24f8547b/e1040fe7-c32a-4e3c-81ce-e1b9383df7e6_290593573_1802842203257891_7254462805028144449_n.jpg?v=859e05a658775e022111b331cd6986b5',
  'https://storage.readdy-site.link/project_files/b5779f47-cadb-49df-8244-c7ee24f8547b/64b065a8-bca0-4b23-865c-5010f7f9696d_IMG_0981.jpeg?v=2d14e172cccdadcbbe873884a08932e1',
  'https://storage.readdy-site.link/project_files/b5779f47-cadb-49df-8244-c7ee24f8547b/4882e0ec-c789-49e3-bb93-f2ce85aa62c1_IMG_0983.jpeg?v=d694ba59edf21b4bbc367afe2942a3c3',
];

const afterPhotosRow1 = [
  'https://storage.readdy-site.link/project_files/b5779f47-cadb-49df-8244-c7ee24f8547b/895e74f6-c3a4-438e-99b0-e35dd74d56bd_290461631_411111827630790_2347344700588687887_n.jpg?v=09b3d0906b7e832a2e7ba2cd9e7faf5f',
  'https://storage.readdy-site.link/project_files/b5779f47-cadb-49df-8244-c7ee24f8547b/e6489187-6300-4c57-af2d-6de90aa50ddd_290630247_1104408083508787_3077392784411264099_n.jpg?v=ed201b75b33cdc5999b5e46eaf40385e',
  'https://storage.readdy-site.link/project_files/b5779f47-cadb-49df-8244-c7ee24f8547b/413fbac7-12b0-46d1-8255-ad00353976c8_img-9.jpeg?v=c9f68a16dc6200eaaf3627e7beb66766',
  'https://storage.readdy-site.link/project_files/b5779f47-cadb-49df-8244-c7ee24f8547b/3ed19986-47b6-40ee-be81-adcad6e2eae9_ChatGPT-Image-Apr-24-2026-02_40_57-PM.png?v=d6b008e132902dcc0b50fffbd73a9f16',
  'https://storage.readdy-site.link/project_files/b5779f47-cadb-49df-8244-c7ee24f8547b/f818f706-26d7-4630-8343-6b0af8b0ec2a_img-17.jpeg?v=29ef0af6bd31100d72156ecece19ff26',
];

const afterPhotosRow2 = [
  'https://storage.readdy-site.link/project_files/b5779f47-cadb-49df-8244-c7ee24f8547b/d83617b2-58a9-469d-9808-af90a09f5342_bathroom.png?v=a7eba43f8fbe41bb175e25912b4bf02a',
  'https://storage.readdy-site.link/project_files/b5779f47-cadb-49df-8244-c7ee24f8547b/317824ae-9db6-4e74-9bc8-b41fa7bb91c1_img-1.jpeg?v=9de47eddc69ce8daf5c12731a95f7c0f',
  'https://storage.readdy-site.link/project_files/b5779f47-cadb-49df-8244-c7ee24f8547b/569ea31f-b025-4571-83e7-d1edfba1956e_img-7.jpeg?v=0f39c0c0235fb4243edef9443df9523c',
  'https://storage.readdy-site.link/project_files/b5779f47-cadb-49df-8244-c7ee24f8547b/a2782af1-e665-4b6d-a61f-14f2b608747e_289611374_357942549782506_4544959039348860593_n.jpg?v=b20f5c94f15af1bc37cdbaecd7e4bc5e',
];

const afterPhotosRow3 = [
  'https://storage.readdy-site.link/project_files/b5779f47-cadb-49df-8244-c7ee24f8547b/9a4fc294-898a-49f4-8d82-a246a58a6b6e_img-13.jpeg?v=6975c64575501941feaafcea71fe49f7',
  'https://storage.readdy-site.link/project_files/b5779f47-cadb-49df-8244-c7ee24f8547b/f818f706-26d7-4630-8343-6b0af8b0ec2a_img-17.jpeg?v=2a37de297d9c66a5522279c8ea0cdbd8',
];

const afterPhotosRow4 = [
  'https://storage.readdy-site.link/project_files/b5779f47-cadb-49df-8244-c7ee24f8547b/c80eb3af-cdc7-4519-a306-5b624eead082_img-1-1.jpeg?v=5cc5ab6c8a1bd1a709fd0db23199a67e',
  'https://storage.readdy-site.link/project_files/b5779f47-cadb-49df-8244-c7ee24f8547b/b2ed67ed-6acb-4dbb-8634-6ac8d383eb13_img-2.jpeg?v=58c447ff6204d9017bef3a1e9948330d',
  'https://storage.readdy-site.link/project_files/b5779f47-cadb-49df-8244-c7ee24f8547b/ba01e5ba-5c1f-45b2-a987-c07079c29b5b_img-4.jpeg?v=d613c9981d49a062ad35063f2457180f',
  'https://storage.readdy-site.link/project_files/b5779f47-cadb-49df-8244-c7ee24f8547b/932826f3-644e-4030-b290-efba3be93b5b_img-15.jpeg?v=c16c2e009abeb6b948be571bf04f1f35',
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
      <div className="relative rounded-2xl overflow-hidden" style={{ height: '260px' }}>
        <img
          src={active === 'before' ? pair.before : pair.after}
          alt={`${pair.label} — ${active}`}
          className="w-full h-full object-cover object-center transition-opacity duration-500"
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

        {/* Header */}
        <div ref={headRef} className="opacity-0 translate-y-8 transition-all duration-1000 ease-out mb-12 md:mb-16">
          <p className="text-[#C9A84C] text-xs tracking-[0.35em] uppercase mb-6 italic" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '13px' }}>
            Real Estate
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
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

        {/* Story Block */}
        <div ref={storyRef} className="opacity-0 translate-y-8 transition-all duration-1000 ease-out mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <p className="text-[#C9A84C] text-[10px] tracking-[0.25em] uppercase" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {propertyPairs[0].label}
                </p>
              </div>
              <div className="space-y-3">
                <div className="relative rounded-2xl overflow-hidden" style={{ height: '210px' }}>
                  <img src={propertyPairs[0].before} alt="Property before renovation" className="w-full h-full object-cover object-center" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-black/70 backdrop-blur-sm text-[#F5F1E8] text-[10px] tracking-[0.2em] uppercase px-3 py-1.5 rounded-full border border-white/20" style={{ fontFamily: 'Inter, sans-serif' }}>Before</span>
                  </div>
                </div>
                <div className="relative rounded-2xl overflow-hidden" style={{ height: '210px' }}>
                  <img src={propertyPairs[0].after} alt="Property after renovation" className="w-full h-full object-cover object-center" />
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

        {/* Before & After Gallery */}
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

        {/* Construction Projects Gallery */}
        <div ref={constructionRef} className="opacity-0 translate-y-8 transition-all duration-1000 ease-out mb-12">
          <p className="text-[#C9A84C] text-[10px] tracking-[0.3em] uppercase mb-3 border-b border-white/8 pb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
            Major Construction Projects
          </p>
          <p className="text-[#8B8680] text-sm leading-relaxed mb-8 max-w-xl" style={{ fontFamily: 'Inter, sans-serif' }}>
            Beyond buy-and-hold — ground-up development and full-scale renovation work across the portfolio.
          </p>

          {/* IN PROGRESS */}
          <p className="text-[#8B8680] text-[10px] tracking-[0.25em] uppercase mb-3 mt-2" style={{ fontFamily: 'Inter, sans-serif' }}>In Progress</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            {inProgressPhotos.map((src, i) => (
              <div key={i} className="relative rounded-2xl overflow-hidden" style={{ height: '280px' }}>
                <img src={src} alt={`In progress ${i + 1}`} className="w-full h-full object-cover object-center" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-black/70 backdrop-blur-sm text-[#F5F1E8] text-[10px] tracking-[0.2em] uppercase px-3 py-1.5 rounded-full border border-white/20 font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>In Progress</span>
                </div>
              </div>
            ))}
          </div>

          {/* AFTER */}
          <p className="text-[#8B8680] text-[10px] tracking-[0.25em] uppercase mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>After</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            {afterPhotosRow1.map((src, i) => (
              <div key={i} className="relative rounded-2xl overflow-hidden" style={{ height: '300px' }}>
                <img src={src} alt={`After ${i + 1}`} className="w-full h-full object-cover object-center" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-[#C9A84C] text-[#0A0A0A] text-[10px] tracking-[0.2em] uppercase px-3 py-1.5 rounded-full font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>After</span>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            {afterPhotosRow2.map((src, i) => (
              <div key={i} className="relative rounded-2xl overflow-hidden" style={{ height: '180px' }}>
                <img src={src} alt={`After interior ${i + 1}`} className="w-full h-full object-cover object-center" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                <div className="absolute top-3 left-3">
                  <span className="bg-[#C9A84C] text-[#0A0A0A] text-[9px] tracking-[0.15em] uppercase px-2.5 py-1 rounded-full font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>After</span>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {afterPhotosRow3.map((src, i) => (
              <div key={i} className="relative rounded-2xl overflow-hidden" style={{ height: '260px' }}>
                <img src={src} alt={`After ${i + 5}`} className="w-full h-full object-cover object-center" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-[#C9A84C] text-[#0A0A0A] text-[10px] tracking-[0.2em] uppercase px-3 py-1.5 rounded-full font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>After</span>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            {afterPhotosRow4.map((src, i) => (
              <div key={i} className="relative rounded-2xl overflow-hidden" style={{ height: '180px' }}>
                <img src={src} alt={`After detail ${i + 1}`} className="w-full h-full object-cover object-center" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                <div className="absolute top-3 left-3">
                  <span className="bg-[#C9A84C] text-[#0A0A0A] text-[9px] tracking-[0.15em] uppercase px-2.5 py-1 rounded-full font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>After</span>
                </div>
              </div>
            ))}
          </div>

          {/* NEW CONSTRUCTION AFTER */}
          <p className="text-[#8B8680] text-[10px] tracking-[0.25em] uppercase mb-3 mt-6" style={{ fontFamily: 'Inter, sans-serif' }}>New Construction After</p>
          <div className="relative rounded-2xl overflow-hidden" style={{ height: '360px' }}>
            <img
              src="https://storage.readdy-site.link/project_files/b5779f47-cadb-49df-8244-c7ee24f8547b/4a63cc27-ca21-4565-b8ee-8d50ee07bdc7_img-20.jpeg?v=1f499a59d1e4af0cca54bfcf2e4a0434"
              alt="New construction completed"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            <div className="absolute top-4 left-4">
              <span className="bg-[#C9A84C] text-[#0A0A0A] text-[10px] tracking-[0.2em] uppercase px-3 py-1.5 rounded-full font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>New Construction After</span>
            </div>
          </div>
        </div>

        {/* Milestones Timeline */}
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

        {/* Three Pillars Origin CTA */}
        <div ref={originRef} className="opacity-0 translate-y-8 transition-all duration-1000 ease-out">
          <div className="relative rounded-3xl overflow-hidden" style={{ minHeight: '280px' }}>
            <img
              src="https://readdy.ai/api/search-image?query=elegant%20property%20management%20company%20office%20interior%2C%20warm%20professional%20environment%2C%20cream%20and%20dark%20tones%2C%20sophisticated%20real%20estate%20business%20setting%2C%20warm%20ambient%20lighting%2C%20editorial%20photography%2C%20luxury%20property%20management%20aesthetic%2C%20refined%20workspace&width=1200&height=280&seq=re_3pillars_cta01&orientation=landscape"
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
