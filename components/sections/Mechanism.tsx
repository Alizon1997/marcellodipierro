import React from 'react';
import FunnelAnimation from '../visuals/FunnelAnimation';
import { Settings2, Rocket, BarChart3, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { TRANSLATIONS } from '../../constants';

const Mechanism: React.FC = () => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];
  const { PILOT_PHASES, MECHANISM_COPY } = t;

  return (
    <section id="processo" className="py-20 md:py-32 bg-brand-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Left: Text & Steps */}
            <div className="lg:col-span-5">
                <div className="mb-12">
                    <h2 className="text-xs font-bold font-mono text-brand-accent uppercase tracking-widest mb-3">{MECHANISM_COPY.label}</h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-brand-text mb-4">
                        {MECHANISM_COPY.headline}<br className="hidden md:block"/>
                        <span className="text-brand-muted">{MECHANISM_COPY.subheadline}</span>
                    </h3>
                    <p className="text-brand-muted text-lg leading-relaxed">
                        {MECHANISM_COPY.desc}
                    </p>
                </div>

                <div className="space-y-8">
                    {PILOT_PHASES.map((phase, idx) => (
                    <div key={idx} className="flex items-start">
                        <div className="flex-shrink-0 mt-1 mr-4">
                             <div className="w-8 h-8 rounded-full bg-brand-surfaceHighlight border border-brand-border flex items-center justify-center">
                                {idx === 0 && <Settings2 className="w-4 h-4 text-brand-accent" />}
                                {idx === 1 && <Rocket className="w-4 h-4 text-brand-accent" />}
                                {idx === 2 && <BarChart3 className="w-4 h-4 text-brand-accent" />}
                             </div>
                        </div>
                        <div>
                            <div className="flex items-center mb-1">
                                <h4 className="text-lg font-bold text-brand-text mr-3">
                                    {phase.title}
                                </h4>
                                <span className="text-[10px] font-mono bg-brand-surface border border-brand-border px-2 py-0.5 rounded text-brand-muted uppercase">
                                    {phase.time}
                                </span>
                            </div>
                            <p className="text-sm text-brand-muted leading-relaxed">
                                {phase.desc}
                            </p>
                        </div>
                    </div>
                    ))}
                </div>

                <div className="mt-10 p-4 bg-brand-surface/50 rounded-xl border border-brand-accent/20 flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-brand-accent mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-brand-text">
                        <strong className="text-brand-text block mb-1">{MECHANISM_COPY.guaranteeTitle}</strong>
                        {MECHANISM_COPY.guaranteeDesc}
                    </p>
                </div>
            </div>

            {/* Right: Funnel Animation (Expanded Width) */}
            <div className="lg:col-span-7 flex items-center justify-center">
                <div className="relative w-full h-[600px] bg-brand-surface/20 border border-brand-border/30 rounded-2xl overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 bg-brand-dark/50"></div>
                    
                    {/* The Canvas Component */}
                    <div className="absolute inset-0 z-10">
                        <FunnelAnimation />
                    </div>

                    {/* Overlay UI Legend */}
                    <div className="absolute top-4 right-4 z-20 flex flex-col space-y-2 pointer-events-none">
                         <div className="bg-brand-dark/80 backdrop-blur border border-brand-border px-3 py-2 rounded text-xs font-mono">
                            <div className="flex items-center mb-1">
                                <span className="w-2 h-2 bg-[#FF4B2B] rounded-full mr-2 shadow-[0_0_8px_#FF4B2B]"></span>
                                <span className="text-brand-text">{MECHANISM_COPY.funnelLegend.hot}</span>
                            </div>
                            <div className="flex items-center">
                                <span className="w-2 h-2 bg-[#00E5FF] rounded-full mr-2 shadow-[0_0_8px_#00E5FF]"></span>
                                <span className="text-brand-text">{MECHANISM_COPY.funnelLegend.nurture}</span>
                            </div>
                         </div>
                    </div>
                    
                    {/* Bottom Status Bar */}
                    <div className="absolute bottom-0 left-0 right-0 h-8 bg-brand-surface border-t border-brand-border flex items-center px-4 justify-between z-20">
                        <div className="flex items-center space-x-4 text-[10px] font-mono text-brand-muted">
                            <span>{MECHANISM_COPY.funnelLegend.system}</span>
                            <span>LATENCY: 12ms</span>
                        </div>
                        <div className="text-[10px] font-mono text-brand-accent animate-pulse">
                            {MECHANISM_COPY.funnelLegend.processing}
                        </div>
                    </div>

                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default Mechanism;