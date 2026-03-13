import React from 'react';
import { Download, Globe, TrendingUp, Users, CheckCircle2, BarChart3 } from 'lucide-react';
import Button from '../ui/Button';
import { useLanguage } from '../../context/LanguageContext';
import { TRANSLATIONS } from '../../constants';

const FeaturedCaseStudy: React.FC = () => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];
  const fc = t.FEATURED_CASE;

  return (
    <section className="py-14 md:py-24 bg-brand-dark border-t border-brand-border relative overflow-hidden">
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
              ? <>Da innovatore di nicchia a <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-orange-400">pipeline globale</span> in 9 mesi.</>
              : <>From niche innovator to <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-orange-400">global pipeline</span> in 9 months.</>
            }
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-start mb-10 md:mb-16">

          {/* 2. CHALLENGE & STRATEGY (Left) */}
          <div className="flex flex-col space-y-8">
            <div>
              <h3 className="text-brand-text font-bold text-xl mb-1 flex items-center flex-wrap">
                {fc.company} <span className="text-brand-muted font-normal text-sm ml-3 border-l border-brand-border pl-3">{fc.subCompany}</span>
              </h3>
              <p className="text-brand-accent text-sm font-mono">{fc.sector}</p>
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
                  {fc.points.map((point: string, idx: number) => (
                    <li key={idx} className="flex items-start text-xs text-brand-muted">
                      <CheckCircle2 className="w-4 h-4 text-brand-accent mr-2 flex-shrink-0 mt-0.5" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* 3. EXECUTION PHASES (Right) */}
          <div className="space-y-4">
            <h4 className="text-brand-text font-bold text-sm uppercase tracking-wide flex items-center mb-2">
              <BarChart3 className="w-4 h-4 text-brand-accent mr-2" />
              {language === 'it' ? "Le 4 Fasi del Sistema" : "The 4-Phase System"}
            </h4>
            {fc.executionPhases?.map((phase: { title: string; desc: string }, idx: number) => (
              <div key={idx} className="flex gap-2 sm:gap-3 md:gap-4 group">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-lg bg-brand-accent/10 border border-brand-accent/30 flex items-center justify-center text-brand-accent font-mono font-bold text-sm group-hover:bg-brand-accent/20 transition-colors">
                    {String(idx + 1).padStart(2, '0')}
                  </div>
                  {idx < 3 && <div className="w-px h-full bg-brand-border/50 mt-1"></div>}
                </div>
                <div className="pb-4">
                  <h5 className="text-brand-text font-bold text-sm mb-1">{phase.title}</h5>
                  <p className="text-brand-muted text-xs leading-relaxed">{phase.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. KEY RESULTS GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4 mb-8 md:mb-10">
          {fc.metrics.map((metric: { value: string; label: string }, idx: number) => (
            <div key={idx} className="bg-brand-surfaceHighlight/50 border border-brand-border p-4 sm:p-6 rounded-xl hover:border-brand-accent/30 transition-colors group">
              <div className="flex items-center justify-between mb-4 opacity-50 group-hover:opacity-100 transition-opacity">
                {idx === 0 && <TrendingUp className="w-5 h-5 text-brand-accent" />}
                {idx === 1 && <Users className="w-5 h-5 text-brand-accent" />}
                {idx === 2 && <Globe className="w-5 h-5 text-brand-accent" />}
                {idx === 3 && <CheckCircle2 className="w-5 h-5 text-brand-accent" />}
              </div>
              <div className="text-2xl sm:text-3xl font-mono font-bold mb-1 text-brand-text group-hover:text-brand-accent transition-colors">
                {metric.value}
              </div>
              <div className="text-xs text-brand-muted uppercase tracking-wider">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* 5. MARKET DISTRIBUTION */}
        {fc.marketDistribution && (
          <div className="bg-brand-surface border border-brand-border rounded-xl p-6 mb-10">
            <h4 className="text-brand-text font-bold text-sm uppercase tracking-wide mb-5">
              {language === 'it' ? 'Distribuzione Lead per Mercato' : 'Lead Distribution by Market'}
            </h4>
            <div className="space-y-4">
              {fc.marketDistribution.map((item: { market: string; percentage: number }, idx: number) => (
                <div key={idx} className="flex items-center gap-4">
                  <span className="text-brand-text text-xs sm:text-sm font-medium w-20 sm:w-32 flex-shrink-0">{item.market}</span>
                  <div className="flex-1 h-3 bg-brand-surfaceHighlight rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-brand-accent to-orange-400 transition-all duration-1000"
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                  <span className="text-brand-accent font-mono font-bold text-sm w-12 text-right">{item.percentage}%</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 6. KEY RESULT CALLOUT */}
        {fc.keyResult && (
          <div className="bg-brand-accent/5 border border-brand-accent/20 rounded-xl p-6 mb-10">
            <div className="flex items-start gap-3">
              <div className="w-1 h-full bg-brand-accent rounded-full flex-shrink-0"></div>
              <div>
                <span className="text-brand-accent text-xs font-bold font-mono uppercase tracking-widest">
                  {language === 'it' ? 'Risultato Chiave' : 'Key Result'}
                </span>
                <p className="text-brand-text text-sm leading-relaxed mt-2 font-medium">
                  {fc.keyResult}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* 7. DOWNLOAD CTA */}
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
