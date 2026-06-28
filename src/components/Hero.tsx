import React from "react";
import {
  ArrowUpRight,
  MessageSquare,
  FileText,
  MapPin,
  Sparkles,
  Code2,
  CheckCircle2,
  Award,
} from "lucide-react";
import { profile } from "../data";

export default function Hero() {
  const kpis = [
    { label: "Engineering SLA", value: "99.9%", desc: "Bug-free compliance" },
    { label: "B2B Sales Increase", value: "+60%", desc: "Via product upgrades" },
    { label: "Customer Retention", value: "+40%", desc: "Loyalty & smart campaigns" },
    { label: "Experience", value: "8+ Yrs", desc: "Full Stack & Tech Lead" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-20 overflow-hidden flex flex-col justify-center"
    >
      {/* Absolute Decorative Background Elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-accent-teal/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent-indigo/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 right-1/4 w-48 h-48 bg-purple-500/5 rounded-full blur-2xl pointer-events-none" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293708_1px,transparent_1px),linear-gradient(to_bottom,#1f293708_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Content Block */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-gray-900 border border-gray-800/80 text-accent-teal text-xs font-mono">
              <Sparkles className="h-3.5 w-3.5 animate-pulse text-accent-teal" />
              <span>Available for Leadership & Full-Stack Projects</span>
            </div>

            <div className="space-y-2">
              <h1 className="font-sans font-extrabold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-none">
                Hi, I'm <span className="text-gradient font-black">{profile.name}</span>
              </h1>
              <h2 className="font-sans font-bold text-2xl sm:text-3xl text-gray-300 tracking-tight">
                {profile.tagline}
              </h2>
            </div>

            <p className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-2xl font-light">
              I lead engineering teams and construct enterprise-grade SaaS products. Specialized in
              scalable Node.js microservices, beautiful React dashboards, and robust AWS cloud
              architectures. Proud generator of real, measurable business outcomes.
            </p>

            {/* Quick Metadata badges */}
            <div className="flex flex-wrap gap-y-3 gap-x-6 text-sm font-mono text-gray-400">
              <div className="flex items-center space-x-1.5">
                <MapPin className="h-4 w-4 text-accent-teal" />
                <span>{profile.location}</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <Award className="h-4 w-4 text-accent-indigo" />
                <span>AWS Certified Associate</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <a
                href="#contact"
                className="flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-accent-teal to-accent-indigo text-white font-semibold shadow-lg shadow-accent-teal/10 hover:shadow-accent-teal/20 transition-all hover:-translate-y-0.5"
              >
                <MessageSquare className="h-5 w-5" />
                <span>Let's Discuss Project</span>
              </a>
              <a
                href={profile.resume}
                target="_blank"
                referrerPolicy="no-referrer"
                className="flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-gray-900 hover:bg-gray-850 text-gray-300 hover:text-white border border-gray-800 hover:border-gray-700 transition-all hover:-translate-y-0.5 font-medium"
              >
                <FileText className="h-5 w-5" />
                <span>Download Resume</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Interactive Code/Visual representation block */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative borders */}
              <div className="absolute -inset-1 bg-gradient-to-r from-accent-teal to-accent-indigo rounded-2xl blur-lg opacity-25" />

              {/* Main Visual Terminal Card */}
              <div className="relative glass-card border border-gray-800 rounded-2xl shadow-2xl overflow-hidden font-mono text-xs text-gray-400 text-left">
                {/* Header */}
                <div className="bg-gray-900 px-4 py-3 border-b border-gray-800 flex items-center justify-between">
                  <div className="flex items-center space-x-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-500/70 block" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/70 block" />
                    <span className="w-3 h-3 rounded-full bg-green-500/70 block" />
                  </div>
                  <span className="text-[10px] text-gray-500 font-mono">shakir-core.json</span>
                  <div className="w-12 h-1 bg-transparent" />
                </div>

                {/* Content */}
                <div className="p-5 space-y-4">
                  <div>
                    <span className="text-accent-indigo">const</span> developer ={" "}
                    <span className="text-yellow-400">{"{"}</span>
                  </div>
                  <div className="pl-4 space-y-1">
                    <div>
                      name: <span className="text-emerald-400">"{profile.name}"</span>,
                    </div>
                    <div>
                      role: <span className="text-emerald-400">"{profile.tagline}"</span>,
                    </div>
                    <div>
                      yearsExperience: <span className="text-amber-400">8</span>,
                    </div>
                    <div>
                      coreStack: <span className="text-yellow-400">[</span>
                    </div>
                    <div className="pl-4 text-emerald-400">
                      "Javascript", "Nodejs", "Reactjs", "Nextjs", "AWS"
                    </div>
                    <div>
                      <span className="text-yellow-400">]</span>,
                    </div>
                  </div>
                  <div>
                    <span className="text-yellow-400">{"}"}</span>;
                  </div>

                  <div className="border-t border-gray-900 pt-4 mt-2">
                    <div className="text-[11px] text-gray-500 mb-2">
                      // Executing deployment logs...
                    </div>
                    <div className="flex items-center space-x-2 text-accent-teal font-mono">
                      <span className="animate-pulse">●</span>
                      <span>SLA Status: 99.9% (Jugnu Tech)</span>
                    </div>
                    <div className="flex items-center space-x-2 text-purple-400 font-mono mt-1">
                      <span>✓</span>
                      <span>AWS Cloud Infrastructure active</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Float badge 1 */}
              <div className="absolute -bottom-6 -left-6 bg-gray-950/90 border border-gray-800 p-3.5 rounded-xl flex items-center space-x-2.5 shadow-xl shadow-black/40">
                <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-white font-bold font-mono">6+ devs</div>
                  <div className="text-[10px] text-gray-500">Team Led Successfully</div>
                </div>
              </div>

              {/* Float badge 2 */}
              <div className="absolute -top-6 -right-6 bg-gray-950/90 border border-gray-800 p-3.5 rounded-xl flex items-center space-x-2.5 shadow-xl shadow-black/40">
                <div className="p-2 bg-accent-teal/10 rounded-lg text-accent-teal">
                  <Code2 className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-white font-bold font-mono">3 Major</div>
                  <div className="text-[10px] text-gray-500">SaaS Products Deployed</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* KPI Ribbon Block at the bottom of hero */}
        <div className="mt-20 border border-gray-900 bg-gray-950/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y lg:divide-y-0 lg:divide-x divide-gray-900 text-center">
            {kpis.map((kpi, idx) => (
              <div
                key={idx}
                className={`pt-4 lg:pt-0 ${idx % 2 === 0 ? "" : "border-l-0"} lg:px-4 flex flex-col justify-center`}
              >
                <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-mono bg-gradient-to-r from-accent-teal to-accent-indigo bg-clip-text text-transparent">
                  {kpi.value}
                </div>
                <div className="text-sm font-semibold text-gray-300 mt-1">{kpi.label}</div>
                <div className="text-xs text-gray-500 mt-0.5">{kpi.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
