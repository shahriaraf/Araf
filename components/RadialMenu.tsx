"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaHome, FaUser, FaCode, FaBriefcase, FaEnvelope } from "react-icons/fa";

const navLinks = [
  { id: "contact", label: "Contact", icon: FaEnvelope },
  { id: "projects", label: "Work", icon: FaBriefcase },
  { id: "skills", label: "Skills", icon: FaCode },
  { id: "about", label: "About", icon: FaUser },
  { id: "home", label: "Home", icon: FaHome },
];

export default function RadialMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // --- SCROLL TO SECTION ---
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
      setIsOpen(false);
    }
  };

  // --- SCROLL SPY (To highlight active icon) ---
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.5 }
    );
    navLinks.forEach((link) => {
      const section = document.getElementById(link.id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed bottom-5 right-2 md:right-6 z-50 flex items-center justify-center">
      
      {/* --- MENU ITEMS (THE FAN) --- */}
      <div className="absolute">
        {navLinks.map((link, index) => {
          // Calculate angle for the fan (90 degrees spread)
          const angle = (index * 22.5) + 180; // Start from left (180deg) and go up
          const radius = 110; // Distance from center button
          
          // Convert polar to cartesian coordinates
          const radians = (angle * Math.PI) / 180;
          const x = Math.cos(radians) * radius;
          const y = Math.sin(radians) * radius;

          return (
            <motion.button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              initial={{ x: 0, y: 0, scale: 0, opacity: 0 }}
              animate={isOpen ? { x, y, scale: 1, opacity: 1 } : { x: 0, y: 0, scale: 0, opacity: 0 }}
              transition={{ 
                type: "spring", 
                stiffness: 200, 
                damping: 20, 
                delay: isOpen ? index * 0.05 : 0 
              }}
              className={`absolute w-10 h-10 rounded-full flex items-center justify-center border shadow-xl group
                ${activeSection === link.id 
                    ? "bg-[#491717] border-[#b45555] text-white shadow-[0_0_15px_#b45555]" 
                    : "bg-black/90 border-[#333] text-gray-400 hover:text-white hover:border-[#b45555]"}
              `}
              // Centering adjustment since absolute pos is top-left based
              style={{ top: -24, left: -24 }} 
            >
              <link.icon size={18} />

              {/* Tooltip Label (Appears on Hover) */}
              <span className="absolute right-full mr-3 px-2 py-1 bg-[#111] border border-[#333] rounded text-[10px] uppercase font-bold text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                {link.label}
              </span>
            </motion.button>
          );
        })}
      </div>

      {/* --- MAIN TOGGLE BUTTON --- */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-10 md:w-14 md:h-14 h-10 bg-[#491717] rounded-full flex items-center justify-center text-white shadow-[0_0_30px_rgba(73,23,23,0.6)] z-10 hover:scale-110 active:scale-95 transition-transform duration-200 border-2 border-[#b45555]"
      >
        <motion.div
          animate={{ rotate: isOpen ? 135 : 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
        >
          <FaPlus size={22} />
        </motion.div>
      </button>

      {/* --- BACKGROUND DIMMER (Optional: To focus on menu when open) --- */}
      <AnimatePresence>
        {isOpen && (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm -z-10"
            />
        )}
      </AnimatePresence>

    </div>
  );
}