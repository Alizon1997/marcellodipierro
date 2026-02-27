import React, { useState, useEffect } from 'react';
import Button from './Button';
import { X } from 'lucide-react';
import { useModal } from '../../context/ModalContext';
import { useLanguage } from '../../context/LanguageContext';
import { TRANSLATIONS } from '../../constants';

const MobileStickyCTA: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isDismissed, setIsDismissed] = useState(false);
    const { openModal } = useModal();
    const { language } = useLanguage();
    const t = TRANSLATIONS[language];

    useEffect(() => {
        const handleScroll = () => {
            // Show sticky CTA after scrolling 500px down
            const scrollPosition = window.scrollY;
            if (scrollPosition > 500 && !isDismissed) {
                setIsVisible(true);
            } else if (scrollPosition <= 500) {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isDismissed]);

    const handleDismiss = () => {
        setIsDismissed(true);
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden animate-slide-up">
            <div className="bg-brand-surface/95 backdrop-blur-lg border-t border-brand-border shadow-2xl">
                <div className="relative px-4 py-3 flex items-center justify-between gap-3">
                    {/* CTA Content */}
                    <div className="flex-1">
                        <p className="text-xs text-brand-muted mb-1">
                            {language === 'it' ? 'Pronto per i risultati?' : 'Ready for results?'}
                        </p>
                        <Button
                            variant="primary"
                            size="sm"
                            onClick={openModal}
                            fullWidth
                            className="shadow-glow text-sm font-semibold"
                        >
                            {t.UI.bookAnalysis}
                        </Button>
                    </div>

                    {/* Dismiss Button */}
                    <button
                        onClick={handleDismiss}
                        className="absolute top-2 right-2 p-1 text-brand-muted hover:text-brand-text transition-colors"
                        aria-label="Dismiss"
                    >
                        <X className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MobileStickyCTA;
