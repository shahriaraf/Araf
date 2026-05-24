"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  ArrowRight,
  Github,
  Linkedin,
  Facebook,
  Download,
  Terminal,
} from "lucide-react";

// --- SOCIAL LINKS CONFIGURATION ---
const socialLinks = [
  { icon: Github, href: "https://github.com/shahriaraf", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/shoumo-shahriar-araf", label: "LinkedIn" },
  { icon: Facebook, href: "https://www.facebook.com/shahriar.araf.3", label: "Facebook" },
];

// --- SCRAMBLE TEXT LOGIC ---
const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*";
const ScrambleText = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState(text);
  useEffect(() => {
    let interval: NodeJS.Timeout;
    let iteration = 0;
    const scramble = () => {
      clearInterval(interval);
      interval = setInterval(() => {
        setDisplayText(() =>
          text
            .split("")
            .map((letter, index) => {
              if (index < iteration) return text[index];
              return CHARS[Math.floor(Math.random() * CHARS.length)];
            })
            .join("")
        );
        if (iteration >= text.length) clearInterval(interval);
        iteration += 1 / 2;
      }, 50);
    };
    scramble();
    return () => clearInterval(interval);
  }, [text]);
  return <span className="font-mono text-[#b45555]">{displayText}</span>;
};

export default function Banner() {
  const roles = ["Full Stack Developer", "Frontend Developer", "Web Designer"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative max-w-7xl mx-auto min-h-screen bg-black text-white overflow-hidden flex items-center justify-center px-4 sm:px-6"
    >
      {/* --- DYNAMIC SPOTLIGHT EFFECT --- */}
      <div
        className="absolute inset-0 pointer-events-none z-0 blur-[100px] opacity-20 transition-opacity duration-500"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, #491717, transparent 40%)`,
        }}
      />

      {/* --- GLITCH & HOLOGRAM STYLES --- */}
      <style jsx>{`
        .glitch-text { position: relative; }
        .glitch-text::before,
        .glitch-text::after {
          content: attr(data-text);
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          background: black;
        }
        .glitch-text::before {
          left: -2px;
          text-shadow: 2px 0 #00c2ff;
          clip-path: inset(0 900px 0 0);
          animation: noise-anim-2 3s infinite linear alternate-reverse;
        }
        .glitch-text::after {
          left: 2px;
          text-shadow: -2px 0 #ff00c1;
          clip-path: inset(0 900px 0 0);
          animation: noise-anim 2s infinite linear alternate-reverse;
        }
        .hologram-wrapper {
          position: relative;
          animation: signal-flicker 5s infinite linear;
          filter: contrast(1.1) brightness(1.1) drop-shadow(0 0 15px rgba(0,0,0,0.8));
        }
        .glitch-layer {
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          background: url("/assets/IMG_20250405_234952.jpg") no-repeat center top;
          background-size: cover;
          opacity: 0;
          mix-blend-mode: screen;
        }
        .glitch-layer.cyan { filter: drop-shadow(-4px 0px cyan); animation: rgb-shift-cyan 5s infinite linear; }
        .glitch-layer.red  { filter: drop-shadow(4px 0px red);  animation: rgb-shift-red 5s infinite linear; }

        @keyframes signal-flicker {
          0%   { opacity: 1; transform: scale(1) skew(0deg); filter: blur(0px); }
          80%  { opacity: 1; transform: scale(1) skew(0deg); filter: blur(0px); }
          81%  { opacity: 0.2; transform: scale(1.02) skew(10deg); filter: blur(2px); }
          82%  { opacity: 0.8; transform: scale(0.98) skew(-5deg); filter: blur(0px); }
          85%  { opacity: 0; transform: scale(1.1) skew(20deg); }
          88%  { opacity: 0; }
          89%  { opacity: 0.4; transform: scale(1) skew(0deg); filter: sepia(1); }
          91%  { opacity: 1; }
          95%  { opacity: 0.5; transform: translateX(-10px); }
          96%  { opacity: 1; transform: translateX(0); }
          100% { opacity: 1; }
        }
        @keyframes rgb-shift-cyan {
          0%, 80% { opacity: 0; transform: translateX(0); }
          81% { opacity: 0.6; transform: translateX(-10px); clip-path: inset(10% 0 60% 0); }
          85% { opacity: 0; }
          95% { opacity: 0.6; transform: translateX(5px); clip-path: inset(80% 0 5% 0); }
          96% { opacity: 0; }
        }
        @keyframes rgb-shift-red {
          0%, 80% { opacity: 0; transform: translateX(0); }
          81% { opacity: 0.6; transform: translateX(10px); clip-path: inset(40% 0 10% 0); }
          85% { opacity: 0; }
          95% { opacity: 0.6; transform: translateX(-5px); clip-path: inset(5% 0 80% 0); }
          96% { opacity: 0; }
        }
        @keyframes noise-anim {
          0%   { clip-path: inset(20% 0 80% 0); }
          20%  { clip-path: inset(60% 0 1% 0); }
          40%  { clip-path: inset(40% 0 50% 0); }
          60%  { clip-path: inset(80% 0 5% 0); }
          80%  { clip-path: inset(10% 0 70% 0); }
          100% { clip-path: inset(30% 0 20% 0); }
        }
        @keyframes noise-anim-2 {
          0%   { clip-path: inset(10% 0 60% 0); }
          20%  { clip-path: inset(30% 0 10% 0); }
          40%  { clip-path: inset(70% 0 20% 0); }
          60%  { clip-path: inset(20% 0 50% 0); }
          80%  { clip-path: inset(50% 0 30% 0); }
          100% { clip-path: inset(5% 0 80% 0); }
        }
      `}</style>

      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">

        {/* --- LEFT: CONTENT --- */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6 sm:space-y-8 lg:space-y-10 order-2 lg:order-1 pt-6 sm:pt-10 lg:pt-0 relative z-20 text-center lg:text-left">

          {/* Title */}
          <div className="relative">
            <h1 className="text-5xl font-semibold sm:text-7xl md:text-8xl lg:text-[7rem] tracking-wide leading-[0.85] text-white">
              <div className="glitch-text font-cyber relative inline-block mb-2" data-text="Shahriar">
                Shahriar
              </div>
              <br />
              <div
                className="relative font-space inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#491717] via-red-600 to-[#491717]"
                data-text="Araf"
              >
                Araf
              </div>
            </h1>
          </div>

          {/* Terminal */}
          <div className="relative group w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto lg:mx-0">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#b45555] to-red-900 rounded-lg blur opacity-30 group-hover:opacity-75 transition duration-1000"></div>
            <div className="relative flex items-center bg-black/80 backdrop-blur-xl border border-white/10 rounded-lg px-4 sm:px-6 py-3 sm:py-4">
              <Terminal size={20} className="text-[#b45555] mr-3 sm:mr-4 shrink-0" />
              <div className="text-base sm:text-xl md:text-2xl lg:text-3xl font-medium font-art truncate">
                <ScrambleText text={roles[roleIndex]} />
                <span className="animate-pulse inline-block w-1.5 h-4 sm:h-5 bg-[#b45555] ml-1 sm:ml-2 align-middle"></span>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-white/80 text-sm sm:text-base lg:text-lg max-w-lg mx-auto lg:mx-0 leading-relaxed border-l-2 border-white/10 pl-4 sm:pl-6 hover:border-[#b45555] transition-colors duration-300 text-left">
            I build scalable, pixel-perfect digital experiences. Turning complex problems into elegant code.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 lg:gap-6 pt-2">
            <a href="#projects" className="group relative text-xs sm:text-sm lg:text-base px-5 sm:px-7 lg:px-8 py-2.5 sm:py-3 lg:py-4 bg-[#491717] text-white/80 font-bold tracking-widest uppercase rounded-sm transition-all hover:bg-[#632020] hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(73,23,23,0.3)] hover:shadow-[0_0_30px_rgba(73,23,23,0.6)] overflow-hidden">
              <span className="relative z-10 flex items-center gap-2 sm:gap-3 font-cyber">
                View Projects
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            </a>
            <a
              href="/assets/Araf-Full-Stack-Resume.pdf"
              download="Shahriar_Araf_Resume.pdf"
              className="group px-5 sm:px-7 lg:px-8 py-2.5 sm:py-3 lg:py-4 border border-white/40 text-white/80 font-bold text-xs sm:text-sm lg:text-base tracking-widest uppercase rounded-sm hover:border-[#b45555] hover:text-[#b45555] hover:bg-[#491717]/10 transition-all flex items-center gap-2 sm:gap-3 cursor-pointer"
            >
              Resume
              <Download size={16} className="group-hover:animate-bounce" />
            </a>
          </div>

          {/* SOCIAL LINKS */}
          <div className="flex justify-center lg:justify-start gap-5 sm:gap-6 pt-2">
            {socialLinks.map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-2"
                title={social.label}
              >
                <div className="absolute inset-0 bg-[#491717] rounded-full blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                <social.icon
                  className="relative text-gray-400 group-hover:text-[#b45555] transition-colors duration-300 z-10"
                  size={22}
                />
              </a>
            ))}
          </div>
        </div>

        {/* --- RIGHT: HOLOGRAM IMAGE --- */}
        <div className="lg:col-span-5 relative order-1 lg:order-2 h-[50vh] sm:h-[60vh] lg:h-[80vh] w-full flex items-end justify-center lg:justify-end overflow-visible pointer-events-none">
          <div className="relative w-full h-full lg:w-[120%] lg:-mr-24 hologram-wrapper">
            <div className="glitch-layer cyan rounded-full"></div>
            <div className="glitch-layer red rounded-full"></div>
            <div className="relative w-full h-full rounded-full overflow-hidden">
              <Image
                src="/assets/araf-headshot.jpeg"
                alt="Profile"
                fill
                className="object-cover object-top lg:object-center opacity-100"
                quality={100}
                priority
              />
              <div className="absolute inset-0 bg-white opacity-[0.05] z-20 mix-blend-overlay pointer-events-none"></div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-30"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent z-30"></div>
          </div>
        </div>

      </div>
    </section>
  );
}
