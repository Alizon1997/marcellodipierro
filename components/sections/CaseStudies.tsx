import React from 'react';
import { TRANSLATIONS } from '../../constants';
import { Target, Zap, TrendingUp, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const CaseStudies: React.FC = () => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];

  return (
    <section id="case-studies" className="py-20 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-xs font-bold font-mono text-brand-accent uppercase tracking-widest mb-3">Casi Studio</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Strategie reali, risultati misurabili.
          </h3>
          <p className="text-brand-muted max-w-2xl mx-auto">
            Ecco come abbiamo aiutato altre aziende B2B a scalare il loro outbound.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.CASE_STUDIES.map((study, idx) => (
            <div key={idx} className="flex flex-col bg-brand-surface border border-brand-border rounded-2xl p-6 hover:border-brand-accent/40 transition-all duration-300 group hover:shadow-glow">
              {/* Header with Logo */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-brand-surfaceHighlight flex items-center justify-center text-white font-bold text-sm border border-brand-border group-hover:border-brand-accent/50 group-hover:text-brand-accent transition-colors">
                        {study.logo}
                    </div>
                    <div>
                        <h4 className="text-lg font-bold text-white leading-tight">{study.company}</h4>
                        <span className="text-xs text-brand-muted">{study.industry}</span>
                    </div>
                </div>
              </div>

              {/* Challenge */}
              <div className="mb-4">
                <div className="flex items-center mb-2">
                    <Target className="w-4 h-4 text-red-400 mr-2" />
                    <h5 className="text-xs font-bold text-brand-text uppercase tracking-wide">La Sfida</h5>
                </div>
                <p className="text-sm text-brand-muted leading-relaxed">{study.challenge}</p>
              </div>

              {/* Solution */}
              <div className="mb-6">
                <div className="flex items-center mb-2">
                    <Zap className="w-4 h-4 text-yellow-400 mr-2" />
                    <h5 className="text-xs font-bold text-brand-text uppercase tracking-wide">La Soluzione</h5>
                </div>
                <p className="text-sm text-brand-muted leading-relaxed">{study.solution}</p>
              </div>

              {/* Divider */}
              <div className="border-t border-brand-border my-4"></div>

              {/* Results */}
              <div className="mt-auto">
                 <div className="flex items-center mb-3">
                    <TrendingUp className="w-4 h-4 text-brand-accent mr-2" />
                    <h5 className="text-sm font-bold text-white">Risultati Chiave</h5>
                 </div>
                 <ul className="space-y-2">
                   {study.results.map((result, rIdx) => (
                     <li key={rIdx} className="flex items-start text-sm text-brand-text/80">
                       <span className="w-1.5 h-1.5 bg-brand-accent rounded-full mr-2.5 mt-1.5 flex-shrink-0 shadow-[0_0_5px_#FF5500]"></span>
                       {result}
                     </li>
                   ))}
                 </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;