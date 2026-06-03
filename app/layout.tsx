import type { Metadata, Viewport } from "next";
import { Inter, Oxanium, Roboto_Mono, Rubik_Glitch } from "next/font/google";
import "./globals.css";
import Cursor from "@/components/Cursor";
import SmoothScroll from "./providers/SmoothScroll";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const oxanium = Oxanium({ subsets: ["latin"], variable: "--font-oxanium", display: "swap" });
const robotoMono = Roboto_Mono({ subsets: ["latin"], variable: "--font-roboto", display: "swap" });
const rubikGlitch = Rubik_Glitch({ weight: "400", subsets: ["latin"], variable: "--font-rubik", display: "swap" });

export const metadata: Metadata = {
  title: "Shahriar Araf | Full Stack Developer",
  description: "Full Stack Developer — React, Next.js, Node.js, MongoDB",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${oxanium.variable} ${robotoMono.variable} ${rubikGlitch.variable} font-sans bg-black text-white antialiased`}>
        <SmoothScroll>
          <Cursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}