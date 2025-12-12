import type { Metadata } from "next";
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
  metadataBase: new URL("https://intellirite.com"),
  title: {
    default: "Intellirite - AI-Powered Writing IDE for Students, Researchers & Writers",
    template: "%s | Intellirite",
  },
  description: "Intellirite is the AI-first writing environment for serious writers. Like Cursor for coding, but for writing. Multi-file workspace, whole-project AI context, built-in citations, plagiarism-free AI writing, and Turnitin-compliant papers. Perfect for research papers, theses, books, and academic writing.",
  keywords: [
    "AI writing tool",
    "writing IDE",
    "academic writing software",
    "research paper writing",
    "thesis writing tool",
    "AI writing assistant",
    "plagiarism-free AI writing",
    "citation generator",
    "Zotero alternative",
    "academic writing platform",
    "multi-file writing",
    "AI text editor",
    "research paper editor",
    "Turnitin compliant",
    "academic integrity",
    "PhD writing tool",
    "dissertation writing",
    "literature review tool",
    "academic citation tool",
    "writing workspace",
    "AI-powered writing",
    "academic research tool",
    "paper writing software",
    "thesis management",
    "research collaboration tool",
  ],
  authors: [{ name: "Intellirite Team" }],
  creator: "Intellirite",
  publisher: "Intellirite",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://intellirite.com",
    siteName: "Intellirite",
    title: "Intellirite - AI-Powered Writing IDE for Students, Researchers & Writers",
    description: "The AI-first writing environment for serious writers. Multi-file workspace, whole-project AI context, built-in citations, and plagiarism-free AI writing. Perfect for research papers, theses, and academic writing.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Intellirite - AI-Powered Writing IDE",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Intellirite - AI-Powered Writing IDE for Students & Researchers",
    description: "The AI-first writing environment for serious writers. Multi-file workspace, whole-project AI context, and plagiarism-free AI writing.",
    images: ["/twitter-image.png"],
    creator: "@intellirite",
    site: "@intellirite",
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
    canonical: "https://intellirite.com",
  },
  category: "Education Technology",
  classification: "Writing Software",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    themeColor: "#4CAF50",
  },
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "Intellirite",
    "application-name": "Intellirite",
    "mobile-web-app-capable": "yes",
    "msapplication-TileColor": "#4CAF50",
    "format-detection": "telephone=no",
  },
  verification: {
    // Add your verification codes when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // yahoo: "your-yahoo-verification-code",
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
    title: "Intellirite",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Intellirite",
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "1250",
    },
    "description": "AI-powered writing IDE for students, researchers, and serious writers. Multi-file workspace with whole-project AI context, built-in citations, and plagiarism-free writing.",
    "featureList": [
      "Multi-File Writing Workspace",
      "Inline AI Text Editor",
      "Whole-Project AI Context",
      "AI Writing with No Plagiarism",
      "Built-in Citation Engine",
      "Turnitin Compliant Papers",
      "Real-Time Collaborative Workspace",
      "Convert Papers to Podcasts",
      "PDF Summarizing",
    ],
    "screenshot": "https://intellirite.com/screenshot.png",
    "softwareVersion": "1.0",
    "releaseNotes": "Initial release of Intellirite - The AI Writing IDE",
  };

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Intellirite",
    "url": "https://intellirite.com",
    "logo": "https://intellirite.com/logo.png",
    "description": "AI-powered writing IDE for academic and professional writing",
    "sameAs": [
      "https://twitter.com/intellirite",
      "https://linkedin.com/company/intellirite",
      "https://github.com/intellirite",
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Support",
      "email": "support@intellirite.com",
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
