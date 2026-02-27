import React, { useState, useEffect, useCallback } from 'react';
import { X, ArrowRight, Shield, Check } from 'lucide-react';
import Button from './Button';
import { useModal } from '../../context/ModalContext';
import { useLanguage } from '../../context/LanguageContext';
import { TRANSLATIONS } from '../../constants';

const ExitIntentModal: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [hasShown, setHasShown] = useState(false);
    const { openModal } = useModal();
    const { language } = useLanguage();
    const t = TRANSLATIONS[language];

    const handleExitIntent = useCallback((e: MouseEvent) => {
        // Only trigger if mouse moves to the top of the page
        if (e.clientY < 10 && !hasShown) {
            setIsVisible(true);
            setHasShown(true);
        }
    }, [hasShown]);

    useEffect(() => {
        // Only enable on desktop
        const isMobile = window.innerWidth < 768;
        if (isMobile) return;

        // Wait a bit before enabling exit intent
        const timeout = setTimeout(() => {
            document.documentElement.addEventListener('mouseleave', handleExitIntent);
        }, 5000);

        return () => {
            clearTimeout(timeout);
            document.documentElement.removeEventListener('mouseleave', handleExitIntent);
        };
    }, [handleExitIntent]);

    const handleClose = () => {
        setIsVisible(false);
    };

    const handleCTA = () => {
        setIsVisible(false);
        openModal();
    };

    if (!isVisible) return null;

    const content = language === 'it' ? {
        headline: "Aspetta! Stai perdendo l'opportunità di sbloccare la tua pipeline.",
        subheadline: "Prima di andare, scopri in 3 minuti se Storm X è adatto alla tua azienda.",
        benefits: [
            "Garanzia di risultato",
            "Zero rischio — analisi completamente gratuita"
        ],
        cta: "Richiedi Analisi Gratuita",
        dismiss: "No grazie, preferisco il cold calling"
    } : {
        headline: "Wait! You're about to miss unlocking your pipeline.",
        subheadline: "Before you go, discover in 3 minutes if Storm X is right for your business.",
        benefits: [
            "Result guarantee",
            "Zero risk — completely free analysis"
        ],
        cta: "Request Free Analysis",
        dismiss: "No thanks, I prefer cold calling"
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-up">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                onClick={handleClose}
            />

            {/* Modal */}
            <div className="relative bg-brand-surface border border-brand-border rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden">
                {/* Top Glow */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-accent to-transparent" />

                {/* Close Button */}
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 text-brand-muted hover:text-brand-text transition-colors z-10"
                >
                    <X className="w-5 h-5" />
                </button>

                <div className="p-8 md:p-10">
                    {/* Icon */}
                    <div className="w-14 h-14 bg-brand-accent/10 border border-brand-accent/30 rounded-xl flex items-center justify-center mb-6 mx-auto">
                        <Shield className="w-7 h-7 text-brand-accent" />
                    </div>

                    {/* Content */}
                    <div className="text-center">
                        <h3 className="text-2xl md:text-3xl font-bold text-brand-text mb-3">
                            {content.headline}
                        </h3>
                        <p className="text-brand-muted mb-6">
                            {content.subheadline}
                        </p>
                    </div>

                    {/* Benefits */}
                    <div className="space-y-3 mb-8">
                        {content.benefits.map((benefit, idx) => (
                            <div key={idx} className="flex items-center space-x-3">
                                <div className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                                    <Check className="w-3 h-3 text-green-500" />
                                </div>
                                <span className="text-brand-text text-sm">{benefit}</span>
                            </div>
                        ))}
                    </div>

                    {/* CTA */}
                    <Button
                        variant="primary"
                        size="lg"
                        fullWidth
                        onClick={handleCTA}
                        className="shadow-glow hover:shadow-glow-lg transition-all mb-4"
                    >
                        {content.cta}
                        <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>

                    {/* Dismiss Link */}
                    <button
                        onClick={handleClose}
                        className="w-full text-center text-xs text-brand-muted/60 hover:text-brand-muted transition-colors"
                    >
                        {content.dismiss}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ExitIntentModal;
