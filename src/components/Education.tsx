import React, { useState } from 'react';
import { GraduationCap, Award, BookOpen, ShieldCheck, CheckCircle2, ChevronRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Education: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<number | null>(null);

  const certTakeaways: Record<number, string[]> = {
    0: [
      "Fundamentals of Neural Networks, Machine Learning workflows, and Supervised Learning.",
      "Ethical considerations in AI deployment, bias reduction, and algorithmic fairness.",
      "Applied Python tooling for data cleansing and feature generation."
    ],
    1: [
      "Automated build pipelines, continuous integration mechanics, and automated unit testing.",
      "DevOps release flows, trunk-based development, and artifact deployment fundamentals.",
      "GitHub Actions workflow patterns and container readiness basics."
    ],
    2: [
      "Agile Scrum ceremony structuring, user story estimation, and sprint backlogs.",
      "Effective engineering documentation, stakeholder reporting, and peer code reviews.",
      "Cross-functional communication tactics for technical and non-technical partners."
    ]
  };

  return (
    <section id="education" className="space-y-6 scroll-mt-20">
      {/* Section Header */}
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
          <GraduationCap className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-white tracking-tight">Education & Certifications</h2>
          <p className="text-xs text-slate-400">Formal engineering degrees and accredited industry credentials</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Education Timeline Card */}
        <div className="emerald-glass p-6 sm:p-7 rounded-3xl space-y-5">
          <div className="flex items-center gap-2.5 pb-2 border-b border-slate-800">
            <BookOpen className="w-5 h-5 text-emerald-400" />
            <h3 className="text-lg font-bold text-white">Academic Journey</h3>
          </div>

          <div className="space-y-5">
            {PORTFOLIO_DATA.education.map((edu, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-emerald-500/30 transition-colors space-y-2"
              >
                <div className="flex items-start justify-between gap-2">
                  <h4 className="font-bold text-slate-100 text-sm sm:text-base">{edu.degree}</h4>
                  <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-500/40 shrink-0">
                    {edu.period}
                  </span>
                </div>
                
                <p className="text-xs text-slate-400">{edu.institution}</p>
                
                <div className="pt-1 flex items-center justify-between text-xs">
                  <span className="text-slate-500 text-[11px]">{edu.scoreType}</span>
                  <span className="font-mono font-bold text-emerald-400">{edu.score}</span>
                </div>

                {edu.highlights && (
                  <ul className="pt-2 border-t border-slate-800/60 space-y-1 text-[11px] text-slate-300">
                    {edu.highlights.map((hl, hIdx) => (
                      <li key={hIdx} className="flex items-center gap-1.5">
                        <ChevronRight className="w-3 h-3 text-emerald-400 shrink-0" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Card */}
        <div className="emerald-glass p-6 sm:p-7 rounded-3xl space-y-5">
          <div className="flex items-center gap-2.5 pb-2 border-b border-slate-800">
            <Award className="w-5 h-5 text-emerald-400" />
            <h3 className="text-lg font-bold text-white">Certifications & Training</h3>
          </div>

          <div className="space-y-4">
            {PORTFOLIO_DATA.certifications.map((cert, idx) => {
              const isSelected = selectedCert === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setSelectedCert(isSelected ? null : idx)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer space-y-2 ${
                    isSelected
                      ? 'bg-slate-900 border-emerald-500/60 shadow-emerald-glow'
                      : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                      <h4 className="font-bold text-slate-100 text-sm">{cert.title}</h4>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-400 border border-emerald-500/30">
                      {cert.issuer}
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 font-medium pl-6">{cert.focus}</p>

                  <div className="pl-6 pt-1 flex items-center justify-between text-[11px] text-slate-400">
                    <span>{cert.verifiedYear}</span>
                    <span className="text-emerald-400 hover:underline">
                      {isSelected ? 'Hide Syllabus' : 'View Core Topics →'}
                    </span>
                  </div>

                  {isSelected && certTakeaways[idx] && (
                    <div className="mt-3 pt-3 border-t border-slate-800 pl-6 space-y-1.5 text-xs text-slate-300 animate-fadeIn">
                      <p className="font-semibold text-white text-[11px] uppercase tracking-wider">Key Competencies Verified:</p>
                      {certTakeaways[idx].map((topic, tIdx) => (
                        <div key={tIdx} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{topic}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
