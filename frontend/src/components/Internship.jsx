// src/components/internships.jsx
import React from "react";
import "../App.css"
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedBackground from "./AnimatedBackground";
import { FaRegCalendarAlt, FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function Internships() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (i) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };
  const internships = [
    {
      internship: "Global Next Consulting India Private Limited",
      role: "MERN Stack Developer Intern",
      duration: "August 2025 – October 2025",
      items: [
        {
          title: "Product Launch Website",
          description:
            "Developed a responsive front-end website to showcase product launch details with modern layouts, smooth animations, and a clean UI design for enhanced user experience.",
          skills: ["HTML", "CSS", "JavaScript", "Responsive Design", "UI/UX"]
        },
        {
          title: "Full-Stack Web Applications",
          description:
            "Built and deployed multiple full-stack applications including a social media platform, currency exchange manager, portfolio tracker API, and a task manager app — integrating React, Node.js, Express, and MongoDB for seamless functionality.",
          skills: ["MERN Stack", "React", "Node.js", "Express", "MongoDB", "API Integration", "CRUD Operations"]
        },
        {
          title: "Global Connect (Major Team Project)",
          description:
            "Collaborated in a team to develop a global networking platform enabling real-time communication, user connections, and community engagement using the MERN stack.",
          skills: ["MERN Stack", "React", "Node.js", "Express", "MongoDB", "Team Collaboration", "Real-Time Communication"]
        }
      ],
    },
    {
      internship: "Navikshaa Technologies ",
      role: "MERN Stack Developer Intern",
      duration: "May 2025 – September 2025",
      items: [
        {
          title: "Lead Management System",
          description:
            "A role-based lead management platform with separate dashboards for Admin, Sales, and Marketing teams. Includes lead import/assignment, status tracking (callback, follow-up, etc.), advanced search, notifications, and interactive slider controls for streamlined workflow management.",
          skills: ["MERN Stack", "React", "Node.js", "Express", "MongoDB", "REST API", "Role-Based Access Control"]
        },
        {
          title: "Learning Management System (LMS)",
          description:
            "Contributed to the development of an LMS platform with a focus on user authentication, secure data handling, and an intuitive dashboard interface for improved user experience.",
          skills: ["React", "Node.js", "Express", "MongoDB", "JWT Authentication", "UI/UX Design"]
        },
        {
          title: "Real-Time Chat Application",
          description:
            "Developed a real-time chat platform supporting instant messaging, user authentication, and active user status updates using WebSocket communication for seamless interactions.",
          skills: ["MERN Stack", "React", "Node.js", "Express", "MongoDB", "Socket.IO", "Real-Time Communication"]
        },
        {
          title: "Responsive Front-End Dashboards",
          description:
            "Developed responsive dashboards for Travel, E-commerce, and IT platforms using React, Tailwind CSS, and Bootstrap, emphasizing clean UI design and seamless user experience across devices.",
          skills: ["React", "Tailwind CSS", "Bootstrap", "Responsive Design", "UI/UX"]
        }
      ],
    },

    {
      internship: "MicroDegree ",
      role: "Python Full-Stack Intern",
      duration: "July 2024 – October 2024",
      items: [
        {
          title: "Tech Store Website",
          description:
            "An e-commerce store built with Django, SQL, and deployed on PythonAnywhere.",
          skills: ["Python", "Django", "SQL", "Deployment"],
        },
        {
          title: "One-Stop Bank App",
          description:
            "A Django-based app with account management, transactions, and API integration.",
          skills: ["Python", "Django", "API", "Postman"],
        },
      ],
    },
    {
      internship: "Debug Deployment Technologies",
      role: "Web Development Intern",
      duration: "February 2024 – March 2024",
      items: [
        {
          title: "To-Do List App",
          description:
            "A task management web app using HTML, CSS, Bootstrap, and JavaScript.",
          skills: ["JavaScript", "Bootstrap", "HTML", "CSS"],
        },
        {
          title: "Portfolio Website",
          description:
            "Designed and developed a responsive modern personal portfolio site.",
          skills: ["HTML", "CSS", "JavaScript"],
        },
        {
          title: "Responsive Website Clone",
          description:
            "Pixel-perfect responsive clone of a modern landing page.",
          skills: ["JavaScript", "Responsive Design"],
        },
      ],
    },
    {
      internship: "UnifyCX · Full Time",
      role: "Graduate Engineer Trainee",
      duration: "November 2023 – January 2024",
      items: [
        {
          title: "Technical Support Engineer (Level 1)",
          description:
            "Provided level-one technical support for web hosting issues, efficiently handling multiple customer chats simultaneously and ensuring timely issue resolution.",
          skills: ["Customer Support", "Web Hosting", "Problem-Solving", "Communication", "CRM Tools"],
        },
        {
          title: "Troubleshooting & Escalation",
          description:
            "Troubleshot and escalated technical problems, maintaining accurate and detailed records using CRM tools for streamlined workflows.",
          skills: ["Troubleshooting", "Escalation Management", "CRM Tools", "Documentation"],
        },
        {
          title: "Customer Experience",
          description:
            "Demonstrated strong problem-solving and communication skills, consistently delivering a positive and professional customer experience in a fast-paced environment.",
          skills: ["Customer Service", "Communication", "Problem-Solving", "Multitasking"],
        },

      ],
    },
    {
      internship: "Nayepankh Foundation",
      duration: "September 2023 – December 2023",
      role: "Graphic Design Intern",
      items: [
        {
          title: "Graphic Design Intern - Visual Assets",
          description:
            "Created custom graphics, templates, and visual assets to support branding and marketing campaigns across digital platforms.",
          skills: ["Graphic Design", "Canva", "Figma", "Creativity"],
        },
        {
          title: "Graphic Design Intern - Collaboration",
          description:
            "Worked with teams to design social media creatives, presentations, and promotional materials, ensuring consistency in branding and design quality.",
          skills: ["Collaboration", "Branding", "Figma", "Canva", "Communication"],
        },


      ],
    },
    {
      internship: "GaoTEK",
      role: "Internship",
      duration: "September 2023 – December 2023",
      items: [
        {
          title: "WordPress - Catalog Management",
          description:
            "Executed product uploads and catalog management using the WordPress framework, ensuring accuracy and consistency in online listings.",
          skills: ["WordPress", "Catalog Management", "Attention to Detail", "Content Management"],
        },
        {
          title: "WordPress - Website Development & Support",
          description:
            "Designed and developed WordPress websites with custom layouts and user-friendly interfaces. Troubleshot and resolved technical issues to improve site functionality and performance.",
          skills: ["WordPress", "Custom Layouts", "UI/UX", "Troubleshooting", "Performance Optimization"],
        },
      ],
    },
    {
      internship: "Suven Consultants & Technology Pvt. Ltd.",
      role: "UI/UX Internship",
      duration: "June 2021 – July 2021",
      items: [
        {
          title: "Intern — Suven Consultants & Technology Pvt. Ltd. (Web Development)",
          description:
            "Developed multiple responsive website clones including EarBot, E-Learn, E-Food, Tutor Point, Alumni Website, and Oppex using HTML, CSS, Bootstrap, and JavaScript.",
          skills: ["HTML", "CSS", "Bootstrap", "JavaScript", "Web Development"],
        },
        {
          title: "Intern — Suven Consultants & Technology Pvt. Ltd. (Responsive Design)",
          description:
            "Focused on creating modern layouts with pixel-perfect design, ensuring seamless functionality and user experience across all devices.",
          skills: ["Responsive Design", "UI/UX", "Cross-Browser Compatibility", "Attention to Detail"],
        },
      ],
    },
    {
      internship: "Internship Studio",
      role: "Web Development Intern",
      duration: "Jun 2020 – Jul 2020",
      items: [
        {
          title: "Resume Website",
          description: "A basic personal resume website using HTML & CSS.",
          skills: ["HTML", "CSS"],
        },
        {
          title: "CSS Cheat Sheet Website",
          description: "Quick reference guide for common CSS features.",
          skills: ["CSS", "Web Design"],
        },
        {
          title: "E-commerce Website",
          description: "A responsive online store with cart functionality.",
          skills: ["HTML", "CSS", "JavaScript"],
        },
      ],
    },
  ];

  return (
    <section
      id="internships"
      className="relative py-20 bg-gray-950 text-white overflow-hidden"
    >
      <AnimatedBackground particleCount={170} />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold">
            Work{" "}
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 mx-auto mt-4"></div>
        </div>

        {/* Timeline Line */}
        <div className="absolute left-1/2 top-40 bottom-10 w-1 bg-gradient-to-b 
        from-pink-500 via-purple-500 to-indigo-500 rounded-full transform -translate-x-1/2 z-0"></div>

        {/* Timeline Items */}
        <div className="space-y-20 relative">
          {internships.map((internship, i) => (
            <div
              key={i}
              className={`relative flex items-start ${i % 2 === 0 ? "justify-start" : "justify-end"
                }`}
            >
              {/* Connector Dot */}
              <span className="absolute left-1/2 w-6 h-6 bg-gradient-to-r 
              from-pink-500 to-purple-500 rounded-full border-4 border-gray-950 
              transform -translate-x-1/2 z-10 shadow-lg shadow-pink-500/30 animate-pulse"></span>

              {/* Card */}
              <div
                className={`w-full md:w-5/12 p-6 rounded-2xl bg-gray-900/70 backdrop-blur-md 
                border border-gray-700/50 shadow-xl hover:shadow-pink-500/20 transition-all duration-300
                ${i % 2 === 0 ? "mr-auto text-left" : "ml-auto text-right"}`}
              >
                {/* Internship Header */}
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-pink-400">
                    {internship.internship}
                    <p className="text-sm mt-3 font-semibold text-[#E0E0E0] tracking-wide">
                      {internship.role}
                    </p>
                  </h3>

                  <div className="inline-flex items-center gap-2 text-sm px-3 mt-5 py-1 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/30 text-pink-300">
                    <FaRegCalendarAlt className="text-pink-300" />
                    {internship.duration}
                  </div>
                </div>
                {/* Dropdown Toggle Button */}
                <button
                  onClick={() => toggleOpen(i)}
                  className={`mt-2 px-4 py-2 text-sm rounded-lg font-medium transition 
                  bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/30
                  hover:bg-pink-500/30 ${i % 2 === 0 ? "text-left" : "text-right"}`}
                >
                  {openIndex === i ? (
                    <>
                      Hide Details <FaChevronUp className="inline ml-1" />
                    </>
                  ) : (
                    <>
                      More Details <FaChevronDown className="inline ml-1" />
                    </>
                  )}

                </button>

                {/* Dropdown Content */}
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden mt-6"
                    >
                      <div className="space-y-6">
                        {internship.items.map((project, idx) => (
                          <div
                            key={idx}
                            className="p-5 bg-gradient-to-br from-gray-800/70 to-gray-900/70 
                            border border-gray-700 rounded-xl hover:border-pink-400/30  
                            hover:shadow-md hover:shadow-pink-500/10 transition-all duration-300"
                          >
                            <h4 className="text-lg font-medium text-white">
                              {project.title}
                            </h4>

                            <p className="text-sm text-gray-300 mt-2">
                              {project.description}
                            </p>

                            <div
                              className={`flex flex-wrap gap-2 mt-4 ${i % 2 === 0 ? "justify-start" : "justify-end"
                                }`}
                            >
                              {project.skills.map((skill, sidx) => (
                                <span
                                  key={sidx}
                                  className="px-3 py-1 text-xs rounded-full bg-gradient-to-r 
                                  from-pink-500/20 to-purple-500/20 text-pink-300 
                                  border border-pink-500/30 hover:bg-pink-500/30 hover:text-white 
                                  transition-all duration-300"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}