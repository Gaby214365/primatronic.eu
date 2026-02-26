export interface Service {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  heroLabel: string;
  heroTitle: string;
  heroSubtitle: string;
  problem: {
    title: string;
    paragraphs: string[];
    painPoints: string[];
  };
  failedSolutions: {
    title: string;
    items: string[];
  };
  approach: {
    title: string;
    paragraphs: string[];
    steps: { title: string; description: string }[];
  };
  outcomes: {
    title: string;
    items: { label: string; description: string }[];
  };
  cta: {
    title: string;
    description: string;
    buttonText: string;
  };
}

export const services: Service[] = [
  {
    slug: "custom-pcbs",
    title: "Custom PCBs & Firmware",
    metaTitle: "Custom PCB Design & Firmware Development",
    metaDescription:
      "Purpose-built circuit boards for industrial automation, lab instruments, and automotive systems. From schematic to production-ready.",
    keywords: ["custom PCB design", "firmware development", "circuit board manufacturing", "embedded systems", "DFM"],
    heroLabel: "For factories, labs & automotive",
    heroTitle: "Your production line deserves better than a dev board.",
    heroSubtitle:
      "Off-the-shelf boards got you to the prototype. Custom PCBs get you to production — optimized for size, power, thermals, and cost at volume.",
    problem: {
      title: "The problem with generic boards",
      paragraphs: [
        "You started with a development board because it was fast. It worked for the prototype, maybe even for the first small run. But now you're scaling, and the cracks are showing.",
        "The board is too big for the enclosure. Power consumption is wrong. Thermal management is an afterthought. You're paying for features you don't use and missing the ones you need.",
      ],
      painPoints: [
        "Oversized PCBs that don't fit production enclosures",
        "Excessive power draw from unused components",
        "Firmware workarounds for hardware limitations",
        "Supply chain risk from single-source components",
        "No path from prototype to certified production board",
      ],
    },
    failedSolutions: {
      title: "What you've probably tried",
      items: [
        "Adapting off-the-shelf boards with daughter cards and jumper wires",
        "Outsourcing to a PCB house that doesn't understand your application",
        "Internal prototyping without DFM (Design for Manufacturability) expertise",
        "Using reference designs that are close but never quite right",
      ],
    },
    approach: {
      title: "How we do it differently",
      paragraphs: [
        "We design the board around your application — not the other way around. Every component, trace width, and layer stackup is chosen for your specific use case.",
      ],
      steps: [
        {
          title: "Application audit",
          description:
            "We study your production environment, mechanical constraints, thermal requirements, and interface needs before drawing a single schematic.",
        },
        {
          title: "Schematic & simulation",
          description:
            "Full electrical design with signal integrity analysis, power rail simulation, and component selection for long-term availability.",
        },
        {
          title: "Firmware development",
          description:
            "Custom firmware written alongside the hardware — not bolted on after. Tight integration means fewer bugs and faster boot times.",
        },
        {
          title: "Prototype & validate",
          description:
            "Functional prototypes with full test coverage. We validate in your environment, not just on our bench.",
        },
        {
          title: "Production handoff",
          description:
            "DFM-optimized Gerbers, BOM with multiple sourcing options, and documentation your manufacturer can actually use.",
        },
      ],
    },
    outcomes: {
      title: "What changes for you",
      items: [
        { label: "Smaller footprint", description: "Boards designed for your enclosure, not the other way around." },
        { label: "Lower unit cost", description: "No paying for features you don't use. Optimized BOM at volume." },
        { label: "Faster time-to-production", description: "From prototype to production-ready in a single iteration cycle." },
        { label: "Supply chain resilience", description: "Multi-source components and long-term availability planning." },
      ],
    },
    cta: {
      title: "Have a board that needs to go to production?",
      description: "Send us your current design or requirements. We'll tell you exactly what's possible.",
      buttonText: "Start your PCB project",
    },
  },
  {
    slug: "vision-systems",
    title: "Vision Systems",
    metaTitle: "Industrial Vision Systems & Image Processing",
    metaDescription:
      "Machine vision for quality control, measurement, and process verification. Sensor integration and image processing built for your production line.",
    keywords: ["machine vision", "industrial vision systems", "image processing", "quality control", "defect detection"],
    heroLabel: "For production lines & quality teams",
    heroTitle: "Your quality checks should be as fast as your production line.",
    heroSubtitle:
      "Machine vision that catches defects, verifies assemblies, and measures tolerances — at line speed, without slowing anything down.",
    problem: {
      title: "The limits of manual inspection",
      paragraphs: [
        "Your operators are doing their best, but the human eye misses things — especially at the pace your line demands. A scratch, a misalignment, a missing component. By the time it's caught, you've produced an entire batch with the same defect.",
        "The real problem isn't carelessness. It's asking humans to do what cameras do better: consistent, repeatable inspection at speed, every single cycle.",
      ],
      painPoints: [
        "Defects slipping through manual visual inspection",
        "Inconsistent quality checks across shifts and operators",
        "No traceability for which parts were actually inspected",
        "Slow inspection bottlenecking the production line",
        "Customer returns from defects that should have been caught",
      ],
    },
    failedSolutions: {
      title: "What hasn't worked before",
      items: [
        "Off-the-shelf camera kits that require constant recalibration",
        "Vision systems that generate too many false positives, so operators start ignoring them",
        "Standalone inspection stations that don't integrate with your MES or reject systems",
        "Software that works in the lab but fails under factory lighting and vibration",
      ],
    },
    approach: {
      title: "Designed for your parts, your line, your conditions",
      paragraphs: [
        "We build vision systems around your specific application — your parts, your tolerances, your environment. The camera and lighting are just the start. The real value is in the processing pipeline and integration.",
      ],
      steps: [
        {
          title: "Application analysis",
          description:
            "We study your parts, defect types, tolerances, and line speed to determine the right sensor, optics, and lighting setup.",
        },
        {
          title: "Image processing pipeline",
          description:
            "Custom algorithms for your specific inspection task — surface defects, dimensional measurement, assembly verification, or label reading.",
        },
        {
          title: "Line integration",
          description:
            "We connect the vision system to your PLC, reject mechanism, and MES. Inspection results flow directly into your production data.",
        },
        {
          title: "Validation & training",
          description:
            "Tested with real production parts under actual factory conditions. Your team learns to operate and maintain the system.",
        },
      ],
    },
    outcomes: {
      title: "What changes on your line",
      items: [
        { label: "Fewer escapes", description: "Defects caught at the source, not at the customer." },
        { label: "Faster inspection", description: "Vision runs at line speed — no bottleneck." },
        { label: "Full traceability", description: "Every part inspected, every result logged." },
        { label: "Consistent quality", description: "Same inspection standard, every shift, every cycle." },
      ],
    },
    cta: {
      title: "What are you inspecting manually today?",
      description: "Show us the defect or measurement. We'll tell you if vision can catch it — and how.",
      buttonText: "Discuss your inspection needs",
    },
  },
  {
    slug: "mes-erp",
    title: "MES/ERP Integration",
    metaTitle: "MES & ERP Integration for Smart Manufacturing",
    metaDescription:
      "Real-time production dashboards that bridge your shop floor and business systems. Status tracking, KPIs, and operation genealogy.",
    keywords: ["MES integration", "ERP integration", "smart manufacturing", "production dashboards", "real-time KPIs"],
    heroLabel: "For operations & plant managers",
    heroTitle: "You can't optimize what you can't see.",
    heroSubtitle:
      "Real-time production data — status tracking, operation genealogy, and KPIs — delivered where your team needs them, in a format they'll actually use.",
    problem: {
      title: "Running blind on the factory floor",
      paragraphs: [
        "Your ERP knows what should be happening. Your floor knows what is happening. But those two realities rarely match — and by the time you find out, it's already a missed target, a late shipment, or an overtime approval.",
        "The gap between business planning and production execution is where output, quality, and margin leak out. And spreadsheets aren't closing that gap.",
      ],
      painPoints: [
        "No real-time visibility into production status",
        "Manual data entry causing errors and delays",
        "ERP data disconnected from actual shop floor activity",
        "Shift handoffs losing critical information",
        "Quality issues discovered after the fact, not in real time",
      ],
    },
    failedSolutions: {
      title: "What you've tried that didn't stick",
      items: [
        "Spreadsheet dashboards updated manually by supervisors",
        "ERP add-on modules that are too complex for floor staff",
        "Standalone MES systems that don't talk to your ERP",
        "Custom reports that are outdated by the time they're generated",
      ],
    },
    approach: {
      title: "One system of truth for the entire operation",
      paragraphs: [
        "We build the bridge between your ERP and your shop floor. Not a replacement — an integration layer that gives both sides the data they need, when they need it.",
      ],
      steps: [
        {
          title: "Data mapping",
          description:
            "We map every data point from your production floor to your ERP — work orders, material consumption, quality checks, cycle times.",
        },
        {
          title: "Dashboard design",
          description:
            "KPI dashboards designed for readability, not complexity. Large-format screens for the floor, detail views for managers.",
        },
        {
          title: "Real-time integration",
          description:
            "Live connection to your PLCs, sensors, and ERP. No batch updates. No manual entry. Data flows automatically.",
        },
        {
          title: "Alert & escalation",
          description:
            "Automated alerts for deviations, quality issues, and bottlenecks — sent to the right person at the right time.",
        },
      ],
    },
    outcomes: {
      title: "What visibility actually gives you",
      items: [
        { label: "Real-time decisions", description: "React to production issues as they happen, not hours later." },
        { label: "Elimination of manual data entry", description: "Your supervisors manage production, not spreadsheets." },
        { label: "Traceability", description: "Full operation genealogy — trace any product back to raw materials." },
        { label: "Data-driven improvement", description: "Identify bottlenecks, waste, and opportunities with real data." },
      ],
    },
    cta: {
      title: "What would real-time visibility change for your operation?",
      description: "Tell us about your current setup. We'll show you exactly what integrated MES looks like for your floor.",
      buttonText: "Schedule a demo",
    },
  },
  {
    slug: "smart-controls",
    title: "Smart Controls & HMI",
    metaTitle: "Automotive Smart Controls & HMI Development",
    metaDescription:
      "Advanced rotary controllers, haptic interfaces, and smart surfaces for next-gen vehicle cabins. Automotive-grade reliability.",
    keywords: ["smart controls", "HMI development", "haptic feedback", "automotive interfaces", "rotary controllers"],
    heroLabel: "For automotive R&D teams",
    heroTitle: "The interface should feel as good as the engineering behind it.",
    heroSubtitle:
      "Smart knobs, haptic surfaces, and integrated displays that blend physical intuition with digital intelligence — built to meet automotive safety and certification standards.",
    problem: {
      title: "Touchscreens aren't enough",
      paragraphs: [
        "Automotive interiors are going digital, but drivers still need physical controls they can operate without looking. Touchscreens distract. Buttons feel dated. The industry needs a third option: smart surfaces that combine mechanical feedback with digital flexibility.",
        "The challenge is finding a partner who can develop these integrated HMI components — the mechatronics, the firmware, the haptic feedback — with the precision and reliability automotive demands.",
      ],
      painPoints: [
        "Difficulty integrating digital features with mechanical controls",
        "Lack of specialized HMI development partners",
        "Strict automotive safety and certification requirements",
        "Long development cycles with limited iteration",
        "Compromise between design intent and manufacturing feasibility",
      ],
    },
    failedSolutions: {
      title: "Where current approaches fall short",
      items: [
        "Off-the-shelf rotary encoders that lack customization",
        "Separate mechanical and digital development teams that don't sync",
        "Tier 1 suppliers with long lead times and rigid processes",
        "In-house prototyping without haptic or firmware expertise",
      ],
    },
    approach: {
      title: "Mechanical feel. Digital brain. One team.",
      paragraphs: [
        "We develop smart controls from the ground up — mechanical design, embedded electronics, haptic feedback, and firmware — as a single integrated system. In collaboration with automotive partners like GLA Automotive Technology.",
      ],
      steps: [
        {
          title: "Concept & UX definition",
          description:
            "We define the interaction model first — how should it feel, respond, and communicate — before designing any hardware.",
        },
        {
          title: "Mechatronic design",
          description:
            "Integrated mechanical and electronic design: motor selection, sensor placement, PCB layout, all optimized for the control's form factor.",
        },
        {
          title: "Haptic & firmware",
          description:
            "Custom firmware for haptic feedback profiles, display integration, and communication protocols (CAN, LIN, Ethernet).",
        },
        {
          title: "Validation & certification",
          description:
            "Testing against automotive standards — vibration, temperature, EMC — with full documentation for your certification process.",
        },
      ],
    },
    outcomes: {
      title: "What you get",
      items: [
        { label: "Integrated HMI component", description: "Mechanical, electronic, and software delivered as one system." },
        { label: "Automotive-grade reliability", description: "Tested and documented for certification requirements." },
        { label: "Faster iteration", description: "Single team means faster design cycles and fewer integration issues." },
        { label: "Differentiated user experience", description: "Controls that set your vehicle's interior apart from competition." },
      ],
    },
    cta: {
      title: "Developing the next vehicle interior?",
      description: "We work with automotive R&D teams across Europe. Let's discuss your HMI requirements.",
      buttonText: "Start a technical conversation",
    },
  },
  {
    slug: "predictive-maintenance",
    title: "Predictive Maintenance",
    metaTitle: "AI Predictive Maintenance for Manufacturing",
    metaDescription:
      "Prevent unplanned downtime with AI-powered monitoring. Anomaly detection, sensor integration, and maintenance scheduling for production lines.",
    keywords: ["predictive maintenance", "AI monitoring", "anomaly detection", "condition-based maintenance", "IoT sensors"],
    heroLabel: "For plant managers & operations",
    heroTitle: "Stop reacting to breakdowns. Start preventing them.",
    heroSubtitle:
      "AI-powered monitoring that detects anomalies before they become stoppages. Your line keeps running. Your targets stay on track. Your maintenance team works proactively, not in crisis mode.",
    problem: {
      title: "The cost of unplanned downtime",
      paragraphs: [
        "Every unplanned stoppage costs you output, overtime, and trust. Your maintenance team is skilled, but they're operating reactively — fixing what's broken instead of preventing what's about to break.",
        "Scheduled maintenance helps, but it's based on time intervals, not actual equipment condition. You're either maintaining too early (wasting resources) or too late (eating downtime).",
      ],
      painPoints: [
        "Unplanned production stoppages disrupting targets",
        "Maintenance schedules based on calendar, not condition",
        "No early warning system for equipment degradation",
        "Safety incidents from equipment failures",
        "Overtime costs from emergency repairs",
      ],
    },
    failedSolutions: {
      title: "What maintenance strategies miss",
      items: [
        "Calendar-based preventive maintenance: replaces parts too early or too late",
        "Manual inspections: dependent on experience, inconsistent across shifts",
        "Basic vibration sensors: data without actionable insights",
        "CMMS systems that track work orders, not equipment health",
      ],
    },
    approach: {
      title: "Condition-based intelligence",
      paragraphs: [
        "We install sensors on your critical equipment, build baseline models of normal operation, and then continuously monitor for deviations that predict failure — days or weeks before it happens.",
      ],
      steps: [
        {
          title: "Critical asset mapping",
          description:
            "Identify which machines cause the most costly downtime and where sensor data will have the highest impact.",
        },
        {
          title: "Sensor deployment",
          description:
            "Install vibration, temperature, current, and acoustic sensors — non-invasively, without disrupting production.",
        },
        {
          title: "Baseline & model training",
          description:
            "Collect normal operating data, build ML models that learn your equipment's specific behavior patterns.",
        },
        {
          title: "Alerting & scheduling",
          description:
            "Automatic alerts when anomalies are detected, with recommended maintenance actions and priority levels.",
        },
      ],
    },
    outcomes: {
      title: "The shift from reactive to predictive",
      items: [
        { label: "Fewer unplanned stops", description: "Detect degradation before it causes failure." },
        { label: "Optimized maintenance spend", description: "Replace parts based on condition, not calendar." },
        { label: "Safer operations", description: "Catch equipment issues before they become safety risks." },
        { label: "Data for capital decisions", description: "Equipment health data to justify repair vs. replace." },
      ],
    },
    cta: {
      title: "How much is unplanned downtime costing you?",
      description: "We'll assess your critical assets and show you what predictive monitoring can prevent.",
      buttonText: "Get a downtime assessment",
    },
  },
  {
    slug: "ai-automation",
    title: "AI Automation",
    metaTitle: "AI Workflow Automation — Zapier, Make & n8n",
    metaDescription:
      "Intelligent workflow automation using Zapier, Make, and n8n. We design AI-powered integrations that eliminate manual work and connect your systems.",
    keywords: ["AI automation", "workflow automation", "Zapier integration", "Make automation", "n8n workflows"],
    heroLabel: "For operations & business teams",
    heroTitle: "Your team is too valuable for copy-paste work.",
    heroSubtitle:
      "AI-powered automations that connect your tools, eliminate manual steps, and make intelligent decisions — built on platforms like Zapier, Make, and n8n so you stay in control.",
    problem: {
      title: "Manual processes that should have been automated yesterday",
      paragraphs: [
        "Your team spends hours every week on tasks that follow the same pattern: copy data from one system, paste it into another, send a notification, update a spreadsheet. It works — until it doesn't. Someone forgets a step, enters the wrong value, or goes on vacation.",
        "The problem isn't your people. It's that you're using human attention for work that machines handle better: repetitive, rule-based tasks that need to happen reliably, every time.",
      ],
      painPoints: [
        "Hours lost on manual data transfer between systems",
        "Errors from copy-paste and manual data entry",
        "Processes that break when a key person is unavailable",
        "No visibility into workflow bottlenecks",
        "Tools and platforms that don't talk to each other",
      ],
    },
    failedSolutions: {
      title: "What you've probably tried",
      items: [
        "Basic Zapier zaps that break when edge cases appear",
        "Internal scripts that only the developer who wrote them understands",
        "Asking vendors for API access and getting nowhere",
        "Spreadsheet macros held together with hope",
      ],
    },
    approach: {
      title: "Intelligent automation, not just integration",
      paragraphs: [
        "We design automation workflows that handle complexity — branching logic, AI-powered decisions, error recovery, and multi-system orchestration. Built on platforms you can maintain, not black-box code.",
      ],
      steps: [
        {
          title: "Process mapping",
          description:
            "We document your current workflows end-to-end — every trigger, decision point, and handoff — to find where automation delivers the most value.",
        },
        {
          title: "Platform selection",
          description:
            "Zapier, Make, n8n, or a custom combination — we choose the right tool for each workflow based on complexity, volume, and your team's capabilities.",
        },
        {
          title: "AI integration",
          description:
            "Where rules aren't enough, we add AI — document parsing, classification, summarization, and intelligent routing that improves over time.",
        },
        {
          title: "Build & test",
          description:
            "Production-grade automations with error handling, retry logic, and monitoring. Tested with your real data before going live.",
        },
        {
          title: "Handoff & documentation",
          description:
            "Your team gets full documentation and training. You own the automations and can modify them without us.",
        },
      ],
    },
    outcomes: {
      title: "What automation actually delivers",
      items: [
        { label: "Hours reclaimed", description: "Repetitive tasks run automatically — your team focuses on work that matters." },
        { label: "Fewer errors", description: "Machines don't forget steps or enter wrong values." },
        { label: "Process resilience", description: "Workflows run regardless of who's in the office." },
        { label: "Full visibility", description: "Every automation logged, every failure caught and escalated." },
      ],
    },
    cta: {
      title: "What's your team doing manually that shouldn't be?",
      description: "Tell us about the workflow. We'll show you what automated looks like.",
      buttonText: "Automate a workflow",
    },
  },
  {
    slug: "drone-simulations",
    title: "Drone Control Simulations",
    metaTitle: "Drone Control Simulation & Flight Algorithm Dev",
    metaDescription:
      "Physics-based simulation environments for drone control systems. Test flight algorithms, autonomy logic, and hardware-in-the-loop before real flight.",
    keywords: ["drone simulation", "flight control algorithms", "hardware-in-the-loop", "UAV testing", "aerospace R&D"],
    heroLabel: "For aerospace & R&D teams",
    heroTitle: "Test your flight logic before it leaves the ground.",
    heroSubtitle:
      "Realistic, physics-based simulation environments where you can iterate on drone control algorithms, test autonomy systems, and validate hardware integration — without risking hardware or airspace.",
    problem: {
      title: "Flight testing is expensive, slow, and risky",
      paragraphs: [
        "Every real-world flight test costs time, money, and risk. A bug in your control logic doesn't just crash a drone — it costs weeks of repair, re-certification, and lost development momentum.",
        "You need to iterate fast on control algorithms, sensor fusion, and autonomy logic. But real flight tests give you a handful of data points per day. Simulation gives you thousands.",
      ],
      painPoints: [
        "Slow iteration cycles from reliance on physical flight tests",
        "Expensive hardware damage from control logic bugs",
        "Difficulty testing edge cases and failure scenarios safely",
        "No repeatable environment for regression testing",
        "Gap between simulation models and real-world flight behavior",
      ],
    },
    failedSolutions: {
      title: "Where current simulation falls short",
      items: [
        "Generic flight simulators that don't model your specific airframe or sensors",
        "Oversimplified physics models that don't predict real-world behavior",
        "Simulation environments disconnected from your actual flight controller",
        "No hardware-in-the-loop capability for realistic sensor and actuator testing",
      ],
    },
    approach: {
      title: "Your drone, your physics, your flight controller",
      paragraphs: [
        "We build simulation environments modeled on your specific platform — airframe dynamics, sensor characteristics, environmental conditions — so what works in simulation works in the air.",
      ],
      steps: [
        {
          title: "Platform modeling",
          description:
            "We model your drone's aerodynamics, mass properties, motor characteristics, and sensor suite to create a high-fidelity digital twin.",
        },
        {
          title: "Environment design",
          description:
            "Custom simulation scenarios — wind, obstacles, GPS denial, sensor noise — that match your operational environment and test requirements.",
        },
        {
          title: "Controller integration",
          description:
            "Hardware-in-the-loop setup connecting your actual flight controller to the simulation, or software-in-the-loop for faster iteration.",
        },
        {
          title: "Test automation",
          description:
            "Automated test suites that run thousands of scenarios overnight, with pass/fail criteria and regression tracking.",
        },
      ],
    },
    outcomes: {
      title: "What changes in your development cycle",
      items: [
        { label: "Faster iteration", description: "Test control changes in minutes, not days." },
        { label: "Safer development", description: "Find bugs in simulation, not in the air." },
        { label: "Edge case coverage", description: "Test failure modes that are too dangerous for real flights." },
        { label: "Repeatable validation", description: "Run the same scenario a thousand times with identical conditions." },
      ],
    },
    cta: {
      title: "Building a drone control system?",
      description: "Tell us about your platform and what you need to test. We'll design a simulation environment for it.",
      buttonText: "Discuss your simulation needs",
    },
  },
  {
    slug: "consulting",
    title: "Technical Consulting",
    metaTitle: "Software & Production Automation Consulting",
    metaDescription:
      "Strategic technical consulting for software architecture, production automation, and MES implementation. Expert guidance before you commit resources.",
    keywords: ["technical consulting", "automation consulting", "MES implementation", "software architecture", "Industry 4.0"],
    heroLabel: "For CTOs & engineering leads",
    heroTitle: "Make the right technical decision the first time.",
    heroSubtitle:
      "Expert consulting on software architecture, production automation strategy, and MES implementation — so you commit resources to the right approach, not the wrong one.",
    problem: {
      title: "Technical decisions with lasting consequences",
      paragraphs: [
        "Choosing the wrong software architecture, automation platform, or MES strategy doesn't just waste budget — it creates years of technical debt, integration headaches, and missed capabilities.",
        "Your team knows the business. But decisions about production automation, system integration, and industrial software require specialized experience that's hard to build in-house and expensive to learn by trial and error.",
      ],
      painPoints: [
        "Uncertainty about which automation approach fits your production",
        "Vendor lock-in from poor technology choices",
        "MES implementations that don't match actual shop floor needs",
        "Software architectures that can't scale with production growth",
        "Integration gaps between IT and OT systems",
      ],
    },
    failedSolutions: {
      title: "Why the usual advice doesn't work",
      items: [
        "Vendor consultants who recommend their own product regardless of fit",
        "Strategy firms that deliver reports but don't understand shop floor reality",
        "Internal committees that delay decisions trying to build consensus",
        "Copying what a competitor did without understanding the context",
      ],
    },
    approach: {
      title: "Hands-on expertise, vendor-neutral advice",
      paragraphs: [
        "We've designed, built, and deployed these systems. Our consulting is grounded in real implementation experience — not theory. We help you choose, plan, and validate before you spend.",
      ],
      steps: [
        {
          title: "Current state assessment",
          description:
            "We audit your existing systems, processes, and pain points — on the floor, not just in a meeting room.",
        },
        {
          title: "Requirements definition",
          description:
            "Clear, prioritized requirements that reflect what your operation actually needs — not a vendor feature checklist.",
        },
        {
          title: "Architecture & roadmap",
          description:
            "A concrete technical roadmap with recommended platforms, integration architecture, and phased implementation plan.",
        },
        {
          title: "Vendor evaluation",
          description:
            "Objective evaluation of MES, SCADA, and automation platforms against your specific requirements and constraints.",
        },
        {
          title: "Implementation support",
          description:
            "Technical oversight during implementation to ensure the vendor delivers what was specified.",
        },
      ],
    },
    outcomes: {
      title: "What good consulting prevents",
      items: [
        { label: "Avoided wrong bets", description: "Technology decisions validated before budget is committed." },
        { label: "Faster implementation", description: "Clear requirements mean fewer scope changes and rework." },
        { label: "Vendor independence", description: "Architecture designed for flexibility, not lock-in." },
        { label: "IT/OT alignment", description: "A plan that bridges the gap between your business systems and shop floor." },
      ],
    },
    cta: {
      title: "Facing a technical decision you can't afford to get wrong?",
      description: "Tell us what you're evaluating. We'll give you a straight answer — no sales pitch.",
      buttonText: "Book a technical review",
    },
  },
  {
    slug: "mechatronic-devices",
    title: "Mechatronic Devices",
    metaTitle: "Custom Mechatronic Devices & PLC Systems",
    metaDescription:
      "Custom electromechanical devices combining precision mechanics, electronics, and PLC-based control. From concept through production-ready systems.",
    keywords: ["mechatronic devices", "PLC systems", "custom machinery", "electromechanical design", "industrial automation"],
    heroLabel: "For manufacturing & automation",
    heroTitle: "When off-the-shelf machines can't do what you need.",
    heroSubtitle:
      "Custom mechatronic devices that combine precision mechanics, electronics, and PLC-based control — purpose-built for your specific automation challenge.",
    problem: {
      title: "Standard machines, non-standard requirements",
      paragraphs: [
        "Your process has requirements that no catalog machine covers. You need a specific motion profile, a custom gripping mechanism, a unique assembly sequence — and the standard equipment either can't do it or requires so many modifications it's barely recognizable.",
        "Building custom devices requires integrating mechanics, electronics, and control software as a single system. That's three engineering disciplines that need to work in perfect sync.",
      ],
      painPoints: [
        "No off-the-shelf equipment for your specific automation task",
        "Modifications to standard machines that create reliability issues",
        "Disconnected mechanical, electrical, and controls engineering",
        "PLC programming that doesn't account for mechanical dynamics",
        "Long commissioning times from integration problems",
      ],
    },
    failedSolutions: {
      title: "What hasn't worked",
      items: [
        "Modifying catalog machines beyond their design intent",
        "Separate vendors for mechanical, electrical, and controls — with nobody owning integration",
        "In-house builds without PLC programming or control system expertise",
        "Overseas custom machines that don't meet local safety and quality standards",
      ],
    },
    approach: {
      title: "One team: mechanics, electronics, and controls",
      paragraphs: [
        "We design the mechanism, the drive electronics, and the PLC control program as a unified system. Every component is chosen to work together — not bolted on after the fact.",
      ],
      steps: [
        {
          title: "Functional specification",
          description:
            "We define what the device must do — motion profiles, cycle times, forces, precision — and translate that into a mechanical and control concept.",
        },
        {
          title: "Mechanical design",
          description:
            "3D CAD design with FEA simulation for critical components. Designed for manufacturability and maintainability from the start.",
        },
        {
          title: "Electronics & PLC",
          description:
            "Drive selection, sensor integration, safety circuits, and PLC program development. Siemens, Beckhoff, Allen-Bradley — we work with your platform.",
        },
        {
          title: "Build & commission",
          description:
            "Assembly, wiring, PLC programming, and full commissioning at your site. We stay until the device runs at target cycle time.",
        },
        {
          title: "Documentation & handoff",
          description:
            "Full electrical schematics, PLC source code, mechanical drawings, and maintenance documentation. Your team can service it independently.",
        },
      ],
    },
    outcomes: {
      title: "What a purpose-built device gives you",
      items: [
        { label: "Exact fit", description: "A machine designed for your process, not adapted from something else." },
        { label: "Reliable integration", description: "Mechanics, electronics, and controls designed as one system." },
        { label: "Faster commissioning", description: "Integrated development means fewer surprises at startup." },
        { label: "Full ownership", description: "Complete documentation and source code. No vendor dependency for maintenance." },
      ],
    },
    cta: {
      title: "Need a machine that doesn't exist yet?",
      description: "Describe the automation challenge. We'll tell you if a custom device is the right answer — and what it takes to build one.",
      buttonText: "Describe your automation need",
    },
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}
