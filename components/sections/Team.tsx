import React from 'react';
import { Linkedin } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { TRANSLATIONS } from '../../constants';

const TEAM_IMAGES = [
  "https://framerusercontent.com/images/cZBX1sYJ1c7FE5IdmjZeDKr70.png",
  "https://framerusercontent.com/images/jJ5TdOXHARo98ck5dhQcmidmw.png",
  "https://framerusercontent.com/images/6B44ycjVxhNNIBWi7AVcosS7J8k.png",
  "https://framerusercontent.com/images/6AmVKJRphEEfatzeOw357uIVe4.png"
];

const Team: React.FC = () => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];

  return (
    <section id="team" className="py-20 bg-brand-dark border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-4">
            {language === 'it' ? 'L\'Infrastruttura Umana.' : 'Human Infrastructure.'}
          </h2>
          <p className="text-brand-muted text-lg max-w-2xl">
            {language === 'it'
              ? <>4 Senior. Nessuno stagista. Un unico obiettivo: <span className="text-brand-text font-semibold">Pipeline</span>.</>
              : <>4 Seniors. No interns. One goal: <span className="text-brand-text font-semibold">Pipeline</span>.</>
            }
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.TEAM.map((member, idx) => (
            <div key={idx} className="group relative">
              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-brand-surfaceHighlight mb-6 border border-brand-border/30 group-hover:border-brand-accent/30 transition-colors duration-500">
                <img
                  src={TEAM_IMAGES[idx]}
                  alt={member.name}
                  className={`w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out transform ${idx === 0 ? 'scale-125 group-hover:scale-110' : 'group-hover:scale-95'
                    }`}
                />

                {/* Overlay Gradient (Subtle Vignette) */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Linkedin Icon on Hover */}
                <a
                  href="#"
                  className="absolute bottom-4 right-4 bg-brand-accent text-brand-text p-2.5 rounded-lg opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-100 hover:bg-white hover:text-brand-accent shadow-lg"
                  aria-label={`LinkedIn ${member.name}`}
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>

              {/* Text Info */}
              <div className="relative">
                <h3 className="text-xl font-bold text-brand-text mb-1 group-hover:text-brand-accent transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-xs font-mono text-brand-accent uppercase tracking-wider font-semibold">
                  {member.role}
                </p>

                {/* Superpower Reveal */}
                <div className="mt-3 overflow-hidden">
                  <p className="text-sm text-brand-muted leading-relaxed opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-75">
                    {member.superpower}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;