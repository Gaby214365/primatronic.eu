import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Verticals } from "@/components/Verticals";
import { About } from "@/components/About";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "Industrial Automation & Custom Electronics | Primatronic",
  description:
    "Custom PCBs, vision systems, MES/ERP integration and smart controls for factories. Precision engineering from Cluj-Napoca, Europe.",
  keywords: [
    "industrial automation",
    "custom PCB design",
    "MES integration",
    "ERP integration",
    "vision systems",
    "smart controls",
    "firmware development",
    "Cluj-Napoca",
    "manufacturing",
    "Primatronic",
  ],
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Primatronic",
            url: "https://primatronic.eu",
            description:
              "Custom PCBs, vision systems, MES/ERP integration and smart controls for factories. Precision engineering from Cluj-Napoca, Europe.",
            publisher: {
              "@type": "Organization",
              name: "Primatronic",
              url: "https://primatronic.eu",
            },
          }),
        }}
      />
      <Hero />
      <Services />
      <Verticals />
      <About />
      <CTA />
    </>
  );
}
