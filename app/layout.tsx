import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gills Tour & Travels - Himalayan Tours & Transfers",
  manifest: "/manifest.json",

  description:
    "Explore Himachal with comfort and safety. Book local sightseeing, outstation trips, and holiday packages with professional drivers and clean cars.",
  generator: "Rahul",
  icons: {
    icon: [
      {
        //   url: "/icon-light-32x32.png",
        //   media: "(prefers-color-scheme: light)",
        // },
        // {
        //   url: "/icon-dark-32x32.png",
        //   media: "(prefers-color-scheme: dark)",
        // },
        // {
        url: "/l.png",
        type: "image/svg+xml",
      },
    ],
    apple: "/l.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-BVDJVK6S7K"
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BVDJVK6S7K', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>

      <body className="font-sans antialiased">
        {children}

        {/* Vercel Analytics */}
        <Analytics />
      </body>
    </html>
  );
}
