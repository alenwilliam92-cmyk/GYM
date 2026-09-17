"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Button from "./Button";
import ScrollReveal from "./animations/ScrollReveal";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [userPaused, setUserPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  // Check and respond to reduced-motion preferences
  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      setReducedMotion(true);
      setIsPlaying(false);
      if (videoRef.current) {
        videoRef.current.pause();
      }
    }

    const handleChange = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
      if (e.matches) {
        videoRef.current?.pause();
        setIsPlaying(false);
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
      playPromise
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          // Autoplay policy prevented playback; remains paused gracefully
          setIsPlaying(false);
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
        if (!userPaused && !reducedMotion) {
          if (entry.isIntersecting) {
            video.play().then(() => setIsPlaying(true)).catch(() => {});
          } else {
            video.pause();
            setIsPlaying(false);
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
        setIsPlaying(false);
      } else if (!userPaused && !reducedMotion) {
        video.play().then(() => setIsPlaying(true)).catch(() => {});
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [userPaused, reducedMotion]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
      setUserPaused(true);
    } else {
      setUserPaused(false);
      video
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {});
    }
  };

  return (
    <section
      id="hero-section"
      ref={containerRef}
      aria-label="Welcome hero section"
      className="relative isolate overflow-hidden w-full min-h-[100svh] flex flex-col justify-end md:justify-center bg-[#111111]"
    >
      {/* Video Background Layer (z-index 0)
          On mobile (<768px): object-[35%_25%] frames the active athlete's face and workout.
          On desktop (>=768px): object-[center_35%] frames both athletes across wide screens. */}
      <video
        ref={videoRef}
        src="/videos/herosection.mp4"
        poster="/videos/herosection-poster.jpg"
        autoPlay={!reducedMotion}
        muted
        loop
        playsInline
        preload="auto"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        className="absolute inset-0 w-full h-full object-cover object-[35%_25%] md:object-[center_35%] z-0 pointer-events-none select-none"
      />

      {/* Non-interactive Gradient Overlay (z-index 1)
          On mobile: bottom-weighted gradient preserving 50-55% clear footage at upper/middle,
          darkening smoothly behind bottom copy.
          On desktop: left-to-right gradient tailored for the left text layout. */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none bg-[linear-gradient(to_bottom,rgba(0,0,0,0.45)_0%,rgba(0,0,0,0.05)_22%,rgba(0,0,0,0.1)_48%,rgba(0,0,0,0.72)_72%,rgba(0,0,0,0.92)_100%)] md:bg-none md:bg-gradient-to-r md:from-black/65 md:via-black/40 md:to-black/15"
        aria-hidden="true"
      />

      {/* Foreground Content Layer (z-index 2)
          On mobile: mt-auto positions content at the bottom ~45%, keeping the top 55% open.
          On desktop: centered vertical layout with generous breathing room. */}
      <div className="relative z-[2] max-w-container mx-auto px-5 sm:px-6 md:px-12 w-full flex flex-col justify-end min-h-[100svh] pt-24 pb-[max(1.5rem,env(safe-area-inset-bottom))] md:py-24 md:justify-center">
        <div className="mt-auto md:mt-0 max-w-[680px] w-full">
          {/* Eyebrow: Hidden on mobile, visible on desktop */}
          <ScrollReveal direction="down">
            <span className="hidden md:block text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] text-white/90 mb-4 drop-shadow-sm">
              PRECISION ATHLETIC CONDITIONING &amp; WELLNESS
            </span>
          </ScrollReveal>

          {/* Semantic H1: Responsive text spans for mobile vs desktop */}
          <ScrollReveal direction="up" delay={0.05}>
            <h1 className="text-[30px] sm:text-[34px] md:text-6xl lg:text-[68px] font-semibold text-white leading-[1.08] tracking-[-0.03em] drop-shadow-md">
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
            <p className="mt-2.5 sm:mt-3 md:mt-6 text-[15px] sm:text-[16px] md:text-lg lg:text-xl leading-[1.5] md:leading-[1.6] text-white/90 drop-shadow-sm max-w-[55ch]">
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
            <div className="mt-5 sm:mt-6 md:mt-10 flex flex-col md:flex-row md:items-center gap-3 md:gap-4">
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

              {/* Mobile Secondary Row: Compact text link & Play/Pause control (below 768px) */}
              <div className="md:hidden flex items-center justify-between pt-0.5">
                <Link
                  href="/training"
                  className="inline-flex items-center gap-1.5 py-2 px-1 text-[15px] font-semibold text-white/95 hover:text-white underline underline-offset-4 decoration-white/60 hover:decoration-white focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-4 min-h-[44px] transition-colors"
                >
                  <span>Explore Training</span>
                  <span aria-hidden="true">→</span>
                </Link>

                {/* Mobile Play/Pause Control (44px touch target) */}
                <button
                  type="button"
                  onClick={togglePlay}
                  aria-label={isPlaying ? "Pause background video" : "Play background video"}
                  className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-md border border-white/25 flex items-center justify-center transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2 shrink-0"
                >
                  {isPlaying ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <rect x="6" y="4" width="4" height="16" />
                      <rect x="14" y="4" width="4" height="16" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ml-0.5"
                      aria-hidden="true"
                    >
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Desktop Playback Control (768px and above) */}
      <button
        type="button"
        onClick={togglePlay}
        aria-label={isPlaying ? "Pause background video" : "Play background video"}
        className="hidden md:flex absolute bottom-8 right-8 z-[2] w-11 h-11 min-w-[44px] min-h-[44px] rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-md border border-white/30 items-center justify-center transition-colors cursor-pointer shadow-md focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
      >
        {isPlaying ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <rect x="6" y="4" width="4" height="16" />
            <rect x="14" y="4" width="4" height="16" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="ml-0.5"
            aria-hidden="true"
          >
            <polygon points="5 3 19 12 5 21 5 3" />
          </svg>
        )}
      </button>
    </section>
  );
}
