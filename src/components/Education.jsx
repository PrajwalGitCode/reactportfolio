// src/components/Education.jsx
import React from "react";
import "../App.css"
import AnimatedBackground from "./AnimatedBackground";
import { FaGraduationCap, FaBook, FaSchool } from "react-icons/fa";

export default function Education() {
  const educationData = [
    {
      id: 1,
      year: "2022",
      title: "Bachelor of Engineering - Computer Science",
      institution: "NMAM Institute of Technology, Nitte",
      description:
        "Karkala, Karnataka",
      icon: <FaGraduationCap className="text-indigo-400 text-xl" />,
    },
    {
      id: 2,
      year: "2018",
      title: "12th Grade",
      institution: "Mahesh PU College",
      description:
        "Mangalore, Karnataka",
      icon: <FaBook className="text-purple-400 text-xl" />,
    },
    {
      id: 3,
      year: "2016",
      title: "10th Grade",
      institution: "Canara CBSE",
      description:
        "Mangalore, Karnataka",
      icon: <FaSchool className="text-pink-400 text-xl" />,
    },
  ];

  return (
    <section
      id="education"
      className="py-20 bg-gray-950 text-white relative overflow-hidden"
    >
      <AnimatedBackground particleCount={170} />

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
      </div>
    </section>
  );
}