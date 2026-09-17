"use client";

import React, { useState } from "react";
import Button from "./Button";

interface ContactFormProps {
  className?: string;
}

export default function ContactForm({ className = "" }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "Strength Training",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Please enter your name.";
    if (!formData.email.trim()) {
      errs.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim()) {
      errs.message = "Please share a brief note about what you hope to achieve.";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    // Frontend only: no fake network persistence
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className={`p-8 sm:p-10 rounded-2xl bg-surface border border-divider shadow-sm text-center ${className}`}>
        <div className="w-12 h-12 mx-auto rounded-full bg-sand border border-divider flex items-center justify-center text-accent mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="text-2xl font-semibold text-main">Thank you for getting in touch</h3>
        <p className="mt-3 text-base text-secondary max-w-md mx-auto leading-relaxed">
          We have received your note. A member of our coaching team will be in touch with you shortly.
        </p>
        <div className="mt-6">
          <button
            type="button"
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                name: "",
                email: "",
                phone: "",
                interest: "Strength Training",
                message: "",
              });
            }}
            className="text-sm font-semibold text-accent hover:text-accent-hover underline underline-offset-4"
          >
            Send another message
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={`p-6 sm:p-10 rounded-2xl bg-surface border border-divider shadow-sm space-y-6 ${className}`}
    >
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-main mb-2">
          Full Name <span className="text-accent">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={(e) => {
            setFormData({ ...formData, name: e.target.value });
            if (errors.name) setErrors({ ...errors, name: "" });
          }}
          aria-required="true"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
          placeholder="Your full name"
          className={`w-full px-4 py-3 text-base bg-page rounded-xl border ${
            errors.name ? "border-error focus:border-error" : "border-input-outline/40 focus:border-main"
          } text-main placeholder:text-secondary/50 focus:outline-none focus:ring-1 focus:ring-main transition-colors`}
        />
        {errors.name && (
          <p id="name-error" className="mt-1.5 text-xs text-error font-medium">
            {errors.name}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-main mb-2">
          Email Address <span className="text-accent">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={(e) => {
            setFormData({ ...formData, email: e.target.value });
            if (errors.email) setErrors({ ...errors, email: "" });
          }}
          aria-required="true"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
          placeholder="name@example.com"
          className={`w-full px-4 py-3 text-base bg-page rounded-xl border ${
            errors.email ? "border-error focus:border-error" : "border-input-outline/40 focus:border-main"
          } text-main placeholder:text-secondary/50 focus:outline-none focus:ring-1 focus:ring-main transition-colors`}
        />
        {errors.email && (
          <p id="email-error" className="mt-1.5 text-xs text-error font-medium">
            {errors.email}
          </p>
        )}
      </div>

      {/* Phone (Optional) */}
      <div>
        <label htmlFor="phone" className="block text-sm font-semibold text-main mb-2">
          Phone Number <span className="text-secondary text-xs font-normal">(Optional)</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          placeholder="(Optional) For phone or text contact"
          className="w-full px-4 py-3 text-base bg-page rounded-xl border border-input-outline/40 focus:border-main text-main placeholder:text-secondary/50 focus:outline-none focus:ring-1 focus:ring-main transition-colors"
        />
      </div>

      {/* Training Interest */}
      <div>
        <label htmlFor="interest" className="block text-sm font-semibold text-main mb-2">
          Training Interest
        </label>
        <select
          id="interest"
          name="interest"
          value={formData.interest}
          onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
          className="w-full px-4 py-3 text-base bg-page rounded-xl border border-input-outline/40 focus:border-main text-main focus:outline-none focus:ring-1 focus:ring-main transition-colors"
        >
          <option value="Strength Training">Strength Training</option>
          <option value="Personal Training">Personal Training</option>
          <option value="Functional Fitness">Functional Fitness</option>
          <option value="Conditioning">Conditioning</option>
          <option value="General Exploration">General Exploration / Not Sure Yet</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-main mb-2">
          What brings you to GYM? <span className="text-accent">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={(e) => {
            setFormData({ ...formData, message: e.target.value });
            if (errors.message) setErrors({ ...errors, message: "" });
          }}
          aria-required="true"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          placeholder="Tell us a little about your starting point or what you'd like to work toward..."
          className={`w-full px-4 py-3 text-base bg-page rounded-xl border ${
            errors.message ? "border-error focus:border-error" : "border-input-outline/40 focus:border-main"
          } text-main placeholder:text-secondary/50 focus:outline-none focus:ring-1 focus:ring-main transition-colors resize-y`}
        />
        {errors.message && (
          <p id="message-error" className="mt-1.5 text-xs text-error font-medium">
            {errors.message}
          </p>
        )}
      </div>

      <Button type="submit" variant="primary" size="lg" className="w-full">
        Send Message
      </Button>

      <p className="text-xs text-secondary text-center">
        We respect your time and privacy. No sales pressure, ever.
      </p>
    </form>
  );
}
