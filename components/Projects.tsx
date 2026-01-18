'use client';

import React, { useState, useEffect } from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaAndroid,
  FaArrowLeft,
  FaArrowRight,
  FaCode,
} from "react-icons/fa";

/* =======================
   TYPES
======================= */
type WebProject = {
  type: "web";
  name: string;
  image: string;
  liveLink: string;
  githubLink: string;
  description: string;
  technologies: string[];
};

type AppProject = {
  type: "app";
  name: string;
  image: string;
  githubLink: string;
  apkLink: string;
  description: string;
  technologies: string[];
};

type Project = WebProject | AppProject;

/* =======================
   DATA
======================= */
const webProjects: WebProject[] = [
  {
    type: "web",
    name: "Aaryan Sourcing",
    image: "/assets/Minimalist Neutral Multi Device Computer Mockup Website Launch Instagram Post (1580 x 1080 px) (1780 x 1080 px) (1).png",
    liveLink: "https://aaryansourcing.com/",
    githubLink: "https://github.com/shahriaraf/Aariyan-Sourching-Client",
    description: "B2B sourcing platform.",
    technologies: ["React", "Node.js", "MongoDB"],
  },
  {
    type: "web",
    name: "Rentechify",
    image: "/assets/Modern Neutral Digital Product Computer Mockup Promotional Instagram Post (1780 x 1080 px) (1).png",
    liveLink: "https://rentechify.web.app/",
    githubLink: "https://github.com/codegeeksteam/RentifyTech",
    description: "Tech rental marketplace.",
    technologies: ["React", "Tailwind", "Firebase"],
  },
  {
    type: "web",
    name: "Leading University",
    image: "/assets/Minimalist Neutral Multi Device Computer Mockup Website Launch Instagram Post (1780 x 1080 px).png",
    liveLink: "https://leading-university-jet.vercel.app/",
    githubLink: "https://github.com/shahriaraf/Leading-University",
    description: "University portal system.",
    technologies: ["React", "Node.js", "Vercel"],
  },
  {
    type: "web",
    name: "Home Bite",
    image: "/assets/Beige Minimalist Computer Mock Up Website Launch Instagram Post (1780 x 1080 px).png",
    liveLink: "https://foodistic-3494a.web.app/",
    githubLink: "https://github.com/shahriaraf/foodistic-client",
    description: "Food delivery service.",
    technologies: ["React", "Firebase"],
  },
  {
    type: "web",
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
    type: "app",
    name: "FitOn Mobile",
    image: "/assets/your-phone-mockup-image.png",
    githubLink: "https://github.com/shahriaraf/FitOn",
    apkLink: "/apk/application.apk",
    description: "Fitness e-commerce app.",
    technologies: ["React Native", "Expo"],
  },
  {
    type: "app",
    name: "FitOn Pro",
    image: "/assets/your-phone-mockup-image.png",
    githubLink: "https://github.com/shahriaraf/FitOn",
    apkLink: "#",
    description: "Pro version of fitness app.",
    technologies: ["React Native", "Redux"],
  },
  {
    type: "app",
    name: "FitOn Admin",
    image: "/assets/your-phone-mockup-image.png",
    githubLink: "https://github.com/shahriaraf/FitOn",
    apkLink: "#",
    description: "Admin dashboard.",
    technologies: ["React Native", "Firebase"],
  },
];

/* =======================
   COMPONENT
======================= */
const Projects = () => {
  const [activeTab, setActiveTab] = useState<"web" | "app">("web");
  const [currDeg, setCurrDeg] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const projects: Project[] =
    activeTab === "web" ? webProjects : appProjects;

  const count = projects.length;
  const theta = 360 / count;

  /* Responsive */
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cardWidth = isMobile ? 260 : 500;
  const cardHeight = isMobile ? 380 : 600;
  const radius =
    Math.round((cardWidth / 2) / Math.tan(Math.PI / count)) +
    (isMobile ? 30 : 80);

  const rotateNext = () => setCurrDeg((p) => p - theta);
  const rotatePrev = () => setCurrDeg((p) => p + theta);

  /* Auto rotation */
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(rotateNext, 4000);
    return () => clearInterval(interval);
  }, [isPaused, theta]);

  /* Touch handlers */
  const handleTouchStart = (
    e: React.TouchEvent<HTMLDivElement>
  ) => {
    setIsPaused(true);
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (
    e: React.TouchEvent<HTMLDivElement>
  ) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    setIsPaused(false);
    if (touchStart === null || touchEnd === null) return;

    const distance = touchStart - touchEnd;
    if (distance > 50) rotateNext();
    if (distance < -50) rotatePrev();
  };

  return (
    <section className="bg-black min-h-screen py-20 overflow-hidden w-full relative">
      <div
        className="relative w-full h-[550px] md:h-[800px] flex justify-center items-center"
        style={{ perspective: "1200px" }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="relative transition-transform duration-1000"
          style={{
            width: cardWidth,
            height: cardHeight,
            transformStyle: "preserve-3d",
            transform: `translateZ(-${radius}px) rotateY(${currDeg}deg)`,
          }}
        >
          {projects.map((project, index) => {
            const rotation = index * theta;

            return (
              <div
                key={index}
                className="absolute inset-0"
                style={{
                  transform: `rotateY(${rotation}deg) translateZ(${radius}px)`,
                  backfaceVisibility: "hidden",
                }}
              >
                <div className="w-full h-full bg-[#050505] border border-[#491717]/50 rounded-2xl overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-[65%] object-cover"
                  />

                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white">
                      {project.name}
                    </h3>
                    <p className="text-sm text-gray-400 mt-2">
                      {project.description}
                    </p>

                    <div className="flex gap-4 mt-4">
                      <a href={project.githubLink} target="_blank">
                        <FaGithub />
                      </a>

                      {project.type === "web" ? (
                        <a href={project.liveLink} target="_blank">
                          <FaExternalLinkAlt />
                        </a>
                      ) : (
                        <a href={project.apkLink}>
                          <FaAndroid />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="absolute bottom-5 flex gap-16">
          <button onClick={rotatePrev}>
            <FaArrowLeft />
          </button>
          <button onClick={rotateNext}>
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
