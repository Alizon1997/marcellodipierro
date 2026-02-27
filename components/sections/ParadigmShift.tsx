import React from 'react';
import { Linkedin, Mail, Phone, CalendarCheck, Users, ArrowRight, MessageCircle } from 'lucide-react';
import { useParallax } from '../../hooks/useParallax';
import { useLanguage } from '../../context/LanguageContext';
import { TRANSLATIONS } from '../../constants';

const ParadigmShift: React.FC = () => {
  const glowRef = useParallax(0.08);
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];
  const { PARADIGM_SHIFT } = t;

  return (
    <section className="py-24 bg-brand-surface border-y border-brand-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Manifesto Copy */}
            <div>
                <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-6">
                    {PARADIGM_SHIFT.headline}<br/>
                    <span className="text-brand-accent">{PARADIGM_SHIFT.subheadline}</span>
                </h2>
                <div className="space-y-6 text-brand-muted text-lg leading-relaxed">
                    <p>{PARADIGM_SHIFT.desc1}</p>
                    <p>{PARADIGM_SHIFT.desc2}</p>
                    <div className="p-4 border-l-4 border-brand-accent bg-brand-dark/50 italic text-brand-text/90">
                        {PARADIGM_SHIFT.quote}
                    </div>
                </div>
            </div>

            {/* Right: Visual System Flowchart */}
            <div className="relative">
                {/* Parallax Glow */}
                <div ref={glowRef} className="absolute -inset-4 bg-brand-accent/5 blur-3xl rounded-full will-change-transform"></div>
                
                {/* Flowchart Container */}
                <div className="relative bg-brand-dark border border-brand-border rounded-2xl p-8 shadow-2xl flex flex-col space-y-8">
                    <h4 className="text-center text-xs font-mono uppercase tracking-widest text-brand-muted mb-2">{PARADIGM_SHIFT.flowchartTitle}</h4>
                    
                    {/* Step 1: Input */}
                    <div className="flex items-center justify-center">
                        <div className="bg-brand-surfaceHighlight border border-brand-border px-4 py-2 rounded-full flex items-center space-x-2 text-sm text-brand-text shadow-glow">
                            <Users className="w-4 h-4 text-brand-accent" />
                            <span>{PARADIGM_SHIFT.flowchart.target}</span>
                        </div>
                    </div>

                    {/* Arrow Down */}
                    <div className="flex justify-center -my-4 relative z-10">
                        <div className="h-8 w-px bg-brand-border"></div>
                    </div>

                    {/* Step 2: Channels (Horizontal Flow) */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-3 relative">
                        {/* Connecting Line for Desktop */}
                        <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-brand-border -z-10"></div>

                        {/* Node 1: LinkedIn */}
                        <div className="bg-brand-surface border border-brand-border p-3 rounded-xl flex flex-col items-center text-center relative hover:border-brand-accent transition-colors group">
                            <div className="w-8 h-8 bg-brand-surfaceHighlight rounded-full flex items-center justify-center mb-2 group-hover:bg-brand-accent transition-colors">
                                <Linkedin className="w-4 h-4 text-brand-muted group-hover:text-brand-text" />
                            </div>
                            <span className="text-[10px] font-bold text-brand-text mb-0.5">1. {PARADIGM_SHIFT.flowchart.step1}</span>
                            <span className="text-[9px] text-brand-muted">{PARADIGM_SHIFT.flowchart.step1Desc}</span>
                        </div>

                        {/* Node 2: Email */}
                        <div className="bg-brand-surface border border-brand-border p-3 rounded-xl flex flex-col items-center text-center relative hover:border-brand-accent transition-colors group">
                             <div className="w-8 h-8 bg-brand-surfaceHighlight rounded-full flex items-center justify-center mb-2 group-hover:bg-brand-accent transition-colors">
                                <Mail className="w-4 h-4 text-brand-muted group-hover:text-brand-text" />
                            </div>
                            <span className="text-[10px] font-bold text-brand-text mb-0.5">2. {PARADIGM_SHIFT.flowchart.step2}</span>
                            <span className="text-[9px] text-brand-muted">{PARADIGM_SHIFT.flowchart.step2Desc}</span>
                        </div>

                        {/* Node 3: WhatsApp */}
                        <div className="bg-brand-surface border border-brand-border p-3 rounded-xl flex flex-col items-center text-center relative hover:border-brand-accent transition-colors group">
                             <div className="w-8 h-8 bg-brand-surfaceHighlight rounded-full flex items-center justify-center mb-2 group-hover:bg-brand-accent transition-colors">
                                <MessageCircle className="w-4 h-4 text-brand-muted group-hover:text-brand-text" />
                            </div>
                            <span className="text-[10px] font-bold text-brand-text mb-0.5">3. {PARADIGM_SHIFT.flowchart.step3}</span>
                            <span className="text-[9px] text-brand-muted">{PARADIGM_SHIFT.flowchart.step3Desc}</span>
                        </div>

                        {/* Node 4: Call */}
                        <div className="bg-brand-surface border border-brand-border p-3 rounded-xl flex flex-col items-center text-center relative hover:border-brand-accent transition-colors group">
                             <div className="w-8 h-8 bg-brand-surfaceHighlight rounded-full flex items-center justify-center mb-2 group-hover:bg-brand-accent transition-colors">
                                <Phone className="w-4 h-4 text-brand-muted group-hover:text-brand-text" />
                            </div>
                            <span className="text-[10px] font-bold text-brand-text mb-0.5">4. {PARADIGM_SHIFT.flowchart.step4}</span>
                            <span className="text-[9px] text-brand-muted">{PARADIGM_SHIFT.flowchart.step4Desc}</span>
                        </div>
                    </div>

                    {/* Arrow Down */}
                    <div className="flex justify-center -my-4 relative z-10">
                        <div className="h-8 w-px bg-brand-border"></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-dark p-1">
                            <ArrowRight className="w-4 h-4 text-brand-muted rotate-90" />
                        </div>
                    </div>

                    {/* Step 3: Output */}
                    <div className="flex items-center justify-center">
                        <div className="bg-brand-accent/10 border border-brand-accent/50 px-6 py-4 rounded-xl flex items-center space-x-3 shadow-glow hover:bg-brand-accent/20 transition-colors">
                            <CalendarCheck className="w-6 h-6 text-brand-accent" />
                            <div className="text-left">
                                <div className="text-brand-text font-bold text-sm">{PARADIGM_SHIFT.flowchart.outputTitle}</div>
                                <div className="text-brand-accent text-xs">{PARADIGM_SHIFT.flowchart.outputDesc}</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default ParadigmShift;