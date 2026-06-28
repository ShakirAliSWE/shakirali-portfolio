import React, { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, MessageSquare, FileText, ArrowUpRight } from "lucide-react";
import { profile } from "../data";

interface HeaderProps {
  activeSection: string;
}

export default function Header({ activeSection }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", id: "home" },
    { label: "Experience", id: "experience" },
    { label: "Projects", id: "projects" },
    { label: "Skills", id: "skills" },
    { label: "Certifications", id: "certifications" },
    { label: "Contact", id: "contact" },
  ];

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gray-950/80 backdrop-blur-md border-b border-gray-800/50 shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Branding */}
          <div 
            onClick={() => handleNavClick("home")}
            className="flex items-center space-x-2 cursor-pointer group"
          >
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-accent-teal to-accent-indigo flex items-center justify-center font-mono font-bold text-white shadow-md shadow-accent-teal/20 group-hover:scale-105 transition-transform">
              SA
            </div>
            <div>
              <span className="font-sans font-bold text-lg text-white tracking-tight group-hover:text-accent-teal transition-colors">
                Shakir Ali
              </span>
              <span className="hidden sm:inline-block ml-1.5 px-1.5 py-0.5 text-[10px] font-mono bg-gray-900 border border-gray-800 rounded text-accent-teal">
                v2.1
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                  activeSection === item.id
                    ? "text-accent-teal bg-accent-teal/10 font-semibold"
                    : "text-gray-400 hover:text-white hover:bg-gray-900/50"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Call to Actions / Socials */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href={profile.github}
              target="_blank"
              referrerPolicy="no-referrer"
              className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-gray-900 transition-colors"
              title="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={profile.linkedIn}
              target="_blank"
              referrerPolicy="no-referrer"
              className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-gray-900 transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href={profile.whatsApp}
              target="_blank"
              referrerPolicy="no-referrer"
              className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-gray-900 transition-colors"
              title="WhatsApp Chat"
            >
              <MessageSquare className="h-5 w-5" />
            </a>
            <a
              href={profile.resume}
              target="_blank"
              referrerPolicy="no-referrer"
              className="flex items-center space-x-1.5 px-4 py-2 rounded-lg bg-gradient-to-r from-accent-teal to-accent-indigo text-white text-sm font-semibold shadow-md shadow-accent-teal/10 hover:shadow-accent-teal/20 hover:opacity-95 active:scale-95 transition-all"
            >
              <FileText className="h-4 w-4" />
              <span>Resume</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <a
              href={profile.resume}
              target="_blank"
              referrerPolicy="no-referrer"
              className="flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-accent-teal/10 border border-accent-teal/30 text-accent-teal text-xs font-semibold"
            >
              <FileText className="h-3.5 w-3.5" />
              <span>Resume</span>
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-950 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-gray-950/95 backdrop-blur-xl border-b border-gray-900 px-4 pt-2 pb-6 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`block w-full text-left px-4 py-3 rounded-lg text-base font-semibold ${
                activeSection === item.id
                  ? "text-accent-teal bg-accent-teal/10"
                  : "text-gray-300 hover:text-white hover:bg-gray-900"
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-4 border-t border-gray-900 flex items-center justify-around">
            <a
              href={profile.github}
              target="_blank"
              referrerPolicy="no-referrer"
              className="p-2.5 text-gray-400 hover:text-white rounded-lg bg-gray-900"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={profile.linkedIn}
              target="_blank"
              referrerPolicy="no-referrer"
              className="p-2.5 text-gray-400 hover:text-white rounded-lg bg-gray-900"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href={profile.whatsApp}
              target="_blank"
              referrerPolicy="no-referrer"
              className="p-2.5 text-gray-400 hover:text-white rounded-lg bg-gray-900"
            >
              <MessageSquare className="h-5 w-5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
