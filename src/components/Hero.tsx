import React from 'react';
import { 
  MapPin, 
  Code, 
  Mail, 
  Copy, 
  Linkedin, 
  Github, 
  FileText, 
  ArrowUpRight,
  Sparkles
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface HeroProps {
  onCopyEmail: () => void;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCopyEmail, onOpenResume }) => {
  const { profile } = PORTFOLIO_DATA;

  return (
    <section id="hero" className="pt-6 sm:pt-10 pb-12 space-y-12">
      {/* Split-Screen Hero */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
        
        {/* Left Column: Typographic Hierarchy */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-950/70 border border-emerald-500/40 text-emerald-300 shadow-[0_0_12px_rgba(16,185,129,0.2)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{profile.statusText}</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Hi, I'm <span className="emerald-gradient-text">{profile.name}</span>
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-slate-200">
                {profile.title}
              </p>
              <div className="flex items-center gap-2 text-sm text-slate-400 pt-1">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{profile.location}</span>
              </div>
            </div>

            {/* Editorial Lead Copy */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl">
              {profile.headline} Dedicated to building resilient user interfaces that seamlessly turn intricate backend workflows and AI models into intuitive experiences.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold shadow-emerald-glow hover:shadow-emerald-glow-lg transition-all flex items-center gap-2"
            >
              <Code className="w-4 h-4" />
              <span>Explore Projects</span>
            </a>

            <button
              onClick={onOpenResume}
              className="px-5 py-3 rounded-xl bg-slate-900 border border-slate-700 hover:border-emerald-500/50 text-slate-200 font-semibold hover:text-emerald-400 transition-all flex items-center gap-2"
            >
              <FileText className="w-4 h-4 text-emerald-400" />
              <span>View Resume</span>
            </button>

            <a
              href={`mailto:${profile.email}`}
              className="px-5 py-3 rounded-xl bg-slate-900 border border-slate-700 hover:border-emerald-500/50 text-slate-200 font-semibold hover:text-emerald-400 transition-all flex items-center gap-2"
            >
              <Mail className="w-4 h-4 text-emerald-400" />
              <span>Email</span>
            </a>

            <button
              onClick={onCopyEmail}
              className="p-3 rounded-xl bg-slate-900 border border-slate-700 hover:border-emerald-500/50 text-slate-300 hover:text-emerald-400 transition-all"
              title="Copy Email to Clipboard"
              aria-label="Copy Email address"
            >
              <Copy className="w-4 h-4" />
            </button>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-slate-900 border border-slate-700 hover:border-emerald-500/50 text-slate-300 hover:text-emerald-400 transition-all"
              title="LinkedIn Profile"
              aria-label="Visit LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-slate-900 border border-slate-700 hover:border-emerald-500/50 text-slate-300 hover:text-emerald-400 transition-all"
              title="GitHub Profile"
              aria-label="Visit GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Right Column: Visual Portrait Card */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <div className="emerald-glass p-4 sm:p-5 rounded-3xl relative overflow-hidden group hover:border-emerald-500/40 transition-all">
            
            {/* Ambient decorative glow */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-slate-900 border border-slate-800">
              <img
                src={profile.avatarImage}
                alt="Manish SR - Computer Science Engineer"
                className="w-full h-full object-cover object-[center_18%] group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent"></div>

              {/* Float badge at bottom of image */}
              <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-[#090d16]/85 backdrop-blur-md border border-emerald-500/30 flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-white flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                    Manish SR
                  </p>
                  <p className="text-[11px] text-slate-400">Frontend & AI Systems Builder</p>
                </div>
                <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-emerald-950/90 text-emerald-300 border border-emerald-500/40">
                  Open for Hire
                </span>
              </div>
            </div>

            {/* Quick summary below avatar */}
            <div className="mt-4 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>Python · React · REST APIs</span>
              </div>
              <a
                href="#about"
                className="text-emerald-400 hover:text-emerald-300 flex items-center gap-1 font-semibold group/link"
              >
                <span>Read Bio</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
              </a>
            </div>

          </div>
        </div>

      </div>

      {/* Full-width KPI Strip placed cleanly below the hero split */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-5 sm:p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80">
        {profile.stats.map((stat, i) => (
          <div key={i} className="space-y-1">
            <p className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums">
              <span className="emerald-gradient-text">{stat.value}</span>
            </p>
            <p className="text-xs font-semibold text-slate-300 uppercase tracking-wider">{stat.label}</p>
            <p className="text-xs text-slate-400">{stat.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
