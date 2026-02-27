import React from 'react';
import Button from '../ui/Button';
import { useParallax } from '../../hooks/useParallax';
import { useModal } from '../../context/ModalContext';
import { useLanguage } from '../../context/LanguageContext';
import { TRANSLATIONS } from '../../constants';
import { Shield, Clock, ArrowRight } from 'lucide-react';

const CTA: React.FC = () => {
    const glowRef = useParallax(0.12);
    const { openModal } = useModal();
    const { language } = useLanguage();
    const t = TRANSLATIONS[language];

    return (
        <section className="py-28 relative overflow-hidden bg-brand-dark border-t border-brand-border">
            {/* Background dot grid */}
            <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(0,0,0,0.06)_1px,_transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-50" />
            {/* Glow Effects */}
            <div ref={glowRef} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-brand-accent/8 rounded-full blur-[120px] pointer-events-none will-change-transform"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-orange-400/5 rounded-full blur-[60px] pointer-events-none"></div>

            <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                {/* Scarcity Badge */}
                <div className="inline-flex items-center space-x-2 bg-brand-accent/10 border border-brand-accent/30 rounded-full px-4 py-1.5 mb-8">
                    <div className="w-2 h-2 bg-brand-accent rounded-full animate-pulse" />
                    <span className="text-xs font-semibold text-brand-accent tracking-wide">
                        {language === 'it' ? 'Solo 1 posto disponibile questo mese' : 'Only 1 spot available this month'}
                    </span>
                </div>

                <h2 className="text-5xl md:text-6xl font-bold text-brand-text mb-6 leading-tight">
                    {language === 'it' ? (
                        <>
                            L'Inbound è passivo.<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-orange-400">L'Outbound è controllo.</span>
                        </>
                    ) : (
                        <>
                            Inbound is passive.<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-orange-400">Outbound is control.</span>
                        </>
                    )}
                </h2>
                <p className="text-xl text-brand-muted mb-10 max-w-2xl mx-auto leading-relaxed">
                    {language === 'it'
                        ? "Riprendi il controllo del tuo fatturato. Non accettiamo tutti. Lavoriamo solo con aziende B2B che hanno la capacità di gestire i volumi che generiamo."
                        : "Take back control of your revenue. We don't accept everyone. We only work with B2B companies that have the capacity to handle the volume we generate."}
                </p>

                {/* Trust Indicators */}
                <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mb-8 text-brand-muted/80">
                    <div className="flex items-center space-x-2 text-sm">
                        <Shield className="w-4 h-4 text-green-500" />
                        <span>{language === 'it' ? 'Garanzia risultato' : 'Result guarantee'}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                        <Clock className="w-4 h-4 text-brand-accent" />
                        <span>{language === 'it' ? 'Risposta in 24h' : 'Response in 24h'}</span>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <Button
                        size="lg"
                        onClick={openModal}
                        className="w-full sm:w-auto min-w-[260px] shadow-glow hover:shadow-glow-lg hover:scale-105 transition-all duration-300 group"
                    >
                        {t.UI.bookSession}
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </div>
                <p className="text-xs text-brand-muted/60 mt-4">
                    {language === 'it' ? 'Nessuna carta richiesta. Analisi completamente gratuita.' : 'No card required. Completely free analysis.'}
                </p>
            </div>
        </section>
    );
};

export default CTA;