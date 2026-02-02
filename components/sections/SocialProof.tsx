import React from 'react';
import { TRANSLATIONS } from '../../constants';
import { Quote } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const SocialProof: React.FC = () => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];

  return (
    <section id="risultati" className="py-20 bg-brand-surface border-y border-brand-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Copy */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              I numeri parlano.<br/>
              <span className="text-brand-accent">Le opinioni no.</span>
            </h2>
            <p className="text-brand-muted text-lg mb-8 leading-relaxed">
              Il nostro non è un servizio basato sulla creatività, ma sui dati. Monitoriamo ogni metrica: tasso di apertura, tasso di risposta e tasso di conversione in meeting.
            </p>
            
            <div className="p-6 bg-brand-dark rounded-xl border border-brand-border shadow-2xl">
                <div className="flex items-center space-x-2 mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full opacity-75"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full opacity-75"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full opacity-75"></div>
                </div>
                <div className="font-mono text-sm text-brand-accent space-y-2">
                    <p>> Campaign_Status: <span className="text-white">Active</span></p>
                    <p>> Open_Rate: <span className="text-white">68.4%</span></p>
                    <p>> Reply_Rate: <span className="text-white">12.1%</span></p>
                    <p>> Meetings_Booked: <span className="text-white">24</span></p>
                </div>
            </div>
          </div>

          {/* Right: Testimonial Cards */}
          <div className="space-y-6">
            {t.TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="bg-brand-dark p-8 rounded-2xl relative hover:border-brand-accent/30 transition-all border border-brand-border shadow-lg">
                <Quote className="absolute top-6 right-8 text-brand-surfaceHighlight w-8 h-8" />
                <p className="text-brand-text italic mb-6 text-lg">"{t.quote}"</p>
                <div className="flex justify-between items-end">
                  <div>
                    <h4 className="font-bold text-white">{t.author}</h4>
                    <p className="text-sm text-brand-muted">{t.role}, {t.company}</p>
                  </div>
                  <div className="text-right">
                     <span className="block text-xs text-brand-muted uppercase tracking-wider mb-1 font-mono">Risultato</span>
                     <span className="text-brand-accent font-bold text-xl font-mono">{t.metric}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default SocialProof;