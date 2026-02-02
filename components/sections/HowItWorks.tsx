import React from 'react';
import { TRANSLATIONS } from '../../constants';
import { ChevronRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const HowItWorks: React.FC = () => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];

  return (
    <section id="metodo" className="py-24 bg-brand-dark relative border-t border-brand-border overflow-hidden">
       {/* Background Ambient Glow */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl pointer-events-none opacity-40">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[120px]"></div>
       </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-xs font-bold font-mono text-brand-accent uppercase tracking-widest mb-3">
            Il Nostro Processo
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            L'Ingegneria dietro il Meeting.
          </h3>
          <p className="text-brand-muted max-w-2xl mx-auto text-lg leading-relaxed">
            Niente improvvisazione. Un protocollo in 4 fasi per trasformare un estraneo in un appuntamento qualificato.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          
          {t.MECHANISM_STEPS.map((step, idx) => (
            <div 
              key={idx} 
              className="group relative flex flex-col h-full"
            >
              {/* Card Container */}
              <div className="bg-brand-surface border border-brand-border hover:border-brand-accent/50 rounded-2xl p-6 h-full transition-all duration-300 hover:shadow-glow hover:-translate-y-1 z-10 flex flex-col relative overflow-hidden">
                
                {/* Background Number Watermark */}
                <div className="absolute -bottom-4 -right-4 text-[80px] font-mono font-bold text-brand-surfaceHighlight/50 group-hover:text-brand-accent/5 transition-colors duration-300 select-none leading-none z-0">
                    {step.number}
                </div>

                {/* Icon */}
                <div className="relative z-10 w-12 h-12 bg-brand-surfaceHighlight rounded-xl flex items-center justify-center text-brand-text group-hover:text-white group-hover:bg-brand-accent transition-colors duration-300 shadow-inner border border-brand-border/50 mb-6">
                    <step.icon className="w-6 h-6" />
                </div>

                {/* Content */}
                <div className="relative z-10 flex-grow">
                    <h4 className="text-lg font-bold text-white mb-3 group-hover:text-brand-accent transition-colors">
                    {step.title}
                    </h4>
                    <p className="text-sm text-brand-muted leading-relaxed">
                    {step.description}
                    </p>
                </div>
              </div>

              {/* Mobile Connector Arrow */}
              {idx < t.MECHANISM_STEPS.length - 1 && (
                  <div className="lg:hidden flex justify-center my-2 text-brand-border/50">
                      <ChevronRight className="w-6 h-6 rotate-90 md:rotate-0" />
                  </div>
              )}
              
              {/* Desktop Connector (Between Cards visual) */}
               {idx < t.MECHANISM_STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2 z-20 text-brand-border/30 transform translate-x-1/2">
                      <ChevronRight className="w-8 h-8 opacity-50" />
                  </div>
              )}

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;