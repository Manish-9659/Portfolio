import React, { useState } from 'react';
import { FolderGit2, Search, ArrowUpRight, Play, Github } from 'lucide-react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';

interface ProjectsProps {
  onOpenModal: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onOpenModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'AI & Data Systems', 'Web & REST APIs', 'Mobile & Precision Agri', 'Enterprise Logistics'];

  const filteredProjects = PORTFOLIO_DATA.projects.filter((p) => {
    const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
    const matchesSearch = 
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="space-y-6 scroll-mt-20">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
            <FolderGit2 className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white tracking-tight">Featured Projects</h2>
            <p className="text-xs text-slate-400">Production web apps, AI pipelines, and interactive REST clients</p>
          </div>
        </div>

        {/* Search input */}
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search projects or stack..."
            className="w-full pl-9 pr-3 py-1.5 text-xs rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
          />
        </div>
      </div>

      {/* Category Tabs (Interactive Filter Controls) */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
              selectedCategory === cat
                ? 'bg-emerald-500 text-slate-950 font-bold shadow-emerald-glow'
                : 'bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="emerald-glass rounded-3xl overflow-hidden flex flex-col justify-between group hover:border-emerald-500/40 transition-all duration-300 hover:-translate-y-1"
          >
            {/* Visual Header Image Container */}
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-900 border-b border-slate-800">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
              
              {/* Category indicator */}
              <div className="absolute top-3 left-3">
                <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded bg-[#090d16]/90 text-emerald-300 border border-emerald-500/40 backdrop-blur-md">
                  {project.category}
                </span>
              </div>

              {/* Interactive Demo Quick Button on hover */}
              <button
                onClick={() => onOpenModal(project)}
                className="absolute bottom-3 right-3 px-3 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold shadow-emerald-glow flex items-center gap-1.5 transition-all opacity-95 group-hover:opacity-100"
              >
                <Play className="w-3.5 h-3.5" />
                <span>Launch Live Demo</span>
              </button>
            </div>

            {/* Content body */}
            <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-start justify-between gap-2">
                  <h3 
                    onClick={() => onOpenModal(project)}
                    className="text-lg sm:text-xl font-bold text-white group-hover:text-emerald-400 transition-colors cursor-pointer"
                  >
                    {project.title}
                  </h3>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg bg-slate-900 text-slate-400 hover:text-emerald-400 hover:bg-slate-800 transition-colors shrink-0"
                    title="View GitHub Repository"
                    aria-label={`View ${project.title} GitHub repo`}
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
                <p className="text-xs font-semibold text-emerald-400">{project.tagline}</p>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed line-clamp-3">
                  {project.shortDesc}
                </p>
              </div>

              {/* Metadata and footer */}
              <div className="pt-4 space-y-3 border-t border-slate-800/80">
                {/* Tech tags unboxed with clean separators */}
                <div className="flex flex-wrap items-center gap-1.5 text-xs text-slate-400">
                  {project.tags.map((tag, idx) => (
                    <span key={tag} className="inline-flex items-center">
                      <span className="text-slate-300 hover:text-emerald-400 transition-colors font-medium">{tag}</span>
                      {idx < project.tags.length - 1 && (
                        <span className="mx-1.5 text-slate-600" aria-hidden="true">·</span>
                      )}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs pt-1">
                  <span className="text-slate-400 font-mono text-[11px]">{project.metrics}</span>
                  <button
                    onClick={() => onOpenModal(project)}
                    className="text-emerald-400 hover:text-emerald-300 font-bold flex items-center gap-1"
                  >
                    <span>Inspect Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>

            </div>

          </div>
        ))}
      </div>
    </section>
  );
};
