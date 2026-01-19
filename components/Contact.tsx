"use client";

import React from "react";
import { Bebas_Neue } from "next/font/google"; // Import the specific font
import { FaFacebookF, FaInstagram, FaTwitter, FaMapMarkerAlt, FaEnvelope, FaBars } from "react-icons/fa";

// Configure the font
const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

export default function Contact() {
  return (
    <section className={`min-h-screen max-w-7xl mx-auto bg-[#050505] flex items-center justify-center p-4 md:p-8 font-sans ${bebas.variable}`}>
      
      {/* --- BACKGROUND PATTERN (To match the vibe) --- */}
      <div className="absolute inset-0 opacity-[0.03]" 
           style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
      </div>

      {/* --- THE BROWSER WINDOW CONTAINER --- */}
      <div className="relative w-full max-w-[1400px] bg-[#0a0a0a] border border-[#222] rounded-xl shadow-2xl overflow-hidden flex flex-col">
        


        {/* === 2. MAIN CONTENT AREA === */}
        <div className="flex flex-col md:flex-row min-h-[600px]">
            
            {/* --- LEFT & CENTER CONTENT --- */}
            <div className="flex-1 flex flex-col md:flex-row">
                
                {/* LEFT SIDE: BIG TEXT */}
                <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center border-r border-[#222] relative">
                    {/* Faint Background Grid Lines */}
                    <div className="absolute top-10 left-0 w-full h-[1px] bg-[#222]"></div>
                    <div className="absolute bottom-10 left-0 w-full h-[1px] bg-[#222]"></div>

                    <h1 className="font-[family-name:var(--font-bebas)] text-7xl md:text-9xl text-white/80 leading-[0.85] tracking-wide mb-8">
                        LET'S <br />
                        GET IN <br />
                        TOUCH
                    </h1>
                    
                    <p className="text-white/70 text-sm max-w-sm leading-relaxed">
                        We'd love to hear from you! Whether you have questions, feedback, or need support, feel free to reach out to us.
                    </p>
                </div>

                {/* RIGHT SIDE: FORM */}
                <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center">
                    <form className="flex flex-col gap-6">
                        
                        <div className="flex gap-6">
                            <div className="flex-1 group">
                                <label className="text-xs text-white/80 uppercase tracking-wider mb-2 block group-focus-within:text-[#b45555] transition-colors">First Name</label>
                                <input type="text" className="w-full bg-[#111] border border-[#333] text-white/80 px-4 py-3 focus:outline-none focus:border-[#b45555] transition-colors" />
                            </div>
                            <div className="flex-1 group">
                                <label className="text-xs text-white/80 uppercase tracking-wider mb-2 block group-focus-within:text-[#b45555] transition-colors">Last Name</label>
                                <input type="text" className="w-full bg-[#111] border border-[#333] text-white/80 px-4 py-3 focus:outline-none focus:border-[#b45555] transition-colors" />
                            </div>
                        </div>

                        <div className="group">
                            <label className="text-xs text-white/80 uppercase tracking-wider mb-2 block group-focus-within:text-[#b45555] transition-colors">Email</label>
                            <input type="email" className="w-full bg-[#111] border border-[#333] text-white/80 px-4 py-3 focus:outline-none focus:border-[#b45555] transition-colors" />
                        </div>

                        <div className="group">
                            <label className="text-xs text-white/80 uppercase tracking-wider mb-2 block group-focus-within:text-[#b45555] transition-colors">Subject</label>
                            <input type="text" className="w-full bg-[#111] border border-[#333] text-white/80 px-4 py-3 focus:outline-none focus:border-[#b45555] transition-colors" />
                        </div>

                        <div className="group">
                            <label className="text-xs text-white/80 uppercase tracking-wider mb-2 block group-focus-within:text-[#b45555] transition-colors">Message</label>
                            <textarea rows={4} className="w-full bg-[#111] border border-[#333] text-white/80 px-4 py-3 focus:outline-none focus:border-[#b45555] transition-colors resize-none"></textarea>
                        </div>

                        <button className="w-full bg-white text-black font-bold uppercase tracking-widest py-4 hover:bg-[#b45555] hover:text-white transition-all duration-300 shadow-lg">
                            Send Message
                        </button>

                    </form>
                </div>

            </div>

            {/* --- RIGHT SIDEBAR: ICONS --- */}
            <div className="w-full md:w-20 border-l border-[#222] flex md:flex-col justify-between items-center py-8 bg-[#080808]">
                
                {/* Top Icons */}
                <div className="flex md:flex-col gap-8 text-white/80">
                    <div className="hover:text-[#b45555] cursor-pointer transition-colors"><FaMapMarkerAlt size={20} /></div>
                    <div className="hover:text-[#b45555] cursor-pointer transition-colors"><FaEnvelope size={20} /></div>
                </div>

                {/* Bottom Icons */}
                <div className="flex md:flex-col gap-8 text-white/80">
                    <a href="#" className="hover:text-[#b45555] transition-colors"><FaFacebookF size={18} /></a>
                    <a href="#" className="hover:text-[#b45555] transition-colors"><FaInstagram size={18} /></a>
                    <a href="#" className="hover:text-[#b45555] transition-colors"><FaTwitter size={18} /></a>
                </div>

            </div>
        </div>

  

      </div>
    </section>
  );
}