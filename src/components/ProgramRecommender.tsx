"use client";

import React, { useState } from "react";
import Link from "next/link";

interface RecommenderOption {
  id: string;
  question: string;
  icon: string;
  title: string;
  description: string;
  recommendedTag: string;
  actionHref: string;
}

const options: RecommenderOption[] = [
  {
    id: "rec-pt",
    question: "I haven't trained in months/years and want patient, careful guidance",
    icon: "nature",
    title: "Personal Training or Foundational Strength",
    recommendedTag: "1-on-1 Focus or 4:1 Cohort",
    description:
      "A private intake assessment or our ultra-small 4:1 strength cohort gives you the individual attention to calibrate loads safely without any intimidation or rushed expectations.",
    actionHref: "/contact-us",
  },
  {
    id: "rec-func",
    question: "I want more energy for daily tasks, stairs, and weekend outdoor hobbies",
    icon: "directions_walk",
    title: "Functional Fitness & Movement Quality",
    recommendedTag: "Rotational Core & Joint Stability",
    description:
      "Targeting multi-planar strength, loaded carries, and spinal decompression so you move through real life with effortless posture, resilience, and stamina.",
    actionHref: "/contact-us",
  },
  {
    id: "rec-cond",
    question: "I want to build stamina and heart health without aching joints",
    icon: "favorite",
    title: "Conditioning & Autonomic Capacity",
    recommendedTag: "Zone 2 Low-Impact Engine",
    description:
      "Sustainable cardiovascular building using non-impact SkiErgs, magnetic rowers, low-friction sleds, and nasal breathing protocols for cardiovascular longevity.",
    actionHref: "/contact-us",
  },
];

export default function ProgramRecommender() {
  const [activeId, setActiveId] = useState<string | null>("rec-pt");

  const toggleOption = (id: string) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="w-full flex flex-col gap-space-sm text-left">
      {options.map((opt) => {
        const isOpen = activeId === opt.id;
        return (
          <div
            key={opt.id}
            className={`border rounded-xl transition-all duration-300 overflow-hidden ${
              isOpen
                ? "border-burnt-orange/50 shadow-md bg-ivory"
                : "border-sand-border bg-ivory/80 hover:border-sand-border hover:bg-ivory shadow-sm"
            }`}
          >
            <button
              onClick={() => toggleOption(opt.id)}
              type="button"
              className="w-full p-space-md flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm text-left cursor-pointer transition-colors"
              aria-expanded={isOpen}
            >
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-burnt-orange text-[22px]">
                  {opt.icon}
                </span>
                <span className="font-body-md text-body-md text-deep-olive font-medium">
                  &ldquo;{opt.question}&rdquo;
                </span>
              </div>
              <div className="flex items-center gap-2 text-burnt-orange font-label-md text-label-md shrink-0">
                <span className="uppercase tracking-wider font-semibold">
                  {isOpen ? "Close Match" : "View Match"}
                </span>
                <span
                  className={`material-symbols-outlined text-[18px] transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                >
                  expand_more
                </span>
              </div>
            </button>

            {isOpen && (
              <div className="px-space-md pb-space-md pt-space-xs border-t border-sand-border/60 bg-sand/30 animate-in fade-in duration-200">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-deep-olive text-[20px]">
                      recommend
                    </span>
                    <h4 className="font-headline-sm text-headline-sm uppercase text-deep-olive">
                      Recommended: {opt.title}
                    </h4>
                  </div>
                  <span className="font-label-sm text-label-sm uppercase px-2.5 py-0.5 rounded bg-sand border border-sand-border text-deep-olive font-bold self-start sm:self-auto">
                    {opt.recommendedTag}
                  </span>
                </div>
                <p className="font-body-md text-body-md text-muted-olive leading-relaxed">
                  {opt.description}
                </p>
                <div className="mt-space-md pt-space-sm border-t border-sand-border/60 flex items-center justify-between">
                  <span className="font-label-sm text-label-sm uppercase text-light-olive tracking-wider">
                    Zero Obligation • Coach-Led Intake
                  </span>
                  <Link
                    href={opt.actionHref}
                    className="inline-flex items-center gap-1.5 text-burnt-orange hover:text-burnt-orange-hover font-label-md text-label-md uppercase tracking-wider font-bold transition-colors"
                  >
                    <span>Discuss This Pathway</span>
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
