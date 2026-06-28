import React from "react";
import { User, Mail, Phone, MapPin, Calendar, CheckSquare, Sparkles } from "lucide-react";
import { profile } from "../data";

export default function About() {
  const infoItems = [
    { label: "Role", value: profile.tagline, icon: User, color: "text-accent-teal bg-accent-teal/10" },
    { label: "Email", value: profile.email, icon: Mail, href: `mailto:${profile.email}`, color: "text-accent-indigo bg-accent-indigo/10" },
    { label: "WhatsApp/Mobile", value: profile.mobileNo, icon: Phone, href: profile.whatsApp, color: "text-emerald-400 bg-emerald-500/10" },
    { label: "Location", value: profile.location, icon: MapPin, color: "text-rose-400 bg-rose-500/10" },
    { label: "Age", value: profile.age, icon: Calendar, color: "text-purple-400 bg-purple-500/10" },
  ];

  const highlights = [
    "Expertise in SaaS architectures & high-traffic B2B web and mobile systems.",
    "Led cross-functional engineering teams using modern agile practices & CI/CD workflow models.",
    "Optimized loading delays and bundle sizes by 80% and 60% respectively.",
    "Integrated robust cloud solutions on AWS, leveraging Lambdas, S3, RDS, and API Gateways.",
    "Adept at microservices, JWT authentication, and secure databases (MongoDB, MySQL, Postgres)."
  ];

  return (
    <section id="about" className="py-24 bg-gray-950/30 relative">
      <div className="absolute inset-0 bg-radial-gradient from-accent-indigo/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center space-x-1 px-3 py-1 rounded-full bg-accent-teal/10 border border-accent-teal/20 text-accent-teal text-xs font-mono">
            <span>01 . PROFILE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About <span className="text-gradient">My Journey</span>
          </h2>
          <p className="text-sm text-gray-500 max-w-lg mx-auto font-mono">
            Fusing technological leadership with high-octane engineering delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Detailed Narrative & Core Qualities Block */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <h3 className="text-xl font-bold text-white flex items-center space-x-2">
              <Sparkles className="h-5 w-5 text-accent-teal" />
              <span>Full Stack Architect & Business Optimizer</span>
            </h3>
            
            <p className="text-gray-300 leading-relaxed font-light text-base sm:text-lg">
              {profile.description}
            </p>

            <p className="text-gray-400 leading-relaxed font-light text-sm sm:text-base">
              Over the past 7 years, I have navigated various roles from Associate Developer to Technical Lead. My style centers around clean code, transparent team velocity, and mapping architectural choices directly to real commercial growth metrics.
            </p>

            {/* List of high-level accomplishments */}
            <div className="space-y-3.5 pt-4">
              <h4 className="text-xs font-mono text-gray-500 tracking-wider uppercase">// Key Technical Benchmarks</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {highlights.map((point, idx) => (
                  <div key={idx} className="flex items-start space-x-2 text-sm text-gray-300">
                    <CheckSquare className="h-4 w-4 text-accent-teal mt-0.5 shrink-0" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Contact & Bio Sheet */}
          <div className="lg:col-span-5">
            <div className="glass-card border border-gray-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
              <div className="border-b border-gray-900 pb-4">
                <h3 className="text-lg font-bold text-white">Professional Blueprint</h3>
                <p className="text-xs text-gray-500 font-mono mt-1">Direct communication credentials</p>
              </div>

              <div className="space-y-4">
                {infoItems.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex items-center space-x-3.5 text-left group">
                      <div className={`p-2.5 rounded-xl ${item.color} group-hover:scale-105 transition-transform`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-[10px] font-mono text-gray-500 tracking-wide uppercase">
                          {item.label}
                        </div>
                        {item.href ? (
                          <a
                            href={item.href}
                            target="_blank"
                            referrerPolicy="no-referrer"
                            className="text-sm font-semibold text-gray-200 hover:text-accent-teal hover:underline truncate block"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <div className="text-sm font-semibold text-gray-200 truncate">
                            {item.value}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="pt-4 border-t border-gray-900 flex justify-between gap-3">
                <a
                  href={profile.resume}
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="flex-1 text-center py-2.5 px-4 rounded-xl border border-gray-800 hover:border-gray-700 bg-gray-900 text-gray-300 hover:text-white font-medium text-xs font-mono transition-all"
                >
                  View Bio Resume
                </a>
                <a
                  href="#contact"
                  className="flex-1 text-center py-2.5 px-4 rounded-xl bg-accent-teal/10 hover:bg-accent-teal/20 text-accent-teal font-medium text-xs font-mono border border-accent-teal/20 hover:border-accent-teal/30 transition-all"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
