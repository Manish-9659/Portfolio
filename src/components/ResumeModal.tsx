import React from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, Globe, Linkedin, Github } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCopyEmail: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, onCopyEmail }) => {
  if (!isOpen) return null;

  const { profile, experiences, projects, education, certifications, skills } = PORTFOLIO_DATA;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-fadeIn overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-white text-slate-900 rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col border border-slate-300">
        
        {/* Header Controls (Non-printable) */}
        <div className="flex items-center justify-between px-6 py-3.5 bg-slate-100 border-b border-slate-200 print:hidden">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-600">
            Resume Preview · Manish SR
          </span>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-sm"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-700 transition-colors"
              aria-label="Close Resume"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document */}
        <div className="p-8 sm:p-10 overflow-y-auto space-y-6 text-sm font-sans bg-white print:p-0">
          
          {/* Header */}
          <div className="border-b border-slate-300 pb-4 space-y-2">
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">{profile.name}</h1>
            <p className="text-base font-semibold text-emerald-700">{profile.title}</p>
            
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-600 pt-1">
              <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-slate-500" /> {profile.location}</span>
              <span className="flex items-center gap-1"><Mail className="w-3.5 h-3.5 text-slate-500" /> {profile.email}</span>
              <span className="flex items-center gap-1"><Phone className="w-3.5 h-3.5 text-slate-500" /> {profile.phone}</span>
              <span className="flex items-center gap-1"><Linkedin className="w-3.5 h-3.5 text-slate-500" /> LinkedIn Profile</span>
              <span className="flex items-center gap-1"><Github className="w-3.5 h-3.5 text-slate-500" /> github.com/manish20sree</span>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-1.5">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-800 border-b border-slate-200 pb-0.5">
              Professional Summary
            </h2>
            <p className="text-xs text-slate-700 leading-relaxed">
              {profile.bio}
            </p>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-800 border-b border-slate-200 pb-0.5">
              Education
            </h2>
            <div className="space-y-3">
              {education.map((edu, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs">
                  <div>
                    <p className="font-bold text-slate-900">{edu.degree}</p>
                    <p className="text-slate-600">{edu.institution}</p>
                  </div>
                  <div className="text-left sm:text-right mt-0.5 sm:mt-0">
                    <p className="font-semibold text-emerald-800">{edu.score} ({edu.scoreType})</p>
                    <p className="text-slate-500 text-[11px]">{edu.period}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Work Experience */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-800 border-b border-slate-200 pb-0.5">
              Work Experience
            </h2>
            {experiences.map((exp, idx) => (
              <div key={idx} className="space-y-1.5 text-xs">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                  <div>
                    <span className="font-bold text-slate-900">{exp.role}</span>
                    <span className="text-slate-600"> · {exp.company}</span>
                  </div>
                  <span className="text-slate-500 text-[11px]">{exp.period}</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-slate-700">
                  {exp.keyContributions.map((item, cIdx) => (
                    <li key={cIdx} className="leading-relaxed">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Key Projects */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-800 border-b border-slate-200 pb-0.5">
              Featured Technical Projects
            </h2>
            <div className="space-y-3">
              {projects.map((proj) => (
                <div key={proj.id} className="text-xs space-y-0.5">
                  <div className="flex items-baseline justify-between">
                    <p className="font-bold text-slate-900">
                      {proj.title} <span className="font-normal text-slate-600 text-[11px]">({proj.category})</span>
                    </p>
                    <span className="text-emerald-700 font-semibold text-[11px]">{proj.metrics}</span>
                  </div>
                  <p className="text-slate-700 leading-relaxed">{proj.shortDesc}</p>
                  <p className="text-[11px] text-slate-500">Tech: {proj.tags.join(', ')}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills & Certifications */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
            <div className="space-y-1.5">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-800 border-b border-slate-200 pb-0.5">
                Technical Skills
              </h2>
              <p className="text-xs text-slate-700 leading-relaxed">
                <strong>Languages:</strong> Python, JavaScript (ES6+), TypeScript, HTML5, CSS3<br/>
                <strong>Frameworks & Web:</strong> React, Responsive UI, DOM Manipulation, Tailwind CSS<br/>
                <strong>APIs & Tools:</strong> REST APIs, Fetch API, Async/Await, Git, GitHub, VS Code
              </p>
            </div>

            <div className="space-y-1.5">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-800 border-b border-slate-200 pb-0.5">
                Certifications
              </h2>
              <ul className="text-xs text-slate-700 space-y-1">
                {certifications.map((c, idx) => (
                  <li key={idx}>
                    <strong>{c.title}</strong>: {c.focus} ({c.issuer})
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 bg-slate-100 border-t border-slate-200 flex items-center justify-between text-xs text-slate-600 print:hidden">
          <span>Ready for hiring evaluation · Updated 2026</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-900 text-white font-medium hover:bg-slate-800 transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
