import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "experience", "projects", "skills", "certifications", "contact"];
      const scrollPosition = window.scrollY + 120; // Offset threshold

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Execute on mount to capture start state
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-[#030712] min-h-screen text-gray-100 font-sans selection:bg-accent-teal/20 selection:text-accent-teal antialiased overflow-x-hidden">
      {/* Dynamic Sticky Header Navigation */}
      <Header activeSection={activeSection} />
      
      {/* Master Sections Container */}
      <main>
        {/* Intro Hero Section */}
        <Hero />
        
        {/* Detailed Profile Summary */}
        <About />
        
        {/* Experience Timeline */}
        <Experience />
        
        {/* SaaS & E-commerce Case Studies */}
        <Projects />
        
        {/* Interactive Competency Matrix */}
        <Skills />
        
        {/* Credentials & Academic Records */}
        <Certifications />
        
        {/* Secure Form & Outreach links */}
        <Contact />
      </main>
      
      {/* Signature Footer */}
      <Footer />
    </div>
  );
}
