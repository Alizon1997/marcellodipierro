import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { TRANSLATIONS } from '../../constants';

const Guarantee: React.FC = () => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];

  return (
    <section className="bg-brand-dark py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="relative overflow-hidden rounded-2xl border border-brand-accent/20 bg-gradient-to-r from-brand-accent/10 to-transparent p-8 md:p-12 flex flex-col md:flex-row items-center text-center md:text-left">
          
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

          <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8">
            <div className="w-16 h-16 bg-brand-accent/10 rounded-full flex items-center justify-center border border-brand-accent/30 shadow-[0_0_15px_rgba(255,85,0,0.15)]">
              <ShieldCheck className="w-8 h-8 text-brand-accent" />
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-2">{t.GUARANTEE.title}</h3>
            <p className="text-brand-text/90 text-lg leading-relaxed">
              {language === 'it' 
                ? <>Il rischio è tutto nostro. Se dopo 90 giorni non ci sono dati chiari e risultati misurabili, <span className="text-white font-semibold underline decoration-brand-accent decoration-2 underline-offset-4">{t.GUARANTEE.highlight}</span> fino al raggiungimento dell'obiettivo.</>
                : <>The risk is entirely ours. If after 90 days there are no clear data and measurable results, <span className="text-white font-semibold underline decoration-brand-accent decoration-2 underline-offset-4">{t.GUARANTEE.highlight}</span> until the goal is met.</>
              }
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Guarantee;