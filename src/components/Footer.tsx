import Link from "next/link";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-3 no-underline">
              <Logo className="h-6 w-6" />
              <span className="text-sm font-semibold tracking-tight">PRIMATRONIC</span>
            </Link>
            <p className="mt-4 text-sm text-muted leading-relaxed">
              Industrial automation reimagined with precision. Cluj-Napoca, Romania.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted mb-4">
              Solutions
            </h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/#services" className="text-muted no-underline hover:text-foreground transition-colors">Custom PCBs</Link></li>
              <li><Link href="/#services" className="text-muted no-underline hover:text-foreground transition-colors">Vision Systems</Link></li>
              <li><Link href="/#services" className="text-muted no-underline hover:text-foreground transition-colors">MES/ERP Integration</Link></li>
              <li><Link href="/#services" className="text-muted no-underline hover:text-foreground transition-colors">Smart Controls</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted mb-4">
              Company
            </h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/#about" className="text-muted no-underline hover:text-foreground transition-colors">About</Link></li>
              <li><Link href="/case-studies" className="text-muted no-underline hover:text-foreground transition-colors">Case Studies</Link></li>
              <li><Link href="/blog" className="text-muted no-underline hover:text-foreground transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="text-muted no-underline hover:text-foreground transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-muted">
              <li>
                <a href="mailto:office@primatronic.eu" className="no-underline hover:text-foreground transition-colors">
                  office@primatronic.eu
                </a>
              </li>
              <li>Cluj-Napoca, Romania</li>
              <li>European Union</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-border pt-8">
          <p className="text-xs text-muted">
            Primatronic SRL &middot; CUI 52488738
          </p>
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} Primatronic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
