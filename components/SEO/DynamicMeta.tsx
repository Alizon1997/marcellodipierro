import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';

interface SectionSEO {
  id: string;
  title: string;
  description: string;
}

// Configuration for each section's SEO data
const SEO_CONFIG: SectionSEO[] = [
  {
    id: 'hero',
    title: 'Storm X Digital | B2B Outbound Sales Engine',
    description: 'We build your outbound pipeline in 90 days — 60+ qualified meetings guaranteed, zero hiring risk. You close deals, we handle prospecting.'
  },
  {
    id: 'problema',
    title: 'The Silent Revenue Killer | Storm X Digital',
    description: 'Your sales team wastes 70% of their time on data entry instead of closing. Discover the Seller\'s Paradox holding back your pipeline.'
  },
  {
    id: 'metodo',
    title: 'Il Metodo: 4 Step Scientifici | Storm X Digital',
    description: 'Niente improvvisazione. Un protocollo in 4 fasi per trasformare un estraneo in un appuntamento qualificato.'
  },
  {
    id: 'processo',
    title: 'Pilot 90 Giorni: Risk Free | Storm X Digital',
    description: 'Setup, Test, Scale. Un programma di validazione di 90 giorni per stressare il tuo mercato.'
  },
  {
    id: 'case-studies',
    title: 'Casi Studio & Risultati | Storm X Digital',
    description: 'Strategie reali, risultati misurabili. Vedi come abbiamo aiutato aziende B2B a scalare.'
  },
  {
    id: 'offerta',
    title: 'Pricing & Offerta Pilot | Storm X Digital',
    description: 'Meno del costo di uno stagista. La potenza di un team Senior. Scopri i costi del Pilot.'
  },
  {
    id: 'faq',
    title: 'Domande Frequenti (FAQ) | Storm X Digital',
    description: 'Dubbi sul cold calling? Risposte trasparenti sul nostro metodo e garanzie.'
  }
];

const DynamicMeta: React.FC = () => {
  const [activeMeta, setActiveMeta] = useState<SectionSEO>(SEO_CONFIG[0]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px', // Trigger when section is in the middle of viewport
      threshold: 0
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const config = SEO_CONFIG.find(item => item.id === entry.target.id);
          if (config) {
            setActiveMeta(config);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all configured sections
    SEO_CONFIG.forEach(item => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <Helmet>
      <title>{activeMeta.title}</title>
      <meta name="description" content={activeMeta.description} />

      {/* Open Graph updates */}
      <meta property="og:title" content={activeMeta.title} />
      <meta property="og:description" content={activeMeta.description} />
    </Helmet>
  );
};

export default DynamicMeta;