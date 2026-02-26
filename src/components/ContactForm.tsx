"use client";

import { useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-foreground text-white text-2xl mb-6">
          &#10003;
        </div>
        <h3 className="text-xl font-semibold mb-2">Message sent</h3>
        <p className="text-sm text-muted">
          We&apos;ll get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="space-y-6"
    >
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full rounded-xl border border-ring bg-surface px-4 py-3 text-sm outline-none transition-colors focus:border-foreground"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-xl border border-ring bg-surface px-4 py-3 text-sm outline-none transition-colors focus:border-foreground"
          placeholder="you@company.com"
        />
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium mb-2">
          Company
        </label>
        <input
          id="company"
          name="company"
          type="text"
          className="w-full rounded-xl border border-ring bg-surface px-4 py-3 text-sm outline-none transition-colors focus:border-foreground"
          placeholder="Company name (optional)"
        />
      </div>

      <div>
        <label htmlFor="interest" className="block text-sm font-medium mb-2">
          Area of interest
        </label>
        <select
          id="interest"
          name="interest"
          className="w-full rounded-xl border border-ring bg-surface px-4 py-3 text-sm outline-none transition-colors focus:border-foreground appearance-none"
        >
          <option value="">Select an area</option>
          <option value="pcb">Custom PCBs & Firmware</option>
          <option value="vision">Vision Systems</option>
          <option value="mes">MES/ERP Integration</option>
          <option value="hmi">Smart Controls & HMI</option>
          <option value="maintenance">Predictive Maintenance</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full rounded-xl border border-ring bg-surface px-4 py-3 text-sm outline-none transition-colors focus:border-foreground resize-none"
          placeholder="Tell us about your project, constraints, and timeline..."
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-white transition-opacity hover:opacity-80"
      >
        Send message
      </button>
    </form>
  );
}
