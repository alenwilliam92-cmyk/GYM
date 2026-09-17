"use client";

import React from "react";

interface MediaSectionProps {
  imageSrc: string;
  alt: string;
  eyebrow?: string;
  title: string;
  description: string;
  reverse?: boolean;
  children?: React.ReactNode;
  className?: string;
}

export default function MediaSection({
  imageSrc,
  alt,
  eyebrow,
  title,
  description,
  reverse = false,
  children,
  className = "",
}: MediaSectionProps) {
  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center ${className}`}
    >
      {/* Media Column (55% or 7 cols) */}
      <div
        className={`lg:col-span-7 relative ${
          reverse ? "lg:order-2" : "lg:order-1"
        }`}
      >
        <div className="relative overflow-hidden rounded-2xl bg-sand border border-divider shadow-sm group">
          <img
            src={imageSrc}
            alt={alt}
            className="w-full h-[380px] sm:h-[460px] lg:h-[520px] object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            loading="lazy"
          />
        </div>
      </div>

      {/* Copy Column (45% or 5 cols) */}
      <div
        className={`lg:col-span-5 flex flex-col items-start ${
          reverse ? "lg:order-1" : "lg:order-2"
        }`}
      >
        {eyebrow && (
          <span className="text-xs font-semibold uppercase tracking-[0.12em] text-secondary mb-3">
            {eyebrow}
          </span>
        )}
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-main leading-[1.18] tracking-[-0.03em]">
          {title}
        </h3>
        <p className="mt-4 text-base sm:text-lg text-secondary leading-[1.65] max-w-[55ch]">
          {description}
        </p>

        {children && <div className="mt-6 w-full">{children}</div>}
      </div>
    </div>
  );
}
