"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const glitchLines = [
  "SIGNAL_LOST",
  "ROUTE_NOT_FOUND",
  "TRACE_BROKEN",
  "PATH_UNDEFINED",
  "NODE_MISSING",
  "LINK_SEVERED",
];

export default function NotFound() {
  const [line, setLine] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setLine((prev) => (prev + 1) % glitchLines.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const blink = setInterval(() => {
      setVisible((v) => !v);
    }, 530);
    return () => clearInterval(blink);
  }, []);

  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#0a0a0a 1px, transparent 1px), linear-gradient(90deg, #0a0a0a 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Animated scan line */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute left-0 right-0 h-px bg-foreground/5"
          style={{
            animation: "scanline 4s linear infinite",
          }}
        />
      </div>

      <div className="relative text-center px-6">
        {/* Error code */}
        <div className="relative mb-8">
          <p
            className="text-[10px] font-mono font-medium uppercase tracking-[0.3em] text-muted/50 mb-6"
            aria-hidden
          >
            {`> ${glitchLines[line]}`}
            <span className={visible ? "opacity-100" : "opacity-0"}>_</span>
          </p>

          <h1 className="text-[8rem] md:text-[12rem] font-bold tracking-tighter leading-none select-none">
            <span className="relative">
              4
              {/* Broken trace through the zero */}
              <span className="inline-block relative">
                <span className="relative z-10">0</span>
                <span
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[3px] bg-foreground rotate-[-35deg] z-20"
                  aria-hidden
                />
              </span>
              4
            </span>
          </h1>

          {/* Decorative dashes */}
          <div className="flex items-center justify-center gap-2 mt-6" aria-hidden>
            <span className="block w-8 h-px bg-foreground/20" />
            <span className="block w-2 h-2 rounded-full border border-foreground/20" />
            <span className="block w-8 h-px bg-foreground/20" />
          </div>
        </div>

        {/* Copy */}
        <h2 className="text-xl md:text-2xl font-semibold tracking-tight mb-4">
          This route doesn&apos;t exist on our floor.
        </h2>
        <p className="text-muted text-sm md:text-base leading-relaxed max-w-md mx-auto mb-10">
          The page you&apos;re looking for has been moved, removed, or never existed.
          Like a broken trace on a PCB — time to reroute.
        </p>

        {/* Actions */}
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-white no-underline transition-all hover:opacity-80"
          >
            Back to homepage
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full border border-ring px-7 py-3.5 text-sm font-medium no-underline transition-all hover:bg-surface"
          >
            Report this issue &rarr;
          </Link>
        </div>

        {/* Fun detail */}
        <p className="mt-16 text-[10px] font-mono uppercase tracking-[0.2em] text-muted/30">
          ERR_ROUTE_NOT_FOUND &middot; HTTP 404
        </p>
      </div>

      <style jsx>{`
        @keyframes scanline {
          0% {
            top: -1px;
          }
          100% {
            top: 100%;
          }
        }
      `}</style>
    </section>
  );
}
