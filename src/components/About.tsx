import React from 'react';
import { User, Code2, Cpu, Globe2, GitBranch } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const About: React.FC = () => {
  const { profile } = PORTFOLIO_DATA;

  const coreStrengths = [
    {
      icon: Code2,
      title: "Frontend Engineering",
      desc: "Creating high-responsiveness interfaces with modern React, JavaScript (ES6+), and clean component architectures that look refined on all devices."
    },
    {
      icon: Globe2,
      title: "REST APIs & Data Flow",
      desc: "Architecting asynchronous Fetch API pipelines with defensive error handling, low-latency state synchronizations, and structured JSON payloads."
    },
    {
      icon: Cpu,
      title: "AI & Data Interfaces",
      desc: "Bridging analytical models with user-facing dashboards, including delay prediction engines, precision agriculture telemetry, and statistical insights."
    },
    {
      icon: GitBranch,
      title: "Agile & CI/CD Discipline",
      desc: "Certified in continuous integration fundamentals, Git version control, and collaborative sprint workflows to ship reliable code systematically."
    }
  ];

  return (
    <section id="about" className="space-y-8 scroll-mt-20">
      {/* Section Header */}
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
          <User className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-white tracking-tight">Professional Summary</h2>
          <p className="text-xs text-slate-400">Background, engineering philosophy, and core competencies</p>
        </div>
      </div>

      {/* Main Glass Card */}
      <div className="emerald-glass p-6 sm:p-8 rounded-3xl shadow-xl space-y-8">
        <p className="text-slate-200 leading-relaxed text-base sm:text-lg">
          {profile.bio}
        </p>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-slate-800">
          {coreStrengths.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={idx}
                className="p-4 sm:p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-emerald-500/30 transition-colors space-y-2 group"
              >
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500/20 transition-colors">
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <h3 className="font-bold text-white text-sm sm:text-base">{item.title}</h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-1">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Key Attributes Footer */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-800 text-xs">
          <div>
            <p className="text-slate-500 uppercase tracking-wider font-semibold">Degree Program</p>
            <p className="text-sm font-semibold text-slate-200 mt-1">B.E. Computer Science</p>
            <p className="text-slate-400 text-[11px] mt-0.5">Anna University</p>
          </div>
          <div>
            <p className="text-slate-500 uppercase tracking-wider font-semibold">Primary Stack</p>
            <p className="text-sm font-semibold text-emerald-400 mt-1">React · JS · Python</p>
            <p className="text-slate-400 text-[11px] mt-0.5">Modern Web & Data</p>
          </div>
          <div>
            <p className="text-slate-500 uppercase tracking-wider font-semibold">Primary Focus</p>
            <p className="text-sm font-semibold text-slate-200 mt-1">AI Apps & REST APIs</p>
            <p className="text-slate-400 text-[11px] mt-0.5">End-to-end integration</p>
          </div>
          <div>
            <p className="text-slate-500 uppercase tracking-wider font-semibold">Availability</p>
            <p className="text-sm font-semibold text-emerald-400 mt-1">Ready for Hire</p>
            <p className="text-slate-400 text-[11px] mt-0.5">Full-time & Internships</p>
          </div>
        </div>
      </div>
    </section>
  );
};
