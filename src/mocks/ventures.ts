export interface Venture {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  status: 'Operating' | 'In Development' | 'Pending';
  progress?: number;
  externalUrl?: string;
  location?: string;
  image: string;
  heroImage: string;
  origin: string;
  whoItServes: string;
  ctaLabel: string;
  ctaUrl?: string;
  contactEmail?: string;
}

export const ventures: Venture[] = [
  {
    id: 'inner-empire-consulting',
    name: 'Inner Empire Consulting',
    category: 'Strategic Advisory',
    tagline: 'Clear, flexible consulting designed to meet your goals.',
    description:
      'A strategic advisory practice offering one-on-one consulting, business startup packages, project engagements, and monthly retainers for founders, real estate investors, and social service operators.',
    status: 'Operating',
    image:
      'https://readdy.ai/api/search-image?query=Diverse%20team%20of%20professional%20business%20consultants%20in%20a%20modern%20corporate%20boardroom%20engaged%20in%20strategic%20discussion%2C%20warm%20editorial%20lighting%2C%20sophisticated%20business%20environment%2C%20real%20people%20collaborating%20around%20a%20conference%20table%2C%20cream%20and%20charcoal%20tones%2C%20documentary%20style%20photography%2C%20authentic%20professional%20consulting%20meeting&width=700&height=460&seq=ven_ie002&orientation=landscape',
    heroImage:
      'https://readdy.ai/api/search-image?query=professional%20business%20consulting%20team%20in%20modern%20corporate%20boardroom%2C%20strategic%20advisory%20meeting%2C%20warm%20editorial%20lighting%2C%20sophisticated%20business%20environment%2C%20diverse%20professionals%20collaborating%2C%20cream%20and%20charcoal%20tones%2C%20documentary%20style%20photography&width=1400&height=700&seq=ven_ie_hero01&orientation=landscape',
    origin:
      'Inner Empire Consulting was built on a simple truth: most founders don\'t fail because they lack ambition — they fail because they lack structure. Alyssa built Inner Empire to be the strategic partner she wished she had when she was starting out. Every engagement draws on her federal leadership, real estate experience, and operator instincts to help clients build businesses that actually last.',
    whoItServes:
      'Founders at any stage, real estate investors building or scaling portfolios, and social service operators navigating compliance, growth, and sustainability. Whether you need a one-time strategy session or a long-term advisory partner, Inner Empire meets you where you are.',
    ctaLabel: 'Book a Discovery Call',
  },
  {
    id: 'acumen-career-academy',
    name: 'Acumen Career Academy',
    category: 'Cybersecurity Education',
    tagline: 'Half the price of SANS. More hands-on than college. You graduate with a portfolio — not a transcript.',
    description:
      'Cybersecurity training institution offering Security+ and CySA+ certification programs, fully online. Pending GNEPC authorization. Built for working adults who need real skills, real fast.',
    status: 'Pending',
    progress: 75,
    externalUrl: 'http://acumencareeracademy.com/',
    ctaUrl: 'http://acumencareeracademy.com/',
    image:
      'https://readdy.ai/api/search-image?query=modern%20online%20cybersecurity%20training%20academy%2C%20sleek%20dark%20digital%20learning%20environment%2C%20professional%20technology%20education%2C%20warm%20accent%20lighting%2C%20sophisticated%20e-learning%20platform%20aesthetic%2C%20dark%20walls%20with%20gold%20accents%2C%20editorial%20photography&width=700&height=460&seq=ven_acumen001&orientation=landscape',
    heroImage:
      'https://readdy.ai/api/search-image?query=modern%20cybersecurity%20training%20academy%20classroom%20with%20students%20at%20computers%2C%20professional%20technology%20education%20environment%2C%20warm%20accent%20lighting%2C%20dark%20walls%20with%20gold%20accents%2C%20editorial%20photography%2C%20online%20learning%20platform%20aesthetic&width=1400&height=700&seq=ven_acumen_hero01&orientation=landscape',
    origin:
      'Acumen Career Academy is a Georgia-authorized cybersecurity training institution built for adults who need real skills fast — not another two-year degree or a self-paced bootcamp that leaves them on their own. We deliver synchronous, instructor-led cohorts in two focused programs (Security+ and a standalone CySA+ SOC Analyst track) that run roughly half the price of national bootcamps and a fraction of the price of college. Every student trains on real industry tools — Splunk, Sigma, n8n, TheHive, Wireshark, Chainsaw — and graduates with a verifiable portfolio: written investigation reports, three original detection rules across three ATT&CK tactics, a multi-source SOAR workflow, and documented case management evidence. We serve the people other programs overlook: career-changers with degrees they don\'t want to repeat, military spouses who need a portable program, veterans not relying on the GI Bill, reentry candidates, and hands-on learners who didn\'t thrive in traditional classrooms. Half the price of SANS, more hands-on than college, and you graduate with a portfolio — not a transcript.',
    whoItServes:
      'Career changers, veterans, and working adults who want to enter cybersecurity without the debt or the wait. Programs are fully online, self-paced, and designed around real employer expectations.',
    ctaLabel: 'Enroll Now',
    contactEmail: 'enroll@acumencareeracademy.com',
  },
  {
    id: 'three-pillars',
    name: 'Three Pillars Property Management',
    category: 'Real Estate & Property Management',
    tagline: 'Maryland-based residential property management built on trust, transparency, and results.',
    description:
      'A Maryland-based residential property management company serving homeowners and tenants with integrity-first operations. Founder & CEO.',
    status: 'Operating',
    location: 'Maryland',
    externalUrl: 'https://threepillarsproperties.com/',
    ctaUrl: 'https://threepillarsproperties.com/',
    image:
      'https://readdy.ai/api/search-image?query=Beautiful%20modern%20residential%20townhouse%20and%20apartment%20building%20exterior%20at%20golden%20hour%2C%20well-maintained%20Maryland%20neighborhood%20property%2C%20warm%20architectural%20photography%2C%20cream%20brick%20and%20warm%20earth%20tones%2C%20professional%20real%20estate%20management%20aesthetic%2C%20inviting%20homes%20with%20manicured%20landscaping%2C%20editorial%20style&width=700&height=460&seq=ven_3pillars002&orientation=landscape',
    heroImage:
      'https://readdy.ai/api/search-image?query=beautiful%20Maryland%20residential%20townhouse%20and%20apartment%20building%20exterior%20at%20golden%20hour%2C%20well-maintained%20neighborhood%20property%2C%20warm%20architectural%20photography%2C%20cream%20brick%20and%20earth%20tones%2C%20professional%20real%20estate%20management%2C%20inviting%20homes%20with%20manicured%20landscaping&width=1400&height=700&seq=ven_3pillars_hero01&orientation=landscape',
    origin:
      'Three Pillars started as a mission need Alyssa observed at the NSA. When people received PCS orders and had to relocate, they needed someone they could trust to manage their homes from a distance. She saw the gap firsthand: too many homeowners and tenants were left navigating a system that didn\'t communicate, didn\'t follow through, and didn\'t care. Three Pillars was built to be different. Founded on the belief that property management should feel like a partnership, not a transaction.',
    whoItServes:
      'Residential homeowners in Maryland who need reliable, professional management of their properties, and tenants who deserve responsive, respectful service.',
    ctaLabel: 'Learn More',
  },
  {
    id: 'empower-youth-homes',
    name: 'Empower Youth Homes',
    category: 'Youth Services & Child Welfare',
    tagline: 'Giving displaced youth a foundation — not just a placement.',
    description:
      'Residential Treatment Center, Supervised Visitation services, and Child Placement Agency supporting youth transitioning through the child welfare system. Transitioning out of Texas — as Empower exits, Maroon Homes is opening in the same space in Georgia.',
    status: 'Operating',
    location: 'Transitioning TX → GA',
    image:
      'https://readdy.ai/api/search-image?query=Compassionate%20child%20welfare%20workers%20and%20CPS%20caseworkers%20supporting%20diverse%20youth%20in%20a%20safe%20residential%20home%20environment%2C%20warm%20nurturing%20space%20with%20soft%20natural%20lighting%2C%20documentary%20photography%20style%2C%20hopeful%20supportive%20atmosphere%2C%20cream%20and%20warm%20earth%20tones%2C%20authentic%20social%20services%20setting%2C%20real%20people%20helping%20teenagers&width=700&height=460&seq=ven_empower002&orientation=landscape',
    heroImage:
      'https://readdy.ai/api/search-image?query=compassionate%20child%20welfare%20residential%20home%20interior%2C%20safe%20nurturing%20space%20for%20youth%2C%20warm%20natural%20lighting%2C%20documentary%20photography%20style%2C%20hopeful%20supportive%20atmosphere%2C%20cream%20and%20warm%20earth%20tones%2C%20authentic%20social%20services%20setting&width=1400&height=700&seq=ven_empower_hero01&orientation=landscape',
    origin:
      'Empower Youth Homes was founded after witnessing firsthand how the child welfare system fails the young people it\'s supposed to protect. Alyssa built Empower to provide not just a roof, but a real foundation — trauma-informed care, supervised visitation, and placement services that actually center the child. After years of operating in Texas, Empower is now transitioning out — and as it does, Maroon Homes is opening in Georgia to carry that mission forward in a new market.',
    whoItServes:
      'Youth transitioning through the child welfare system, including those in residential treatment, supervised visitation programs, and child placement services. As Empower winds down Texas operations, Maroon Homes is stepping in to serve the same population in Georgia.',
    ctaLabel: 'Get Involved',
  },
  {
    id: 'rebuild',
    name: 'Rebuild',
    category: 'Nonprofit — Reentry & Workforce',
    tagline: 'Because a record shouldn\'t be a life sentence.',
    description:
      'A nonprofit supporting formerly incarcerated individuals through workforce readiness, housing access, and community reintegration. Founder.',
    status: 'Operating',
    image:
      'https://readdy.ai/api/search-image?query=diverse%20group%20of%20Black%2C%20white%2C%20and%20Hispanic%20men%20together%20in%20a%20workforce%20development%20training%20classroom%2C%20sitting%20at%20desks%20with%20notebooks%20and%20laptops%2C%20engaged%20and%20focused%2C%20multicultural%20reentry%20nonprofit%20program%2C%20warm%20natural%20lighting%2C%20hopeful%20empowering%20atmosphere%2C%20documentary%20photography%20style%2C%20real%20community%20setting&width=700&height=460&seq=ven_rebuild_card03&orientation=landscape',
    heroImage:
      'https://readdy.ai/api/search-image?query=diverse%20multicultural%20group%20of%20Black%2C%20white%2C%20and%20Hispanic%20men%20in%20a%20bright%20community%20reentry%20training%20room%2C%20mix%20of%20ethnicities%20seated%20together%20receiving%20workforce%20readiness%20services%2C%20instructor%20at%20the%20front%20of%20the%20room%2C%20wide%20angle%20view%2C%20participants%20engaged%20with%20materials%2C%20warm%20documentary%20photography%2C%20natural%20light%20through%20windows%2C%20hopeful%20and%20empowering%20nonprofit%20atmosphere&width=1400&height=700&seq=ven_rebuild_hero03&orientation=landscape',
    origin:
      'Rebuild was founded on a conviction: that the criminal justice system\'s job doesn\'t end at release. Formerly incarcerated individuals face a wall of barriers — no housing, no employment, no community. Rebuild tears down that wall, one person at a time.',
    whoItServes:
      'Formerly incarcerated individuals seeking workforce readiness training, housing access support, and community reintegration resources. Rebuild meets people where they are and walks with them toward where they\'re going.',
    ctaLabel: 'Support the Mission',
  },
  {
    id: 'maroon-homes',
    name: 'Maroon Homes',
    category: 'Home Health, CPA & Residential Treatment',
    tagline: 'Whole-person care — health, housing, and healing under one roof.',
    description:
      'A Georgia-based venture offering Home Health services, a Child Placement Agency, and a Residential Treatment Center — stepping into the space Empower Youth Homes is transitioning out of.',
    status: 'In Development',
    progress: 30,
    location: 'Georgia',
    externalUrl: 'https://www.maroonhearth.com/',
    ctaUrl: 'https://www.maroonhearth.com/',
    image:
      'https://readdy.ai/api/search-image?query=warm%20welcoming%20residential%20care%20home%20in%20Georgia%2C%20professional%20home%20health%20and%20treatment%20facility%2C%20soft%20natural%20lighting%2C%20cream%20and%20warm%20earth%20tones%2C%20nurturing%20healing%20environment%2C%20editorial%20photography%2C%20compassionate%20care%20setting%2C%20modern%20residential%20treatment%20center%20exterior&width=700&height=460&seq=ven_maroon001&orientation=landscape',
    heroImage:
      'https://readdy.ai/api/search-image?query=bright%20welcoming%20Georgia%20residential%20treatment%20and%20home%20health%20facility%20interior%2C%20warm%20professional%20care%20environment%2C%20soft%20natural%20light%2C%20cream%20and%20warm%20tones%2C%20compassionate%20healing%20space%2C%20wide%20angle%20editorial%20photography%2C%20modern%20social%20services%20setting&width=1400&height=700&seq=ven_maroon_hero01&orientation=landscape',
    origin:
      'Maroon Homes was conceived as Empower Youth Homes began its transition out of Texas. Rather than leave a gap in services, Alyssa built Maroon to open in the same space — carrying forward the mission of whole-person care in Georgia with an expanded model that includes Home Health, a Child Placement Agency, and a Residential Treatment Center.',
    whoItServes:
      'Georgia residents in need of home health services, youth requiring residential treatment and placement support, and families navigating the child welfare system. Maroon Homes is built to serve the whole person — not just the presenting need.',
    ctaLabel: 'Follow the Journey',
  },
  {
    id: 'chere-co',
    name: 'Cheré Co.',
    category: 'Luxury Baby & Lifestyle',
    tagline: 'Elevated Motherhood.',
    description:
      'A luxury baby stroller brand redefining what it means to move through the world as a mother. Designed for the woman who refuses to compromise on beauty or function.',
    status: 'In Development',
    progress: 65,
    externalUrl: 'https://shopchere.com',
    image:
      'https://readdy.ai/api/search-image?query=luxury%20baby%20stroller%20brand%20editorial%20photography%2C%20elegant%20minimalist%20design%2C%20cream%20and%20gold%20color%20palette%2C%20sophisticated%20lifestyle%20product%20photography%2C%20warm%20ambient%20lighting%2C%20high-end%20baby%20brand%20aesthetic%2C%20magazine%20quality%20image&width=700&height=460&seq=ven_chere001&orientation=landscape',
    heroImage:
      'https://readdy.ai/api/search-image?query=luxury%20baby%20stroller%20product%20photography%2C%20elegant%20minimalist%20design%2C%20cream%20and%20gold%20color%20palette%2C%20sophisticated%20lifestyle%20brand%20aesthetic%2C%20warm%20ambient%20lighting%2C%20high-end%20baby%20product%2C%20magazine%20quality%20editorial%20photography&width=1400&height=700&seq=ven_chere_hero01&orientation=landscape',
    origin:
      'Cheré Co. was born from a personal frustration: why does "luxury" in the baby space mean clinical and cold? Alyssa envisioned a brand that honors the aesthetic intelligence of modern mothers — where the stroller is as considered as the outfit, and elevated motherhood is not a contradiction.',
    whoItServes:
      'Style-conscious mothers who want premium quality, thoughtful design, and a brand that sees them as whole people — not just parents.',
    ctaLabel: 'Visit Cheré Co.',
    ctaUrl: 'https://shopchere.com',
  },
  {
    id: 'acumen-staffing',
    name: 'Acumen Staffing',
    category: 'Cybersecurity Talent Pipeline',
    tagline: 'Train. Certify. Place. Repeat.',
    description:
      'A cybersecurity talent pipeline that trains candidates, certifies them, and places them directly with employers — closing the workforce gap from both ends.',
    status: 'In Development',
    progress: 40,
    image:
      'https://readdy.ai/api/search-image?query=modern%20staffing%20agency%20office%2C%20professional%20recruitment%20environment%2C%20warm%20editorial%20lighting%2C%20sophisticated%20corporate%20setting%2C%20cream%20and%20dark%20tones%2C%20editorial%20photography%2C%20professional%20talent%20placement&width=700&height=460&seq=ven_staffing001&orientation=landscape',
    heroImage:
      'https://readdy.ai/api/search-image?query=modern%20professional%20staffing%20agency%20office%20interior%2C%20recruitment%20and%20talent%20placement%20environment%2C%20warm%20editorial%20lighting%2C%20sophisticated%20corporate%20setting%2C%20cream%20and%20dark%20tones%2C%20professional%20workforce%20development&width=1400&height=700&seq=ven_staffing_hero01&orientation=landscape',
    origin:
      'Acumen Staffing is the natural extension of Acumen Career Academy — a closed-loop system where training leads directly to employment. The idea is simple: stop asking employers to find talent, and stop asking talent to find employers. Build the bridge.',
    whoItServes:
      'Cybersecurity employers who need vetted, certified talent fast, and candidates who have completed Acumen training and are ready to be placed in real roles.',
    ctaLabel: 'Join the Waitlist',
  },
];
