import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abdul Ahad | MERN Stack & Flutter App Developer",
  description: "Portfolio of Abdul Ahad - MERN Stack Developer and Flutter App Developer specializing in modern web applications, e-commerce solutions, and cross-platform mobile apps.",
  keywords: [
    "MERN Stack Developer",
    "Flutter App Developer",
    "React Developer",
    "Node.js Developer",
    "Full Stack Engineer",
    "Mobile App Developer",
    "E-commerce Developer",
    "Abdul Ahad",
    "Lahore Developer"
  ],
  authors: [{ name: "Abdul Ahad" }],
  creator: "Abdul Ahad",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Abdul Ahad | MERN Stack & Flutter App Developer",
    description: "Full-stack developer building high-performance web apps with MERN stack and cross-platform mobile apps with Flutter.",
    siteName: "Abdul Ahad Portfolio",
    images: [
      {
        url: "/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Abdul Ahad - MERN Stack & Flutter Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdul Ahad | MERN Stack & Flutter App Developer",
    description: "Full-stack developer building high-performance web apps with MERN stack and cross-platform mobile apps with Flutter.",
    images: ["/profile.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${plusJakartaSans.variable} h-full antialiased`}
    >
      <head>
        {/* 
          TODO: Add your Google Analytics / Vercel Analytics tracking scripts here:
          <script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID"></script>
          <script dangerouslySetInnerHTML={{ __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'YOUR_GA_ID');` }} />
        */}
      </head>
      <body className="min-h-full flex flex-col bg-white text-charcoal font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Abdul Ahad",
              "image": "/profile.jpg",
              "description": "MERN Stack & Flutter App Developer specializing in custom web applications, e-commerce platforms, and cross-platform mobile apps.",
              "telephone": "+923291303255",
              "email": "ahaddev50@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Lahore",
                "addressCountry": "PK"
              },
              "sameAs": [
                "https://github.com/abdulahad5656",
                "https://www.linkedin.com/in/abdul-ahad9",
                "https://www.instagram.com/ahad.devv"
              ]
            })
          }}
        />
        {children}
      </body>
    </html>
  );
}
