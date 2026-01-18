"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaDownload, FaCoffee, FaCode, FaGlobeAsia } from "react-icons/fa";

export default function About() {
  // Stats Data
  const stats = [
    { label: "Years Experience", value: "03+", icon: FaCode },
    { label: "Projects Completed", value: "25+", icon: FaGlobeAsia },
    { label: "Coffee Consumed", value: "∞", icon: FaCoffee },
  ];

  return (
    <section className="relative w-full py-20 md:py-32 bg-black overflow-hidden">
      
      {/* --- BACKGROUND DECORATION --- */}
      {/* A subtle large maroon glow on the right side */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#491717] opacity-20 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* === LEFT COLUMN: THE PROFILE IMAGE === */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative group mb-20"
        >
            {/* 1. Back decorative border (Offset) */}
            <div className="absolute inset-0 rounded-2xl z-0 transition-transform duration-500 "></div>
            
            {/* 2. Main Image Container */}
            <div className="relative z-10 w-full aspect-[3/5] rounded-2xl overflow-hidden grayscale transition-all duration-700 ease-in-out">
                {/* Replace with your actual image path */}
                <Image 
                    src="/WhatsApp Image 2026-01-18 at 11.53.52 PM.jpeg" // Use your own portrait here
                    alt="Shahriar Araf"
                    fill
                    className="object-cover object-top"
                />
                
                {/* 3. Gradient Overlay (Cinematic look) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>

            
            </div>
        </motion.div>


        {/* === RIGHT COLUMN: THE CONTENT === */}
        <div className="flex flex-col justify-center">
            
            {/* 1. Header Tag */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-3 mb-6"
            >
                <span className="h-[2px] w-10 bg-[#491717]"></span>
                <span className="font-mono text-[#ff5555] tracking-widest uppercase text-sm">Who I am</span>
            </motion.div>

            {/* 2. Main Title */}
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="font-space text-4xl md:text-6xl font-bold text-white mb-8 leading-tight"
            >
                Building <span className="text-[#491717]">digital products</span>, brands, and experiences.
            </motion.h2>

            {/* 3. Bio Paragraph */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="font-body text-gray-400 text-lg leading-relaxed mb-10 space-y-4"
            >
                <p>
                    I am a <strong className="text-white">Full Stack Developer</strong> based in Bangladesh, with a passion for building digital services/stuff I want. I have a knack for all things launching products, from planning and designing all the way to solving real-life problems with code.
                </p>
                <p>
                    When I am not coding, I am likely hanging out with my camera, playing video games, or exploring new technologies to keep my skills sharp.
                </p>
            </motion.div>

            {/* 4. The Stats Row (Glassmorphic) */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="grid grid-cols-3 gap-4 mb-10"
            >
                {stats.map((stat, i) => (
                    <div key={i} className="bg-[#111] border border-[#222] p-4 rounded-xl flex flex-col items-center text-center group hover:border-[#491717] transition-colors">
                        <stat.icon className="text-[#491717] text-2xl mb-2 group-hover:text-[#ff5555] transition-colors" />
                        <h4 className="font-space text-2xl md:text-3xl font-bold text-white">{stat.value}</h4>
                        <span className="font-mono text-[10px] text-gray-500 uppercase tracking-wider">{stat.label}</span>
                    </div>
                ))}
            </motion.div>

            {/* 5. CTA Button */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                <button className="group relative px-8 py-4 bg-[#491717] text-white font-space font-bold uppercase tracking-widest rounded-lg overflow-hidden shadow-[0_0_20px_rgba(73,23,23,0.4)] hover:shadow-[0_0_30px_rgba(73,23,23,0.6)] transition-all">
                    <span className="relative z-10 flex items-center gap-3">
                        Download CV <FaDownload className="group-hover:translate-y-1 transition-transform" />
                    </span>
                    {/* Hover Slide Effect */}
                    <div className="absolute inset-0 bg-[#2d0e0e] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300"></div>
                </button>
            </motion.div>

        </div>
      </div>
    </section>
  );
}