import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const { profile } = PORTFOLIO_DATA;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="pt-12 pb-16 border-t border-slate-800/80 text-xs text-slate-400 space-y-6">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Brand & copyright */}
        <div className="space-y-1 text-center sm:text-left">
          <p className="font-bold text-white text-sm">
            Manish SR <span className="text-emerald-400 font-normal">· Computer Science Engineer</span>
          </p>
          <p className="text-slate-500">
            © {new Date().getFullYear()} Manish SR. Handcrafted with React, TypeScript & Emerald accents.
          </p>
        </div>

        {/* Links & Back to top */}
        <div className="flex items-center gap-6">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-400 transition-colors"
            title="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-400 transition-colors"
            title="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="hover:text-emerald-400 transition-colors"
            title="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-emerald-500/40 text-slate-300 hover:text-emerald-400 transition-all font-medium"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
