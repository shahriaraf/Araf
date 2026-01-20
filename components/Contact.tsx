"use client";

import React, { useRef, useState } from "react";
import { Bebas_Neue } from "next/font/google"; 
import { FaFacebookF, FaLinkedinIn, FaGithub, FaWhatsapp, FaEnvelope, FaBars } from "react-icons/fa";
import { Github } from "lucide-react";
import emailjs from "@emailjs/browser";

// Configure the font
const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

export default function Contact() {
  // --- EMAILJS LOGIC ---
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState("");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    if (formRef.current) {
        emailjs
        .sendForm("service_a609f54", "template_nbhb31q", formRef.current, "DXMrIyiC32rc37Gkd")
        .then(() => {
            setStatus("Sent");
            if (formRef.current) formRef.current.reset();
            // Clear success message after 3 seconds
            setTimeout(() => setStatus(""), 3000);
        })
        .catch((error) => {
            console.error(error);
            setStatus("Failed to send. Please try again.");
        });
    }
  };

  return (
    <section className={`min-h-screen max-w-7xl mx-auto flex items-center justify-center p-4 md:p-8 font-sans ${bebas.variable}`}>
      

      {/* --- THE BROWSER WINDOW CONTAINER --- */}
      <div className="relative w-full max-w-[1400px] rounded-xl shadow-2xl overflow-hidden flex flex-col">
        
        {/* === MAIN CONTENT AREA === */}
        <div className="flex flex-col md:flex-row min-h-[600px]">
            
            {/* --- LEFT & CENTER CONTENT --- */}
            <div className="flex-1 flex flex-col md:flex-row">
                
                {/* LEFT SIDE: BIG TEXT */}
                <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center relative">

                    <h1 className="font-[family-name:var(--font-bebas)] text-7xl md:text-9xl text-white/80 leading-[0.85] tracking-wide mb-8">
                        LET'S <br />
                        GET IN <br />
                        TOUCH
                    </h1>
                    
                    <p className="text-white/70 text-sm max-w-sm leading-relaxed">
                        I'd love to hear from you! Whether you have questions, feedback, or need support, feel free to reach out to us.
                    </p>
                </div>

                {/* RIGHT SIDE: FORM */}
                <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center">
                    
                    <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-6">
                        
                        <div className="flex gap-6">
                            <div className="flex-1 group">
                                <label className="text-xs text-white/80 uppercase tracking-wider mb-2 block group-focus-within:text-[#b45555] transition-colors">First Name</label>
                                <input 
                                    type="text" 
                                    name="first_name" 
                                    required
                                    className="w-full bg-[#111] border border-[#333] text-white/80 px-4 py-3 focus:outline-none focus:border-[#b45555] transition-colors" 
                                />
                            </div>
                            <div className="flex-1 group">
                                <label className="text-xs text-white/80 uppercase tracking-wider mb-2 block group-focus-within:text-[#b45555] transition-colors">Last Name</label>
                                <input 
                                    type="text" 
                                    name="last_name"
                                    className="w-full bg-[#111] border border-[#333] text-white/80 px-4 py-3 focus:outline-none focus:border-[#b45555] transition-colors" 
                                />
                            </div>
                        </div>

                        <div className="group">
                            <label className="text-xs text-white/80 uppercase tracking-wider mb-2 block group-focus-within:text-[#b45555] transition-colors">Email</label>
                            <input 
                                type="email" 
                                name="user_email" 
                                required
                                className="w-full bg-[#111] border border-[#333] text-white/80 px-4 py-3 focus:outline-none focus:border-[#b45555] transition-colors" 
                            />
                        </div>

                        <div className="group">
                            <label className="text-xs text-white/80 uppercase tracking-wider mb-2 block group-focus-within:text-[#b45555] transition-colors">Subject</label>
                            <input 
                                type="text" 
                                name="subject"
                                required
                                className="w-full bg-[#111] border border-[#333] text-white/80 px-4 py-3 focus:outline-none focus:border-[#b45555] transition-colors" 
                            />
                        </div>

                        <div className="group">
                            <label className="text-xs text-white/80 uppercase tracking-wider mb-2 block group-focus-within:text-[#b45555] transition-colors">Message</label>
                            <textarea 
                                name="message" 
                                rows={4} 
                                required
                                className="w-full bg-[#111] border border-[#333] text-white/80 px-4 py-3 focus:outline-none focus:border-[#b45555] transition-colors resize-none"
                            ></textarea>
                        </div>

                        <button 
                            type="submit"
                            disabled={status === "Sending..."}
                            className="w-full bg-white text-black font-bold uppercase tracking-widest py-4 hover:bg-[#b45555] hover:text-white transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {status === "Sending..." ? "Sending..." : "Send Message"}
                        </button>

                        {/* Status Message Display */}
                        {status && status !== "Sending..." && (
                            <p className={`text-center text-sm font-bold tracking-wide ${status.includes("Sent") ? "text-green-500" : "text-red-500"}`}>
                                {status}
                            </p>
                        )}

                    </form>
                </div>

            </div>

            {/* --- RIGHT SIDEBAR: ICONS --- */}
            <div className="w-full md:w-20 border-l flex md:flex-col justify-between items-center py-8 ">
                
                {/* Top Icons: WhatsApp & Email */}
                <div className="flex md:flex-col gap-8 text-white/80">
                    <a href="https://wa.me/8801726649175" target="_blank" className="hover:text-[#b45555] cursor-pointer transition-colors" title="WhatsApp">
                        <FaWhatsapp size={20} />
                    </a>
                    <a href="mailto:shahriaraf01@gmail.com" className="hover:text-[#b45555] cursor-pointer transition-colors" title="Email">
                        <FaEnvelope size={20} />
                    </a>
                </div>

                {/* Bottom Icons: Social Media */}
                <div className="flex md:flex-col gap-8 text-white/80">
                    <a href="https://www.facebook.com/shahriar.araf.3" target="_blank" className="hover:text-[#b45555] transition-colors"><FaFacebookF size={20} /></a>
                    <a href="https://www.linkedin.com/in/shoumo-shahriar-araf" target="_blank" className="hover:text-[#b45555] transition-colors"><FaLinkedinIn size={20} /></a>
                    <a href="https://github.com/shahriaraf" target="_blank" className="hover:text-[#b45555] transition-colors"><Github size={20} /></a>
                </div>

            </div>
        </div>

      </div>
    </section>
  );
}