"use client";

import React from "react";
import Button from "@/components/Button";
import SectionHeading from "@/components/SectionHeading";
import MediaSection from "@/components/MediaSection";
import ScrollReveal from "@/components/animations/ScrollReveal";

import AboutHeroSection from "@/components/AboutHeroSection";

export default function AboutUsPage() {
  const principles = [
    {
      num: "01",
      title: "Belonging over performance",
      description:
        "No mirrors for vanity, no aggressive playlists, and no ego-driven culture. We foster an environment where beginners and seasoned lifters alike feel completely respected and encouraged.",
    },
    {
      num: "02",
      title: "Thoughtful, individualized guidance",
      description:
        "Every human body carries unique joint mechanics, injuries, and lifestyle demands. We listen first, observing your baseline movement before ever prescribing load or intensity.",
    },
    {
      num: "03",
      title: "Consistency over intensity",
      description:
        "The best training regimen is the one you can happily return to for decades. We value joint longevity, autonomic recovery, and sustainable habits over temporary exhaustion.",
    },
    {
      num: "04",
      title: "Space designed for focus",
      description:
        "Clean timber flooring, natural daylight, and uncrowded training bays. When you step onto the floor, you have the room, quiet, and equipment you need to focus completely on yourself.",
    },
  ];

  return (
    <div className="flex flex-col w-full bg-page">
      {/* 1. HERO SECTION WITH BACKGROUND VIDEO */}
      <AboutHeroSection />

      {/* 2. CULTURE OF BELONGING */}
      <section className="w-full py-20 sm:py-24 lg:py-28 bg-page border-b border-divider">
        <div className="max-w-container mx-auto px-5 sm:px-6 md:px-12">
          <ScrollReveal direction="up">
            <MediaSection
              imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuDUup49l9fUjDoMAPfLKbLXvOe7q15geFXyp8gvdUudlg92zNDC_LLCn4hoOONuUdz6olUVvvy6O3v_Z78w8l49HINxwTAAn_xtffBYUaIaM_I4FEESuPnp9S07DnlcNN0d1cAozaKtnCREiP7g4qR77zQgkYEYBojrtTQmwLNSiB3EFcXjeW_QXjoHjzJCDjxC4KEnGIF1AidLZZqvLYag7l5SF5qIcOUeMR-m_jVkt3MTT9UjSrWpUA"
              alt="Two members quietly training in a sunlit corner of the gym"
              eyebrow="The Culture"
              title="A welcoming space that meets you where you are."
              description="You don’t need to be in shape before you walk through our doors. Whether you are finding your way back to exercise after years away or searching for deeper technical mastery, our coaches meet you with patience, warmth, and zero judgment."
            >
              <div className="pt-2">
                <Button href="/contact-us" variant="secondary">
                  Visit the Space
                </Button>
              </div>
            </MediaSection>
          </ScrollReveal>
        </div>
      </section>

      {/* 3. NUMBERED EDITORIAL VALUES */}
      <section className="w-full py-20 sm:py-24 lg:py-28 bg-sand border-b border-divider">
        <div className="max-w-container mx-auto px-5 sm:px-6 md:px-12">
          <ScrollReveal direction="up" className="mb-14 lg:mb-18 max-w-2xl">
            <SectionHeading
              eyebrow="Core Values"
              title="Principles that shape how we train."
              description="These four commitments govern every session, every cue, and every interaction on our floor."
            />
          </ScrollReveal>

          <div className="divide-y divide-divider border-y border-divider">
            {principles.map((p, idx) => (
              <ScrollReveal key={p.num} direction="up" delay={idx * 0.05}>
                <div className="py-8 sm:py-10 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start">
                  <div className="md:col-span-2 text-2xl font-bold text-accent">
                    {p.num}
                  </div>
                  <div className="md:col-span-4 text-xl sm:text-2xl font-semibold text-main">
                    {p.title}
                  </div>
                  <div className="md:col-span-6 text-base sm:text-lg text-secondary leading-[1.65]">
                    {p.description}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PHYSICAL SANCTUARY */}
      <section className="w-full py-20 sm:py-24 lg:py-28 bg-page border-b border-divider">
        <div className="max-w-container mx-auto px-5 sm:px-6 md:px-12">
          <ScrollReveal direction="up">
            <MediaSection
              reverse
              imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuDj9np1sqI8eqXcSSeoHUVA6oxs0Mv9zib5ybxENSXTci2eZB6TuGQ3V8hM5pmb9d4JoHfs2_UI4niVNiL30KmR5557SUfyF39tl84iQTLo9rvvkLUdY8TYYbbWRcN2roC6nI5xjmy5BMKM3BlfNZCUJUYemumya65IdC2MYW1tv5TC0mIpu52LHNNcwk_NNXXMXRsZpJmo16FF-vwVL0_JelJj-owG4J_PW2JKxyubZfq9spiF2EOiJQ"
              alt="Dedicated equipment bay with precision barbells and natural lighting"
              eyebrow="Sanctuary Architecture"
              title="Thoughtfully planned for unhurried movement."
              description="From natural ventilation and warm timber finishes to generous clearances between training stations, our facility is engineered to calm your nervous system. You will never fight for equipment or feel rushed through a workout."
            />
          </ScrollReveal>
        </div>
      </section>

      {/* 5. CLOSING CTA */}
      <section className="w-full py-20 sm:py-24 bg-sand">
        <div className="max-w-container mx-auto px-5 sm:px-6 md:px-12">
          <ScrollReveal direction="up">
            <div className="max-w-2xl mx-auto text-center flex flex-col items-center">
              <h2 className="text-3xl sm:text-5xl font-semibold text-main tracking-[-0.03em] leading-tight">
                Come see the space for yourself.
              </h2>
              <p className="mt-4 text-base sm:text-lg text-secondary leading-relaxed">
                You’re welcome to drop by for a tour, ask questions, or have an unhurried cup of coffee with a coach. No commitment required.
              </p>
              <div className="mt-8">
                <Button href="/contact-us" variant="primary" size="lg">
                  Start Your Journey
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
