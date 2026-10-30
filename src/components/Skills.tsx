import React, { useState } from 'react';
import { Cpu, Code2, Layout, Network, Wrench, Brain, Check } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2': return <Code2 className="w-4 h-4 text-emerald-400" />;
      case 'Layout': return <Layout className="w-4 h-4 text-emerald-400" />;
      case 'Network': return <Network className="w-4 h-4 text-emerald-400" />;
      case 'Wrench': return <Wrench className="w-4 h-4 text-emerald-400" />;
      case 'Brain': return <Brain className="w-4 h-4 text-emerald-400" />;
      default: return <Cpu className="w-4 h-4 text-emerald-400" />;
    }
  };

  return (
    <section id="skills" className="space-y-6 scroll-mt-20">
      {/* Section Header */}
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
          <Cpu className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-white tracking-tight">Technical Expertise</h2>
          <p className="text-xs text-slate-400">Languages, frameworks, and system methodologies mastered</p>
        </div>
      </div>

      {/* Grid of Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {PORTFOLIO_DATA.skills.map((category) => (
          <div
            key={category.category}
            className="emerald-glass p-5 rounded-2xl space-y-4 hover:border-emerald-500/30 transition-colors"
          >
            <div className="flex items-center gap-2.5 pb-2 border-b border-slate-800">
              <div className="p-1.5 rounded-lg bg-emerald-500/10">
                {getIcon(category.icon)}
              </div>
              <h3 className="font-bold text-white text-sm">{category.category}</h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => {
                const isSelected = selectedSkill === skill.name;
                return (
                  <button
                    key={skill.name}
                    onClick={() => setSelectedSkill(isSelected ? null : skill.name)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
                      isSelected
                        ? 'bg-emerald-500 text-slate-950 font-bold shadow-emerald-glow'
                        : skill.highlight
                        ? 'bg-slate-900 border border-emerald-500/30 text-slate-200 hover:border-emerald-400'
                        : 'bg-slate-900/60 border border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <span>{skill.name}</span>
                    <span className="text-[10px] text-slate-400 font-mono">({skill.level})</span>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Skill Indicator */}
      {selectedSkill && (
        <div className="p-4 rounded-xl bg-slate-900/90 border border-emerald-500/40 flex items-center justify-between text-xs animate-fadeIn">
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-emerald-400" />
            <span className="text-white">Selected competency: <strong className="text-emerald-400">{selectedSkill}</strong></span>
            <span className="text-slate-400">· Applied across featured projects and internships</span>
          </div>
          <button
            onClick={() => setSelectedSkill(null)}
            className="text-slate-400 hover:text-white text-xs underline"
          >
            Clear
          </button>
        </div>
      )}
    </section>
  );
};
