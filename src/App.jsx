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

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />
      <About />
      <Education />
      <Internship />
      <Projects />
      <PersonalProjects />
      <Certifications />
      <Footer />
    </div>
  );
}

export default App;
