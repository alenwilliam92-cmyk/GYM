"use client";

import React, { useRef, useState, useEffect } from "react";

interface HeroVideoProps {
  videoSrc?: string;
  posterSrc: string;
  alt: string;
  className?: string;
  aspectClassName?: string;
  overlay?: boolean;
  children?: React.ReactNode;
}

export default function HeroVideo({
  videoSrc,
  posterSrc,
  alt,
  className = "",
  aspectClassName = "aspect-[16/9] md:aspect-[21/9]",
  overlay = true,
  children,
}: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [hasReducedMotion, setHasReducedMotion] = useState(false);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      setHasReducedMotion(mediaQuery.matches);

      const handleChange = (e: MediaQueryListEvent) => {
        setHasReducedMotion(e.matches);
        if (e.matches && videoRef.current) {
          videoRef.current.pause();
        }
      };

      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }
  }, []);

  // IntersectionObserver to pause when offscreen
  useEffect(() => {
    if (!videoSrc || hasReducedMotion || videoError) return;

    const videoEl = videoRef.current;
    const containerEl = containerRef.current;
    if (!videoEl || !containerEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoEl.play().catch(() => {});
        } else {
          videoEl.pause();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(containerEl);

    // Tab visibility handling
    const handleVisibilityChange = () => {
      if (document.hidden) {
        videoEl.pause();
      } else {
        videoEl.play().catch(() => {});
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [videoSrc, hasReducedMotion, videoError]);

  const hasActiveVideo = videoSrc && !hasReducedMotion && !videoError;

  return (
    <div
      ref={containerRef}
      className={`relative w-full overflow-hidden rounded-2xl bg-sand ${aspectClassName} ${className}`}
    >
      {hasActiveVideo ? (
        <video
          ref={videoRef}
          src={videoSrc}
          poster={posterSrc}
          muted
          loop
          playsInline
          onError={() => setVideoError(true)}
          className="w-full h-full object-cover"
        />
      ) : (
        <img
          src={posterSrc}
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-700"
          loading="eager"
        />
      )}

      {/* Subtle overlay for text contrast if children are provided */}
      {overlay && children && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent pointer-events-none" />
      )}

      {/* Embedded HTML content */}
      {children && (
        <div className="absolute inset-0 z-10 flex flex-col justify-end p-6 sm:p-10 lg:p-14">
          {children}
        </div>
      )}
    </div>
  );
}
