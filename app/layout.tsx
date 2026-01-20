import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NextStepProvider, NextStep } from 'nextstepjs';
import { steps } from '@/lib/tourSteps';
import TourCard from '@/components/TourCard';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Otto - Track your subscriptions and bills",
  description: "Track your subscriptions and bills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <NextStepProvider>
          <NextStep steps={steps} cardComponent={TourCard}>
            {children}
          </NextStep>
        </NextStepProvider>
      </body>
    </html>
  );
}
