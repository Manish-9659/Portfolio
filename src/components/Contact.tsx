import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  Send, 
  Copy, 
  Linkedin, 
  Github, 
  CheckCircle2, 
  MessageSquare,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ContactProps {
  onCopyEmail: () => void;
  onShowToast: (msg: string) => void;
}

export const Contact: React.FC<ContactProps> = ({ onCopyEmail, onShowToast }) => {
  const { profile } = PORTFOLIO_DATA;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    inquiryType: 'Full-time Opportunity',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      onShowToast('Please fill out all required fields.');
      return;
    }

    const emailSubject = encodeURIComponent(`[${formData.inquiryType}] ${formData.subject || 'Portfolio Inquiry'} from ${formData.name}`);
    const emailBody = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Inquiry Type: ${formData.inquiryType}\n\n` +
      `Message:\n${formData.message}`
    );

    window.location.href = `mailto:${profile.email}?subject=${emailSubject}&body=${emailBody}`;
    setSubmitted(true);
    onShowToast('Drafted email in your mail client!');
  };

  const handleCopyDraft = () => {
    const draftText = `To: ${profile.email}\nSubject: [${formData.inquiryType}] ${formData.subject || 'Portfolio Inquiry'} from ${formData.name}\n\n${formData.message}\nFrom: ${formData.name} (${formData.email})`;
    navigator.clipboard.writeText(draftText);
    onShowToast('Copied email message text to clipboard!');
  };

  return (
    <section id="contact" className="pt-8 space-y-8 scroll-mt-20 border-t border-slate-800/80">
      
      {/* Top Banner Card */}
      <div className="emerald-glass p-8 sm:p-12 rounded-3xl relative overflow-hidden">
        
        {/* Ambient emerald backlight */}
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-64 h-64 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-2xl mx-auto text-center space-y-3 relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Open for Immediate Relocation & Remote Roles</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's Build Something Great
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Have an open position, an AI or web project, or a technical inquiry? Send a message directly or connect across developer networks.
          </p>
        </div>

        {/* Quick action buttons strip */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-6 relative">
          <a
            href={`mailto:${profile.email}`}
            className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold shadow-emerald-glow hover:shadow-emerald-glow-lg transition-all flex items-center gap-2"
          >
            <Mail className="w-4 h-4" />
            <span>{profile.email}</span>
          </a>

          <button
            onClick={onCopyEmail}
            className="p-3 rounded-xl bg-slate-900 border border-slate-700 hover:border-emerald-500/50 text-slate-300 hover:text-emerald-400 transition-all"
            title="Copy Email to Clipboard"
          >
            <Copy className="w-4 h-4" />
          </button>

          <a
            href={`tel:${profile.phone}`}
            className="px-6 py-3 rounded-xl bg-slate-900 border border-slate-700 hover:border-emerald-500/50 text-slate-200 font-semibold hover:text-emerald-400 transition-all flex items-center gap-2"
          >
            <Phone className="w-4 h-4 text-emerald-400" />
            <span>{profile.phone}</span>
          </a>
        </div>

      </div>

      {/* Split contact grid: Form + Direct Links */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Interactive Contact Form */}
        <div className="lg:col-span-7 emerald-glass p-6 sm:p-8 rounded-3xl space-y-5">
          <div className="flex items-center gap-2 pb-2 border-b border-slate-800">
            <MessageSquare className="w-5 h-5 text-emerald-400" />
            <h3 className="text-lg font-bold text-white">Direct Message Portal</h3>
          </div>

          {submitted ? (
            <div className="p-6 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-4">
              <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
              <div className="space-y-1">
                <h4 className="text-lg font-bold text-white">Ready in Your Mail Client!</h4>
                <p className="text-xs text-slate-300">
                  Your message has been pre-formatted. If your mail client didn't launch automatically, you can copy the full draft below.
                </p>
              </div>
              <div className="flex justify-center gap-3 pt-2">
                <button
                  onClick={handleCopyDraft}
                  className="px-4 py-2 rounded-xl bg-emerald-500 text-slate-950 font-bold text-xs flex items-center gap-1.5"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Formatted Message</span>
                </button>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-700 text-slate-300 hover:text-white text-xs font-semibold"
                >
                  Send Another
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-slate-300 font-semibold">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Henderson"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-slate-300 font-semibold">Your Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. alex@company.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-slate-300 font-semibold">Inquiry Type</label>
                  <select
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-emerald-500"
                  >
                    <option value="Full-time Opportunity">Full-time Engineering Role</option>
                    <option value="Internship / Trainee">Internship / Traineeship</option>
                    <option value="Freelance / Contract">Freelance / Contract Project</option>
                    <option value="Technical Collaboration">Technical Collaboration</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-slate-300 font-semibold">Subject</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Brief subject description..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-slate-300 font-semibold">Message *</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share details regarding your team, technology stack, or project goals..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold transition-all shadow-emerald-glow hover:shadow-emerald-glow-lg flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Launch Mail & Send</span>
              </button>
            </form>
          )}
        </div>

        {/* Right Column: Direct Info Cards */}
        <div className="lg:col-span-5 space-y-4">
          <div className="emerald-glass p-6 rounded-3xl space-y-4">
            <h4 className="text-base font-bold text-white">Direct Connect Channels</h4>

            <div className="space-y-3 text-xs sm:text-sm">
              <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] text-slate-400 uppercase font-mono">Email Address</p>
                    <a href={`mailto:${profile.email}`} className="font-semibold text-slate-200 hover:text-emerald-400 transition-colors">
                      {profile.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={onCopyEmail}
                  className="p-2 text-slate-400 hover:text-emerald-400"
                  title="Copy"
                >
                  <Copy className="w-4 h-4" />
                </button>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] text-slate-400 uppercase font-mono">Phone (Voice & WhatsApp)</p>
                    <a href={`tel:${profile.phone}`} className="font-semibold text-slate-200 hover:text-emerald-400 transition-colors">
                      {profile.phone}
                    </a>
                  </div>
                </div>
              </div>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-center justify-between group hover:border-emerald-500/40 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] text-slate-400 uppercase font-mono">Professional Network</p>
                    <p className="font-semibold text-slate-200 group-hover:text-emerald-400 transition-colors">LinkedIn Profile</p>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" />
              </a>

              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-center justify-between group hover:border-emerald-500/40 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                    <Github className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] text-slate-400 uppercase font-mono">Source Code Repositories</p>
                    <p className="font-semibold text-slate-200 group-hover:text-emerald-400 transition-colors">GitHub Profile</p>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" />
              </a>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
};
