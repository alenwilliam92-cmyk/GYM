"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface ScrollRevealProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right" | "fade";
  delay?: number;
  duration?: number;
  className?: string;
  hoverLift?: boolean;
}

export default function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.45,
  className = "",
  hoverLift = false,
  ...props
}: ScrollRevealProps) {
  const getInitialPosition = () => {
    switch (direction) {
      case "up":
        return { opacity: 0, y: 16 };
      case "down":
        return { opacity: 0, y: -16 };
      case "left":
        return { opacity: 0, x: 16 };
      case "right":
        return { opacity: 0, x: -16 };
      case "fade":
      default:
        return { opacity: 0 };
    }
  };

  const getTargetPosition = () => {
    switch (direction) {
      case "up":
      case "down":
        return { opacity: 1, y: 0 };
      case "left":
      case "right":
        return { opacity: 1, x: 0 };
      case "fade":
      default:
        return { opacity: 1 };
    }
  };

  return (
    <motion.div
      initial={getInitialPosition()}
      whileInView={getTargetPosition()}
      viewport={{ once: true, margin: "-20px" }}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
      whileHover={
        hoverLift
          ? {
              y: -4,
              transition: { duration: 0.18, ease: "easeOut" },
            }
          : undefined
      }
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
