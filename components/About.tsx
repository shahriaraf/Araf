"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaDownload, FaCoffee, FaCode, FaGlobeAsia } from "react-icons/fa";

export default function About() {
  const stats = [
    { label: "Years Experience", value: "03+", icon: FaCode },
    { label: "Projects Completed", value: "25+", icon: FaGlobeAsia },
    { label: "Coffee Consumed", value: "∞", icon: FaCoffee },
  ];

  return (
    <section className="relative w-full py-16 sm:py-20 md:py-32 bg-black overflow-hidden">
      {/* --- BACKGROUND DECORATION --- */}
      <div className="absolute top-1/4 right-0 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-[#491717] opacity-20 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center">

        {/* === LEFT COLUMN: PROFILE IMAGE (desktop only) === */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative group hidden lg:block"
        >
          <div className="relative z-10 w-full aspect-[3/5] rounded-2xl overflow-hidden grayscale transition-all duration-700 ease-in-out">
            <Image
              src="/assets/araf-about.jpeg"
              alt="Shahriar Araf"
              fill
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
          </div>
        </motion.div>

        {/* === RIGHT COLUMN: CONTENT === */}
        <div className="flex flex-col justify-center">

          {/* Header Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-5 sm:mb-6"
          >
            <span className="h-[2px] w-8 sm:w-10 bg-[#b45555]"></span>
            <span className="font-mono text-[#b45555] tracking-widest uppercase text-xs sm:text-sm">
              Who I am
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-space text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8 leading-tight"
          >
            Building <span className="text-[#b45555]">digital products</span>,{" "}
            brands, and experiences.
          </motion.h2>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-body text-white/60 text-base sm:text-lg leading-relaxed mb-8 sm:mb-10 space-y-4"
          >
            <p>
              I am a <strong className="text-white">Full Stack Developer</strong> based in Bangladesh,
              with a passion for building digital services/stuff I want. I have a knack for all things
              launching products, from planning and designing all the way to solving real-life problems
              with code.
            </p>
            <p>
              When I am not coding, I am likely hanging out with my camera,
              playing video games, or exploring new technologies to keep my skills sharp.
            </p>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-3 gap-3 sm:gap-4 mb-8 sm:mb-10"
          >
            {stats.map((stat, i) => (
              <div
                key={i}
                className="bg-[#111] border border-[#222] p-3 sm:p-4 rounded-xl flex flex-col items-center text-center group hover:border-[#b45555] transition-colors"
              >
                <stat.icon className="text-[#b45555] text-lg sm:text-2xl mb-1 sm:mb-2" />
                <h4 className="font-space text-xl sm:text-2xl md:text-3xl font-bold text-white/80">
                  {stat.value}
                </h4>
                <span className="font-mono text-[9px] sm:text-[10px] text-white/60 uppercase tracking-wider leading-tight mt-0.5">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a
              href="/assets/Araf-Full-Stack-Resume.pdf"
              download="Shahriar_Araf_Resume.pdf"
              className="group relative inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-[#491717] text-white font-space font-bold uppercase tracking-widest rounded-lg overflow-hidden shadow-[0_0_20px_rgba(73,23,23,0.4)] hover:shadow-[0_0_30px_rgba(73,23,23,0.6)] transition-all cursor-pointer text-sm sm:text-base"
            >
              <span className="relative z-10 flex items-center gap-3">
                Download CV
                <FaDownload className="group-hover:translate-y-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-[#2d0e0e] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300"></div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
