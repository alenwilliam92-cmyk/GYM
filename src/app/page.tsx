"use client";

import React from "react";
import Link from "next/link";
import Button from "@/components/Button";
import SectionHeading from "@/components/SectionHeading";
import HeroSection from "@/components/HeroSection";
import WelcomeSection from "@/components/WelcomeSection";
import TrainingPathwaysSection, { TrainingPathwayItem } from "@/components/PathwayCard";
import ScrollReveal from "@/components/animations/ScrollReveal";

export default function HomePage() {
  const trainingPrograms: TrainingPathwayItem[] = [
    {
      title: "Strength Training",
      titleLines: ["STRENGTH", "TRAINING"],
      description: "Build strength and confidence, one steady step at a time.",
      imageSrc: "/images/strength.jpeg",
      href: "/training#strength-training",
      objectPosition: "center 35%",
    },
    {
      title: "Personal Training",
      titleLines: ["PERSONAL", "TRAINING"],
      description: "Your goals. Your pace. A coach beside you.",
      imageSrc: "/images/personal%20training.jpeg",
      href: "/training#personal-training",
      objectPosition: "56% 30%",
    },
    {
      title: "Functional Fitness",
      titleLines: ["FUNCTIONAL", "FITNESS"],
      description: "Move with ease. Feel stronger in everyday life.",
      imageSrc: "/images/functional%20fitness.jpeg",
      href: "/training#functional-fitness",
      objectPosition: "50% 30%",
    },
    {
      title: "Conditioning",
      titleLines: ["CONDITIONING"],
      description: "Build your stamina. Find more energy for life.",
      imageSrc: "/images/conditioning.jpeg",
      href: "/training#conditioning",
      objectPosition: "52% 28%",
    },
  ];

  return (
    <div className="flex flex-col w-full bg-page">
      {/* 1. CINEMATIC VIDEO HERO */}
      <HeroSection />

      {/* 2. A PLACE WHERE YOU BELONG (Editorial Introduction) */}
      <WelcomeSection />

      {/* 3. TRAINING PREVIEW (Sequential Scroll-Controlled Card Reveal) */}
      <TrainingPathwaysSection programs={trainingPrograms} />

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
