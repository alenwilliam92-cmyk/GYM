"use client";

import React from "react";
import Link from "next/link";
import Button from "@/components/Button";
import SectionHeading from "@/components/SectionHeading";
import FAQAccordion, { FAQItem } from "@/components/FaqAccordion";
import ScrollReveal from "@/components/animations/ScrollReveal";

export default function TrainingPage() {
  const trainingFaqs: FAQItem[] = [
    {
      question: "What if I haven't exercised in a long time?",
      answer:
        "Many of our members arrive after years away from training or after dealing with persistent joint stiffness. Every movement is scaled to where your body is today—never where someone else thinks it should be.",
    },
    {
      question: "Do I need any special gear or clothing?",
      answer:
        "Not at all. A comfortable t-shirt, sweatpants or shorts, and flat-soled sneakers are all you need. We prioritize comfort and natural joint movement over expensive athletic gear.",
    },
    {
      question: "How do I choose between the different training categories?",
      answer:
        "You don't have to decide alone. When you come in for an initial consultation, a coach will walk through your daily schedule, past injuries, and personal goals to recommend the ideal starting point.",
    },
    {
      question: "Can I combine multiple training pathways?",
      answer:
        "Yes. Many members balance strength training with one session of functional fitness or low-impact conditioning each week for complete, well-rounded physical health.",
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
                Training at GYM
              </span>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.05}>
              <h1 className="text-4xl sm:text-6xl lg:text-[68px] font-semibold text-main leading-[1.1] tracking-[-0.03em]">
                What you’re working toward matters.
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.12}>
              <p className="mt-6 text-lg sm:text-xl text-secondary leading-[1.65] max-w-[60ch]">
                Feeling stronger. Moving more comfortably. Making time for yourself. Whatever brings you here, find a way to train that feels right for you.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.18}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button href="#programs" variant="primary" size="lg">
                  Explore Programs
                </Button>
                <Button href="/contact-us" variant="secondary" size="lg">
                  Book a Consultation
                </Button>
              </div>
            </ScrollReveal>
          </div>

          {/* Large Hero Media */}
          <ScrollReveal direction="up" delay={0.22}>
            <div className="relative overflow-hidden rounded-2xl bg-sand border border-divider shadow-sm aspect-[16/9] lg:aspect-[21/9]">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWbJXqL32wLXUEKDQE4rtOrPLYW1ErlvjCJwTvmpmOL7sb-t2C5o1LtPJe3N9iackJeqA_Qpi1ZlpZczurOxTbeL9ROI0y8KFmKTTfQ3fUIljSKkYg6YDVke3nOrPuyOCsPGRTIwzZGoTZxrTiC2XxZyxsXBBYZ2UXcfjISM9GxO-ypbvTYNo6XHV6mluWBMZGj5PnJrAK9rsEapTFN-F73lORoRhYISX5TlZhpam-xZKVsRzbWaQEGQ"
                alt="Wide view of our calm training space with clean barbell racks and natural daylight"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. FOUR CATEGORIES WITH ALTERNATING LAYOUTS */}
      <div id="programs" className="w-full">
        {/* Category 1: Strength Training (Image Left, Copy Right) */}
        <section id="strength-training" className="w-full py-20 sm:py-24 lg:py-28 bg-page border-b border-divider">
          <div className="max-w-container mx-auto px-5 sm:px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              <ScrollReveal direction="left" className="lg:col-span-7">
                <div className="relative overflow-hidden rounded-2xl bg-sand border border-divider shadow-sm group">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDS3OtmpLmtFVLFx4Xt-8pqVkaFhjwuXAkv4I3jvzfMxvzaNgc7RTvvF3_r11ocOCL9lNG3tfVeIo4mnkrYb3Ur9B20X6uiqAw41Od_WawREGtjmGEZ9RmTgdIPYx4eKXrvgBKin5fzE6bpzVXCZfmHphRrIIR-20J4aiBSrG7-DdHNIYUH-_whMxg1TExvHk5bHSxocDxIwQlUriILYHCaD-KRBxZTf0biGjw7luLTL6Z74LDmNKC9nw"
                    alt="Strength training with precision barbells under warm natural lighting"
                    className="w-full h-[380px] sm:h-[460px] lg:h-[520px] object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right" className="lg:col-span-5 flex flex-col items-start">
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-secondary mb-3">
                  01 / Category
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-semibold text-main leading-[1.15] tracking-[-0.03em]">
                  Strength Training
                </h2>
                <p className="mt-4 text-base sm:text-lg text-secondary leading-[1.65]">
                  Master foundational human movements—squatting, hinging, pushing, and pulling—with patient technical coaching. Build structural resilience, bone density, and lasting joint stability.
                </p>

                <ul className="mt-6 space-y-3 pt-4 border-t border-divider w-full">
                  <li className="flex items-start text-sm sm:text-base text-secondary">
                    <span className="text-accent font-bold mr-2.5">•</span>
                    <span>Individualized movement screens prior to prescribing load</span>
                  </li>
                  <li className="flex items-start text-sm sm:text-base text-secondary">
                    <span className="text-accent font-bold mr-2.5">•</span>
                    <span>Careful technical progressions prioritizing spinal and joint health</span>
                  </li>
                  <li className="flex items-start text-sm sm:text-base text-secondary">
                    <span className="text-accent font-bold mr-2.5">•</span>
                    <span>Calm, supportive atmosphere with zero shouting or intimidation</span>
                  </li>
                </ul>

                <div className="mt-8">
                  <Button href="/contact-us" variant="primary">
                    Enquire Now
                  </Button>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Category 2: Personal Training (Image Right, Copy Left - Soft Sage Section) */}
        <section id="personal-training" className="w-full py-20 sm:py-24 lg:py-28 bg-sage border-b border-divider">
          <div className="max-w-container mx-auto px-5 sm:px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              <ScrollReveal direction="right" className="lg:col-span-7 lg:order-2">
                <div className="relative overflow-hidden rounded-2xl bg-sand border border-divider shadow-sm group">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3CONNiaie90RAL-AMFvqrWO8Z9PQfiRFoCpzaKT4y_vQMbxuL1kGlK-yMDBQcYpAYsJlqHEtbM5LiIpBCDC-ZnXHgVCO35mjlkeV40xkYD-lRMNf2ZLqOaxhXETwxtWXirj0ZpiOJlwYoqKNU_SAzlP0runG2IFMaeAxhha0ersnocP79RHAlhHFo8MRYIIXo7rd_K1r3Yu7UKEMYv_BRCTqTsdKFpmvoxtI6wLi_95GbaWdOYkvjoQ"
                    alt="A coach carefully observing and guiding personal training client"
                    className="w-full h-[380px] sm:h-[460px] lg:h-[520px] object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                </div>
              </ScrollReveal>

              <ScrollReveal direction="left" className="lg:col-span-5 lg:order-1 flex flex-col items-start">
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-secondary mb-3">
                  02 / Category
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-semibold text-main leading-[1.15] tracking-[-0.03em]">
                  Personal Training
                </h2>
                <p className="mt-4 text-base sm:text-lg text-secondary leading-[1.65]">
                  Dedicated one-on-one sessions structured entirely around your body, training history, and lifestyle schedule. Your coach works beside you throughout, adjusting volume and cues in real time.
                </p>

                <ul className="mt-6 space-y-3 pt-4 border-t border-divider w-full">
                  <li className="flex items-start text-sm sm:text-base text-secondary">
                    <span className="text-accent font-bold mr-2.5">•</span>
                    <span>100% personalized session programming and movement cadence</span>
                  </li>
                  <li className="flex items-start text-sm sm:text-base text-secondary">
                    <span className="text-accent font-bold mr-2.5">•</span>
                    <span>Comprehensive attention to past injuries and posture correction</span>
                  </li>
                  <li className="flex items-start text-sm sm:text-base text-secondary">
                    <span className="text-accent font-bold mr-2.5">•</span>
                    <span>Quiet, private focus on your individual baseline and goals</span>
                  </li>
                </ul>

                <div className="mt-8">
                  <Button href="/contact-us" variant="primary">
                    Enquire Now
                  </Button>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Category 3: Functional Fitness (Image Left, Copy Right) */}
        <section id="functional-fitness" className="w-full py-20 sm:py-24 lg:py-28 bg-page border-b border-divider">
          <div className="max-w-container mx-auto px-5 sm:px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              <ScrollReveal direction="left" className="lg:col-span-7">
                <div className="relative overflow-hidden rounded-2xl bg-sand border border-divider shadow-sm group">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4vZbDN_lFsJs0MkPD1LaKFokDDaha4P68949lDeRNkonEWM6-brJQtvGY8bJoY1tlN06-JxREprrwNxKeXOV-cx8Jr7zjh-10GyZmcrs-xGVYhkPBbMF7wW-fSMp5HN8Htn_C9BVx123s40Cn9_2jez3k95mon63c6TpEjbsBPnmSC0vzsIsO4Ns4zal_UepOBswXTD_slpAnUNm67TMvmmNnzy3d4Juyt7IeVxN36PMyEv9emr7KjQ"
                    alt="Functional fitness session practicing rotational power and natural balance"
                    className="w-full h-[380px] sm:h-[460px] lg:h-[520px] object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right" className="lg:col-span-5 flex flex-col items-start">
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-secondary mb-3">
                  03 / Category
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-semibold text-main leading-[1.15] tracking-[-0.03em]">
                  Functional Fitness
                </h2>
                <p className="mt-4 text-base sm:text-lg text-secondary leading-[1.65]">
                  Multi-planar training designed to keep your body nimble, adaptable, and balanced. Combines mobility drills, core integration, and rotational work that translates directly to everyday ease.
                </p>

                <ul className="mt-6 space-y-3 pt-4 border-t border-divider w-full">
                  <li className="flex items-start text-sm sm:text-base text-secondary">
                    <span className="text-accent font-bold mr-2.5">•</span>
                    <span>Restores thoracic rotation, hip mobility, and single-leg balance</span>
                  </li>
                  <li className="flex items-start text-sm sm:text-base text-secondary">
                    <span className="text-accent font-bold mr-2.5">•</span>
                    <span>Builds physical endurance for sports, hiking, and family activities</span>
                  </li>
                  <li className="flex items-start text-sm sm:text-base text-secondary">
                    <span className="text-accent font-bold mr-2.5">•</span>
                    <span>Prevents compensation patterns from prolonged sitting</span>
                  </li>
                </ul>

                <div className="mt-8">
                  <Button href="/contact-us" variant="primary">
                    Enquire Now
                  </Button>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Category 4: Conditioning (Image Right, Copy Left - Sand Section) */}
        <section id="conditioning" className="w-full py-20 sm:py-24 lg:py-28 bg-sand border-b border-divider">
          <div className="max-w-container mx-auto px-5 sm:px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              <ScrollReveal direction="right" className="lg:col-span-7 lg:order-2">
                <div className="relative overflow-hidden rounded-2xl bg-surface border border-divider shadow-sm group">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUIFN5cSdhcdn0PTxg_54eipk1FVpM7ky1gmSIdl6P4bChS4u4fVJr9NX7w-pWZGtDz5_IP48spSFswHX1XwrEbwULONzXUYwTFLXySXZzJUfQ4cq3zQsmNsThhSjY23e5vyivUm5nFbVus092yJkVIl1jRmlk1LEL9iajoQegBJWGA-iJD_zmDs9cGCvTIyxFAasa7MYr5YD_wrwBoD1pJGF-2ypkC5dHhvoiN8aCxd8_-UYNiUQL_A"
                    alt="Low impact cardiovascular conditioning with ergometers"
                    className="w-full h-[380px] sm:h-[460px] lg:h-[520px] object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                </div>
              </ScrollReveal>

              <ScrollReveal direction="left" className="lg:col-span-5 lg:order-1 flex flex-col items-start">
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-secondary mb-3">
                  04 / Category
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-semibold text-main leading-[1.15] tracking-[-0.03em]">
                  Conditioning
                </h2>
                <p className="mt-4 text-base sm:text-lg text-secondary leading-[1.65]">
                  Cardiovascular training using low-impact rowers, ski ergs, and tempo circuits. We train your aerobic engine and nervous system resilience without pounding your joints or causing chronic burnout.
                </p>

                <ul className="mt-6 space-y-3 pt-4 border-t border-divider w-full">
                  <li className="flex items-start text-sm sm:text-base text-secondary">
                    <span className="text-accent font-bold mr-2.5">•</span>
                    <span>Low-impact ergometers gentle on ankles, knees, and lower back</span>
                  </li>
                  <li className="flex items-start text-sm sm:text-base text-secondary">
                    <span className="text-accent font-bold mr-2.5">•</span>
                    <span>Heart-rate guided pacing to ensure workouts build rather than drain</span>
                  </li>
                  <li className="flex items-start text-sm sm:text-base text-secondary">
                    <span className="text-accent font-bold mr-2.5">•</span>
                    <span>Promotes restorative sleep and daytime mental freshness</span>
                  </li>
                </ul>

                <div className="mt-8">
                  <Button href="/contact-us" variant="primary">
                    Enquire Now
                  </Button>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </div>

      {/* 3. EQUIPMENT PHILOSOPHY (Technogym-Caliber Attention to Biomechanics) */}
      <section className="w-full py-20 sm:py-24 lg:py-28 bg-page border-b border-divider">
        <div className="max-w-container mx-auto px-5 sm:px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal direction="up">
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-secondary block mb-3">
                Biomechanical Craft
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-semibold text-main leading-[1.15] tracking-[-0.03em]">
                Equipment selected with care.
              </h2>
              <p className="mt-4 text-base sm:text-lg text-secondary leading-[1.65]">
                We partner with premier equipment manufacturers who design around human anatomy rather than visual gimmickry. Every barbell knurling, cable resistance curve, and bench angle is calibrated to keep resistance squarely on your muscles and off your joints.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 4. ACCESSIBLE FAQ */}
      <section className="w-full py-20 sm:py-24 lg:py-28 bg-sand border-b border-divider">
        <div className="max-w-3xl mx-auto px-5 sm:px-6 md:px-12">
          <ScrollReveal direction="up" className="text-center mb-12">
            <SectionHeading
              align="center"
              eyebrow="Questions &amp; Answers"
              title="Common questions about training."
              description="Everything you need to know before stepping into a session."
            />
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.1}>
            <FAQAccordion items={trainingFaqs} />
          </ScrollReveal>
        </div>
      </section>

      {/* 5. CLOSING CTA */}
      <section className="w-full py-20 sm:py-24 bg-page">
        <div className="max-w-container mx-auto px-5 sm:px-6 md:px-12">
          <ScrollReveal direction="up">
            <div className="max-w-2xl mx-auto text-center flex flex-col items-center">
              <h2 className="text-3xl sm:text-5xl font-semibold text-main tracking-[-0.03em] leading-tight">
                Find the training that fits your life.
              </h2>
              <p className="mt-4 text-base sm:text-lg text-secondary leading-relaxed">
                Connect with our coaching team to discuss your goals and arrange a private tour of our facility.
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
