"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
  el?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
  delay?: number;
  highlightWords?: string[];
  highlightClassName?: string;
  staggerDelay?: number;
}

export default function AnimatedText({
  text,
  className = "",
  el: Tag = "h1",
  delay = 0,
  highlightWords = [],
  highlightClassName = "text-accent",
  staggerDelay = 0.03,
}: AnimatedTextProps) {
  const words = text.split(" ");

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  };

  const wordVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 14,
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

  const isHighlighted = (word: string) => {
    const cleanWord = word.replace(/[^a-zA-Z0-9’']/g, "").toLowerCase();
    return highlightWords.some(
      (hw) => hw.toLowerCase() === cleanWord || word.toLowerCase().includes(hw.toLowerCase())
    );
  };

  return (
    <Tag className={className}>
      <motion.span
        className="inline-flex flex-wrap gap-x-[0.25em] leading-[1.12]"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-30px" }}
      >
        {words.map((word, index) => {
          const highlighted = isHighlighted(word);
          return (
            <span key={index} className="inline-block overflow-hidden py-0.5">
              <motion.span
                variants={wordVariants}
                className={`inline-block ${highlighted ? highlightClassName : ""}`}
              >
                {word}
              </motion.span>
            </span>
          );
        })}
      </motion.span>
    </Tag>
  );
}
