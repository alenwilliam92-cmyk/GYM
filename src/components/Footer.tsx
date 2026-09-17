import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-sand border-t border-divider text-main">
      <div className="max-w-container mx-auto px-5 sm:px-6 md:px-12 py-16 lg:py-20">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 lg:gap-16">
          {/* Brand & Purpose */}
          <div className="flex flex-col gap-3 max-w-md">
            <Link
              href="/"
              className="text-2xl font-bold tracking-tight text-main hover:text-accent transition-colors"
            >
              GYM
            </Link>
            <p className="text-sm sm:text-base text-secondary leading-relaxed">
              A dedicated sanctuary for sustainable strength, thoughtful coaching, and lifelong vitality. Start where you are.
            </p>
          </div>

          {/* Navigation links */}
          <nav aria-label="Footer Navigation" className="flex flex-wrap gap-x-8 gap-y-3 items-center">
            <Link
              href="/"
              className="text-sm font-semibold text-secondary hover:text-main transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about-us"
              className="text-sm font-semibold text-secondary hover:text-main transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/transformation"
              className="text-sm font-semibold text-secondary hover:text-main transition-colors"
            >
              Transformation
            </Link>
            <Link
              href="/training"
              className="text-sm font-semibold text-secondary hover:text-main transition-colors"
            >
              Training
            </Link>
            <Link
              href="/contact-us"
              className="text-sm font-semibold text-secondary hover:text-main transition-colors"
            >
              Contact Us
            </Link>
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-divider flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-secondary">
          <p>© {new Date().getFullYear()} GYM. All rights reserved.</p>
          <p className="text-secondary/80">Cinematic wellness &amp; precision athletic conditioning.</p>
        </div>
      </div>
    </footer>
  );
}
