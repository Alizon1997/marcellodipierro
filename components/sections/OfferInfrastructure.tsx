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

const HUMAN_ASSETS: ValueItem[] = [
    {
        icon: UserCheck,
        title: 'Senior Business Developer',
        description: 'Professionista dedicato al tuo account (no junior).'
    },
    {
        icon: Brain,
        title: 'Growth Architect',
        description: 'Stratega per ottimizzazione campagne settimanale.'
    },
    {
        icon: Phone,
        title: 'Dominio Multicanale',
        description: 'Email, LinkedIn, WhatsApp (Focus B2B).'
    }
];

const TECH_STACK: ValueItem[] = [
    {
        icon: Server,
        title: 'Setup Infrastruttura',
        description: 'Domini, SPF/DKIM/DMARC & Warm-up.'
    },
    {
        icon: Database,
        title: 'B2B Data Engine',
        description: 'Contatti arricchiti GDPR compliant.'
    },
    {
        icon: ShieldBan,
        title: 'Exclusion Management',
        description: 'Protezione clienti attuali e competitor.'
    },
    {
        icon: Calendar,
        title: 'Calendar Sync',
        description: 'Booking diretto in agenda.'
    }
];

const AI_LAYER: ValueItem[] = [
    {
        icon: Sparkles,
        title: 'Hyper-Personalization',
        description: 'Script AI adattati psicologicamente.'
    },
    {
        icon: MessageSquareWarning,
        title: 'Objection Handling',
        description: 'Gestione automatica obiezioni.'
    },
    {
        icon: HeartHandshake,
        title: 'Sentiment Analysis',
        description: 'Ranking intenzioni di acquisto.'
    },
    {
        icon: BarChart3,
        title: 'Weekly Reporting',
        description: 'Report settimanale su KPI e strategie.'
    }
];

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

    return (
        <section id="offerta" className="py-20 bg-brand-surface border-t border-brand-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-16">
                    <span className="inline-block px-3 py-1 bg-brand-accent/10 text-brand-accent text-xs font-bold rounded-full mb-4 tracking-wide uppercase">
                        Infrastructure as a Service
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
                            <h3 className="text-lg font-bold text-brand-text">Human Assets</h3>
                        </div>
                        <FeatureList items={HUMAN_ASSETS} />
                    </div>

                    {/* Column 2: Tech */}
                    <div className="bg-brand-surface border border-brand-border rounded-xl p-6 shadow-sm hover:shadow-md hover:border-brand-accent/50 transition-all relative overflow-hidden">
                        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-brand-accent to-orange-400" />
                        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-brand-border">
                            <div className="p-2 bg-brand-accent/10 rounded-lg">
                                <Server className="w-6 h-6 text-brand-accent" />
                            </div>
                            <h3 className="text-lg font-bold text-brand-text">Proprietary Tech</h3>
                        </div>
                        <FeatureList items={TECH_STACK} />
                    </div>

                    {/* Column 3: AI */}
                    <div className="bg-brand-surface border border-brand-border rounded-xl p-6 shadow-sm hover:shadow-md hover:border-purple-300/50 transition-all">
                        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-brand-border">
                            <div className="p-2 bg-purple-500/10 rounded-lg">
                                <Brain className="w-6 h-6 text-purple-500" />
                            </div>
                            <h3 className="text-lg font-bold text-brand-text">AI Intelligence</h3>
                        </div>
                        <FeatureList items={AI_LAYER} />
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
                            <div className="p-4">Feature</div>
                            <div className="p-4 border-l border-brand-border">Internal Hiring</div>
                            <div className="p-4 border-l border-brand-border text-brand-accent">Storm X Infra</div>
                        </div>

                        <ComparisonRow feature="Setup Time" internal="3-6 Mesi" stormx="7-14 Giorni" />
                        <ComparisonRow feature="Cost Stack" internal="~€4k/mo (Salaries + Tools)" stormx="All Inclusive" />
                        <ComparisonRow feature="Management" internal="High Effort" stormx="Zero Effort (Managed)" />
                        <ComparisonRow feature="Risk" internal="Stipendi Fissi + TFR" stormx="Rimborso del 50% se non soddisfatti" isLast />
                    </div>
                </div>

                {/* Guarantees & CTA */}
                <div className="text-center">
                    <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-10 text-sm font-medium text-brand-muted">
                        <span className="flex items-center gap-2 px-3 py-1.5 bg-green-50 text-green-700 rounded-full border border-green-100">
                            <Check className="w-4 h-4" /> No-Show Protection
                        </span>
                        <span className="flex items-center gap-2 px-3 py-1.5 bg-green-50 text-green-700 rounded-full border border-green-100">
                            <Check className="w-4 h-4" /> Off-Target Guarantee
                        </span>
                        <span className="flex items-center gap-2 px-3 py-1.5 bg-green-50 text-green-700 rounded-full border border-green-100">
                            <Check className="w-4 h-4" /> Nessun Vincolo Lungo
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
