// src/components/Projects.jsx
import React, { useState } from "react";
import "../App.css";
import { companiesData } from "./ProjectsData";
import { FaExternalLinkAlt, FaGithub, FaBuilding, FaChevronDown } from "react-icons/fa";
import {
    SiReact,
    SiNodedotjs,
    SiMongodb,
    SiTailwindcss,
    SiFirebase,
    SiPython,
    SiDjango,
    SiHtml5,
    SiCss3,
    SiBootstrap,
    SiJavascript,
    SiMysql,
} from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";

export default function Projects() {
    const [activeCompany, setActiveCompany] = useState("GNCIPL");
    const [expandedProject, setExpandedProject] = useState(null);

    const getTechIcon = (tech) => {
        const iconMap = {
            "React": <SiReact className="text-cyan-400" />,
            "Node.js": <SiNodedotjs className="text-green-500" />,
            "MongoDB": <SiMongodb className="text-green-600" />,
            "Express": <SiJavascript className="text-yellow-400" />,
            "Tailwind CSS": <SiTailwindcss className="text-sky-400" />,
            "Firebase": <SiFirebase className="text-yellow-500" />,
            "Python": <SiPython className="text-blue-500" />,
            "Django": <SiDjango className="text-green-700" />,
            "MySQL": <SiMysql className="text-blue-600" />,
            "HTML": <SiHtml5 className="text-orange-500" />,
            "CSS": <SiCss3 className="text-blue-500" />,
            "Bootstrap": <SiBootstrap className="text-purple-600" />,
            "JavaScript": <SiJavascript className="text-yellow-400" />,
        };
        return iconMap[tech] || <div className="w-5 h-5 bg-gray-400 rounded-full"></div>;
    };

    const getGridClass = (count) => (count >= 4 ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1");

    const currentProjects = companiesData[activeCompany].projects;
    const gridClass = getGridClass(currentProjects.length);

    return (
        <section id="projects" className="relative overflow-hidden py-20">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-800 via-pink-700 to-indigo-800 opacity-60 -z-10"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center justify-center bg-gradient-to-r from-indigo-500/20 to-purple-500/20 p-1 rounded-full mb-6">
                        <div className="bg-black/50 backdrop-blur-sm rounded-full px-6 py-2 flex items-center">
                            <FaBuilding className="text-purple-300 mr-2" />
                            <span className="text-purple-300 font-mono text-sm">COMPANY PROJECTS</span>
                        </div>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold mb-4 text-white">
                        <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                            Professional Work
                        </span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-4"></div>
                    <p className="text-lg text-gray-200 max-w-2xl mx-auto mt-4">
                        Projects developed for various companies showcasing diverse technical challenges and solutions
                    </p>
                </motion.div>

                {/* Company Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-4 mb-12"
                >
                    {Object.entries(companiesData).map(([key, company]) => (
                        <button
                            key={key}
                            onClick={() => {
                                setActiveCompany(key);
                                setExpandedProject(null);
                            }}
                            className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center ${activeCompany === key
                                ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-2xl transform scale-105"
                                : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/70 hover:text-white"
                                }`}
                        >
                            <span className="text-xl mr-2">{company.logo}</span>
                            {company.name}
                            <span className="ml-2 bg-black/20 px-2 py-1 rounded text-sm">
                                {company.projects.length}
                            </span>
                        </button>
                    ))}
                </motion.div>

                {/* Projects Grid */}
                <motion.div className={`grid ${gridClass} gap-8 mb-12`}>
                    {currentProjects.map((project) => (
                        <motion.div
                            key={project.id}
                            className="bg-black/50 backdrop-blur-xl border border-gray-700/30 rounded-3xl overflow-hidden hover:border-indigo-500/50 transition-all duration-300 group hover:shadow-2xl hover:shadow-indigo-500/20"
                        >
                            <div className="relative overflow-hidden flex items-center justify-center bg-black">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full object-contain"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                                <div className="absolute bottom-4 left-4">
                                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                                    <p className="text-purple-300 text-sm">{project.duration}</p>
                                </div>
                            </div>

                            <div className="p-6">
                                <p className="text-gray-200 mb-4 leading-relaxed line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="mb-4">
                                    <h4 className="text-sm font-semibold text-gray-400 mb-2">TECH STACK</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.techStack.slice(0, 10).map((tech, index) => (
                                            <span
                                                key={index}
                                                className="flex items-center px-3 py-1 bg-gray-800/30 rounded-lg text-sm text-gray-200"
                                                title={tech}
                                            >
                                                {getTechIcon(tech)}
                                                <span className="ml-2 max-w-20">{tech}</span>
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <button
                                        onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                                        className="flex items-center text-sm text-indigo-300 hover:text-indigo-200 w-full text-left"
                                    >
                                        <span>Key Achievements</span>
                                        <FaChevronDown className={`ml-2 transition-transform ${expandedProject === project.id ? 'rotate-180' : ''}`} />
                                    </button>
                                    <AnimatePresence>
                                        {expandedProject === project.id && (
                                            <motion.ul
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                exit={{ opacity: 0, height: 0 }}
                                                className="mt-2 space-y-1 overflow-hidden"
                                            >
                                                {project.achievements.map((achievement, index) => (
                                                    <li key={index} className="text-sm text-gray-400 flex items-start">
                                                        <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                                        <span>{achievement}</span>
                                                    </li>
                                                ))}
                                            </motion.ul>
                                        )}
                                    </AnimatePresence>
                                </div>

                                <div className="flex space-x-3 pt-4 border-t border-gray-700/50">
                                    <a
                                        href={project.liveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition-colors duration-300 flex-1 justify-center text-sm"
                                    >
                                        <FaExternalLinkAlt className="mr-2" /> Live Link
                                    </a>
                                    <a
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-300 flex-1 justify-center text-sm"
                                    >
                                        <FaGithub className="mr-2" /> Code
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
