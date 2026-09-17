"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Button from "./Button";
import ScrollReveal from "./animations/ScrollReveal";

export default function AboutHeroSection() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLElement | null>(null);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [videoError, setVideoError] = useState(false);

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

  // Initial autoplay handling with muted guarantee & rejection safety
  useEffect(() => {
    const video = videoRef.current;
    if (!video || reducedMotion) return;

    // Guaranteed muted property before any play attempt
    video.muted = true;

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
    if (!video || !container || videoError) return;

    // Always keep muted
    video.muted = true;

    // IntersectionObserver to pause when scrolled out of view
    const observer = new IntersectionObserver(
      ([entry]) => {
        video.muted = true;
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

    // Visibility change handling (pause on background tab, resume when active)
    const handleVisibilityChange = () => {
      video.muted = true;
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
  }, [reducedMotion, videoError]);

  return (
    <section
      id="hero-section"
      ref={containerRef}
      aria-label="About GYM hero section"
      className="w-full relative isolate overflow-hidden min-h-[100svh] h-auto flex flex-col justify-end md:justify-center md:items-center bg-[#111111]"
    >
      {/* Background Video: Full width & height, position absolute inset-0 object-cover.
          Framed specifically for gym about.mp4:
          On mobile (<768px): object-[30%_center] keeps coach and athlete centered in tall viewports.
          On desktop (>=768px): md:object-[35%_center] preserves the training action across widescreen viewports. */}
      <video
        ref={videoRef}
        src="/videos/gym%20about.mp4"
        poster="/images/gym%20about.jpeg"
        autoPlay={!reducedMotion}
        muted
        loop
        playsInline
        preload="auto"
        onError={() => setVideoError(true)}
        className="absolute inset-0 w-full h-full object-cover object-[30%_center] md:object-[35%_center] pointer-events-none select-none z-0"
      />

      {/* Subtle Top Gradient for Mobile Navbar Readability (<768px) */}
      <div
        className="md:hidden absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-black/60 via-black/20 to-transparent pointer-events-none z-[1]"
        aria-hidden="true"
      />

      {/* Smooth Bottom Gradient for Mobile Readability: Light, breathable, non-dominant */}
      <div
        className="md:hidden absolute bottom-0 inset-x-0 h-[58%] min-h-[320px] bg-gradient-to-t from-black/85 via-black/40 via-45% to-transparent pointer-events-none z-[1]"
        aria-hidden="true"
      />

      {/* Desktop Directional Gradient: Gentle scrim on the left, open on the right */}
      <div
        className="hidden md:block absolute inset-0 z-[1] pointer-events-none md:bg-gradient-to-r md:from-black/70 md:via-black/35 md:via-50% md:to-transparent"
        aria-hidden="true"
      />

      {/* Content Area: Minimal, spacious, and breathable */}
      <div className="relative z-[2] w-full px-6 pt-24 pb-[calc(2rem+env(safe-area-inset-bottom,0px))] md:pt-20 md:pb-20 md:px-12 md:max-w-container md:mx-auto flex flex-col justify-end md:justify-center items-start">
        <div className="max-w-[700px] w-full text-left">
          {/* Eyebrow: Minimal brand category */}
          <ScrollReveal direction="down">
            <div className="flex items-center gap-2 mb-3 sm:mb-3.5">
              <span className="w-4 h-[2px] bg-accent rounded-full" />
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-white/85 drop-shadow-sm">
                Our Philosophy
              </span>
            </div>
          </ScrollReveal>

          {/* Headline: Clean, balanced typography with natural flow */}
          <ScrollReveal direction="up" delay={0.05}>
            <h1 className="text-[29px] sm:text-[38px] md:text-[46px] lg:text-[52px] font-semibold text-[#FAF7F0] leading-[1.12] tracking-[-0.03em] drop-shadow-md md:text-white">
              Built for real life.<br className="hidden sm:inline" />{" "}
              <span className="text-[#FAF7F0]/90 sm:inline-block">Designed for who you are.</span>
            </h1>
          </ScrollReveal>

          {/* Description: Streamlined, minimal, and punchy */}
          <ScrollReveal direction="up" delay={0.12}>
            <p className="mt-3 md:mt-4 text-[15px] sm:text-[16px] md:text-[17px] text-[#FAF7F0]/85 leading-[1.55] drop-shadow-sm md:text-white/85 max-w-[44ch]">
              Stripping away intimidation and performative noise. Here, everyone begins from somewhere real.
            </p>
          </ScrollReveal>

          {/* Actions: Clean and understated */}
          <ScrollReveal direction="up" delay={0.18}>
            <div className="mt-5 md:mt-8 flex flex-col sm:flex-row sm:items-center gap-3 md:gap-4">
              {/* Primary CTA Button */}
              <Button
                href="/contact-us"
                variant="primary"
                size="md"
                className="w-full sm:w-auto min-h-[44px] shadow-md shadow-black/20 text-center justify-center text-sm font-semibold"
              >
                Visit the Space
              </Button>

              {/* Secondary Outlined Button on Desktop */}
              <Button
                href="/training"
                variant="outline-white"
                size="md"
                className="hidden sm:inline-flex min-h-[44px] text-sm"
              >
                Explore Training
              </Button>

              {/* Mobile Secondary Link */}
              <div className="sm:hidden flex items-center pt-0.5">
                <Link
                  href="/training"
                  className="inline-flex items-center gap-1 py-1.5 text-[14px] font-medium text-white/90 hover:text-white underline underline-offset-4 decoration-white/40 hover:decoration-white transition-colors"
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
