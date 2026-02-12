export const projects = [
  {
    id: 1,
    title: "Adaptive API Rate Limiter",
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
    date: "Present",
  },
  {
    id: 2,
    title: "Secure Enterprise Network Hardening Lab",
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
    status: "In Progress",
    date: "Present",
  },
  {
    id: 3,
    title: "AuraTech",
    description:
      "A high-performance e-commerce platform specializing in premium tech gadgets, featuring a modern UI/UX and a seamless shopping experience.",
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
    id: 4,
    title: "Forecast",
    description:
      "An AI-powered inventory management dashboard that uses TensorFlow.js to predict stock reorder needs based on sales velocity and lead times.",
    longDescription:
      "A sophisticated data visualization tool that integrates machine learning directly in the browser. It analyzes current stock levels, average weekly sales, and supplier lead times to calculate 'Days of Stock' and provide real-time reorder urgency and confidence scores.",
    technologies: ["React", "TensorFlow.js", "Bootstrap", "Laravel"],
    features: [
      "On-device Model Training",
      "Predictive Inventory Analytics",
      "Real-time Data Filtering",
      "Urgency & Confidence Scoring",
    ],
    github: "https://github.com/waeijn/forecast",
    status: "Completed",
    date: "November 2025",
  },
  {
    id: 5,
    title: "PageTurn",
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
    id: 6,
    title: "FoodFiesta",
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
