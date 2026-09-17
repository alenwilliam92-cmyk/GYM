"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring, useReducedMotion, MotionValue } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

export interface TrainingPathwayItem {
  title: string;
  titleLines: string[];
  description: string;
  imageSrc: string;
  href: string;
  objectPosition?: string;
}

interface PathwayCardProps {
  program: TrainingPathwayItem;
  index: number;
  desktopProgress: MotionValue<number>;
  isDesktop: boolean;
  shouldReduceMotion: boolean | null;
}

export function PathwayCard({
  program,
  index,
  desktopProgress,
  isDesktop,
  shouldReduceMotion,
}: PathwayCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);

  // Desktop sequential timeline:
  // Card 1: 0.00 to 0.28 (rises first into view)
  // Card 2: 0.20 to 0.48 (begins rising as Card 1 settles)
  // Card 3: 0.40 to 0.68 (begins rising as Card 2 settles)
  // Card 4: 0.60 to 0.88 (begins rising as Card 3 settles)
  // Final aligned hold: 0.88 to 1.00 (all 4 cards fully settled and aligned)
  const desktopWindows = [
    { start: 0.00, end: 0.28 },
    { start: 0.20, end: 0.48 },
    { start: 0.40, end: 0.68 },
    { start: 0.60, end: 0.88 },
  ];

  const windowConfig = desktopWindows[index] ?? { start: 0, end: 0.28 };
  // Later cards start progressively lower down for authentic staggered upward arrival
  const initialOffset = 160 + index * 40; // 160px, 200px, 240px, 280px

  // 1. Desktop scroll transforms with C2-continuous Perlin smootherstep interpolation
  // Both 1st and 2nd derivatives are 0 at endpoints: eliminates initial kick and cushions landing
  const desktopY = useTransform(desktopProgress, (p) => {
    if (shouldReduceMotion || isFocused || !isDesktop) return 0;
    if (p <= windowConfig.start) return initialOffset;
    if (p >= windowConfig.end) return 0;
    const rawT = (p - windowConfig.start) / (windowConfig.end - windowConfig.start);
    // Ken Perlin's Smootherstep: 6t^5 - 15t^4 + 10t^3 (zero jerk, velvety acceleration/deceleration)
    const t = rawT * rawT * rawT * (rawT * (rawT * 6 - 15) + 10);
    return (1 - t) * initialOffset;
  });

  const desktopOpacity = useTransform(desktopProgress, (p) => {
    if (shouldReduceMotion || isFocused || !isDesktop) return 1;
    if (p < windowConfig.start) return 0;
    const fadeDuration = 0.12; // smooth, graceful fade-in
    if (p >= windowConfig.start + fadeDuration) return 1;
    const rawF = (p - windowConfig.start) / fadeDuration;
    // Hermite smoothstep curve: 3f^2 - 2f^3
    return rawF * rawF * (3 - 2 * rawF);
  });

  // 2. Mobile / Tablet scroll transforms (per card entry) with smooth spring
  const { scrollYProgress: rawMobileScroll } = useScroll({
    target: cardRef,
    offset: ["start 95%", "start 70%"],
  });

  const mobileScroll = useSpring(rawMobileScroll, {
    stiffness: 120,
    damping: 24,
    mass: 0.4,
    restDelta: 0.0001,
  });

  const mobileY = useTransform(mobileScroll, (p: number) => {
    if (shouldReduceMotion || isFocused || isDesktop) return 0;
    const clamped = Math.min(Math.max(p, 0), 1);
    const t = clamped * clamped * (3 - 2 * clamped);
    return (1 - t) * 28;
  });

  const mobileOpacity = useTransform(mobileScroll, (p: number) => {
    if (shouldReduceMotion || isFocused || isDesktop) return 1;
    const clamped = Math.min(Math.max(p, 0), 1);
    const f = Math.min(clamped / 0.4, 1);
    return f * f * (3 - 2 * f);
  });

  const y = isDesktop ? desktopY : mobileY;
  const opacity = isDesktop ? desktopOpacity : mobileOpacity;

  return (
    <div ref={cardRef} className="h-full">
      <motion.div
        style={{ y, opacity, transform: "translateZ(0)" }}
        className="h-full flex flex-col will-change-transform transform-gpu"
      >
        <Link
          href={program.href}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="group relative flex flex-col h-full rounded-[14px] overflow-hidden bg-[#E2D9CB] border border-black/[0.08] shadow-[0_8px_24px_-8px_rgba(0,0,0,0.18)] hover:shadow-[0_16px_36px_-10px_rgba(0,0,0,0.28)] transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-sand"
          aria-label={`${program.title}: ${program.description}`}
        >
          {/* Card Media & Content Container (4:5 portrait ratio) */}
          <div className="relative w-full aspect-[4/5] overflow-hidden">
            {/* Background Image with smooth scale on hover */}
            <img
              src={program.imageSrc}
              alt={program.title}
              className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.045]"
              style={{ objectPosition: program.objectPosition ?? "center" }}
              loading="lazy"
            />

            {/* Crisp inner border ring for premium edge finish */}
            <div className="absolute inset-0 ring-1 ring-inset ring-white/15 rounded-[14px] pointer-events-none z-10" />

            {/* Deep multi-stop gradient overlay for optimal text legibility */}
            <div className="absolute inset-x-0 bottom-0 h-[68%] bg-gradient-to-t from-black/95 via-black/75 via-50% to-transparent pointer-events-none transition-opacity duration-300 group-hover:opacity-95" />

            {/* Overlaid Content: Athletic Title + Description inside the card */}
            <div className="absolute inset-x-0 bottom-0 px-4 sm:px-5 lg:px-4 xl:px-5 pb-5 sm:pb-6 lg:pb-5 xl:pb-6 text-center flex flex-col items-center justify-end z-20 overflow-visible">
              {/* Program Name in Barlow Condensed Athletic Display */}
              <h3 className="font-athletic font-black italic uppercase text-[#FAF7F0] tracking-[-0.025em] leading-[0.94] text-[26px] sm:text-[32px] lg:text-[25px] xl:text-[30px] select-none drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)] inline-block max-w-full overflow-visible pr-1 transition-transform duration-300 group-hover:-translate-y-0.5">
                {program.titleLines.map((line, lineIdx) => (
                  <span key={lineIdx} className="block whitespace-nowrap overflow-visible">
                    {line}
                  </span>
                ))}
              </h3>

              {/* Description placed directly inside the card below the title */}
              <p className="mt-2.5 sm:mt-3 text-[13px] sm:text-[14px] lg:text-[12.5px] xl:text-[13.5px] text-[#FAF7F0]/85 group-hover:text-[#FAF7F0] font-sans font-normal not-italic leading-[1.42] max-w-[24ch] mx-auto drop-shadow-[0_1px_6px_rgba(0,0,0,0.9)] transition-colors duration-300">
                {program.description}
              </p>
            </div>
          </div>
        </Link>
      </motion.div>
    </div>
  );
}

export default function TrainingPathwaysSection({
  programs,
}: {
  programs: TrainingPathwayItem[];
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  // Desktop local scroll timeline:
  // Measures the untransformed outer runway as target
  // Generous runway height of 100vh + 1320px (~330px per card stage + hold) gives wheels/trackpads room to breathe
  const { scrollYProgress: rawDesktopProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Highly responsive, critically tuned spring smoothing: absorbs notched mouse-wheel steps into silky cinematic flow
  const desktopProgress = useSpring(rawDesktopProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.25,
    restDelta: 0.0001,
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      // Active on desktop viewports with sufficient height to host the sticky stage
      setIsDesktop(width >= 1024 && height >= 700);
    };

    handleResize();
    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      ref={containerRef}
      className={`relative w-full bg-sand border-b border-divider ${
        isDesktop && !shouldReduceMotion
          ? "h-[calc(100vh+1320px)]"
          : "h-auto py-20 sm:py-24 lg:py-28"
      }`}
    >
      {/* Sticky container on desktop, static flow on mobile/tablet/short-windows */}
      <div
        className={
          isDesktop && !shouldReduceMotion
            ? "sticky top-0 h-screen w-full flex flex-col justify-center pt-20 pb-6 overflow-hidden"
            : "w-full"
        }
      >
        <div className="max-w-container mx-auto px-5 sm:px-6 md:px-12 w-full">
          {/* Refined Brand Section Heading */}
          <div className="mb-7 lg:mb-9 pb-1">
            {/* Eyebrow with signature terracotta accent bar */}
            <div className="flex items-center gap-2.5 mb-2.5 sm:mb-3">
              <span className="w-5 h-[2px] bg-accent rounded-full" />
              <span className="text-[12px] font-bold uppercase tracking-[0.16em] text-accent">
                Training Pathways
              </span>
            </div>

            {/* High-contrast two-tone headline */}
            <h2 className="text-[30px] sm:text-[36px] lg:text-[40px] xl:text-[44px] font-semibold text-main leading-[1.12] tracking-[-0.03em]">
              Four paths. <span className="text-accent">One supportive roof.</span>
            </h2>

            {/* Supporting subtitle with optimal line length */}
            <p className="mt-2 sm:mt-2.5 text-[15px] sm:text-[16px] text-secondary leading-[1.55] max-w-[44ch]">
              Find the training that feels right for you.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 lg:gap-5 xl:gap-6">
            {programs.map((program, index) => (
              <PathwayCard
                key={program.title}
                program={program}
                index={index}
                desktopProgress={desktopProgress}
                isDesktop={isDesktop}
                shouldReduceMotion={shouldReduceMotion}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
