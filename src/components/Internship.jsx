// src/components/internships.jsx
import React from "react";
import "../App.css"
import AnimatedBackground from "./AnimatedBackground";

export default function Intrnships() {
  const internships = [
    {
      internship: "MicroDegree · Python Full-Stack Intern",
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
      internship: "Debug Deployment Technologies · Web Developer Intern",
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
      internship: "UnifyCX · Full Time · Graduate Engineer Trainee",
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
      internship: "Nayepankh Foundation · Graphic Design Intern",
      duration: "September 2023 – December 2023",
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
      internship: "GaoTEK · Internship",
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
      internship: "Suven Consultants & Technology Pvt. Ltd. · UI/UX Internship",
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
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold">
            Work{" "}
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 mx-auto mt-4"></div>
        </div>

        {/* Vertical Timeline Line */}
        <div className="absolute left-1/2 top-40 bottom-10 w-1 bg-gradient-to-b from-pink-500 via-purple-500 to-indigo-500 rounded-full transform -translate-x-1/2 z-0"></div>

        {/* Timeline Items */}
        <div className="space-y-20 relative">
          {internships.map((internship, i) => (
            <div
              key={i}
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
                    <div
                      key={idx}
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
                          <span
                            key={sidx}
                            className="px-3 py-1 text-xs rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 text-pink-300 border border-pink-500/30 hover:bg-pink-500/30 hover:text-white transition-all duration-300 cursor-default"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}