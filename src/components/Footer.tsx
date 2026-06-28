import React from "react";
import { ArrowUp, Github, Linkedin, MessageSquare, Youtube } from "lucide-react";
import { profile } from "../data";

export default function Footer() {
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const socialLinks = [
    { icon: Github, href: profile.github, label: "GitHub" },
    { icon: Linkedin, href: profile.linkedIn, label: "LinkedIn" },
    { icon: MessageSquare, href: profile.whatsApp, label: "WhatsApp" },
    { icon: Youtube, href: profile.youtube, label: "YouTube" },
  ];

  return (
    <footer className="bg-gray-980 border-t border-gray-900/80 py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo and Tagline signature */}
        <div className="text-center md:text-left space-y-1.5">
          <div className="flex items-center justify-center md:justify-start space-x-2">
            <div className="h-7 w-7 rounded bg-gradient-to-br from-accent-teal to-accent-indigo flex items-center justify-center font-mono font-bold text-xs text-white">
              SA
            </div>
            <span className="font-sans font-bold text-base text-white tracking-tight">
              Shakir Ali
            </span>
          </div>
          <p className="text-xs text-gray-500 font-mono">{profile.tagline} • Lahore, Pakistan</p>
        </div>

        {/* Rights reserved and note */}
        <div className="text-center text-xs text-gray-500 font-mono space-y-1 md:order-last">
          <p>© {new Date().getFullYear()} Shakir Ali. All rights reserved.</p>
          {/* <p className="text-[10px] text-gray-600">Built with React & Tailwind CSS v4</p> */}
        </div>

        {/* Centered Social icon shorties */}
        <div className="flex items-center justify-center gap-3">
          {socialLinks.map((social, idx) => {
            const Icon = social.icon;
            return (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                referrerPolicy="no-referrer"
                className="p-2.5 bg-gray-950 border border-gray-900 rounded-xl text-gray-400 hover:text-white hover:border-gray-850 hover:bg-gray-900 transition-all"
                aria-label={social.label}
              >
                <Icon className="h-4.5 w-4.5" />
              </a>
            );
          })}
          <button
            onClick={handleScrollTop}
            className="p-2.5 bg-gray-950 border border-gray-900 rounded-xl text-accent-teal hover:text-white hover:border-accent-teal/30 hover:bg-gray-900 transition-all cursor-pointer"
            title="Scroll to Top"
          >
            <ArrowUp className="h-4.5 w-4.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
