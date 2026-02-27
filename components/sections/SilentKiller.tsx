import React, { useRef, useEffect, useState } from 'react';
import { TRANSLATIONS } from '../../constants';
import { useParallax } from '../../hooks/useParallax';
import { AlertTriangle } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import Button from '../ui/Button';
import { useModal } from '../../context/ModalContext';

const SilentKiller: React.FC = () => {
    const blobRef = useParallax(0.05);
    const { language } = useLanguage();
    const t = TRANSLATIONS[language];
    const { openModal } = useModal();
    const sectionRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    // Intersection Observer for scroll-triggered animations
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.15 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section id="problema" className="py-20 bg-brand-dark relative overflow-hidden" ref={sectionRef}>
            <div className="absolute inset-0 bg-brand-accent/5 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                    <h2 className="text-xs font-bold font-mono text-brand-accent uppercase tracking-widest mb-3">{language === 'it' ? 'Il Killer Silenzioso' : 'The Silent Killer'}</h2>
                    <h3 className="text-3xl md:text-5xl font-bold text-brand-text mb-6 leading-tight">
                        {language === 'it' ? (
                            <>Il "Paradosso del Venditore" che sta <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-orange-400">frenando il tuo fatturato.</span></>
                        ) : (
                            <>The "Seller's Paradox" that's <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-orange-400">holding back your revenue.</span></>
                        )}
                    </h3>
                    <p className="text-brand-muted max-w-3xl mx-auto text-lg">
                        {language === 'it'
                            ? 'Hai un prodotto eccellente e venditori capaci. Eppure, la pipeline si svuota ciclicamente. Perché?'
                            : 'You have an excellent product and capable salespeople. Yet, your pipeline empties cyclically. Why?'}
                    </p>
                </div>

                {/* Main 2-column layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
                    {/* Left Column: Pain Point Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 order-2 lg:order-1">
                        {t.PAIN_POINTS.map((pain, idx) => (
                            <div
                                key={idx}
                                className={`bg-brand-surface border border-brand-border p-5 rounded-xl transition-all duration-500 group hover:border-brand-accent/40 hover:shadow-lg hover:shadow-brand-accent/5 hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                    }`}
                                style={{ transitionDelay: isVisible ? `${300 + idx * 120}ms` : '0ms' }}
                            >
                                <div className="w-10 h-10 bg-brand-surfaceHighlight rounded-lg flex items-center justify-center mb-3 group-hover:bg-brand-accent transition-colors duration-300">
                                    <pain.icon className="w-5 h-5 text-brand-muted group-hover:text-white transition-colors" />
                                </div>
                                <h4 className="text-brand-text font-bold text-sm mb-2">{pain.title}</h4>
                                <p className="text-xs text-brand-muted leading-relaxed">
                                    {pain.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Right Column: Donut Chart Card */}
                    <div className={`bg-brand-surface border border-brand-border rounded-2xl p-8 shadow-xl relative overflow-hidden order-1 lg:order-2 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                        }`} style={{ transitionDelay: isVisible ? '200ms' : '0ms' }}>
                        {/* Parallax Blob */}
                        <div ref={blobRef} className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/10 rounded-full blur-3xl will-change-transform"></div>

                        <h4 className="text-brand-text font-bold mb-8 text-center">
                            {language === 'it' ? 'Come spende il tempo il tuo team?' : 'How does your team spend their time?'}
                        </h4>

                        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                            {/* Animated Donut Chart */}
                            <div className="relative w-48 h-48">
                                <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
                                    {/* Background Circle (Value - Orange) */}
                                    <path className="text-brand-accent" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3.8" />
                                    {/* Overlay Circle (Wasted - Gray - 70%) — animated */}
                                    <path
                                        className="text-brand-surfaceHighlight transition-all duration-[2000ms] ease-out"
                                        strokeDasharray={isVisible ? '70, 100' : '0, 100'}
                                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="3.8"
                                    />
                                </svg>
                                <div className={`absolute inset-0 flex flex-col items-center justify-center text-center transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                                    }`} style={{ transitionDelay: '800ms' }}>
                                    <span className="text-3xl font-bold text-brand-text">70%</span>
                                    <span className="text-xs text-brand-muted uppercase">{language === 'it' ? 'Sprecato' : 'Wasted'}</span>
                                </div>
                            </div>

                            {/* Legend */}
                            <div className="space-y-4 text-sm">
                                <div className="flex items-start">
                                    <div className="w-3 h-3 rounded-full bg-brand-surfaceHighlight mt-1 mr-3 border border-brand-border"></div>
                                    <div>
                                        <strong className="text-brand-muted block">
                                            {language === 'it' ? 'Attività a Basso Valore' : 'Low Value Activities'}
                                        </strong>
                                        <span className="text-brand-muted/60 text-xs">
                                            {language === 'it' ? 'Ricerca Email, Data Entry, CRM Cleaning' : 'Email Search, Data Entry, CRM Cleaning'}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-3 h-3 rounded-full bg-brand-accent mt-1 mr-3 shadow-[0_0_8px_rgba(255,85,0,0.6)]"></div>
                                    <div>
                                        <strong className="text-brand-text block">
                                            {language === 'it' ? 'Attività ad Alto Valore' : 'High Value Activities'}
                                        </strong>
                                        <span className="text-brand-muted text-xs">
                                            {language === 'it' ? 'Negoziazione, Closing, Strategia' : 'Negotiation, Closing, Strategy'}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Alert badge — inside the card as footer */}
                        <div className="mt-8 pt-5 border-t border-brand-border">
                            <div className="inline-flex items-center text-brand-accent text-sm font-medium bg-brand-accent/5 py-2 px-4 rounded-lg border border-brand-accent/20 w-full justify-center">
                                <AlertTriangle className="w-4 h-4 mr-2 flex-shrink-0" />
                                {language === 'it'
                                    ? 'Stai pagando stipendi da Senior per lavori da Stagista.'
                                    : 'You\'re paying Senior salaries for Intern-level work.'}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom CTA Block */}
                <div className={`max-w-3xl mx-auto bg-brand-surfaceHighlight/30 border border-brand-border rounded-xl p-8 text-center space-y-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                    }`} style={{ transitionDelay: isVisible ? '700ms' : '0ms' }}>
                    <p className="text-brand-text font-medium text-lg">
                        <span className="text-brand-accent font-bold mr-2">{language === 'it' ? 'IL CALCOLO È DOLOROSO:' : 'THE MATH IS PAINFUL:'}</span>
                        {language === 'it'
                            ? 'Il problema non è la tua offerta. È il modo in cui cerchi di portarla al mercato.'
                            : 'The problem isn\'t your offer. It\'s how you\'re trying to bring it to market.'}
                    </p>
                    <div className="pt-4 border-t border-brand-border/50">
                        <p className="text-brand-muted text-sm mb-4">
                            {language === 'it'
                                ? 'Vuoi sapere esattamente dove sta il collo di bottiglia nella tua pipeline?'
                                : 'Want to know exactly where the bottleneck is in your pipeline?'}
                        </p>
                        <Button
                            variant="primary"
                            size="lg"
                            onClick={openModal}
                            className="shadow-glow hover:shadow-glow-lg hover:scale-105 transition-all"
                        >
                            {t.UI.bookAnalysis}
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SilentKiller;