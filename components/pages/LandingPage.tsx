import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../sections/Hero';
import LogoCloud from '../sections/LogoCloud';
import SilentKiller from '../sections/SilentKiller';
import ParadigmShift from '../sections/ParadigmShift';
import HowItWorks from '../sections/HowItWorks';
import Mechanism from '../sections/Mechanism';
import WhatsAppStrategy from '../sections/WhatsAppStrategy';
import FeaturedCaseStudy from '../sections/FeaturedCaseStudy';
import Team from '../sections/Team';
import CaseStudies from '../sections/CaseStudies';
import Comparison from '../sections/Comparison';
import OfferInfrastructure from '../sections/OfferInfrastructure';
import FAQ from '../sections/FAQ';
import CTA from '../sections/CTA';
import DynamicMeta from '../SEO/DynamicMeta';
import Reveal from '../ui/Reveal';
import MobileStickyCTA from '../ui/MobileStickyCTA';
import ExitIntentModal from '../ui/ExitIntentModal';


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

      {/* 1.5. Logo Cloud: Social Proof */}
      <LogoCloud />

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

      {/* 10. The Offer: Infrastructure & Value */}
      <Reveal>
        <OfferInfrastructure />
      </Reveal>

      {/* 11. Objections & Scarcity */}
      <Reveal>
        <FAQ />
      </Reveal>
      <Reveal>
        <CTA />
      </Reveal>

      {/* Mobile Sticky CTA */}
      <MobileStickyCTA />

      {/* Exit Intent Modal (Desktop) */}
      <ExitIntentModal />
    </>
  );
};

export default LandingPage;