import type { Metadata } from "next";
import Script from 'next/script'
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'intern - shitposting for sale',
  description: 'shitposting for sale',
  metadataBase: new URL('https://www.intern.xyz'),
  openGraph: {
    title: 'intern - shitposting for sale',
    description: 'shitposting for sale',
    url: 'https://www.intern.xyz',
    siteName: 'BlockCMD',
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
    title: 'intern - shitposting for sale',
    description: 'shitposting for sale',
    creator: '@zxstim',
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
      <Script defer data-domain="intern.xyz" src="https://analytics.pyhash.com/js/script.js"></Script>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
