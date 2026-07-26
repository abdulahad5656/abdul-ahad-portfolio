export interface Project {
  name: string;
  slug: string;
  category: string;
  industry: string;
  url: string;
  desktopPath: string;
  mobilePath: string;
  logoPath: string;
  desc: string;
  tech: string[];
  features: string[];
  problem: string;
  solution: string;
  results: string;
  performance: string;
  color: string;
}

export const projects: Project[] = [
  // --- ABDUL AHAD'S FEATURED PROJECTS ---
  {
    name: "Aam E Khas",
    slug: "aam-e-khaas",
    category: "E-Commerce Web App",
    industry: "E-Commerce",
    url: "https://www.aam-e-khaas.shop/",
    desktopPath: "/projects/aam-e-khaas/desktop.png",
    mobilePath: "/projects/aam-e-khaas/mobile.png",
    logoPath: "/projects/aam-e-khaas/logo.png",
    desc: "Custom e-commerce web platform for premium mangoes and gourmet products with dynamic catalog filtering, responsive shopping cart, and online checkout.",
    tech: ["MERN Stack", "React", "Node.js", "MongoDB", "Express"],
    features: ["Dynamic Product Catalog", "Cart & Checkout", "Responsive UI", "Order Management"],
    problem: "Needed a modern, fast, and user-friendly online storefront to handle seasonal gourmet mango orders with seamless checkout.",
    solution: "Developed a full-stack e-commerce web application with dynamic product filtering, responsive shopping cart, and optimized media loading.",
    results: "High customer satisfaction | Smooth multi-device shopping experience",
    performance: "96",
    color: "#F39C12"
  },
  {
    name: "Phishing Simulator",
    slug: "phishing-simulator",
    category: "Cybersecurity Web App",
    industry: "Security",
    url: "https://phishingsimulation-1.onrender.com/login",
    desktopPath: "/projects/phishing-simulator/desktop.png",
    mobilePath: "/projects/phishing-simulator/mobile.png",
    logoPath: "/projects/phishing-simulator/logo.png",
    desc: "Interactive cybersecurity web application designed to simulate phishing scenarios for user awareness training and security testing.",
    tech: ["MERN Stack", "React", "Node.js", "Express", "MongoDB"],
    features: ["User Authentication", "Simulation Dashboards", "Analytics & Reporting", "Custom Scenarios"],
    problem: "Organizations lack interactive hands-on security awareness tools to test employee phishing vulnerability.",
    solution: "Engineered a full-stack web application allowing administrators to trigger simulated phishing campaigns and track user responses.",
    results: "Enhanced security awareness | Real-time campaign tracking",
    performance: "94",
    color: "#E74C3C"
  },
  {
    name: "Duct Care Expert",
    slug: "ductcare-expert",
    category: "Service Booking Web Portal",
    industry: "HVAC Services",
    url: "https://www.ductcareexpert.com/",
    desktopPath: "/projects/ductcare-expert/desktop.png",
    mobilePath: "/projects/ductcare-expert/mobile.png",
    logoPath: "/projects/ductcare-expert/logo.png",
    desc: "Professional business website for HVAC and duct cleaning services featuring online service booking and comprehensive service overviews.",
    tech: ["React", "JavaScript", "HTML5/CSS3", "Node.js"],
    features: ["Service Booking", "Mobile Responsive", "SEO Optimized", "Customer Inquiries"],
    problem: "Local service provider required an authoritative, high-converting digital presence to generate qualified customer leads.",
    solution: "Designed and developed a responsive corporate web portal optimized for search engine visibility and seamless booking requests.",
    results: "Increased online bookings | High mobile engagement",
    performance: "97",
    color: "#2980B9"
  },
  {
    name: "Edenrobe E-commerce Clone",
    slug: "edenrobe-clone",
    category: "E-Commerce Web App",
    industry: "Fashion",
    url: "https://edenrobe-clone-1.onrender.com/",
    desktopPath: "/projects/edenrobe-clone/desktop.png",
    mobilePath: "/projects/edenrobe-clone/mobile.png",
    logoPath: "/projects/edenrobe-clone/logo.png",
    desc: "Full-stack e-commerce replica of Edenrobe fashion store with product catalog, cart drawers, and category filters.",
    tech: ["MERN Stack", "React", "Node.js", "Express", "MongoDB"],
    features: ["Product Swatches", "Dynamic Cart", "Category Filtering", "Responsive Design"],
    problem: "Creating a pixel-perfect, high-performance retail e-commerce platform clone to demonstrate complex MERN capabilities.",
    solution: "Built a comprehensive e-commerce platform with product catalogs, interactive cart drawers, and responsive UI components.",
    results: "Pixel-perfect frontend | Complete cart & catalog workflow",
    performance: "95",
    color: "#16A085"
  },
  {
    name: "Qibla & Prayer Times App",
    slug: "qibla-prayer-app",
    category: "Mobile App (Flutter)",
    industry: "Mobile Apps",
    url: "",
    desktopPath: "/projects/qibla-prayer-app/desktop.png",
    mobilePath: "/projects/qibla-prayer-app/mobile.png",
    logoPath: "/projects/qibla-prayer-app/logo.png",
    desc: "Cross-platform mobile application built with Flutter & Dart for real-time Prayer times, Qibla compass direction, Azan alerts, Hijri calendar, and digital Tasbeeh counter.",
    tech: ["Flutter", "Dart", "Firebase", "Location Services", "Local Notifications"],
    features: ["Real-time Prayer Times", "Qibla Compass Direction", "Azan Alert Toggles", "Hijri Calendar", "Digital Tasbeeh Counter"],
    problem: "Users needed an accurate, ad-free, intuitive mobile utility for daily prayer tracking, Azan alerts, and Qibla direction.",
    solution: "Engineered a sleek Flutter mobile application with device GPS integration, audio Azan notifications, offline Tasbeeh counter, and clean responsive UI.",
    results: "Seamless cross-platform mobile performance | High usability",
    performance: "98",
    color: "#008060"
  },
  {
    name: "Smart Home System",
    slug: "smart-home-system",
    category: "Mobile App (Flutter)",
    industry: "IoT / Smart Home",
    url: "",
    desktopPath: "/projects/smart-home-system/desktop.png",
    mobilePath: "/projects/smart-home-system/mobile.png",
    logoPath: "/projects/smart-home-system/logo.png",
    desc: "Flutter application designed for monitoring and controlling smart home devices with real-time state synchronization.",
    tech: ["Flutter", "Dart", "Firebase", "IoT Devices", "State Management"],
    features: ["Device Controls", "Real-time Sync", "Energy Usage Analytics", "Custom Automation Routines"],
    problem: "Users needed a centralized, intuitive interface to control disparate IoT smart home devices from a single application.",
    solution: "Built a cross-platform mobile application providing real-time data sync and device control through secure Firebase integration.",
    results: "High user engagement | Fast response times",
    performance: "97",
    color: "#3498DB"
  }
];

export const getProjectType = (slug: string): "Client Work" | "Mobile App" | "Personal Project" => {
  if (slug === "qibla-prayer-app" || slug === "smart-home-system") return "Mobile App";
  return "Client Work";
};
