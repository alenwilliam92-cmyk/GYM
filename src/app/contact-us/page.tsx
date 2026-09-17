"use client";

import React from "react";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import FAQAccordion, { FAQItem } from "@/components/FaqAccordion";
import ScrollReveal from "@/components/animations/ScrollReveal";

export default function ContactUsPage() {
  const contactFaqs: FAQItem[] = [
    {
      question: "Do I need to be fit before reaching out or visiting?",
      answer:
        "Not at all. The majority of our members begin after long breaks from physical activity or with zero previous gym experience. Our coaches are here to help you start comfortably wherever you are.",
    },
    {
      question: "What happens after I send a message?",
      answer:
        "One of our coaches will personally review your note and get in touch via your preferred contact method to answer your questions and, if you wish, arrange an unhurried visit to the space.",
    },
    {
      question: "Can I tour the facility before making any decisions?",
      answer:
        "Yes, absolutely. You are welcome to drop by, view the training bays, feel the daylight and atmosphere, and ask any questions over a warm cup of coffee or herbal tea.",
    },
    {
      question: "Is there any sales pressure during a visit?",
      answer:
        "Zero. We strictly avoid high-pressure sales scripts, countdown timers, or same-day commitment tactics. We believe training should be chosen thoughtfully on your own timeline.",
    },
  ];

  return (
    <div className="flex flex-col w-full bg-page">
      {/* 1. HERO SECTION */}
      <section className="w-full pt-12 sm:pt-16 lg:pt-20 pb-12 sm:pb-16 border-b border-divider">
        <div className="max-w-container mx-auto px-5 sm:px-6 md:px-12">
          <div className="max-w-3xl">
            <ScrollReveal direction="down">
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-secondary block mb-4">
                Get In Touch
              </span>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.05}>
              <h1 className="text-4xl sm:text-6xl lg:text-[68px] font-semibold text-main leading-[1.1] tracking-[-0.03em]">
                It starts with a hello.
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.12}>
              <p className="mt-6 text-lg sm:text-xl text-secondary leading-[1.65] max-w-[60ch]">
                Have a goal in mind? Feeling a little unsure? Tell us what’s on your mind. You don’t need a training plan, athletic background, or gym gear to start a conversation.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 2. CALM TWO-COLUMN LAYOUT: WELCOME COPY & IMAGE + FORM */}
      <section className="w-full py-16 sm:py-20 lg:py-24 bg-page border-b border-divider">
        <div className="max-w-container mx-auto px-5 sm:px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Welcoming Information & Supporting Image (5 cols) */}
            <div className="lg:col-span-5 flex flex-col space-y-8">
              <ScrollReveal direction="left">
                <div className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-semibold text-main tracking-[-0.02em]">
                    We’re ready when you are.
                  </h2>
                  <p className="text-base sm:text-lg text-secondary leading-relaxed">
                    Every member journey here begins with a warm welcome and an unhurried conversation. Whether you have questions about joint injuries, movement confidence, or our training floor, we’re glad to guide you.
                  </p>
                </div>
              </ScrollReveal>

              {/* Supporting Image */}
              <ScrollReveal direction="left" delay={0.1}>
                <div className="rounded-2xl overflow-hidden bg-sand border border-divider shadow-sm group">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuACOCmfxIWTEz9GUp8AVVQPOwSHXMxNtOqg5BBLyAWWGmGI677nFAkyLs_BGjSRmzRjWQnmfCo00qxUm24hoS5buZs6xq1etQ3jZtq7mhHbo4Y4xxIA06Kl1goFxKRmkiPRkGzs3v0LRMk3bEAQ3xItqPeGOO1Yhhd3JCPutm3bDK0LELkfbev0xYOExWstV2wB86AgGwsrmxnUWUNTjAj-Fm8aR42wNhYQEk4rRhTKG0VQ9J120_MBNA"
                    alt="Warm sunlit sanctuary lounge and tranquil timber studio"
                    className="w-full h-64 sm:h-80 object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                  <div className="p-5 bg-surface border-t border-divider">
                    <p className="text-sm font-semibold text-main">
                      Drop in for a walk-through
                    </p>
                    <p className="text-xs text-secondary mt-1">
                      Experience the natural light, quiet acoustic design, and calm training bays in person.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column: Accessible Form (7 cols) */}
            <div className="lg:col-span-7">
              <ScrollReveal direction="right">
                <ContactForm />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CONCISE ACCESSIBLE FAQ */}
      <section className="w-full py-20 sm:py-24 bg-sand border-b border-divider">
        <div className="max-w-3xl mx-auto px-5 sm:px-6 md:px-12">
          <ScrollReveal direction="up" className="text-center mb-12">
            <SectionHeading
              align="center"
              eyebrow="Common Inquiries"
              title="Frequently asked questions."
              description="Everything you need to know about reaching out or taking your first steps with us."
            />
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.1}>
            <FAQAccordion items={contactFaqs} />
          </ScrollReveal>
        </div>
      </section>

      {/* 4. CLOSING BANNER */}
      <section className="w-full py-20 sm:py-24 bg-page">
        <div className="max-w-container mx-auto px-5 sm:px-6 md:px-12">
          <ScrollReveal direction="up">
            <div className="max-w-2xl mx-auto text-center flex flex-col items-center">
              <h2 className="text-3xl sm:text-5xl font-semibold text-main tracking-[-0.03em] leading-tight">
                A place where you can be yourself.
              </h2>
              <p className="mt-4 text-base sm:text-lg text-secondary leading-relaxed">
                Come as you are. No judgment, no intimidation. We look forward to meeting you.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
