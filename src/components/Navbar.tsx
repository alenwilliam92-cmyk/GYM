"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "./Button";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement | null>(null);
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);

  const navLinks = [
    { name: "About Us", href: "/about-us" },
    { name: "Transformation", href: "/transformation" },
    { name: "Training", href: "/training" },
    { name: "Contact Us", href: "/contact-us" },
  ];

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Handle Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileOpen) {
        setMobileOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    if (mobileOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href: string) => {
    if (href === "/" && pathname === "/") return true;
    if (href !== "/" && pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 left-0 w-full z-50 bg-page/90 backdrop-blur-md border-b border-divider transition-colors">
      <div className="max-w-container mx-auto px-5 sm:px-6 md:px-12 h-20 flex items-center justify-between">
        {/* Brand: Plain text GYM linking to homepage */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight text-main hover:text-accent transition-colors select-none focus-visible:outline-2 focus-visible:outline-accent"
        >
          GYM
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`text-sm font-semibold tracking-normal transition-colors py-1 relative ${
                  active
                    ? "text-accent font-bold"
                    : "text-secondary hover:text-main"
                }`}
              >
                {link.name}
                {active && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-accent rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Primary CTA */}
        <div className="hidden md:flex items-center">
          <Button href="/contact-us" variant="primary" size="md">
            Start Your Journey
          </Button>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          ref={menuButtonRef}
          type="button"
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex items-center justify-center w-11 h-11 min-w-[44px] min-h-[44px] text-main hover:text-accent focus-visible:outline-2 focus-visible:outline-accent rounded-lg transition-colors cursor-pointer"
        >
          {mobileOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="4" y1="8" x2="20" y2="8" />
              <line x1="4" y1="16" x2="20" y2="16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          id="mobile-navigation"
          ref={navRef}
          className="md:hidden fixed inset-x-0 top-20 bottom-0 bg-page/98 backdrop-blur-xl border-t border-divider p-6 flex flex-col justify-between overflow-y-auto animate-in fade-in duration-200"
        >
          <nav className="flex flex-col space-y-4 pt-2" aria-label="Mobile Navigation">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className={`text-xl font-semibold py-2 px-2 rounded-lg transition-colors ${
                pathname === "/" ? "text-accent font-bold" : "text-main hover:text-accent"
              }`}
            >
              Home
            </Link>
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`text-xl font-semibold py-2 px-2 rounded-lg transition-colors ${
                    active ? "text-accent font-bold" : "text-main hover:text-accent"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className="pt-8 pb-4 border-t border-divider flex flex-col gap-4">
            <Button
              href="/contact-us"
              variant="primary"
              size="lg"
              className="w-full text-center"
              onClick={() => setMobileOpen(false)}
            >
              Start Your Journey
            </Button>
            <p className="text-xs text-secondary text-center">
              A dedicated sanctuary for sustainable strength and lifelong vitality.
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
