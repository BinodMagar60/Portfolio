import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/next"
import Navbar from "@/components/Navbar";
import FloatingElements from "@/components/FloatingElements";

const inter = Inter({
  subsets: ["latin"]
})

const siteUrl = 'https://binodkaucha.com.np'
const profileImageUrl =
  "https://res.cloudinary.com/dsssvg37w/image/upload/v1752375662/nobackgroundProfilePic_ngrzao.png";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Binod Kaucha",
    template: "%s | Binod Kaucha",
  },
  description:
    "I’m Binod Kaucha, an aspiring full-stack web developer focused on building modern, responsive, fast, and SEO-optimized web applications using technologies like React, Next.js, Node.js, and MongoDB, creating engaging and user-friendly digital experiences.",
  applicationName: "Binod Kaucha Portfolio",
  keywords: [
    "Binod Kaucha",
    "Binod Kaucha Magar",
    "Binod Magar",
    "Web Developer",
    "Frontend Developer",
    "React Developer",
    "Next.js Portfolio",
    "JavaScript",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: "Binod Kaucha", url: siteUrl }],
  creator: "Binod Kaucha",
  publisher: "Binod Kaucha",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Binod Kaucha",
    title: "Binod Kaucha | Web Developer Portfolio",
    description:
      "Explore projects, skills, and contact details of Binod Kaucha, an aspiring web developer building modern web applications.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Binod Kaucha portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Binod Kaucha | Web Developer Portfolio",
    description:
      "Explore projects, skills, and contact details of Binod Kaucha, an aspiring web developer.",
    images: ["/twitter-image"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
  icons: {
    icon: [{ url: profileImageUrl }],
    shortcut: [{ url: profileImageUrl }],
    apple: [{ url: profileImageUrl }],
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Binod Kaucha Portfolio",
        description:
          "Portfolio of Binod Kaucha, aspiring web developer focused on modern web applications.",
        inLanguage: "en",
      },
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: "Binod Kaucha",
        alternateName: "Binod Magar",
        url: siteUrl,
        image: profileImageUrl,
        jobTitle: "Aspiring Web Developer",
        email: "mailto:kauchabinod888@gmail.com",
        sameAs: [
          "https://github.com/BinodMagar60",
          "https://www.linkedin.com/in/binod-magar-6bb9b7358/",
          "https://www.instagram.com/binodmagar888/",
          "https://www.facebook.com/binod.magar.31354/",
        ],
      },
    ],
  };

  return (
    <html lang="en">
      <body
        className={`${inter.className} scroll-smooth antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Toaster position="top-center" richColors/>
        <FloatingElements />
      <Navbar/>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
