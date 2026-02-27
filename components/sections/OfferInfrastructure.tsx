import React from 'react';
import {
    UserCheck,
    Brain,
    Phone,
    Server,
    Database,
    Calendar,
    ShieldBan,
    Sparkles,
    MessageSquareWarning,
    HeartHandshake,
    BarChart3,
    Check,
    AlertCircle,
    Users,
    Briefcase,
    Zap
} from 'lucide-react';
import Button from '../ui/Button';
import { useModal } from '../../context/ModalContext';
import { useLanguage } from '../../context/LanguageContext';

interface ValueItem {
    icon: React.ElementType;
    title: string;
    description: string;
}

const getFeatureData = (lang: string) => ({
    humanAssets: [
        { icon: UserCheck, title: 'Senior Business Developer', description: lang === 'it' ? 'Professionista dedicato al tuo account (no junior).' : 'Dedicated professional on your account (no juniors).' },
        { icon: Brain, title: 'Growth Architect', description: lang === 'it' ? 'Stratega per ottimizzazione campagne settimanale.' : 'Strategist for weekly campaign optimization.' },
        { icon: Phone, title: lang === 'it' ? 'Dominio Multicanale' : 'Multichannel Mastery', description: 'Email, LinkedIn, WhatsApp (B2B Focus).' },
    ],
    techStack: [
        { icon: Server, title: lang === 'it' ? 'Setup Infrastruttura' : 'Infrastructure Setup', description: lang === 'it' ? 'Domini, SPF/DKIM/DMARC & Warm-up.' : 'Domains, SPF/DKIM/DMARC & Warm-up.' },
        { icon: Database, title: 'B2B Data Engine', description: lang === 'it' ? 'Contatti arricchiti GDPR compliant.' : 'Enriched GDPR-compliant contacts.' },
        { icon: ShieldBan, title: 'Exclusion Management', description: lang === 'it' ? 'Protezione clienti attuali e competitor.' : 'Current client & competitor protection.' },
        { icon: Calendar, title: 'Calendar Sync', description: lang === 'it' ? 'Booking diretto in agenda.' : 'Direct booking in your calendar.' },
    ],
    aiLayer: [
        { icon: Sparkles, title: 'Hyper-Personalization', description: lang === 'it' ? 'Script AI adattati psicologicamente.' : 'Psychologically adapted AI scripts.' },
        { icon: MessageSquareWarning, title: 'Objection Handling', description: lang === 'it' ? 'Gestione automatica obiezioni.' : 'Automated objection management.' },
        { icon: HeartHandshake, title: 'Sentiment Analysis', description: lang === 'it' ? 'Ranking intenzioni di acquisto.' : 'Purchase intent ranking.' },
        { icon: BarChart3, title: lang === 'it' ? 'Report Settimanale' : 'Weekly Reporting', description: lang === 'it' ? 'Report settimanale su KPI e strategie.' : 'Weekly KPI and strategy reports.' },
    ],
});

const FeatureList: React.FC<{ items: ValueItem[] }> = ({ items }) => (
    <ul className="space-y-4">
        {items.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3">
                <div className="mt-1 w-5 h-5 rounded-full bg-brand-accent/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-3 h-3 text-brand-accent" />
                </div>
                <div>
                    <h4 className="text-sm font-semibold text-brand-text">{item.title}</h4>
                    <p className="text-xs text-brand-muted leading-relaxed">{item.description}</p>
                </div>
            </li>
        ))}
    </ul>
);

const ComparisonRow: React.FC<{
    feature: string;
    internal: string;
    stormx: string;
    isLast?: boolean;
}> = ({ feature, internal, stormx, isLast }) => (
    <div className={`grid grid-cols-3 text-sm ${!isLast ? 'border-b border-brand-border' : ''}`}>
        <div className="p-4 font-medium text-brand-text flex items-center bg-brand-surfaceHighlight/40">
            {feature}
        </div>
        <div className="p-4 text-brand-muted flex items-center border-l border-brand-border">
            {internal}
        </div>
        <div className="p-4 font-semibold text-brand-text flex items-center border-l border-brand-border bg-brand-accent/5">
            <Check className="w-4 h-4 text-brand-accent mr-2 shrink-0" />
            {stormx}
        </div>
    </div>
);

const OfferInfrastructure: React.FC = () => {
    const { openModal } = useModal();
    const { language } = useLanguage();
    const features = getFeatureData(language);

    return (
        <section id="offerta" className="py-20 bg-brand-surface border-t border-brand-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-16">
                    <span className="inline-block px-3 py-1 bg-brand-accent/10 text-brand-accent text-xs font-bold rounded-full mb-4 tracking-wide uppercase">
                        {language === 'it' ? 'Infrastruttura come Servizio' : 'Infrastructure as a Service'}
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-brand-text mb-4 tracking-tight">
                        {language === 'it' ? "L'Ecosistema Storm X." : 'The Storm X Ecosystem.'}
                    </h2>
                    <p className="text-lg text-brand-muted max-w-2xl mx-auto">
                        {language === 'it'
                            ? 'Non semplici lead. Un intero dipartimento di crescita plug-and-play.'
                            : 'Not just leads. An entire plug-and-play growth department.'}
                    </p>
                </div>

                {/* 3-Column Value Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-20">

                    {/* Column 1: Human */}
                    <div className="bg-brand-surface border border-brand-border rounded-xl p-6 shadow-sm hover:shadow-md hover:border-blue-300/50 transition-all">
                        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-brand-border">
                            <div className="p-2 bg-blue-500/10 rounded-lg">
                                <Users className="w-6 h-6 text-blue-500" />
                            </div>
                            <h3 className="text-lg font-bold text-brand-text">{language === 'it' ? 'Risorse Umane' : 'Human Assets'}</h3>
                        </div>
                        <FeatureList items={features.humanAssets} />
                    </div>

                    {/* Column 2: Tech */}
                    <div className="bg-brand-surface border border-brand-border rounded-xl p-6 shadow-sm hover:shadow-md hover:border-brand-accent/50 transition-all relative overflow-hidden">
                        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-brand-accent to-orange-400" />
                        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-brand-border">
                            <div className="p-2 bg-brand-accent/10 rounded-lg">
                                <Server className="w-6 h-6 text-brand-accent" />
                            </div>
                            <h3 className="text-lg font-bold text-brand-text">{language === 'it' ? 'Tech Proprietaria' : 'Proprietary Tech'}</h3>
                        </div>
                        <FeatureList items={features.techStack} />
                    </div>

                    {/* Column 3: AI */}
                    <div className="bg-brand-surface border border-brand-border rounded-xl p-6 shadow-sm hover:shadow-md hover:border-purple-300/50 transition-all">
                        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-brand-border">
                            <div className="p-2 bg-purple-500/10 rounded-lg">
                                <Brain className="w-6 h-6 text-purple-500" />
                            </div>
                            <h3 className="text-lg font-bold text-brand-text">{language === 'it' ? 'AI Intelligence' : 'AI Intelligence'}</h3>
                        </div>
                        <FeatureList items={features.aiLayer} />
                    </div>
                </div>

                {/* Comparison Section */}
                <div className="max-w-4xl mx-auto mb-16">
                    <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold text-brand-text">
                            {language === 'it' ? 'Perché Storm X?' : 'Why Storm X?'}
                        </h3>
                    </div>

                    <div className="bg-brand-surface border border-brand-border rounded-xl overflow-hidden shadow-sm">
                        {/* Table Header */}
                        <div className="grid grid-cols-3 bg-brand-surfaceHighlight border-b border-brand-border text-xs font-bold text-brand-muted uppercase tracking-wider">
                            <div className="p-4">{language === 'it' ? 'Caratteristica' : 'Feature'}</div>
                            <div className="p-4 border-l border-brand-border">{language === 'it' ? 'Assunzione Interna' : 'Internal Hiring'}</div>
                            <div className="p-4 border-l border-brand-border text-brand-accent">Storm X Infra</div>
                        </div>

                        <ComparisonRow feature={language === 'it' ? 'Tempo di Setup' : 'Setup Time'} internal={language === 'it' ? '3-6 Mesi' : '3-6 Months'} stormx={language === 'it' ? '7-14 Giorni' : '7-14 Days'} />
                        <ComparisonRow feature={language === 'it' ? 'Costo Totale' : 'Cost Stack'} internal={language === 'it' ? '~€4k/mese (Stipendi + Tool)' : '~€4k/mo (Salaries + Tools)'} stormx="All Inclusive" />
                        <ComparisonRow feature={language === 'it' ? 'Gestione' : 'Management'} internal={language === 'it' ? 'Alto Impegno' : 'High Effort'} stormx={language === 'it' ? 'Zero Effort (Gestito)' : 'Zero Effort (Managed)'} />
                        <ComparisonRow feature={language === 'it' ? 'Rischio' : 'Risk'} internal={language === 'it' ? 'Stipendi Fissi + TFR' : 'Fixed Salaries + Severance'} stormx={language === 'it' ? 'Rimborso del 50% se non soddisfatti' : '50% refund if not satisfied'} isLast />
                    </div>
                </div>

                {/* Guarantees & CTA */}
                <div className="text-center">
                    <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-10 text-sm font-medium text-brand-muted">
                        <span className="flex items-center gap-2 px-3 py-1.5 bg-green-50 text-green-700 rounded-full border border-green-100">
                            <Check className="w-4 h-4" /> {language === 'it' ? 'Protezione No-Show' : 'No-Show Protection'}
                        </span>
                        <span className="flex items-center gap-2 px-3 py-1.5 bg-green-50 text-green-700 rounded-full border border-green-100">
                            <Check className="w-4 h-4" /> {language === 'it' ? 'Garanzia Off-Target' : 'Off-Target Guarantee'}
                        </span>
                        <span className="flex items-center gap-2 px-3 py-1.5 bg-green-50 text-green-700 rounded-full border border-green-100">
                            <Check className="w-4 h-4" /> {language === 'it' ? 'Nessun Vincolo Lungo' : 'No Long-Term Lock-in'}
                        </span>
                    </div>

                    <Button
                        variant="primary"
                        size="lg"
                        onClick={openModal}
                        className="shadow-xl shadow-brand-accent/20 hover:shadow-2xl hover:shadow-brand-accent/30 hover:-translate-y-1 transition-all"
                    >
                        {language === 'it' ? 'Richiedi Analisi Pipeline →' : 'Request Pipeline Analysis →'}
                    </Button>
                    <p className="mt-4 text-xs text-brand-muted">
                        {language === 'it'
                            ? 'Verifica gratuita della compatibilità con il tuo mercato'
                            : 'Free compatibility check with your market'}
                    </p>
                </div>

            </div>
        </section>
    );
};

export default OfferInfrastructure;
