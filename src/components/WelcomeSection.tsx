"use client";

import React from "react";
import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";

export default function WelcomeSection() {
  const shouldReduceMotion = useReducedMotion();

  const editorialBenefits = [
    {
      num: "01",
      title: "Start as you are",
      description: "No experience needed. Just a willingness to begin.",
    },
    {
      num: "02",
      title: "Find your confidence",
      description: "Learn at your pace, with guidance along the way.",
    },
    {
      num: "03",
      title: "Keep moving forward",
      description: "Build on the small wins, one session at a time.",
    },
  ];

  const fadeUpVariant: Variants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 12,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      aria-label="A place where you belong"
      className="w-full py-16 sm:py-20 lg:py-24 bg-[#FAF7F0] border-b border-[#D8D3C8]"
    >
      <div className="max-w-[1320px] mx-auto px-5 sm:px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 xl:gap-20">
          {/* Left Column (Copy ~44%) */}
          <motion.div
            className="w-full lg:w-[44%] flex flex-col justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-30px" }}
            variants={fadeUpVariant}
          >
            {/* Eyebrow */}
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#62685D] block mb-3">
              YOUR SPACE TO GROW
            </span>

            {/* Deliberate Two-Line Headline */}
            <h2 className="text-[34px] sm:text-[40px] md:text-[46px] lg:text-[52px] xl:text-[56px] font-semibold text-[#384536] leading-[1.1] tracking-[-0.03em]">
              A place where<br className="hidden sm:inline" /> you belong.
            </h2>

            {/* Supporting Paragraph (max ~44ch, 17-18px, 1.65 line-height) */}
            <p className="mt-5 text-[17px] sm:text-[18px] text-[#62685D] leading-[1.65] max-w-[44ch]">
              Your first day can feel unfamiliar. A little encouragement makes all the difference. Find your rhythm, build confidence, and feel at home here.
            </p>

            {/* Three Compact Editorial Rows */}
            <div className="mt-8 pt-1 border-t border-[#D8D3C8]">
              {editorialBenefits.map((benefit) => (
                <div
                  key={benefit.num}
                  className="py-4 border-b border-[#D8D3C8] flex items-start gap-3.5 sm:gap-4"
                >
                  <span className="text-xs sm:text-sm font-semibold text-[#B9472B] tracking-wider pt-0.5 font-mono select-none shrink-0">
                    {benefit.num} /
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-[17px] sm:text-[18px] font-semibold text-[#384536] leading-snug">
                      {benefit.title}
                    </h3>
                    <p className="mt-1 text-[15px] sm:text-[16px] text-[#62685D] leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Editorial Text Link CTA */}
            <div className="mt-8">
              <Link
                href="/about-us"
                className="group inline-flex items-center gap-2 text-[15px] sm:text-base font-semibold text-[#384536] pb-1 border-b-2 border-[#384536] hover:border-[#B9472B] hover:text-[#B9472B] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-[#B9472B] focus-visible:outline-offset-4"
              >
                <span>Get to know us</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>
          </motion.div>

          {/* Right Column (Editorial Image Composition ~56%) */}
          <motion.div
            className="w-full lg:w-[56%] flex justify-center lg:justify-end pb-4 sm:pb-8 lg:pb-10 pl-0 sm:pl-6 lg:pl-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-30px" }}
            variants={fadeUpVariant}
          >
            <div className="relative w-full max-w-[560px]">
              {/* Main Portrait Photograph (approx 4:5 aspect ratio, 12px rounded corners) */}
              <div className="overflow-hidden rounded-[12px] bg-[#EDE5D8] border border-[#D8D3C8]/70 shadow-sm">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZOF0_t9y-gW_MpL6-dyuKyEe-_qFLBATYa2175GBVKUTRPa8qUnoWEZ_0kygJtD7LrCdwFWygm6UbU_FHDYL7o2ei9LWq_rfkCMvnHEVEz2_d7WNglezyl5HbM376zGK3UWaRZtlmEsmBUQTu0juX8endN60IdYawqZbIZ_YFraZ5dh_Pb0ZUbMMgx7GiXpzsc-ipTqlvNruglvUglWFzaPnZMRiLCjwodH7a5PH9pPudsu_uyqgLDw"
                  alt="A coach calmly guiding an adult gym member through strength training in natural daylight"
                  className="w-full aspect-[4/5] object-cover object-[center_20%]"
                  loading="lazy"
                  width={560}
                  height={700}
                />
              </div>

              {/* Smaller Landscape Gym-Interior Photo Inset
                  38-42% width, overlapping lower-left edge, thin ivory frame, 8px rounded corners, subtle shadow */}
              <div className="max-sm:absolute max-sm:bottom-3 max-sm:left-3 max-sm:w-[42%] sm:absolute sm:-bottom-6 sm:-left-6 lg:-bottom-8 lg:-left-8 sm:w-[40%] z-10">
                <div className="overflow-hidden rounded-[8px] p-1 sm:p-1.5 bg-[#FAF7F0] border border-[#D8D3C8] shadow-md shadow-black/8">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbL34JzG4hcniAfyAZDIAIEQh6xIcCs3eBhA6z9uqyv0hBNtU5xZW6xtueKxhGhk4c6H2ZiMxlzU7Nodk2nhLVPxWrXMEHp4091qbW0oYksz23uuYh_v6VP4fFMGqszHznQ692knVUqpIa1LNT0MxjS_ojVh1me8vyTZIGup6UCmdVtOzTsNtQyx32709Hap-UWxLUDZL7DOtkw_BbqhKYaF2hhI7_WeTlaRw3MsvccWLrzaBf-q-sTA"
                    alt="Bright, naturally illuminated gym space with athletic stations and clean equipment"
                    className="w-full aspect-[4/3] object-cover rounded-[5px]"
                    loading="lazy"
                    width={320}
                    height={240}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
