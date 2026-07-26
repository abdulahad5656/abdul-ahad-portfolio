"use client";

import { useState, useEffect, useRef } from "react";

interface DeviceMockupProps {
  storeName: string;
  storeUrl: string;
  primaryColor: string;
  category?: string;
  desktopPath?: string;
  mobilePath?: string;
}

export default function DeviceMockup({
  storeName,
  storeUrl,
  primaryColor,
  desktopPath,
  mobilePath
}: DeviceMockupProps) {
  const [desktopLoaded, setDesktopLoaded] = useState(false);
  const [mobileLoaded, setMobileLoaded] = useState(false);

  const desktopRef = useRef<HTMLImageElement>(null);
  const mobileRef = useRef<HTMLImageElement>(null);

  // Use local project path if provided, fallback to Microlink API screenshot builder
  const finalDesktopSrc = desktopPath || `https://api.microlink.io/?url=${encodeURIComponent(storeUrl)}&screenshot=true&embed=screenshot.url&viewport.width=1280&viewport.height=800&viewport.deviceScaleFactor=1`;
  const finalMobileSrc = mobilePath || `https://api.microlink.io/?url=${encodeURIComponent(storeUrl)}&screenshot=true&embed=screenshot.url&viewport.width=375&viewport.height=812&viewport.isMobile=true&viewport.deviceScaleFactor=1.5`;

  // Fix React onLoad event listener bug for already cached images
  useEffect(() => {
    if (desktopRef.current?.complete) {
      setDesktopLoaded(true);
    }
  }, [finalDesktopSrc]);

  useEffect(() => {
    if (mobileRef.current?.complete) {
      setMobileLoaded(true);
    }
  }, [finalMobileSrc]);

  return (
    <div className="w-full flex flex-col md:relative md:block md:w-full md:aspect-[16/10] select-none gap-5 md:gap-0">
      
      {/* 1. BROWSER WINDOW MOCKUP */}
      <div className="relative w-full aspect-[16/10] md:aspect-auto md:absolute md:inset-0 md:w-[90%] md:h-[90%] md:top-0 md:left-0 rounded-xl border border-gray-border bg-white overflow-hidden shadow-sm flex flex-col z-10">
        {/* Safari Bar */}
        <div className="px-3 py-2 bg-gray-bg border-b border-gray-border flex items-center justify-between">
          <div className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
          </div>
          {/* Address URL */}
          <div className="flex-grow max-w-xs mx-auto px-3 py-0.5 rounded-md bg-white border border-gray-border text-[9px] font-mono text-charcoal-light flex items-center justify-between shadow-inner">
            <span className="truncate">{storeUrl.replace("https://", "").replace("www.", "")}</span>
            <span className="text-[7px] text-[#008060] font-bold">🔒 Secure</span>
          </div>
          <div className="w-10" />
        </div>

        {/* Browser screenshot container */}
        <div className="flex-grow bg-white relative overflow-hidden flex items-center justify-center">
          {/* Fallback card shown underneath the image */}
          <div className="absolute inset-0 flex flex-col items-center justify-center space-y-2 p-6 text-center bg-white z-0">
            <span className="text-xl animate-float">🛍️</span>
            <h5 className="font-heading font-extrabold text-xs text-charcoal">{storeName}</h5>
            <span className="text-[8px] uppercase tracking-wider text-charcoal-light font-bold">Desktop View</span>
          </div>

          <img
            ref={desktopRef}
            src={finalDesktopSrc}
            alt={`${storeName} Desktop Screenshot`}
            onLoad={() => setDesktopLoaded(true)}
            onError={() => setDesktopLoaded(true)}
            className={`w-full h-full object-cover object-top bg-white relative z-10 transition-opacity duration-500 ${
              desktopLoaded ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
      </div>

      {/* 2. OVERLAPPING MOBILE PHONE MOCKUP */}
      <div className="relative mx-auto w-[150px] sm:w-[170px] aspect-[9/18] md:absolute md:w-[24%] md:aspect-[9/18] md:right-0 md:bottom-0 rounded-2xl bg-charcoal p-1 border border-charcoal shadow-lg overflow-hidden flex flex-col transform md:translate-y-1 z-20">
        {/* Phone boundary */}
        <div className="w-full h-full bg-white rounded-xl overflow-hidden relative flex flex-col">
          {/* Phone speaker */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-2.5 w-10 bg-charcoal rounded-b-md z-20" />
          
          {/* Phone screenshot container */}
          <div className="flex-grow bg-white relative overflow-hidden flex items-center justify-center">
            {/* Fallback card shown underneath the image */}
            <div className="absolute inset-0 flex items-center justify-center bg-white z-0 text-xs">
              📱
            </div>

            <img
              ref={mobileRef}
              src={finalMobileSrc}
              alt={`${storeName} Mobile Screenshot`}
              onLoad={() => setMobileLoaded(true)}
              onError={() => setMobileLoaded(true)}
              className={`w-full h-full object-cover object-top bg-white relative z-10 transition-opacity duration-500 ${
                mobileLoaded ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
