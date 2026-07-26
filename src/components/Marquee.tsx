"use client";

import React from "react";

interface MarqueeProps {
  direction?: "left" | "right";
  speed?: "slow" | "normal" | "fast";
  pauseOnHover?: boolean;
  children: React.ReactNode;
}

export default function Marquee({
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
  children,
}: MarqueeProps) {
  const getSpeedClass = () => {
    switch (speed) {
      case "slow":
        return direction === "left"
          ? "animate-[marqueeLeft_50s_linear_infinite]"
          : "animate-[marqueeRight_50s_linear_infinite]";
      case "fast":
        return direction === "left"
          ? "animate-[marqueeLeft_20s_linear_infinite]"
          : "animate-[marqueeRight_20s_linear_infinite]";
      default:
        return direction === "left"
          ? "animate-marquee-left"
          : "animate-marquee-right";
    }
  };

  return (
    <div className="w-full overflow-hidden flex relative select-none">
      {/* Optional gradient overlays on the sides for a smooth fade out */}
      <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-linen to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-linen to-transparent z-10 pointer-events-none" />

      <div
        className={`flex whitespace-nowrap gap-8 shrink-0 py-3 ${getSpeedClass()} ${
          pauseOnHover ? "hover:[animation-play-state:paused]" : ""
        }`}
      >
        {children}
      </div>
      {/* Duplicate for infinite loops */}
      <div
        className={`flex whitespace-nowrap gap-8 shrink-0 py-3 ${getSpeedClass()} ${
          pauseOnHover ? "hover:[animation-play-state:paused]" : ""
        }`}
        aria-hidden="true"
      >
        {children}
      </div>
    </div>
  );
}
