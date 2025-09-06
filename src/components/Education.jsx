// src/components/Education.jsx
import React from "react";
import "../styling/Education.css";
import { FaGraduationCap, FaBook, FaSchool } from "react-icons/fa";

export default function Education() {
  const educationData = [
    {
      id: 1,
      year: "2022",
      title: "Bachelor of Engineering in Computer Science",
      institution: "Your College Name",
      description:
        "Graduated with a degree in Computer Science Engineering. Focused on software development, algorithms, and system design.",
      icon: <FaGraduationCap className="text-indigo-400 text-xl" />,
    },
    {
      id: 2,
      year: "2018",
      title: "Higher Secondary Education (12th Grade)",
      institution: "Your College Name",
      description:
        "Completed higher secondary education with focus on science and mathematics.",
      icon: <FaBook className="text-purple-400 text-xl" />,
    },
    {
      id: 3,
      year: "2016",
      title: "Secondary Education (10th Grade)",
      institution: "Your School Name",
      description:
        "Completed secondary education with excellent academic performance.",
      icon: <FaSchool className="text-pink-400 text-xl" />,
    },
  ];

  return (
    <section
      id="education"
      className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Floating particles */}
        {[...Array(12)].map((_, i) => (
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
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-purple-600 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-indigo-600 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'linear-gradient(to right, #718096 1px, transparent 1px), linear-gradient(to bottom, #718096 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            Education{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-4"></div>
          <p className="text-gray-400 mt-3">
            A step-by-step look into my academic background.
          </p>
        </div>

        {/* Timeline - Restored original alignment */}
        <div className="relative border-l border-gray-700 ml-4">
          {educationData.map((item) => (
            <div key={item.id} className="mb-12 ml-8">
              {/* Dot - Restored original style with slight enhancement */}
              <div className="absolute -left-4 flex items-center justify-center w-8 h-8 rounded-full bg-gray-800 border border-gray-600">
                {item.icon}
              </div>

              {/* Card - Restored original alignment with enhanced background */}
              <div className="bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 p-6 rounded-xl shadow-md hover:shadow-indigo-500/20 transition-all duration-300 relative overflow-hidden group">
                {/* Subtle hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/0 via-indigo-500/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <span className="text-sm text-indigo-400 font-semibold relative z-10">
                  {item.year}
                </span>
                <h3 className="text-xl font-bold mt-1 text-gray-200 relative z-10">
                  {item.title}
                </h3>
                <p className="text-purple-300 text-sm mb-3 relative z-10">
                  {item.institution}
                </p>
                <p className="text-gray-300 relative z-10">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Extra section - Restored original alignment with enhancements */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-gray-200 mb-4">
            Lifelong <span className="text-indigo-400">Learning</span>
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto mb-6">
            Beyond formal education, I enhance my skills with online courses,
            certifications, workshops, and personal projects.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-4 py-2 bg-indigo-500/20 text-indigo-300 rounded-full text-sm hover:bg-indigo-500/30 transition-all duration-300 cursor-default">
              Online Courses
            </span>
            <span className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm hover:bg-purple-500/30 transition-all duration-300 cursor-default">
              Certifications
            </span>
            <span className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm hover:bg-blue-500/30 transition-all duration-300 cursor-default">
              Workshops
            </span>
            <span className="px-4 py-2 bg-green-500/20 text-green-300 rounded-full text-sm hover:bg-green-500/30 transition-all duration-300 cursor-default">
              Personal Projects
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}