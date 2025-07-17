import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'intern',
  description: 'your AI intern + crypto wallet',
  metadataBase: new URL('https://www.intern.xyz'),
  openGraph: {
    title: 'intern',
    description: 'your AI intern + crypto wallet',
    url: 'https://www.intern.xyz',
    siteName: 'intern',
    images: [
      {
        url: '/intern-tbn.png',
        width: 1200,
        height: 630,
        alt: 'og-image',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'intern',
    description: 'your AI intern + crypto wallet',
    creator: '@intern_uwu',
    images: ['/intern-tbn.png'],
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script
        defer
        src="https://analytics.zxstim.com/script.js"
        data-website-id="8de8a545-024e-4c76-bbca-172bdb0c2020"
      />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
