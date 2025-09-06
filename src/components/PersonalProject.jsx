// src/components/PersonalProjects.jsx
import React, { useState } from "react";
import { FaExternalLinkAlt, FaGithub, FaStar, FaCodeBranch, FaEye } from "react-icons/fa";
import { SiReact, SiNodedotjs, SiMongodb, SiTailwindcss, SiFirebase, SiPython, SiNextdotjs } from "react-icons/si";

export default function PersonalProjects() {
    const [selectedProject, setSelectedProject] = useState(null);

    const personalProjects = [
        {
            id: 1,
            title: "Neural Art Generator",
            description: "AI-powered art generation platform that transforms photos into artistic masterpieces using neural style transfer algorithms.",
            image: "/api/placeholder/400/300",
            liveLink: "https://neural-art.demo",
            githubLink: "https://github.com/yourusername/neural-art",
            techStack: ["React", "Python", "TensorFlow", "Three.js"],
            stars: 87,
            forks: 23,
            watches: 156
        },
        {
            id: 2,
            title: "CodeCollab",
            description: "Real-time collaborative code editor with video conferencing, perfect for remote pair programming and technical interviews.",
            image: "/api/placeholder/400/300",
            liveLink: "https://codecollab.demo",
            githubLink: "https://github.com/yourusername/codecollab",
            techStack: ["Next.js", "Socket.io", "Redis", "WebRTC"],
            stars: 45,
            forks: 12,
            watches: 98
        },
        {
            id: 3,
            title: "EcoTrack",
            description: "Sustainability tracking app that helps users monitor and reduce their carbon footprint with personalized recommendations.",
            image: "/api/placeholder/400/300",
            liveLink: "https://ecotrack.demo",
            githubLink: "https://github.com/yourusername/ecotrack",
            techStack: ["React Native", "Node.js", "MongoDB", "Chart.js"],
            stars: 32,
            forks: 8,
            watches: 76
        },
        {
            id: 4,
            title: "VoiceNotes",
            description: "Voice-to-text note taking application with natural language processing for smart organization and search capabilities.",
            image: "/api/placeholder/400/300",
            liveLink: "https://voicenotes.demo",
            githubLink: "https://github.com/yourusername/voicenotes",
            techStack: ["Vue.js", "Express", "Web Speech API", "PostgreSQL"],
            stars: 28,
            forks: 6,
            watches: 54
        },
        {
            id: 5,
            title: "GameHub",
            description: "Interactive gaming platform featuring classic games rebuilt with modern web technologies and multiplayer capabilities.",
            image: "/api/placeholder/400/300",
            liveLink: "https://gamehub.demo",
            githubLink: "https://github.com/yourusername/gamehub",
            techStack: ["React", "Phaser", "Socket.io", "Firebase"],
            stars: 21,
            forks: 5,
            watches: 43
        }
    ];

    const getTechIcon = (tech) => {
        const iconMap = {
            "React": <SiReact className="text-cyan-400 text-lg" />,
            "Next.js": <SiNextdotjs className="text-black dark:text-white text-lg" />,
            "Node.js": <SiNodedotjs className="text-green-500 text-lg" />,
            "MongoDB": <SiMongodb className="text-green-600 text-lg" />,
            "Tailwind CSS": <SiTailwindcss className="text-sky-400 text-lg" />,
            "Firebase": <SiFirebase className="text-yellow-500 text-lg" />,
            "Python": <SiPython className="text-blue-500 text-lg" />,
            "TensorFlow": <SiTensorflow className="text-orange-500 text-lg" />,
            "Socket.io": <SiSocketio className="text-black dark:text-white text-lg" />,
            "Vue.js": <SiVuedotjs className="text-green-400 text-lg" />
        };
        return iconMap[tech] || <div className="w-5 h-5 bg-gray-400 rounded-full"></div>;
    };

    return (
        <section id="personal-projects" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 z-0">
                {/* Floating particles */}
                {[...Array(15)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute rounded-full animate-float"
                        style={{
                            width: Math.floor(Math.random() * 4) + 2 + 'px',
                            height: Math.floor(Math.random() * 4) + 2 + 'px',
                            top: Math.floor(Math.random() * 100) + '%',
                            left: Math.floor(Math.random() * 100) + '%',
                            backgroundColor: i % 3 === 0
                                ? 'rgba(139, 92, 246, 0.4)'
                                : i % 3 === 1
                                    ? 'rgba(236, 72, 153, 0.4)'
                                    : 'rgba(99, 102, 241, 0.4)',
                            animationDuration: `${Math.floor(Math.random() * 15) + 10}s`,
                            animationDelay: `${Math.floor(Math.random() * 5)}s`,
                        }}
                    ></div>
                ))}

                {/* Gradient blobs */}
                <div className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20 animate-pulse-slow"></div>
                <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

                {/* Subtle grid pattern */}
                <div className="absolute inset-0 opacity-5" style={{
                    backgroundImage: 'linear-gradient(to right, #888 1px, transparent 1px), linear-gradient(to bottom, #888 1px, transparent 1px)',
                    backgroundSize: '50px 50px',
                }}></div>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-1 rounded-full mb-6 shadow-lg">
                        <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full px-6 py-2">
                            <span className="text-white font-mono text-sm">PERSONAL PROJECTS</span>
                        </div>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                        Creative <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Experiments</span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Passion projects and innovative ideas brought to life through code and creativity
                    </p>
                </div>

                {/* Uniform Hexagonal Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                    {personalProjects.map((project) => (
                        <div
                            key={project.id}
                            className="relative transform hover:scale-105 transition-transform duration-500 cursor-pointer group"
                            onClick={() => setSelectedProject(selectedProject?.id === project.id ? null : project)}
                        >
                            <div className="hexagon bg-white dark:bg-gray-800 shadow-xl border-2 border-purple-200 dark:border-purple-800 group-hover:border-purple-400 dark:group-hover:border-purple-500 transition-all duration-300">
                                <div className="hex-content">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="hex-image"
                                    />
                                    <div className="hex-overlay">
                                        <h3 className="text-white font-bold text-lg text-center mb-2">{project.title}</h3>
                                        <div className="flex justify-center space-x-2 mb-3">
                                            {project.techStack.slice(0, 3).map((tech, index) => (
                                                <span key={index} className="text-purple-200">
                                                    {getTechIcon(tech)}
                                                </span>
                                            ))}
                                            {project.techStack.length > 3 && (
                                                <span className="text-purple-200 text-sm">+{project.techStack.length - 3}</span>
                                            )}
                                        </div>
                                        <div className="flex justify-center space-x-4 text-purple-200 text-sm">
                                            <span className="flex items-center">
                                                <FaStar className="mr-1" /> {project.stars}
                                            </span>
                                            <span className="flex items-center">
                                                <FaCodeBranch className="mr-1" /> {project.forks}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Project Detail Modal */}
                {selectedProject && (
                    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                        <div className="bg-white dark:bg-gray-800 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                            <div className="relative">
                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className="absolute top-4 right-4 z-10 bg-white/90 dark:bg-gray-700/90 rounded-full p-2 hover:bg-white dark:hover:bg-gray-600 transition-colors"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>

                                <img
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    className="w-full h-48 object-cover rounded-t-3xl"
                                />

                                <div className="p-6">
                                    <div className="flex flex-wrap items-center justify-between mb-4">
                                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                                            {selectedProject.title}
                                        </h3>
                                        <div className="flex items-center space-x-3 mt-2">
                                            <a
                                                href={selectedProject.liveLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center px-3 py-1 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors text-sm"
                                            >
                                                <FaExternalLinkAlt className="mr-1" />
                                                Live
                                            </a>
                                            <a
                                                href={selectedProject.githubLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center px-3 py-1 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm"
                                            >
                                                <FaGithub className="mr-1" />
                                                Code
                                            </a>
                                        </div>
                                    </div>

                                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                                        {selectedProject.description}
                                    </p>

                                    {/* GitHub Stats */}
                                    <div className="flex space-x-4 mb-4 text-sm">
                                        <div className="flex items-center text-gray-600 dark:text-gray-300">
                                            <FaStar className="text-yellow-500 mr-1" />
                                            <span>{selectedProject.stars} stars</span>
                                        </div>
                                        <div className="flex items-center text-gray-600 dark:text-gray-300">
                                            <FaCodeBranch className="text-gray-500 mr-1" />
                                            <span>{selectedProject.forks} forks</span>
                                        </div>
                                        <div className="flex items-center text-gray-600 dark:text-gray-300">
                                            <FaEye className="text-blue-500 mr-1" />
                                            <span>{selectedProject.watches} watches</span>
                                        </div>
                                    </div>

                                    {/* Tech Stack */}
                                    <div className="mb-4">
                                        <h4 className="text-md font-semibold text-gray-900 dark:text-white mb-2">Tech Stack</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedProject.techStack.map((tech, index) => (
                                                <span
                                                    key={index}
                                                    className="flex items-center px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-lg text-gray-700 dark:text-gray-300 text-sm"
                                                >
                                                    {getTechIcon(tech)}
                                                    <span className="ml-1">{tech}</span>
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Call to Action */}
                <div className="text-center mt-12">
                    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-purple-200 dark:border-purple-800 shadow-lg">
                        <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                            Want to see more?
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            Check out my GitHub for more projects and contributions!
                        </p>
                        <a
                            href="https://github.com/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-5 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                        >
                            <FaGithub className="mr-2" />
                            Visit GitHub
                        </a>
                    </div>
                </div>
            </div>

            {/* Add custom animations to Tailwind */}
            <style jsx>{`
                @keyframes float {
                    0% {
                        transform: translateY(0) rotate(0deg);
                    }
                    50% {
                        transform: translateY(-15px) rotate(5deg);
                    }
                    100% {
                        transform: translateY(0) rotate(0deg);
                    }
                }
                @keyframes pulse-slow {
                    0%, 100% {
                        opacity: 0.15;
                    }
                    50% {
                        opacity: 0.25;
                    }
                }
                .animate-float {
                    animation: float 12s ease-in-out infinite;
                }
                .animate-pulse-slow {
                    animation: pulse-slow 10s cubic-bezier(0.4, 0, 0.6, 1) infinite;
                }
                
                .hexagon {
                    width: 220px;
                    height: 250px;
                    position: relative;
                    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
                }

                .hex-content {
                    position: absolute;
                    inset: 2px;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
                    overflow: hidden;
                }

                .hex-image {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    opacity: 0.7;
                    transition: opacity 0.3s ease;
                }

                .hex-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.3) 100%);
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    padding: 20px;
                    opacity: 0;
                    transition: opacity 0.3s ease;
                }

                .hexagon:hover .hex-overlay {
                    opacity: 1;
                }

                .hexagon:hover .hex-image {
                    opacity: 0.8;
                }
            `}</style>
        </section>
    );
}

// Additional icon components
const SiTensorflow = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" width="24" height="24">
        <path fill="currentColor" d="M1.292 5.856L11.54 0v24l-4.095-2.378V11.19L1.292 5.856zm21.43 5.856l-4.096 2.378v4.756L12.46 24V0l10.26 5.856v5.856z" />
    </svg>
);

const SiSocketio = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" width="24" height="24">
        <path fill="currentColor" d="M11.936.014a12.17 12.17 0 00-2.975.378C4.281 1.555.567 5.794.091 10.602c-.59 4.549 1.708 9.286 5.644 11.635 3.861 2.418 9.093 2.32 12.874-.223 3.397-2.206 5.512-6.227 5.386-10.285-.058-4.016-2.31-7.917-5.759-9.98A12.525 12.525 0 0011.936.014zm-.063 1.697c1.945.006 3.857.53 5.49 1.546 3.116 1.999 4.937 5.66 4.5 9.414-.428 3.582-2.585 6.782-5.764 8.13-3.265 1.38-7.323.785-9.984-1.507-2.537-2.167-3.605-5.654-2.903-8.93.723-3.35 3.384-6.052 6.66-6.653z" />
    </svg>
);

const SiVuedotjs = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" width="24" height="24">
        <path fill="currentColor" d="M24 1.61H14.06L12 5.16 9.94 1.61H0L12 22.39 24 1.61zm-12 5.37L16.12 1.61H7.88L12 6.98z" />
    </svg>
);