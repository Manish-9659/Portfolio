import React, { useState, useEffect } from 'react';
import { 
  X, 
  Github, 
  ExternalLink, 
  Layers, 
  Search, 
  Play, 
  AlertTriangle, 
  Check, 
  Sparkles,
  CloudSun,
  Truck,
  Film,
  Code2,
  RefreshCw,
  Star,
  GitFork,
  BookOpen
} from 'lucide-react';
import { Project, PORTFOLIO_DATA } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'demo' | 'architecture' | 'code'>('demo');

  // Simulator states
  // 1. GitHub Analyzer Simulator
  const [githubUser, setGithubUser] = useState('manish20sree');
  const [githubLoading, setGithubLoading] = useState(false);
  const [githubResult, setGithubResult] = useState<{
    login: string;
    name: string;
    bio: string;
    avatar_url: string;
    public_repos: number;
    followers: number;
    stars: number;
    languages: { name: string; pct: number; color: string }[];
    topRepos: { name: string; stars: number; forks: number; desc: string; lang: string }[];
  } | null>(null);

  // 2. Movie Finder Simulator
  const [movieQuery, setMovieQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [watchlist, setWatchlist] = useState<string[]>(['Dune: Part Two']);

  // 3. AgriNova Simulator
  const [soilMoisture, setSoilMoisture] = useState(62);
  const [soilPh, setSoilPh] = useState(6.5);
  const [soilNitrogen, setSoilNitrogen] = useState(58);
  const [weatherCondition, setWeatherCondition] = useState<'Normal' | 'Heavy Rain' | 'Dry Heat'>('Normal');

  // 4. Logistics Delay Simulator
  const [selectedRoute, setSelectedRoute] = useState('chennai-blr');
  const [transitWeather, setTransitWeather] = useState<'Clear' | 'Monsoon Storm' | 'Dense Fog'>('Clear');
  const [cargoType, setCargoType] = useState<'Standard' | 'Cold Chain (Perishable)' | 'Express Electronics'>('Cold Chain (Perishable)');

  useEffect(() => {
    if (project?.demoType === 'github-analyzer') {
      runGithubSimulation('manish20sree');
    }
  }, [project]);

  if (!project) return null;

  // GitHub Simulator runner
  const runGithubSimulation = (username: string) => {
    setGithubLoading(true);
    setTimeout(() => {
      if (username.toLowerCase().includes('manish')) {
        setGithubResult({
          login: 'manish20sree',
          name: 'Manish SR',
          bio: 'Computer Science Engineer | Frontend Developer & AI App Builder',
          avatar_url: PORTFOLIO_DATA.profile.avatarImage,
          public_repos: 14,
          followers: 28,
          stars: 46,
          languages: [
            { name: 'JavaScript', pct: 45, color: '#f7df1e' },
            { name: 'Python', pct: 30, color: '#3572A5' },
            { name: 'TypeScript / React', pct: 20, color: '#3178c6' },
            { name: 'HTML/CSS', pct: 5, color: '#e34c26' }
          ],
          topRepos: [
            { name: 'agrinova-360-smart-agri', stars: 22, forks: 8, desc: 'AI-driven agricultural telemetry platform with precision recommendations.', lang: 'React' },
            { name: 'github-profile-analyzer', stars: 15, forks: 6, desc: 'Dynamic developer profile inspector with Fetch API async/await.', lang: 'JavaScript' },
            { name: 'movie-finder-app', stars: 9, forks: 3, desc: 'Low latency entertainment search using external TMDB APIs.', lang: 'JavaScript' }
          ]
        });
      } else {
        setGithubResult({
          login: username,
          name: `${username.toUpperCase()} Developer`,
          bio: 'Open Source Software Contributor & Web Architect',
          avatar_url: 'https://avatars.githubusercontent.com/u/9919?v=4',
          public_repos: 32,
          followers: 140,
          stars: 98,
          languages: [
            { name: 'JavaScript', pct: 50, color: '#f7df1e' },
            { name: 'Python', pct: 35, color: '#3572A5' },
            { name: 'HTML/CSS', pct: 15, color: '#e34c26' }
          ],
          topRepos: [
            { name: `${username}-core-utils`, stars: 54, forks: 19, desc: 'Production utility scripts and async helpers.', lang: 'JavaScript' },
            { name: `${username}-ml-pipelines`, stars: 44, forks: 12, desc: 'Statistical inference workflows and data monitors.', lang: 'Python' }
          ]
        });
      }
      setGithubLoading(false);
    }, 400);
  };

  // Movie Finder mock dataset
  const mockMovies = [
    { id: '1', title: 'Stardust Echoes', genre: 'Sci-Fi', rating: 8.5, year: 2026, desc: 'Deep-space explorers navigate gravitational anomalies near binary pulsars.' },
    { id: '2', title: 'Dune: Part Two', genre: 'Sci-Fi', rating: 8.6, year: 2024, desc: 'Paul Atreides unites with the Fremen while seeking vengeance against conspirators.' },
    { id: '3', title: 'Oppenheimer', genre: 'Drama', rating: 8.9, year: 2023, desc: 'The story of American scientist J. Robert Oppenheimer and the Manhattan Project.' },
    { id: '4', title: 'The Dark Knight', genre: 'Action', rating: 9.0, year: 2008, desc: 'Batman faces the criminal mastermind known as the Joker in Gotham City.' },
    { id: '5', title: 'Cyber Pulse 2049', genre: 'Action', rating: 7.9, year: 2025, desc: 'A rogue synth engineer uncovers clandestine neural networks in Neo-Tokyo.' },
    { id: '6', title: 'Spirited Skyways', genre: 'Animation', rating: 8.4, year: 2024, desc: 'An airship mechanic and an ethereal guide map uncharted cloud archipelagos.' }
  ];

  const filteredMovies = mockMovies.filter((m) => {
    const matchesGenre = selectedGenre === 'All' || m.genre === selectedGenre;
    const matchesQuery = m.title.toLowerCase().includes(movieQuery.toLowerCase()) || m.desc.toLowerCase().includes(movieQuery.toLowerCase());
    return matchesGenre && matchesQuery;
  });

  // AgriNova recommendation calculator
  const calculateCropRecommendation = () => {
    let crop = 'Maize / Corn';
    let confidence = 88;
    let advice = 'Optimal conditions for high-yield cereal crops.';

    if (soilMoisture > 70 && soilPh >= 6.0 && soilPh <= 7.2) {
      crop = 'Wetland Paddy / Rice';
      confidence = 94;
      advice = 'Ideal water retention and balanced soil acidity for paddy cultivation.';
    } else if (soilMoisture < 45 && soilNitrogen < 50) {
      crop = 'Groundnut / Pulses';
      confidence = 91;
      advice = 'Drought-tolerant leguminous crop suitable for lower nitrogen soils.';
    } else if (soilPh >= 6.5 && soilPh <= 8.0 && soilNitrogen >= 60) {
      crop = 'Cotton';
      confidence = 89;
      advice = 'High nutrient supply supports vigorous vegetative and boll formation.';
    }

    let pestRisk = 'Low Risk (12%)';
    if (weatherCondition === 'Heavy Rain' || soilMoisture > 80) {
      pestRisk = 'High Fungal Hazard (68%) - Recommend preventive bio-spray';
    } else if (weatherCondition === 'Dry Heat') {
      pestRisk = 'Moderate Mite/Aphid Alert (35%) - Maintain sub-surface drip';
    }

    return { crop, confidence, advice, pestRisk };
  };

  const cropRec = calculateCropRecommendation();

  // Logistics prediction calculator
  const calculateDelayRisk = () => {
    let delayProb = 8.5;
    let bottleneck = 'Normal Transit';
    let eta = '14h 30m';

    if (selectedRoute === 'chennai-blr') {
      delayProb = transitWeather === 'Monsoon Storm' ? 38.2 : 11.4;
      bottleneck = transitWeather === 'Monsoon Storm' ? 'Sriperumbudur Toll Waterlogging' : 'Moderate Hosur Border Transit';
      eta = transitWeather === 'Monsoon Storm' ? '18h 15m (+3h 45m)' : '14h 20m';
    } else if (selectedRoute === 'mumbai-delhi') {
      delayProb = transitWeather === 'Dense Fog' ? 54.0 : 18.6;
      bottleneck = transitWeather === 'Dense Fog' ? 'Northern Freight Corridor Fog Blind' : 'Surat Bypass Congestion';
      eta = transitWeather === 'Dense Fog' ? '32h 10m (+7h 30m)' : '24h 40m';
    } else if (selectedRoute === 'nagercoil-kochi') {
      delayProb = transitWeather === 'Monsoon Storm' ? 29.5 : 9.2;
      bottleneck = transitWeather === 'Monsoon Storm' ? 'Aroor Ghat Speed Restrictions' : 'Kollam Bypass Flow';
      eta = transitWeather === 'Monsoon Storm' ? '7h 50m (+1h 40m)' : '6h 10m';
    }

    if (cargoType.includes('Cold Chain')) {
      delayProb = Math.min(100, Math.round(delayProb * 1.15));
    }

    return { delayProb, bottleneck, eta };
  };

  const delayData = calculateDelayRisk();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-fadeIn overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-[#090d16] border border-emerald-500/30 rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/60">
          <div className="flex items-center gap-2.5">
            <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded bg-emerald-950 text-emerald-300 border border-emerald-500/40">
              {project.category}
            </span>
            <span className="text-sm font-bold text-white hidden sm:inline">{project.title}</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-emerald-400 transition-colors"
              title="View on GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Hero Banner & Description */}
        <div className="p-6 border-b border-slate-800/80 bg-gradient-to-b from-slate-900/40 to-transparent space-y-3">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {project.title}
          </h2>
          <p className="text-sm text-emerald-400 font-semibold">{project.tagline}</p>
          <p className="text-sm text-slate-300 leading-relaxed max-w-3xl">
            {project.fullDesc}
          </p>

          {/* Tab Selector */}
          <div className="flex items-center gap-2 pt-2">
            <button
              onClick={() => setActiveTab('demo')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                activeTab === 'demo'
                  ? 'bg-emerald-500 text-slate-950 shadow-emerald-glow'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              <Play className="w-3.5 h-3.5" />
              <span>Interactive Live Demo</span>
            </button>
            <button
              onClick={() => setActiveTab('architecture')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                activeTab === 'architecture'
                  ? 'bg-emerald-500 text-slate-950 shadow-emerald-glow'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Architecture & Key Highlights</span>
            </button>
            <button
              onClick={() => setActiveTab('code')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                activeTab === 'code'
                  ? 'bg-emerald-500 text-slate-950 shadow-emerald-glow'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>Code Snippets</span>
            </button>
          </div>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">

          {/* TAB 1: INTERACTIVE DEMOS */}
          {activeTab === 'demo' && (
            <div className="space-y-6">

              {/* DEMO 1: GitHub Profile Analyzer */}
              {project.demoType === 'github-analyzer' && (
                <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-5">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <div>
                      <h4 className="text-base font-bold text-white flex items-center gap-2">
                        <Github className="w-4 h-4 text-emerald-400" />
                        Live GitHub Profile Query Simulator
                      </h4>
                      <p className="text-xs text-slate-400">Tests async/await Fetch API routines, error handling, and language statistics.</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => { setGithubUser('manish20sree'); runGithubSimulation('manish20sree'); }}
                        className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-[11px] text-emerald-300"
                      >
                        Try 'manish20sree'
                      </button>
                      <button
                        onClick={() => { setGithubUser('torvalds'); runGithubSimulation('torvalds'); }}
                        className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-[11px] text-slate-300"
                      >
                        Try 'torvalds'
                      </button>
                    </div>
                  </div>

                  {/* Input bar */}
                  <div className="flex gap-2">
                    <div className="relative flex-1">
                      <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-500" />
                      <input
                        type="text"
                        value={githubUser}
                        onChange={(e) => setGithubUser(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && runGithubSimulation(githubUser)}
                        placeholder="Enter GitHub username (e.g. manish20sree)..."
                        className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                    <button
                      onClick={() => runGithubSimulation(githubUser)}
                      disabled={githubLoading}
                      className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm transition-all flex items-center gap-1.5 shrink-0"
                    >
                      {githubLoading ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Play className="w-4 h-4" />}
                      <span>Fetch Profile</span>
                    </button>
                  </div>

                  {/* Profile Results View */}
                  {githubResult && (
                    <div className="space-y-4 pt-2">
                      <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-950/70 border border-slate-800">
                        <img
                          src={githubResult.avatar_url}
                          alt={githubResult.name}
                          className="w-14 h-14 rounded-full object-cover border border-emerald-500/40"
                          referrerPolicy="no-referrer"
                        />
                        <div className="flex-1 space-y-1">
                          <div className="flex items-center justify-between">
                            <h5 className="font-bold text-white text-base">{githubResult.name}</h5>
                            <span className="text-xs font-mono text-emerald-400">@{githubResult.login}</span>
                          </div>
                          <p className="text-xs text-slate-300">{githubResult.bio}</p>
                          <div className="flex items-center gap-4 text-xs font-mono text-slate-400 pt-1">
                            <span>Repos: <strong className="text-white">{githubResult.public_repos}</strong></span>
                            <span>Followers: <strong className="text-white">{githubResult.followers}</strong></span>
                            <span>Total Stars: <strong className="text-emerald-400">{githubResult.stars}</strong></span>
                          </div>
                        </div>
                      </div>

                      {/* Language distribution bar */}
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between text-xs text-slate-400">
                          <span>Computed Language Breakdown</span>
                          <span className="font-mono text-emerald-400">Async Calculated</span>
                        </div>
                        <div className="h-2.5 w-full rounded-full bg-slate-800 flex overflow-hidden">
                          {githubResult.languages.map((l) => (
                            <div
                              key={l.name}
                              style={{ width: `${l.pct}%`, backgroundColor: l.color }}
                              title={`${l.name}: ${l.pct}%`}
                            />
                          ))}
                        </div>
                        <div className="flex flex-wrap gap-3 text-[11px] text-slate-400 pt-1">
                          {githubResult.languages.map((l) => (
                            <span key={l.name} className="flex items-center gap-1.5">
                              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: l.color }}></span>
                              {l.name} ({l.pct}%)
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Top Repositories */}
                      <div className="space-y-2">
                        <p className="text-xs font-bold text-slate-300 uppercase tracking-wider">Top Featured Repositories</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {githubResult.topRepos.map((repo, idx) => (
                            <div key={idx} className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-1">
                              <p className="font-bold text-xs text-emerald-300 flex items-center justify-between">
                                <span className="truncate">{repo.name}</span>
                                <span className="text-[10px] font-mono text-slate-400">{repo.lang}</span>
                              </p>
                              <p className="text-[11px] text-slate-400 line-clamp-2">{repo.desc}</p>
                              <div className="flex items-center gap-3 text-[11px] font-mono text-slate-400 pt-1">
                                <span className="flex items-center gap-1"><Star className="w-3 h-3 text-amber-400" />{repo.stars}</span>
                                <span className="flex items-center gap-1"><GitFork className="w-3 h-3 text-emerald-400" />{repo.forks}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* DEMO 2: Movie Finder Website */}
              {project.demoType === 'movie-finder' && (
                <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h4 className="text-base font-bold text-white flex items-center gap-2">
                        <Film className="w-4 h-4 text-emerald-400" />
                        Movie Discovery & Debounced Filter Engine
                      </h4>
                      <p className="text-xs text-slate-400">Low-latency client filtering simulating asynchronous TMDB pagination and search.</p>
                    </div>
                    <div className="text-xs text-slate-400">
                      Watchlist items: <strong className="text-emerald-400">{watchlist.length}</strong>
                    </div>
                  </div>

                  {/* Search and filters */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="relative flex-1">
                      <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-500" />
                      <input
                        type="text"
                        value={movieQuery}
                        onChange={(e) => setMovieQuery(e.target.value)}
                        placeholder="Type to search films (e.g. Dune, Oppenheimer, Stardust)..."
                        className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                    <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
                      {['All', 'Sci-Fi', 'Action', 'Drama', 'Animation'].map((genre) => (
                        <button
                          key={genre}
                          onClick={() => setSelectedGenre(genre)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                            selectedGenre === genre
                              ? 'bg-emerald-500 text-slate-950'
                              : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                          }`}
                        >
                          {genre}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Movie cards grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {filteredMovies.map((movie) => {
                      const isSaved = watchlist.includes(movie.title);
                      return (
                        <div key={movie.id} className="p-3.5 rounded-xl bg-slate-950 border border-slate-800/90 flex flex-col justify-between space-y-2">
                          <div className="space-y-1">
                            <div className="flex items-center justify-between text-xs">
                              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800">{movie.genre}</span>
                              <span className="flex items-center gap-1 font-mono text-amber-400 font-bold">
                                <Star className="w-3 h-3 fill-amber-400" /> {movie.rating}
                              </span>
                            </div>
                            <h5 className="font-bold text-white text-sm">{movie.title}</h5>
                            <p className="text-[11px] text-slate-400 line-clamp-2">{movie.desc}</p>
                          </div>

                          <div className="pt-2 border-t border-slate-900 flex items-center justify-between text-xs">
                            <span className="text-slate-500">{movie.year}</span>
                            <button
                              onClick={() => {
                                if (isSaved) {
                                  setWatchlist(watchlist.filter((t) => t !== movie.title));
                                } else {
                                  setWatchlist([...watchlist, movie.title]);
                                }
                              }}
                              className={`text-[11px] font-semibold px-2 py-1 rounded transition-colors ${
                                isSaved
                                  ? 'bg-emerald-950 text-emerald-400 border border-emerald-500/40'
                                  : 'bg-slate-900 hover:bg-slate-800 text-slate-300'
                              }`}
                            >
                              {isSaved ? '✓ Saved' : '+ Watchlist'}
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* DEMO 3: AgriNova 360 Smart Agri Simulator */}
              {project.demoType === 'agrinova' && (
                <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-base font-bold text-white flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-emerald-400" />
                        AgriNova AI Precision Farming Simulator
                      </h4>
                      <p className="text-xs text-slate-400">Simulate sensor parameters to trigger real-time crop suitability and pest risk inference.</p>
                    </div>
                  </div>

                  {/* Sliders grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-xl bg-slate-950 border border-slate-800">
                    <div className="space-y-1.5">
                      <div className="flex justify-between text-xs text-slate-300">
                        <span>Soil Moisture</span>
                        <span className="font-mono text-emerald-400 font-bold">{soilMoisture}%</span>
                      </div>
                      <input
                        type="range"
                        min="20"
                        max="95"
                        value={soilMoisture}
                        onChange={(e) => setSoilMoisture(Number(e.target.value))}
                        className="w-full accent-emerald-500 cursor-pointer"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex justify-between text-xs text-slate-300">
                        <span>Soil pH Value</span>
                        <span className="font-mono text-emerald-400 font-bold">{soilPh.toFixed(1)}</span>
                      </div>
                      <input
                        type="range"
                        min="4.5"
                        max="8.5"
                        step="0.1"
                        value={soilPh}
                        onChange={(e) => setSoilPh(Number(e.target.value))}
                        className="w-full accent-emerald-500 cursor-pointer"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex justify-between text-xs text-slate-300">
                        <span>Nitrogen (N) Content</span>
                        <span className="font-mono text-emerald-400 font-bold">{soilNitrogen} kg/ha</span>
                      </div>
                      <input
                        type="range"
                        min="10"
                        max="100"
                        value={soilNitrogen}
                        onChange={(e) => setSoilNitrogen(Number(e.target.value))}
                        className="w-full accent-emerald-500 cursor-pointer"
                      />
                    </div>
                  </div>

                  {/* Weather selector */}
                  <div className="flex items-center gap-2 text-xs">
                    <span className="text-slate-400 font-semibold">Simulate Micro-Climate:</span>
                    {(['Normal', 'Heavy Rain', 'Dry Heat'] as const).map((weather) => (
                      <button
                        key={weather}
                        onClick={() => setWeatherCondition(weather)}
                        className={`px-3 py-1 rounded-lg font-medium transition-colors ${
                          weatherCondition === weather
                            ? 'bg-emerald-500 text-slate-950 font-bold'
                            : 'bg-slate-950 text-slate-300 border border-slate-800 hover:border-slate-700'
                        }`}
                      >
                        {weather}
                      </button>
                    ))}
                  </div>

                  {/* Inference Result Box */}
                  <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/40 space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[11px] text-emerald-400 uppercase tracking-wider font-mono">Recommended Crop Match</p>
                        <h5 className="text-lg font-extrabold text-white">{cropRec.crop}</h5>
                      </div>
                      <span className="text-sm font-mono font-bold px-2.5 py-1 rounded bg-emerald-500 text-slate-950">
                        {cropRec.confidence}% Match
                      </span>
                    </div>
                    <p className="text-xs text-slate-200">{cropRec.advice}</p>
                    <div className="pt-2 border-t border-emerald-500/20 flex items-center gap-2 text-xs">
                      <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
                      <span className="text-slate-300"><strong className="text-amber-400">Vulnerability:</strong> {cropRec.pestRisk}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* DEMO 4: Supply Chain Logistics Delay Predictor */}
              {project.demoType === 'logistics' && (
                <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-base font-bold text-white flex items-center gap-2">
                        <Truck className="w-4 h-4 text-emerald-400" />
                        Logistics Delay Prediction Model Simulator
                      </h4>
                      <p className="text-xs text-slate-400">Modeled from Femtosoft Technologies internship deliverables (+25% team efficiency).</p>
                    </div>
                  </div>

                  {/* Route & Factor Selectors */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="space-y-1">
                      <label className="text-xs text-slate-400 font-semibold">Select Route Corridor</label>
                      <select
                        value={selectedRoute}
                        onChange={(e) => setSelectedRoute(e.target.value)}
                        className="w-full px-3 py-2 text-xs rounded-xl bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-emerald-500"
                      >
                        <option value="chennai-blr">Chennai ➔ Bengaluru (350 km)</option>
                        <option value="mumbai-delhi">Mumbai ➔ Delhi (1,400 km)</option>
                        <option value="nagercoil-kochi">Nagercoil ➔ Kochi (280 km)</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs text-slate-400 font-semibold">Weather Conditions</label>
                      <select
                        value={transitWeather}
                        onChange={(e) => setTransitWeather(e.target.value as any)}
                        className="w-full px-3 py-2 text-xs rounded-xl bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-emerald-500"
                      >
                        <option value="Clear">Clear & High Visibility</option>
                        <option value="Monsoon Storm">Heavy Monsoon Downpours</option>
                        <option value="Dense Fog">Dense Highway Fog</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs text-slate-400 font-semibold">Priority Cargo Type</label>
                      <select
                        value={cargoType}
                        onChange={(e) => setCargoType(e.target.value as any)}
                        className="w-full px-3 py-2 text-xs rounded-xl bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-emerald-500"
                      >
                        <option value="Standard">Standard Dry Goods</option>
                        <option value="Cold Chain (Perishable)">Cold Chain (Perishables)</option>
                        <option value="Express Electronics">Express High-Value Tech</option>
                      </select>
                    </div>
                  </div>

                  {/* Calculated Delay Risk Metrics */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                      <p className="text-[11px] text-slate-400 uppercase font-mono">Predicted Delay Probability</p>
                      <p className="text-2xl font-extrabold text-white font-mono">
                        <span className={delayData.delayProb > 30 ? 'text-amber-400' : 'text-emerald-400'}>
                          {delayData.delayProb}%
                        </span>
                      </p>
                      <p className="text-[10px] text-slate-400">Risk Severity: {delayData.delayProb > 30 ? 'Elevated' : 'Optimal'}</p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                      <p className="text-[11px] text-slate-400 uppercase font-mono">Estimated Duration (ETA)</p>
                      <p className="text-2xl font-extrabold text-white font-mono">{delayData.eta}</p>
                      <p className="text-[10px] text-slate-400">Adjusted for traffic & hazard</p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                      <p className="text-[11px] text-slate-400 uppercase font-mono">Primary Bottleneck</p>
                      <p className="text-sm font-bold text-slate-200 mt-1 line-clamp-2">{delayData.bottleneck}</p>
                      <p className="text-[10px] text-emerald-400">Proactive reroute flagged</p>
                    </div>
                  </div>
                </div>
              )}

            </div>
          )}

          {/* TAB 2: ARCHITECTURE & HIGHLIGHTS */}
          {activeTab === 'architecture' && (
            <div className="space-y-6">
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">System Architecture & Engineering Decisions</h4>
                <div className="space-y-2">
                  {project.architectureDetails.map((detail, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-mono font-bold shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">{detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">Measurable Highlights & Outcomes</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {project.keyHighlights.map((hl, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-slate-900/40 border border-emerald-500/20 space-y-1">
                      <Check className="w-4 h-4 text-emerald-400" />
                      <p className="text-xs text-slate-300 font-medium leading-relaxed">{hl}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: CODE SNIPPETS */}
          {activeTab === 'code' && (
            <div className="space-y-4">
              <p className="text-xs text-slate-400">
                Core code sample illustrating asynchronous API integration and defensive error management.
              </p>
              <div className="rounded-2xl bg-slate-950 p-4 font-mono text-xs text-emerald-300 overflow-x-auto border border-slate-800 space-y-2">
                <div className="text-slate-500">// Example asynchronous handler with error boundary</div>
                <div className="text-purple-400">async function <span className="text-blue-300">fetchWithRetry</span>(url, options = &#123;&#125;) &#123;</div>
                <div className="pl-4 text-slate-300">try &#123;</div>
                <div className="pl-8 text-slate-300">const response = await fetch(url, options);</div>
                <div className="pl-8 text-slate-300">if (!response.ok) &#123;</div>
                <div className="pl-12 text-amber-300">throw new Error(`API Error: $&#123;response.status&#125; - $&#123;response.statusText&#125;`);</div>
                <div className="pl-8 text-slate-300">&#125;</div>
                <div className="pl-8 text-emerald-400">const data = await response.json();</div>
                <div className="pl-8 text-emerald-400">return &#123; success: true, data &#125;;</div>
                <div className="pl-4 text-slate-300">&#125; catch (error) &#123;</div>
                <div className="pl-8 text-amber-400">console.error('Network dispatch failure:', error);</div>
                <div className="pl-8 text-slate-300">return &#123; success: false, error: error.message &#125;;</div>
                <div className="pl-4 text-slate-300">&#125;</div>
                <div className="text-purple-400">&#125;</div>
              </div>
            </div>
          )}

        </div>

        {/* Modal Bottom Footer */}
        <div className="p-4 px-6 border-t border-slate-800 bg-slate-900/60 flex items-center justify-between">
          <div className="flex flex-wrap items-center gap-1.5">
            {project.tags.map((tag) => (
              <span key={tag} className="text-[11px] px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                {tag}
              </span>
            ))}
          </div>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-emerald-500 hover:text-slate-950 text-slate-200 text-xs font-bold transition-all flex items-center gap-1.5"
          >
            <span>View Source Repo</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </div>
  );
};
