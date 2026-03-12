import React, { useState } from 'react';
import { TRANSLATIONS } from '../../constants';
import { Target, Zap, TrendingUp, ArrowRight, MapPin, X } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const CaseStudies: React.FC = () => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  return (
    <section id="case-studies" className="py-20 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-xs font-bold font-mono text-brand-accent uppercase tracking-widest mb-3">{language === 'it' ? 'Campagne Reali' : 'Real Campaigns'}</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-brand-text mb-4">
            {language === 'it' ? 'Risultati misurabili, mercato per mercato.' : 'Measurable results, market by market.'}
          </h3>
          <p className="text-brand-muted max-w-2xl mx-auto">
            {language === 'it'
              ? 'Tre aziende, tre settori, un unico sistema. Ecco i numeri reali delle nostre campagne outbound multichannel.'
              : 'Three companies, three industries, one system. Real numbers from our multichannel outbound campaigns.'}
          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.CASE_STUDIES.map((study: any, idx: number) => (
            <div key={idx} className="flex flex-col bg-brand-surface border border-brand-border rounded-2xl overflow-hidden hover:border-brand-accent/40 transition-all duration-300 group hover:shadow-glow">
              {/* Proof Image */}
              {study.image && (
                <div
                  className="relative h-40 overflow-hidden cursor-pointer"
                  onClick={() => setLightboxImg(study.image)}
                >
                  <img
                    src={study.image}
                    alt={`${study.company} proof`}
                    className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-surface via-brand-surface/30 to-transparent"></div>
                  {/* Market Tag */}
                  <div className="absolute top-3 left-3 bg-black/60 backdrop-blur border border-white/10 px-2.5 py-1 rounded-md flex items-center space-x-1.5">
                    <MapPin className="w-3 h-3 text-brand-accent" />
                    <span className="text-[10px] text-white font-mono uppercase">{study.market}</span>
                  </div>
                  <div className="absolute bottom-3 right-3 bg-black/40 backdrop-blur px-2 py-0.5 rounded text-[9px] text-white/60 font-mono">
                    {language === 'it' ? 'Clicca per ingrandire' : 'Click to enlarge'}
                  </div>
                </div>
              )}

              <div className="p-6 flex flex-col flex-1">
                {/* Header */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center space-x-3">
                    {study.logoUrl ? (
                      <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center border border-brand-border overflow-hidden">
                        <img src={study.logoUrl} alt={study.company} className="w-7 h-7 object-contain" />
                      </div>
                    ) : (
                      <div className="w-10 h-10 rounded-lg bg-brand-accent/10 flex items-center justify-center text-brand-accent font-bold text-xs border border-brand-accent/30">
                        {study.logo}
                      </div>
                    )}
                    <div>
                      <h4 className="text-base font-bold text-brand-text leading-tight">{study.company}</h4>
                      <span className="text-xs text-brand-muted">{study.industry}</span>
                    </div>
                  </div>
                </div>

                {/* Challenge */}
                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    <Target className="w-4 h-4 text-red-400 mr-2 flex-shrink-0" />
                    <h5 className="text-xs font-bold text-brand-text uppercase tracking-wide">{language === 'it' ? 'La Sfida' : 'The Challenge'}</h5>
                  </div>
                  <p className="text-sm text-brand-muted leading-relaxed">{study.challenge}</p>
                </div>

                {/* Solution */}
                <div className="mb-6">
                  <div className="flex items-center mb-2">
                    <Zap className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                    <h5 className="text-xs font-bold text-brand-text uppercase tracking-wide">{language === 'it' ? 'La Soluzione' : 'The Solution'}</h5>
                  </div>
                  <p className="text-sm text-brand-muted leading-relaxed">{study.solution}</p>
                </div>

                {/* Divider */}
                <div className="border-t border-brand-border my-4"></div>

                {/* Results */}
                <div className="mt-auto">
                  <div className="flex items-center mb-3">
                    <TrendingUp className="w-4 h-4 text-brand-accent mr-2" />
                    <h5 className="text-sm font-bold text-brand-text">{language === 'it' ? 'Risultati Chiave' : 'Key Results'}</h5>
                  </div>
                  <ul className="space-y-2">
                    {study.results.map((result: string, rIdx: number) => (
                      <li key={rIdx} className="flex items-start text-sm text-brand-text/80">
                        <span className="w-1.5 h-1.5 bg-brand-accent rounded-full mr-2.5 mt-1.5 flex-shrink-0 shadow-[0_0_5px_#FF5500]"></span>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Aggregate Stats Bar */}
        <div className="mt-12 bg-brand-surface border border-brand-border rounded-xl p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-mono font-bold text-brand-accent">22.000+</div>
              <div className="text-xs text-brand-muted uppercase tracking-wider mt-1">{language === 'it' ? 'Contatti Lavorati' : 'Contacts Processed'}</div>
            </div>
            <div>
              <div className="text-2xl font-mono font-bold text-brand-accent">3</div>
              <div className="text-xs text-brand-muted uppercase tracking-wider mt-1">{language === 'it' ? 'Clienti Attivi' : 'Active Clients'}</div>
            </div>
            <div>
              <div className="text-2xl font-mono font-bold text-brand-accent">16+</div>
              <div className="text-xs text-brand-muted uppercase tracking-wider mt-1">{language === 'it' ? 'Mercati Aperti' : 'Markets Opened'}</div>
            </div>
            <div>
              <div className="text-2xl font-mono font-bold text-brand-accent">&gt;€5.5M</div>
              <div className="text-xs text-brand-muted uppercase tracking-wider mt-1">{language === 'it' ? 'Pipeline Generata' : 'Pipeline Generated'}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxImg && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setLightboxImg(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
            onClick={() => setLightboxImg(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={lightboxImg}
            alt="Campaign proof"
            className="max-w-full max-h-[85vh] rounded-lg shadow-2xl border border-white/10"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default CaseStudies;
