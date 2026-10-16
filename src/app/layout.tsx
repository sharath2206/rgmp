import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rajiv Gandhi Memorial Polytechnic (RGMP) | Premier Bangalore Polytechnic College",
  description:
    "Rajiv Gandhi Memorial Polytechnic (RGMP), established in 1992 in Mallathahalli, Bangalore. Approved by AICTE, New Delhi & Recognized by Govt. of Karnataka. Empowering Futures Through Quality Technical Education.",
  keywords:
    "RGMP, Rajiv Gandhi Memorial Polytechnic, Polytechnic College Bangalore, Diploma in Engineering Bangalore, Mallathahalli Polytechnic, AICTE approved polytechnic, DTE Karnataka diploma",
  openGraph: {
    title: "Rajiv Gandhi Memorial Polytechnic (RGMP) Bangalore",
    description: "Empowering Futures Through Education - Established 1992",
    url: "https://rgmp.in",
    siteName: "RGMP",
    locale: "en_IN",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/ragmp_favicon.png", type: "image/png" },
      { url: "/rgmp_logo.svg", type: "image/svg+xml" },
    ],
    shortcut: "/ragmp_favicon.png",
    apple: "/ragmp_favicon.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} scroll-smooth`}
    >
      <head>
        <link rel="icon" href="/ragmp_favicon.png" type="image/png" sizes="any" />
        <link rel="apple-touch-icon" href="/ragmp_favicon.png" />
      </head>
      <body
        suppressHydrationWarning
        className="bg-white text-slate-900 antialiased overflow-x-hidden selection:bg-blue-100 selection:text-blue-900"
      >
        {children}
      </body>
    </html>
  );
}
