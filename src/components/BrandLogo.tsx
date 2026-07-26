"use client";

interface BrandLogoProps {
  variant?: "navbar" | "footer" | "mobile" | "favicon";
}

export default function BrandLogo({ variant = "navbar" }: BrandLogoProps) {
  const isFavicon = variant === "favicon";
  const isFooter = variant === "footer";

  return (
    <div className="flex items-center gap-2 select-none text-left">
      {/* Scalable SVG Icon: Merges App Icon silhouette with Code Angle </>. */}
      <svg
        className={`flex-shrink-0 transition-transform duration-300 group-hover:scale-105 ${
          isFavicon ? "w-10 h-10" : isFooter ? "w-9 h-9" : "w-8.5 h-8.5"
        }`}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer Hexagon/eCommerce tag background */}
        <rect width="40" height="40" rx="10" fill="#202223" />
        
        {/* Brand Green accent tag node */}
        <circle cx="10" cy="10" r="2.5" fill="#95BF47" />

        {/* Coded shopping bag bag loop */}
        <path
          d="M15 17C15 14.2386 17.2386 12 20 12C22.7614 12 25 14.2386 25 17"
          stroke="#95BF47"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* Shopping bag body */}
        <path
          d="M11 17.5C11 16.6716 11.6716 16 12.5 16H27.5C28.3284 16 29 16.6716 29 17.5V26.5C29 28.9853 26.9853 31 24.5 31H15.5C13.0147 31 11 28.9853 11 26.5V17.5Z"
          fill="#202223"
          stroke="#FFFFFF"
          strokeWidth="2"
        />

        {/* Code characters </_> inside bag body */}
        <path
          d="M16 21L14 23L16 25"
          stroke="#95BF47"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M24 21L26 23L24 25"
          stroke="#95BF47"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18 26H22"
          stroke="#FFFFFF"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>

      {/* Brand Text labels */}
      {!isFavicon && (
        <div className="flex flex-col">
          <span
            className={`font-heading font-extrabold tracking-tight text-charcoal leading-none ${
              isFooter ? "text-base" : "text-sm sm:text-base"
            }`}
          >
            Abdul Ahad
          </span>
          <span
            className={`font-sans font-black uppercase tracking-wider text-shopify-forest pt-0.5 ${
              isFooter ? "text-[8px]" : "text-[8px] sm:text-[9px]"
            }`}
          >
            MERN & Flutter Dev
          </span>
        </div>
      )}
    </div>
  );
}
