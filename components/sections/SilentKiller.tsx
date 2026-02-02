import React from 'react';
import { TRANSLATIONS } from '../../constants';
import { useParallax } from '../../hooks/useParallax';
import { AlertTriangle } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const SilentKiller: React.FC = () => {
  const blobRef = useParallax(0.05);
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];

  return (
    <section id="problema" className="py-20 bg-brand-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-brand-accent/5 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
            <h2 className="text-xs font-bold font-mono text-brand-accent uppercase tracking-widest mb-3">The Silent Killer</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Il "Paradosso del Venditore" che sta <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-white">frenando il tuo fatturato.</span>
            </h3>
            <p className="text-brand-muted max-w-3xl mx-auto text-lg">
                Hai un prodotto eccellente e venditori capaci. Eppure, la pipeline si svuota ciclicamente. Perché?
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
           {/* Visual Component: Time Allocation Chart */}
           <div className="bg-brand-surface border border-brand-border rounded-2xl p-8 shadow-2xl relative overflow-hidden order-2 lg:order-1">
              {/* Parallax Blob */}
              <div ref={blobRef} className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/10 rounded-full blur-3xl will-change-transform"></div>
              
              <h4 className="text-white font-bold mb-8 text-center">Come spende il tempo il tuo team?</h4>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                  {/* Donut Chart Representation */}
                  <div className="relative w-48 h-48">
                      <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
                          {/* Background Circle (Value - Orange) */}
                          <path className="text-brand-accent" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3.8" />
                          {/* Overlay Circle (Wasted - Gray - 70%) */}
                          <path className="text-brand-surfaceHighlight" strokeDasharray="70, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3.8" />
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                          <span className="text-3xl font-bold text-white">70%</span>
                          <span className="text-xs text-brand-muted uppercase">Sprecato</span>
                      </div>
                  </div>

                  {/* Legend */}
                  <div className="space-y-4 text-sm">
                      <div className="flex items-start">
                          <div className="w-3 h-3 rounded-full bg-brand-surfaceHighlight mt-1 mr-3 border border-brand-border"></div>
                          <div>
                              <strong className="text-brand-muted block">Low Value Activities</strong>
                              <span className="text-brand-muted/60 text-xs">Ricerca Email, Data Entry, CRM Cleaning</span>
                          </div>
                      </div>
                      <div className="flex items-start">
                          <div className="w-3 h-3 rounded-full bg-brand-accent mt-1 mr-3 shadow-[0_0_8px_rgba(255,85,0,0.6)]"></div>
                          <div>
                              <strong className="text-white block">High Value Activities</strong>
                              <span className="text-brand-muted text-xs">Negoziazione, Closing, Strategia</span>
                          </div>
                      </div>
                  </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-brand-border text-center">
                  <div className="inline-flex items-center text-brand-accent text-sm font-medium bg-brand-accent/5 py-2 px-4 rounded-lg border border-brand-accent/20">
                     <AlertTriangle className="w-4 h-4 mr-2" />
                     Stai pagando stipendi da Senior per lavori da Stagista.
                  </div>
              </div>
           </div>

           {/* Text Content */}
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 order-1 lg:order-2">
              {t.PAIN_POINTS.map((pain, idx) => (
                  <div key={idx} className="bg-brand-surface/50 border border-brand-border p-5 rounded-xl hover:border-brand-accent/30 transition-all duration-300 group hover:bg-brand-surface">
                      <div className="w-10 h-10 bg-brand-surfaceHighlight rounded-lg flex items-center justify-center mb-3 group-hover:bg-brand-accent transition-colors duration-300">
                          <pain.icon className="w-5 h-5 text-brand-muted group-hover:text-white transition-colors" />
                      </div>
                      <h4 className="text-white font-bold text-sm mb-1">{pain.title}</h4>
                      <p className="text-xs text-brand-muted leading-relaxed group-hover:text-brand-muted/80">
                          {pain.description}
                      </p>
                  </div>
              ))}
           </div>
        </div>

        <div className="max-w-3xl mx-auto bg-brand-surfaceHighlight/30 border border-brand-border rounded-lg p-6 text-center">
            <p className="text-white font-medium text-lg">
                <span className="text-brand-accent font-bold mr-2">IL CALCOLO È DOLOROSO:</span>
                Il problema non è la tua offerta. È il modo in cui cerchi di portarla al mercato.
            </p>
        </div>

      </div>
    </section>
  );
};

export default SilentKiller;