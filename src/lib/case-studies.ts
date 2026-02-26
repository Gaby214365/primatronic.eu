export interface CaseStudy {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  client?: string;
  image?: string;
  imageAlt?: string;
  content: string;
}

// Add new case studies here — the UI dynamically scales.
export const caseStudies: CaseStudy[] = [
  {
    slug: "automotive-hmi-smart-knob",
    title: "Smart Knob for Automotive HMI",
    excerpt:
      "Advanced rotary controllers with haptic feedback for next-gen vehicle cabins, developed with GLA Automotive Technology.",
    category: "Automotive",
    date: "2025-01-15",
    client: "GLA Automotive Technology SRL",
    image: "/images/smart_knob.png",
    imageAlt: "Smart rotary knob with LED haptic feedback designed for automotive HMI interfaces",
    content: `
In collaboration with GLA Automotive Technology SRL, we developed smart knobs — advanced rotary controllers
that represent an evolution of traditional physical controls in automotive Human-Machine Interface (HMI) design.

These controllers are a critical element in the development of "smart surfaces" within the vehicle cabin,
blending the intuitive, safe operation of mechanical controls with the flexibility and personalization of
modern digital interfaces.

Key features include integrated displays, haptic feedback, and multi-functionality — all designed to keep
drivers focused on the road while providing rich, tactile interaction.
    `.trim(),
  },
  {
    slug: "mes-production-monitoring",
    title: "MES Production Monitoring Dashboard",
    excerpt:
      "Real-time factory floor visibility with status tracking, operation genealogy, and KPI dashboards for a manufacturing client.",
    category: "Software",
    date: "2024-11-20",
    image: "/images/MES_photo.png",
    imageAlt: "Manufacturing Execution System dashboard for real-time production monitoring and analytics",
    content: `
We built a comprehensive MES (Manufacturing Execution System) solution that bridges the gap between
business planning (ERP) and the actual production process.

The system provides real-time visibility into the shop floor with status tracking, operation genealogy,
and real-time KPIs delivered where they are needed most. Our software monitors, tracks, and controls
all phases of production, from raw materials to finished goods.

The result: dynamic production scheduling, human-centric ergonomic assistance, quality-control automation,
and predictive maintenance — all from a single unified dashboard.
    `.trim(),
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}

export function getAllCaseStudySlugs(): string[] {
  return caseStudies.map((cs) => cs.slug);
}
