"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";

export default function WelcomeSection() {
  const shouldReduceMotion = useReducedMotion();

  // Video playback and accessibility state
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [videoError, setVideoError] = useState<string | null>(null);

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;

    setVideoError(null);
    setHasStarted(true);

    if (!video.paused && !video.ended) {
      video.pause();
    } else {
      if (video.ended) {
        video.currentTime = 0;
      }
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((err: Error) => {
          if (err.name !== "AbortError") {
            setVideoError("Unable to play video. Please try again.");
          }
          setIsPlaying(false);
        });
      }
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    const nextMuted = !videoRef.current.muted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

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
            {/* Eyebrow badge */}
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-5 h-[2px] bg-accent rounded-full" />
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-accent">
                Your Space to Grow
              </span>
            </div>

            {/* Deliberate Two-Line Headline */}
            <h2 className="text-[34px] sm:text-[40px] md:text-[46px] lg:text-[52px] xl:text-[56px] font-semibold text-main leading-[1.12] tracking-[-0.03em]">
              A place where<br className="hidden sm:inline" />{" "}
              <span className="text-accent">you belong.</span>
            </h2>

            {/* Supporting Paragraph (max ~44ch, 17-18px, 1.65 line-height) */}
            <p className="mt-5 text-[17px] sm:text-[18px] text-secondary leading-[1.7] max-w-[44ch]">
              Your first day can feel unfamiliar. A little encouragement makes all the difference. Find your rhythm, build confidence, and feel at home here.
            </p>

            {/* Three Compact Editorial Rows with Generous Breathing Room */}
            <div className="mt-10 sm:mt-11 border-t border-divider">
              {editorialBenefits.map((benefit) => (
                <div
                  key={benefit.num}
                  className="group py-5 sm:py-6 border-b border-divider flex items-start gap-4.5 sm:gap-5 transition-all duration-200 hover:pl-2"
                >
                  <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-sand/80 border border-divider flex items-center justify-center text-xs sm:text-[13px] font-mono font-bold text-accent shrink-0 mt-0.5 group-hover:bg-accent group-hover:text-white group-hover:border-accent group-hover:scale-105 transition-all duration-200 shadow-2xs select-none">
                    {benefit.num}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-[17px] sm:text-[18px] font-semibold text-main group-hover:text-accent transition-colors duration-200 leading-snug">
                      {benefit.title}
                    </h3>
                    <p className="mt-1.5 sm:mt-2 text-[15px] sm:text-[16px] text-secondary leading-[1.65]">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Editorial Action Row */}
            <div className="mt-10 sm:mt-12 flex flex-wrap items-center gap-4">
              <Link
                href="/about-us"
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-main text-page font-semibold text-sm sm:text-[15px] hover:bg-accent active:scale-[0.98] transition-all duration-200 shadow-sm focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
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

              <Link
                href="/training"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-full text-sm sm:text-[15px] font-semibold text-main hover:text-accent border border-divider hover:border-accent/40 hover:bg-sand/40 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
              >
                <span>Explore Training</span>
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
              {/* Main Media Container (stable 4:5 aspect ratio, 12px rounded corners) */}
              <div className="relative w-full aspect-[4/5] overflow-hidden rounded-[12px] bg-[#EDE5D8] border border-[#D8D3C8]/70 shadow-sm">
                {/* Initial Poster Image: Stays visible until video is ready */}
                <img
                  src="/images/gym%20about.jpeg"
                  alt="A coach guiding an athlete through dumbbell press"
                  className={`absolute inset-0 w-full h-full object-cover object-[30%_center] transition-opacity duration-300 ${
                    hasStarted && isVideoReady ? "opacity-0 pointer-events-none" : "opacity-100"
                  }`}
                  loading="eager"
                  width={560}
                  height={700}
                />

                {/* Large Video: Plays inside the main image area */}
                <video
                  ref={videoRef}
                  id="welcome-about-video"
                  src="/videos/gym%20about.mp4"
                  poster="/images/gym%20about.jpeg"
                  preload="none"
                  playsInline
                  muted={isMuted}
                  onPlay={() => {
                    setIsPlaying(true);
                    setVideoError(null);
                  }}
                  onPause={() => setIsPlaying(false)}
                  onEnded={() => setIsPlaying(false)}
                  onLoadedData={() => setIsVideoReady(true)}
                  onPlaying={() => {
                    setIsVideoReady(true);
                    setIsPlaying(true);
                  }}
                  onError={() => {
                    setVideoError("Unable to load video. Please try again.");
                    setIsPlaying(false);
                  }}
                  className={`absolute inset-0 w-full h-full object-cover object-[30%_center] transition-opacity duration-300 ${
                    hasStarted && isVideoReady ? "opacity-100" : "opacity-0 pointer-events-none"
                  }`}
                />

                {/* Accessible Mute/Unmute control in large video area while active */}
                {hasStarted && isVideoReady && (
                  <button
                    type="button"
                    onClick={toggleMute}
                    aria-controls="welcome-about-video"
                    aria-label={isMuted ? "Unmute gym about video" : "Mute gym about video"}
                    className="absolute bottom-3.5 right-3.5 sm:bottom-4 sm:right-4 z-20 w-11 h-11 min-w-[44px] min-h-[44px] rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-md border border-white/30 flex items-center justify-center transition-colors shadow-md focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2 cursor-pointer"
                  >
                    {isMuted ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                        <line x1="23" y1="9" x2="17" y2="15" />
                        <line x1="17" y1="9" x2="23" y2="15" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
                      </svg>
                    )}
                  </button>
                )}

                {/* Readable Error Banner */}
                {videoError && (
                  <div
                    role="alert"
                    className="absolute top-4 inset-x-4 z-20 mx-auto max-w-xs sm:max-w-sm rounded-lg bg-black/85 text-white text-xs sm:text-sm px-3.5 py-2.5 backdrop-blur-md border border-white/20 shadow-md text-center"
                  >
                    {videoError}
                  </div>
                )}
              </div>

              {/* Smaller Landscape Gym-Interior Photo Inset
                  38-42% width, overlapping lower-left edge, thin ivory frame, 8px rounded corners, subtle shadow */}
              <div className="max-sm:absolute max-sm:bottom-3 max-sm:left-3 max-sm:w-[42%] sm:absolute sm:-bottom-6 sm:-left-6 lg:-bottom-8 lg:-left-8 sm:w-[40%] z-10">
                <div
                  onClick={(e) => {
                    if ((e.target as HTMLElement).closest("button")) return;
                    togglePlayback();
                  }}
                  className="relative overflow-hidden rounded-[8px] p-1 sm:p-1.5 bg-[#FAF7F0] border border-[#D8D3C8] shadow-md shadow-black/8 group cursor-pointer"
                >
                  <img
                    src="/images/gym%20about.jpeg"
                    alt="Personal training session preview thumbnail"
                    className="w-full aspect-[4/3] sm:aspect-[16/10] object-cover rounded-[5px] block transition-transform duration-300 group-hover:scale-[1.02]"
                    loading="lazy"
                    width={320}
                    height={200}
                  />

                  {/* Circular Play/Pause Control Centered on Thumbnail */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <button
                      type="button"
                      aria-controls="welcome-about-video"
                      aria-label={isPlaying ? "Pause gym about video" : "Play gym about video"}
                      onClick={togglePlayback}
                      className="pointer-events-auto w-12 h-12 min-w-[48px] min-h-[48px] rounded-full bg-black/60 hover:bg-black/80 active:bg-black/90 text-white backdrop-blur-sm border border-white/40 shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 focus-visible:outline-2 focus-visible:outline-[#B9472B] focus-visible:outline-offset-2 cursor-pointer"
                    >
                      {isPlaying ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <rect x="6" y="4" width="4" height="16" rx="1" />
                          <rect x="14" y="4" width="4" height="16" rx="1" />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="translate-x-0.5"
                          aria-hidden="true"
                        >
                          <polygon points="5 3 19 12 5 21 5 3" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
