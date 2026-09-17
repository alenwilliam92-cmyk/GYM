"use client";

import React from "react";
import Button from "@/components/Button";
import SectionHeading from "@/components/SectionHeading";
import MediaSection from "@/components/MediaSection";
import ScrollReveal from "@/components/animations/ScrollReveal";

export default function TransformationPage() {
  const milestones = [
    {
      step: "01",
      title: "The quiet habit",
      description:
        "Showing up ceases to be a battle of willpower. Instead, the gym becomes the calmest, most restorative hour of your day—a space where you leave distractions outside.",
    },
    {
      step: "02",
      title: "Everyday physical capability",
      description:
        "Groceries, stairs, luggage, and long walks become effortless. You move with a grounded strength that protects your joints and spine during everyday activities.",
    },
    {
      step: "03",
      title: "Mental clarity & calm",
      description:
        "Structured movement discharges physical stress and restores autonomic balance. You return to your daily life with sharper focus, better mood, and deeper sleep.",
    },
  ];

  return (
    <div className="flex flex-col w-full bg-page">
      {/* 1. HERO */}
      <section className="w-full pt-12 sm:pt-16 lg:pt-20 pb-16 sm:pb-24 border-b border-divider">
        <div className="max-w-container mx-auto px-5 sm:px-6 md:px-12">
          <div className="max-w-3xl mb-12">
            <ScrollReveal direction="down">
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-secondary block mb-4">
                Redefining Progress
              </span>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.05}>
              <h1 className="text-4xl sm:text-6xl lg:text-[68px] font-semibold text-main leading-[1.1] tracking-[-0.03em]">
                Some changes you feel before you see.
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.12}>
              <p className="mt-6 text-lg sm:text-xl text-secondary leading-[1.65] max-w-[60ch]">
                Progress isn&rsquo;t a dramatic before-and-after photo or a punishing routine. It is the stairs that suddenly feel effortless, the quiet calm when you step onto the training floor, and waking up with energy left over for life.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.18}>
              <div className="mt-8">
                <Button href="/contact-us" variant="primary" size="lg">
                  Start Your Journey
                </Button>
              </div>
            </ScrollReveal>
          </div>

          {/* Hero Media */}
          <ScrollReveal direction="up" delay={0.22}>
            <div className="relative overflow-hidden rounded-2xl bg-sand border border-divider shadow-sm aspect-[16/9] lg:aspect-[21/9]">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuANh-YLkkUlEYAyc5w4rq71BWoHN252Iwk9nPh64ns-d_HjA_XMYEjKRWs9cFkZKuZM1EVXunL4myUzxq5EXY6v-LsBHAD9UmeHTnL_AoEsWiAc4gJziGt5MOLwy08TFiARidBAdLttB8_L74TRMPz-2CGh-E5evTiPjKpPA4KiL1-bhUrO_OCTj5njB5aRcpZ_eflFKcThFNcdchnlwk70LJrEHQyrfkkH6BZ-XvjKsG4MaZ1WeD7i2g"
                alt="A tranquil fitness studio filled with natural light and clean equipment"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. COMPOSITION A: SUSTAINED ENERGY */}
      <section className="w-full py-20 sm:py-24 lg:py-28 bg-page border-b border-divider">
        <div className="max-w-container mx-auto px-5 sm:px-6 md:px-12">
          <ScrollReveal direction="up">
            <MediaSection
              imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuB0GHn9_LMGIC9ESk4wFJu18g94qtKH9ELOhhn5pG06_mBqhl3t49qpgDRZTYRgupbJF5XkeG8XsRpGFmCkXoT3DYdM8arICqkv6pM21D-GtS6l0Aqxl1YWk7dXl7Ms3k4M5nF1tgSdath0smXSe3v1AACG9n73fO6nGotJ3JdIw4-da3JwUn1fCfTbedj5XeAznsYaq7RVB3MOVcxYlHW7l4tMCE8p7yYfUJDaJebokfrjItHTVMXaGw"
              alt="An athlete catching breath in quiet contemplation after a focused workout"
              eyebrow="Vitality &amp; Recovery"
              title="Energy that carries into your afternoons."
              description="When workouts match your body rather than crushing it, exercise ceases to be something you dread recovering from. Instead, your resting heart settles, sleep quality deepens, and you find a steady reservoir of physical stamina for the things you love."
            />
          </ScrollReveal>
        </div>
      </section>

      {/* 3. COMPOSITION B: JOINT FREEDOM (Soft Sage Section) */}
      <section className="w-full py-20 sm:py-24 lg:py-28 bg-sage border-b border-divider">
        <div className="max-w-container mx-auto px-5 sm:px-6 md:px-12">
          <ScrollReveal direction="up">
            <MediaSection
              reverse
              imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuDmrYAok5XQR6TaIHHpusXfHmlgsgQBabFv72-5res7CLc2SW1lST9PMCzW3-UMcQBDKccxiG3aEhYeQyU3XPlfXGlCR7IGYSxPNIJP-dcMRk5ddNgt8BcYfrjbUzfKBEMGEce5_0q7dQUQPpxmmbDOEk33A1NWkgWkbbeID88TDzq7zaSaJQ4dChj_miODe887A5Fcs3D8FpnX1VctKUeJl1pFzjvPJpe56hC9rFlLWoDBukPPbPvGzg"
              alt="Focused mobility drill prioritizing joint alignment and posture"
              eyebrow="Mobility &amp; Health"
              title="Joints that move freely and without hesitation."
              description="Chronic tightness and back soreness often stem from improper loading or neglected movement planes. By emphasizing hip rotation, shoulder integrity, and balanced core stability, training rebuilds your freedom to bend, reach, and lift with zero apprehension."
            />
          </ScrollReveal>
        </div>
      </section>

      {/* 4. GROUNDED MILESTONES (Varied Three-Column Editorial Grid) */}
      <section className="w-full py-20 sm:py-24 lg:py-28 bg-page border-b border-divider">
        <div className="max-w-container mx-auto px-5 sm:px-6 md:px-12">
          <ScrollReveal direction="up" className="mb-14 lg:mb-18 max-w-2xl">
            <SectionHeading
              eyebrow="The Milestones"
              title="Milestones that truly matter."
              description="We celebrate the quiet victories that show up in your day-to-day life."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {milestones.map((item, idx) => (
              <ScrollReveal key={item.step} direction="up" delay={idx * 0.06}>
                <div className="p-8 sm:p-10 rounded-2xl bg-surface border border-divider shadow-sm flex flex-col justify-between h-full">
                  <div>
                    <span className="text-xs uppercase font-bold tracking-[0.14em] text-accent block mb-4">
                      {item.step}
                    </span>
                    <h3 className="text-2xl font-semibold text-main tracking-[-0.02em] leading-snug">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-base text-secondary leading-[1.65]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CLOSING CTA */}
      <section className="w-full py-20 sm:py-24 bg-sand">
        <div className="max-w-container mx-auto px-5 sm:px-6 md:px-12">
          <ScrollReveal direction="up">
            <div className="max-w-2xl mx-auto text-center flex flex-col items-center">
              <h2 className="text-3xl sm:text-5xl font-semibold text-main tracking-[-0.03em] leading-tight">
                Begin your own sustainable journey.
              </h2>
              <p className="mt-4 text-base sm:text-lg text-secondary leading-relaxed">
                Connect with our team to explore training that fits your life. No obligations, no sales pressure—just a thoughtful conversation.
              </p>
              <div className="mt-8">
                <Button href="/contact-us" variant="primary" size="lg">
                  Start Your Journey
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
