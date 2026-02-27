import React from 'react';
import { Download, Globe, TrendingUp, Users, CheckCircle2 } from 'lucide-react';
import Button from '../ui/Button';
import { useLanguage } from '../../context/LanguageContext';
import { TRANSLATIONS } from '../../constants';

const FeaturedCaseStudy: React.FC = () => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];
  const fc = t.FEATURED_CASE;

  return (
    <section className="py-24 bg-brand-dark border-t border-brand-border relative overflow-hidden">
      {/* Background Tech Mesh */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

      {/* Ambient Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* 1. HEADER */}
        <div className="mb-12">
          <div className="flex items-center space-x-3 mb-4">
            <span className="h-px w-8 bg-brand-accent"></span>
            <span className="text-xs font-bold font-mono text-brand-accent uppercase tracking-widest">
              {fc.label}
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-brand-text tracking-tight max-w-3xl">
            {language === 'it'
              ? <>Da innovatore di nicchia a <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-700">pipeline globale</span> in 9 mesi.</>
              : <>From niche innovator to <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-700">global pipeline</span> in 9 months.</>
            }
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">

          {/* 2. VIDEO CONTAINER (Left) */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative group w-full max-w-[320px]">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-700/30 to-brand-accent/10 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-700"></div>
              <div className="relative w-full aspect-[9/16] bg-[#0b141a] rounded-xl border border-white/10 overflow-hidden shadow-2xl flex flex-col items-center justify-center">
                {/* Grid background */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,229,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,229,255,0.04)_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 pointer-events-none"></div>
                {/* Ambient glow */}
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
                {/* Play button */}
                <div className="relative z-10 flex flex-col items-center text-center px-6 space-y-5">
                  <div className="w-16 h-16 bg-white/10 backdrop-blur border border-white/20 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-brand-accent/30 transition-all duration-300 shadow-lg">
                    <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm mb-1">Isolcore — CEO Interview</p>
                    <p className="text-white/40 text-xs font-mono">{language === 'it' ? 'Disponibile su richiesta' : 'Available on request'}</p>
                  </div>
                </div>
                {/* Video Overlay Badge */}
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur border border-white/10 px-3 py-1 rounded-md flex items-center space-x-2 z-20">
                  <div className="w-2 h-2 bg-brand-accent rounded-full animate-pulse"></div>
                  <span className="text-[10px] text-white font-mono uppercase">{fc.videoBadge}</span>
                </div>
                {/* Bottom metrics strip */}
                <div className="absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur border-t border-white/10 px-4 py-3 z-20">
                  <div className="flex items-center justify-between">
                    <span className="text-white/50 text-[9px] font-mono uppercase tracking-wider">Isolcore</span>
                    <span className="text-cyan-400 text-[10px] font-mono font-bold">+€1M Pipeline</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3. BRIEFING TEXT (Right) */}
          <div className="flex flex-col h-full justify-center space-y-8">
            <div>
              <h3 className="text-brand-text font-bold text-xl mb-1 flex items-center">
                {fc.company} <span className="text-brand-muted font-normal text-sm ml-3 border-l border-brand-border pl-3">{fc.subCompany}</span>
              </h3>
              <p className="text-cyan-400 text-sm font-mono">{fc.sector}</p>
            </div>

            <div className="space-y-6">
              <div className="bg-brand-surfaceHighlight/30 p-6 rounded-xl border-l-2 border-brand-accent">
                <h4 className="text-brand-text font-bold text-sm uppercase tracking-wide mb-2">{fc.challengeTitle}</h4>
                <p className="text-brand-muted text-sm leading-relaxed">
                  {fc.challengeDesc}
                </p>
              </div>

              <div className="pl-6 border-l border-brand-border/50">
                <h4 className="text-brand-text font-bold text-sm uppercase tracking-wide mb-2">{fc.strategyTitle}</h4>
                <p className="text-brand-muted text-sm leading-relaxed mb-4">
                  {fc.strategyDesc}
                </p>
                <ul className="space-y-2">
                  {fc.points.map((point, idx) => (
                    <li key={idx} className="flex items-center text-xs text-brand-muted">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 4. KEY RESULTS GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">

          {fc.metrics.map((metric, idx) => (
            <div key={idx} className="bg-brand-surfaceHighlight/50 border border-brand-border p-6 rounded-xl hover:bg-brand-surfaceHighlight transition-colors group">
              <div className="flex items-center justify-between mb-4 opacity-50 group-hover:opacity-100 transition-opacity">
                {idx === 0 && <TrendingUp className="w-5 h-5 text-green-500" />}
                {idx === 1 && <Users className="w-5 h-5 text-cyan-400" />}
                {idx === 2 && <Globe className="w-5 h-5 text-brand-text" />}
                {idx === 3 && <CheckCircle2 className="w-5 h-5 text-brand-accent" />}
              </div>
              <div className={`text-3xl font-mono font-bold mb-1 ${idx === 0 ? 'text-green-500' :
                idx === 1 ? 'text-cyan-400' :
                  'text-brand-text'
                }`}>
                {metric.value}
              </div>
              <div className="text-xs text-brand-muted uppercase tracking-wider">{metric.label}</div>
            </div>
          ))}

        </div>

        {/* 5. DOWNLOAD CTA */}
        <div className="flex justify-center">
          <Button variant="outline" className="group border-brand-border text-brand-muted hover:text-brand-text hover:border-brand-accent">
            <Download className="w-4 h-4 mr-2 group-hover:-translate-y-1 transition-transform" />
            {fc.cta}
          </Button>
        </div>

      </div>
    </section>
  );
};

export default FeaturedCaseStudy;