"use client";

import { useState, useRef, useEffect } from "react";
import { ArrowLeftRight } from "lucide-react";

export default function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);

    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden select-none border border-dark-border cursor-ew-resize shadow-2xl"
      onMouseDown={() => setIsDragging(true)}
      onTouchStart={() => setIsDragging(true)}
    >
      {/* Before Image (Legacy Store) */}
      <div className="absolute inset-0 bg-[#1e2230] flex flex-col justify-between p-6 sm:p-12">
        <div className="flex justify-between items-center z-10">
          <span className="px-3 py-1.5 rounded-full bg-red-500/20 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-wider">
            Before Redesign
          </span>
          <span className="text-text-muted text-xs font-mono font-medium">Page Speed: 24 (Poor)</span>
        </div>
        <div className="my-auto text-center space-y-4 max-w-md mx-auto z-10">
          <div className="w-16 h-16 bg-[#2d3142] rounded-full mx-auto flex items-center justify-center border border-dark-border">
            <span className="text-xl">🐌</span>
          </div>
          <h4 className="font-heading font-semibold text-lg text-white">Legacy Shopify Template</h4>
          <p className="text-sm text-text-secondary">
            Slow loading, high bounce rate, generic template with cluttered layouts, poor mobile layout, and low 1.2% conversion rate.
          </p>
        </div>
        <div className="flex justify-between text-xs text-text-muted z-10">
          <span>Bounce Rate: 72%</span>
          <span>Load Time: 5.8s</span>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(239,68,68,0.05),transparent)] pointer-events-none" />
      </div>

      {/* After Image (Premium High-Converting Store) */}
      <div
        className="absolute inset-0 bg-[#061817] flex flex-col justify-between p-6 sm:p-12 transition-all duration-75"
        style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
      >
        <div className="flex justify-between items-center z-10">
          <span className="px-3 py-1.5 rounded-full bg-shopify/20 border border-shopify/40 text-shopify-light text-xs font-bold uppercase tracking-wider">
            After Custom Redesign
          </span>
          <span className="text-shopify-light text-xs font-mono font-bold flex items-center gap-1">
            ⚡ Page Speed: 94 (Excellent)
          </span>
        </div>
        <div className="my-auto text-center space-y-4 max-w-md mx-auto z-10">
          <div className="w-16 h-16 bg-shopify/20 rounded-full mx-auto flex items-center justify-center border border-shopify/30 shadow-lg shadow-shopify/20 animate-pulse-slow">
            <span className="text-xl">🚀</span>
          </div>
          <h4 className="font-heading font-bold text-lg text-white bg-gradient-to-r from-white to-shopify-light bg-clip-text text-transparent">
            Custom High-Conversion Storefront
          </h4>
          <p className="text-sm text-text-secondary">
            Bespoke Liquid architecture, Optimized product pages, interactive sliding cart, sticky CTA, and conversion rate increased to 3.8%.
          </p>
        </div>
        <div className="flex justify-between text-xs text-shopify-light/80 z-10">
          <span>Bounce Rate: 34% (Reduced 52%)</span>
          <span>Load Time: 1.2s (Fast)</span>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,128,96,0.1),transparent)] pointer-events-none" />
      </div>

      {/* Drag Handle Slider Bar */}
      <div
        className="absolute top-0 bottom-0 w-[2px] bg-gradient-to-b from-shopify via-white to-accent-indigo z-30 cursor-ew-resize"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white text-dark-bg border-2 border-shopify shadow-xl flex items-center justify-center transition-transform hover:scale-110 active:scale-95 z-30">
          <ArrowLeftRight className="w-4 h-4 text-dark-bg" />
        </div>
      </div>
    </div>
  );
}
