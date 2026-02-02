import { NavItem, ServiceTier, ProcessStep, FAQItem, Testimonial, Stat, CaseStudy } from './types';
import { Search, Database, Mail, MessageSquare, BarChart3, Users, XCircle, AlertTriangle, Clock, DollarSign, Target, ShieldCheck, Zap, Rocket, Settings2, Linkedin, Phone, CalendarCheck } from 'lucide-react';

/* 
  MULTI-LANGUAGE CONSTANTS STRUCTURE
  Access via: TRANSLATIONS[language].HERO_COPY
*/

const IT = {
  NAV_ITEMS: [
    { label: 'Il Problema', href: '#problema' },
    { label: 'Il Metodo', href: '#metodo' },
    { label: 'Pilot 90gg', href: '#processo' },
    { label: 'Casi Studio', href: '#case-studies' },
  ],
  HERO_COPY: {
    badge: "SYSTEM STATUS: READY FOR SCALING | Accettiamo nuovi progetti solo su candidatura.",
    headline: "Smetti di usare i tuoi Senior Sales come stagisti per il Data Entry.",
    subheadline: "Costruiamo la tua infrastruttura di acquisizione proprietaria in 90 giorni. Senza assumere personale. Senza contratti vincolanti. Validiamo il tuo mercato, tu chiudi i contratti.",
    ctaPrimary: "Richiedi Analisi di Fattibilità",
    ctaSecondary: "Come funziona",
    trustText: "Nessuna carta di credito richiesta. Analisi strategica gratuita."
  },
  STATS: [
    { value: "90gg", label: "Durata Pilot" },
    { value: "0", label: "Rischio Assunzione" },
    { value: "100%", label: "Proprietà dei Dati" },
    { value: "4°", label: "Mese Gratis se no risultati" },
  ],
  PAIN_POINTS: [
    {
      title: "Pipeline a 'Dente di Sega'",
      description: "Un mese si festeggia, il mese dopo si va nel panico perché il funnel è vuoto. Manca prevedibilità matematica.",
      icon: AlertTriangle
    },
    {
      title: "L'Illusione dell'Inbound",
      description: "Le fiere portano biglietti da visita, non contratti firmati. Il passaparola non è scalabile a comando.",
      icon: Clock
    },
    {
      title: "Il Rischio 'Assunzione al Buio'",
      description: "Assumere un nuovo commerciale è una scommessa costosa (Stipendio + TFR + Training) senza garanzia di risultati nei primi 6 mesi.",
      icon: DollarSign
    },
    {
      title: "Spreco di Talento Senior",
      description: "I tuoi commerciali sprecano il 70% del tempo in data entry e ricerche su LinkedIn invece di negoziare.",
      icon: XCircle
    }
  ],
  MECHANISM_STEPS: [
    {
      number: "01",
      title: "Targeting Chirurgico",
      description: "Isoliamo il Decisore Reale (CEO, Sales Director). Non spariamo nel mucchio. Mappiamo il mercato per identificare i veri detentori del budget.",
      icon: Target
    },
    {
      number: "02",
      title: "Protocollo Multicanale",
      description: "Ubiquità Strategica. Li ingaggiamo dove sono attivi: Email, LinkedIn, Telefono, WhatsApp. Un approccio 'Human-First' supportato dalla tecnologia.",
      icon: Database
    },
    {
      number: "03",
      title: "Data Intelligence",
      description: "Oltre le Vanity Metrics. Non ti mandiamo report di 'click'. Ti consegniamo intelligence di mercato per decisioni GO/NO-GO.",
      icon: BarChart3
    },
    {
      number: "04",
      title: "L'Assist al Commerciale",
      description: "Il lead arriva al tuo commerciale solo quando è pronto. Consegniamo contesto e interesse. Il tuo team deve solo vendere.",
      icon: Users
    }
  ],
  COMPARISON_DATA: [
    {
      feature: "Tempo di Setup",
      traditional: "3-6 Mesi (Selezione + Onboarding)",
      stormx: "7-14 Giorni",
    },
    {
      feature: "Investimento",
      traditional: "Stipendio + TFR + Costi Nascosti",
      stormx: "Frazione del costo di un dipendente",
    },
    {
      feature: "Tecnologia",
      traditional: "Costi extra per Software/Dati",
      stormx: "Inclusa (Stack Proprietario)",
    },
    {
      feature: "Know-How",
      traditional: "Limitato alla singola persona",
      stormx: "Team Senior Multidisciplinare",
    },
    {
      feature: "Rischio",
      traditional: "100% a carico tuo",
      stormx: "Garanzia di Performance",
    }
  ],
  FAQS: [
    {
      question: "Cos'è il Protocollo di Outreach Multicanale Storm X?",
      answer: "Non è la classica lead generation. È un'infrastruttura B2B specializzata che utilizza strategie personalizzate per connettersi con i veri Decision Maker. Sfruttiamo canali come LinkedIn, Email, WhatsApp e Cold Call in sinergia per accelerare il ciclo di vendita. Il processo inizia con una ricerca di mercato approfondita, seguita da messaggistica chirurgica e ottimizzazione continua."
    },
    {
      question: "Quanto velocemente potete lanciare una campagna?",
      answer: "Il Metodo Storm X è progettato per la velocità: siamo operativi in 7-14 giorni (Setup Tecnico + Riscaldamento). Rispetto all'assunzione di un BDR interno (3-6 mesi tra ricerca e onboarding), forniamo un servizio 'Plug & Play' ottimizzato con AI, focalizzato immediatamente sui KPI misurabili."
    },
    {
      question: "Che risultati posso aspettarmi lavorando con voi?",
      answer: "Con il nostro processo di Outreach, puoi raggiungere oltre 500 aziende in target in 45 giorni. L'obiettivo non sono vanity metrics, ma un flusso costante di meeting qualificati in agenda e l'apertura di trattative commerciali reali già nei primi mesi di collaborazione."
    },
    {
      question: "Cosa vi differenzia dalle altre agenzie di Lead Gen?",
      answer: "A differenza delle agenzie tradizionali, Storm X bypassa intermediari e segreterie (Gatekeeper) grazie a un metodo multicanale e tecnologico. Parliamo direttamente con chi ha potere di firma. Non ci limitiamo a fornire 'liste', costruiamo opportunità di business reali in modo più veloce ed efficace."
    },
    {
      question: "Come avverrà la comunicazione tra i nostri team?",
      answer: "Creiamo un gruppo di chat istantanea (WhatsApp o Slack) per aggiornamenti in tempo reale su numeri e risultati. Inoltre, stabiliamo call settimanali di allineamento per analizzare i dati e ottimizzare la strategia."
    },
    {
      question: "Quali canali utilizzate per la generazione di contatti?",
      answer: "Usiamo un mix strategico per massimizzare i risultati: LinkedIn (messaggi diretti e connessioni strategiche), Email Marketing personalizzato (Cold Outreach), WhatsApp (comunicazione rapida) e Cold Calling (follow-up e qualifica)."
    },
    {
      question: "Come proteggete la reputazione del mio dominio e la deliverability?",
      answer: "Storm X protegge la reputazione del tuo dominio principale utilizzando sottodomini dedicati, configurando protocolli di autenticazione (SPF/DKIM/DMARC) e sistemi di riscaldamento (warm-up) automatico. Inviamo volumi controllati con messaggi non spammy e monitoriamo costantemente le blacklist per garantire la massima efficacia."
    },
    {
      question: "Quali risultati posso aspettarmi una volta firmato l'accordo?",
      answer: "Nei primi mesi, puoi aspettarti 50+ meeting qualificati (in base al target), diverse trattative chiuse e una pipeline costante. Dal 1° mese generiamo trazione; entro il 6° mese vedrai un ROI misurabile e una penetrazione di mercato profonda. Il processo è scalabile sia sul mercato domestico che estero."
    },
    {
      question: "Come capisco se Storm X è adatto alla mia azienda?",
      answer: "Il servizio è ideale per aziende B2B (Manifattura, SaaS, Servizi) con una Value Proposition solida e ben definita. Questi elementi semplificano il lavoro e aumentano drasticamente la probabilità di successo, permettendoci di creare connessioni efficaci con i decisori."
    },
    {
      question: "Agite anche come Fractional Sales Manager?",
      answer: "Sì. Se hai bisogno di un partner che agisca anche come Responsabile Vendite Frazionario, Storm X è la soluzione. Il nostro servizio va oltre la generazione di lead: ti supportiamo nella chiusura (closing), negoziazione e gestione del cliente, agendo come un'estensione del tuo team per convertire le opportunità in fatturato."
    },
    {
      question: "Qual è il modello di pricing?",
      answer: "Il nostro modello include una fee mensile fissa (per infrastruttura e team) e una componente variabile basata sui risultati. Consigliamo un impegno di 12 mesi per valutare appieno l'efficacia del sistema, ma siamo flessibili: partiamo spesso con un Pilot di 90 giorni per validare i numeri prima di scalare."
    }
  ],
  CASE_STUDIES: [
    {
      company: "NexTech Solutions",
      logo: "NX",
      industry: "SaaS Enterprise",
      challenge: "Impossibile superare i gatekeeper per parlare con i CIO.",
      solution: "Sequenza Account-Based (LinkedIn + Direct Mail fisico).",
      results: ["+40% Tasso Risposta", "Pipeline Milionaria"]
    },
    {
      company: "Studio Legale Alfa",
      logo: "AL",
      industry: "Servizi Professionali",
      challenge: "Dipendenza totale dal passaparola locale.",
      solution: "Campagna Email 'Soft-Touch' su aziende target specifiche.",
      results: ["12 Nuovi Clienti", "Setup in 14gg"]
    },
    {
      company: "GreenPack",
      logo: "GP",
      industry: "Settore Industriale",
      challenge: "Mercato saturo e guerra dei prezzi.",
      solution: "Posizionamento consulenziale per educare i Buyer.",
      results: ["30 Meeting Qualificati", "25% Open Rate"]
    }
  ],
  TESTIMONIALS: [
    {
      quote: "Prima facevamo cold call a freddo con scarsi risultati. Storm X ci ha portato 18 meeting con Direttori Marketing nel primo mese.",
      author: "Marco R.",
      role: "CEO",
      company: "SaaS Martech",
      metric: "+18 Meeting"
    },
    {
      quote: "La qualità dei lead è ciò che ci ha sorpreso. Non perditempo, ma aziende pronte a comprare.",
      author: "Giulia B.",
      role: "Sales Director",
      company: "Logistica",
      metric: "ROI 4.5x"
    }
  ],
  TIERS: [
    {
      name: "Start",
      description: "Per piccole validazioni di mercato.",
      features: ["Strategia Base", "1 Canale (Email)", "500 Lead/mese", "Report Mensile"],
      ctaText: "Info",
      isPopular: false
    },
    {
      name: "Pilot 90",
      description: "Il nostro best-seller per PMI.",
      features: ["Multicanale (Email+LI+Tel)", "3000+ Lead Lavorati", "Human Caller Italiano", "Garanzia Performance", "CRM Setup"],
      ctaText: "Richiedi Pilot",
      isPopular: true
    },
    {
      name: "Scale",
      description: "Volume elevato per team di vendita.",
      features: ["Domini & Infrastruttura Dedicata", "Team SDR dedicato (2+)", "Integrazione API CRM", "Account Manager Dedicato", "Slack Connect"],
      ctaText: "Parla con noi",
      isPopular: false
    }
  ],
  TEAM: [
    {
      name: "Marcello Di Pierro",
      role: "Founder & CEO",
      superpower: "Trasforma il caos in processi scalabili. 10 anni di esperienza con brand globali come Reebok & Supreme."
    },
    {
      name: "Armand Ohoungnon",
      role: "Head of Inbound",
      superpower: "Mago del Performance Marketing. Strategia e operazioni per campagne Meta & Lead Gen Inbound."
    },
    {
      name: "Francesco Monopoli",
      role: "Account Manager",
      superpower: "Growth Strategist - List builder Expert - Multichannel Outreach"
    },
    {
      name: "Sali Leshi",
      role: "Outreach Specialist",
      superpower: "Outbound + Clay + CRM + Lemlist Expert"
    }
  ],
  GUARANTEE: {
    title: "Garanzia di Apprendimento",
    description: "Il rischio è tutto nostro. Se dopo 90 giorni non ci sono dati chiari e risultati misurabili, lavoriamo gratis il 4° mese fino al raggiungimento dell'obiettivo.",
    highlight: "lavoriamo gratis il 4° mese"
  },
  WHATSAPP: {
    label: "Direct Access Protocol",
    headline: "Non è spam. È business alla velocità della luce.",
    subheadline: "Le email si possono ignorare. Le chiamate si possono bloccare. Ma un approccio ibrido e umano non si può fermare.",
    pillars: [
      {
        title: "Anti-Spam Policy Rigorosa",
        desc: "Contattiamo canali diretti (come WhatsApp o Mobile) solo dopo che il prospect ha mostrato segnali di interesse (apertura email, visita profilo). Il contesto è tutto."
      },
      {
        title: "Il Potere della Voce",
        desc: "Una nota audio personalizzata o una video-pillola converte 5x più di un testo standard. Umanizziamo il brand per creare fiducia istantanea."
      },
      {
        title: "Human Touch",
        desc: "Dietro ogni campagna c'è un team Senior. Nessuno stagista gestisce la reputazione della tua azienda. 4 Senior Specialists, 0 Interns."
      }
    ],
    chat: {
      time: "09:41",
      date: "Mercoledì, 24 Ott",
      notification: "Ciao Marco, ho visto che hai aperto...",
      sender: "Marcello (Storm X)",
      status: "Online",
      encryption: "I messaggi e le chiamate sono crittografati end-to-end.",
      message1: "Ciao Marco, ho visto che hai aperto la mia email sul Pilot. Ha senso parlarne 5 minuti?",
      voiceTime: "0:24",
      reply: "Ciao, sì. Chiamami domani mattina.",
      inputPlaceholder: "Messaggio",
      unlock: "Swipe up to unlock"
    }
  },
  FEATURED_CASE: {
    label: "Featured Case Study",
    headline: "Da innovatore di nicchia a pipeline globale in 9 mesi.",
    company: "Isolcore",
    subCompany: "New Zealand Company Srl",
    sector: "Settore: Deep Tech / Isolamento Termico",
    challengeTitle: "The Challenge",
    challengeDesc: "Tecnologia superiore, ma presenza limitata al mercato italiano. Obiettivo critico: Aprire mercati B2B in Europa e Medio Oriente senza attendere i tempi biblici del passaparola o delle fiere di settore.",
    strategyTitle: "The Strategy",
    strategyDesc: "Outreach Multicanale (LinkedIn + Email + WhatsApp). Abbiamo creato un mix di educazione tecnica (per i CTO) e 'curiosità commerciale' (per i Buyer) per trasformare lead freddi in meeting caldi.",
    points: [
      "Mappatura Distributori UK & GCC",
      "Sequenze 'Account-Based' sui Decision Maker"
    ],
    metrics: [
      { value: "> €1M", label: "Valore Pipeline" },
      { value: "5.000+", label: "Contatti EU & GCC" },
      { value: "100%", label: "Conv. Meeting UK" },
      { value: "5", label: "Accordi Quadro" }
    ],
    cta: "Scarica il Case Study Completo (PDF)",
    videoBadge: "Live Interview"
  },
  PILOT_PHASES: [
    {
      title: "Fase 1: Setup & Infrastructure",
      time: "Giorni 1-14",
      desc: "Configurazione domini dedicati, riscaldamento IP, setup CRM e definizione strategica delle Buyer Personas (ICP)."
    },
    {
      title: "Fase 2: Launch & Market Fit",
      time: "Giorni 15-60",
      desc: "Lancio campagne A/B test multicanale. Raccogliamo dati qualitativi per capire cosa converte e cosa no."
    },
    {
      title: "Fase 3: Scale & Optimization",
      time: "Giorni 61-90",
      desc: "Isoliamo le variabili vincenti (messaggi, canali, target) e scaliamo i volumi per riempire l'agenda."
    }
  ],
  MECHANISM_COPY: {
    label: "L'Offerta: 90 Days Pilot",
    headline: "Validazione Scientifica in 90 Giorni.",
    subheadline: "Garanzia Risk-Reversal.",
    desc: "Perché vincolarsi con contratti annuali o assumere personale interno senza certezze? Il nostro Pilot Program è uno 'Stress-Test' del tuo mercato.",
    guaranteeTitle: "Garanzia di Risultato",
    guaranteeDesc: "Non vendiamo tentativi. Se al termine del Pilot (90 giorni) non raggiungiamo i KPI concordati, lavoriamo gratuitamente fino al raggiungimento dell'obiettivo.",
    funnelLegend: {
      hot: "Hot Leads (Meeting)",
      nurture: "Nurture (Database)",
      system: "SYSTEM: ONLINE",
      processing: "PROCESSING LIVE DATA..."
    }
  },
  PARADIGM_SHIFT: {
    headline: "Non ti serve un'altra Agenzia di Lead Gen.",
    subheadline: "Ti serve un Ecosistema di Vendita Outbound.",
    desc1: "Dimentica le liste di contatti freddi e lo spam. Storm X ingegnerizza la parte più frustrante e time-consuming della vendita: il Prospecting Multicanale.",
    desc2: "La nostra promessa è semplice: il lunedì mattina, il tuo team trova in agenda appuntamenti qualificati con decisori che sanno già chi siete.",
    quote: "\"Noi costruiamo il processo. Noi riscaldiamo il contatto. Voi chiudete.\"",
    flowchartTitle: "Workflow Multicanale Proprietario",
    flowchart: {
      target: "Target: CEO / CIO / Directors",
      step1: "Connection",
      step1Desc: "Soft Touch",
      step2: "Value Prop",
      step2Desc: "Educazione",
      step3: "Direct",
      step3Desc: "Personal Video",
      step4: "Contact",
      step4Desc: "Closing Call",
      outputTitle: "Meeting Confermato",
      outputDesc: "SQL (Sales Qualified Lead)"
    }
  },
  // Extra UI Strings
  UI: {
    bookPilot: "Prenota Pilot",
    bookAnalysis: "Richiedi Analisi",
    bookSession: "Prenota Sessione Strategica",
    activatePilot: "Attiva Offerta Pilot",
    guarantee: "Garanzia \"Soddisfatti o Rimborsati\" nei primi 14 giorni",
    totalValue: "Valore Totale",
    yourPrice: "Il Tuo Prezzo",
    month: "/mese",
    footerText: "Sistema di Outbound Marketing per PMI B2B. Costruito per scalare.",
    rights: "All Rights Reserved."
  }
};

const EN = {
  NAV_ITEMS: [
    { label: 'The Problem', href: '#problema' },
    { label: 'The Method', href: '#metodo' },
    { label: '90-Day Pilot', href: '#processo' },
    { label: 'Case Studies', href: '#case-studies' },
  ],
  HERO_COPY: {
    badge: "SYSTEM STATUS: READY FOR SCALING | Acceptance by application only.",
    headline: "Stop using your Senior Sales Reps as Data Entry Interns.",
    subheadline: "We build your proprietary acquisition infrastructure in 90 days. No hiring. No long-term contracts. We validate your market, you close the deals.",
    ctaPrimary: "Request Feasibility Analysis",
    ctaSecondary: "How it works",
    trustText: "No credit card required. Free strategic analysis."
  },
  STATS: [
    { value: "90 Days", label: "Pilot Duration" },
    { value: "0", label: "Hiring Risk" },
    { value: "100%", label: "Data Ownership" },
    { value: "4th", label: "Month Free if no results" },
  ],
  PAIN_POINTS: [
    {
      title: "The 'Sawtooth' Pipeline",
      description: "One month you feast, the next you panic because the funnel is empty. You lack mathematical predictability.",
      icon: AlertTriangle
    },
    {
      title: "The Inbound Illusion",
      description: "Trade shows bring business cards, not signed contracts. Word of mouth cannot be scaled on command.",
      icon: Clock
    },
    {
      title: "The 'Blind Hiring' Risk",
      description: "Hiring a new salesperson is an expensive bet (Salary + Benefits + Training) with no guaranteed results in the first 6 months.",
      icon: DollarSign
    },
    {
      title: "Waste of Senior Talent",
      description: "Your salespeople waste 70% of their time on data entry and LinkedIn research instead of negotiating.",
      icon: XCircle
    }
  ],
  MECHANISM_STEPS: [
    {
      number: "01",
      title: "Surgical Targeting",
      description: "We isolate the Real Decision Maker (CEO, Sales Director). We don't spray and pray. We map the market to identify the true budget holders.",
      icon: Target
    },
    {
      number: "02",
      title: "Multichannel Protocol",
      description: "Strategic Ubiquity. We engage them where they are active: Email, LinkedIn, Phone, WhatsApp. A 'Human-First' approach supported by technology.",
      icon: Database
    },
    {
      number: "03",
      title: "Data Intelligence",
      description: "Beyond Vanity Metrics. We don't send you 'click' reports. We deliver market intelligence for GO/NO-GO decisions.",
      icon: BarChart3
    },
    {
      number: "04",
      title: "The Sales Assist",
      description: "The lead reaches your salesperson only when they are ready. We deliver context and interest. Your team just has to sell.",
      icon: Users
    }
  ],
  COMPARISON_DATA: [
    {
      feature: "Setup Time",
      traditional: "3-6 Months (Hiring + Onboarding)",
      stormx: "7-14 Days",
    },
    {
      feature: "Investment",
      traditional: "Salary + Benefits + Hidden Costs",
      stormx: "Fraction of an employee cost",
    },
    {
      feature: "Technology",
      traditional: "Extra costs for Software/Data",
      stormx: "Included (Proprietary Stack)",
    },
    {
      feature: "Know-How",
      traditional: "Limited to the single person",
      stormx: "Multidisciplinary Senior Team",
    },
    {
      feature: "Risk",
      traditional: "100% on you",
      stormx: "Performance Guarantee",
    }
  ],
  FAQS: [
    {
      question: "What Is Storm X’s Multichannel Outreach And How Does It Work?",
      answer: "Storm X’s Multichannel Outreach is a specialized B2B lead generation process that uses personalized strategies to connect with business decision-makers. We leverage channels such as LinkedIn, email, WhatsApp, and cold calls to accelerate your sales cycle. Our process starts with in-depth market research, followed by tailored messaging and continuous campaign optimization to ensure measurable results."
    },
    {
      question: "How Quickly Can You Launch A Campaign?",
      answer: "The StormX Method is three times faster and more effective than a traditional BDR. We provide a tailored service optimized with AI, focusing on measurable KPIs and tangible results. We are operational in 7-14 days."
    },
    {
      question: "What Results Can I Expect When I Partner With Storm X?",
      answer: "With the Multichannel OUTREACH process, you can reach over 500 companies in 45 days, creating a consistent flow of qualified meetings with prospects, and initiating partnerships and sales within the first few months of collaboration."
    },
    {
      question: "What Advantages Does Storm X’s Method Offer Compared To Other Lead Generation Agencies?",
      answer: "Unlike traditional agencies, Storm X reaches decision-makers directly by bypassing intermediaries and secretary's office, thanks to a multichannel method powered by AI. Instead of just providing leads, it builds sales meetings and real business opportunities faster and more effectively."
    },
    {
      question: "How Does The Communication Between Our Team Look Like?",
      answer: "We will create an instant chatgroup on Teams or WhatsApp where we will share results, numbers and where we will make weekly team calls."
    },
    {
      question: "Which Outreach Channels Do You Use For Lead Generation?",
      answer: "We use a mix of channels to optimize results, including: LinkedIn (direct messages and strategic connections), Personalized email marketing, WhatsApp for quick and direct communication, and Cold calling."
    },
    {
      question: "How Do You Protect My Domain Reputation And Ensure High Email Deliverability?",
      answer: "Storm X protects your domain reputation by using dedicated subdomains, SPF/DKIM/DMARC authentication, and automated warm-up systems. Emails are sent in controlled volumes with personalized, non-spammy messaging. We continuously monitor deliverability, blacklists, and engagement to ensure maximum effectiveness."
    },
    {
      question: "What Results Can I Expect When We Sign An Agreement?",
      answer: "In the first months with Storm X, you can expect over 50+ qualified meetings, multiple closed deals, and a steady pipeline of sales opportunities. From month 1, we generate traction with targeted outreach, and by month 6, you’ll see measurable ROI and market penetration. The process is data-driven, multichannel and can be scaled in your domestic market and abroad."
    },
    {
      question: "How Can I Determine If Storm X Is The Right Service For My Business?",
      answer: "The service is ideal for manufacturers and companies with a well-defined and strong value proposition. These elements simplify the work and increase the probability of success, allowing us to create effective connections with decision makers."
    },
    {
      question: "Do You Act As A Fractional Sales Manager?",
      answer: "Yes — if you need a partner who can also act as a Fractional Sales Manager, Storm X is exactly what you're looking for. Our service goes beyond lead generation: we support you in sales closing, negotiation, and client management, acting as an extension of your team to convert opportunities into real revenue."
    },
    {
      question: "What Is The Pricing Model Like?",
      answer: "Our pricing model includes both a fixed monthly fee and a variable component based on results generated. We recommend a 12-month engagement to fully assess the effectiveness of our system and benchmark results against your current approach. However, if you have specific time constraints, we’re flexible — let’s discuss your goals and tailor a plan that works for you."
    }
  ],
  CASE_STUDIES: [
    {
      company: "NexTech Solutions",
      logo: "NX",
      industry: "SaaS Enterprise",
      challenge: "Impossible to bypass gatekeepers to speak with CIOs.",
      solution: "Account-Based Sequence (LinkedIn + Physical Direct Mail).",
      results: ["+40% Response Rate", "Million Dollar Pipeline"]
    },
    {
      company: "Studio Legale Alfa",
      logo: "AL",
      industry: "Professional Services",
      challenge: "Total dependence on local word of mouth.",
      solution: "'Soft-Touch' Email Campaign on specific target companies.",
      results: ["12 New Clients", "Setup in 14 days"]
    },
    {
      company: "GreenPack",
      logo: "GP",
      industry: "Industrial Sector",
      challenge: "Saturated market and price war.",
      solution: "Consultative positioning to educate Buyers.",
      results: ["30 Qualified Meetings", "25% Open Rate"]
    }
  ],
  TESTIMONIALS: [
    {
      quote: "Before we were cold calling with poor results. Storm X brought us 18 meetings with Marketing Directors in the first month.",
      author: "Mark R.",
      role: "CEO",
      company: "SaaS Martech",
      metric: "+18 Meetings"
    },
    {
      quote: "The quality of the leads is what surprised us. Not time wasters, but companies ready to buy.",
      author: "Julia B.",
      role: "Sales Director",
      company: "Logistics",
      metric: "ROI 4.5x"
    }
  ],
  TIERS: [
    {
      name: "Start",
      description: "For small market validations.",
      features: ["Basic Strategy", "1 Channel (Email)", "500 Leads/mo", "Monthly Report"],
      ctaText: "Info",
      isPopular: false
    },
    {
      name: "Pilot 90",
      description: "Our best-seller for SMBs.",
      features: ["Multichannel (Email+LI+Phone)", "3000+ Leads Processed", "Human Caller", "Performance Guarantee", "CRM Setup"],
      ctaText: "Request Pilot",
      isPopular: true
    },
    {
      name: "Scale",
      description: "High volume for sales teams.",
      features: ["Dedicated Infrastructure", "Dedicated SDR Team (2+)", "CRM API Integration", "Dedicated Account Manager", "Slack Connect"],
      ctaText: "Talk to us",
      isPopular: false
    }
  ],
  TEAM: [
    {
      name: "Marcello Di Pierro",
      role: "Founder & CEO",
      superpower: "Transforms chaos into scalable processes. 10 years building sales infrastructure for global brands like Reebok & Supreme."
    },
    {
      name: "Armand Ohoungnon",
      role: "Head of Inbound",
      superpower: "Performance Marketing Wizard. Strategy and ops for Meta & Inbound Lead Gen campaigns."
    },
    {
      name: "Francesco Monopoli",
      role: "Account Manager",
      superpower: "Growth Strategist - List builder Expert - Multichannel Outreach"
    },
    {
      name: "Sali Leshi",
      role: "Outreach Specialist",
      superpower: "Outbound + Clay + CRM + Lemlist Expert"
    }
  ],
  GUARANTEE: {
    title: "Learning Guarantee",
    description: "The risk is entirely ours. If after 90 days there are no clear data and measurable results, we work for free in the 4th month until the goal is met.",
    highlight: "we work for free in the 4th month"
  },
  WHATSAPP: {
    label: "Direct Access Protocol",
    headline: "It's not spam. It's business at light speed.",
    subheadline: "Emails can be ignored. Calls can be blocked. But a hybrid, human approach cannot be stopped.",
    pillars: [
      {
        title: "Rigorous Anti-Spam Policy",
        desc: "We contact direct channels (like WhatsApp or Mobile) only after the prospect has shown signs of interest (email open, profile visit). Context is everything."
      },
      {
        title: "The Power of Voice",
        desc: "A personalized audio note or video pill converts 5x more than standard text. We humanize the brand to create instant trust."
      },
      {
        title: "Human Touch",
        desc: "Behind every campaign is a Senior team. No intern manages your company's reputation. 4 Senior Specialists, 0 Interns."
      }
    ],
    chat: {
      time: "09:41",
      date: "Wednesday, Oct 24",
      notification: "Hi Marco, I saw you opened...",
      sender: "Marcello (Storm X)",
      status: "Online",
      encryption: "Messages and calls are end-to-end encrypted.",
      message1: "Hi Marco, I saw you opened my email about the Pilot. Does it make sense to chat for 5 mins?",
      voiceTime: "0:24",
      reply: "Hi, yes. Call me tomorrow morning.",
      inputPlaceholder: "Message",
      unlock: "Swipe up to unlock"
    }
  },
  FEATURED_CASE: {
    label: "Featured Case Study",
    headline: "From niche innovator to global pipeline in 9 months.",
    company: "Isolcore",
    subCompany: "New Zealand Company Srl",
    sector: "Sector: Deep Tech / Thermal Insulation",
    challengeTitle: "The Challenge",
    challengeDesc: "Superior technology, but limited presence in the Italian market. Critical goal: Open B2B markets in Europe and the Middle East without waiting for word-of-mouth or trade shows.",
    strategyTitle: "The Strategy",
    strategyDesc: "Multichannel Outreach (LinkedIn + Email + WhatsApp). We created a mix of technical education (for CTOs) and 'commercial curiosity' (for Buyers) to turn cold leads into hot meetings.",
    points: [
      "Distributor Mapping UK & GCC",
      "'Account-Based' Sequences on Decision Makers"
    ],
    metrics: [
      { value: "> €1M", label: "Pipeline Value" },
      { value: "5.000+", label: "Contacts EU & GCC" },
      { value: "100%", label: "UK Meeting Conv." },
      { value: "5", label: "Framework Agreements" }
    ],
    cta: "Download Full Case Study (PDF)",
    videoBadge: "Live Interview"
  },
  PILOT_PHASES: [
    {
      title: "Phase 1: Setup & Infrastructure",
      time: "Days 1-14",
      desc: "Configuration of dedicated domains, IP warmup, CRM setup, and strategic definition of Buyer Personas (ICP)."
    },
    {
      title: "Phase 2: Launch & Market Fit",
      time: "Days 15-60",
      desc: "Launch of multichannel A/B test campaigns. We collect qualitative data to understand what converts and what doesn't."
    },
    {
      title: "Phase 3: Scale & Optimization",
      time: "Days 61-90",
      desc: "We isolate winning variables (messages, channels, targets) and scale volumes to fill the agenda."
    }
  ],
  MECHANISM_COPY: {
    label: "The Offer: 90 Days Pilot",
    headline: "Scientific Validation in 90 Days.",
    subheadline: "Risk-Reversal Guarantee.",
    desc: "Why bind yourself to annual contracts or hire internal staff without certainty? Our Pilot Program is a 'Stress-Test' of your market.",
    guaranteeTitle: "Result Guarantee",
    guaranteeDesc: "We don't sell attempts. If at the end of the Pilot (90 days) we don't reach the agreed KPIs, we work for free until the goal is achieved.",
    funnelLegend: {
      hot: "Hot Leads (Meeting)",
      nurture: "Nurture (Database)",
      system: "SYSTEM: ONLINE",
      processing: "PROCESSING LIVE DATA..."
    }
  },
  PARADIGM_SHIFT: {
    headline: "You don't need another Lead Gen Agency.",
    subheadline: "You need an Outbound Sales Ecosystem.",
    desc1: "Forget cold contact lists and spam. Storm X engineers the most frustrating and time-consuming part of sales: Multichannel Prospecting.",
    desc2: "Our promise is simple: on Monday morning, your team finds qualified appointments in the agenda with decision makers who already know who you are.",
    quote: "\"We build the process. We warm up the contact. You close.\"",
    flowchartTitle: "Proprietary Multichannel Workflow",
    flowchart: {
      target: "Target: CEO / CIO / Directors",
      step1: "Connection",
      step1Desc: "Soft Touch",
      step2: "Value Prop",
      step2Desc: "Education",
      step3: "Direct",
      step3Desc: "Personal Video",
      step4: "Contact",
      step4Desc: "Closing Call",
      outputTitle: "Confirmed Meeting",
      outputDesc: "SQL (Sales Qualified Lead)"
    }
  },
  UI: {
    bookPilot: "Book Pilot",
    bookAnalysis: "Request Analysis",
    bookSession: "Book Strategy Session",
    activatePilot: "Activate Pilot Offer",
    guarantee: "Money-Back Guarantee in the first 14 days",
    totalValue: "Total Value",
    yourPrice: "Your Price",
    month: "/month",
    footerText: "B2B Outbound Marketing System for SMBs. Built to scale.",
    rights: "All Rights Reserved."
  }
};

export const TRANSLATIONS = {
  it: IT,
  en: EN
};