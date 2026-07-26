"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";
import BrandLogo from "./BrandLogo";

export default function Footer() {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
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
    <footer className="border-t border-gray-border bg-[#FAFAFA] pt-20 pb-12 relative overflow-hidden text-charcoal">
      <div className="custom-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Logo & Statement */}
          <div className="space-y-5 text-left">
            <Link
              href="#home"
              onClick={(e) => handleScrollTo(e, "home")}
              className="group"
            >
              <BrandLogo variant="footer" />
            </Link>
            <p className="text-charcoal-light text-xs leading-relaxed max-w-xs font-semibold">
              Full-Stack MERN & Flutter Developer building high-performance web applications, e-commerce platforms, and cross-platform mobile apps.
            </p>
            <div className="flex items-center gap-2 pt-1">
              <a
                href="https://www.linkedin.com/in/abdul-ahad9"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white border border-gray-border flex items-center justify-center text-charcoal hover:bg-shopify-forest hover:text-white transition-all shadow-sm"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a
                href="https://github.com/abdulahad5656"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white border border-gray-border flex items-center justify-center text-charcoal hover:bg-shopify-forest hover:text-white transition-all shadow-sm"
                aria-label="GitHub"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </a>
              <a
                href="https://wa.me/923291303255"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white border border-gray-border flex items-center justify-center text-charcoal hover:bg-[#25D366] hover:text-white transition-all shadow-sm"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/ahad.devv"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white border border-gray-border flex items-center justify-center text-charcoal hover:bg-[#E1306C] hover:text-white transition-all shadow-sm"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-5 text-left md:pl-8">
            <h4 className="font-heading font-extrabold text-[10px] uppercase tracking-widest text-charcoal">
              Navigation
            </h4>
            <ul className="space-y-3 text-xs font-bold">
              {[
                { name: "Projects Showcase", id: "projects" },
                { name: "Design Inspiration", id: "inspiration" },
                { name: "Services", id: "services" },
                { name: "Capabilities", id: "capabilities" },
                { name: "Timeline Workflow", id: "workflow" },
                { name: "FAQ Help", id: "faq" },
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => handleScrollTo(e, item.id)}
                    className="text-charcoal-light hover:text-shopify-forest transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Core Skills & Stack */}
          <div className="space-y-5 text-left">
            <h4 className="font-heading font-extrabold text-[10px] uppercase tracking-widest text-charcoal">
              Core Stack
            </h4>
            <ul className="space-y-3 text-xs font-bold text-charcoal-light">
              <li>
                <span className="hover:text-charcoal transition-colors">MERN Stack (MongoDB, Express, React, Node)</span>
              </li>
              <li>
                <span className="hover:text-charcoal transition-colors">Flutter & Dart Mobile Apps</span>
              </li>
              <li>
                <span className="hover:text-charcoal transition-colors">E-Commerce & Liquid Themes</span>
              </li>
              <li>
                <span className="hover:text-charcoal transition-colors">RESTful APIs & Firebase Integration</span>
              </li>
              <li>
                <span className="hover:text-charcoal transition-colors">Speed & UI/UX Optimization</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact details & Partner Badges */}
          <div className="space-y-6 text-left">
            <div className="space-y-4">
              <h4 className="font-heading font-extrabold text-[10px] uppercase tracking-widest text-charcoal">
                Contact Info
              </h4>
              <ul className="space-y-3 text-xs font-bold text-charcoal-light">
                <li className="flex items-center gap-2.5">
                  <Mail className="w-3.5 h-3.5 text-shopify-forest" />
                  <a href="mailto:ahaddev50@gmail.com" className="hover:text-shopify-forest transition-colors">
                    ahaddev50@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone className="w-3.5 h-3.5 text-shopify-forest" />
                  <a href="tel:+923291303255" className="hover:text-shopify-forest transition-colors">
                    +92 329 1303255
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <MapPin className="w-3.5 h-3.5 text-shopify-forest" />
                  <span>Lahore, Pakistan</span>
                </li>
              </ul>
            </div>

            <div className="flex gap-2 pt-1.5">
              <div className="px-3 py-1.5 rounded-lg bg-white border border-gray-border flex items-center gap-1.5 shadow-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-shopify-forest" />
                <span className="text-[8px] font-black text-charcoal uppercase tracking-wider">MERN Developer</span>
              </div>
              <div className="px-3 py-1.5 rounded-lg bg-white border border-gray-border flex items-center gap-1.5 shadow-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-[#95BF47]" />
                <span className="text-[8px] font-black text-charcoal uppercase tracking-wider">Flutter Developer</span>
              </div>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-gray-border flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-charcoal-light font-bold uppercase tracking-wider">
          <p>© {new Date().getFullYear()} Abdul Ahad. All Rights Reserved.</p>
          <div className="flex gap-5">
            <Link href="#projects" onClick={(e) => handleScrollTo(e, "projects")} className="hover:text-shopify-forest transition-colors">
              Terms & Conditions
            </Link>
            <Link href="#contact" onClick={(e) => handleScrollTo(e, "contact")} className="hover:text-shopify-forest transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
