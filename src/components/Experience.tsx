import React from "react";
import { Briefcase, Calendar, MapPin, ExternalLink, Sparkles, CheckSquare } from "lucide-react";
import { experiences } from "../data";

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-gray-950/20 relative">
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-accent-indigo/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-20">
          <div className="inline-flex items-center space-x-1 px-3 py-1 rounded-full bg-accent-indigo/10 border border-accent-indigo/20 text-accent-indigo text-xs font-mono">
            <span>02 . TIMELINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-sm text-gray-500 max-w-lg mx-auto font-mono">
            A proven record of engineering excellence and product optimization.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto text-left">
          {/* Vertical continuous timeline bar */}
          <div className="absolute left-4 sm:left-1/2 top-2 bottom-2 w-0.5 bg-gradient-to-b from-accent-teal via-accent-indigo to-gray-900 hidden sm:block transform -translate-x-1/2" />
          <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-gradient-to-b from-accent-teal via-accent-indigo to-gray-900 block sm:hidden" />

          <div className="space-y-16">
            {experiences.map((exp, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div 
                  key={idx} 
                  className={`relative flex flex-col sm:flex-row items-stretch ${
                    isEven ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Dot/Icon */}
                  <div className="absolute left-4 sm:left-1/2 top-4 transform -translate-x-1/2 z-20 flex items-center justify-center">
                    <div className={`h-9 w-9 rounded-full bg-gray-950 border-2 ${
                      exp.present ? "border-accent-teal animate-pulse" : "border-gray-800"
                    } flex items-center justify-center text-white shadow-xl`}>
                      <Briefcase className={`h-4 w-4 ${exp.present ? "text-accent-teal" : "text-gray-400"}`} />
                    </div>
                  </div>

                  {/* Left Spacer for desktop layout (alternating) */}
                  <div className="w-full sm:w-1/2 px-8 hidden sm:block" />

                  {/* Experience Card */}
                  <div className="w-full sm:w-1/2 px-4 sm:px-8 pl-12 sm:pl-8">
                    <div className="glass-card hover:border-gray-700/80 rounded-2xl p-6 sm:p-8 shadow-xl transition-all duration-300 relative group overflow-hidden">
                      
                      {/* Top subtle ambient light */}
                      {exp.present && (
                        <div className="absolute top-0 right-0 left-0 h-[3px] bg-gradient-to-r from-accent-teal to-accent-indigo" />
                      )}

                      {/* Card Content */}
                      <div className="space-y-4">
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 border-b border-gray-900 pb-4">
                          <div>
                            <span className="inline-flex items-center space-x-1.5 px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase mb-1 bg-gray-900 text-gray-400">
                              {exp.start.split("-")[0]} – {exp.end ? exp.end.split("-")[0] : "Present"}
                            </span>
                            <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-accent-teal transition-colors">
                              {exp.position}
                            </h3>
                            <div className="flex flex-wrap items-center gap-2 mt-1.5 text-xs font-medium text-gray-400 font-mono">
                              <a
                                href={exp.companyURL}
                                target="_blank"
                                referrerPolicy="no-referrer"
                                className="text-accent-indigo hover:underline flex items-center space-x-1 font-bold"
                              >
                                <span>{exp.companyName}</span>
                                <ExternalLink className="h-3 w-3" />
                              </a>
                              <span className="text-gray-700">•</span>
                              <span className="flex items-center space-x-1 text-gray-500">
                                <MapPin className="h-3.5 w-3.5" />
                                <span>{exp.location}</span>
                              </span>
                            </div>
                          </div>

                          {exp.present && (
                            <div className="self-start inline-flex items-center space-x-1 px-2 py-1 rounded-md bg-emerald-500/10 text-emerald-400 text-xs font-mono font-bold uppercase border border-emerald-500/20">
                              <Sparkles className="h-3.5 w-3.5" />
                              <span>Present</span>
                            </div>
                          )}
                        </div>

                        {/* Bullet achievements */}
                        <div className="space-y-3">
                          {exp.points.map((pt, pidx) => (
                            <div key={pidx} className="flex items-start space-x-3 text-sm text-gray-300 leading-relaxed">
                              <CheckSquare className="h-4 w-4 text-accent-teal shrink-0 mt-1" />
                              <span>{pt}</span>
                            </div>
                          ))}
                        </div>

                        {/* Technology summary */}
                        <div className="pt-4 border-t border-gray-900">
                          <span className="block text-[10px] font-mono text-gray-500 tracking-wider uppercase mb-2">
                            // STACK & METHODOLOGIES UTILIZED
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {exp.skills.map((skill, sidx) => (
                              <span 
                                key={sidx}
                                className="px-2 py-1 rounded bg-gray-900 hover:bg-gray-850 text-gray-400 hover:text-white border border-gray-850 hover:border-gray-800 transition-colors text-[11px] font-mono"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
