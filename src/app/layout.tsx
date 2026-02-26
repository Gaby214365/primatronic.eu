import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Industrial Automation & Custom Electronics | Primatronic",
    template: "%s | Primatronic",
  },
  description:
    "Custom PCBs, vision systems, MES/ERP integration and smart controls for factories. Precision engineering from Cluj-Napoca, Europe.",
  metadataBase: new URL("https://primatronic.eu"),
  keywords: [
    "industrial automation",
    "custom PCB design",
    "MES integration",
    "vision systems",
    "smart controls",
    "firmware development",
    "predictive maintenance",
    "manufacturing execution system",
    "Cluj-Napoca",
    "Primatronic",
  ],
  authors: [{ name: "Primatronic", url: "https://primatronic.eu" }],
  publisher: "Primatronic",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://primatronic.eu",
    siteName: "Primatronic",
    title: "Industrial Automation & Custom Electronics | Primatronic",
    description:
      "Custom PCBs, vision systems, MES/ERP integration and smart controls for factories. Precision engineering from Cluj-Napoca, Europe.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Primatronic - Industrial Automation & Custom Electronics",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Industrial Automation & Custom Electronics | Primatronic",
    description:
      "Custom PCBs, vision systems, MES/ERP integration and smart controls for factories. Precision engineering from Cluj-Napoca, Europe.",
    images: ["/twitter-image"],
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  other: {
    "x-robots-tag": "index, follow",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Primatronic",
              url: "https://primatronic.eu",
              logo: "https://primatronic.eu/logo.svg",
              description:
                "Custom PCBs, vision systems, MES/ERP integration and smart controls for factories. Precision engineering from Cluj-Napoca, Europe.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Cluj-Napoca",
                addressCountry: "RO",
              },
              sameAs: [],
            }),
          }}
        />
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
