import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../../context/LanguageContext';

interface SectionSEO {
  id: string;
  title: string;
  description: string;
}

// Configuration for each section's SEO data — bilingual
const getSeoConfig = (lang: string): SectionSEO[] => [
  { id: 'hero', title: 'Storm X Digital | B2B Outbound Sales Engine', description: lang === 'it' ? 'Costruiamo la tua pipeline outbound in 90 giorni — 60+ meeting qualificati garantiti, zero rischio assunzioni.' : 'We build your outbound pipeline in 90 days — 60+ qualified meetings guaranteed, zero hiring risk.' },
  { id: 'problema', title: lang === 'it' ? 'Il Killer Silenzioso | Storm X Digital' : 'The Silent Revenue Killer | Storm X Digital', description: lang === 'it' ? 'Il tuo team vendita spreca il 70% del tempo in data entry invece di chiudere. Scopri il Paradosso del Venditore.' : 'Your sales team wastes 70% of their time on data entry instead of closing. Discover the Seller\'s Paradox.' },
  { id: 'metodo', title: lang === 'it' ? 'Il Metodo: 4 Step Scientifici | Storm X Digital' : 'The Method: 4 Scientific Steps | Storm X Digital', description: lang === 'it' ? 'Niente improvvisazione. Un protocollo in 4 fasi per trasformare un estraneo in un appuntamento qualificato.' : 'No improvisation. A 4-phase protocol to turn a stranger into a qualified appointment.' },
  { id: 'processo', title: lang === 'it' ? 'Pilot 90 Giorni: Risk Free | Storm X Digital' : '90-Day Pilot: Risk Free | Storm X Digital', description: lang === 'it' ? 'Setup, Test, Scale. Un programma di validazione di 90 giorni per stressare il tuo mercato.' : 'Setup, Test, Scale. A 90-day validation program to stress-test your market.' },
  { id: 'case-studies', title: lang === 'it' ? 'Casi Studio & Risultati | Storm X Digital' : 'Case Studies & Results | Storm X Digital', description: lang === 'it' ? 'Strategie reali, risultati misurabili. Vedi come abbiamo aiutato aziende B2B a scalare.' : 'Real strategies, measurable results. See how we helped B2B companies scale.' },
  { id: 'offerta', title: lang === 'it' ? 'Pricing & Offerta Pilot | Storm X Digital' : 'Pricing & Pilot Offer | Storm X Digital', description: lang === 'it' ? 'Meno del costo di uno stagista. La potenza di un team Senior. Scopri i costi del Pilot.' : 'Less than an intern\'s cost. The power of a Senior team. Discover Pilot pricing.' },
  { id: 'faq', title: lang === 'it' ? 'Domande Frequenti (FAQ) | Storm X Digital' : 'Frequently Asked Questions (FAQ) | Storm X Digital', description: lang === 'it' ? 'Dubbi sul cold calling? Risposte trasparenti sul nostro metodo e garanzie.' : 'Doubts about cold calling? Transparent answers about our method and guarantees.' },
];

const DynamicMeta: React.FC = () => {
  const { language } = useLanguage();
  const [activeMeta, setActiveMeta] = useState<SectionSEO>(getSeoConfig('it')[0]);

  useEffect(() => {
    const config = getSeoConfig(language);

    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px', // Trigger when section is in the middle of viewport
      threshold: 0
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const match = config.find(item => item.id === entry.target.id);
          if (match) {
            setActiveMeta(match);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all configured sections
    config.forEach(item => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [language]);

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