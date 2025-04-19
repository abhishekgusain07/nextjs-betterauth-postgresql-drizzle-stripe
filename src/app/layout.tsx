import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { PostHogProvider } from "../components/PostHogProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PrintMoney - SaaS Template",
  description: "Comprehensive SaaS starter template to ship your ideas blazingly fast",
  openGraph: {
    title: "PrintMoney - SaaS Template",
    description: "Comprehensive SaaS starter template to ship your ideas blazingly fast",
    images: [
      {
        url: "/printmoney.png",
        width: 1200,
        height: 630,
        alt: "PrintMoney SaaS Template",
      }
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PrintMoney - SaaS Template",
    description: "Comprehensive SaaS starter template to ship your ideas blazingly fast",
    images: ["/printmoney.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <PostHogProvider>
          <Toaster />
          {children}
        </PostHogProvider>
      </body>
    </html>
  );
}
