export const projects = [
  {
    id: 1,
    title: "Adaptive API Rate Limiter",
    role: "Project Manager & Lead Researcher",
    description:
      "An intelligent intrusion detection and prevention system implementing adaptive rate limiting through heuristic pattern classification and token bucket optimization algorithms.",
    longDescription:
      "Undergraduate thesis project developing an advanced IDS/IPS solution that dynamically adjusts API rate limits based on real-time traffic patterns. The system employs machine learning-based heuristic classification to distinguish legitimate traffic from potential threats, combined with an optimized token bucket algorithm for granular traffic control and DDoS mitigation.",
    technologies: ["Python", "Redis", "Docker", "Locust", "FastAPI"],
    features: [
      "Heuristic Pattern Classification",
      "Dynamic Rate Limit Adjustment",
      "Real-time Threat Detection",
      "Token Bucket Optimization",
      "Anomaly Detection & Logging",
    ],
    github: "https://github.com/waeijn/adaptive-api-rate-limiter",
    status: "In Progress",
    date: "January 2026 – Present",
  },
  {
    id: 2,
    title: "SOC Home Lab",
    role: "Security Analyst & Lab Architect",
    description:
      "A multi-VM Security Operations Center lab simulating real-world attack detection using Splunk SIEM, built across an isolated virtualized network.",
    longDescription:
      "A hands-on SOC environment built with VirtualBox, combining Ubuntu Server, Windows 10, and Kali Linux across an isolated Host-Only network. Splunk Enterprise was deployed as the SIEM, ingesting real-time Windows endpoint logs via Splunk Universal Forwarder. Simulated attacks including Nmap network reconnaissance and Hydra-based RDP brute force were executed against the Windows target, with custom SPL detection rules authored to identify port scanning, failed logon spikes, and successful brute force patterns. The project is being extended with Sysmon telemetry, Python-based threat intelligence automation via the VirusTotal API, and a full incident response workflow.",
    technologies: [
      "Splunk",
      "VirtualBox",
      "Kali Linux",
      "SPL",
      "Windows Server",
      "Ubuntu Server",
    ],
    features: [
      "Multi-VM Isolated SOC Environment",
      "Splunk SIEM Log Ingestion & Indexing",
      "Simulated Network Reconnaissance & Brute Force Attacks",
      "Custom SPL Detection Rules",
      "Attack-to-Detection Verification Workflow",
    ],
    github: "https://github.com/waeijn/soc-home-lab",
    status: "In Progress",
    date: "May 2026 – Present",
  },
  {
    id: 3,
    title: "CORE THREADS",
    role: "Project Manager & Game Designer",
    description:
      "A 1-bit retro MS-DOS terminal-style roguelite deckbuilder featuring tactical card combat and authentic low-res terminal aesthetics.",
    longDescription:
      "Game development project serving as Project Manager and Game Designer. Led cross-functional collaboration, sprint planning, and core architecture while designing tactical card mechanics, balancing gameplay loops, and crafting authentic 1-bit visual assets and terminal UI/UX.",
    technologies: ["Unity 6", "C#", "Aseprite", "Git", "Project Management"],
    features: [
      "Tactical Card Combat & Deckbuilding",
      "1-Bit Retro MS-DOS Terminal UI/UX",
      "Original Pixel Art & Animated Sprites",
      "Procedural Run & Encounter Progression",
      "Sprint Planning & Milestone Architecture",
    ],
    github: "https://github.com/waeijn/core-threads",
    status: "In Progress",
    date: "August 2026 – Present",
  },
  {
    id: 8,
    title: "Developer Portfolio v2.0",
    role: "Frontend Developer",
    description:
      "A modern, high-performance developer portfolio featuring a custom Goodreads API integration, seamless dark mode, and accessible component design.",
    longDescription:
      "Built from scratch using React and Vite, this portfolio serves as a highly optimized showcase of technical and frontend design skills. It features a completely custom Node.js script that parses XML RSS feeds from Goodreads to sync book data locally, bypassing third-party API rate limits. The UI includes frame-rate independent smooth scrolling animations using requestAnimationFrame, native dark/light mode toggle with anti-flash script injection, and robust accessibility standards (ARIA, focus rings, keyboard navigation).",
    technologies: ["React", "Vite", "Tailwind CSS", "Node.js", "JavaScript"],
    features: [
      "Custom Goodreads RSS XML Parser",
      "Delta-Time Smooth Scrolling Carousel",
      "Native Dark Mode & Anti-Flash Injection",
      "Optimized Asset & Chunk Bundling",
      "WAI-ARIA Accessibility Standards",
    ],
    github: "https://github.com/Waeijn/my-portfolio",
    live: "https://waeijn.github.io/my-portfolio/",
    status: "Completed",
    date: "August 2026",
  },
  {
    id: 4,
    title: "Secure Enterprise Network Lab",
    role: "Network Security Engineer",
    description:
      "A comprehensive month-long cybersecurity project focused on designing, implementing, and hardening a simulated enterprise network infrastructure using Cisco Packet Tracer.",
    longDescription:
      "Hands-on security lab demonstrating enterprise-grade network architecture with emphasis on defense-in-depth strategies. Implemented VLANs, ACLs, port security, AAA authentication, and secure routing protocols. Conducted attack-defense scenarios including penetration testing simulations, documented security policies, and created comprehensive network hardening procedures following industry best practices.",
    technologies: ["Cisco Packet Tracer", "Network Security", "ACLs", "VLANs"],
    features: [
      "Secure Network Architecture Design",
      "Device Hardening & Access Control",
      "VLAN Segmentation & Port Security",
      "Attack-Defense Scenario Testing",
      "Security Policy Documentation",
    ],
    github: "https://github.com/waeijn/secure-enterprise-network-lab",
    status: "Completed",
    date: "March 2026",
  },
  {
    id: 5,
    title: "AuraTech",
    role: "Team Lead & Frontend Developer",
    description:
      "An e-commerce platform specializing in premium tech gadgets, featuring a modern UI/UX and a seamless shopping experience.",
    longDescription:
      "AuraTech is a full-stack digital storefront built to handle tech inventory. It integrates a secure payment gateway, dynamic product filtering for hardware specs, and a responsive admin dashboard for real-time order tracking and stock management.",
    technologies: ["React", "Bootstrap", "Laravel", "phpMyAdmin", "Docker"],
    features: [
      "Dynamic Tech Product Catalog",
      "Secure Stripe Payment Integration",
      "Persistent Shopping Cart",
      "User Authentication & Order History",
    ],
    github: "https://github.com/waeijn/auratech",
    status: "Completed",
    date: "December 2025",
  },
  {
    id: 6,
    title: "PageTurn",
    role: "Team Lead & Full-Stack Developer",
    description:
      "A robust Java-based Point of Sale system designed for bookstores to manage inventory, process sales transactions, and generate digital receipts.",
    longDescription:
      "Developed using Java Swing for a responsive GUI and JDBC for database connectivity, this system streamlines the retail workflow. It features a local-first architecture with high-performance SQL integration for managing large book catalogs and real-time stock updates.",
    technologies: ["Java", "Java Swing", "JDBC", "JasperReports"],
    features: [
      "Inventory & Stock Management",
      "Automated Billing & Receipt Generation",
      "Barcode Scanning Integration",
      "Daily Sales Reporting",
    ],
    github: "https://github.com/waeijn/pageturn-pos",
    status: "Completed",
    date: "September 2024",
  },
  {
    id: 7,
    title: "FoodFiesta",
    role: "Frontend Developer",
    description:
      "A comprehensive e-commerce platform focused on food delivery and management, featuring user authentication and a streamlined ordering process.",
    longDescription:
      "Developed a full-stack food delivery application prototype using React for the front-end and a robust Java/Laravel backend, demonstrating skills in secure transactions and large-scale data handling.",
    technologies: ["HTML", "CSS", "JavaScript"],
    features: [
      "User authentication",
      "Order management",
      "Payment integration",
      "Responsive UI",
    ],
    github: "https://github.com/waeijn/foodfiesta",
    status: "Completed",
    date: "June 2024",
  },
];
