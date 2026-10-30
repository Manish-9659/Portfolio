import React, { useState } from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, TrendingUp, Layers, ChevronDown, ChevronUp } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ExperienceProps {
  onOpenProjectDemo: (projectId: string) => void;
}

export const Experience: React.FC<ExperienceProps> = ({ onOpenProjectDemo }) => {
  const [expandedCaseStudy, setExpandedCaseStudy] = useState(false);
  const experience = PORTFOLIO_DATA.experiences[0];

  return (
    <section id="experience" className="space-y-6 scroll-mt-20">
      {/* Section Header */}
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
          <Briefcase className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-white tracking-tight">Work Experience</h2>
          <p className="text-xs text-slate-400">Industry internships and applied engineering impact</p>
        </div>
      </div>

      {/* Timeline Container */}
      <div className="relative border-l-2 border-emerald-500/30 ml-4 pl-6 sm:pl-8 space-y-8">
        <div className="relative group">
          {/* Glowing Timeline Marker */}
          <div className="absolute -left-[31px] sm:-left-[39px] top-2 w-4 h-4 rounded-full bg-emerald-500 border-4 border-[#090d16] group-hover:scale-125 transition-transform shadow-emerald-glow"></div>

          <div className="emerald-glass p-6 sm:p-8 rounded-3xl space-y-6">
            
            {/* Header info */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800/80 pb-5">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                  {experience.role}
                </h3>
                <div className="flex items-center gap-2 text-emerald-400 font-semibold text-base mt-0.5">
                  <span>{experience.company}</span>
                  <span className="text-slate-500 text-xs">·</span>
                  <span className="text-slate-400 text-xs flex items-center gap-1 font-normal">
                    <MapPin className="w-3.5 h-3.5" />
                    {experience.location}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-300">
                  <Calendar className="w-3.5 h-3.5" />
                  {experience.period}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold px-3 py-1.5 rounded-full bg-slate-900 border border-slate-700 text-emerald-400">
                  <TrendingUp className="w-3.5 h-3.5" />
                  {experience.impactMetric}
                </span>
              </div>
            </div>

            {/* Bullet Points */}
            <ul className="space-y-3.5 text-slate-200 text-sm sm:text-base">
              {experience.keyContributions.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            {/* Stack list */}
            <div className="pt-3 flex flex-wrap items-center gap-2">
              <span className="text-xs text-slate-400 font-semibold mr-1">Stack:</span>
              {experience.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2.5 py-1 rounded-md bg-slate-900/90 border border-slate-700/80 text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Case study expandable toggle */}
            <div className="pt-4 border-t border-slate-800">
              <button
                onClick={() => setExpandedCaseStudy(!expandedCaseStudy)}
                className="w-full flex items-center justify-between p-3 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/30 text-left text-xs sm:text-sm font-semibold text-slate-200 transition-colors"
              >
                <div className="flex items-center gap-2 text-emerald-400">
                  <Layers className="w-4 h-4" />
                  <span>Technical Case Study: Supply Chain Logistics Dashboard Architecture</span>
                </div>
                {expandedCaseStudy ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
              </button>

              {expandedCaseStudy && (
                <div className="mt-4 p-5 rounded-2xl bg-slate-950/70 border border-slate-800/90 space-y-4 text-xs sm:text-sm animate-fadeIn">
                  <div className="space-y-2">
                    <p className="font-bold text-white">The Challenge:</p>
                    <p className="text-slate-300 leading-relaxed">
                      Supply chain coordinators at Femtosoft required a unified command center to track fleet movements and proactively pinpoint high-risk transit bottlenecks before delivery delays compounded across transit hubs.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <p className="font-bold text-white">My Engineering Approach:</p>
                    <ul className="list-disc list-inside space-y-1 text-slate-300">
                      <li>Designed modular dashboard widgets calculating delay probability distributions across regional routes.</li>
                      <li>Streamlined data normalization pipelines in Python to transform diverse raw telemetry logs into queryable JSON sets.</li>
                      <li>Implemented statistical visualization curves for fleet utilization and fuel consumption tracking.</li>
                    </ul>
                  </div>

                  <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                    <p className="text-emerald-400 font-semibold">
                      Outcome: 25% reduction in team data analysis latency and clearer bottleneck visibility.
                    </p>
                    <button
                      onClick={() => onOpenProjectDemo('logistics-dashboard')}
                      className="px-3.5 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-all shadow-emerald-glow"
                    >
                      Launch Live Simulator
                    </button>
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
