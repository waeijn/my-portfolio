export const projects = [
  {
    id: 11,
    title: "SignKo",
    role: "Lead Programmer",
    description:
      "A bidirectional Filipino Sign Language translation system featuring a mobile app integrated with BLE-enabled smart gloves.",
    longDescription:
      "Developing a bidirectional FSL translation mobile application using Flutter and Dart. Engineered real-time BLE pipelines to stream TinyML gesture data from ESP32 smart gloves, implementing Riverpod state management and offline Speech-to-Text (STT) and Text-to-Speech (TTS) for accessibility.",
    technologies: ["Flutter", "Dart", "Riverpod", "BLE", "Speech-to-Text"],
    features: [
      "Bidirectional Sign Language Translation",
      "Real-time Speech-to-Text Voice Typing",
      "Bluetooth Low Energy (BLE) Integration",
      "Riverpod State Management Architecture",
      "Dynamic Minimalist Theme Engine",
    ],
    github: "https://github.com/waeijn/signko",
    status: "In Progress",
    date: "September 2026 – Present",
  },
  {
    id: 3,
    title: "CORE THREADS",
    role: "Project Manager & Game Designer",
    description:
      "A 2D top-down psychological roguelike narrative adventure developed in Unity 6, exploring themes of resilience, identity, and personal struggle.",
    longDescription:
      "A personal game development endeavor serving as both an artistic expression and a rigorous technical challenge. Built from the ground up in Unity 6, CORE THREADS blends challenging real-time combat loops with deep, branching dialogue trees. The architecture leverages modern C# scripting practices, modular state machines for enemy behaviors, and hand-crafted pixel art created in Aseprite. The narrative is heavily character-driven, featuring reactive environmental storytelling and atmospheric audio design.",
    technologies: ["Unity 6", "C#", "Aseprite", "Git", "Project Management"],
    features: [
      "Modular State Machine for Enemy AI",
      "Branching Dialogue & Event Architecture",
      "Original Hand-Drawn Pixel Art Assets",
      "Dynamic Audio Management System",
      "Agile Milestone-Driven Development",
    ],
    github: "https://github.com/waeijn/core-threads",
    status: "In Progress",
    date: "August 2026 – Present",
  },
  {
    id: 1,
    title: "SentiRate",
    role: "Team Lead",
    description:
      "An intelligent adaptive rate-limiting middleware system implementing heuristic pattern classification and token bucket optimization algorithms to protect API architectures.",
    longDescription:
      "Led a 4-member undergraduate thesis team developing an advanced adaptive rate-limiting middleware solution that dynamically regulates API traffic. The system employs heuristic pattern classification and token bucket filters in FastAPI to distinguish legitimate traffic from potential threats, with system resilience validated through rigorous Locust traffic simulations and technical audits.",
    technologies: ["Python", "FastAPI", "Redis", "Docker", "Locust"],
    features: [
      "Heuristic Pattern Classification",
      "Dynamic Rate Limit Adjustment",
      "Real-time Threat Detection",
      "Token Bucket Optimization",
      "Locust Traffic Simulation & Auditing",
    ],
    github: "https://github.com/waeijn/sentirate",
    status: "Completed",
    date: "January 2026 – October 2026",
  },
  {
    id: 8,
    title: "Developer Portfolio v2.0",
    role: "Frontend Developer",
    description:
      "A modern, responsive personal portfolio built with React and Tailwind CSS, featuring dark mode, interactive showcases, dynamic book tracking, and an interactive Linux terminal.",
    longDescription:
      "A complete ground-up redesign of my personal developer portfolio, engineered with modern React and styled with Tailwind CSS. It features a fully custom interactive terminal easter egg, dynamic Goodreads shelf synchronization via a custom Node.js automation pipeline, modular section architecture, smooth spring animations, and a responsive design.",
    technologies: ["React", "Vite", "Tailwind CSS", "Node.js", "JavaScript"],
    features: [
      "Interactive Linux Terminal Modal with AI Chat",
      "Automated Goodreads Shelf Sync Pipeline",
      "Custom Theme Engine with Persistent State",
      "Fully Responsive & Accessible UI",
      "SEO & OpenGraph Metadata Integration",
    ],
    github: "https://github.com/waeijn/my-portfolio",
    status: "Completed",
    date: "August 2026",
  },
  {
    id: 2,
    title: "SOC Home Lab",
    role: "Security Analyst & Lab Architect",
    description:
      "A multi-VM Security Operations Center lab simulating real-world attack detection using Splunk SIEM, built across an isolated virtualized network.",
    longDescription:
      "A hands-on SOC environment built with VirtualBox, combining Ubuntu Server, Windows 10, and Kali Linux across an isolated Host-Only network. Splunk Enterprise was deployed as the SIEM, ingesting real-time Windows endpoint logs via Splunk Universal Forwarder. Simulated attacks including Nmap network reconnaissance and Hydra-based RDP brute force were executed against the Windows target, with custom SPL detection rules authored to identify port scanning, failed logon spikes, and successful brute force patterns.",
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
    status: "Completed",
    date: "May 2026 – August 2026",
  },
  {
    id: 4,
    title: "Secure Enterprise Network Hardening Lab",
    role: "Network Security Engineer",
    description:
      "A comprehensive cybersecurity project focused on designing, implementing, and hardening a simulated enterprise network infrastructure using Cisco Packet Tracer.",
    longDescription:
      "Hands-on security lab demonstrating enterprise-grade network architecture with emphasis on defense-in-depth strategies. Implemented 5 segmented VLANs, Router-on-a-Stick inter-VLAN routing, extended ACLs to enforce traffic boundaries, port security, and comprehensive security policy documentation in GitHub.",
    technologies: [
      "Cisco Packet Tracer",
      "Network Security",
      "ACLs",
      "VLANs",
    ],
    features: [
      "5 Segmented VLAN Enterprise Architecture",
      "Router-on-a-Stick Inter-VLAN Routing",
      "Extended ACL Traffic Boundary Enforcement",
      "Device Hardening & Port Security",
      "Security Policy Documentation",
    ],
    github: "https://github.com/waeijn/secure-enterprise-network-lab",
    status: "Completed",
    date: "February 2026 – March 2026",
  },
  {
    id: 5,
    title: "AuraTech",
    role: "Team Lead",
    description:
      "A gaming e-commerce web platform for tech gadgets using React and Bootstrap, backed by Laravel PHP and MySQL.",
    longDescription:
      "Led a 5-member team building a gaming e-commerce web platform for tech gadgets using React and Bootstrap. Architected the backend using Laravel PHP and MySQL to manage data and transactions, and managed task distribution, milestones, and integration across UI/UX, frontend, and backend components.",
    technologies: [
      "React",
      "Bootstrap",
      "Laravel",
      "MySQL",
      "phpMyAdmin",
      "Docker",
    ],
    features: [
      "Dynamic Tech Product Catalog",
      "Secure Payment Gateway Integration",
      "Persistent Shopping Cart",
      "User Authentication & Order Management",
    ],
    github: "https://github.com/waeijn/auratech",
    status: "Completed",
    date: "August 2025 – December 2025",
  },
  {
    id: 9,
    title: "Wilma",
    role: "Full Stack Developer",
    description:
      "An intelligent, offline-capable inventory management system featuring visual expiration detection powered by on-device machine learning.",
    longDescription:
      "Architected a comprehensive inventory dashboard combining an interactive React frontend with a secure, containerized Laravel REST API. Integrated TensorFlow.js for client-side visual classification of food freshness and expiration status, enabling zero-latency inferences without server overhead. Features comprehensive inventory tracking, real-time threshold alerts, detailed audit logging, and responsive dark-mode styling.",
    technologies: [
      "React",
      "TensorFlow.js",
      "Laravel",
      "MySQL",
      "Docker",
    ],
    features: [
      "On-Device Expiration Detection via TensorFlow.js",
      "Real-time Inventory Threshold Alerts",
      "Audit Logging & Stock Movement History",
      "Containerized Multi-Service Architecture",
      "Optimized Offline-First Client Caching",
    ],
    github: "https://github.com/waeijn/wilma",
    status: "Completed",
    date: "December 2025",
  },
  {
    id: 10,
    title: "Task Management System",
    role: "Team Lead & Full Stack Developer",
    description:
      "A minimalist, high-performance task management dashboard designed with a focus on clean UI/UX, fast interactions, and zero clutter.",
    longDescription:
      "Led a cross-functional team of 5 members in building a React frontend and a RESTful Laravel 11 backend, this project features a Figma-inspired minimalist UI with a deep matte slate dark mode. It includes advanced real-time task filtering, flexible grid and list views, and comprehensive category and priority organization. The entire application is fully containerized using Docker with a dedicated MySQL 8.0 database and phpMyAdmin for seamless development and deployment.",
    technologies: [
      "React",
      "Laravel 11",
      "PHP",
      "MySQL",
      "phpMyAdmin",
      "Docker",
    ],
    features: [
      "Minimalist Figma-Inspired Dashboard UI",
      "Advanced Filtering & Search Mechanisms",
      "Flexible Grid and List View Toggles",
      "Pure-CSS Deep Matte Dark Theme",
      "RESTful Backend with Summary Metrics",
    ],
    github: "https://github.com/waeijn/task-management-system",
    status: "Completed",
    date: "October 2025",
  },
  {
    id: 6,
    title: "PageTurn",
    role: "Team Lead & Full-Stack Developer",
    description:
      "A desktop-based bookstore management application providing real-time inventory tracking, transaction processing, and automated reporting.",
    longDescription:
      "Designed and delivered a comprehensive Java desktop system for retail bookstore operations. Built a responsive Java Swing interface backed by a normalized relational database accessed via JDBC, complete with role-based access control, transaction auditing, and automated sales reporting generated through JasperReports integration.",
    technologies: [
      "Java",
      "Java Swing",
      "JDBC",
      "JasperReports",
    ],
    features: [
      "Real-time Inventory Tracking & Low-Stock Alerts",
      "Point-of-Sale Transaction Processing",
      "Automated PDF Sales Reports (JasperReports)",
      "Role-Based Access Control (Admin / Cashier)",
      "Transaction Auditing & Historical Logs",
    ],
    github: "https://github.com/waeijn/pageturn",
    status: "Completed",
    date: "September 2024",
  },
  {
    id: 7,
    title: "FoodFiesta",
    role: "Frontend Developer",
    description:
      "A responsive restaurant landing page featuring dynamic menu filtering, interactive reservation booking, and smooth scroll navigation.",
    longDescription:
      "Created a modern, mobile-first web storefront for a culinary establishment. Emphasized clean visual hierarchy, semantic HTML5 structure, and responsive CSS with custom breakpoint handling, interactive menu category switching powered by vanilla JavaScript, and simulated table reservation workflows.",
    technologies: ["HTML", "CSS", "JavaScript"],
    features: [
      "Category-Filtered Interactive Food Menu",
      "Responsive Table Reservation Form",
      "Smooth Section-to-Section Navigation",
      "Mobile-First Responsive Layout Design",
      "Customer Testimonials Carousel",
    ],
    github: "https://github.com/waeijn/foodfiesta",
    status: "Completed",
    date: "June 2024",
  },
];
