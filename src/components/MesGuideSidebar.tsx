"use client";

import { useEffect, useState } from "react";

interface SidebarItem {
  id: string;
  title: string;
}

export function MesGuideSidebar({ items }: { items: SidebarItem[] }) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );

    for (const item of items) {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, [items]);

  return (
    <nav className="hidden lg:block w-56 shrink-0">
      <div className="sticky top-24">
        <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted mb-4">
          Contents
        </p>
        <ul className="space-y-1 border-l border-ring">
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(item.id)?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
                className={`
                  block py-1.5 pl-4 text-sm no-underline transition-all border-l -ml-px
                  ${
                    activeId === item.id
                      ? "border-foreground text-foreground font-medium"
                      : "border-transparent text-muted hover:text-foreground hover:border-ring"
                  }
                `}
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
