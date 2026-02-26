import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MesGuideSidebar } from "@/components/MesGuideSidebar";

export const metadata: Metadata = {
  title: "MES Platform Guide — Live Demo & Full Walkthrough",
  description:
    "Complete guide to the ADAM MES platform. Real-time production monitoring, OEE analytics, lot traceability, and quality management. Live demo included.",
  keywords: [
    "MES platform",
    "manufacturing execution system",
    "ADAM MES",
    "production monitoring",
    "OEE analytics",
    "lot traceability",
    "quality management",
    "FDA 21 CFR Part 11",
    "live demo",
  ],
  alternates: { canonical: "/demo" },
};

const sidebarItems = [
  { id: "getting-started", title: "Getting Started" },
  { id: "dashboard", title: "Dashboard" },
  { id: "work-orders", title: "Work Orders" },
  { id: "equipment", title: "Equipment" },
  { id: "oee-performance", title: "OEE & Performance" },
  { id: "quality", title: "Quality" },
  { id: "products", title: "Products" },
  { id: "lot-tracking", title: "Lot Tracking" },
  { id: "jobs", title: "Jobs" },
  { id: "maintenance", title: "Maintenance" },
  { id: "reports", title: "Reports" },
  { id: "audit-log", title: "Audit & Compliance" },
  { id: "system", title: "System Architecture" },
  { id: "user-management", title: "User Management" },
];

function Img({
  src,
  alt,
  title,
  caption,
}: {
  src: string;
  alt: string;
  title?: string;
  caption?: string;
}) {
  return (
    <figure className="my-8">
      <div className="rounded-2xl border border-ring overflow-hidden shadow-lg">
        <Image
          src={src}
          alt={alt}
          title={title}
          width={1440}
          height={900}
          className="w-full h-auto"
          quality={90}
        />
      </div>
      {caption && (
        <figcaption className="mt-3 text-center text-xs text-muted">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

function WhoBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-8 rounded-xl border border-ring bg-surface p-6">
      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted mb-3">
        Who this helps
      </p>
      <p className="text-sm text-muted leading-relaxed">{children}</p>
    </div>
  );
}

function ImpactBox({
  items,
}: {
  items: { metric: string; detail: string }[];
}) {
  return (
    <div className="my-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
      {items.map((item) => (
        <div
          key={item.metric}
          className="rounded-xl border border-ring bg-gradient-to-br from-surface to-white p-5 text-center"
        >
          <p className="text-xl md:text-2xl font-bold tracking-tight text-foreground">
            {item.metric}
          </p>
          <p className="mt-1 text-xs text-muted leading-snug">{item.detail}</p>
        </div>
      ))}
    </div>
  );
}

function Section({
  id,
  num,
  title,
  children,
}: {
  id: string;
  num?: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <article id={id} className="mb-20 scroll-mt-24">
      <div className="flex items-center gap-3 mb-8">
        {num !== undefined && (
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-foreground text-xs font-bold text-white shrink-0">
            {num}
          </span>
        )}
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
          {title}
        </h2>
      </div>
      <div className="text-[15px] leading-relaxed text-muted space-y-4 [&_h3]:text-foreground [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:mt-8 [&_h3]:mb-3 [&_ul]:space-y-2 [&_ul]:list-disc [&_ul]:pl-5 [&_li]:leading-relaxed [&_strong]:text-foreground [&_code]:text-foreground [&_code]:bg-surface [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm">
        {children}
      </div>
      <hr className="mt-20 border-ring" />
    </article>
  );
}

export default function DemoGuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "ADAM MES",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            description:
              "Manufacturing Execution System with real-time production monitoring, OEE analytics, lot traceability, quality management, and FDA 21 CFR Part 11 compliance.",
            url: "https://primatronic.eu/demo",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "EUR",
              description: "Live demo available",
            },
            publisher: {
              "@type": "Organization",
              name: "Primatronic",
              url: "https://primatronic.eu",
            },
          }),
        }}
      />
      {/* Hero */}
      <section className="bg-gradient-to-b from-surface to-background py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <p className="text-[10px] font-medium uppercase tracking-widest text-muted mb-6">
              Live Demo &middot; Full Platform Guide
            </p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.08]">
              ADAM MES
              <br />
              <span className="text-muted">Inside and out.</span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-muted leading-relaxed">
              A complete walkthrough of every module in our Manufacturing
              Execution System. Real screenshots, real data, real workflows
              &mdash; so you can see exactly what your production floor would
              look like before we build it.
            </p>
            <p className="mt-4 text-sm text-muted leading-relaxed">
              Factories running a connected MES typically recover{" "}
              <strong className="text-foreground">5&ndash;15% in lost production capacity</strong>{" "}
              within the first quarter. This guide shows you exactly how each
              module contributes to that result &mdash; and how to use it to
              get there.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://adam-mes-production.up.railway.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-white no-underline transition-all hover:opacity-80"
              >
                Open the live demo &rarr;
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full border border-ring px-7 py-3.5 text-sm font-medium no-underline transition-all hover:bg-surface"
              >
                Request a personalized demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Guide */}
      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex gap-12">
            <MesGuideSidebar items={sidebarItems} />

            <div className="flex-1 min-w-0">
              {/* ─── GETTING STARTED ─── */}
              <Section id="getting-started" title="Getting Started">
                <p>
                  <strong>ADAM MES</strong> is a full-featured manufacturing
                  execution system designed for discrete and process
                  manufacturing. It bridges the gap between your ERP/business
                  systems and the shop floor &mdash; providing real-time
                  visibility into production, quality, maintenance, and
                  traceability.
                </p>
                <p>
                  The platform follows the <strong>ISA-95</strong> standard for
                  enterprise-to-manufacturing integration and implements{" "}
                  <strong>FDA 21 CFR Part 11</strong> compliance for regulated
                  industries. Built on an MQTT-first architecture, every data
                  point flows in real time &mdash; no batch updates, no polling,
                  no stale dashboards.
                </p>
                <p>
                  This guide walks you through every module with annotated
                  screenshots. For each feature, you&apos;ll see the real
                  business problem it solves, step-by-step instructions on how
                  to use it, and the measurable impact it delivers to your
                  bottom line. You can also explore the live demo yourself:
                </p>

                <div className="my-8 rounded-xl border-2 border-foreground/10 bg-surface p-8">
                  <h3 className="!mt-0">Demo Credentials</h3>
                  <div className="grid grid-cols-2 gap-6 max-w-sm mt-4">
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-muted mb-2">
                        Username
                      </p>
                      <code className="text-base font-mono font-bold bg-white px-4 py-2 rounded-lg border border-ring block text-center">
                        admin
                      </code>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-muted mb-2">
                        Password
                      </p>
                      <code className="text-base font-mono font-bold bg-white px-4 py-2 rounded-lg border border-ring block text-center">
                        Admin123
                      </code>
                    </div>
                  </div>
                  <p className="text-xs text-muted mt-4">
                    This is a demo environment with simulated production data.
                    Feel free to create work orders, run jobs, and explore
                    &mdash; the data resets periodically.
                  </p>
                  <div className="mt-6">
                    <a
                      href="https://adam-mes-production.up.railway.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center rounded-full bg-blue-600 px-6 py-2.5 text-sm font-medium text-white no-underline transition-all hover:bg-blue-700"
                    >
                      Open ADAM MES &rarr;
                    </a>
                  </div>
                </div>

                <Img
                  src="/guide/01-login.png"
                  alt="ADAM MES login screen with annotated steps showing username, password, and sign in button"
                  title="ADAM MES Login Screen"
                  caption="The login page with step-by-step annotations. Enter the demo credentials and click Sign In."
                />

                <Img
                  src="/guide/01b-login-filled.png"
                  alt="ADAM MES login with credentials filled in"
                  title="ADAM MES Login Credentials Filled"
                  caption="Credentials entered and ready to sign in."
                />
              </Section>

              {/* ─── DASHBOARD ─── */}
              <Section id="dashboard" num={1} title="Real-Time Production Dashboard">
                <p>
                  <strong>The problem:</strong> Most production managers start
                  their day blind. They walk the floor, ask supervisors for
                  updates, chase spreadsheet reports from the previous shift, and
                  piece together a picture that&apos;s already hours old. By the
                  time they spot an issue, the damage is done &mdash; missed
                  targets, quality escapes, unplanned overtime. Every hour of
                  undetected downtime is direct revenue lost.
                </p>
                <p>
                  <strong>The solution:</strong> The ADAM MES Dashboard is a
                  live command center that updates every second via MQTT. No
                  refreshing, no waiting &mdash; the moment a machine stops or
                  a quality check fails, you see it. Early detection means you
                  fix problems in minutes, not hours.
                </p>

                <ImpactBox
                  items={[
                    { metric: "1\u20132 hrs/day", detail: "Saved on manual status checks and floor walks" },
                    { metric: "Up to 20%", detail: "Faster response to unplanned downtime" },
                    { metric: "Real-time", detail: "Data replaces end-of-shift guesswork" },
                  ]}
                />

                <h3>How to use the Dashboard</h3>
                <p>
                  After logging in, the Dashboard loads automatically. Start
                  your shift here every morning. Glance at the four KPI cards
                  at the top &mdash; if the <strong>Average OEE</strong> card is
                  red (below 85% target), you already know production needs
                  attention. Check <strong>Active Orders</strong> to see
                  what&apos;s running and what&apos;s pending release. The{" "}
                  <strong>Equipment</strong> card shows how many machines are
                  faulted so you can dispatch maintenance before the shift
                  fully starts.
                </p>

                <h3>OEE Trend Chart</h3>
                <p>
                  Hover over the interactive line chart to see exact OEE values
                  at any point in the last 12 hours. This is where patterns
                  reveal themselves: a gradual decline means a machine is
                  degrading; a sudden drop after a changeover means operators
                  need better setup procedures. Each trend you catch here
                  translates directly to recovered output.
                </p>

                <h3>Active Work Orders &amp; Production Lines</h3>
                <p>
                  Scroll down to see which work orders are running and each
                  production line&apos;s real-time OEE gauge. System Alerts
                  surface issues requiring immediate attention. Use this section
                  to prioritize your next action &mdash; the line with the
                  lowest OEE is where your intervention generates the most
                  value.
                </p>

                <WhoBox>
                  Plant managers, production supervisors, and operations teams
                  who need instant visibility without walking the floor or
                  waiting for shift reports. If you currently spend the first
                  30&ndash;60 minutes of each shift gathering status, this
                  replaces that entirely.
                </WhoBox>

                <Img
                  src="/guide/02-dashboard.png"
                  alt="ADAM MES dashboard showing KPI cards, OEE trend chart, equipment status, and production line monitoring"
                  title="ADAM MES Real-Time Production Dashboard"
                  caption="The live dashboard with annotated KPI cards (1-4) and real-time indicator. Data updates every second via MQTT."
                />
                <Img
                  src="/guide/02b-dashboard-full.png"
                  alt="Full dashboard view showing work orders, production lines real-time OEE, and system alerts"
                  title="ADAM MES Full Dashboard View"
                  caption="Full dashboard view: Active Work Orders, Production Lines with real-time OEE gauges, and System Alerts."
                />
              </Section>

              {/* ─── WORK ORDERS ─── */}
              <Section id="work-orders" num={2} title="Work Order Management">
                <p>
                  <strong>The problem:</strong> Production planning lives in the
                  ERP. Execution lives on the floor. The gap between these two
                  creates late orders, priority confusion, and supervisors
                  managing production from memory or whiteboards. When a
                  customer calls asking about their order, nobody has a real
                  answer. Late deliveries erode customer trust and often come
                  with contractual penalties.
                </p>
                <p>
                  <strong>The solution:</strong> Work Orders in ADAM MES track
                  the full lifecycle from creation to completion. Every order
                  has a status, priority, assigned production line, target
                  quantity, and real-time progress &mdash; visible to everyone
                  who needs it. When a customer calls, you give a precise answer
                  in seconds, not hours.
                </p>

                <ImpactBox
                  items={[
                    { metric: "95%+", detail: "On-time delivery achievable with live priority tracking" },
                    { metric: "Zero", detail: "Lost orders or priority mix-ups between shifts" },
                    { metric: "< 10 sec", detail: "To answer 'Where is my order?' for any customer" },
                  ]}
                />

                <h3>How to create a Work Order</h3>
                <p>
                  Navigate to <strong>Work Orders</strong> in the sidebar.
                  Click <strong>+ New Work Order</strong> (top right). Select
                  the product from the dropdown, choose which production line
                  should produce it, enter the target quantity, and set the
                  priority (Urgent, High, Normal, Low). Add a scheduled start
                  date and optional notes. Click <strong>Create</strong>. The
                  system auto-generates a unique WO number (e.g., WO-20260105-003)
                  and the order appears in the table as <strong>CREATED</strong>.
                </p>

                <h3>How to track and manage orders</h3>
                <p>
                  The table shows every order with color-coded status badges:
                  {" "}<strong>CREATED</strong> &rarr; <strong>RELEASED</strong>{" "}
                  &rarr; <strong>IN_PROGRESS</strong> &rarr;{" "}
                  <strong>COMPLETED</strong> (or CANCELLED). Use the action
                  buttons on the right to release, start, or cancel orders
                  directly. Click column headers to sort by Priority, Status,
                  or Scheduled Start &mdash; this lets you instantly see
                  what&apos;s most urgent. The Progress column shows real-time
                  produced vs. target quantities, so you know exactly how close
                  each order is to completion.
                </p>

                <h3>Practical example</h3>
                <p>
                  Your largest customer calls asking when their 500-unit order
                  will ship. Open Work Orders, search by product name, and you
                  immediately see the order is IN_PROGRESS with 380 of 500 units
                  produced on Assembly Line 2. You can give a precise delivery
                  estimate on the phone, in real time. This kind of
                  responsiveness is what keeps customers coming back.
                </p>

                <WhoBox>
                  Production planners who need to schedule and track orders.
                  Supervisors who need to know what to run next. Customer
                  service teams who can now answer &quot;Where is my
                  order?&quot; instantly &mdash; building customer confidence
                  and protecting repeat business.
                </WhoBox>

                <Img
                  src="/guide/03-work-orders.png"
                  alt="Work Orders list with status badges, priorities, and action buttons"
                  title="ADAM MES Work Orders Overview"
                  caption="Work Orders overview with color-coded statuses, priorities, and action controls."
                />
                <Img
                  src="/guide/03b-work-order-create.png"
                  alt="Create New Work Order form with product, line, quantity, priority, and schedule fields"
                  title="Create New Work Order Form"
                  caption="The Create Work Order form: Product, Production Line, Quantity, Priority, Scheduled Start, and Notes."
                />
              </Section>

              {/* ─── EQUIPMENT ─── */}
              <Section id="equipment" num={3} title="Equipment Management">
                <p>
                  <strong>The problem:</strong> Most factories track equipment
                  in spreadsheets or not at all. When a machine goes down,
                  nobody knows its maintenance history. When planning capacity,
                  nobody knows the real state of the equipment fleet. This blind
                  spot leads to over-purchasing new equipment when existing
                  machines could be better utilized, or missing critical
                  maintenance that causes expensive breakdowns.
                </p>
                <p>
                  <strong>The solution:</strong> Equipment Management gives you
                  a complete digital registry of every machine, sensor, and
                  device on your floor &mdash; organized in an ISA-95 compliant
                  hierarchy. Knowing the true state of your equipment means you
                  invest in the right places and avoid surprises.
                </p>

                <ImpactBox
                  items={[
                    { metric: "10\u201330%", detail: "Reduction in unplanned equipment downtime" },
                    { metric: "Full", detail: "ISA-95 compliance for enterprise integration" },
                    { metric: "One source", detail: "For all equipment decisions and history" },
                  ]}
                />

                <h3>How to explore your equipment</h3>
                <p>
                  Click <strong>Equipment</strong> in the sidebar. The{" "}
                  <strong>Overview</strong> tab loads first, showing total
                  equipment count, how many are Running, Stopped, or Faulted,
                  and a breakdown by class (CNC, Robot, Press, Tester,
                  Conveyor). Switch to <strong>Hierarchy View</strong> to see
                  the ISA-95 tree: Enterprise &rarr; Site &rarr; Area &rarr;
                  Line &rarr; Equipment. Use <strong>By Production Line</strong>{" "}
                  to see which machines belong to each line &mdash; this is
                  essential when planning capacity or reassigning equipment
                  during peak demand.
                </p>

                <h3>How to register a new machine</h3>
                <p>
                  Click <strong>+ Add Equipment</strong>, assign a class
                  (CNC Machine, Robot, Press, etc.), place it on a production
                  line, and add technical specs. From this moment on, every
                  state change, maintenance event, and OEE data point for that
                  machine is tracked automatically.
                </p>

                <h3>Practical example</h3>
                <p>
                  Your CFO asks whether you need to purchase a new CNC machine.
                  Open Equipment, filter by CNC class, check each machine&apos;s
                  uptime and utilization. If your existing CNC fleet runs at only
                  68% utilization with frequent Stopped states, the answer
                  isn&apos;t a new machine &mdash; it&apos;s better scheduling
                  and maintenance. You just saved a six-figure capital expense
                  with data that took 30 seconds to pull.
                </p>

                <WhoBox>
                  Maintenance managers who need equipment history. Plant
                  engineers planning capacity and layout. Finance teams making
                  capital investment decisions based on actual utilization data
                  instead of gut feeling.
                </WhoBox>

                <Img
                  src="/guide/04-equipment.png"
                  alt="Equipment Management overview showing total count, state distribution, and class breakdown"
                  title="Equipment Management Overview"
                  caption="Equipment overview with state distribution and classification by type (CNC, Robot, Press, etc.)."
                />
                <Img
                  src="/guide/04c-equipment-hierarchy.png"
                  alt="ISA-95 equipment hierarchy view showing enterprise, site, area, line structure"
                  title="ISA-95 Equipment Hierarchy View"
                  caption="ISA-95 Hierarchy View: the standard enterprise-to-equipment structure."
                />
                <Img
                  src="/guide/04d-equipment-by-line.png"
                  alt="Equipment organized by production line"
                  title="Equipment Grouped by Production Line"
                  caption="Equipment grouped by Production Line for capacity and layout planning."
                />
              </Section>

              {/* ─── OEE ─── */}
              <Section id="oee-performance" num={4} title="OEE & Performance Analytics">
                <p>
                  <strong>The problem:</strong> OEE is the gold standard metric
                  for production efficiency, but most factories calculate it
                  manually &mdash; if at all. Operators fill in paper logs,
                  someone enters data into Excel, and by the time you see the
                  number it&apos;s yesterday&apos;s news. Worse, you can&apos;t
                  tell where you&apos;re losing: Availability? Performance?
                  Quality? Without this breakdown, improvement efforts are
                  scattered and budgets go to the wrong places.
                </p>
                <p>
                  <strong>The solution:</strong> ADAM MES calculates OEE in
                  real time using live MQTT data from the production lines. The
                  formula (Availability &times; Performance &times; Quality)
                  updates continuously, and the breakdown tells you exactly
                  where your losses are &mdash; so every improvement dollar
                  goes where it has the biggest return.
                </p>

                <ImpactBox
                  items={[
                    { metric: "5\u201315%", detail: "OEE improvement typical in the first 6 months" },
                    { metric: "\u20AC50K+/yr", detail: "Recovered output from eliminating hidden losses" },
                    { metric: "Immediate", detail: "Visibility into where you\u2019re losing money" },
                  ]}
                />

                <h3>How to read OEE data</h3>
                <p>
                  Navigate to <strong>OEE / Performance</strong> in the
                  sidebar. The <strong>OEE Overview</strong> tab loads with a
                  bar chart comparing each production line&apos;s OEE against
                  target. Below it, the <strong>OEE Components Breakdown</strong>{" "}
                  shows stacked bars splitting each line&apos;s score into
                  Availability, Performance, and Quality. If Assembly Line 1
                  has high Availability but low Performance, the problem is
                  cycle time &mdash; not downtime. This distinction saves
                  you from solving the wrong problem.
                </p>

                <h3>How to use Downtime Tracking</h3>
                <p>
                  Click the <strong>Downtime Tracking</strong> tab to see every
                  stoppage logged with reason code, planned vs. unplanned flag,
                  duration, and affected equipment. Sort by duration to find
                  your top downtime contributors. These are your highest-value
                  improvement targets &mdash; eliminating the top 3 downtime
                  reasons often recovers more capacity than adding a new shift.
                </p>

                <h3>Practical example</h3>
                <p>
                  Your plant runs at 72% OEE. The breakdown shows Availability
                  at 91%, Quality at 98%, but Performance at only 81%. That
                  means the machines are running, the parts are good, but cycle
                  times are slow. You investigate and discover operators are
                  running a manual changeover that should be automated. A
                  targeted investment in quick-change tooling brings Performance
                  to 92%, raising overall OEE to 82%. On a line producing
                  &euro;2M/year, that 10-point improvement is worth &euro;200K
                  in additional output &mdash; from the same machines, same
                  people, same shift.
                </p>

                <WhoBox>
                  Continuous improvement engineers, production managers, and
                  lean teams who need data-driven insight into where output is
                  being lost &mdash; and the financial justification to fix it.
                </WhoBox>

                <Img
                  src="/guide/05-oee-performance.png"
                  alt="OEE Performance Analytics with bar charts showing OEE by production line and components breakdown"
                  title="OEE Performance Analytics Overview"
                  caption="OEE Overview: per-line comparison against target, plus Availability / Performance / Quality breakdown."
                />
                <Img
                  src="/guide/05c-downtime-tracking.png"
                  alt="Downtime Tracking tab showing planned and unplanned downtime events"
                  title="Downtime Tracking Analysis"
                  caption="Downtime Tracking: categorized events with reason codes and duration analysis."
                />
              </Section>

              {/* ─── QUALITY ─── */}
              <Section id="quality" num={5} title="Quality Management">
                <p>
                  <strong>The problem:</strong> Quality issues caught late cost
                  10&times; more than those caught early. But paper-based
                  inspection logs, disconnected quality systems, and missing
                  traceability mean defects escape and recalls get expensive.
                  When a customer complaint arrives, retracing the root cause
                  takes days. A single recall can cost tens of thousands in
                  scrap, rework, and lost customer trust.
                </p>
                <p>
                  <strong>The solution:</strong> Quality Management in ADAM MES
                  links inspections directly to lots, products, and work orders
                  &mdash; creating an unbroken chain from production to quality
                  disposition. Catching issues at the source means fewer
                  defective units leave the factory, reducing warranty costs
                  and protecting your reputation.
                </p>

                <ImpactBox
                  items={[
                    { metric: "10\u00D7 less", detail: "Cost to catch a defect at the line vs. at the customer" },
                    { metric: "Minutes", detail: "To trace a complaint to its root cause, not days" },
                    { metric: "Near-zero", detail: "Quality escapes with in-process inspections" },
                  ]}
                />

                <h3>How to create an inspection</h3>
                <p>
                  Navigate to <strong>Quality</strong> in the sidebar. Click{" "}
                  <strong>+ New Inspection</strong>. Select the Inspection Type
                  (IN_PROCESS for during production, FINAL for end-of-line).
                  Choose the Product, Production Line, and enter the Lot Number.
                  Set the Quantity to Inspect and Sample Size. Click{" "}
                  <strong>Create Inspection</strong>. The inspection appears in
                  the table as PENDING. After performing the physical check,
                  update it to PASSED or FAILED with the actual quantities.
                </p>

                <h3>How to handle non-conformances</h3>
                <p>
                  Switch to the <strong>NCRs</strong> tab. When a defect is
                  found, create an NCR linked to the specific lot and work order.
                  Categorize the root cause, assign a responsible engineer, and
                  choose a disposition: Use-As-Is, Rework, Scrap, or Return to
                  supplier. The corrective action workflow ensures the issue is
                  resolved and documented &mdash; not just patched.
                </p>

                <h3>Practical example</h3>
                <p>
                  A customer reports dimensional issues on 50 units. Open
                  Quality, search by product, and find the lot number from the
                  complaint. The NCR trail shows the issue originated from a
                  raw material lot with an out-of-spec aluminum batch. You
                  quarantine the remaining stock in seconds, notify the
                  supplier with documented evidence, and limit the impact to
                  those 50 units instead of discovering 500 more next week.
                  The cost of the investigation: 15 minutes. The cost of not
                  having this system: potentially your largest customer.
                </p>

                <WhoBox>
                  Quality engineers, QA managers, and compliance teams in
                  industries like automotive (IATF 16949), aerospace (AS9100),
                  and pharma (FDA) where traceability and inspection records are
                  mandatory. Also any manufacturer tired of expensive quality
                  escapes eating into margins.
                </WhoBox>

                <Img
                  src="/guide/06-quality.png"
                  alt="Quality Management showing inspections table with status badges"
                  title="Quality Management Inspections"
                  caption="Quality inspections with type, status, and linked product/lot traceability."
                />
                <Img
                  src="/guide/06b-quality-ncrs.png"
                  alt="Non-Conformance Reports tab showing NCR tracking"
                  title="Non-Conformance Report Tracking"
                  caption="NCR tracking: root cause analysis, corrective actions, and disposition."
                />
                <Img
                  src="/guide/06c-new-inspection.png"
                  alt="Create new quality inspection form"
                  title="Create New Quality Inspection"
                  caption="Creating a new inspection linked to a product and lot."
                />
              </Section>

              {/* ─── PRODUCTS ─── */}
              <Section id="products" num={6} title="Product Definitions & Master Data">
                <p>
                  <strong>The problem:</strong> Product data scattered across
                  ERP, spreadsheets, and tribal knowledge creates confusion.
                  Which products need inspection? Which require lot tracking?
                  What unit of measure? Teams waste time clarifying basic facts
                  that should be definitive &mdash; and inconsistencies lead to
                  wrong materials used, wrong quantities ordered, and rework
                  that directly cuts into margins.
                </p>
                <p>
                  <strong>The solution:</strong> Product Definitions is the
                  single source of truth for everything you manufacture or
                  consume. Every work order, lot, inspection, and report
                  references this master data &mdash; ensuring consistency
                  across the entire system and eliminating confusion-driven
                  waste.
                </p>

                <h3>How to set up products</h3>
                <p>
                  Navigate to <strong>Products</strong> in the sidebar. Each
                  product is defined with a <strong>Product Code</strong>{" "}
                  (FG-001 for finished goods, RM-ALU-001 for raw materials),
                  Name, Type (Finished Good or Raw Material), Status
                  (Active/Inactive), UOM (EA, KG), and Family (Controllers,
                  Drives, Sensors, Metals, Electronics, Fasteners). Two
                  important toggles: <strong>Inspection Required</strong>{" "}
                  (automatically triggers quality checks during production) and{" "}
                  <strong>Lot Tracking</strong> (enables full genealogy
                  traceability). Set these correctly upfront and the rest of the
                  system enforces them automatically &mdash; no manual
                  reminders needed.
                </p>

                <WhoBox>
                  Engineering teams defining what gets produced. ERP integration
                  teams syncing product master between systems. Quality teams
                  configuring inspection requirements per product. Getting
                  master data right is the foundation &mdash; every other module
                  depends on it.
                </WhoBox>

                <Img
                  src="/guide/07-products.png"
                  alt="Product Definitions table showing finished goods and raw materials with attributes"
                  title="Product Definitions Master Data"
                  caption="Product master data: Finished Goods and Raw Materials with inspection and lot tracking configuration."
                />
              </Section>

              {/* ─── LOT TRACKING ─── */}
              <Section id="lot-tracking" num={7} title="Lot Tracking & Traceability">
                <p>
                  <strong>The problem:</strong> When a customer reports a
                  defect, you need to know: Which batch was it from? What raw
                  materials went into it? Which machines processed it? Without a
                  connected traceability system, answering these questions takes
                  days of detective work &mdash; if you can answer them at all.
                  In the meantime, you might have to recall an entire
                  production run instead of isolating the affected batch. The
                  difference between a targeted 50-unit containment and a
                  5,000-unit recall is often the difference between a minor
                  incident and a serious financial hit.
                </p>
                <p>
                  <strong>The solution:</strong> Lot Tracking provides complete
                  forward and backward traceability across the entire production
                  chain. From raw material receipt to finished goods shipment,
                  every lot is tracked with full genealogy &mdash; so recalls
                  are surgical, not catastrophic.
                </p>

                <ImpactBox
                  items={[
                    { metric: "90%+", detail: "Reduction in recall scope with precise lot containment" },
                    { metric: "Minutes", detail: "To trace any lot from raw material to shipped product" },
                    { metric: "Audit-ready", detail: "Full genealogy documentation for any compliance audit" },
                  ]}
                />

                <h3>How to track lots</h3>
                <p>
                  Navigate to <strong>Lot Tracking</strong> in the sidebar. The
                  inventory table shows every lot with Lot Number, Product, Type
                  (Raw Material, WIP, Finished Goods), Status (Approved,
                  In_Process, Quarantine, Shipped), Quantity, Supplier, and
                  Location. Use the color-coded status badges to quickly spot
                  quarantined lots that need attention.
                </p>

                <h3>How to run a genealogy trace</h3>
                <p>
                  Click the <strong>Genealogy Trace</strong> tab. Enter any lot
                  number and the system renders the complete lineage tree: which
                  raw material lots fed into which WIP lots, and which WIP lots
                  produced which finished goods. Click any node to see its full
                  detail. This is the view you show auditors, and it&apos;s the
                  view that turns a week-long investigation into a 10-minute
                  exercise.
                </p>

                <h3>Practical example</h3>
                <p>
                  A supplier notifies you of a potential contamination in
                  Aluminum Lot RM-ALU-2025-001. Open Genealogy Trace, enter
                  the lot number, and immediately see which WIP and finished
                  goods lots consumed that material. Quarantine only those
                  specific lots. Without this system, you&apos;d quarantine
                  everything produced that week &mdash; potentially tying up
                  hundreds of thousands in inventory unnecessarily.
                </p>

                <WhoBox>
                  Quality and compliance teams in regulated industries (FDA,
                  automotive, aerospace) where traceability from raw material
                  to finished product is mandatory. Supply chain teams managing
                  supplier material tracking. Finance teams who understand
                  that precise containment protects both revenue and reputation.
                </WhoBox>

                <Img
                  src="/guide/08-lot-tracking.png"
                  alt="Lot Tracking showing lot inventory with statuses, suppliers, and locations"
                  title="Lot Tracking Inventory"
                  caption="Lot Inventory: every lot tracked with status, supplier, location, and quantities."
                />
                <Img
                  src="/guide/08b-genealogy-trace.png"
                  alt="Genealogy Trace showing complete lot lineage from raw materials to finished goods"
                  title="Lot Genealogy Trace"
                  caption="Genealogy Trace: complete forward and backward traceability across the production chain."
                />
              </Section>

              {/* ─── JOBS ─── */}
              <Section id="jobs" num={8} title="Job Execution & Shop Floor Control">
                <p>
                  <strong>The problem:</strong> Work orders tell you what to
                  produce. But who is producing it right now? How far along are
                  they? How many good parts vs. scrap? Without job-level
                  tracking, supervisors manage by walking the floor and
                  operators have no visibility into their own performance.
                  Scrap goes unnoticed until end-of-shift counts, and by
                  then the material &mdash; and the money &mdash; is already
                  wasted.
                </p>
                <p>
                  <strong>The solution:</strong> Jobs represent the actual
                  execution of work orders on the shop floor. They track who is
                  running what, how far along it is, and the real-time
                  good/scrap count. When scrap spikes, you see it immediately
                  and intervene before it compounds.
                </p>

                <ImpactBox
                  items={[
                    { metric: "Live", detail: "Good/scrap counts updated in real time" },
                    { metric: "Per-operator", detail: "Performance data to guide training" },
                    { metric: "Same day", detail: "Scrap issues caught and corrected" },
                  ]}
                />

                <h3>How to monitor jobs</h3>
                <p>
                  Navigate to <strong>Jobs</strong> in the sidebar. Three KPI
                  cards at the top show <strong>Running Jobs</strong>,{" "}
                  <strong>Paused Jobs</strong>, and{" "}
                  <strong>Completed Today</strong>. Use the{" "}
                  <strong>Active</strong> tab to see only what&apos;s running
                  now, or <strong>Completed</strong> to review finished jobs.
                  Each row shows Job #, linked Work Order, Product, a visual
                  progress bar with Good vs. Planned count, Scrap count,
                  assigned Operator, and Duration.
                </p>

                <h3>Practical example</h3>
                <p>
                  Midway through a shift, you notice Job #J-00042 has a scrap
                  count of 18 against 200 planned &mdash; that&apos;s a 9%
                  scrap rate, well above your 2% target. You immediately check
                  who&apos;s operating (Maria, Line 2), walk over, and discover
                  a tooling issue that was silently producing defective parts.
                  Fixing it takes 5 minutes. Without real-time scrap
                  visibility, those 18 parts would have been 80+ by end of
                  shift &mdash; material cost, labor cost, and missed delivery
                  all avoided because you caught it early.
                </p>

                <WhoBox>
                  Shop floor supervisors tracking real-time execution.
                  Operators who gain transparency into their own output.
                  Production managers who can now correlate operator performance
                  with output quality &mdash; turning data into targeted training
                  that lifts the entire team.
                </WhoBox>

                <Img
                  src="/guide/09-jobs.png"
                  alt="Jobs page showing running, paused, and completed job counts with detail table"
                  title="Job Execution Overview"
                  caption="Jobs overview with KPI cards and detailed table showing progress, scrap, and operator assignment."
                />
                <Img
                  src="/guide/09b-jobs-active.png"
                  alt="Active jobs filter showing only currently running jobs"
                  title="Active Jobs Filter"
                  caption="Active tab: only running jobs for quick shift management."
                />
              </Section>

              {/* ─── MAINTENANCE ─── */}
              <Section id="maintenance" num={9} title="Maintenance Management (CMMS)">
                <p>
                  <strong>The problem:</strong> Reactive maintenance is
                  expensive: unplanned stops cost 3&ndash;5&times; more than
                  planned maintenance. But most maintenance teams run on paper
                  work requests, calendar-based PM schedules that don&apos;t
                  account for actual equipment condition, and no data to justify
                  capital decisions. Every hour of unplanned downtime costs the
                  average manufacturing line &euro;5,000&ndash;50,000 in lost
                  output.
                </p>
                <p>
                  <strong>The solution:</strong> ADAM MES includes a full CMMS
                  (Computerized Maintenance Management System) integrated
                  directly with equipment data and production metrics. This
                  means maintenance isn&apos;t a separate silo &mdash; it&apos;s
                  connected to the machines it services. The result: fewer
                  surprises, lower maintenance costs, and more uptime that
                  converts directly to revenue.
                </p>

                <ImpactBox
                  items={[
                    { metric: "3\u20135\u00D7", detail: "Cost difference between planned and unplanned maintenance" },
                    { metric: "25\u201340%", detail: "Reduction in maintenance costs with preventive scheduling" },
                    { metric: "Higher MTBF", detail: "Longer equipment life = delayed capital expenditure" },
                  ]}
                />

                <h3>How to submit a maintenance request</h3>
                <p>
                  Navigate to <strong>Maintenance</strong> in the sidebar. Click{" "}
                  <strong>+ New Request</strong>. Select the equipment, choose
                  the type (Corrective, Preventive, Emergency, or Predictive),
                  set the priority, describe the issue, and assign a technician.
                  The request appears in the table with status tracking. Four
                  KPI cards at the top give you instant context: Open Requests,
                  In Progress, Critical, and Overdue PMs.
                </p>

                <h3>How to set up preventive maintenance</h3>
                <p>
                  Click the <strong>PM Schedules</strong> tab. Define recurring
                  tasks with frequency (weekly, monthly, based on run-hours),
                  assign them to specific equipment, and track compliance. When
                  a PM comes due, it auto-generates a work request so nothing
                  gets forgotten. The <strong>Metrics</strong> tab shows MTBF,
                  MTTR, cost tracking, and your planned vs. unplanned ratio
                  &mdash; the single best indicator of maintenance maturity.
                </p>

                <h3>Practical example</h3>
                <p>
                  Your planned vs. unplanned ratio is currently 30/70 (mostly
                  reactive). After 3 months of using PM Schedules, you shift
                  to 60/40. Unplanned stops drop by 40%, freeing up roughly
                  120 hours of production time per quarter. On a line that
                  generates &euro;500/hour in output, that&apos;s &euro;60,000
                  per quarter in recovered revenue &mdash; from maintenance
                  that was always possible but never tracked.
                </p>

                <WhoBox>
                  Maintenance managers and technicians who need organized work
                  request tracking. Plant managers justifying maintenance
                  budgets with real MTBF/MTTR data. Finance teams who will
                  appreciate that every euro spent on preventive maintenance
                  saves 3&ndash;5 euros in emergency repairs and lost
                  production.
                </WhoBox>

                <Img
                  src="/guide/10-maintenance.png"
                  alt="Maintenance Management showing KPI cards, work requests table with types and priorities"
                  title="Maintenance Management Overview"
                  caption="Maintenance work requests with annotated KPI cards: Open, In Progress, Critical, and Overdue PMs."
                />
                <Img
                  src="/guide/10b-pm-schedules.png"
                  alt="Preventive Maintenance schedules tab"
                  title="Preventive Maintenance Schedules"
                  caption="PM Schedules: recurring maintenance tasks with frequency and compliance tracking."
                />
                <Img
                  src="/guide/10c-maintenance-metrics.png"
                  alt="Maintenance metrics showing MTBF, MTTR, and cost tracking"
                  title="Maintenance Metrics Dashboard"
                  caption="Maintenance Metrics: MTBF, MTTR, and planned vs. unplanned maintenance ratios."
                />
                <Img
                  src="/guide/10d-new-request.png"
                  alt="Create new maintenance request form"
                  title="Create New Maintenance Request"
                  caption="Creating a new maintenance request with equipment, type, priority, and description."
                />
              </Section>

              {/* ─── REPORTS ─── */}
              <Section id="reports" num={10} title="Reports & Analytics">
                <p>
                  <strong>The problem:</strong> Data is only useful if the
                  right people can see it in the right format. Exporting to
                  Excel, building pivot tables, and emailing PDFs is how most
                  factories do reporting. It&apos;s slow, error-prone, and the
                  report is outdated by the time it arrives. Worse, when
                  leadership asks &quot;how did we perform last month?&quot;,
                  someone spends half a day assembling the answer manually.
                </p>
                <p>
                  <strong>The solution:</strong> Built-in configurable reports
                  generate visualizations directly from production data.
                  Select the report type, configure filters, and generate
                  &mdash; no external tools needed. The time your team spends
                  building reports is time they&apos;re not improving
                  production.
                </p>

                <h3>How to generate a report</h3>
                <p>
                  Navigate to <strong>Reports</strong> in the sidebar. Choose
                  from three Production report types:{" "}
                  <strong>Production Summary</strong> (bar chart of output by
                  line and period), <strong>Work Order Status</strong> (pie
                  chart showing order distribution), and{" "}
                  <strong>Production Detail</strong> (area chart with granular
                  trends). Select your date range and line filter, then click{" "}
                  <strong>Generate</strong>. The chart renders instantly.
                  OEE / Performance reports offer the same flexibility with
                  line-by-line OEE breakdowns.
                </p>

                <h3>Practical example</h3>
                <p>
                  Before the monthly management review, generate a Production
                  Summary for the last 30 days. In one chart, leadership sees
                  output by line, trends, and bottlenecks. No Excel, no
                  emailing, no half-day preparation. The operations manager
                  walks in with live data, makes confident decisions, and the
                  meeting takes 20 minutes instead of an hour. That&apos;s
                  time (and salary cost) recovered every single month.
                </p>

                <WhoBox>
                  Operations managers preparing shift reviews. Continuous
                  improvement teams tracking KPI trends. Executive leadership
                  who want production summaries in seconds, not days &mdash;
                  so they can focus on decisions, not data gathering.
                </WhoBox>

                <Img
                  src="/guide/11-reports.png"
                  alt="Reports module showing Production and OEE report categories"
                  title="Reports and Analytics Module"
                  caption="Report selection: Production Summary (bar), Work Order Status (pie), Production Detail (area)."
                />
                <Img
                  src="/guide/11b-report-generated.png"
                  alt="Generated production report with chart visualization"
                  title="Generated Production Report"
                  caption="A generated report with visual chart output."
                />
              </Section>

              {/* ─── AUDIT LOG ─── */}
              <Section id="audit-log" num={11} title="Audit Log & Regulatory Compliance">
                <p>
                  <strong>The problem:</strong> Regulated industries (pharma,
                  medical devices, food) require a complete, tamper-proof audit
                  trail. FDA 21 CFR Part 11 demands electronic records and
                  electronic signatures that can&apos;t be backdated, modified,
                  or deleted. Failed audits can result in warning letters,
                  production shutdowns, or import bans &mdash; each costing
                  far more than the compliance system itself.
                </p>
                <p>
                  <strong>The solution:</strong> Audit logging in ADAM MES is
                  built into the core architecture, not bolted on. Every
                  create, update, and delete operation across every module is
                  recorded immutably. The <strong>FDA 21 CFR Part 11</strong>{" "}
                  badge on the page confirms compliance with
                  pharmaceutical-grade requirements. Passing audits becomes
                  routine, not a scramble.
                </p>

                <h3>How to use audit events</h3>
                <p>
                  Navigate to <strong>Audit Log</strong> in the sidebar. The{" "}
                  <strong>Audit Events</strong> tab shows every system action
                  with Timestamp, Event Type, Entity affected, User, and
                  Description. Use the filters (Event Type, Entity Type,
                  Severity, free-text search) to narrow down to exactly what
                  you need. When an auditor asks &quot;who changed this batch
                  release on January 15th?&quot;, you filter by date and entity
                  and have the answer in seconds.
                </p>

                <h3>Electronic Signatures</h3>
                <p>
                  The <strong>Electronic Signatures</strong> tab provides 21
                  CFR Part 11 compliant e-signatures for critical operations:
                  batch releases, quality approvals, specification changes. Each
                  signature captures the signer, timestamp, reason, and action
                  &mdash; meeting the legal standard for electronic records.
                </p>

                <h3>Chain Integrity Verification</h3>
                <p>
                  Click <strong>Verify Chain Integrity</strong> to run a
                  cryptographic check confirming no audit records have been
                  tampered with. This proves to auditors that your historical
                  record is authentic and complete &mdash; a level of assurance
                  that paper logs simply cannot provide.
                </p>

                <WhoBox>
                  Regulatory affairs and compliance teams in FDA-regulated
                  industries. Quality directors preparing for audits. Companies
                  entering regulated markets who need compliance infrastructure
                  from day one &mdash; avoiding the cost of retrofitting later.
                </WhoBox>

                <Img
                  src="/guide/12-audit-log.png"
                  alt="Audit Log with FDA 21 CFR Part 11 badge, event filters, and chain integrity verification"
                  title="Audit Log and Compliance"
                  caption="Audit Log with annotated FDA 21 CFR Part 11 badge and Verify Chain Integrity button."
                />
                <Img
                  src="/guide/12b-electronic-signatures.png"
                  alt="Electronic Signatures tab showing 21 CFR Part 11 compliant e-signatures"
                  title="Electronic Signatures Module"
                  caption="Electronic Signatures: 21 CFR Part 11 compliant signing for critical operations."
                />
              </Section>

              {/* ─── SYSTEM ─── */}
              <Section id="system" num={12} title="System Architecture & Infrastructure">
                <p>
                  <strong>Why it matters:</strong> An MES is only as reliable
                  as the infrastructure it runs on. Slow queries, dropped
                  messages, or security gaps undermine everything else. ADAM MES
                  is built on a modern, proven technology stack designed for
                  real-time industrial workloads &mdash; so the system you
                  depend on doesn&apos;t become a bottleneck itself.
                </p>

                <h3>MQTT-First Architecture</h3>
                <p>
                  Following the <strong>Walker Reynolds Unified Namespace
                  (UNS)</strong> pattern, all data flows through MQTT topics
                  organized in an ISA-95 hierarchy. The MQTT broker is{" "}
                  <strong>HiveMQ Cloud</strong> with TLS/SSL encryption,
                  ensuring secure, real-time message delivery. The backend is
                  built with <strong>NestJS</strong> in 100% TypeScript. This
                  architecture means you can integrate with any PLC, sensor,
                  or ERP that speaks MQTT &mdash; no proprietary connectors,
                  no vendor lock-in.
                </p>

                <h3>Performance</h3>
                <p>
                  96 MQTT topics with 54 active handlers across 12 modules. 249
                  database indexes optimized for query performance.{" "}
                  <strong>&lt;500ms real-time latency</strong> for MQTT message
                  delivery and <strong>&lt;50ms query response</strong> for
                  database operations. Monitoring via Prometheus and Grafana.
                  These numbers mean the system keeps pace with your
                  fastest production line &mdash; no lag, no missed events.
                </p>

                <h3>Security &amp; Compliance</h3>
                <p>
                  Walker Reynolds UNS Architecture, ISA-95 Hierarchy Compliant,
                  HiveMQ Cloud with TLS/SSL, JWT Authentication &amp; RBAC, and
                  Comprehensive Audit Logging. All 9 implementation phases
                  completed: Core Infrastructure, Master Data Management, Order
                  Management, Real-Time MQTT, OEE &amp; Downtime, Quality
                  Management, Lot Tracking, Maintenance, and Audit/Compliance.
                </p>

                <WhoBox>
                  IT directors evaluating MES technology stacks. Solutions
                  architects planning enterprise integration. CTOs who want a
                  system that scales with the business without requiring a
                  rebuild in two years.
                </WhoBox>

                <Img
                  src="/guide/13-system.png"
                  alt="System Architecture showing MQTT broker, performance stats, and security compliance"
                  title="System Architecture Overview"
                  caption="System Architecture: MQTT-first design with annotated performance stats."
                />
                <Img
                  src="/guide/13b-system-full.png"
                  alt="Full system page showing all implementation phases and security compliance checklist"
                  title="Full System Implementation Overview"
                  caption="Complete system overview: all 9 phases, Security & Compliance checklist, and production readiness."
                />
              </Section>

              {/* ─── USER MANAGEMENT ─── */}
              <Section id="user-management" num={13} title="User Management & RBAC">
                <p>
                  <strong>The problem:</strong> Everyone sees everything, or
                  nobody can access what they need. Without role-based access
                  control, sensitive operations (batch releases, equipment
                  configuration, user management) are exposed to anyone with
                  a login. In regulated industries, this is a compliance
                  violation that can halt production during an audit.
                </p>
                <p>
                  <strong>The solution:</strong> ADAM MES implements full RBAC
                  (Role-Based Access Control) where each user is assigned a
                  role that determines exactly which modules and actions they
                  can access. The right people see the right data &mdash;
                  nothing more, nothing less.
                </p>

                <h3>How to manage users</h3>
                <p>
                  Navigate to <strong>User Management</strong> in the sidebar.
                  KPI cards show Total Users, Active, Locked, and Admin counts.
                  Click <strong>+ Add User</strong> to create a new account:
                  set the username, email, name, department (Production,
                  Quality, Maintenance, IT), and assign a role. The user table
                  shows everyone with their Role, Status (Active/Inactive),
                  and Last Login.
                </p>

                <h3>Role-Based Permissions</h3>
                <p>
                  <strong>Operators</strong> see jobs and production data.{" "}
                  <strong>Supervisors</strong> manage work orders and job
                  assignments. <strong>Quality engineers</strong> access
                  inspections and NCRs. <strong>Maintenance technicians</strong>{" "}
                  see work requests and equipment history.{" "}
                  <strong>Administrators</strong> have full access including user
                  management and system configuration. This segregation of
                  duties isn&apos;t just good security &mdash; it&apos;s a
                  regulatory requirement that ADAM MES handles out of the box.
                </p>

                <WhoBox>
                  IT administrators managing platform access. Compliance
                  officers ensuring segregation of duties. Plant managers who
                  need to onboard new team members quickly and know that each
                  person sees exactly what they need to do their job
                  effectively.
                </WhoBox>

                <Img
                  src="/guide/14-user-management.png"
                  alt="User Management showing user table with roles, departments, and status"
                  title="User Management and RBAC"
                  caption="User Management with annotated Add User button and role-based access control."
                />
                <Img
                  src="/guide/14b-add-user.png"
                  alt="Add User form with role assignment and department selection"
                  title="Add User Form"
                  caption="Adding a new user with department, role, and permission assignment."
                />
              </Section>

              {/* ─── BOTTOM CTA ─── */}
              <div className="mt-8 rounded-2xl bg-foreground text-white p-10 md:p-16">
                <div className="max-w-2xl mx-auto text-center">
                  <p className="text-[10px] font-medium uppercase tracking-widest text-white/40 mb-6">
                    Ready to recover lost production?
                  </p>
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                    Every day without visibility is output you&apos;re not
                    capturing.
                  </h2>
                  <p className="mt-6 text-white/60 leading-relaxed">
                    Everything you&apos;ve seen runs on simulated data. We
                    connect ADAM MES to your real equipment &mdash; PLCs,
                    sensors, ERP &mdash; and deploy a system built around your
                    specific products, lines, and workflows. Most customers see
                    measurable ROI within the first quarter.
                  </p>
                  <div className="mt-10 flex flex-wrap justify-center gap-4">
                    <a
                      href="https://adam-mes-production.up.railway.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center rounded-full bg-white text-foreground px-7 py-3.5 text-sm font-medium no-underline transition-all hover:opacity-80"
                    >
                      Explore the live demo
                    </a>
                    <Link
                      href="/contact"
                      className="inline-flex items-center rounded-full border border-white/20 px-7 py-3.5 text-sm font-medium text-white no-underline transition-all hover:bg-white/10"
                    >
                      Let&apos;s calculate your ROI &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
