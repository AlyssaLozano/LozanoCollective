import { useReveal } from '@/hooks/useReveal';

export default function PersonalStory() {
  const titleRef = useReveal(0.1);
  const col1Ref = useReveal(0.1);
  const col2Ref = useReveal(0.1);
  const imgRef = useReveal(0.1);

  return (
    <section id="personal-story" className="bg-[#0A0A0A] py-28 md:py-40 overflow-hidden">
      <div className="px-6 md:px-12 lg:px-20 max-w-screen-xl mx-auto">

        <p
          className="text-[#C9A84C] text-xs tracking-[0.35em] uppercase mb-10 italic"
          style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '13px' }}
        >
          Personal Story
        </p>

        <div
          ref={titleRef}
          className="opacity-0 translate-y-8 transition-all duration-1000 ease-out mb-16 md:mb-20"
        >
          <h2
            className="text-[#F5F1E8] text-5xl md:text-7xl lg:text-8xl font-light leading-[1.1] max-w-4xl"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Built by
            <br />
            <span className="italic text-[#C9A84C]">Intention,</span>
            <br />
            Not Chance
          </h2>
          <p
            className="mt-8 text-[#8B8680] text-base md:text-lg font-light leading-relaxed max-w-2xl italic"
            style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '18px' }}
          >
            A portrait of a woman who didn&apos;t just grow up. She built herself, step by step, into someone who controls her direction instead of reacting to it.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
          <div
            ref={col1Ref}
            className="opacity-0 translate-y-8 transition-all duration-1000 ease-out delay-100"
          >
            <p className="text-[#D0CBC4] leading-[1.9] text-[15px]" style={{ fontFamily: 'Inter, sans-serif' }}>
              <span
                className="float-left text-[#C9A84C] leading-none mr-3 mt-1 font-light"
                style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '88px', lineHeight: '0.8' }}
              >
                S
              </span>
              ome stories are built on privilege. Others are built on will. Alyssa&apos;s is the latter, and it is proof that where you start does not determine where you finish. Raised in a household shaped by loss and responsibility, she learned early what most people spend decades trying to understand: that stability is not inherited, it is built. The early loss of her father forced her to mature faster than most, and her mother&apos;s background in the military and federal law enforcement created a home built on accountability, awareness, and high expectations. Discipline was not a lesson in her house. It was the language.
            </p>
            <p className="text-[#D0CBC4] leading-[1.9] text-[15px] mt-6" style={{ fontFamily: 'Inter, sans-serif' }}>
              That foundation shaped how she moved through her teenage years. While others experimented, Alyssa observed. She paid attention to how people lived, what worked, and what didn&apos;t. She developed a quiet confidence and a forward-thinking mindset long before most of her peers, not living in the moment but preparing for what came next. And then, life gave her the ultimate test: at a young age, she became a teen mother of two children. Where many would have seen a ceiling, Alyssa saw a floor. She refused to let circumstance define her trajectory. She used that pressure as fuel. She completed a traditional four-year undergraduate degree in just two years by taking an enormous course load, entered the workforce as a social worker, and gained a deep understanding of human behavior and the systems that shape people&apos;s lives. She did not just survive young motherhood. She used it to thrive.
            </p>
            <p className="text-[#D0CBC4] leading-[1.9] text-[15px] mt-6" style={{ fontFamily: 'Inter, sans-serif' }}>
              At nineteen, she purchased her first home. Not simply a milestone, but a statement. She understood, before most of her peers, that ownership was a mindset before it was ever a transaction. That first property became the foundation of a portfolio, the beginning of flipping and investing, and the origin of a financial philosophy rooted in patience, strategy, and long-term thinking. Her young adulthood moved fast, but every step was intentional.
            </p>
            <p className="text-[#D0CBC4] leading-[1.9] text-[15px] mt-6" style={{ fontFamily: 'Inter, sans-serif' }}>
              As her career evolved, Alyssa stepped into high-pressure, high-expectation environments including exposure to federal systems and evaluative processes such as polygraph testing, where professionalism, credibility, and composure under pressure were daily requirements. She learned how to manage perception, protect her integrity, and perform even while watched, questioned, or challenged. Those experiences sharpened the executive discipline she brings to her work today.
            </p>
          </div>

          <div
            ref={col2Ref}
            className="opacity-0 translate-y-8 transition-all duration-1000 ease-out delay-200"
          >
            <blockquote className="border-l-2 border-[#C9A84C] pl-8 mb-10">
              <p
                className="text-[#F5F1E8] text-2xl md:text-3xl font-light italic leading-[1.5]"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                &ldquo;She did not just survive young motherhood. She used it to thrive.&rdquo;
              </p>
            </blockquote>
            <p className="text-[#D0CBC4] leading-[1.9] text-[15px]" style={{ fontFamily: 'Inter, sans-serif' }}>
              Her relationship with money and work evolved alongside her. She stopped working for income and began structuring it: investing in property, refining her ventures for efficiency and return, and designing a lifestyle that reflected both discipline and reward.
            </p>
            <p className="text-[#D0CBC4] leading-[1.9] text-[15px] mt-6" style={{ fontFamily: 'Inter, sans-serif' }}>
              With maturity came a deeper evolution. Early on, she operated from independence and self-reliance, qualities that built her. Over time, she grew into someone who values intentional living, alignment, and balance. She came to understand that independence is powerful, but structure creates longevity. That success isn&apos;t just about money. It&apos;s about alignment. Life decisions should be intentional, never reactive.
            </p>
            <p className="text-[#D0CBC4] leading-[1.9] text-[15px] mt-6" style={{ fontFamily: 'Inter, sans-serif' }}>
              Today, Alyssa&apos;s work moves beyond personal success into impact. She uses her background in social work, her entrepreneurial experience, and her professional exposure to build systems and environments that help others, especially youth who need the structure and guidance she once had to create for herself. She invests, she builds, and she develops initiatives designed not only to grow her own legacy, but to open doors for the people, families, and communities connected to her work.
            </p>
            <p className="text-[#D0CBC4] leading-[1.9] text-[15px] mt-6" style={{ fontFamily: 'Inter, sans-serif' }}>
              At her core, Alyssa is disciplined, strategic, emotionally aware but controlled. A creator of structure rather than a participant in it. Her life is about elevation through intention. She didn&apos;t just grow up. She built herself, step by step, into someone who controls her direction instead of reacting to it.
            </p>
          </div>
        </div>

        <div ref={imgRef} className="opacity-0 translate-y-8 transition-all duration-1000 ease-out">
          <div className="rounded-2xl overflow-hidden w-full" style={{ height: '520px' }}>
            <img
              src="https://storage.readdy-site.link/project_files/b5779f47-cadb-49df-8244-c7ee24f8547b/b5f68a3b-a7d3-49bb-b6c4-87a87e7cc18d_ChatGPT-Image-Apr-24-2026-02_20_31-PM.png?v=807ac0b21e8bbb4d0c65df670ac60b48"
              alt="Alyssa Lozano — personal story"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
