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
    badge: "STATO SISTEMA: PRONTO PER SCALARE | Solo 1 posto disponibile questo mese",
    headline: "Smetti di usare i tuoi Senior Sales come stagisti per il Data Entry.",
    subheadline: "Costruiamo il tuo motore outbound in 90 giorni — 60+ meeting qualificati garantiti, zero rischio di assunzione. Tu chiudi i contratti, noi alimentiamo la pipeline.",
    ctaPrimary: "Richiedi Analisi Pipeline (Gratis)",
    ctaSecondary: "Vedi Caso Studio",
    trustText: "✓ Nessuna carta richiesta • ✓ Analisi in 24h • ✓ Zero impegno",
    microTestimonial: "\"Pipeline finalmente costante\" — CEO, SaaS B2B"
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
      question: "Cosa include esattamente l'Ecosistema Storm X?",
      answer: "L'offerta Storm X centralizza l'intera infrastruttura necessaria per il prospecting B2B moderno. Include: 1) Tecnologia Proprietaria (Setup domini, CRM, Data enrichment); 2) Intelligence Artificiale per l'analisi dei segnali di acquisto; 3) Un Team Senior dedicato (non stagisti) specializzato in Cold Email, LinkedIn e Human Calling; 4) Un Growth Architect che orchestra la strategia. È una soluzione 'chiavi in mano': tu ottieni il meeting, noi gestiamo la complessità."
    },
    {
      question: "Qual è il vostro modello economico?",
      answer: "Il nostro modello è ibrido per allineare i nostri interessi ai tuoi risultati. Una 'Setup Fee' copre i costi vivi dell'infrastruttura, dei dati e della tecnologia. Una 'Success Fee' variabile è legata alla performance reale (Meeting Qualificati confermati). In breve: investi sull'asset, paghi per il risultato."
    },
    {
      question: "Ci sono vincoli contrattuali a lungo termine?",
      answer: "No. Non crediamo nei contratti annuali 'alla cieca'. Lavoriamo con un Pilot di 90 giorni (Validazione). Questo ci permette di dimostrare trazione e ROI senza vincolarti per anni. Se il sistema funziona, scaliamo. Se non funziona, non sei bloccato."
    },
    {
      question: "Quali canali di prospecting utilizzate?",
      answer: "A differenza delle agenzie tradizionali, noi sincronizziamo 4 canali: 1) Cold Email (per volume e deliverability); 2) LinkedIn (per social proof e networking); 3) WhatsApp (per rapidità e intimità sui prospect ingaggiati); 4) Human Cold Calling (per convertire l'interesse in appuntamento). Tutto gestito in un unico flusso logico."
    },
    {
      question: "Come interviene l'AI nella vostra offerta?",
      answer: "La nostra AI non scrive solo email. Agisce come un 'Radar Strategico': analizza le risposte per rilevare il sentiment, identifica i pattern di obiezione per migliorare gli script in tempo reale e ottimizza il timing dei follow-up. Serve a rendere il processo umano più chirurgico, non a sostituirlo con dei bot."
    },
    {
      question: "Chi gestisce operativamente le campagne?",
      answer: "Non sarai un ticket in un sistema. Hai un Growth Architect dedicato come unico punto di contatto. Lui/Lei coordina gli SDR, monitora la dashboard e prende decisioni basate sui dati. Hai visibilità totale su chi fa cosa."
    },
    {
      question: "Quanto tempo serve per vedere i primi risultati?",
      answer: "Il Setup tecnico (Domini, ICP, Script) richiede circa 7-14 giorni. I primi meeting arrivano generalmente tra la 3° e la 4° settimana. La performance non è lineare: migliora mese su mese grazie all'apprendimento dell'AI e all'ottimizzazione del target."
    },
    {
      question: "A chi si rivolge Storm X?",
      answer: "Storm X è progettato per aziende B2B 'High-Ticket' (Deal size >€5k-10k) che vogliono scalare senza appesantire la struttura interna. Ideale per: PMI che vogliono internazionalizzare, Startups B2B post-seed, e Team Vendita Enterprise che vogliono esternalizzare la parte di 'caccia' per focalizzarsi sulla chiusura."
    },
    {
      question: "È conforme al GDPR?",
      answer: "Assolutamente sì. Operiamo rigorosamente sotto il principio del 'Legittimo Interesse' (GDPR Art. 6). Utilizziamo solo dati B2B verificati, gestiamo automaticamente le liste di esclusione/disiscrizione e garantiamo la tracciabilità completa dei trattamenti dati."
    },
    {
      question: "Perché conviene rispetto ad assumere internamente?",
      answer: "Matematica semplice: Assumere un Senior SDR costa €40k-50k/anno + TFR + 6 mesi di training + costo software (€1.5k/mese). Con Storm X, accedi a un intero team Senior e a uno stack tecnologico completo per una frazione del costo, operativo in 14 giorni invece che in 6 mesi."
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
      superpower: "Ha costruito macchine outbound da zero per brand come Reebok, Supreme e 40+ scale-up B2B. La sua filosofia: dati prima, opinioni dopo."
    },
    {
      name: "Armand Ohoungnon",
      role: "Head of Inbound",
      superpower: "Gestisce budget media a 6 cifre senza sprechi. Ogni euro investito diventa pipeline misurabile grazie a campagne Meta e strategie di Lead Gen ad alto rendimento."
    },
    {
      name: "Francesco Monopoli",
      role: "Account Manager",
      superpower: "Costruisce liste ICP con precisione chirurgica. I giusti contatti, nel momento giusto, con il messaggio giusto — trasformando elenchi freddi in opportunità calde."
    },
    {
      name: "Sali Leshi",
      role: "Outreach Specialist",
      superpower: "Artigiano delle sequenze outbound. Trasforma dati grezzi in conversazioni qualificate usando Clay, Lemlist e un tocco umano che nessuna AI può replicare."
    }
  ],
  GUARANTEE: {
    title: "Garanzia di Apprendimento",
    description: "Il rischio è tutto nostro. Se dopo 90 giorni non ci sono dati chiari e risultati misurabili, lavoriamo gratis il 4° mese fino al raggiungimento dell'obiettivo.",
    highlight: "lavoriamo gratis il 4° mese"
  },
  WHATSAPP: {
    label: "Protocollo di Accesso Diretto",
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
      unlock: "Scorri per sbloccare"
    }
  },
  FEATURED_CASE: {
    label: "Caso Studio in Evidenza",
    headline: "Da innovatore di nicchia a pipeline globale in 9 mesi.",
    company: "Isolcore",
    subCompany: "New Zealand Company Srl",
    sector: "Settore: Deep Tech / Isolamento Termico",
    challengeTitle: "La Sfida",
    challengeDesc: "Tecnologia superiore, ma presenza limitata al mercato italiano. Obiettivo critico: Aprire mercati B2B in Europa e Medio Oriente senza attendere i tempi biblici del passaparola o delle fiere di settore.",
    strategyTitle: "La Strategia",
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
    cta: "Scarica il Caso Studio Completo (PDF)",
    videoBadge: "Intervista Live"
  },
  PILOT_PHASES: [
    {
      title: "Fase 1: Setup & Infrastruttura",
      time: "Giorni 1-14",
      desc: "Configurazione domini dedicati, riscaldamento IP, setup CRM e definizione strategica delle Buyer Personas (ICP)."
    },
    {
      title: "Fase 2: Lancio & Validazione",
      time: "Giorni 15-60",
      desc: "Lancio campagne A/B test multicanale. Raccogliamo dati qualitativi per capire cosa converte e cosa no."
    },
    {
      title: "Fase 3: Scala & Ottimizzazione",
      time: "Giorni 61-90",
      desc: "Isoliamo le variabili vincenti (messaggi, canali, target) e scaliamo i volumi per riempire l'agenda."
    }
  ],
  MECHANISM_COPY: {
    label: "L'Offerta: Pilot 90 Giorni",
    headline: "Validazione Scientifica in 90 Giorni.",
    subheadline: "Garanzia di Rimborso.",
    desc: "Perché vincolarsi con contratti annuali o assumere personale interno senza certezze? Il nostro Pilot Program è uno 'Stress-Test' del tuo mercato.",
    guaranteeTitle: "Garanzia di Risultato",
    guaranteeDesc: "Non vendiamo tentativi. Se al termine del Pilot (90 giorni) non raggiungiamo i KPI concordati, lavoriamo gratuitamente fino al raggiungimento dell'obiettivo.",
    funnelLegend: {
      hot: "Lead Caldi (Meeting)",
      nurture: "Nurture (Database)",
      system: "SISTEMA: ONLINE",
      processing: "ELABORAZIONE DATI LIVE..."
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
      target: "Target: CEO / CIO / Direttori",
      step1: "Connessione",
      step1Desc: "Primo Contatto",
      step2: "Proposta",
      step2Desc: "Educazione",
      step3: "Diretto",
      step3Desc: "Video Personale",
      step4: "Contatto",
      step4Desc: "Chiamata Finale",
      outputTitle: "Meeting Confermato",
      outputDesc: "SQL (Lead Qualificato)"
    }
  },
  // Extra UI Strings
  UI: {
    bookPilot: "Prenota Pilot 90gg",
    bookAnalysis: "Richiedi Analisi Gratuita",
    bookSession: "Richiedi Analisi — Zero Impegno",
    activatePilot: "Blocca il Tuo Posto (1/2 Disponibili)",
    guarantee: "Garanzia \"Soddisfatti o Rimborsati\" nei primi 14 giorni",
    totalValue: "Valore Totale",
    yourPrice: "Il Tuo Prezzo Pilot",
    month: "/mese",
    footerText: "Sistema di Outbound Marketing per PMI B2B. Costruito per scalare.",
    rights: "All Rights Reserved.",
    trustBadge1: "🔒 GDPR Compliant",
    trustBadge2: "✓ Setup in 14 giorni",
    trustBadge3: "✓ 60+ meeting in 90gg"
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
    badge: "SYSTEM STATUS: READY FOR SCALING | Only 1 spot available this month",
    headline: "Stop using your Senior Sales Reps as Data Entry Interns.",
    subheadline: "We build your outbound engine in 90 days — 60+ qualified meetings guaranteed, zero hiring risk. You focus on closing; we handle the pipeline.",
    ctaPrimary: "Request Pipeline Analysis (Free)",
    ctaSecondary: "See Case Study",
    trustText: "✓ No card required • ✓ Analysis in 24h • ✓ Zero commitment",
    microTestimonial: "\"Finally a consistent pipeline\" — CEO, B2B SaaS"
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
      question: "What exactly does the Storm X Ecosystem include?",
      answer: "The Storm X offer centralizes the entire infrastructure needed for modern B2B prospecting. It includes: 1) Proprietary Technology (Domain setup, CRM, Data enrichment); 2) Artificial Intelligence for buying signal analysis; 3) A dedicated Senior Team (no interns) specialized in Cold Email, LinkedIn, and Human Calling; 4) A Growth Architect who orchestrates the strategy. It's a 'turnkey' solution: you get the meeting, we manage the complexity."
    },
    {
      question: "What is your pricing model?",
      answer: "Our model is hybrid to align our interests with your results. A 'Setup Fee' covers the hard costs of infrastructure, data, and technology. A variable 'Success Fee' is tied to real performance (Confirmed Qualified Meetings). In short: invest in the asset, pay for the result."
    },
    {
      question: "Are there long-term contractual constraints?",
      answer: "No. We don't believe in 'blind' annual contracts. We work with a 90-day Pilot (Validation). This allows us to demonstrate traction and ROI without locking you in for years. If the system works, we scale. If it doesn't, you're not stuck."
    },
    {
      question: "Which prospecting channels do you use?",
      answer: "Unlike traditional agencies, we synchronize 4 channels: 1) Cold Email (for volume and deliverability); 2) LinkedIn (for social proof and networking); 3) WhatsApp (for speed and intimacy with engaged prospects); 4) Human Cold Calling (to convert interest into appointments). All managed in a single logical flow."
    },
    {
      question: "How does AI intervene in your offer?",
      answer: "Our AI doesn't just write emails. It acts as a 'Strategic Radar': analyzing responses to detect sentiment, identifying objection patterns to improve scripts in real-time, and optimizing follow-up timing. It serves to make the human process more surgical, not to replace it with bots."
    },
    {
      question: "Who manages the campaigns operationally?",
      answer: "You won't be a ticket in a system. You have a dedicated Growth Architect as your single point of contact. He/She coordinates the SDRs, monitors the dashboard, and makes data-driven decisions. You have total visibility on who does what."
    },
    {
      question: "How long does it take to see the first results?",
      answer: "Technical Setup (Domains, ICP, Scripts) takes about 7-14 days. The first meetings generally arrive between the 3rd and 4th week. Performance is not linear: it improves month over month thanks to AI learning and target optimization."
    },
    {
      question: "Who is Storm X for?",
      answer: "Storm X is designed for 'High-Ticket' B2B companies (Deal size >€5k-10k) that want to scale without burdening their internal structure. Ideal for: SMBs looking to internationalize, Post-seed B2B Startups, and Enterprise Sales Teams wanting to outsource the 'hunting' part to focus on closing."
    },
    {
      question: "Is it GDPR compliant?",
      answer: "Absolutely yes. We operate strictly under the principle of 'Legitimate Interest' (GDPR Art. 6). We use only verified B2B data, automatically manage exclusion/unsubscribe lists, and guarantee full traceability of data processing."
    },
    {
      question: "Why is it better than hiring internally?",
      answer: "Simple math: Hiring a Senior SDR costs €40k-50k/year + severance + 6 months training + software costs (€1.5k/month). With Storm X, you access an entire Senior team and a full tech stack for a fraction of the cost, operational in 14 days instead of 6 months."
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
      superpower: "Built scalable outbound engines from scratch for brands like Reebok, Supreme, and 40+ B2B scale-ups. His philosophy: data first, opinions second."
    },
    {
      name: "Armand Ohoungnon",
      role: "Head of Inbound",
      superpower: "Manages 6-figure media budgets without waste. Every euro invested in advertising becomes measurable pipeline through Meta & inbound lead gen mastery."
    },
    {
      name: "Francesco Monopoli",
      role: "Account Manager",
      superpower: "Builds ICP lists with surgical precision. The right contacts, at the right moment, with the right message — turning cold prospects into hot opportunities."
    },
    {
      name: "Sali Leshi",
      role: "Outreach Specialist",
      superpower: "Outbound sequence craftsman. Transforms raw data into qualified conversations using Clay, Lemlist, and a human touch that no AI can replicate."
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
    bookPilot: "Book 90-Day Pilot",
    bookAnalysis: "Request Free Analysis",
    bookSession: "Request Analysis — Zero Commitment",
    activatePilot: "Secure Your Spot (1/2 Available)",
    guarantee: "Money-Back Guarantee in the first 14 days",
    totalValue: "Total Value",
    yourPrice: "Your Pilot Price",
    month: "/month",
    footerText: "B2B Outbound Marketing System for SMBs. Built to scale.",
    rights: "All Rights Reserved.",
    trustBadge1: "🔒 GDPR Compliant",
    trustBadge2: "✓ Setup in 14 days",
    trustBadge3: "✓ 60+ meetings in 90 days"
  }
};

export const TRANSLATIONS = {
  it: IT,
  en: EN
};