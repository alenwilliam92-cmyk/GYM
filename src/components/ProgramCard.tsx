import React from "react";
import Link from "next/link";

interface ProgramCardProps {
  title: string;
  category: string;
  description: string;
  imageSrc: string;
  href?: string;
  benefits?: string[];
  ctaText?: string;
  className?: string;
}

export default function ProgramCard({
  title,
  category,
  description,
  imageSrc,
  href = "/training",
  benefits,
  ctaText = "Learn More",
  className = "",
}: ProgramCardProps) {
  return (
    <div
      className={`group flex flex-col bg-surface rounded-2xl overflow-hidden border border-divider shadow-sm transition-all duration-300 hover:shadow-md ${className}`}
    >
      {/* Image container */}
      <div className="relative overflow-hidden aspect-[16/10] bg-sand">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.025]"
          loading="lazy"
        />
        <div className="absolute top-4 left-4 bg-page/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-[0.1em] text-secondary border border-divider">
          {category}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between">
        <div>
          <h3 className="text-xl sm:text-2xl font-semibold text-main tracking-[-0.02em] leading-snug">
            {title}
          </h3>
          <p className="mt-3 text-sm sm:text-base text-secondary leading-[1.65]">
            {description}
          </p>

          {benefits && benefits.length > 0 && (
            <ul className="mt-5 space-y-2 pt-4 border-t border-divider/60">
              {benefits.map((benefit, i) => (
                <li key={i} className="flex items-start text-xs sm:text-sm text-secondary">
                  <span className="text-accent mr-2 font-bold select-none">•</span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="mt-6 pt-4">
          <Link
            href={href}
            className="inline-flex items-center text-sm font-semibold text-accent hover:text-accent-hover transition-colors group/link"
          >
            <span>{ctaText}</span>
            <svg
              className="ml-1.5 w-4 h-4 transition-transform duration-180 group-hover/link:translate-x-1"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
