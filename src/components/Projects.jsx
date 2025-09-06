// src/components/Projects.jsx
import React, { useState } from "react";
import "../styling/Projects.css";
import { FaExternalLinkAlt, FaGithub, FaBuilding, FaChevronDown, FaStar, FaCodeBranch } from "react-icons/fa";
import { SiReact, SiNodedotjs, SiMongodb, SiTailwindcss, SiFirebase, SiPython, SiDjango, SiDocker } from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";

export default function Projects() {
    const [activeCompany, setActiveCompany] = useState("techCorp");
    const [expandedProject, setExpandedProject] = useState(null);

    const companiesData = {
        techCorp: {
            name: "TechCorp Solutions",
            logo: "🏢",
            projects: [
                {
                    id: 1,
                    title: "E-Commerce Platform",
                    description: "Built a full-stack e-commerce solution serving 10K+ users with React, Node.js, and MongoDB. Implemented payment processing, inventory management, and admin dashboard.",
                    image: "/api/placeholder/400/250",
                    liveLink: "https://techcorp-ecommerce.com",
                    githubLink: "https://github.com/techcorp/ecommerce",
                    techStack: ["React", "Node.js", "MongoDB", "Express", "Stripe", "AWS"],
                    duration: "Jan 2023 - Present",
                    achievements: ["Increased conversion rate by 35%", "Reduced load time by 40%", "Implemented CI/CD pipeline"],
                    stars: 142,
                    forks: 38
                },
                {
                    id: 2,
                    title: "Internal Dashboard",
                    description: "Developed an analytics dashboard for internal team management with real-time metrics and reporting features.",
                    image: "/api/placeholder/400/250",
                    liveLink: "https://techcorp-dashboard.com",
                    githubLink: "https://github.com/techcorp/dashboard",
                    techStack: ["React", "Firebase", "Chart.js", "Tailwind CSS"],
                    duration: "Aug 2022 - Dec 2022",
                    achievements: ["Improved team productivity by 25%", "Automated reporting system"],
                    stars: 87,
                    forks: 21
                },
                {
                    id: 3,
                    title: "Customer Portal",
                    description: "Created a comprehensive customer portal with account management, billing, and support features.",
                    image: "/api/placeholder/400/250",
                    liveLink: "https://techcorp-portal.com",
                    githubLink: "https://github.com/techcorp/portal",
                    techStack: ["React", "Node.js", "MySQL", "Stripe", "JWT"],
                    duration: "Mar 2022 - Jul 2022",
                    achievements: ["Reduced support tickets by 45%", "Improved customer satisfaction by 30%"],
                    stars: 95,
                    forks: 29
                },
                {
                    id: 4,
                    title: "Mobile App",
                    description: "Developed a cross-platform mobile application with offline capabilities and push notifications.",
                    image: "/api/placeholder/400/250",
                    liveLink: "https://techcorp-mobile.com",
                    githubLink: "https://github.com/techcorp/mobile",
                    techStack: ["React Native", "Firebase", "Redux", "iOS", "Android"],
                    duration: "Nov 2021 - Feb 2022",
                    achievements: ["50K+ downloads", "4.8-star rating", "Featured in app stores"],
                    stars: 118,
                    forks: 42
                },
                {
                    id: 5,
                    title: "API Gateway",
                    description: "Built a scalable API gateway with rate limiting, authentication, and monitoring features.",
                    image: "/api/placeholder/400/250",
                    liveLink: "https://techcorp-api.com",
                    githubLink: "https://github.com/techcorp/api",
                    techStack: ["Node.js", "Redis", "Docker", "Kubernetes", "Prometheus"],
                    duration: "Jul 2021 - Oct 2021",
                    achievements: ["Handled 1M+ requests daily", "99.99% uptime", "Reduced latency by 60%"],
                    stars: 156,
                    forks: 51
                },
                {
                    id: 6,
                    title: "Data Analytics Platform",
                    description: "Created a real-time data analytics platform with custom dashboards and reporting tools.",
                    image: "/api/placeholder/400/250",
                    liveLink: "https://techcorp-analytics.com",
                    githubLink: "https://github.com/techcorp/analytics",
                    techStack: ["Python", "Django", "PostgreSQL", "D3.js", "WebSockets"],
                    duration: "Feb 2021 - Jun 2021",
                    achievements: ["Processed 5TB+ data", "Real-time analytics", "Custom visualization engine"],
                    stars: 103,
                    forks: 33
                }
            ]
        },
        startupInc: {
            name: "Startup Inc",
            logo: "🚀",
            projects: [
                {
                    id: 7,
                    title: "Task Management App",
                    description: "Created a collaborative task management application with real-time updates and team collaboration features for remote teams.",
                    image: "/api/placeholder/400/250",
                    liveLink: "https://startuptasks.com",
                    githubLink: "https://github.com/startupinc/tasks",
                    techStack: ["React", "Firebase", "Tailwind CSS", "Context API"],
                    duration: "Mar 2022 - Jul 2022",
                    achievements: ["Onboarded 500+ active users", "99.9% uptime", "Mobile responsive design"],
                    stars: 78,
                    forks: 19
                },
                {
                    id: 8,
                    title: "CRM System",
                    description: "Built a custom CRM system with lead tracking, pipeline management, and automation features.",
                    image: "/api/placeholder/400/250",
                    liveLink: "https://startupcrm.com",
                    githubLink: "https://github.com/startupinc/crm",
                    techStack: ["Vue.js", "Laravel", "MySQL", "WebSockets"],
                    duration: "Oct 2021 - Feb 2022",
                    achievements: ["Increased sales by 40%", "Automated lead scoring", "Integrated with 10+ tools"],
                    stars: 64,
                    forks: 15
                }
            ]
        },
        dataLabs: {
            name: "Data Labs",
            logo: "📊",
            projects: [
                {
                    id: 9,
                    title: "Social Media Analytics",
                    description: "Built a comprehensive social media analytics platform with data visualization and sentiment analysis for marketing agencies.",
                    image: "/api/placeholder/400/250",
                    liveLink: "https://datalabs-analytics.com",
                    githubLink: "https://github.com/datalabs/analytics",
                    techStack: ["Python", "Django", "PostgreSQL", "D3.js", "Docker"],
                    duration: "Jun 2021 - Feb 2022",
                    achievements: ["Processed 1M+ data points daily", "95% accuracy in sentiment analysis", "Reduced processing time by 60%"],
                    stars: 89,
                    forks: 24
                }
            ]
        },
        climateTech: {
            name: "ClimateTech",
            logo: "🌍",
            projects: [
                {
                    id: 10,
                    title: "Weather Dashboard",
                    description: "Developed a real-time weather forecasting application with interactive maps and location-based services.",
                    image: "/api/placeholder/400/250",
                    liveLink: "https://climatetech-weather.com",
                    githubLink: "https://github.com/climatetech/weather",
                    techStack: ["JavaScript", "API Integration", "Chart.js", "CSS3"],
                    duration: "Sep 2020 - May 2021",
                    achievements: ["Served 50K+ monthly users", "98% forecast accuracy", "Mobile app integration"],
                    stars: 112,
                    forks: 31
                },
                {
                    id: 11,
                    title: "Carbon Footprint Tracker",
                    description: "Created a carbon footprint calculation and tracking system for environmental consciousness.",
                    image: "/api/placeholder/400/250",
                    liveLink: "https://climatetech-carbon.com",
                    githubLink: "https://github.com/climatetech/carbon",
                    techStack: ["React Native", "Node.js", "MongoDB", "Google Maps API"],
                    duration: "Jan 2020 - Aug 2020",
                    achievements: ["10K+ downloads", "Featured in App Store", "Partnership with environmental organizations"],
                    stars: 97,
                    forks: 27
                }
            ]
        }
    };

    const getTechIcon = (tech) => {
        const iconMap = {
            "React": <SiReact className="text-cyan-400" />,
            "Node.js": <SiNodedotjs className="text-green-500" />,
            "MongoDB": <SiMongodb className="text-green-600" />,
            "Express": <SiExpress className="text-gray-300" />,
            "Tailwind CSS": <SiTailwindcss className="text-sky-400" />,
            "Firebase": <SiFirebase className="text-yellow-500" />,
            "Python": <SiPython className="text-blue-500" />,
            "Django": <SiDjango className="text-green-700" />,
            "Docker": <SiDocker className="text-blue-400" />,
            "MySQL": <SiMysql className="text-blue-600" />,
            "Redis": <SiRedis className="text-red-500" />,
            "Vue.js": <SiVuedotjs className="text-green-400" />,
            "Laravel": <SiLaravel className="text-red-600" />
        };
        return iconMap[tech] || <div className="w-5 h-5 bg-gray-400 rounded-full"></div>;
    };

    // Calculate grid columns based on project count
    const getGridClass = (count) => {
        if (count >= 6) return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";
        if (count >= 4) return "grid-cols-1 md:grid-cols-2";
        return "grid-cols-1";
    };

    const currentProjects = companiesData[activeCompany].projects;
    const gridClass = getGridClass(currentProjects.length);

    return (
        <section id="projects" className="py-20 bg-gray-950 text-white relative overflow-hidden">
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
                                ? 'rgba(99, 102, 241, 0.5)'
                                : i % 3 === 1
                                    ? 'rgba(139, 92, 246, 0.5)'
                                    : 'rgba(236, 72, 153, 0.5)',
                            animationDuration: `${Math.floor(Math.random() * 15) + 10}s`,
                            animationDelay: `${Math.floor(Math.random() * 5)}s`,
                        }}
                    ></div>
                ))}

                {/* Gradient blobs */}
                <div className="absolute top-1/4 -left-20 w-96 h-96 bg-indigo-600 rounded-full mix-blend-soft-light filter blur-3xl opacity-10 animate-pulse-slow"></div>
                <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-600 rounded-full mix-blend-soft-light filter blur-3xl opacity-10 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

                {/* Subtle grid pattern */}
                <div className="absolute inset-0 opacity-5" style={{
                    backgroundImage: 'linear-gradient(to right, #718096 1px, transparent 1px), linear-gradient(to bottom, #718096 1px, transparent 1px)',
                    backgroundSize: '50px 50px',
                }}></div>
            </div>

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
                        <div className="bg-gray-900/80 backdrop-blur-sm rounded-full px-6 py-2 flex items-center">
                            <FaBuilding className="text-purple-300 mr-2" />
                            <span className="text-purple-300 font-mono text-sm">COMPANY PROJECTS</span>
                        </div>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                            Professional Work
                        </span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-4"></div>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto mt-4">
                        Projects developed for various companies showcasing diverse technical challenges and solutions
                    </p>
                </motion.div>

                {/* Company Selection */}
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
                                : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
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

                {/* Projects Counter */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="text-center mb-8"
                >
                    <span className="bg-indigo-600/20 text-indigo-300 px-4 py-2 rounded-full text-sm">
                        Showing {currentProjects.length} project{currentProjects.length !== 1 ? 's' : ''} for {companiesData[activeCompany].name}
                    </span>
                </motion.div>

                {/* Projects Grid - Dynamic columns based on project count */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className={`grid ${gridClass} gap-8 mb-12`}
                >
                    {currentProjects.map((project) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="bg-gray-900/80 backdrop-blur-xl border border-gray-700/30 rounded-3xl overflow-hidden hover:border-indigo-500/50 transition-all duration-300 group hover:shadow-2xl hover:shadow-indigo-500/10"
                        >
                            {/* Project Image */}
                            <div className="relative overflow-hidden h-48">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
                                <div className="absolute bottom-4 left-4">
                                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                                    <p className="text-purple-300 text-sm">{project.duration}</p>
                                </div>

                                {/* GitHub Stats */}
                                <div className="absolute top-4 right-4 flex items-center space-x-3 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
                                    <span className="flex items-center text-sm text-gray-200">
                                        <FaStar className="text-yellow-400 mr-1" /> {project.stars}
                                    </span>
                                    <span className="flex items-center text-sm text-gray-200">
                                        <FaCodeBranch className="text-gray-400 mr-1" /> {project.forks}
                                    </span>
                                </div>
                            </div>

                            {/* Project Content */}
                            <div className="p-6">
                                <p className="text-gray-300 mb-4 leading-relaxed line-clamp-3">
                                    {project.description}
                                </p>

                                {/* Tech Stack */}
                                <div className="mb-4">
                                    <h4 className="text-sm font-semibold text-gray-400 mb-2">TECH STACK</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.techStack.slice(0, 4).map((tech, index) => (
                                            <span
                                                key={index}
                                                className="flex items-center px-3 py-1 bg-gray-800/50 rounded-lg text-sm text-gray-300"
                                                title={tech}
                                            >
                                                {getTechIcon(tech)}
                                                <span className="ml-2 truncate max-w-20">{tech}</span>
                                            </span>
                                        ))}
                                        {project.techStack.length > 4 && (
                                            <span className="px-3 py-1 bg-gray-800/50 rounded-lg text-sm text-gray-400">
                                                +{project.techStack.length - 4} more
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* Achievements */}
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

                                {/* Action Buttons */}
                                <div className="flex space-x-3 pt-4 border-t border-gray-700/50">
                                    <a
                                        href={project.liveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition-colors duration-300 flex-1 justify-center text-sm"
                                    >
                                        <FaExternalLinkAlt className="mr-2" />
                                        Live Demo
                                    </a>
                                    <a
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-300 flex-1 justify-center text-sm"
                                    >
                                        <FaGithub className="mr-2" />
                                        Code
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Company Summary */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/30">
                        <h3 className="text-2xl font-semibold mb-4 text-white">
                            Worked with <span className="text-indigo-400">{Object.keys(companiesData).length}+</span> Companies
                        </h3>
                        <p className="text-gray-300 mb-6">
                            Delivering high-quality solutions across various industries and tech stacks
                        </p>
                        <div className="flex flex-wrap justify-center gap-6">
                            {Object.values(companiesData).map((company, index) => (
                                <div key={index} className="flex items-center bg-gray-800/50 px-4 py-2 rounded-lg">
                                    <span className="text-xl mr-2">{company.logo}</span>
                                    <span className="text-gray-300">{company.name}</span>
                                    <span className="ml-2 text-indigo-300 text-sm">{company.projects.length} projects</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

// Additional icon components
const SiExpress = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" width="24" height="24">
        <path fill="currentColor" d="M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.728-3.225c.1-.396.199-.791.298-1.187.082-.328.136-.656.136-.975 0-.352-.066-.706-.116-1.049-.231-1.489-.956-2.52-2.275-2.52-.956 0-1.746.391-2.196 1.249a3.28 3.28 0 00-.333 1.416h-.014c0-.99.281-1.861.842-2.577.842-1.04 2.053-1.561 3.507-1.561 1.387 0 2.633.469 3.507 1.387.957 1.01 1.387 2.334 1.387 3.93 0 .656-.083 1.322-.249 1.997-.416 1.769-1.206 3.182-2.368 4.146-1.322 1.093-3.091 1.644-5.158 1.644A7.88 7.88 0 010 14.412c0-.656.083-1.311.249-1.966.166-.656.415-1.249.749-1.788C2.196 8.471 3.92 6.824 6.5 6.824c2.078 0 3.728 1.249 4.276 3.073.216.708.281 1.446.281 2.184 0 .656-.066 1.301-.216 1.935-.416 1.749-1.206 3.151-2.368 4.115-1.322 1.093-3.091 1.644-5.158 1.644A7.88 7.88 0 010 14.412z" />
    </svg>
);

const SiMysql = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" width="24" height="24">
        <path fill="currentColor" d="M16.5 17.85h2.29c.92 0 1.49-.26 1.49-1.84V7.2h-2.76v8.66c0 .46-.16.62-.57.62h-1.78v1.37h.33zm-6.14 0h2.29c.92 0 1.49-.26 1.49-1.84V7.2h-2.76v8.66c0 .46-.16.62-.57.62h-1.78v1.37h.33zm-6.14 0h2.29c.92 0 1.49-.26 1.49-1.84V7.2H4.78v8.66c0 .46-.16.62-.57.62H2.43v1.37h.33zm10.86-4.73h2.29c.92 0 1.49-.26 1.49-1.84V2.52h-2.76v8.66c0 .46-.16.62-.57.62h-1.78v1.37h.33zm-6.14 0h2.29c.92 0 1.49-.26 1.49-1.84V2.52H8.64v8.66c0 .46-.16.62-.57.62H6.29v1.37h.33zm-6.14 0h2.29c.92 0 1.49-.26 1.49-1.84V2.52H2.5v8.66c0 .46-.16.62-.57.62H.15v1.37h.33z" />
    </svg>
);

const SiRedis = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" width="24" height="24">
        <path fill="currentColor" d="M12 0c-1.2 0-2.4.2-3.6.6-1.2.4-2.4.8-3.4 1.4-1 .6-1.8 1.4-2.6 2.2-.8.8-1.4 1.6-2 2.6-.6 1-1 2.2-1.4 3.4C.2 9.6 0 10.8 0 12s.2 2.4.6 3.6c.4 1.2.8 2.4 1.4 3.4.6 1 1.4 1.8 2.2 2.6.8.8 1.6 1.4 2.6 2 1 .6 2.2 1 3.4 1.4 1.2.4 2.4.6 3.6.6s2.4-.2 3.6-.6c1.2-.4 2.4-.8 3.4-1.4 1-.6 1.8-1.4 2.6-2.2.8-.8 1.4-1.6 2-2.6.6-1 1-2.2 1.4-3.4.4-1.2.6-2.4.6-3.6s-.2-2.4-.6-3.6c-.4-1.2-.8-2.4-1.4-3.4-.6-1-1.4-1.8-2.2-2.6-.8-.8-1.6-1.4-2.6-2-1-.6-2.2-1-3.4-1.4C14.4.2 13.2 0 12 0zm0 2.4c1.2 0 2.4.2 3.6.6 1.2.4 2.4.8 3.4 1.4 1 .6 1.8 1.4 2.6 2.2.8.8 1.4 1.6 2 2.6.6 1 1 2.2 1.4 3.4.4 1.2.6 2.4.6 3.6s-.2 2.4-.6 3.6c-.4 1.2-.8 2.4-1.4 3.4-.6 1-1.4 1.8-2.2 2.6-.8.8-1.6 1.4-2.6 2-1 .6-2.2 1-3.4 1.4-1.2.4-2.4.6-3.6.6s-2.4-.2-3.6-.6c-1.2-.4-2.4-.8-3.4-1.4-1-.6-1.8-1.4-2.6-2.2-.8-.8-1.4-1.6-2-2.6-.6-1-1-2.2-1.4-3.4-.4-1.2-.6-2.4-.6-3.6s.2-2.4.6-3.6c.4-1.2.8-2.4 1.4-3.4.6-1 1.4-1.8 2.2-2.2.8-.8 1.6-1.4 2.6-2 1-.6 2.2-1 3.4-1.4 1.2-.4 2.4-.6 3.6-.6z" />
    </svg>
);

const SiVuedotjs = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" width="24" height="24">
        <path fill="currentColor" d="M24 1.61H14.06L12 5.16 9.94 1.61H0L12 22.39 24 1.61zm-12 5.37L16.12 1.61H7.88L12 6.98z" />
    </svg>
);

const SiLaravel = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" width="24" height="24">
        <path fill="currentColor" d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zM12 2.92A9.08 9.08 0 1021.08 12 9.08 9.08 0 0012 2.92zm0 16.24A7.16 7.16 0 1119.16 12 7.16 7.16 0 0112 19.16zM12 5.84A6.16 6.16 0 1018.16 12 6.16 6.16 0 0012 5.84zm0 10.32A4.16 4.16 0 1116.16 12 4.16 4.16 0 0112 16.16z" />
    </svg>
);