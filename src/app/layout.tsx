import type { Metadata, Viewport } from "next";

import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://connect-dating.app"),
  title: {
    default: "CONNECT — The Dating App That Actually Works | Investor Pitch Deck",
    template: "%s | CONNECT",
  },
  description: "CONNECT is an AI-powered dating platform that matches on emotion, not just looks. Bank-grade verification eliminates fakes, anti-ghosting reputation system promotes respect, and community-first design drives 80% retention. ₹100+ crore market by Year 3.",
  keywords: [
    "dating app",
    "AI dating",
    "dating app pitch deck",
    "dating startup",
    "CONNECT dating",
    "anti-ghosting",
    "emotional matching",
    "dating app India",
    "verified dating",
    "community dating",
    "trust-first dating",
    "investor pitch",
    "startup pitch deck",
    "dating app business model",
  ],
  authors: [{ name: "elevenX" }],
  creator: "elevenX",
  publisher: "elevenX",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://connect-dating.app",
    siteName: "CONNECT",
    title: "CONNECT — The Dating App That Actually Works | Pitch Deck",
    description: "An AI-powered dating platform that matches on emotion, not just looks. Eliminates fakes, prevents ghosting, and actually works. ₹1,400 crore market by 2030.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CONNECT — The Dating App That Actually Works",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CONNECT — AI-Powered Dating App | Pitch Deck",
    description: "An AI-powered dating platform that matches on emotion, not just looks. Eliminates fakes, prevents ghosting, and actually works.",
    images: ["/twitter-image.png"],
    creator: "@connectdating",
    site: "@connectdating",
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
  alternates: {
    canonical: "https://connect-dating.app",
  },
  category: "Social Networking",
  classification: "Dating Application",
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "CONNECT",
    "application-name": "CONNECT",
    "mobile-web-app-capable": "yes",
    "msapplication-TileColor": "#4CAF50",
    "format-detection": "telephone=no",
  },
  verification: {
    // Add your verification codes when available
    // google: "your-google-verification-code",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "CONNECT",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#4CAF50",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "CONNECT",
    "applicationCategory": "SocialNetworkingApplication",
    "operatingSystem": "iOS, Android, Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "INR",
    },
    "description": "AI-powered dating app that matches on emotion, not just looks. Bank-grade verification, anti-ghosting system, and community-first design.",
    "featureList": [
      "Bank-Grade Verification",
      "Emotional AI Matching",
      "Anti-Ghosting Reputation System",
      "Interest-Based Communities",
      "Proximity Serendipity",
      "Video-First Profiles",
      "Smart Curation (5-7 matches/day)",
      "Women's Safety Features",
      "Ethical & Transparent Design",
    ],
    "softwareVersion": "1.0",
  };

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "elevenX",
    "url": "https://elevenx.in",
    "description": "App development company specializing in dating, social, fintech, and marketplace applications. 100+ apps built, 50M+ users served.",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Sales",
      "email": "srivastavaavi26@gmail.com",
    },
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
