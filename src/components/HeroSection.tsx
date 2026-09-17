"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Button from "./Button";
import ScrollReveal from "./animations/ScrollReveal";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLElement | null>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  // Check and respond to reduced-motion preferences
  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      setReducedMotion(true);
      if (videoRef.current) {
        videoRef.current.pause();
      }
    }

    const handleChange = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
      if (e.matches) {
        videoRef.current?.pause();
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Initial autoplay handling with rejection safety
  useEffect(() => {
    const video = videoRef.current;
    if (!video || reducedMotion) return;

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Autoplay policy prevented playback; remains paused gracefully
      });
    }
  }, [reducedMotion]);

  // Page visibility & IntersectionObserver handling
  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    // IntersectionObserver to pause offscreen
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!reducedMotion) {
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(container);

    // Visibility change handling (pause on tab switch, resume if visible)
    const handleVisibilityChange = () => {
      if (document.hidden) {
        video.pause();
      } else if (!reducedMotion) {
        video.play().catch(() => {});
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [reducedMotion]);

  return (
    <section
      id="hero-section"
      ref={containerRef}
      aria-label="Welcome hero section"
      className="w-full relative isolate overflow-hidden min-h-[100svh] h-auto flex flex-col justify-end md:justify-center md:items-center bg-[#111111]"
    >
      {/* Background Video: Fills entire hero on both mobile and desktop via absolute inset-0 object-cover.
          Mobile framing uses object-[72%_35%] to keep the exercising subject (female athlete on bench) in view.
          Desktop framing uses md:object-[center_35%]. */}
      <video
        ref={videoRef}
        src="/videos/herosection.mp4"
        poster="/videos/herosection-poster.jpg"
        autoPlay={!reducedMotion}
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover object-[72%_35%] md:object-[center_35%] pointer-events-none select-none z-0"
      />

      {/* Subtle Top Gradient for Mobile Navbar Readability (<768px) */}
      <div
        className="md:hidden absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-black/65 via-black/25 to-transparent pointer-events-none z-[1]"
        aria-hidden="true"
      />

      {/* Smooth Bottom Gradient for Mobile Copy Readability (<768px)
          Fades to transparent toward the middle of the hero so the workout video remains at natural brightness */}
      <div
        className="md:hidden absolute bottom-0 inset-x-0 h-[65%] min-h-[380px] bg-gradient-to-t from-black/85 via-black/45 to-transparent pointer-events-none z-[1]"
        aria-hidden="true"
      />

      {/* Desktop Gradient Overlay (768px and above) */}
      <div
        className="hidden md:block absolute inset-0 z-[1] pointer-events-none md:bg-gradient-to-r md:from-black/65 md:via-black/40 md:to-black/15"
        aria-hidden="true"
      />

      {/* Content Area:
          On mobile (<768px): Placed toward the bottom using normal flex layout flow, 24px padding (px-6),
          safe-area bottom padding, warm ivory text, and reserved space for controls.
          On desktop (>=768px): Overlaid at z-[2] with desktop typography and dual buttons. */}
      <div className="relative z-[2] w-full px-6 pt-28 pb-[calc(1.5rem+env(safe-area-inset-bottom,0px))] md:pt-24 md:pb-24 md:px-12 md:max-w-container md:mx-auto flex flex-col justify-end md:justify-center">
        <div className="max-w-[680px] w-full">
          {/* Eyebrow: Hidden on mobile, visible on desktop */}
          <ScrollReveal direction="down">
            <span className="hidden md:block text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] text-white/90 mb-4 drop-shadow-sm">
              PRECISION ATHLETIC CONDITIONING &amp; WELLNESS
            </span>
          </ScrollReveal>

          {/* Semantic H1: Responsive text spans for mobile vs desktop */}
          <ScrollReveal direction="up" delay={0.05}>
            <h1 className="text-[32px] sm:text-[40px] font-semibold text-[#FAF7F0] leading-[1.08] tracking-[-0.03em] drop-shadow-md md:text-6xl lg:text-[68px] md:text-white md:leading-[1.08]">
              <span className="md:hidden">
                Your stronger<br />self starts here.
              </span>
              <span className="hidden md:inline">
                One day, you’ll thank yourself for starting.
              </span>
            </h1>
          </ScrollReveal>

          {/* Description: Responsive spans for mobile vs desktop */}
          <ScrollReveal direction="up" delay={0.12}>
            <p className="mt-3 md:mt-6 text-[16px] text-[#FAF7F0]/90 leading-[1.5] drop-shadow-sm md:text-lg lg:text-xl md:text-white/90 md:leading-[1.6] max-w-[55ch]">
              <span className="md:hidden">
                Start where you are. Grow stronger with us.
              </span>
              <span className="hidden md:inline">
                Start where you are. Build strength, confidence, and a little more belief in yourself.
              </span>
            </p>
          </ScrollReveal>

          {/* Actions & Buttons */}
          <ScrollReveal direction="up" delay={0.18}>
            <div className="mt-6 md:mt-10 flex flex-col md:flex-row md:items-center gap-3.5 md:gap-4">
              {/* Primary CTA Button (both mobile and desktop) */}
              <Button
                href="/contact-us"
                variant="primary"
                size="lg"
                className="w-full sm:w-auto min-h-[48px] shadow-lg shadow-black/25 text-center justify-center"
              >
                Take the First Step
              </Button>

              {/* Desktop Secondary Outlined Button (768px and above) */}
              <Button
                href="/training"
                variant="outline-white"
                size="lg"
                className="hidden md:inline-flex"
              >
                Explore Training
              </Button>

              {/* Mobile Secondary Row: Compact white text link (below 768px) */}
              <div className="md:hidden flex items-center pt-1">
                <Link
                  href="/training"
                  className="inline-flex items-center gap-1.5 py-2 px-0.5 text-[15px] font-semibold text-white/95 hover:text-white underline underline-offset-4 decoration-white/50 hover:decoration-white focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-4 min-h-[44px] transition-colors"
                >
                  <span>Explore Training</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
