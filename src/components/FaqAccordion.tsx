"use client";

import React, { useState } from "react";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  className?: string;
}

export default function FAQAccordion({ items, className = "" }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`divide-y divide-divider border-y border-divider ${className}`}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const headingId = `faq-heading-${index}`;
        const panelId = `faq-panel-${index}`;

        return (
          <div key={index} className="py-5 sm:py-6">
            <h3>
              <button
                type="button"
                id={headingId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggleItem(index)}
                className="w-full flex items-center justify-between text-left gap-4 group focus-visible:outline-2 focus-visible:outline-accent rounded-sm py-1 cursor-pointer"
              >
                <span className="text-lg sm:text-xl font-semibold text-main group-hover:text-accent transition-colors">
                  {item.question}
                </span>
                <span
                  className={`w-8 h-8 rounded-full border border-divider flex items-center justify-center text-main shrink-0 transition-transform duration-200 ${
                    isOpen ? "rotate-45 bg-sand" : "group-hover:bg-sand/40"
                  }`}
                  aria-hidden="true"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={headingId}
              hidden={!isOpen}
              className={`pt-3 sm:pt-4 text-base text-secondary leading-[1.65] max-w-[65ch] ${
                isOpen ? "block animate-in fade-in duration-200" : "hidden"
              }`}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
