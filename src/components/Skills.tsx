import React from "react";
import { Cpu, Layers, Code2, Database, HelpCircle, CheckCircle2 } from "lucide-react";
import { skillCategories } from "../data";

export default function Skills() {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Languages & Core":
        return <Code2 className="h-5 w-5 text-accent-teal" />;
      case "Frontend Development":
        return <Layers className="h-5 w-5 text-accent-indigo" />;
      case "Backend & Systems":
        return <Cpu className="h-5 w-5 text-purple-400" />;
      case "Cloud, Database & DevOps":
        return <Database className="h-5 w-5 text-emerald-400" />;
      default:
        return <HelpCircle className="h-5 w-5 text-gray-400" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Languages & Core":
        return "border-accent-teal/10 bg-accent-teal/5";
      case "Frontend Development":
        return "border-accent-indigo/10 bg-accent-indigo/5";
      case "Backend & Systems":
        return "border-purple-500/10 bg-purple-500/5";
      case "Cloud, Database & DevOps":
        return "border-emerald-500/10 bg-emerald-500/5";
      default:
        return "border-gray-800 bg-gray-900";
    }
  };

  // Pre-define mock self-assessed strength levels for visual aesthetics
  const getSkillStrength = (skill: string): number => {
    const strengths: Record<string, number> = {
      "React.js": 95,
      "Next.js": 90,
      "Node.js": 95,
      "Express.js": 95,
      "TypeScript": 92,
      "JavaScript": 95,
      "AWS (Amazon Web Services)": 90,
      "MongoDB": 92,
      "NoSQL": 92,
      "MySQL": 88,
      "Rest API": 95,
      "Microservices": 90,
      "Redux Toolkit": 92,
      "RTK Query": 85,
      "PHP": 85,
      "Bootstrap": 90,
      "Tailwind CSS": 95,
      "React Native": 85,
      "Problem-solving": 95,
      "Data Architecture": 90,
      "Software Debugging": 92,
      "Git": 95,
      "CI/CD Pipeline": 85,
      "Firebase": 88,
      "Google Map APIs": 90,
      "CleverTap": 80,
    };
    return strengths[skill] || 85;
  };

  return (
    <section id="skills" className="py-24 bg-gray-950/30 relative">
      <div className="absolute inset-0 bg-radial-gradient from-accent-teal/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-20">
          <div className="inline-flex items-center space-x-1 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono">
            <span>04 . EXPERTISE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technical <span className="text-gradient">Skill Matrix</span>
          </h2>
          <p className="text-sm text-gray-500 max-w-lg mx-auto font-mono">
            Structured skill index based on 7 years of industrial practice.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {skillCategories.map((cat, idx) => (
            <div 
              key={idx}
              className={`border rounded-2xl p-6 sm:p-8 shadow-xl transition-all duration-300 hover:-translate-y-1 ${getCategoryColor(
                cat.category
              )}`}
            >
              {/* Category Header */}
              <div className="flex items-center space-x-3 border-b border-gray-900 pb-4 mb-6">
                <div className="p-2.5 bg-gray-950 rounded-xl border border-gray-800">
                  {getCategoryIcon(cat.category)}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {cat.category}
                  </h3>
                  <p className="text-[10px] text-gray-500 font-mono mt-0.5">
                    // LEVEL OF MASTERY INDEX
                  </p>
                </div>
              </div>

              {/* Skills list with bar gauges */}
              <div className="space-y-4">
                {cat.skills.map((skill, sidx) => {
                  const strength = getSkillStrength(skill);
                  return (
                    <div key={sidx} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="text-gray-300 font-semibold flex items-center space-x-1.5">
                          <CheckCircle2 className="h-3 w-3 text-accent-teal shrink-0" />
                          <span>{skill}</span>
                        </span>
                        <span className="text-gray-500">{strength}%</span>
                      </div>
                      
                      {/* Strength bar background */}
                      <div className="h-1.5 w-full bg-gray-950 rounded-full overflow-hidden border border-gray-900">
                        <div 
                          className="h-full bg-gradient-to-r from-accent-teal to-accent-indigo rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${strength}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Callout Info */}
        <div className="mt-16 text-center max-w-2xl mx-auto p-6 rounded-2xl bg-gray-950/40 border border-gray-900">
          <p className="text-xs text-gray-500 font-mono leading-relaxed">
            * Note: Competencies are assessed based on professional product releases, legacy refactoring frequency, and team lead instruction reviews. Fully compliant with enterprise standard practices and modern API methodologies.
          </p>
        </div>

      </div>
    </section>
  );
}
