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
  const [isPlaying, setIsPlaying] = useState(false);
  const [userPaused, setUserPaused] = useState(false);
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
          setIsPlaying(false);
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
        if (!userPaused) {
          if (entry.isIntersecting) {
            videoEl.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
          } else {
            videoEl.pause();
            setIsPlaying(false);
          }
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(containerEl);

    // Tab visibility handling
    const handleVisibilityChange = () => {
      if (document.hidden) {
        videoEl.pause();
        setIsPlaying(false);
      } else if (!userPaused) {
        videoEl.play().then(() => setIsPlaying(true)).catch(() => {});
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [videoSrc, userPaused, hasReducedMotion, videoError]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
      setUserPaused(true);
    } else {
      video.play().then(() => {
        setIsPlaying(true);
        setUserPaused(false);
      }).catch(() => {});
    }
  };

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

      {/* Accessible play/pause control when video is active */}
      {hasActiveVideo && (
        <button
          type="button"
          onClick={togglePlay}
          aria-label={isPlaying ? "Pause background video" : "Play background video"}
          className="absolute bottom-4 right-4 z-20 w-11 h-11 min-w-[44px] min-h-[44px] rounded-full bg-page/90 backdrop-blur-md text-main border border-divider flex items-center justify-center hover:bg-page transition-colors shadow-sm focus-visible:outline-2 focus-visible:outline-accent"
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
            >
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
          )}
        </button>
      )}
    </div>
  );
}
