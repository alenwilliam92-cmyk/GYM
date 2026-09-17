"use client";

import React, { useRef, useState, useEffect } from "react";
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
      className="relative isolate overflow-hidden w-full min-h-screen min-h-[100svh] flex items-center bg-[#111111]"
    >
      {/* Video Background Layer (z-index 0) */}
      <video
        ref={videoRef}
        src="/videos/herosection.mp4"
        poster="/videos/herosection-poster.jpg"
        autoPlay={!reducedMotion}
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover object-[center_30%] sm:object-[center_35%] z-0 pointer-events-none select-none"
      />

      {/* Non-interactive Gradient Overlay (z-index 1) */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-r from-black/65 via-black/40 to-black/15 max-md:bg-gradient-to-b max-md:from-black/75 max-md:via-black/50 max-md:to-black/30"
        aria-hidden="true"
      />

      {/* Foreground Content Layer (z-index 2) */}
      <div className="relative z-[2] max-w-container mx-auto px-5 sm:px-6 md:px-12 w-full pt-28 sm:pt-36 md:pt-40 pb-16 sm:pb-20 md:pb-24 flex flex-col justify-center">
        <div className="max-w-[680px]">
          {/* Eyebrow */}
          <ScrollReveal direction="down">
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] text-white/90 block mb-4 drop-shadow-sm">
              PRECISION ATHLETIC CONDITIONING &amp; WELLNESS
            </span>
          </ScrollReveal>

          {/* Headline */}
          <ScrollReveal direction="up" delay={0.05}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-semibold text-white leading-[1.08] tracking-[-0.03em] drop-shadow-md">
              One day, you’ll thank yourself for starting.
            </h1>
          </ScrollReveal>

          {/* Description */}
          <ScrollReveal direction="up" delay={0.12}>
            <p className="mt-5 sm:mt-6 text-base sm:text-lg md:text-xl text-white/90 leading-[1.6] max-w-[55ch] drop-shadow-sm">
              Start where you are. Build strength, confidence, and a little more belief in yourself.
            </p>
          </ScrollReveal>

          {/* Action Buttons */}
          <ScrollReveal direction="up" delay={0.18}>
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
              <Button
                href="/contact-us"
                variant="primary"
                size="lg"
                className="shadow-lg shadow-black/25"
              >
                Take the First Step
              </Button>
              <Button
                href="/training"
                variant="outline-white"
                size="lg"
              >
                Explore Training
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
