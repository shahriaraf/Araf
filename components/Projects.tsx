'use client';
import React, { useState, useEffect } from "react";
import { FaGithub, FaExternalLinkAlt, FaAndroid, FaArrowLeft, FaArrowRight, FaCode } from "react-icons/fa";

type WebProject = {
  name: string;
  image: string;
  liveLink: string;
  githubLink: string;
  description: string;
  technologies: string[];
};

type AppProject = {
  name: string;
  image: string;
  githubLink: string;
  apkLink: string;
  description: string;
  technologies: string[];
};

type Project = WebProject | AppProject;


// --- DATA ---
const webProjects: WebProject[] = [
  {
    name: "Aaryan Sourcing",
    image: "/assets/Minimalist Neutral Multi Device Computer Mockup Website Launch Instagram Post (1580 x 1080 px) (1780 x 1080 px) (1).png",
    liveLink: "https://aaryansourcing.com/",
    githubLink: "https://github.com/shahriaraf/Aariyan-Sourching-Client",
    description: "B2B sourcing platform.",
    technologies: ["React", "Node.js", "MongoDB"],
  },
  {
    name: "Rentechify",
    image: "/assets/Modern Neutral Digital Product Computer Mockup Promotional Instagram Post (1780 x 1080 px) (1).png",
    liveLink: "https://rentechify.web.app/",
    githubLink: "https://github.com/codegeeksteam/RentifyTech",
    description: "Tech rental marketplace.",
    technologies: ["React", "Tailwind", "Firebase"],
  },
  {
    name: "Leading University",
    image: "/assets/Minimalist Neutral Multi Device Computer Mockup Website Launch Instagram Post (1780 x 1080 px).png",
    liveLink: "https://leading-university-jet.vercel.app/",
    githubLink: "https://github.com/shahriaraf/Leading-University",
    description: "University portal system.",
    technologies: ["React", "Node.js", "Vercel"],
  },
  {
    name: "Home Bite",
    image: "/assets/Beige Minimalist Computer Mock Up Website Launch Instagram Post (1780 x 1080 px).png",
    liveLink: "https://foodistic-3494a.web.app/",
    githubLink: "https://github.com/shahriaraf/foodistic-client",
    description: "Food delivery service.",
    technologies: ["React", "Firebase"],
  },
  {
    name: "Pet Haven",
    image: "/assets/Beige Soft Mockup Launching New Website Facebook Post (1780 x 1080 px).png",
    liveLink: "https://pet-haven-8d5ba.web.app/",
    githubLink: "https://github.com/shahriaraf/pet-haven-client",
    description: "Pet adoption platform.",
    technologies: ["React", "MongoDB"],
  },
];

const appProjects: AppProject[] = [
    {
        name: "FitOn Mobile",
        image: "/assets/your-phone-mockup-image.png", 
        githubLink: "https://github.com/shahriaraf/FitOn",
        apkLink: "/apk/application-419a7113-685e-484c-82f3-0410fcc6dcde (1).apk",
        description: "Fitness e-commerce app.",
        technologies: ["React Native", "Expo"],
    },
    {
        name: "FitOn Pro",
        image: "/assets/your-phone-mockup-image.png", 
        githubLink: "https://github.com/shahriaraf/FitOn",
        apkLink: "#",
        description: "Pro version of fitness app.",
        technologies: ["React Native", "Redux"],
    },
     {
        name: "FitOn Admin",
        image: "/assets/your-phone-mockup-image.png", 
        githubLink: "https://github.com/shahriaraf/FitOn",
        apkLink: "#",
        description: "Admin dashboard.",
        technologies: ["React Native", "Firebase"],
    },
     {
        name: "FitOn Admin",
        image: "/assets/your-phone-mockup-image.png", 
        githubLink: "https://github.com/shahriaraf/FitOn",
        apkLink: "#",
        description: "Admin dashboard.",
        technologies: ["React Native", "Firebase"],
    },
];

const Projects = () => {
  const [activeTab, setActiveTab] = useState("web");
  const [currDeg, setCurrDeg] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isPaused, setIsPaused] = useState(false); // New State for Pause

  // --- SWIPE LOGIC STATE ---
 const [touchStart, setTouchStart] = useState<number | null>(null);
const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const projects: Project[] =
  activeTab === "web" ? webProjects : appProjects;

  const count = projects.length;
  const theta = 360 / count;

  // --- RESPONSIVE CARD SIZE ---
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cardWidth = isMobile ? 260 : 500; 
  const cardHeight = isMobile ? 380 : 600;
  
  const radius = Math.round((cardWidth / 2) / Math.tan(Math.PI / count)) + (isMobile ? 30 : 80); 

  const rotateNext = () => setCurrDeg(prev => prev - theta);
  const rotatePrev = () => setCurrDeg(prev => prev + theta);

  // --- AUTO ROTATION LOGIC ---
  useEffect(() => {
    if (isPaused) return; // Stop if user is hovering

    const interval = setInterval(() => {
      rotateNext();
    }, 4000); // Rotates every 4 seconds

    return () => clearInterval(interval);
  }, [isPaused, theta]); // Re-run if paused state or theta changes

  // --- TOUCH HANDLERS ---
const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
  setIsPaused(true);
  setTouchEnd(null);
  setTouchStart(e.targetTouches[0].clientX);
};

const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
  setTouchEnd(e.targetTouches[0].clientX);
};

  const handleTouchEnd = () => {
    setIsPaused(false); // Resume after touch
    if (touchStart === null || touchEnd === null) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      rotateNext();
    }
    if (isRightSwipe) {
      rotatePrev();
    }
  };

  return (
    <section className="bg-black min-h-screen py-20 overflow-hidden w-full relative">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#491717] to-transparent opacity-50"></div>

      {/* --- HEADER --- */}
      <div className="relative z-10 px-5 md:px-10 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-6">
        <div>
           <div className="flex items-center gap-2 mb-2">
            <span className="h-[1px] w-8 bg-[#491717]"></span>
            <span className="text-[#491717] font-mono text-xs tracking-[0.3em] uppercase">My Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            SELECTED <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#491717] via-[#ff5555] to-white">WORKS</span>
          </h2>
        </div>

        {/* Tab Switcher */}
        <div className="bg-[#0a0a0a] p-1 rounded-full border border-[#491717]/30 flex shadow-[0_0_20px_rgba(73,23,23,0.2)]">
            <button
              onClick={() => { setActiveTab("web"); setCurrDeg(0); }}
              className={`px-6 py-2 rounded-full text-sm font-bold tracking-wider transition-all duration-300 
                ${activeTab === "web" 
                  ? "bg-[#491717] text-white shadow-[0_0_15px_rgba(73,23,23,0.6)]" 
                  : "text-gray-500 hover:text-white"
                }`}
            >
              WEB DEV
            </button>
            <button
              onClick={() => { setActiveTab("app"); setCurrDeg(0); }}
              className={`px-6 py-2 rounded-full text-sm font-bold tracking-wider transition-all duration-300 
                ${activeTab === "app" 
                  ? "bg-[#491717] text-white shadow-[0_0_15px_rgba(73,23,23,0.6)]" 
                  : "text-gray-500 hover:text-white"
                }`}
            >
              MOBILE APPS
            </button>
          </div>
      </div>

      {/* --- THE 3D STAGE --- */}
      <div 
        className="relative w-full h-[550px] md:h-[800px] flex justify-center items-center"
        style={{ perspective: "1200px" }}
        
        // 1. Pause Interaction Handlers
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        
        {/* ROTATING CYLINDER */}
        <div 
            className="relative transition-transform duration-1000 cubic-bezier(0.2, 0.8, 0.2, 1)"
            style={{
                width: cardWidth,
                height: cardHeight,
                transformStyle: "preserve-3d",
                transform: `translateZ(-${radius}px) rotateY(${currDeg}deg)` 
            }}
        >
            {projects.map((project, index) => {
                const rotation = index * theta;

                return (
                    <div
                        key={index}
                        className="absolute inset-0 w-full h-full"
                        style={{
                            transform: `rotateY(${rotation}deg) translateZ(${radius}px)`,
                            backfaceVisibility: "hidden", 
                            WebkitBackfaceVisibility: "hidden" 
                        }}
                    >
                        {/* --- MAIN CARD --- */}
                        <div className="w-full h-full bg-[#050505] border border-[#491717]/50 rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(0,0,0,1)] group hover:border-[#ff5555] transition-all duration-500">
                            
                            {/* Image Section */}
                            <div className="h-[65%] w-full overflow-hidden relative">
                                <img src={project.image} alt={project.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-90"></div>
                                
                                <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md px-3 py-2 rounded-lg border border-[#491717]/40 shadow-xl">
                                    <FaCode className="text-[#ff5555] text-sm" />
                                </div>
                            </div>

                            {/* Info Section */}
                            <div className="h-[35%] p-6 md:p-8 flex flex-col justify-between bg-gradient-to-b from-[#050505] to-[#1a0505]">
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 truncate group-hover:text-[#ff5555] transition-colors">{project.name}</h3>
                                    <p className="text-sm text-gray-400 line-clamp-2 leading-relaxed">{project.description}</p>
                                </div>
                                
                                <div className="flex justify-between items-center mt-4 pt-4 border-t border-[#491717]/30">
                                    <div className="flex gap-5">
                                        <a href={project.githubLink} target="_blank" className="text-gray-500 hover:text-white transition-colors" title="Code"><FaGithub size={24} /></a>
                                       {"liveLink" in project ? (
  <a
    href={project.liveLink}
    target="_blank"
    className="text-[#ff5555] hover:text-white transition-colors"
    title="Live Site"
  >
    <FaExternalLinkAlt size={22} />
  </a>
) : (
  <a
    href={project.apkLink}
    className="text-[#ff5555] hover:text-white transition-colors"
    title="Download"
  >
    <FaAndroid size={24} />
  </a>
)}

                                    </div>
                                    <div className="flex gap-2">
                                         {project.technologies.slice(0, 2).map((tech, i) => (
                                            <span key={i} className="text-[10px] md:text-xs uppercase font-bold text-[#ff5555] bg-[#491717]/20 px-3 py-1 rounded border border-[#491717]/30">
                                                {tech}
                                            </span>
                                         ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* --- REFLECTION --- */}
                        <div 
                            className="absolute top-full left-0 w-full h-full mt-6 pointer-events-none"
                            style={{
                                transform: "scaleY(-1)",
                                opacity: 0.25,
                                maskImage: "linear-gradient(transparent 50%, rgba(0,0,0,0.8))",
                                WebkitMaskImage: "linear-gradient(transparent 50%, rgba(0,0,0,0.8))"
                            }}
                        >
                             <div className="w-full h-full bg-[#0A0A0A] border border-[#491717]/30 rounded-2xl overflow-hidden grayscale">
                                <div className="h-[65%] w-full overflow-hidden">
                                    <img src={project.image} alt="" className="w-full h-full object-cover" />
                                </div>
                                <div className="h-[35%] bg-black"></div>
                             </div>
                        </div>

                    </div>
                );
            })}
        </div>

        {/* --- CONTROLS --- */}
        <div className="absolute bottom-5 flex gap-16 z-20">
            <button 
                onClick={rotatePrev} 
                className="w-16 h-16 rounded-full bg-black border border-[#491717] text-[#ff5555] flex items-center justify-center hover:bg-[#491717] hover:text-white transition-all shadow-[0_0_20px_rgba(73,23,23,0.4)] active:scale-95"
            >
                <FaArrowLeft className="text-2xl" />
            </button>
            <button 
                onClick={rotateNext} 
                className="w-16 h-16 rounded-full bg-black border border-[#491717] text-[#ff5555] flex items-center justify-center hover:bg-[#491717] hover:text-white transition-all shadow-[0_0_20px_rgba(73,23,23,0.4)] active:scale-95"
            >
                <FaArrowRight className="text-2xl" />
            </button>
        </div>

        {/* Vignette Floor */}
        <div className="absolute bottom-0 w-full h-[250px] bg-gradient-to-t from-black via-black/80 to-transparent z-0 pointer-events-none"></div>

      </div>
    </section>
  );
};

export default Projects;