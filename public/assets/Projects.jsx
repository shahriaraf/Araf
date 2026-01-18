import React, { useState, useEffect, useRef } from "react";
import { FaGithub, FaExternalLinkAlt, FaAndroid } from "react-icons/fa";

// --- DATA ---
const webProjects = [
  {
    name: "Aaryan Sourcing",
    image: "/asset/Minimalist Neutral Multi Device Computer Mockup Website Launch Instagram Post (1580 x 1080 px) (1780 x 1080 px) (1).png",
    liveLink: "https://aaryansourcing.com/",
    githubLink: "https://github.com/shahriaraf/Aariyan-Sourching-Client",
    description: "B2B sourcing platform.",
    technologies: ["React", "Node.js", "MongoDB"],
  },
  {
    name: "Rentechify",
    image: "/asset/Modern Neutral Digital Product Computer Mockup Promotional Instagram Post (1780 x 1080 px) (1).png",
    liveLink: "https://rentechify.web.app/",
    githubLink: "https://github.com/codegeeksteam/RentifyTech",
    description: "Tech rental marketplace.",
    technologies: ["React", "Tailwind", "Firebase"],
  },
  {
    name: "Leading University",
    image: "/asset/Minimalist Neutral Multi Device Computer Mockup Website Launch Instagram Post (1780 x 1080 px).png",
    liveLink: "https://leading-university-jet.vercel.app/",
    githubLink: "https://github.com/shahriaraf/Leading-University",
    description: "University portal system.",
    technologies: ["React", "Node.js", "Vercel"],
  },
  {
    name: "Home Bite",
    image: "/asset/Beige Minimalist Computer Mock Up Website Launch Instagram Post (1780 x 1080 px).png",
    liveLink: "https://foodistic-3494a.web.app/",
    githubLink: "https://github.com/shahriaraf/foodistic-client",
    description: "Food delivery service.",
    technologies: ["React", "Firebase"],
  },
  {
    name: "Pet Haven",
    image: "/asset/Beige Soft Mockup Launching New Website Facebook Post (1780 x 1080 px).png",
    liveLink: "https://pet-haven-8d5ba.web.app/",
    githubLink: "https://github.com/shahriaraf/pet-haven-client",
    description: "Pet adoption platform.",
    technologies: ["React", "MongoDB"],
  },
];

const appProjects = [
    {
        name: "FitOn Mobile",
        image: "/asset/your-phone-mockup-image.png", 
        githubLink: "https://github.com/shahriaraf/FitOn",
        apkLink: "/apk/application-419a7113-685e-484c-82f3-0410fcc6dcde (1).apk",
        description: "Fitness e-commerce app.",
        technologies: ["React Native", "Expo"],
    },
    {
        name: "FitOn Pro",
        image: "/asset/your-phone-mockup-image.png", 
        githubLink: "https://github.com/shahriaraf/FitOn",
        apkLink: "#",
        description: "Pro version of fitness app.",
        technologies: ["React Native", "Redux"],
    },
     {
        name: "FitOn Admin",
        image: "/asset/your-phone-mockup-image.png", 
        githubLink: "https://github.com/shahriaraf/FitOn",
        apkLink: "#",
        description: "Admin dashboard.",
        technologies: ["React Native", "Firebase"],
    },
     {
        name: "FitOn Admin",
        image: "/asset/your-phone-mockup-image.png", 
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

  // --- SWIPE LOGIC STATE ---
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const projects = activeTab === "web" ? webProjects : appProjects;
  const count = projects.length;
  const theta = 360 / count;

  // --- RESPONSIVE CARD SIZE ---
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    // Set initial
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Mobile: 240px width (allows side cards to show), Desktop: 340px
  const cardWidth = isMobile ? 240 : 340; 
  const cardHeight = isMobile ? 360 : 460;
  
  // Calculate Radius: Adjusted for mobile to bring cards closer
  const radius = Math.round((cardWidth / 2) / Math.tan(Math.PI / count)) + (isMobile ? 30 : 50); 

  const rotateNext = () => setCurrDeg(currDeg - theta);
  const rotatePrev = () => setCurrDeg(currDeg + theta);

  // --- TOUCH HANDLERS ---
  const handleTouchStart = (e) => {
    setTouchEnd(null); // Reset
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
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
    <section className="bg-black min-h-screen py-20 overflow-hidden lg:pl-[220px] xl:pl-[320px] pl-0">
      
      {/* --- HEADER --- */}
      <div className="relative z-10 px-5 md:px-10 max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-end mb-10 gap-6">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
            Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7AE2CF] to-white">Works</span>
          </h2>
          <p className="text-gray-400">Swipe or use buttons to rotate.</p>
        </div>

        <div className="bg-[#111] p-0 md:p-1 mr-4 rounded-full border border-white/10 flex">
            <button
              onClick={() => { setActiveTab("web"); setCurrDeg(0); }}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 ${activeTab === "web" ? "bg-[#7AE2CF] text-black shadow-[0_0_15px_rgba(122,226,207,0.4)]" : "text-gray-400 hover:text-white"}`}
            >
              Web Dev
            </button>
            <button
              onClick={() => { setActiveTab("app"); setCurrDeg(0); }}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 ${activeTab === "app" ? "bg-[#7AE2CF] text-black shadow-[0_0_15px_rgba(122,226,207,0.4)]" : "text-gray-400 hover:text-white"}`}
            >
              Apps
            </button>
          </div>
      </div>

      {/* --- THE 3D STAGE --- */}
      <div 
        className="relative w-full h-[500px] md:h-[600px] flex justify-center items-center"
        style={{ perspective: "1000px" }}
        // Attach Touch Events Here
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
                        className="absolute inset-0 w-full h-full bg-black/50"
                        style={{
                            transform: `rotateY(${rotation}deg) translateZ(${radius}px)`,
                            backfaceVisibility: "hidden", 
                            WebkitBackfaceVisibility: "hidden" 
                        }}
                    >
                        {/* --- MAIN CARD --- */}
                        <div className="w-full h-full bg-[#0A0A0A] border-2 border-[#7AE2CF]/40 rounded-xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,1)] group hover:border-[#7AE2CF] transition-all duration-300">
                            
                            {/* Image Section */}
                            <div className="h-[60%] w-full overflow-hidden relative">
                                <img src={project.image} alt={project.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
                                
                                <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md px-2 py-1 rounded-md border border-[#7AE2CF]/20">
                                    <i className="fas fa-code text-[#7AE2CF] text-xs"></i>
                                </div>
                            </div>

                            {/* Info Section */}
                            <div className="h-[40%] p-4 md:p-6 flex flex-col justify-between bg-gradient-to-b from-black to-[#0d1f1b]">
                                <div>
                                    <h3 className="text-lg md:text-2xl font-bold text-white mb-1 truncate">{project.name}</h3>
                                    <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed">{project.description}</p>
                                </div>
                                
                                <div className="flex justify-between items-center mt-3 pt-3 border-t border-white/10">
                                    <div className="flex gap-4">
                                        <a href={project.githubLink} target="_blank" className="text-gray-400 hover:text-white transition-colors" title="Code"><FaGithub size={20} /></a>
                                        {activeTab === 'web' ? (
                                            <a href={project.liveLink} target="_blank" className="text-[#7AE2CF] hover:text-white transition-colors" title="Live Site"><FaExternalLinkAlt size={18} /></a>
                                        ) : (
                                            <a href={project.apkLink} className="text-[#7AE2CF] hover:text-white transition-colors" title="Download"><FaAndroid size={20} /></a>
                                        )}
                                    </div>
                                    <div className="flex gap-1">
                                         {project.technologies.slice(0, 2).map((tech, i) => (
                                            <span key={i} className="text-[9px] md:text-[10px] uppercase font-bold text-[#7AE2CF] bg-[#7AE2CF]/10 px-2 py-1 rounded border border-[#7AE2CF]/20">
                                                {tech}
                                            </span>
                                         ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* --- REFLECTION --- */}
                        <div 
                            className="absolute top-full left-0 w-full h-full mt-2 pointer-events-none"
                            style={{
                                transform: "scaleY(-1)",
                                opacity: 0.35,
                                maskImage: "linear-gradient(transparent 40%, rgba(0,0,0,0.8))",
                                WebkitMaskImage: "linear-gradient(transparent 40%, rgba(0,0,0,0.8))"
                            }}
                        >
                             <div className="w-full h-full bg-[#0A0A0A] border-2 border-[#7AE2CF]/20 rounded-xl overflow-hidden grayscale">
                                <div className="h-[60%] w-full overflow-hidden">
                                    <img src={project.image} alt="" className="w-full h-full object-cover" />
                                </div>
                                <div className="h-[40%] bg-black"></div>
                             </div>
                        </div>

                    </div>
                );
            })}
        </div>

        {/* --- CONTROLS --- */}
        <div className="absolute bottom-5 flex gap-12 z-20">
            <button 
                onClick={rotatePrev} 
                className="w-14 h-14 rounded-full bg-black border border-[#7AE2CF] text-[#7AE2CF] flex items-center justify-center hover:bg-[#7AE2CF] hover:text-black transition-all shadow-[0_0_20px_rgba(122,226,207,0.4)] active:scale-90"
            >
                <i className="fas fa-arrow-left text-xl"></i>
            </button>
            <button 
                onClick={rotateNext} 
                className="w-14 h-14 rounded-full bg-black border border-[#7AE2CF] text-[#7AE2CF] flex items-center justify-center hover:bg-[#7AE2CF] hover:text-black transition-all shadow-[0_0_20px_rgba(122,226,207,0.4)] active:scale-90"
            >
                <i className="fas fa-arrow-right text-xl"></i>
            </button>
        </div>

        {/* Vignette Floor */}
        <div className="absolute bottom-0 w-full h-[200px] bg-gradient-to-t from-black via-black/80 to-transparent z-0 pointer-events-none"></div>

      </div>
    </section>
  );
};

export default Projects;