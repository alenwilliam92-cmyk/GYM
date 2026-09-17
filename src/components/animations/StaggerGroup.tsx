"use client";

import React from "react";
import { motion } from "framer-motion";

interface StaggerGroupProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  delay?: number;
}

export function StaggerGroup({
  children,
  className = "",
  staggerDelay = 0.08,
  delay = 0,
}: StaggerGroupProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-30px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: delay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = "",
  hoverLift = false,
}: {
  children: React.ReactNode;
  className?: string;
  hoverLift?: boolean;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 14 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.45,
            ease: "easeOut",
          },
        },
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
    >
      {children}
    </motion.div>
  );
}
