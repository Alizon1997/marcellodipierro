import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../sections/Hero';
import SilentKiller from '../sections/SilentKiller';
import ParadigmShift from '../sections/ParadigmShift';
import HowItWorks from '../sections/HowItWorks';
import Mechanism from '../sections/Mechanism';
import WhatsAppStrategy from '../sections/WhatsAppStrategy';
import FeaturedCaseStudy from '../sections/FeaturedCaseStudy';
import Team from '../sections/Team';
import CaseStudies from '../sections/CaseStudies';
import Comparison from '../sections/Comparison';
import Pricing from '../sections/Pricing';
import Guarantee from '../sections/Guarantee';
import FAQ from '../sections/FAQ';
import CTA from '../sections/CTA';
import DynamicMeta from '../SEO/DynamicMeta';
import Reveal from '../ui/Reveal';

const LandingPage: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      // Delay to ensure DOM is ready
      setTimeout(() => {
        const id = location.hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <>
      <DynamicMeta />
      {/* 1. Hero: Result, not Method */}
      <Hero />

      {/* 2. Pain Agitation: The Sales Paradox */}
      <Reveal>
        <SilentKiller />
      </Reveal>

      {/* 3. Solution: Process over Agency */}
      <Reveal>
        <ParadigmShift />
      </Reveal>

      {/* 4. The Method: Step by Step */}
      <Reveal>
        <HowItWorks />
      </Reveal>

      {/* 5. Mechanism: 90 Days Pilot */}
      <Reveal>
        <Mechanism />
      </Reveal>

      {/* 6. Deep Dive Channel: WhatsApp Strategy */}
      <Reveal>
        <WhatsAppStrategy />
      </Reveal>

      {/* 7. Featured Case Study: Isolcore */}
      <Reveal>
        <FeaturedCaseStudy />
      </Reveal>

      {/* 8. Team: Human Infrastructure */}
      <Reveal>
        <Team />
      </Reveal>

      {/* 9. Social Proof: Case Studies */}
      <Reveal>
        <CaseStudies />
      </Reveal>

      {/* 10. The Offer: Comparison & Pricing */}
      <Reveal>
        <Comparison />
      </Reveal>
      <Reveal>
        <Pricing /> {/* Receipt Style */}
      </Reveal>

      {/* 11. Risk Reversal */}
      <Reveal>
        <Guarantee />
      </Reveal>

      {/* 12. Objections & Scarcity */}
      <Reveal>
        <FAQ />
      </Reveal>
      <Reveal>
        <CTA />
      </Reveal>
    </>
  );
};

export default LandingPage;