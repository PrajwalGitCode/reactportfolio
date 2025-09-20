// src/App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Internship from "./components/Internship";
import Projects from "./components/Projects";
import PersonalProjects from "./components/PersonalProject";
import Footer from "./components/Footer";
import Certifications from "./components/Certifications";
import CatsEyeNebulaBackground from "./components/AnimatedBackground";

function App() {
  return (
    <div className="relative bg-gray-900 text-white min-h-screen font-sans">
      {/* Unified Animated Background for entire app */}
      <CatsEyeNebulaBackground />

      {/* Content container with higher z-index */}
      <div className="relative z-10">
        {/* Navbar */}
        <Navbar />

        {/* Page Sections */}
        <Hero />
        <About />
        <Education />
        <Internship />
        <Projects />
        <PersonalProjects />
        <Certifications />
        <Footer />
      </div>
    </div>
  );
}

export default App;