import React from 'react';
import { Shield, Clock, CheckCircle } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { TRANSLATIONS } from '../../constants';

interface TrustBadgesProps {
    variant?: 'horizontal' | 'vertical';
    className?: string;
}

const TrustBadges: React.FC<TrustBadgesProps> = ({ variant = 'horizontal', className = '' }) => {
    const { language } = useLanguage();
    const t = TRANSLATIONS[language];

    const badges = [
        { icon: Shield, text: t.UI.trustBadge1, color: 'text-green-500' },
        { icon: Clock, text: t.UI.trustBadge2, color: 'text-brand-accent' },
        { icon: CheckCircle, text: t.UI.trustBadge3, color: 'text-brand-accent' }
    ];

    return (
        <div className={`flex ${variant === 'horizontal' ? 'flex-row items-center space-x-4' : 'flex-col space-y-2'} ${className}`}>
            {badges.map((badge, idx) => {
                const Icon = badge.icon;
                return (
                    <div
                        key={idx}
                        className="flex items-center space-x-2 text-xs text-brand-muted/80 hover:text-brand-text transition-colors group"
                    >
                        <Icon className={`w-3.5 h-3.5 ${badge.color} group-hover:scale-110 transition-transform`} />
                        <span>{badge.text}</span>
                    </div>
                );
            })}
        </div>
    );
};

export default TrustBadges;
