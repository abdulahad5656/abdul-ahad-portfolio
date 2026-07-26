"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What technologies do you use for web development?",
    answer: "I primarily use the MERN stack (MongoDB, Express, React, Node.js) combined with modern tools like Next.js, Tailwind CSS, and TypeScript for scalable, high-performance web applications.",
  },
  {
    question: "Can you build mobile applications for both iOS and Android?",
    answer: "Yes, I specialize in Flutter, which allows me to write a single Dart codebase and compile it into natively performing apps for both iOS and Android, saving time and reducing maintenance costs.",
  },
  {
    question: "Do you provide custom API development and database design?",
    answer: "Absolutely. I design robust RESTful APIs using Node.js and Express, integrated with highly optimized MongoDB schemas tailored to your specific application data requirements.",
  },
  {
    question: "How do you ensure application security and performance?",
    answer: "I implement industry-standard practices including JWT authentication, data encryption, secure API endpoints, and optimized database indexing to ensure both security and fast response times.",
  },
  {
    question: "What is your process for testing and deploying applications?",
    answer: "I rigorously test all components across different browsers and devices. For deployment, I typically use cloud platforms like Vercel, AWS, or Firebase, setting up automated CI/CD pipelines when necessary.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-3xl mx-auto space-y-3.5">
      {faqs.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className={`rounded-xl border transition-all duration-200 ${
              isOpen
                ? "bg-white border-shopify-forest/30 shadow-sm"
                : "bg-white border-gray-border hover:border-charcoal/20"
            }`}
          >
            <button
              onClick={() => toggleFAQ(idx)}
              className="w-full px-5 py-4 flex items-center justify-between text-left cursor-pointer group text-charcoal"
            >
              <span className={`font-heading font-bold text-xs sm:text-sm uppercase tracking-wider transition-colors duration-150 ${
                isOpen ? "text-shopify-forest" : "text-charcoal group-hover:text-shopify-forest"
              }`}>
                {faq.question}
              </span>
              <span className={`p-1.5 rounded-lg transition-colors duration-200 ${
                isOpen ? "bg-shopify-forest/10 text-shopify-forest" : "bg-gray-bg text-charcoal-light group-hover:bg-gray-border"
              }`}>
                {isOpen ? <Minus className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-4.5 pt-1 text-[11px] sm:text-xs text-charcoal-light leading-relaxed border-t border-gray-border bg-gray-bg/20">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
