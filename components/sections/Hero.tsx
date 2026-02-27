import React from 'react';
import { TRANSLATIONS } from '../../constants';
import Button from '../ui/Button';
import { Activity } from 'lucide-react';
import { useParallax } from '../../hooks/useParallax';
import RadarCanvas from '../visuals/RadarCanvas';
import { useModal } from '../../context/ModalContext';
import { useLanguage } from '../../context/LanguageContext';
import TrustBadges from '../ui/TrustBadges';

const Hero: React.FC = () => {
  // Parallax refs for background elements
  const blob1Ref = useParallax(0.15);
  const blob2Ref = useParallax(0.08);
  const { openModal } = useModal();
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];

  return (
    <section id="hero" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-brand-dark transition-colors duration-300">
      {/* Subtle dot-grid background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(0,0,0,0.07)_1px,_transparent_1px)] bg-[size:28px_28px] pointer-events-none opacity-60" />
      {/* Background Ambience with Parallax */}
      <div
        ref={blob1Ref}
        className="absolute top-0 right-0 w-[900px] h-[900px] bg-brand-accent/8 rounded-full blur-[140px] -translate-y-1/2 translate-x-1/3 pointer-events-none will-change-transform"
      />
      <div
        ref={blob2Ref}
        className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-surfaceHighlight/40 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4 pointer-events-none will-change-transform"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Text */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left">

            {/* System Status Badge */}
            <div className="inline-flex items-center px-3 py-1.5 rounded-sm bg-brand-surface/50 border border-brand-accent/30 shadow-lg backdrop-blur-md text-[10px] md:text-xs font-mono font-medium text-brand-accent mb-8 animate-fade-up hover:border-brand-accent/50 transition-colors cursor-default tracking-wider">
              <Activity className="w-3 h-3 mr-2 animate-pulse" />
              {t.HERO_COPY.badge}
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-[3.75rem] font-bold tracking-tight text-brand-text mb-6 leading-[1.1] animate-fade-up [animation-delay:200ms]">
              {language === 'it' ? (
                <>
                  Smetti di usare i tuoi<br className="hidden lg:block" />
                  Senior Sales{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent via-orange-500 to-orange-400">come stagisti</span>
                  <br className="hidden lg:block" />
                  per il Data Entry.
                </>
              ) : (
                <>
                  Stop using your<br className="hidden lg:block" />
                  Senior Sales Reps{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent via-orange-500 to-orange-400">as Data Entry Interns.</span>
                </>
              )}
            </h1>

            {/* Subheadline */}
            <p className="text-lg text-brand-muted mb-10 max-w-2xl leading-relaxed animate-fade-up [animation-delay:300ms]">
              {t.HERO_COPY.subheadline}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-6 animate-fade-up [animation-delay:400ms]">
              <Button
                variant="primary"
                size="lg"
                onClick={openModal}
                className="w-full sm:w-auto min-w-[220px] shadow-glow hover:shadow-glow-lg hover:scale-105 transition-all duration-300 font-semibold"
              >
                {t.HERO_COPY.ctaPrimary}
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="w-full sm:w-auto min-w-[160px] text-brand-muted hover:text-brand-text"
                onClick={() => {
                  const caseStudies = document.getElementById('case-studies');
                  if (caseStudies) {
                    caseStudies.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                {t.HERO_COPY.ctaSecondary}
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="mb-4 animate-fade-up [animation-delay:450ms] flex justify-center lg:justify-start">
              <TrustBadges variant="horizontal" />
            </div>

            {/* Trust Footer & Micro-Testimonial */}
            <div className="space-y-2 animate-fade-up [animation-delay:500ms]">
              <div className="text-xs text-brand-muted/60">
                {t.HERO_COPY.trustText}
              </div>
              {t.HERO_COPY.microTestimonial && (
                <div className="text-xs italic text-brand-muted/80 border-l-2 border-brand-accent/50 pl-3 py-1">
                  {t.HERO_COPY.microTestimonial}
                </div>
              )}
            </div>

          </div>

          {/* Right Column: Visual - Radar System */}
          <div className="lg:col-span-6 relative animate-fade-up [animation-delay:600ms] h-[500px] md:h-[600px] w-full flex items-center justify-center">
            <RadarCanvas />

            {/* Background glow for the whole system */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>
          </div>

        </div>

        {/* Bottom Metrics Bar */}
        <div className="mt-20 border-t border-brand-border pt-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {t.STATS.map((stat, idx) => (
            <div key={idx} className="flex flex-col border-l-2 border-brand-accent/30 pl-5 group hover:border-brand-accent transition-colors duration-300">
              <span className="text-2xl font-mono font-bold text-brand-text tracking-tight group-hover:text-brand-accent transition-colors duration-300">{stat.value}</span>
              <span className="text-xs text-brand-muted font-semibold uppercase tracking-wider mt-1">{stat.label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Hero;