import React from 'react';
import Button from '../ui/Button';
import { useParallax } from '../../hooks/useParallax';
import { useModal } from '../../context/ModalContext';
import { useLanguage } from '../../context/LanguageContext';
import { TRANSLATIONS } from '../../constants';

const CTA: React.FC = () => {
  const glowRef = useParallax(0.12);
  const { openModal } = useModal();
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];

  return (
    <section className="py-24 relative overflow-hidden bg-brand-surface border-t border-brand-border">
        {/* Glow Effects */}
        <div ref={glowRef} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-[100px] pointer-events-none will-change-transform"></div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                {language === 'it' ? (
                    <>
                        L'Inbound è passivo.<br/>
                        <span className="text-brand-accent">L'Outbound è controllo.</span>
                    </>
                ) : (
                    <>
                        Inbound is passive.<br/>
                        <span className="text-brand-accent">Outbound is control.</span>
                    </>
                )}
            </h2>
            <p className="text-xl text-brand-muted mb-10 max-w-2xl mx-auto">
                {language === 'it' 
                  ? "Riprendi il controllo del tuo fatturato. Non accettiamo tutti. Lavoriamo solo con aziende B2B che hanno la capacità di gestire i volumi che generiamo."
                  : "Take back control of your revenue. We don't accept everyone. We only work with B2B companies that have the capacity to handle the volume we generate."}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Button 
                    size="lg" 
                    onClick={openModal}
                    className="w-full sm:w-auto shadow-glow hover:shadow-glow-lg transition-shadow"
                >
                    {t.UI.bookSession}
                </Button>
                <p className="text-sm text-brand-muted sm:hidden">
                    {language === 'it' ? 'Nessun impegno vincolante.' : 'No binding commitment.'}
                </p>
            </div>
        </div>
    </section>
  );
};

export default CTA;