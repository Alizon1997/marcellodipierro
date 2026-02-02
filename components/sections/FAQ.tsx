import React from 'react';
import { TRANSLATIONS } from '../../constants';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const FAQ: React.FC = () => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];

  return (
    <section id="faq" className="py-24 bg-brand-dark border-t border-brand-border relative overflow-hidden">
      {/* Ambient background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-20">
         <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-brand-accent/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
           <div className="inline-flex items-center justify-center p-2 bg-brand-surfaceHighlight rounded-full mb-4 border border-brand-border">
              <HelpCircle className="w-5 h-5 text-brand-accent" />
           </div>
           <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
             {language === 'it' ? 'Domande Frequenti' : 'Frequently Asked Questions'}
           </h2>
           <p className="text-brand-muted max-w-2xl mx-auto">
             {language === 'it' 
                ? 'Dettagli operativi, tecnici e strategici sul protocollo Storm X.'
                : 'Operational, technical, and strategic details about the Storm X protocol.'}
           </p>
        </div>
        
        {/* FAQ Grid */}
        <div className="space-y-4">
          {t.FAQS.map((faq, idx) => (
            <div 
              key={idx} 
              className="group bg-brand-surface border border-brand-border rounded-xl overflow-hidden transition-all duration-300 hover:border-brand-accent/30"
            >
              <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-white transition-colors hover:bg-brand-surfaceHighlight/50">
                  <h3 className="font-semibold text-base md:text-lg pr-4">
                    {faq.question}
                  </h3>
                  <div className="white-space-no-wrap shrink-0 rounded-full border border-brand-border bg-brand-surfaceHighlight p-1.5 text-brand-muted group-open:bg-brand-accent group-open:text-white group-open:border-brand-accent transition-all duration-300">
                    <ChevronDown className="h-4 w-4 transition duration-300 group-open:-rotate-180" />
                  </div>
                </summary>

                <div className="px-6 pb-6 pt-2 leading-relaxed text-brand-muted text-sm md:text-base border-t border-brand-border/30 bg-brand-dark/20">
                  <p>
                    {faq.answer}
                  </p>
                </div>
              </details>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
            <p className="text-sm text-brand-muted">
                {language === 'it' ? 'Non trovi la risposta che cerchi?' : 'Can\'t find what you\'re looking for?'}{' '}
                <span className="text-white hover:text-brand-accent cursor-pointer underline underline-offset-4 transition-colors">
                    {language === 'it' ? 'Contatta il supporto tecnico' : 'Contact technical support'}
                </span>.
            </p>
        </div>

      </div>
    </section>
  );
};

export default FAQ;