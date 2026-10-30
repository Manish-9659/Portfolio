import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ResumeModal } from './components/ResumeModal';
import { Toast } from './components/Toast';
import { PORTFOLIO_DATA, Project } from './data/portfolioData';

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage((prev) => (prev === message ? null : prev));
    }, 3500);
  };

  const copyEmailToClipboard = () => {
    const email = PORTFOLIO_DATA.profile.email;
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(email)
        .then(() => showToast('Copied email to clipboard!'))
        .catch(() => fallbackCopy(email));
    } else {
      fallbackCopy(email);
    }
  };

  const fallbackCopy = (text: string) => {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
      showToast('Copied email to clipboard!');
    } catch (err) {
      showToast(`Email: ${text}`);
    }
    document.body.removeChild(textArea);
  };

  const handleOpenProjectDemo = (projectId: string) => {
    const proj = PORTFOLIO_DATA.projects.find((p) => p.id === projectId);
    if (proj) {
      setSelectedProject(proj);
    }
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      showToast('Switched to clean contrast mode');
    } else {
      document.documentElement.classList.add('dark');
      showToast('Switched to emerald dark mode');
    }
  };

  return (
    <div className={`min-h-screen bg-[#090d16] text-slate-100 transition-colors duration-300 relative selection:bg-emerald-500 selection:text-black ${isDark ? 'dark' : ''}`}>
      
      {/* Ambient Background Radial Emerald Glows */}
      <div className="fixed top-0 left-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="fixed bottom-1/4 right-1/4 w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      {/* Navigation Header */}
      <Navbar
        onOpenResume={() => setResumeOpen(true)}
        isDark={isDark}
        onToggleTheme={toggleTheme}
      />

      {/* Main Container */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        <Hero
          onCopyEmail={copyEmailToClipboard}
          onOpenResume={() => setResumeOpen(true)}
        />

        <About />

        <Experience onOpenProjectDemo={handleOpenProjectDemo} />

        <Projects onOpenModal={(project) => setSelectedProject(project)} />

        <Skills />

        <Education />

        <Contact
          onCopyEmail={copyEmailToClipboard}
          onShowToast={showToast}
        />

        <Footer />
      </main>

      {/* Modals & Feedback Notifications */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
        onCopyEmail={copyEmailToClipboard}
      />

      <Toast
        message={toastMessage}
        onClose={() => setToastMessage(null)}
      />

    </div>
  );
}
