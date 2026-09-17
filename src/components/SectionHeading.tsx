import React from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  as?: "h1" | "h2" | "h3";
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  as: Tag = "h2",
  className = "",
  titleClassName = "",
  descriptionClassName = "",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center items-center mx-auto" : "text-left items-start";

  return (
    <div className={`flex flex-col ${alignClass} ${className}`}>
      {eyebrow && (
        <span className="text-xs font-semibold uppercase tracking-[0.12em] text-secondary mb-3">
          {eyebrow}
        </span>
      )}
      <Tag
        className={`text-3xl sm:text-4xl lg:text-[44px] font-semibold text-main leading-[1.15] tracking-[-0.03em] ${titleClassName}`}
      >
        {title}
      </Tag>
      {description && (
        <p
          className={`mt-4 text-base sm:text-lg text-secondary leading-[1.65] max-w-[65ch] ${descriptionClassName}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
