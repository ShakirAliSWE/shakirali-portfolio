import React, { useState } from "react";
import { FolderGit2, ExternalLink, Calendar, Code2, ArrowUpRight, TrendingUp, Cpu, CheckCircle2 } from "lucide-react";
import { projects } from "../data";

export default function Projects() {
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  // Derive unique tech list across all projects
  const allTechs = Array.from(new Set(projects.flatMap(p => p.skills)));

  const filteredProjects = selectedTech
    ? projects.filter(p => p.skills.includes(selectedTech))
    : projects;

  return (
    <section id="projects" className="py-24 bg-gray-950/40 relative">
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-accent-teal/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center space-x-1 px-3 py-1 rounded-full bg-accent-teal/10 border border-accent-teal/20 text-accent-teal text-xs font-mono">
            <span>03 . CASE STUDIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Major <span className="text-gradient">SaaS Products</span>
          </h2>
          <p className="text-sm text-gray-500 max-w-lg mx-auto font-mono">
            Building complex distribution, engagement and e-commerce software.
          </p>
        </div>

        {/* Tech Filtering Filter Bar */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-3xl mx-auto">
          <button
            onClick={() => setSelectedTech(null)}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors cursor-pointer ${
              selectedTech === null
                ? "bg-accent-teal text-gray-950 font-semibold"
                : "bg-gray-900 text-gray-400 hover:text-white border border-gray-800"
            }`}
          >
            All Techs
          </button>
          {["React.js", "Node.js", "AWS", "MySQL", "MongoDB", "Express.js", "Fortify"].map((tech) => (
            <button
              key={tech}
              onClick={() => setSelectedTech(tech)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors cursor-pointer ${
                selectedTech === tech
                  ? "bg-accent-teal text-gray-950 font-semibold"
                  : "bg-gray-900 text-gray-400 hover:text-white border border-gray-800"
              }`}
            >
              {tech}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-left">
          {filteredProjects.map((proj, idx) => (
            <div 
              key={idx}
              className="glass-card border border-gray-800/80 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative group overflow-hidden glow-hover transition-all duration-300"
            >
              {/* Outer corner glow */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-accent-teal/10 to-transparent pointer-events-none" />

              <div>
                {/* Header info */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-gray-900 rounded-xl border border-gray-800 group-hover:scale-110 group-hover:border-accent-teal/30 transition-all text-accent-teal">
                    <FolderGit2 className="h-6 w-6" />
                  </div>
                  <a
                    href={proj.link}
                    target="_blank"
                    referrerPolicy="no-referrer"
                    className="p-2 bg-gray-900 hover:bg-gray-850 hover:text-white text-gray-400 rounded-lg border border-gray-850 hover:border-gray-800 transition-colors"
                    title="Visit Project URL"
                  >
                    <ArrowUpRight className="h-4.5 w-4.5" />
                  </a>
                </div>

                {/* Title & Timeline */}
                <div className="space-y-1.5 mb-4">
                  <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-accent-teal transition-colors">
                    {proj.title}
                  </h3>
                  <div className="flex items-center space-x-1.5 text-xs font-mono text-gray-500">
                    <Calendar className="h-3.5 w-3.5 text-accent-indigo" />
                    <span>
                      {proj.start.split("-")[0]} – {proj.end ? proj.end.split("-")[0] : "Present"}
                    </span>
                  </div>
                </div>

                {/* Project KPIs / Metrics Ribbon */}
                <div className="grid grid-cols-3 gap-2 bg-gray-900/60 rounded-xl p-3 border border-gray-900 mb-6">
                  {proj.metrics.map((met, midx) => (
                    <div key={midx} className="text-center">
                      <div className="text-sm font-bold text-white font-mono">{met.value}</div>
                      <div className="text-[9px] text-gray-500 uppercase tracking-tight">{met.label}</div>
                    </div>
                  ))}
                </div>

                {/* Description bullet points */}
                <div className="space-y-3 mb-6">
                  {proj.description.map((point, pidx) => (
                    <div key={pidx} className="flex items-start space-x-2 text-sm text-gray-400 leading-relaxed">
                      <CheckCircle2 className="h-4 w-4 text-accent-teal mt-0.5 shrink-0" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom skill chips */}
              <div className="pt-6 border-t border-gray-900 mt-auto">
                <div className="flex items-center space-x-1 mb-2.5 text-[10px] font-mono text-gray-500 tracking-wider uppercase">
                  <Code2 className="h-3.5 w-3.5 text-accent-indigo" />
                  <span>// Technologies Integrated</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {proj.skills.slice(0, 7).map((skill, sidx) => (
                    <span 
                      key={sidx}
                      className="px-2 py-0.5 rounded bg-gray-900/80 text-gray-400 border border-gray-850/50 text-[10px] font-mono hover:text-white hover:border-gray-800 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                  {proj.skills.length > 7 && (
                    <span className="px-1.5 py-0.5 rounded bg-accent-indigo/10 text-accent-indigo border border-accent-indigo/10 text-[10px] font-mono">
                      +{proj.skills.length - 7} more
                    </span>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
