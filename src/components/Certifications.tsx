import React from "react";
import { Award, GraduationCap, ExternalLink, Calendar, MapPin, ShieldCheck, CheckCircle2 } from "lucide-react";
import { certifications, education } from "../data";

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-gray-950/20 relative">
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-accent-indigo/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-20">
          <div className="inline-flex items-center space-x-1 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
            <span>05 . CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Credentials & <span className="text-gradient">Academics</span>
          </h2>
          <p className="text-sm text-gray-500 max-w-lg mx-auto font-mono">
            Validated certifications, specialized scaling badges, and formal education.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
          
          {/* Left Column: Certifications list */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center space-x-2.5 mb-2">
              <Award className="h-5.5 w-5.5 text-accent-teal" />
              <span>Verified Certifications</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certifications.map((cert, idx) => (
                <div 
                  key={idx}
                  className="glass-card border border-gray-900 rounded-xl p-5 hover:border-gray-850 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <div className="flex items-start justify-between">
                      <div className="p-2 bg-gray-900 rounded-lg text-accent-indigo group-hover:text-accent-teal transition-colors">
                        <ShieldCheck className="h-5 w-5" />
                      </div>
                      <span className="text-[10px] font-mono text-gray-500">
                        {cert.issued.split("-")[0]}
                      </span>
                    </div>

                    <div className="space-y-1">
                      <h4 className="text-sm font-bold text-gray-100 group-hover:text-white leading-tight">
                        {cert.name}
                      </h4>
                      <p className="text-xs text-gray-500 font-mono">
                        {cert.source}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-gray-900 flex items-center justify-between">
                    <span className="text-[10px] font-mono text-gray-500">
                      {cert.expired ? "Expired " + cert.expired.split("-")[0] : "Lifetime Badge"}
                    </span>
                    <a
                      href={cert.link}
                      target="_blank"
                      referrerPolicy="no-referrer"
                      className="text-xs text-accent-teal hover:text-white font-mono flex items-center space-x-1 hover:underline"
                    >
                      <span>Verify</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Academic & Education profile */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center space-x-2.5">
                <GraduationCap className="h-6 w-6 text-accent-indigo" />
                <span>Formal Education</span>
              </h3>

              {education.map((edu, idx) => (
                <div 
                  key={idx}
                  className="glass-card border border-gray-900 rounded-2xl p-6 sm:p-8 space-y-5 relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-accent-indigo/10 to-transparent pointer-events-none" />

                  <div className="space-y-1.5">
                    <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full bg-accent-indigo/10 text-accent-indigo text-xs font-mono">
                      Bachelor of Engineering
                    </span>
                    <h4 className="text-lg font-bold text-white tracking-tight">
                      {edu.degree}
                    </h4>
                  </div>

                  <div className="space-y-2 text-sm text-gray-400">
                    <a 
                      href={edu.universityURL}
                      target="_blank"
                      referrerPolicy="no-referrer"
                      className="text-gray-200 hover:text-accent-teal hover:underline flex items-center space-x-1 font-semibold"
                    >
                      <span>{edu.university}</span>
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                    
                    <div className="flex items-center space-x-4 text-xs font-mono text-gray-500 mt-1">
                      <span className="flex items-center space-x-1">
                        <Calendar className="h-3.5 w-3.5" />
                        <span>{edu.start.split("-")[0]} – {edu.end.split("-")[0]}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <MapPin className="h-3.5 w-3.5" />
                        <span>{edu.location}</span>
                      </span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-900 space-y-2 text-xs text-gray-400">
                    <p className="font-light leading-relaxed">
                      Rigorous study focusing on: Software Architecture, Algorithms & Complexity, Database Administration, Object-Oriented Design, and Software Engineering Methodologies.
                    </p>
                    <div className="flex items-center space-x-2 text-accent-teal font-mono pt-1">
                      <CheckCircle2 className="h-3.5 w-3.5 shrink-0" />
                      <span>Graduated Muet SWE 14-17 session</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Industry Badges / Achievements Panel */}
            <div className="glass-card border border-gray-900 rounded-2xl p-6 space-y-4">
              <h4 className="text-xs font-mono text-gray-400 tracking-wider uppercase">// Key Technical Honors</h4>
              <div className="space-y-3 text-sm text-gray-300">
                <div className="flex items-start space-x-2.5">
                  <span className="text-accent-teal font-bold">01</span>
                  <span><strong>GTM Lead:</strong> Guided multiple commercial modules with 99.9% SLA stability metrics.</span>
                </div>
                <div className="flex items-start space-x-2.5">
                  <span className="text-accent-indigo font-bold">02</span>
                  <span><strong>AWS Certified Associate:</strong> Strong validation of modern secure, stateless cloud architecture.</span>
                </div>
                <div className="flex items-start space-x-2.5">
                  <span className="text-purple-400 font-bold">03</span>
                  <span><strong>HackerRank Verified:</strong> Gold badges in Problem Solving and JavaScript, representing top-tier coding speed and correctness.</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
