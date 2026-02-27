import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';

const partnersData = (lang: string) => [
    { name: 'Profood', logo: 'https://framerusercontent.com/images/8HpawhqwgsiFDddewHyJLUxKA.png', result: lang === 'it' ? '85+ meeting B2B' : '85+ B2B meetings' },
    { name: 'Reebok', logo: 'https://framerusercontent.com/images/JRTEXah04sXYGM5CsTPhKV9Cj8U.png', result: lang === 'it' ? '120+ contatti qualificati' : '120+ qualified contacts' },
    { name: 'Wrangler', logo: 'https://framerusercontent.com/images/OZxA1obb03stTzUPP2TbXwpEyB0.png', result: '€150K pipeline' },
    { name: 'Lee', logo: 'https://framerusercontent.com/images/Vt1XzubbOMfFXSqeYHhkcDQcc.png', result: lang === 'it' ? '45 meeting in 60 giorni' : '45 meetings in 60 days' },
    { name: 'Brands Cosmos', logo: 'https://framerusercontent.com/images/oXeRjyYqNj7Jr2mLoL9rqR5skIA.png', result: lang === 'it' ? '3x ROI in 90 giorni' : '3x ROI in 90 days' },
    { name: 'Reliance Medical', logo: 'https://framerusercontent.com/images/BJ6Fr0bDLb18tVizMnSVt7uYzSU.png', result: lang === 'it' ? '200+ lead qualificati' : '200+ qualified leads' },
];

const LogoCloud: React.FC = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const { language } = useLanguage();

    const partners = partnersData(language);
    // Double the logos for seamless infinite scroll
    const allPartners = [...partners, ...partners];

    return (
        <section className="py-10 bg-brand-dark/50 border-y border-brand-border/30 relative">
            {/* Accent glow lines */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-brand-accent/20 to-transparent" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-brand-accent/20 to-transparent" />

            <div className="container mx-auto px-4 md:px-6">
                {/* Section label */}
                <div className="text-center mb-6">
                    <h2 className="text-xs font-mono font-bold tracking-widest text-brand-muted uppercase">
                        {language === 'it' ? 'Scelto dalle migliori aziende globali' : 'Trusted by top global companies'}
                    </h2>
                </div>

                {/* Marquee container */}
                <div className="relative group/marquee">
                    {/* Fade edges */}
                    <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 z-10 bg-gradient-to-r from-brand-dark/80 to-transparent pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 z-10 bg-gradient-to-l from-brand-dark/80 to-transparent pointer-events-none" />

                    {/* Scrolling track — overflow-clip-margin lets tooltips escape */}
                    <div className="overflow-hidden" style={{ paddingBottom: '60px', marginBottom: '-60px' }}>
                        <div
                            className="flex items-center gap-12 md:gap-16 lg:gap-20 animate-marquee group-hover/marquee:[animation-play-state:paused]"
                            style={{ width: 'max-content' }}
                        >
                            {allPartners.map((partner, idx) => (
                                <div
                                    key={`${partner.name}-${idx}`}
                                    className="relative flex-shrink-0"
                                    onMouseEnter={() => setHoveredIndex(idx)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                >
                                    <img
                                        src={partner.logo}
                                        alt={`${partner.name} logo`}
                                        className="h-8 md:h-10 w-auto object-contain grayscale brightness-150 contrast-125 hover:grayscale-0 hover:brightness-100 transition-all duration-500 cursor-pointer hover:scale-110"
                                    />
                                    {/* Tooltip */}
                                    <div
                                        className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-2 bg-brand-surface border border-brand-accent/30 rounded-lg shadow-xl whitespace-nowrap transition-all duration-200 pointer-events-none z-30 ${hoveredIndex === idx ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-1'}`}
                                    >
                                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-2 h-2 bg-brand-surface border-l border-t border-brand-accent/30 transform rotate-45 mb-[-5px]" />
                                        <div className="text-xs font-bold text-brand-accent">{partner.name}</div>
                                        <div className="text-[11px] text-brand-muted">{partner.result}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LogoCloud;
