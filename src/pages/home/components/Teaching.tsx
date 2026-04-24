import { useReveal } from '@/hooks/useReveal';

const courses = [
  'Information Security',
  'Network Defense',
  'Incident Response',
  'Digital Forensics',
  'Penetration Testing',
  'Industrial Control System Security',
  'Cloud Security',
];

const roles = [
  {
    icon: 'ri-graduation-cap-line',
    title: 'Full-Time Cybersecurity Faculty',
    desc: 'Teaching the full spectrum of cybersecurity disciplines at San Jacinto College since January 2022.',
  },
  {
    icon: 'ri-shield-user-line',
    title: 'Cybersecurity Club Advisor',
    desc: 'Mentoring the next generation of defenders outside the classroom — building community, competition readiness, and career awareness.',
  },
  {
    icon: 'ri-trophy-line',
    title: 'SkillsUSA Cybersecurity Advisor',
    desc: 'Preparing students for national-level competition in cybersecurity skills and professional development.',
  },
  {
    icon: 'ri-government-line',
    title: 'CAE Cybersecurity Club Committee Member',
    desc: 'Contributing to the National Centers of Academic Excellence in Cybersecurity program at the institutional level.',
  },
  {
    icon: 'ri-file-text-line',
    title: 'Grant Writer',
    desc: 'Authored the NSF grant proposal that secured ~$300,000 and earned San Jacinto College its designation as a National Center of Academic Excellence in Cybersecurity (CAE-C).',
  },
];

export default function Teaching() {
  const headRef = useReveal(0.1);
  const rolesRef = useReveal(0.08);
  const coursesRef = useReveal(0.1);
  const grantRef = useReveal(0.1);

  return (
    <section id="teaching" className="bg-[#F5F1E8] py-28 md:py-40 overflow-hidden">
      <div className="px-6 md:px-12 lg:px-20 max-w-screen-xl mx-auto">

        {/* Header */}
        <div
          ref={headRef}
          className="opacity-0 translate-y-8 transition-all duration-1000 ease-out mb-20 md:mb-24"
        >
          <p
            className="text-[#C9A84C] text-xs tracking-[0.35em] uppercase mb-6 italic"
            style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '13px' }}
          >
            Faculty &amp; Education
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <h2
              className="text-[#0A0A0A] text-5xl md:text-7xl font-light leading-[1.1]"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              Inside the
              <br />
              <span className="italic">Classroom</span>
            </h2>
            <div className="max-w-sm">
              <p
                className="text-[#5C5752] text-sm font-light leading-relaxed"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Full-Time Cybersecurity Faculty at{' '}
                <a
                  href="https://www.sanjac.edu"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="text-[#C9A84C] hover:underline cursor-pointer"
                >
                  San Jacinto College
                </a>
                {' '}in Houston, Texas. Bringing federal-level operational knowledge directly into the curriculum since January 2022.
              </p>
            </div>
          </div>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 mb-20">

          {/* Roles — left 3 cols */}
          <div
            ref={rolesRef}
            className="lg:col-span-3 opacity-0 translate-y-8 transition-all duration-1000 ease-out"
          >
            <p
              className="text-[#C9A84C] text-[10px] tracking-[0.3em] uppercase mb-8"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Roles &amp; Responsibilities
            </p>
            <div className="space-y-6">
              {roles.map((role) => (
                <div
                  key={role.title}
                  className="flex items-start gap-5 p-6 rounded-2xl bg-[#0A0A0A]/4 hover:bg-[#0A0A0A]/6 transition-colors duration-300"
                >
                  <div className="w-10 h-10 flex items-center justify-center shrink-0 mt-0.5">
                    <i className={`${role.icon} text-[#C9A84C] text-xl`}></i>
                  </div>
                  <div>
                    <h4
                      className="text-[#0A0A0A] text-lg font-light leading-tight mb-2"
                      style={{ fontFamily: 'Cormorant Garamond, serif' }}
                    >
                      {role.title}
                    </h4>
                    <p
                      className="text-[#5C5752] text-sm leading-relaxed"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {role.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Courses + image — right 2 cols */}
          <div
            ref={coursesRef}
            className="lg:col-span-2 opacity-0 translate-y-8 transition-all duration-1000 ease-out space-y-8"
          >
            {/* Classroom image */}
            <div className="relative rounded-2xl overflow-hidden" style={{ height: '240px' }}>
              <img
                src="https://readdy.ai/api/search-image?query=modern%20college%20cybersecurity%20classroom%20lab%20with%20students%20at%20computers%2C%20professional%20academic%20environment%2C%20warm%20editorial%20lighting%2C%20focused%20students%20learning%20technology%2C%20San%20Jacinto%20College%20style%20setting%2C%20Houston%20Texas%2C%20documentary%20photography&width=500&height=240&seq=teach_sjc_img01&orientation=landscape"
                alt="San Jacinto College cybersecurity classroom"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <p className="text-[#F5F1E8] text-xs tracking-[0.2em] uppercase" style={{ fontFamily: 'Inter, sans-serif' }}>
                  San Jacinto College
                </p>
                <p className="text-[#C9A84C] text-[10px] tracking-[0.15em] uppercase mt-0.5" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Houston, Texas
                </p>
              </div>
            </div>

            {/* Courses taught */}
            <div className="bg-[#0A0A0A] rounded-2xl p-7">
              <p
                className="text-[#C9A84C] text-[10px] tracking-[0.3em] uppercase mb-5"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Courses Taught
              </p>
              <ul className="space-y-3">
                {courses.map((course) => (
                  <li key={course} className="flex items-center gap-3">
                    <span className="text-[#C9A84C] text-xs shrink-0">—</span>
                    <span
                      className="text-[#F5F1E8]/80 text-sm"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {course}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Grant & Reviewer Cards */}
        <div
          ref={grantRef}
          className="opacity-0 translate-y-8 transition-all duration-1000 ease-out grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* NSF Grant — San Jac */}
          <div className="border border-[#C9A84C]/20 rounded-3xl p-8 md:p-10 flex flex-col gap-6 bg-[#0A0A0A]/3">
            <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-[#C9A84C]/10 border border-[#C9A84C]/20">
              <i className="ri-file-text-line text-[#C9A84C] text-2xl"></i>
            </div>
            <div>
              <p
                className="text-[#C9A84C] text-[10px] tracking-[0.3em] uppercase mb-3"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                San Jacinto College
              </p>
              <h3
                className="text-[#0A0A0A] text-2xl md:text-3xl font-light leading-[1.2] mb-3"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                NSF Principal Investigator
                <br />
                <span className="italic">&amp; Grant Writer</span>
              </h3>
              <p
                className="text-[#5C5752] text-sm leading-relaxed"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Authored and led the NSF grant proposal that secured ~$300,000 and earned San Jacinto College its designation as a National Center of Academic Excellence in Cybersecurity (CAE-C), one of the most significant recognitions in cybersecurity education.
              </p>
            </div>
            <div>
              <p
                className="text-[#0A0A0A] text-4xl font-light"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                ~$300K
              </p>
              <p
                className="text-[#C9A84C] text-[10px] tracking-[0.2em] uppercase mt-1"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                NSF Research Grant
              </p>
            </div>
          </div>

          {/* NSF Reviewer — Independent Contract */}
          <div className="border border-[#C9A84C]/20 rounded-3xl p-8 md:p-10 flex flex-col gap-6 bg-[#0A0A0A]/3">
            <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-[#C9A84C]/10 border border-[#C9A84C]/20">
              <i className="ri-search-eye-line text-[#C9A84C] text-2xl"></i>
            </div>
            <div>
              <p
                className="text-[#C9A84C] text-[10px] tracking-[0.3em] uppercase mb-3"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Independent Contract
              </p>
              <h3
                className="text-[#0A0A0A] text-2xl md:text-3xl font-light leading-[1.2] mb-3"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                NSF Grant
                <br />
                <span className="italic">Reviewer</span>
              </h3>
              <p
                className="text-[#5C5752] text-sm leading-relaxed"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Selected on a contract basis to review grant proposals for the NSF Advanced Technological Education (ATE) program, evaluating submissions from institutions nationwide for scientific merit and educational impact.
              </p>
            </div>
            <div>
              <p
                className="text-[#0A0A0A] text-lg font-light"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                NSF Advanced Technological Education
              </p>
              <p
                className="text-[#C9A84C] text-[10px] tracking-[0.2em] uppercase mt-1"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Contract Reviewer
              </p>
            </div>
          </div>

          {/* Student Recognition — ATE Conference */}
          <div className="border border-[#C9A84C]/20 rounded-3xl p-8 md:p-10 flex flex-col gap-6 bg-[#0A0A0A]/3">
            <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-[#C9A84C]/10 border border-[#C9A84C]/20">
              <i className="ri-award-line text-[#C9A84C] text-2xl"></i>
            </div>
            <div>
              <p
                className="text-[#C9A84C] text-[10px] tracking-[0.3em] uppercase mb-3"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Student Success
              </p>
              <h3
                className="text-[#0A0A0A] text-2xl md:text-3xl font-light leading-[1.2] mb-3"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                ATE Conference
                <br />
                <span className="italic">Recognition</span>
              </h3>
              <p
                className="text-[#5C5752] text-sm leading-relaxed"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                San Jacinto College cybersecurity students recognized at the 2025 ATE Conference for their research and technical excellence, a direct reflection of the program&apos;s rigor and the faculty behind it.
              </p>
            </div>
            <a
              href="https://www.sanjac.edu/about/news/2025/san-jac-cybersecurity-students-recognized-at-ate-conference"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="whitespace-nowrap inline-flex items-center gap-2 text-[#C9A84C] text-xs tracking-[0.2em] uppercase font-medium hover:gap-3 transition-all cursor-pointer"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Read the Story
              <i className="ri-arrow-right-line text-sm"></i>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
