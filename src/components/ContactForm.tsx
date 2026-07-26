"use client";

import { useState } from "react";
import { Send, CheckCircle2, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    storeUrl: "",
    projectType: "redesign",
    budget: "$2k - $5k",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // Simulate submission flow
    setTimeout(() => {
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        storeUrl: "",
        projectType: "redesign",
        budget: "$2k - $5k",
        message: "",
      });
    }, 1200);
  };

  return (
    <div className="w-full">
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            className="p-8 sm:p-10 rounded-2xl bg-white border border-shopify-forest/20 flex flex-col items-center text-center space-y-6 shadow-sm"
          >
            <div className="w-12 h-12 rounded-full bg-shopify-forest/10 flex items-center justify-center text-shopify-forest border border-shopify-forest/20">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h3 className="font-heading font-extrabold text-lg text-charcoal">Proposal Sent Successfully</h3>
              <p className="text-charcoal-light text-xs max-w-sm mx-auto leading-relaxed">
                I will review your project details and email you a technical blueprint within 12 hours.
              </p>
            </div>
            <button
              onClick={() => setStatus("idle")}
              className="px-5 py-2.5 rounded-lg border border-gray-border hover:bg-gray-bg text-[10px] font-bold uppercase tracking-wider transition-colors"
            >
              Send Another Request
            </button>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="p-8 sm:p-10 rounded-3xl bg-white border border-gray-border space-y-6 shadow-sm text-left"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label htmlFor="name" className="text-[10px] font-bold text-charcoal uppercase tracking-wider block">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl shopify-input text-xs font-semibold"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="email" className="text-[10px] font-bold text-charcoal uppercase tracking-wider block">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@brand.com"
                  className="w-full px-4 py-3 rounded-xl shopify-input text-xs font-semibold"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label htmlFor="storeUrl" className="text-[10px] font-bold text-charcoal uppercase tracking-wider block">
                  Current Project URL <span className="opacity-60 font-medium">(Optional)</span>
                </label>
                <input
                  type="text"
                  id="storeUrl"
                  value={formData.storeUrl}
                  onChange={(e) => setFormData({ ...formData, storeUrl: e.target.value })}
                  placeholder="www.mybrand.com"
                  className="w-full px-4 py-3 rounded-xl shopify-input text-xs font-semibold"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="projectType" className="text-[10px] font-bold text-charcoal uppercase tracking-wider block">
                  Project Goal
                </label>
                <select
                  id="projectType"
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl shopify-input text-xs font-semibold cursor-pointer appearance-none bg-white"
                  style={{ backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 20 20\'%3e%3cpath stroke=\'%236d7175\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'1.5\' d=\'M6 8l4 4 4-4\'/%3e%3c/svg%3e")', backgroundPosition: 'right 1.25rem center', backgroundSize: '1.25em 1.25em', backgroundRepeat: 'no-repeat' }}
                >
                  <option value="redesign">Full-Stack Web App</option>
                  <option value="setup">Mobile App (Flutter)</option>
                  <option value="liquid">API & Backend Integration</option>
                  <option value="speed">Database Design & Optimization</option>
                  <option value="apps">UI/UX & Frontend Development</option>
                </select>
              </div>
            </div>

            <div className="space-y-2.5">
              <span className="text-[10px] font-bold text-charcoal uppercase tracking-wider block">
                Estimated Project Budget
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {["<$2k", "$2k - $5k", "$5k - $10k", "$10k+"].map((budgetOption) => (
                  <button
                    key={budgetOption}
                    type="button"
                    onClick={() => setFormData({ ...formData, budget: budgetOption })}
                    className={`py-3 text-center text-[10px] font-black uppercase tracking-wider rounded-xl border transition-all duration-200 cursor-pointer ${
                      formData.budget === budgetOption
                        ? "bg-shopify-forest text-white border-shopify-forest shadow-sm"
                        : "border-gray-border hover:border-charcoal/20 text-charcoal-light hover:text-charcoal bg-gray-bg/40"
                    }`}
                  >
                    {budgetOption}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="message" className="text-[10px] font-bold text-charcoal uppercase tracking-wider block">
                Describe Your Goals & Requirements
              </label>
              <textarea
                id="message"
                required
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Share details about your project, requirements, and custom features you want to build..."
                className="w-full px-4 py-3 rounded-xl shopify-input text-xs font-semibold resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full py-4 rounded-xl bg-shopify-forest hover:bg-charcoal text-white font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-1.5 transition-colors disabled:opacity-50 disabled:cursor-not-allowed group cursor-pointer shadow-sm"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Submitting Request...
                </>
              ) : (
                <>
                  Submit Project Request
                  <Send className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </>
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
