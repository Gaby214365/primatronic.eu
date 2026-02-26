"use client";

import Link from "next/link";
import { Logo } from "./Logo";
import { useState, useEffect, useRef } from "react";

const links = [
  { href: "/#services", label: "Services" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/blog", label: "Blog" },
  { href: "/demo", label: "Try MES" },
  { href: "/#about", label: "About" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [compact, setCompact] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;

      requestAnimationFrame(() => {
        const currentY = window.scrollY;
        const delta = currentY - lastScrollY.current;

        // Compact when scrolling down past 80px, expand on scroll up
        if (delta > 5 && currentY > 80) {
          setCompact(true);
          setOpen(false);
        } else if (delta < -3) {
          setCompact(false);
        }

        setScrolled(currentY > 10);
        lastScrollY.current = currentY;
        ticking.current = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50
        ${compact ? "py-2 px-4 bg-transparent" : ""}
        ${!compact && (scrolled || open) ? "bg-white border-b border-border shadow-sm" : ""}
        ${!compact && !scrolled && !open ? "bg-transparent" : ""}
      `}
    >
      <nav
        className={`
          mx-auto flex items-center justify-between rounded-full border
          transition-[max-width,padding,height,gap,background-color,border-color,box-shadow] duration-700 ease-in-out
          ${
            compact
              ? "max-w-fit border-border bg-white/72 backdrop-blur-[20px] backdrop-saturate-[180%] shadow-lg px-5 h-11 gap-6"
              : `max-w-6xl border-transparent bg-transparent shadow-none px-6 ${scrolled ? "h-14" : "h-16"}`
          }
        `}
      >
        <Link href="/" className="flex items-center gap-2 no-underline shrink-0">
          <Logo
            className={`transition-all duration-700 ${compact ? "h-4 w-4" : scrolled ? "h-6 w-6" : "h-7 w-7"}`}
          />
          <span
            className={`font-semibold tracking-tight transition-all duration-700 ${
              compact ? "text-[10px]" : scrolled ? "text-xs" : "text-sm"
            }`}
          >
            PRIMATRONIC
          </span>
        </Link>

        <div className={`hidden md:flex items-center transition-all duration-700 ${compact ? "gap-4" : "gap-8"}`}>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`link-hover text-muted no-underline transition-all hover:text-foreground ${
                compact ? "text-[11px]" : "text-sm"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:block shrink-0">
          <Link
            href="/contact"
            className={`
              inline-flex items-center rounded-full bg-foreground font-medium text-white
              no-underline transition-all duration-700 hover:opacity-80
              ${compact ? "px-3.5 py-1 text-[10px]" : scrolled ? "px-4 py-1.5 text-xs" : "px-5 py-2 text-sm"}
            `}
          >
            Contact
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden flex-col gap-1.5 p-2 transition-all duration-300 ${
            compact ? "hidden" : "flex"
          }`}
          aria-label="Menu"
        >
          <span
            className={`block h-0.5 w-5 bg-foreground transition-transform ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-5 bg-foreground transition-opacity ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-5 bg-foreground transition-transform ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {open && !compact && (
        <div className="md:hidden fixed inset-0 top-[64px] bg-white px-6 pt-8 pb-6 z-40">
          <div className="flex flex-col gap-6">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-lg text-muted no-underline transition-colors hover:text-foreground"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center rounded-full bg-foreground px-5 py-3 text-sm font-medium text-white no-underline"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
