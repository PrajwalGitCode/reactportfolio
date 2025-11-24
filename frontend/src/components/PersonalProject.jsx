import React, { useState } from "react";
import "../styling/PersonalProject.css";
import AnimatedBackground from "./AnimatedBackground";
import { FaExternalLinkAlt, FaGithub, FaStar, FaCodeBranch, FaChevronRight } from "react-icons/fa";
import { SiReact, SiNodedotjs, SiMongodb, SiTailwindcss, SiFirebase, SiPython, SiNextdotjs, SiExpress } from "react-icons/si";

import passgen from "../images/passgen.png";
import ministore from "../images/ministore.png";
import authpro from "../images/authpro.png";
import agent from "../images/agent.png";

export default function PersonalProjects() {
    const [activeId, setActiveId] = useState(1);
    const personalProjects = [
        {
            id: 1,
            title: "Agent Manager",
            shortDesc: "Task management system with admin login and agent creation features.",
            description: "Role-based admin dashboard where the admin (email: admin@something.com, password: something@123) can create agents, assign tasks, and manage their login credentials.",
            image: agent,
            liveLink: "https://fabulous-puppy-e9982f.netlify.app/admin",
            githubLink: "https://github.com/PrajwalGitCode/agenttask",
            techStack: ["MongoDB", "Express.js", "React", "Node.js", "Tailwind CSS", "JWT Authentication", "Socket.IO", "Axios"],
        },
        {
            id: 2,
            title: "Ministore",
            shortDesc: "Mini e-commerce app",
            description: "A simple MERN-based online store with user login/signup, product upload, product browsing, cart management, and a smooth checkout flow.",
            image: ministore,
            liveLink: "https://meek-gumption-377e83.netlify.app/",
            githubLink: "https://github.com/PrajwalGitCode/Ministore",
            techStack: ["MongoDB", "Express.js", "React", "Node.js", "Tailwind CSS", "JWT Authentication", "Socket.IO", "Axios"],
        },
        {
            id: 3,
            title: "Password Generator",
            shortDesc: "Secure password generator and manager",
            description: "A simple password management system where users can log in, generate strong passwords, save them, view saved entries, and delete them securely.",
            image: passgen,
            liveLink: "https://sweet-salmiakki-passwordgen.netlify.app/landing",
            githubLink: "https://github.com/PrajwalGitCode/nextpassgen",
            techStack: ["MongoDB", "Express.js", "Next.js", "React", "Node.js", "Tailwind CSS", "JWT Authentication", "Socket.IO", "Axios"],
        },
        {
            id: 4,
            title: "Authentication UI",
            shortDesc: "Simple React authentication interface",
            description: "Frontend-only React + Tailwind UI featuring login, signup, and a basic user profile screen.",
            image: authpro,
            liveLink: "https://dazzling-khapse-e7c44f.netlify.app/",
            githubLink: "https://github.com/PrajwalGitCode/reacttaskedu/tree/main",
            techStack: ["React", "Tailwind CSS"],
        }
    ];

    const activeProject = personalProjects.find((p) => p.id === activeId);

    const getTechIcon = (tech) => {
        const iconMap = {
            "React": <SiReact className="text-cyan-400" />,
            "React Native": <SiReact className="text-cyan-400" />,
            "Next.js": <SiNextdotjs className="text-white" />,
            "Node.js": <SiNodedotjs className="text-green-500" />,
            "MongoDB": <SiMongodb className="text-green-600" />,
            "Tailwind CSS": <SiTailwindcss className="text-sky-400" />,
            "Tailwind": <SiTailwindcss className="text-sky-400" />,
            "Firebase": <SiFirebase className="text-yellow-500" />,
            "Python": <SiPython className="text-blue-500" />,
            "Express.js": <SiExpress className="text-gray-400" />,
        };
        return iconMap[tech] || <div className="w-4 h-4 bg-gray-400 rounded-full"></div>;
    };

    return (
        <section id="personal-projects" className="relative overflow-hidden py-24">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-pink-800 to-indigo-900 opacity-50 -z-10"></div>
            <AnimatedBackground particleCount={150} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center justify-center bg-white/30 dark:bg-gray-800/30 backdrop-blur-lg p-1 rounded-full mb-6 shadow-2xl border border-white/20">
                        <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full px-6 py-2 shadow-lg">
                            <span className="text-white font-mono text-sm font-semibold tracking-wide">PERSONAL PROJECTS</span>
                        </div>

                    </div>

                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white">
                        Creative <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">Experiments</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-4"></div>
                    <p className="text-lg text-gray-100 max-w-2xl mx-auto leading-relaxed">
                        Passion projects and innovative ideas brought to life through code and creativity.
                    </p>
                </div>

                {/* MAIN LAYOUT */}
                <div className="flex flex-col lg:flex-row gap-8 min-h-[50px] md:min-h-[700px] lg:h-[550px]">
                    {/* LEFT PANEL — Project List */}
                    <div className="w-full lg:w-1/3 flex flex-col gap-4 max-h-full overflow-y-auto pr-1 lg:pr-2 custom-scrollbar">
                        {personalProjects.map((project) => (
                            <button
                                key={project.id}
                                onClick={() => setActiveId(project.id)}
                                className={`group text-left p-4 rounded-xl transition-all duration-300 border ${activeId === project.id
                                    ? "bg-white/10 border-purple-500 shadow-lg shadow-purple-900/20"
                                    : "bg-transparent border-white/5 hover:bg-white/5 hover:border-white/20"
                                    }`}
                            >
                                <div className="flex justify-between items-center mb-1">
                                    <h3 className={`font-bold text-base ${activeId === project.id ? "text-white" : "text-gray-400 group-hover:text-white"}`}>
                                        {project.title}
                                    </h3>
                                    {activeId === project.id && <FaChevronRight className="text-pink-400 animate-pulse" />}
                                </div>
                                <p className="text-sm text-gray-400 mb-2">{project.shortDesc}</p>
                            </button>
                        ))}
                    </div>

                    {/* RIGHT PANEL — Project Preview */}
                    <div className="lg:w-2/3 relative group perspective-1000">
                        <div className="h-full bg-[#161625] border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col relative animate-fade-in-up">
                            {/* IMAGE SECTION */}
                            <div className="h-[180px] sm:h-[220px] md:h-[260px] lg:h-[45%] relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-[#161625]/70 via-transparent to-transparent z-10"></div>
                                <img
                                    src={activeProject.image}
                                    alt={activeProject.title}
                                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                                />
                            </div>

                            {/* TEXT SECTION */}
                            <div className="p-5 sm:p-6 flex flex-col gap-4 relative z-20 h-auto lg:h-[55%]">
                                <div>
                                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 flex items-center gap-2">
                                        {activeProject.title}
                                        <div className="h-px flex-grow bg-gradient-to-r from-purple-500/50 to-transparent ml-2"></div>
                                    </h3>

                                    <p className="text-gray-300 text-base leading-relaxed">
                                        {activeProject.description}
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-1">
                                    {activeProject.techStack.map((tech, i) => (
                                        <span key={i} className="px-2 py-1 bg-black/60 backdrop-blur-md rounded-full text-xs font-mono text-gray-300 border border-white/10 flex items-center gap-1">
                                            {getTechIcon(tech)} {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex flex-col sm:flex-row gap-3 mt-4">
                                    <a
                                        href={activeProject.liveLink}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-2 px-5 rounded-lg shadow-lg hover:shadow-purple-500/30 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 text-sm"
                                    >
                                        Live Link <FaExternalLinkAlt />
                                    </a>

                                    <a
                                        href={activeProject.githubLink}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="px-5 py-2 border border-white/20 rounded-lg text-white font-semibold hover:bg-white/5 transition-colors flex items-center gap-2 justify-center text-sm"
                                    >
                                        <FaGithub size={18} /> Code
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );


}
