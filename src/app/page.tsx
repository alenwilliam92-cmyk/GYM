"use client";

import React from "react";
import Link from "next/link";
import Button from "@/components/Button";
import SectionHeading from "@/components/SectionHeading";
import HeroVideo from "@/components/HeroVideo";
import ProgramCard from "@/components/ProgramCard";
import ScrollReveal from "@/components/animations/ScrollReveal";

export default function HomePage() {
  const trainingPrograms = [
    {
      title: "Strength Training",
      category: "Foundations",
      description:
        "Master the squat, hinge, press, and pull at your own pace. Individualized technical guidance focused on structural resilience, joint health, and sustainable power.",
      imageSrc:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDS3OtmpLmtFVLFx4Xt-8pqVkaFhjwuXAkv4I3jvzfMxvzaNgc7RTvvF3_r11ocOCL9lNG3tfVeIo4mnkrYb3Ur9B20X6uiqAw41Od_WawREGtjmGEZ9RmTgdIPYx4eKXrvgBKin5fzE6bpzVXCZfmHphRrIIR-20J4aiBSrG7-DdHNIYUH-_whMxg1TExvHk5bHSxocDxIwQlUriILYHCaD-KRBxZTf0biGjw7luLTL6Z74LDmNKC9nw",
      href: "/training#strength-training",
      benefits: [
        "Personalized progression without arbitrary loading",
        "Full movement screening before prescription",
        "Attentive coaching in a calm environment",
      ],
    },
    {
      title: "Personal Training",
      category: "1-on-1 Guidance",
      description:
        "Dedicated one-on-one coaching designed entirely around your body, schedule, and personal goals. Private, calm, and completely focused on you.",
      imageSrc:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuD3CONNiaie90RAL-AMFvqrWO8Z9PQfiRFoCpzaKT4y_vQMbxuL1kGlK-yMDBQcYpAYsJlqHEtbM5LiIpBCDC-ZnXHgVCO35mjlkeV40xkYD-lRMNf2ZLqOaxhXETwxtWXirj0ZpiOJlwYoqKNU_SAzlP0runG2IFMaeAxhha0ersnocP79RHAlhHFo8MRYIIXo7rd_K1r3Yu7UKEMYv_BRCTqTsdKFpmvoxtI6wLi_95GbaWdOYkvjoQ",
      href: "/training#personal-training",
      benefits: [
        "Comprehensive movement and baseline review",
        "Sessions adapted to your daily physical energy",
        "Direct communication with your personal coach",
      ],
    },
    {
      title: "Functional Fitness",
      category: "Daily Movement",
      description:
        "Movement patterns that translate directly to daily life. Improve rotational stability, balance, joint freedom, and the stamina to move with ease outside the gym.",
      imageSrc:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuB4vZbDN_lFsJs0MkPD1LaKFokDDaha4P68949lDeRNkonEWM6-brJQtvGY8bJoY1tlN06-JxREprrwNxKeXOV-cx8Jr7zjh-10GyZmcrs-xGVYhkPBbMF7wW-fSMp5HN8Htn_C9BVx123s40Cn9_2jez3k95mon63c6TpEjbsBPnmSC0vzsIsO4Ns4zal_UepOBswXTD_slpAnUNm67TMvmmNnzy3d4Juyt7IeVxN36PMyEv9emr7KjQ",
      href: "/training#functional-fitness",
      benefits: [
        "Unweighted and loaded mobility drills",
        "Core stability and postural alignment",
        "Progressive conditioning that respects joints",
      ],
    },
    {
      title: "Conditioning",
      category: "Aerobic Capacity",
      description:
        "Low-impact aerobic work that builds lung capacity and cardiovascular health without joint punishment or burnout. Steady, intelligent intervals designed for recovery.",
      imageSrc:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDUIFN5cSdhcdn0PTxg_54eipk1FVpM7ky1gmSIdl6P4bChS4u4fVJr9NX7w-pWZGtDz5_IP48spSFswHX1XwrEbwULONzXUYwTFLXySXZzJUfQ4cq3zQsmNsThhSjY23e5vyivUm5nFbVus092yJkVIl1jRmlk1LEL9iajoQegBJWGA-iJD_zmDs9cGCvTIyxFAasa7MYr5YD_wrwBoD1pJGF-2ypkC5dHhvoiN8aCxd8_-UYNiUQL_A",
      href: "/training#conditioning",
      benefits: [
        "Heart-rate guided pacing and interval work",
        "Low-impact ergometers and bodyweight flows",
        "Restores autonomic calm and sleep quality",
      ],
    },
  ];

  return (
    <div className="flex flex-col w-full bg-page">
      {/* 1. CINEMATIC HERO */}
      <section className="w-full pt-12 sm:pt-16 lg:pt-20 pb-16 sm:pb-24 border-b border-divider">
        <div className="max-w-container mx-auto px-5 sm:px-6 md:px-12">
          {/* Spacious Ivory Heading Area */}
          <div className="max-w-3xl mb-10 sm:mb-14">
            <ScrollReveal direction="down">
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-secondary block mb-4">
                Precision Athletic Conditioning &amp; Wellness
              </span>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.05}>
              <h1 className="text-4xl sm:text-6xl lg:text-[76px] font-semibold text-main leading-[1.08] tracking-[-0.03em]">
                One day, you’ll thank yourself for starting.
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.12}>
              <p className="mt-6 text-lg sm:text-xl text-secondary leading-[1.6] max-w-[55ch]">
                Start where you are. Build strength, confidence, and a little more belief in yourself.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.18}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button href="/contact-us" variant="primary" size="lg">
                  Take the First Step
                </Button>
                <Button href="/training" variant="secondary" size="lg">
                  Explore Training
                </Button>
              </div>
            </ScrollReveal>
          </div>

          {/* Large Cinematic Visual Banner */}
          <ScrollReveal direction="up" delay={0.22}>
            <HeroVideo
              posterSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuCu9R0w1H5-6V9LoI6fweiplVeUmWMoXNVFcfiTjSe7cNDpM_23qquxkGdS5SSZk3lCxjMS0BHnJ7UxymSUFVJzjIU7qvNzCt-djCfJdEteEWOpp8bBH_XPfHuH_9TtlylGO_TMpyC6bCKJcaMAOs5f6DvKK0tCEc1S18eTfbUPzuED3-be4kDGn4XMTBUqfr_QowURYMoYaR1RdNlruASGjq7TOLme6DNlC136zS1Kp3g5t_Spa-PcBw"
              alt="Two athletes focused on strength training in a bright, tranquil gym studio"
              aspectClassName="aspect-[16/10] sm:aspect-[16/9] lg:aspect-[21/9]"
              overlay={false}
            />
          </ScrollReveal>
        </div>
      </section>

      {/* 2. WELCOME STATEMENT */}
      <section className="w-full py-20 sm:py-24 lg:py-28 bg-page border-b border-divider">
        <div className="max-w-container mx-auto px-5 sm:px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Copy (60%) */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <ScrollReveal direction="up">
                <span className="text-xs font-semibold uppercase tracking-[0.12em] text-secondary mb-3 block">
                  A Welcoming Sanctuary
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-semibold text-main leading-[1.15] tracking-[-0.03em]">
                  A place where you belong.
                </h2>
                <p className="mt-5 text-base sm:text-lg text-secondary leading-[1.65] max-w-[55ch]">
                  Walking into a gym can feel like the hardest part. You might wonder where to begin, what to do, or whether you’ll fit in. There is room for you here.
                </p>
                <p className="mt-4 text-base sm:text-lg text-secondary leading-[1.65] max-w-[55ch]">
                  Ask questions. Learn at your own pace. Celebrate small wins. We believe in building capability through patient, consistent coaching—one quiet session at a time.
                </p>
                <div className="mt-8">
                  <Button href="/about-us" variant="secondary">
                    Our Philosophy &amp; Space
                  </Button>
                </div>
              </ScrollReveal>
            </div>

            {/* Large Clean Gym Image (40%) */}
            <div className="lg:col-span-6 relative">
              <ScrollReveal direction="up" delay={0.1}>
                <div className="overflow-hidden rounded-2xl bg-sand border border-divider shadow-sm group">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZOF0_t9y-gW_MpL6-dyuKyEe-_qFLBATYa2175GBVKUTRPa8qUnoWEZ_0kygJtD7LrCdwFWygm6UbU_FHDYL7o2ei9LWq_rfkCMvnHEVEz2_d7WNglezyl5HbM376zGK3UWaRZtlmEsmBUQTu0juX8endN60IdYawqZbIZ_YFraZ5dh_Pb0ZUbMMgx7GiXpzsc-ipTqlvNruglvUglWFzaPnZMRiLCjwodH7a5PH9pPudsu_uyqgLDw"
                    alt="A coach patiently assisting a member through a natural movement pattern"
                    className="w-full h-[380px] sm:h-[480px] lg:h-[540px] object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TRAINING PREVIEW (Four Image-Led Programs in 2x2 Grid) */}
      <section className="w-full py-20 sm:py-24 lg:py-28 bg-sand border-b border-divider">
        <div className="max-w-container mx-auto px-5 sm:px-6 md:px-12">
          <ScrollReveal direction="up" className="mb-12 lg:mb-16">
            <SectionHeading
              eyebrow="Training Pathways"
              title="Four paths. One supportive roof."
              description="Each discipline is guided with deliberate progressions and personal attention. Choose what matches your current season of life."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {trainingPrograms.map((prog, index) => (
              <ScrollReveal key={prog.title} direction="up" delay={index * 0.06}>
                <ProgramCard
                  title={prog.title}
                  category={prog.category}
                  description={prog.description}
                  imageSrc={prog.imageSrc}
                  href={prog.href}
                  benefits={prog.benefits}
                  ctaText="Explore Program"
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. MOVEMENT FEATURE */}
      <section className="w-full py-20 sm:py-24 lg:py-28 bg-page border-b border-divider">
        <div className="max-w-container mx-auto px-5 sm:px-6 md:px-12">
          <div className="relative rounded-2xl overflow-hidden bg-sand border border-divider shadow-sm group">
            <div className="relative h-[360px] sm:h-[480px] lg:h-[540px] w-full">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWbJXqL32wLXUEKDQE4rtOrPLYW1ErlvjCJwTvmpmOL7sb-t2C5o1LtPJe3N9iackJeqA_Qpi1ZlpZczurOxTbeL9ROI0y8KFmKTTfQ3fUIljSKkYg6YDVke3nOrPuyOCsPGRTIwzZGoTZxrTiC2XxZyxsXBBYZ2UXcfjISM9GxO-ypbvTYNo6XHV6mluWBMZGj5PnJrAK9rsEapTFN-F73lORoRhYISX5TlZhpam-xZKVsRzbWaQEGQ"
                alt="Quiet, naturally illuminated gym space with timber flooring and clean athletic equipment"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.015]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 lg:p-16 max-w-2xl text-white">
                <span className="text-xs uppercase font-semibold tracking-[0.14em] text-white/80 block mb-3">
                  Movement as Daily Practice
                </span>
                <h3 className="text-2xl sm:text-4xl lg:text-[42px] font-semibold text-white leading-tight tracking-[-0.03em]">
                  Find strength for the life you want to live.
                </h3>
                <p className="mt-3 text-sm sm:text-base text-white/90 leading-relaxed max-w-xl">
                  Fitness isn’t about wearing yourself out. It’s about leaving the gym with more clarity, easy joints, and energy left over for everything else.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PROGRESS (Three Grounded Editorial Statements) */}
      <section className="w-full py-20 sm:py-24 lg:py-28 bg-page border-b border-divider">
        <div className="max-w-container mx-auto px-5 sm:px-6 md:px-12">
          <ScrollReveal direction="up" className="mb-12 lg:mb-16 text-center max-w-2xl mx-auto">
            <SectionHeading
              align="center"
              eyebrow="The Philosophy"
              title="Some changes you feel before you see."
              description="We look past arbitrary numbers to focus on the markers that truly shape your daily life."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {/* Statement 1 */}
            <ScrollReveal direction="up" delay={0.05}>
              <div className="p-8 rounded-2xl bg-surface border border-divider shadow-sm flex flex-col h-full">
                <span className="text-xs uppercase font-bold tracking-[0.14em] text-accent mb-3">
                  01 / Strength
                </span>
                <h3 className="text-2xl font-semibold text-main tracking-[-0.02em] leading-snug">
                  Capable everyday strength
                </h3>
                <p className="mt-3 text-base text-secondary leading-[1.65]">
                  Effortless stair climbs, carrying groceries without back strain, and lifting things with quiet confidence. True strength makes daily life feel lighter.
                </p>
              </div>
            </ScrollReveal>

            {/* Statement 2 */}
            <ScrollReveal direction="up" delay={0.1}>
              <div className="p-8 rounded-2xl bg-surface border border-divider shadow-sm flex flex-col h-full">
                <span className="text-xs uppercase font-bold tracking-[0.14em] text-accent mb-3">
                  02 / Energy
                </span>
                <h3 className="text-2xl font-semibold text-main tracking-[-0.02em] leading-snug">
                  Restored daily vitality
                </h3>
                <p className="mt-3 text-base text-secondary leading-[1.65]">
                  Waking up rested, sustaining mental focus in the afternoon, and avoiding the chronic fatigue of over-training. Movement should fuel your life, not drain it.
                </p>
              </div>
            </ScrollReveal>

            {/* Statement 3 */}
            <ScrollReveal direction="up" delay={0.15}>
              <div className="p-8 rounded-2xl bg-surface border border-divider shadow-sm flex flex-col h-full">
                <span className="text-xs uppercase font-bold tracking-[0.14em] text-accent mb-3">
                  03 / Confidence
                </span>
                <h3 className="text-2xl font-semibold text-main tracking-[-0.02em] leading-snug">
                  Quiet trust in your body
                </h3>
                <p className="mt-3 text-base text-secondary leading-[1.65]">
                  Knowing your joints are supported, trusting your balance, and feeling at ease in your own skin. The reassurance that you can keep growing stronger.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 6. CLOSING CTA */}
      <section className="w-full py-20 sm:py-24 bg-sand">
        <div className="max-w-container mx-auto px-5 sm:px-6 md:px-12">
          <ScrollReveal direction="up">
            <div className="max-w-2xl mx-auto text-center flex flex-col items-center">
              <h2 className="text-3xl sm:text-5xl font-semibold text-main tracking-[-0.03em] leading-tight">
                Make a little time for you.
              </h2>
              <p className="mt-4 text-base sm:text-lg text-secondary leading-relaxed">
                Life asks a lot of you. Give yourself space to move, breathe, and work toward something that matters to you.
              </p>
              <div className="mt-8">
                <Button href="/contact-us" variant="primary" size="lg">
                  Take the First Step
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
