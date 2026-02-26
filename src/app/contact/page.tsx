import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us — Industrial Automation Experts",
  description:
    "Get in touch with Primatronic for custom PCBs, vision systems, MES integration, or any industrial automation project. Based in Cluj-Napoca, Romania.",
  keywords: [
    "contact Primatronic",
    "industrial automation inquiry",
    "custom PCB quote",
    "MES consultation",
    "Cluj-Napoca engineering",
  ],
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <section className="py-24 md:py-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact Primatronic",
            description:
              "Get in touch with Primatronic for custom PCBs, vision systems, MES integration, or any industrial automation project.",
            url: "https://primatronic.eu/contact",
            mainEntity: {
              "@type": "LocalBusiness",
              name: "Primatronic SRL",
              url: "https://primatronic.eu",
              email: "office@primatronic.eu",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Cluj-Napoca",
                addressRegion: "Cluj",
                addressCountry: "RO",
              },
              description:
                "Custom PCBs, vision systems, MES/ERP integration and smart controls for factories.",
            },
          }),
        }}
      />
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-16 md:grid-cols-2">
          {/* Left — Info */}
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted mb-4">
              Contact
            </p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Let&apos;s build
              <br />
              something precise.
            </h1>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              Tell us about your production line, your constraints, and your
              deadlines. We&apos;ll bring the right sensors, firmware, and
              interfaces.
            </p>

            <div className="mt-12 space-y-8">
              <div>
                <h2 className="text-xs font-semibold uppercase tracking-wider text-muted mb-2">
                  Email
                </h2>
                <a
                  href="mailto:office@primatronic.eu"
                  className="text-lg font-medium no-underline hover:text-muted transition-colors"
                >
                  office@primatronic.eu
                </a>
              </div>
              <div>
                <h2 className="text-xs font-semibold uppercase tracking-wider text-muted mb-2">
                  Location
                </h2>
                <p className="text-lg font-medium">
                  Cluj-Napoca, Romania
                </p>
                <p className="text-sm text-muted mt-1">European Union</p>
              </div>
              <div>
                <h2 className="text-xs font-semibold uppercase tracking-wider text-muted mb-2">
                  Company
                </h2>
                <p className="text-sm text-muted">
                  Primatronic SRL &middot; CUI 52488738
                </p>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div className="rounded-2xl border border-ring bg-white p-8 md:p-10">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
