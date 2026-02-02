import React from 'react';
import { TRANSLATIONS } from '../../constants';
import Button from '../ui/Button';
import { Check } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const ServiceTiers: React.FC = () => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];

  return (
    <section className="py-20 bg-brand-dark border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Piani di Collaborazione</h2>
          <p className="text-brand-muted">Scegli la velocità di crescita adatta al tuo team.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.TIERS.map((tier, idx) => (
            <div 
              key={idx} 
              className={`
                relative flex flex-col p-8 rounded-2xl transition-all duration-300 group
                ${tier.isPopular 
                  ? 'bg-brand-surface border-2 border-brand-accent shadow-[0_0_30px_rgba(255,85,0,0.1)]' 
                  : 'bg-brand-surface border border-brand-border hover:border-brand-accent/30 hover:bg-brand-surfaceHighlight'
                }
              `}
            >
              {/* Popular Badge */}
              {tier.isPopular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-brand-accent text-white text-xs font-bold uppercase tracking-widest py-1 px-4 rounded-full shadow-lg">
                  Consigliata
                </div>
              )}

              <div className="mb-6">
                <h3 className={`text-xl font-bold mb-2 ${tier.isPopular ? 'text-brand-accent' : 'text-white'}`}>
                  {tier.name}
                </h3>
                <p className="text-sm text-brand-muted leading-relaxed h-12">
                  {tier.description}
                </p>
              </div>

              <ul className="flex-grow space-y-4 mb-8">
                {tier.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start text-sm text-brand-text">
                    <Check className={`w-4 h-4 mr-3 flex-shrink-0 mt-0.5 ${tier.isPopular ? 'text-brand-accent' : 'text-brand-muted group-hover:text-brand-accent'}`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={tier.isPopular ? 'primary' : 'outline'} 
                fullWidth
                className={tier.isPopular ? 'shadow-glow hover:shadow-glow-lg' : ''}
              >
                {tier.ctaText}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceTiers;