import { useReveal } from '@/hooks/useReveal';

export default function About() {
  const titleRef = useReveal(0.1);
  const col1Ref = useReveal(0.1);
  const col2Ref = useReveal(0.1);
  const credRef = useReveal(0.1);
  const imgRef = useReveal(0.1);

  return (
    <section id="about" className="bg-[#F5F1E8] py-28 md:py-40 overflow-hidden">
      <div className="px-6 md:px-12 lg:px-20 max-w-screen-xl mx-auto">

        {/* Section Label */}
        <p
          className="text-[#C9A84C] text-xs tracking-[0.35em] uppercase mb-10 italic"
          style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '13px' }}
        >
          Profile
        </p>

        {/* Main Title */}
        <div
          ref={titleRef}
          className="opacity-0 translate-y-8 transition-all duration-1000 ease-out mb-16 md:mb-20"
        >
          <h2
            className="text-[#0A0A0A] text-5xl md:text-7xl lg:text-8xl font-light leading-[1.1] max-w-4xl"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            The Architect
            <br />
            <span className="italic">of Digital</span>
            <br />
            Defense
          </h2>
          <p
            className="mt-8 text-[#5C5752] text-base md:text-lg font-light leading-relaxed max-w-2xl italic"
            style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '18px' }}
          >
            A portrait of leadership at the intersection of national security, education, and innovation.
          </p>
        </div>

        {/* Two-Column Editorial Body */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
          {/* Left Column — Drop Cap */}
          <div
            ref={col1Ref}
            className="opacity-0 translate-y-8 transition-all duration-1000 ease-out delay-100"
          >
            <p
              className="text-[#0A0A0A] leading-[1.9] text-[15px]"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              <span
                className="float-left text-[#C9A84C] leading-none mr-3 mt-1 font-light"
                style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '88px', lineHeight: '0.8' }}
              >
                T
              </span>
              here are people who study power, and then there are people who wield it quietly, from the inside. Alyssa &ldquo;Lyssa&rdquo; Lozano belongs to the latter category. A former Deputy Technical Director at the National Security Agency, she spent years deep in federal cyber operations shaping national strategy and leading red team and blue team analysis organizations before channeling that experience into building something entirely her own.
            </p>
            <p
              className="text-[#0A0A0A] leading-[1.9] text-[15px] mt-6"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Today, she channels that rare combination of operational depth and institutional authority into the classroom as Cybersecurity Faculty at San Jacinto College, where she has taught since January 2022. Her curriculum spans the full spectrum of the discipline: information security, network defense, incident response, digital forensics, penetration testing, industrial control system security, and cloud security. She doesn&apos;t just teach the field. She helped define it.
            </p>
            <p
              className="text-[#0A0A0A] leading-[1.9] text-[15px] mt-6"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              As a previous CAE evaluator for the NSA and Principal Investigator on a nearly $300,000 National Science Foundation grant that supported San Jacinto College&apos;s CAE-CD designation, Lozano has become one of the most consequential figures in cybersecurity education in the country.
            </p>
          </div>

          {/* Right Column — Pull Quote + Continuation */}
          <div
            ref={col2Ref}
            className="opacity-0 translate-y-8 transition-all duration-1000 ease-out delay-200"
          >
            {/* Pull Quote */}
            <blockquote className="border-l-2 border-[#C9A84C] pl-8 mb-10">
              <p
                className="text-[#0A0A0A] text-2xl md:text-3xl font-light italic leading-[1.5]"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                &ldquo;Six children. Top Secret clearance. $300,000 in research grants. $170,000 in personal business grants. Teaching the next generation while building the future.&rdquo;
              </p>
            </blockquote>

            <p
              className="text-[#0A0A0A] leading-[1.9] text-[15px]"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Her academic credentials are as layered as her career: a Master of Science in Management Information Systems with a Cybersecurity Concentration from the University of Nebraska, a Master of Public Administration from Bellevue University, and a Bachelor of Science in Criminal Justice, also from Nebraska. The arc from criminal justice to national cyber strategy is not accidental. It reflects a mind that has always understood that security is, at its core, a human problem.
            </p>
            <p
              className="text-[#0A0A0A] leading-[1.9] text-[15px] mt-6"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Beyond the classroom and the cleared world, Lozano is a multi-industry founder, a published author, and a contracted Federal Investigator who maintains an active Top Secret clearance. She has secured over $170,000 in grants for her own businesses, proof that the same strategic thinking she applied in federal service translates directly into building ventures that attract real capital. She is also a contracted Proposal Reviewer for the NSF Advanced Technological Education program, placing her at the forefront of shaping the next generation of technical education nationwide.
            </p>
            <p
              className="text-[#0A0A0A] leading-[1.9] text-[15px] mt-6"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              She is a mother of six. She is based in Houston, Texas. And she is, by any measure, one of the most quietly formidable people in her field.
            </p>
          </div>
        </div>

        {/* Image Strip */}
        <div
          ref={imgRef}
          className="opacity-0 translate-y-8 transition-all duration-1000 ease-out mb-20"
        >
          <div className="rounded-2xl overflow-hidden" style={{ height: '520px' }}>
            <img
              src="https://raw.githubusercontent.com/AlyssaLozano/LozanoCollective/main/public/images/DSC_9439.jpeg"
              alt="Alyssa Lozano"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>

        {/* Education Section */}
        <div className="opacity-0 translate-y-8 transition-all duration-1000 ease-out mb-20">
          <div className="border-t border-[#0A0A0A]/10 pt-16">
            <p
              className="text-[#C9A84C] text-[10px] tracking-[0.3em] uppercase mb-10 font-medium"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Education
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  degree: 'Master of Science',
                  field: 'Management Information Systems',
                  concentration: 'Cybersecurity Concentration',
                  school: 'University of Nebraska',
                  year: '2014',
                },
                {
                  degree: 'Master of Public Administration',
                  field: 'Public Administration',
                  concentration: null,
                  school: 'Bellevue University',
                  year: '2010',
                },
                {
                  degree: 'Bachelor of Science',
                  field: 'Criminal Justice',
                  concentration: null,
                  school: 'University of Nebraska',
                  year: '2008',
                },
              ].map((edu) => (
                <div key={edu.year} className="bg-[#0A0A0A] rounded-3xl p-8 flex flex-col gap-4">
                  <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#C9A84C]/10 border border-[#C9A84C]/20">
                    <i className="ri-graduation-cap-line text-[#C9A84C] text-lg"></i>
                  </div>
                  <div>
                    <p
                      className="text-[#C9A84C] text-[10px] tracking-[0.25em] uppercase mb-2"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {edu.degree}
                    </p>
                    <h3
                      className="text-[#F5F1E8] text-xl md:text-2xl font-light leading-tight mb-1"
                      style={{ fontFamily: 'Cormorant Garamond, serif' }}
                    >
                      {edu.field}
                    </h3>
                    {edu.concentration && (
                      <p
                        className="text-[#8B8680] text-xs italic mb-3"
                        style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '14px' }}
                      >
                        {edu.concentration}
                      </p>
                    )}
                  </div>
                  <div className="border-t border-white/8 pt-4 flex items-center justify-between">
                    <p className="text-[#8B8680] text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {edu.school}
                    </p>
                    <p
                      className="text-[#C9A84C] text-2xl font-light"
                      style={{ fontFamily: 'Cormorant Garamond, serif' }}
                    >
                      {edu.year}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Credentials Grid */}
        <div
          ref={credRef}
          className="opacity-0 translate-y-8 transition-all duration-1000 ease-out"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 border-t border-[#0A0A0A]/10 pt-16">
            {/* Column 1 */}
            <div>
              <p
                className="text-[#C9A84C] text-[10px] tracking-[0.3em] uppercase mb-6 font-medium"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                National Security Leadership
              </p>
              <ul className="space-y-4">
                {[
                  'Deputy Technical Director, NSA National Cyber Strategy & Operational Response',
                  'Deputy Chief & Hiring Manager, NSA Red/Blue Team Analysis Organization',
                  'Contributor, NSA Cyber Threat Framework',
                  'Contracted Federal Investigator',
                  'Active Top Secret Clearance',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-[#C9A84C] mt-1 text-xs">—</span>
                    <span className="text-[#3A3632] text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <p
                className="text-[#C9A84C] text-[10px] tracking-[0.3em] uppercase mb-6 font-medium"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Academic Excellence
              </p>
              <ul className="space-y-4">
                {[
                  'Cybersecurity Faculty, San Jacinto College (since Jan 2022)',
                  'NSF Principal Investigator (~$300K grant)',
                  'CAE-CD Program Evaluator, National Centers of Academic Excellence (previous NSA CAE evaluator)',
                  'NSF ATE Contracted Proposal Reviewer',
                  'Teaching: InfoSec, Network Defense, Incident Response, Digital Forensics, Pen Testing, ICS Security, Cloud Security',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-[#C9A84C] mt-1 text-xs">—</span>
                    <span className="text-[#3A3632] text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <p
                className="text-[#C9A84C] text-[10px] tracking-[0.3em] uppercase mb-6 font-medium"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Education &amp; Foundation
              </p>
              <ul className="space-y-4">
                {[
                  'M.S. Management Information Systems, Cybersecurity Concentration, University of Nebraska',
                  'Master of Public Administration, Bellevue University',
                  'B.S. Criminal Justice, University of Nebraska',
                  'Mother of six',
                  'Based in Houston, Texas',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-[#C9A84C] mt-1 text-xs">—</span>
                    <span className="text-[#3A3632] text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Signature */}
          <div className="flex justify-end mt-16">
            <div className="text-right">
              <p
                className="text-[#C9A84C] text-5xl font-light italic"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                Lyssa
              </p>
              <div className="w-24 h-px bg-[#C9A84C]/40 ml-auto mt-2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
