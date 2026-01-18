"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowRight, Github, Linkedin, Twitter, Download, Terminal } from "lucide-react";

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
        setDisplayText(prev => 
          text.split("").map((letter, index) => {
            if (index < iteration) return text[index];
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          }).join("")
        );
        if (iteration >= text.length) clearInterval(interval);
        iteration += 1 / 2;
      }, 50);
    };
    scramble();
    return () => clearInterval(interval);
  }, [text]);
  return <span className="font-mono text-[#ff5555]">{displayText}</span>;
};

export default function Banner() {
  const roles = ["Full Stack Developer", "Frontend Developer", "Web Designer"];
  const [roleIndex, setRoleIndex] = useState(0);

  // --- MOUSE SPOTLIGHT LOGIC ---
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
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
      className="relative w-full min-h-screen bg-black text-white overflow-hidden flex items-center justify-center"
    >
      
      {/* --- DYNAMIC SPOTLIGHT EFFECT --- */}
      <div 
        className="absolute pointer-events-none z-0 blur-[100px] opacity-20 transition-opacity duration-500"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, #491717, transparent 40%)`
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
        
        {/* --- LEFT: JAW DROPPING TEXT CONTENT --- */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-10 order-2 lg:order-1 pt-12 lg:pt-0 relative z-20">
            
            {/* 1. Animated Tech Badge */}
            <div className="group w-fit">
                <div className="flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 group-hover:border-[#491717]/50 group-hover:bg-[#491717]/10">
                    <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#491717] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
                    </span>
                    <span className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase group-hover:text-red-400 transition-colors">Available for work</span>
                </div>
            </div>

            {/* 2. CONSTANT GLITCH TITLE */}
            <div className="relative">
                <style jsx>{`
                    /* Glitch Effect - Constant Loop */
                    .glitch-text {
                        position: relative;
                    }
                    .glitch-text::before,
                    .glitch-text::after {
                        content: attr(data-text);
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        background: black; /* Matches bg to hide main text momentarily */
                    }
                    .glitch-text::before {
                        left: -2px;
                        text-shadow: 2px 0 #00c2ff; /* Cyan offset */
                        clip-path: inset(0 900px 0 0);
                        animation: noise-anim-2 3s infinite linear alternate-reverse;
                    }
                    .glitch-text::after {
                        left: 2px;
                        text-shadow: -2px 0 #ff00c1; /* Magenta offset */
                        clip-path: inset(0 900px 0 0);
                        animation: noise-anim 2s infinite linear alternate-reverse;
                    }

                    /* Specific color override for ARAF glitch layers */
                    .glitch-red::before {
                        text-shadow: 2px 0 #ff0000;
                    }
                    .glitch-red::after {
                         text-shadow: -2px 0 #491717;
                    }

                    @keyframes noise-anim {
                        0% { clip-path: inset(20% 0 80% 0); }
                        20% { clip-path: inset(60% 0 1% 0); }
                        40% { clip-path: inset(40% 0 50% 0); }
                        60% { clip-path: inset(80% 0 5% 0); }
                        80% { clip-path: inset(10% 0 70% 0); }
                        100% { clip-path: inset(30% 0 20% 0); }
                    }
                    @keyframes noise-anim-2 {
                        0% { clip-path: inset(10% 0 60% 0); }
                        20% { clip-path: inset(30% 0 10% 0); }
                        40% { clip-path: inset(70% 0 20% 0); }
                        60% { clip-path: inset(20% 0 50% 0); }
                        80% { clip-path: inset(50% 0 30% 0); }
                        100% { clip-path: inset(5% 0 80% 0); }
                    }
                `}</style>
                
                <h1 className="text-6xl md:text-8xl lg:text-9xl text-center lg:text-left font-black tracking-wide leading-[0.85] text-white">
                  {/* Shahriar - Standard White/Cyan Glitch */}
                  <div className="glitch-text relative inline-block mb-2" data-text="Shahriar">
                      Shahriar
                  </div> 
                  <br />
                  {/* Araf - Red Gradient Base + Red Glitch */}
                  <div 
                    className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#491717] via-red-600 to-[#491717]" 
                    data-text="Araf"
                  >
                    Araf
                  </div>
                </h1>
            </div>

            {/* 3. Glassmorphic Terminal Container */}
            <div className="relative group w-full md:max-w-[28rem]">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#491717] to-red-900 rounded-lg blur opacity-30 group-hover:opacity-75 transition duration-1000"></div>
                <div className="relative flex items-center bg-black/80 backdrop-blur-xl border border-white/10 rounded-lg px-6 py-4">
                    <Terminal size={25} className="text-[#491717] mr-4" />
                    <div className="text-lg md:text-3xl font-mono">
                        <ScrambleText text={roles[roleIndex]} />
                        <span className="animate-pulse inline-block w-2 h-5 bg-[#ff5555] ml-2 align-middle"></span>
                    </div>
                </div>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-lg text-center lg:text-left max-w-lg leading-relaxed border-l-2 border-white/10 pl-6 hover:border-[#491717] transition-colors duration-300">
              I build scalable, pixel-perfect digital experiences. Turning complex problems into elegant code.
            </p>

            {/* Buttons */}
            <div className="flex grow justify-center lg:justify-start lg:flex-raw gap-3 lg:gap-6 pt-2">
                
                {/* PRIMARY SHIMMER BUTTON */}
                <button className="group relative text-xs lg:text-[16px] px-4 lg:px-8 py-2 lg:py-4 bg-[#491717] text-white font-bold text-sm tracking-widest uppercase rounded-sm transition-all hover:bg-[#632020] hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(73,23,23,0.3)] hover:shadow-[0_0_30px_rgba(73,23,23,0.6)] overflow-hidden">
                    <span className="relative z-10 flex items-center gap-3">
                        View Projects <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                </button>

                {/* SECONDARY GLOW BUTTON */}
                <button className="group px-4 lg:px-8 py-2 lg:py-4 border border-white/10 text-white font-bold text-sm tracking-widest uppercase rounded-sm hover:border-[#491717] hover:text-[#ff8888] hover:bg-[#491717]/10 transition-all flex items-center gap-3 text-xs lg:text-[16px]">
                    Resume <Download size={18} className="group-hover:animate-bounce" />
                </button>
            </div>
            
            {/* 4. Socials with Magnetic Bloom */}
            <div className="flex justify-center lg:justify-start gap-6 pt-2">
                {[Github, Linkedin, Twitter].map((Icon, i) => (
                    <a key={i} href="#" className="group relative p-2">
                        <div className="absolute inset-0 bg-[#491717] rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <Icon className="relative text-gray-400 group-hover:text-white transition-colors duration-300 z-10" size={24} />
                    </a>
                ))}
            </div>
        </div>

        {/* --- RIGHT: BLENDED IMAGE (Preserved) --- */}
        <div className="lg:col-span-5 relative order-1 lg:order-2 h-[80vh] lg:h-[80vh] w-full flex items-end justify-center lg:justify-end overflow-visible">
            <div className="relative w-full h-full lg:w-[120%] lg:-mr-24">
                <Image 
                    src="/WhatsApp Image 2026-01-18 at 1.52.38 PM.jpeg"
                    alt="Profile"
                    fill
                    className="object-cover object-top lg:object-center rounded-full"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent z-10"></div>
            </div>
        </div>

      </div>
    </section>
  );
}