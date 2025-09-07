// src/components/Projects.jsx
import React from "react";
import { motion } from "framer-motion";
import "../App.css"
import AnimatedBackground from "./AnimatedBackground";

export default function Projects() {
  const projects = [
    {
      internship: "MicroDegree · Python Full-Stack Intern",
      duration: "Jul 2024 – Oct 2024",
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
      internship: "Debug Deployment Technologies · Web Developer Intern",
      duration: "Feb 2024 – Mar 2024",
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
      internship: "Internship Studio · Web Development Intern",
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
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Internship{" "}
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 mx-auto mt-4"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Case studies from my internships — hands-on learning turned into
            real projects.
          </p>
        </motion.div>

        {/* Vertical Timeline Line */}
        <div className="absolute left-1/2 top-40 bottom-10 w-1 bg-gradient-to-b from-pink-500 via-purple-500 to-indigo-500 rounded-full transform -translate-x-1/2 z-0"></div>

        {/* Timeline Items */}
        <div className="space-y-20 relative">
          {projects.map((internship, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className={`relative flex items-start ${i % 2 === 0 ? "justify-start" : "justify-end"
                }`}
            >
              {/* Animated Connector Dot */}
              <span className="absolute left-1/2 w-6 h-6 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full border-4 border-gray-950 transform -translate-x-1/2 z-10 shadow-lg shadow-pink-500/30 animate-pulse"></span>

              {/* Internship + Projects Card */}
              <div
                className={`w-full md:w-5/12 p-6 rounded-2xl bg-gray-900/70 backdrop-blur-md border border-gray-700/50 shadow-xl hover:shadow-pink-500/20 transition-all duration-300 group ${i % 2 === 0 ? "mr-auto text-left" : "ml-auto text-right"
                  }`}
              >
                {/* Internship Info */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-pink-400 group-hover:text-pink-300 transition-colors">
                    {internship.internship}
                  </h3>
                  <p className="text-sm text-gray-400 mt-1">
                    {internship.duration}
                  </p>
                </div>

                {/* Projects Inside */}
                <div className="space-y-6">
                  {internship.items.map((project, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: idx * 0.1 + i * 0.1 }}
                      viewport={{ once: true }}
                      className="p-5 bg-gradient-to-br from-gray-800/70 to-gray-900/70 border border-gray-700 rounded-xl hover:border-pink-400/30 hover:shadow-md hover:shadow-pink-500/10 transition-all duration-300 group/item"
                    >
                      <h4 className="text-lg font-medium text-white group-hover/item:text-pink-200 transition-colors">
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
                          <motion.span
                            key={sidx}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: sidx * 0.1 + idx * 0.1 }}
                            viewport={{ once: true }}
                            className="px-3 py-1 text-xs rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 text-pink-300 border border-pink-500/30 hover:bg-pink-500/30 hover:text-white transition-all duration-300 cursor-default"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <p className="text-gray-400 mb-6">Want to see more of my work?</p>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-lg font-medium hover:from-pink-500 hover:to-purple-500 transition-all duration-300 shadow-lg hover:shadow-pink-500/25 group/button"
          >
            <span>Get In Touch</span>
            <svg
              className="w-5 h-5 ml-2 group-hover/button:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}