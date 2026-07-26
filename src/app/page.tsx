"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Zap,
  ShieldCheck,
  Award,
  Code,
  Layers,
  CheckCircle2
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Marquee from "@/components/Marquee";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";
import WorkflowTimeline from "@/components/WorkflowTimeline";

// Reusable dynamic imports
import { projects } from "@/data/projects";
import FeaturedProject from "@/components/FeaturedProject";
import ProjectGallery from "@/components/ProjectGallery";
import ProjectCard from "@/components/ProjectCard";
import CaseStudy from "@/components/CaseStudy";
import ProjectSlider from "@/components/ProjectSlider";

const trustBadges = [
  "MERN Stack Web Apps",
  "Flutter Mobile Apps",
  "React & Node.js",
  "Firebase & APIs",
  "Full-Stack Architectures",
  "Performance & Scalability"
];

const marqueeLogos = [
  "React", "Node.js", "MongoDB", "Express", "Flutter", "Firebase", "Dart", "Tailwind CSS", "Next.js", "TypeScript", "Redux", "PostgreSQL", "AWS", "Docker", "REST APIs", "GraphQL", "Vercel", "GitHub"
];

const marqueeIndustries = [
  "E-Commerce Apps", "SaaS Platforms", "Mobile Apps", "Custom Dashboards", "REST API Development", "Database Design", "Cross-Platform UI", "Authentication", "Cloud Deployments"
];

const services = [
  {
    title: "Full-Stack Web Apps",
    desc: "Building dynamic web applications from scratch using the MERN stack with scalable backend architectures.",
    icon: Code,
    preview: () => (
      <div className="w-full p-4 bg-gray-light rounded-xl border border-gray-border space-y-2 text-[10px] text-charcoal-light font-medium text-left">
        <div className="flex items-center gap-1">
          <span className="text-shopify-forest font-bold">app.get</span>
          <span className="text-charcoal truncate">('/api/users', async (req, res) =&gt; &#123;</span>
        </div>
        <div className="flex items-center gap-1 pl-3">
          <span className="text-indigo-600 font-bold">const</span>
          <span className="text-charcoal font-bold">users</span>
          <span className="text-indigo-600 font-bold">=</span>
          <span className="text-charcoal">await User.find();</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-shopify-forest font-bold">&#125;);</span>
        </div>
      </div>
    )
  },
  {
    title: "Flutter Mobile Apps",
    desc: "Developing high-performance cross-platform mobile apps for iOS and Android using Flutter and Dart.",
    icon: Zap,
    preview: () => (
      <div className="w-full p-4 bg-gray-light rounded-xl border border-gray-border flex items-center justify-between">
        <div className="space-y-1 text-left">
          <span className="text-[10px] font-extrabold text-charcoal">Cross-Platform</span>
          <span className="text-[8px] text-charcoal-light block">60fps UI Performance</span>
        </div>
        <div className="w-10 h-10 rounded-full border-2 border-shopify-forest flex items-center justify-center font-heading font-extrabold text-xs text-shopify-forest">
          100%
        </div>
      </div>
    )
  },
  {
    title: "REST API Integration",
    desc: "Creating and consuming secure RESTful APIs with Node.js, Express, and connecting third-party services.",
    icon: ShieldCheck,
    preview: () => (
      <div className="w-full p-4 bg-gray-light rounded-xl border border-gray-border flex items-center gap-3 text-left">
        <div className="flex flex-col text-[8px] font-bold text-charcoal-light">
          <span>Frontend</span>
          <span>Client</span>
        </div>
        <div className="text-shopify-forest">➡️</div>
        <div className="flex flex-col text-[8px] font-extrabold text-shopify-forest">
          <span>Secure API</span>
          <span>Backend</span>
        </div>
      </div>
    )
  },
  {
    title: "Database Management",
    desc: "Designing efficient NoSQL schemas with MongoDB for fast data retrieval and secure cloud storage.",
    icon: Layers,
    preview: () => (
      <div className="w-full p-4 bg-gray-light rounded-xl border border-gray-border text-left space-y-1.5">
        <span className="text-[9px] font-extrabold text-charcoal block">MongoDB Collections</span>
        <div className="h-5 border border-gray-border rounded px-2 flex items-center justify-between bg-white text-[7.5px] text-charcoal-light font-bold">
          <span>Documents: 1,450</span>
          <span className="w-2.5 h-2.5 rounded bg-shopify-green" />
        </div>
      </div>
    )
  }
];

const shopifyFeatures = [
  {
    title: "Responsive React UI",
    desc: "Building highly interactive and responsive user interfaces using React and Tailwind CSS for seamless web experiences.",
    mock: (color: string) => (
      <div className="w-full h-9 border border-gray-border bg-white rounded-lg flex items-center justify-between px-3 shadow-sm">
        <span className="text-[8px] font-bold text-charcoal truncate">React Component</span>
        <span className="text-[8px] font-extrabold text-white px-3 py-1 rounded cursor-pointer" style={{ backgroundColor: color }}>
          Render
        </span>
      </div>
    )
  },
  {
    title: "Real-time Database",
    desc: "Integrating MongoDB or Firebase for real-time data fetching, syncing, and state management across devices.",
    mock: () => (
      <div className="w-full space-y-1.5 text-left">
        <div className="w-full h-7 border border-gray-border rounded-lg px-2 flex items-center gap-1.5 bg-white text-[8px] text-charcoal-light font-bold">
          <span>Querying Users...</span>
        </div>
        <div className="p-1.5 rounded-lg border border-gray-border bg-white space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-xs">🗄️</span>
            <span className="text-[7px] font-bold text-charcoal">Data synchronized</span>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Cross-Platform Mobile",
    desc: "Writing a single Dart codebase to deploy fully native iOS and Android applications with Flutter.",
    mock: () => (
      <div className="flex items-center gap-2.5">
        <span className="w-5 h-5 rounded-full border-2 border-charcoal flex items-center justify-center text-[8px]">📱</span>
        <span className="w-5 h-5 rounded-full border border-gray-border flex items-center justify-center text-[8px]">💻</span>
        <span className="w-5 h-5 rounded-full border border-gray-border flex items-center justify-center text-[8px]">🌐</span>
      </div>
    )
  },
  {
    title: "Secure Authentication",
    desc: "Implementing secure user login, JWT tokens, and role-based access control for backend systems.",
    mock: (color: string) => (
      <div className="w-[125px] ml-auto h-16 border-l border-gray-border bg-white p-2.5 flex flex-col justify-between shadow-sm rounded-l-lg text-left">
        <span className="text-[7px] font-extrabold text-charcoal">Admin Dashboard</span>
        <span className="text-[8px] font-extrabold text-white py-1 rounded text-center block cursor-pointer" style={{ backgroundColor: color }}>
          Login Secure
        </span>
      </div>
    )
  }
];

export default function Home() {
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);

  // Filter key featured projects to render in alternating layout in the exact requested order
  const featuredSlugs = [
    "aam-e-khaas",
    "phishing-simulator",
    "ductcare-expert",
    "edenrobe-clone",
    "qibla-prayer-app",
    "smart-home-system"
  ];
  const featuredList = featuredSlugs
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter((p): p is typeof projects[0] => !!p);

  const selectedProject = selectedSlug ? projects.find((p) => p.slug === selectedSlug) || null : null;

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <Navbar />

      <main className="flex-grow pt-20 overflow-x-hidden text-charcoal bg-white">
        
        {/* --- PREMIUM HERO SECTION --- */}
        <section id="home" className="relative pt-12 pb-20 lg:pt-16 lg:pb-28 flex items-center justify-center overflow-hidden bg-white border-b border-gray-border">
          <div className="glow-bg-shopify top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2" />
          <div className="glow-bg-gray bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2" />

          <div className="custom-container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
              
              {/* LEFT COLUMN: Premium Card + Floating Elements */}
              <div className="lg:col-span-5 flex justify-center w-full order-first lg:order-none relative">
                
                {/* Subtle Green Glow Background */}
                <div className="absolute inset-0 bg-[#008060] rounded-3xl filter blur-3xl opacity-15 scale-95 pointer-events-none z-0" />

                <motion.div
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="relative w-full max-w-[360px] aspect-[4/5] z-10"
                >
                  {/* Floating tag 1: MERN */}
                  <motion.div
                    animate={{ y: [0, -8, 0], x: [0, 4, 0] }}
                    transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
                    className="absolute -top-4 -left-6 bg-white px-3.5 py-2.5 rounded-xl shadow-md border border-gray-border flex items-center gap-1.5 z-30"
                  >
                    <span className="text-[10px] font-black text-shopify-forest">💻 MERN Stack</span>
                  </motion.div>

                  {/* Floating tag 2: Flutter */}
                  <motion.div
                    animate={{ y: [0, 8, 0], x: [0, -4, 0] }}
                    transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
                    className="absolute top-12 -right-8 bg-white px-3.5 py-2.5 rounded-xl shadow-md border border-gray-border flex items-center gap-1.5 z-30"
                  >
                    <span className="text-[10px] font-black text-shopify-forest">📱 Flutter Mobile</span>
                  </motion.div>

                  {/* Floating tag 3: React & Node */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.2 }}
                    className="absolute bottom-16 -left-10 bg-white px-3.5 py-2.5 rounded-xl shadow-md border border-gray-border flex items-center gap-1.5 z-30"
                  >
                    <span className="text-[10px] font-black text-amber-600">⚡ React & Node.js</span>
                  </motion.div>

                  {/* Floating tag 4: Cross-Platform */}
                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut", delay: 0.8 }}
                    className="absolute -bottom-4 right-4 bg-white px-3.5 py-2.5 rounded-xl shadow-md border border-gray-border flex items-center gap-1.5 z-30"
                  >
                    <span className="text-[10px] font-black text-shopify-forest">🚀 Web & Mobile</span>
                  </motion.div>

                  {/* Core Profile Card */}
                  <div className="relative w-full h-full rounded-3xl overflow-hidden border border-gray-border shadow-xl bg-white select-none">
                    <img
                      src="/profile.jpg"
                      alt="Abdul Ahad Profile"
                      className="object-cover w-full h-full grayscale-[2%] hover:grayscale-0 transition-all duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white">
                      <div className="flex flex-col text-left">
                        <span className="text-sm font-extrabold font-heading tracking-tight">Abdul Ahad</span>
                        <span className="text-[10px] text-shopify-green font-bold uppercase tracking-wider">MERN & Flutter Dev</span>
                      </div>
                      <Award className="w-5 h-5 text-shopify-green" />
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* RIGHT COLUMN: Strong Headline, Text, CTAs & Badges */}
              <div className="lg:col-span-7 flex flex-col items-start text-left space-y-8">
                
                {/* Mini Header Tag */}
                <motion.div
                  initial={{ opacity: 0, y: -15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-bg border border-gray-border text-[10px] font-black uppercase tracking-wider text-charcoal shadow-sm"
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-shopify-forest animate-pulse-slow" />
                  MERN Stack & Flutter Developer
                </motion.div>

                {/* Headline Drops From Top */}
                <div className="space-y-4">
                  <motion.h1
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.08] text-charcoal"
                  >
                    Full-Stack Developer Building{" "}
                    <span className="text-gradient-shopify block sm:inline">
                      High-Performance
                    </span>{" "}
                    Web & Mobile Apps
                  </motion.h1>

                  {/* Subheading */}
                  <motion.p
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                    className="text-charcoal-light text-sm sm:text-base leading-relaxed max-w-2xl font-bold"
                  >
                    I build fast, responsive web applications with the MERN stack and cross-platform mobile apps with Flutter, custom UI architectures, and optimized backend APIs.
                  </motion.p>
                </div>

                {/* Buttons Fade Up */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                  className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto"
                >
                  <a
                    href="#projects"
                    onClick={(e) => handleScrollTo(e, "#projects")}
                    className="w-full sm:w-auto px-7 py-3.5 rounded-lg bg-shopify-forest text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 hover:bg-charcoal transition-all shadow-sm cursor-pointer"
                  >
                    View Projects
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href="#contact"
                    onClick={(e) => handleScrollTo(e, "#contact")}
                    className="w-full sm:w-auto px-7 py-3.5 rounded-lg bg-white border border-gray-border hover:border-shopify-forest hover:bg-gray-bg text-charcoal font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                  >
                    Get Consultation
                  </a>
                  <a
                    href="https://wa.me/923291303255"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto px-7 py-3.5 rounded-lg bg-white border border-gray-border hover:border-charcoal text-charcoal-light hover:text-charcoal font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all shadow-sm"
                  >
                    WhatsApp Chat
                  </a>
                </motion.div>

                {/* Trust Badges Grid (Appear One-by-One) */}
                <div className="w-full pt-6 border-t border-gray-border">
                  <span className="text-[9px] font-black text-charcoal-light uppercase tracking-widest block mb-4">Core Capabilities</span>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-3.5 gap-x-6 w-full">
                    {trustBadges.map((bullet, idx) => (
                      <motion.div
                        key={bullet}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.3 + idx * 0.05 }}
                        className="flex items-center gap-2 text-xs font-bold text-charcoal"
                      >
                        <span className="w-4.5 h-4.5 rounded-full bg-shopify-forest/10 text-shopify-forest flex items-center justify-center text-[10px] font-black flex-shrink-0">
                          ✔
                        </span>
                        <span>{bullet}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* --- FEATURED PROJECTS GRID --- */}
        <section className="py-12 bg-white border-b border-gray-border">
          <div className="custom-container">
            <h2 className="text-center font-heading font-extrabold text-3xl sm:text-5xl text-charcoal tracking-tight mb-8">Featured Projects</h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {featuredList.map((project) => (
                <ProjectCard key={project.slug} project={project} onOpenCaseStudy={setSelectedSlug} />
              ))}
            </div>
          </div>
        </section>

        {/* --- ALTERNATING FEATURED WORK SECTION --- */}
        <section id="projects" className="py-24 sm:py-32 scroll-mt-24 relative bg-white border-b border-gray-border">
          <div className="custom-container space-y-24">
            <div className="text-center space-y-3.5 max-w-2xl mx-auto">
              <span className="text-shopify-forest font-black text-[10px] uppercase tracking-widest block">
                Featured Work
              </span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-charcoal tracking-tight">
                Project Highlights
              </h2>
              <p className="text-charcoal-light text-xs sm:text-sm font-semibold max-w-xl mx-auto leading-relaxed">
                Real full-stack web and mobile applications. Look at the desktop and mobile screen layouts.
              </p>
            </div>

            {/* Alternating Layout System */}
            <div className="space-y-16">
              {featuredList.map((project, idx) => (
                <FeaturedProject
                  key={project.slug}
                  project={project}
                  index={idx}
                  onOpenCaseStudy={setSelectedSlug}
                />
              ))}
            </div>
          </div>
        </section>

        {/* --- DYNAMIC BRAND LIBRARY (35 CARDS GALLERY) --- */}
        <section id="inspiration" className="py-24 sm:py-32 scroll-mt-24 relative bg-gray-bg/40 border-b border-gray-border">
          <div className="custom-container space-y-16">
            <div className="text-center space-y-3.5 max-w-2xl mx-auto">
              <span className="text-shopify-forest font-black text-[10px] uppercase tracking-widest block">
                Brand Library
              </span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-charcoal tracking-tight">
                Design Reference Showcase
              </h2>
              <p className="text-charcoal-light text-xs sm:text-sm font-semibold max-w-xl mx-auto leading-relaxed">
                A custom curated library of 35 real-world Shopify stores used as styling templates and structure references.
              </p>
            </div>

            {/* Reusable Project Gallery grid */}
            <ProjectGallery
              projects={projects}
              onOpenOpenCaseStudy={setSelectedSlug}
            />
          </div>
        </section>

        {/* --- SCREENSHOT MARQUEES --- */}
        <section className="py-16 bg-white border-b border-gray-border overflow-hidden select-none space-y-6">
          <Marquee direction="left" speed="slow">
            {marqueeIndustries.map((ind, idx) => (
              <span
                key={idx}
                className="px-6.5 py-3 rounded-xl bg-gray-bg text-charcoal font-bold text-xs uppercase tracking-wider border border-gray-border"
              >
                {ind}
              </span>
            ))}
          </Marquee>
          <Marquee direction="right" speed="slow">
            {["React", "MongoDB", "Express", "Node.js", "Flutter", "Firebase", "Tailwind CSS", "Dart", "API Design"].map((brand, idx) => (
              <span
                key={idx}
                className="text-base sm:text-lg font-heading font-black text-charcoal/15 px-8 hover:text-shopify-forest transition-colors"
              >
                ⚡ {brand} Expertise
              </span>
            ))}
          </Marquee>
        </section>

        {/* --- SLIDER CAROUSEL SECTION --- */}
        <section className="py-24 bg-white border-b border-gray-border">
          <div className="custom-container space-y-16">
            <div className="text-center space-y-3 max-w-2xl mx-auto">
              <span className="text-shopify-forest font-black text-[10px] uppercase tracking-widest block">
                Slideshow Highlights
              </span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-charcoal tracking-tight">
                Project Slideshow Highlights
              </h2>
            </div>
            
            <ProjectSlider
              projects={featuredList}
              onOpenCaseStudy={setSelectedSlug}
            />
          </div>
        </section>

        {/* --- WORKFLOW TIMELINE SECTION --- */}
        <section id="workflow" className="py-24 sm:py-32 scroll-mt-24 relative bg-gray-bg/40 border-b border-gray-border">
          <div className="custom-container space-y-16">
            <div className="text-center space-y-3.5 max-w-2xl mx-auto">
              <span className="text-shopify-forest font-black text-[10px] uppercase tracking-widest block">
                Methodology
              </span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-charcoal tracking-tight">
                My Development Process
              </h2>
              <p className="text-charcoal-light text-xs sm:text-sm font-semibold max-w-xl mx-auto leading-relaxed">
                How I take applications from concept to launch with pixel-perfect precision and optimized performance.
              </p>
            </div>

            <WorkflowTimeline />
          </div>
        </section>

        {/* --- SERVICES SECTION --- */}
        <section id="services" className="py-24 sm:py-32 scroll-mt-24 relative bg-white border-b border-gray-border">
          <div className="glow-bg-shopify bottom-10 right-10" />
          <div className="custom-container space-y-16">
            <div className="text-center space-y-3.5 max-w-2xl mx-auto">
              <span className="text-shopify-forest font-black text-[10px] uppercase tracking-widest block">
                Solutions
              </span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-charcoal tracking-tight">
                Development Solutions
              </h2>
              <p className="text-charcoal-light text-xs sm:text-sm font-semibold max-w-xl mx-auto leading-relaxed">
                Coding custom components that increase application performance and user engagement.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((svc, idx) => {
                const IconComponent = svc.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.1 }}
                    className="p-7 rounded-2xl bg-white border border-gray-border flex flex-col justify-between space-y-6 shadow-sm hover:scale-[1.01] hover:border-shopify-forest/20 transition-all duration-300 text-left"
                  >
                    <div className="space-y-4">
                      <div className="w-10 h-10 bg-shopify-forest/10 rounded-lg flex items-center justify-center text-shopify-forest">
                        <IconComponent className="w-5 h-5 text-shopify-forest" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-heading font-bold text-xs sm:text-sm uppercase tracking-wider text-charcoal">
                          {svc.title}
                        </h3>
                        <p className="text-charcoal-light text-[11px] sm:text-xs leading-relaxed">
                          {svc.desc}
                        </p>
                      </div>
                    </div>

                    <div className="pt-2">
                      {svc.preview()}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* --- ABOUT ME SECTION --- */}
        <section id="about" className="py-20 bg-gray-bg/25 border-b border-gray-border relative">
          <div className="glow-bg-shopify top-10 right-10" />
          <div className="custom-container max-w-4xl text-left space-y-6">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="w-20 h-20 rounded-2xl overflow-hidden border border-gray-border shadow-sm relative flex-shrink-0">
                <img src="/profile.jpg" alt="Abdul Ahad" className="object-cover w-full h-full" />
              </div>
              <div className="space-y-2">
                <span className="text-shopify-forest font-extrabold text-[9px] uppercase tracking-widest block">
                  Full-Stack Software Engineer
                </span>
                <h3 className="font-heading font-extrabold text-xl text-charcoal">
                  Abdul Ahad
                </h3>
                <p className="text-charcoal-light text-xs sm:text-sm leading-relaxed max-w-xl font-semibold">
                  Passionate software engineer specializing in full-stack web development with MongoDB, Express, React, and Node.js (MERN), as well as cross-platform mobile application development with Flutter and Dart. Experienced in delivering scalable web applications, security tools, and responsive mobile applications.
                </p>
              </div>
            </div>
            <div className="pt-4 border-t border-gray-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[9px] text-charcoal-light font-extrabold uppercase tracking-wider">
              <span>COMSATS University Islamabad, Lahore Campus — BS Software Engineering</span>
              <span>Software Developer at 10 A's Solution | 2+ Years Experience on Upwork</span>
            </div>
          </div>
        </section>

        {/* --- SHOPIFY FEATURES SANDBOX --- */}
        <section id="capabilities" className="py-24 sm:py-32 scroll-mt-24 bg-white border-b border-gray-border relative">
          <div className="glow-bg-shopify bottom-10 right-10" />
          <div className="custom-container space-y-16">
            <div className="text-center space-y-3.5 max-w-2xl mx-auto">
              <span className="text-shopify-forest font-black text-[10px] uppercase tracking-widest block">
                Technical Capabilities
              </span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-charcoal tracking-tight">
                Development Sandbox
              </h2>
              <p className="text-charcoal-light text-xs sm:text-sm font-semibold max-w-xl mx-auto leading-relaxed">
                Check out interactive mocks of high-performance elements programmed with modern stack standards.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {shopifyFeatures.map((feat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.1 }}
                  className="p-6 rounded-2xl border border-gray-border bg-white hover:bg-gray-bg/40 flex flex-col justify-between space-y-5 transition-all duration-200 text-left shadow-sm"
                >
                  <div className="space-y-2">
                    <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-charcoal">
                      {feat.title}
                    </h4>
                    <p className="text-charcoal-light text-[11px] sm:text-xs leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                  <div className="pt-2">
                    {feat.mock("#008060")}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center text-xs text-charcoal-light font-black uppercase tracking-wider">
              And more: API Integrations, Custom Web Hooks, Cloud Functions, Global State Management, Payment Gateways.
            </div>
          </div>
        </section>

        {/* --- FAQ SECTION --- */}
        <section id="faq" className="py-24 sm:py-32 scroll-mt-24 bg-gray-bg/20 border-b border-gray-border">
          <div className="custom-container space-y-16">
            <div className="text-center space-y-3.5 max-w-2xl mx-auto">
              <span className="text-shopify-forest font-black text-[10px] uppercase tracking-widest block">
                Merchant Concerns
              </span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-charcoal tracking-tight">
                Frequently Asked Questions
              </h2>
            </div>

            <FAQ />
          </div>
        </section>

        {/* --- CONTACT SECTION --- */}
        <section id="contact" className="py-24 sm:py-32 scroll-mt-24 bg-white relative">
          <div className="glow-bg-shopify top-10 left-10" />
          <div className="custom-container max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              {/* Context Block */}
              <div className="lg:col-span-5 space-y-8 text-left text-charcoal">
                <div className="space-y-4">
                  <span className="text-shopify-forest font-black text-[10px] uppercase tracking-widest block">
                    Contact Us
                  </span>
                  <h2 className="font-heading font-extrabold text-3xl sm:text-5xl tracking-tight leading-tight">
                    Ready to Build Your Web or Mobile App?
                  </h2>
                  <p className="text-charcoal-light text-xs sm:text-sm leading-relaxed font-bold">
                    Submit your web application or Flutter mobile app requirements to receive a personalized development roadmap.
                  </p>
                </div>

                <div className="space-y-4 text-xs font-semibold">
                  <span className="text-[10px] font-bold text-charcoal uppercase tracking-widest block">Direct Channels</span>
                  <div className="space-y-2.5">
                    <p className="flex items-center gap-2.5">
                      <span className="w-6 h-6 rounded bg-gray-bg border border-gray-border flex items-center justify-center text-xs shadow-sm">📧</span>
                      ahaddev50@gmail.com
                    </p>
                    <p className="flex items-center gap-2.5">
                      <span className="w-6 h-6 rounded bg-gray-bg border border-gray-border flex items-center justify-center text-xs shadow-sm">💬</span>
                      +92 329 1303255 (WhatsApp Line)
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-gray-bg border border-gray-border text-[11px] text-charcoal-light leading-relaxed font-semibold">
                  <span className="text-[9px] font-black text-shopify-forest uppercase tracking-wider block mb-1.5">Direct Developer Guarantee</span>
                  I work directly with clients without agency markups. You get clean full-stack MERN & Flutter code, fast communication, and high-performance solutions.
                </div>

                <div className="flex items-center gap-2.5 text-[10px] font-black text-shopify-forest uppercase tracking-wider">
                  <CheckCircle2 className="w-4 h-4 text-shopify-forest" />
                  <span>Trust note: Response within 12 hours</span>
                </div>
              </div>

              {/* Form Block */}
              <div className="lg:col-span-7 w-full">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* --- STICKY BOTTOM MOBILE CTA BAR --- */}
        <div className="fixed bottom-0 left-0 right-0 z-30 lg:hidden px-4 py-3.5 bg-white/95 border-t border-gray-border backdrop-blur flex items-center justify-between shadow-lg">
          <div className="flex flex-col text-left">
            <span className="text-[10px] text-shopify-forest font-extrabold uppercase tracking-wider">Abdul Ahad</span>
            <span className="text-[8px] text-charcoal-light font-semibold">MERN & Flutter Dev</span>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="https://wa.me/923291303255"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-lg bg-[#008060] text-white font-bold text-[9px] uppercase tracking-wider flex items-center gap-1 shadow-sm cursor-pointer"
            >
              WhatsApp
            </a>
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, "#contact")}
              className="px-4 py-2 rounded-lg bg-charcoal text-white font-bold text-[9px] uppercase tracking-wider flex items-center gap-1.5 shadow-sm cursor-pointer"
            >
              Consult
            </a>
          </div>
        </div>
      </main>

      <Footer />

      {/* --- REUSABLE MODAL CASE STUDY OVERLAY --- */}
      <CaseStudy
        project={selectedProject}
        onClose={() => setSelectedSlug(null)}
      />
    </>
  );
}
