"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// --- ASSETS ---
import html from '../public/assets/html5.svg';
import css from '../public/assets/css3.svg';
import js from '../public/assets/javascript.svg';
import reactLogo from '../public/assets/react.svg';
import next from '../public/assets/nextdotjs.svg';
import tailwind from '../public/assets/tailwindcss.svg';
import bootstrap from '../public/assets/bootstrap.svg';
import redux from '../public/assets/redux.svg';
import express from '../public/assets/express.svg';
import node from '../public/assets/nodedotjs.svg';
import mongodb from '../public/assets/mongodb.svg';
import mysql from '../public/assets/mysql.svg';
import firebase from '../public/assets/firebase.svg';
import github from '../public/assets/github.svg';
import framer from '../public/assets/framer.svg';
import docker from '../public/assets/docker.svg';
import nest from '../public/assets/Nestjs--Streamline-Simple-Icons.svg';
import gitlab from '../public/assets/Gitlab--Streamline-Bootstrap.svg';
import postman from '../public/assets/postman-svgrepo-com.svg';
import figma from '../public/assets/Figma-Logo--Streamline-Ultimate.png';

// --- DATA CONFIGURATION ---
const skillCategories = [
  {
    id: "frontend",
    title: "Frontend",
    description: "Building immersive user interfaces.",
    skills: [
      { name: "HTML5", logo: html, color: "#E34F26" },
      { name: "CSS3", logo: css, color: "#1572B6" },
      { name: "JavaScript", logo: js, color: "#F7DF1E" },
      { name: "React", logo: reactLogo, color: "#61DAFB" },
      { name: "Next.js", logo: next, color: "#ffffff" },
      { name: "Tailwind", logo: tailwind, color: "#38B2AC" },
      { name: "Bootstrap", logo: bootstrap, color: "#7952B3" },
      { name: "Redux", logo: redux, color: "#764ABC" },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    description: "Robust server-side architecture.",
    skills: [
      { name: "Node.js", logo: node, color: "#339933" },
      { name: "Express", logo: express, color: "#ffffff" },
      { name: "NestJS", logo: nest, color: "#E0234E" },
      { name: "MongoDB", logo: mongodb, color: "#47A248" },
      { name: "MySQL", logo: mysql, color: "#4479A1" },
      { name: "Firebase", logo: firebase, color: "#FFCA28" },
    ],
  },
  {
    id: "devops",
    title: "DevOps",
    description: "Deployment & CI/CD pipelines.",
    skills: [
      { name: "Docker", logo: docker, color: "#2496ED" },
      { name: "GitHub", logo: github, color: "#ffffff" },
      { name: "GitLab", logo: gitlab, color: "#FC6D26" },
    ],
  },
  {
    id: "tools",
    title: "Tools",
    description: "Design & workflow utilities.",
    skills: [
      { name: "Figma", logo: figma, color: "#F24E1E" },
      { name: "Postman", logo: postman, color: "#FF6C37" },
      { name: "Framer", logo: framer, color: "#0055FF" },
    ],
  },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % skillCategories.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const slideVariants = {
    enter: { y: 50, opacity: 0 },
    center: { y: 0, opacity: 1 },
    exit: { y: -50, opacity: 0 },
  };

  const textVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -20, opacity: 0 },
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black py-10 md:py-20">

      {/* --- 8 VISIBLE DIAGONAL STRIPES --- */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute h-[200%] w-16 md:w-32 bg-[#b45555] top-[-50%]"
            style={{
              left: `${i * 15 - 10}%`,
              transform: 'rotate(25deg)',
              opacity: 0.2,
              filter: 'blur(40px)',
              boxShadow: '0 0 50px rgba(170, 57, 57, 0.2)'
            }}
          ></div>
        ))}
      </div>

      {/* --- MAIN CARD CONTAINER --- */}
      <div className="relative z-10 w-[95%] max-w-6xl bg-[#080808]/90 backdrop-blur-xl shadow-[0_0_60px_rgba(170,57,57,0.1)] rounded-xl flex overflow-hidden border border-[#222]"
        style={{ minHeight: 'clamp(420px, 60vw, 600px)' }}
      >

        {/* === LEFT SIDE: VERTICAL TEXT INDICATOR === */}
        <div className="w-10 sm:w-16 md:w-24 bg-[#b45555] flex items-center justify-center relative shadow-2xl z-20 shrink-0">
          <div className="rotate-180 [writing-mode:vertical-rl] text-black font-black text-xl sm:text-3xl md:text-5xl uppercase tracking-widest whitespace-nowrap drop-shadow-md">
            <AnimatePresence mode="wait">
              <motion.span
                key={activeTab}
                variants={textVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.4 }}
              >
                {skillCategories[activeTab].title}
              </motion.span>
            </AnimatePresence>
          </div>
        </div>

        {/* === MIDDLE: GRID SLIDER AREA === */}
        <div className="flex-1 p-4 sm:p-8 md:p-12 lg:p-16 flex flex-col relative bg-gradient-to-br from-[#0a0a0a] to-[#000000] overflow-hidden">

          {/* Header Text */}
          <div className="mb-4 md:mb-8">
            <h3 className="text-[#b45555] font-bold text-xs sm:text-sm md:text-lg mb-1 tracking-widest uppercase border-b-2 border-[#b45555] inline-block pb-1">
              My Arsenal
            </h3>
            <AnimatePresence mode="wait">
              <motion.p
                key={activeTab}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-white/80 text-xs sm:text-sm md:text-base mt-1"
              >
                {skillCategories[activeTab].description}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* The Icons Grid */}
          <div className="flex-1 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                className="grid grid-cols-3 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-6 w-full"
              >
                {skillCategories[activeTab].skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex flex-col items-center justify-center group"
                  >
                    {/* Icon Box — light theme color background */}
                    <div
                      className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-xl flex items-center justify-center relative overflow-hidden"
                      style={{
                        backgroundColor: skill.color,
                      }}
                    >
                      <img
                        src={skill.logo.src || skill.logo}
                        alt={skill.name}
                        className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 object-contain relative z-10"
                      />
                    </div>

                    {/* Label */}
                    <span
                      className="mt-1 sm:mt-2 md:mt-3 text-[8px] sm:text-[9px] md:text-xs font-bold uppercase tracking-wider text-center leading-tight"
                      style={{ color: skill.color }}
                    >
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* === RIGHT SIDE: INDICATORS === */}
        <div className="w-8 sm:w-10 md:w-16 bg-[#050505] flex flex-col items-center justify-center gap-3 md:gap-6 border-l border-gray-800 z-20 shrink-0">
          {skillCategories.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className="relative group w-full flex justify-center py-2"
            >
              <div
                className={`w-1 rounded-full transition-all duration-500 ease-in-out
                  ${activeTab === index
                    ? "h-6 sm:h-10 md:h-16 bg-[#b45555] shadow-[0_0_15px_#832c2c] opacity-100"
                    : "h-1.5 md:h-2 bg-gray-700 hover:bg-gray-500 opacity-50"}`}
              />
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}