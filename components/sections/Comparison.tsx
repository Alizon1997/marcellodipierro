import React from 'react';
import { TRANSLATIONS } from '../../constants';
import { useLanguage } from '../../context/LanguageContext';

const Comparison: React.FC = () => {
    const { language } = useLanguage();
    const t = TRANSLATIONS[language];

    return (
        <section id="offerta" className="py-20 bg-brand-dark border-t border-brand-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-end mb-16">
                    <div className="lg:col-span-7">
                        <div className="mb-8">
                            <h2 className="text-3xl font-bold text-brand-text mb-2">
                                {language === 'it' ? "Il Costo dell'Inazione vs. Strategia Storm X" : 'The Cost of Inaction vs. Storm X Strategy'}
                            </h2>
                            <p className="text-brand-accent font-medium text-lg">
                                {language === 'it' ? 'Stai valutando di assumere un Junior Sales?' : 'Considering hiring a Junior Salesperson?'}
                            </p>
                            <p className="text-brand-muted mt-4">
                                {language === 'it' ? 'Guarda i numeri reali prima di prendere una decisione.' : 'Look at the real numbers before making a decision.'}
                            </p>
                        </div>
                    </div>

                    {/* Visual Cost Comparison Chart */}
                    <div className="lg:col-span-5 h-64 flex items-end justify-center space-x-8 pb-4 border-b border-brand-border relative">
                        {/* Grid lines background */}
                        <div className="absolute inset-0 pointer-events-none flex flex-col justify-between opacity-10">
                            <div className="w-full h-px bg-brand-border"></div>
                            <div className="w-full h-px bg-brand-border"></div>
                            <div className="w-full h-px bg-brand-border"></div>
                            <div className="w-full h-px bg-brand-border"></div>
                        </div>

                        {/* Bar A: Traditional (Gray - Inefficiency) */}
                        <div className="w-24 flex flex-col justify-end h-full group">
                            <div className="text-center mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                <span className="text-brand-muted font-bold text-sm">~€40k+</span>
                            </div>
                            <div className="w-full bg-brand-surfaceHighlight border border-brand-border rounded-t-lg relative h-[95%] transition-all duration-500 hover:bg-brand-border/50">
                                {/* Scanlines */}
                                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                            </div>
                            <div className="text-center mt-4">
                                <p className="text-xs text-brand-muted uppercase font-bold">{language === 'it' ? 'Assunzione' : 'Hiring'}</p>
                                <p className="text-[10px] text-brand-muted/60">{language === 'it' ? 'Alto Rischio' : 'High Risk'}</p>
                            </div>
                        </div>

                        {/* Bar B: Storm X (Orange - Value) */}
                        <div className="w-24 flex flex-col justify-end h-full group">
                            <div className="text-center mb-2">
                                <span className="text-brand-accent font-bold shadow-glow text-sm">Pilot</span>
                            </div>
                            <div className="w-full bg-brand-accent border border-brand-accentGlow rounded-t-lg relative h-[25%] shadow-[0_0_20px_rgba(255,85,0,0.4)] transition-all duration-500 hover:h-[27%]">
                            </div>
                            <div className="text-center mt-4">
                                <p className="text-xs text-brand-text uppercase font-bold">Storm X</p>
                                <p className="text-[10px] text-green-500">Risk Free</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Table */}
                <div className="overflow-hidden rounded-2xl border border-brand-border shadow-2xl max-w-5xl mx-auto">
                    <div className="grid grid-cols-12 bg-brand-surfaceHighlight/50 text-xs font-mono uppercase tracking-widest text-brand-muted py-4 px-6 border-b border-brand-border">
                        <div className="col-span-4 md:col-span-4">{language === 'it' ? 'Caratteristica' : 'Feature'}</div>
                        <div className="col-span-4 md:col-span-4 text-center">{language === 'it' ? 'Assunzione Tradizionale' : 'Traditional Hiring'}</div>
                        <div className="col-span-4 md:col-span-4 text-center text-brand-accent font-bold">Storm X Pilot</div>
                    </div>

                    {t.COMPARISON_DATA.map((row, idx) => (
                        <div key={idx} className="grid grid-cols-12 py-6 px-6 border-b border-brand-border last:border-0 bg-brand-surface hover:bg-brand-surfaceHighlight/20 transition-colors items-center">
                            <div className="col-span-4 md:col-span-4 font-bold text-brand-text text-sm md:text-base">{row.feature}</div>
                            <div className="col-span-4 md:col-span-4 text-center text-brand-muted text-xs md:text-sm px-2">
                                {row.traditional}
                            </div>
                            <div className="col-span-4 md:col-span-4 text-center font-bold text-brand-text text-xs md:text-sm px-2 border-l border-brand-border/30 md:border-0">
                                {/* Highlight specific benefits — works in both IT and EN */}
                                {(row.feature === "Rischio" || row.feature === "Risk") ? (
                                    <span className="text-green-600 font-bold">{row.stormx}</span>
                                ) : (row.feature === "Investimento" || row.feature === "Investment") ? (
                                    <span className="text-brand-accent font-bold">{row.stormx}</span>
                                ) : (
                                    row.stormx
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8 text-center">
                    <p className="text-brand-muted text-sm">
                        {language === 'it' ? 'Non vendiamo promesse, vendiamo certezze basate sui dati.' : "We don't sell promises, we sell data-driven certainties."}
                    </p>
                </div>

            </div>
        </section>
    );
};

export default Comparison;