import type { Metadata } from "next";
import { Inter, Oxanium, Roboto_Mono, Rubik_Glitch } from "next/font/google";
import "./globals.css";

// 1. Setup Fonts with simple variable names
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const oxanium = Oxanium({
  subsets: ["latin"],
  variable: "--font-oxanium",
  display: "swap",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});

const rubikGlitch = Rubik_Glitch({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-rubik",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shahriar Araf",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* 2. Pass all variables here. CHECK THE SPACES between variables. */}
      <body
        className={`${inter.variable} ${oxanium.variable} ${robotoMono.variable} ${rubikGlitch.variable} font-sans bg-black text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}