"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import BrandLogo from "./BrandLogo";

const navItems = [
  { name: "Projects", href: "#projects" },
  { name: "Inspiration", href: "#inspiration" },
  { name: "Services", href: "#services" },
  { name: "Capabilities", href: "#capabilities" },
  { name: "Workflow", href: "#workflow" },
  { name: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section tracking for active state
      const sections = ["projects", "inspiration", "services", "capabilities", "workflow", "faq", "contact"];
      let currentSection = "";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            currentSection = section;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const id = href.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of the navbar
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
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/80 backdrop-blur-md border-b border-gray-border/80 py-3.5 shadow-sm"
            : "bg-transparent py-5"
        }`}
      >
        <div className="custom-container flex items-center justify-between">
          <Link
            href="#home"
            onClick={(e) => handleScrollTo(e, "#home")}
            className="group"
          >
            <BrandLogo variant="navbar" />
          </Link>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleScrollTo(e, item.href)}
                className={`font-heading font-bold text-[11px] uppercase tracking-wider transition-colors duration-200 relative py-1 ${
                  activeSection === item.href.replace("#", "")
                    ? "text-shopify-forest"
                    : "text-charcoal-light hover:text-charcoal"
                }`}
              >
                {item.name}
                {activeSection === item.href.replace("#", "") && (
                  <motion.span
                    layoutId="navbar-active-indicator-shopify"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-shopify-forest rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, "#contact")}
              className="px-4 py-2 rounded-lg bg-shopify-forest text-white font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 hover:bg-charcoal transition-all shadow-sm"
            >
              Get Consultation
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Hamburguer button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-charcoal-light hover:text-charcoal transition-colors duration-200 rounded-lg hover:bg-charcoal/5 border border-transparent hover:border-gray-border"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[62px] z-40 lg:hidden bg-white border-b border-gray-border px-6 py-8 flex flex-col gap-6 shadow-lg"
          >
            <div className="flex flex-col gap-4 text-left">
              {navItems.map((item, idx) => (
                <motion.a
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.03 }}
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleScrollTo(e, item.href)}
                  className={`text-xs font-bold uppercase tracking-wider py-1 transition-colors duration-200 ${
                    activeSection === item.href.replace("#", "")
                      ? "text-shopify-forest"
                      : "text-charcoal-light hover:text-charcoal"
                  }`}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navItems.length * 0.03 }}
              className="h-[1px] bg-gray-border"
            />

            <motion.a
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: (navItems.length + 1) * 0.03 }}
              href="#contact"
              onClick={(e) => handleScrollTo(e, "#contact")}
              className="w-full py-3.5 rounded-lg bg-shopify-forest text-white font-bold text-center text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-sm"
            >
              Get Consultation
              <ArrowRight className="w-3.5 h-3.5" />
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
