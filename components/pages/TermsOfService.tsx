import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const TermsOfService: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section className="py-20 bg-brand-dark min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-brand-text mb-2">
          {language === 'it' ? 'Termini di Servizio' : 'Terms of Service'}
        </h1>
        <p className="text-sm text-brand-muted mb-10">
          {language === 'it' ? 'Ultimo aggiornamento: 12 Marzo 2026' : 'Last updated: March 12, 2026'}
        </p>

        {language === 'it' ? (
          <div className="prose-brand space-y-6 text-brand-muted text-sm leading-relaxed">
            <h2 className="text-lg font-bold text-brand-text mt-8">1. Premessa</h2>
            <p>I presenti Termini di Servizio regolano l'utilizzo del sito web stormxdigital.com e dei servizi offerti da <strong>Storm X Digital S.R.L.</strong> (di seguito "Storm X", "noi" o "la Società"), con sede in Via Strada del Carro 24, 76011 Bisceglie (BA), Italia. P.IVA: 08789080721.</p>

            <h2 className="text-lg font-bold text-brand-text mt-8">2. Servizi Offerti</h2>
            <p>Storm X Digital fornisce servizi di outbound marketing B2B, inclusi ma non limitati a:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Progettazione e gestione di campagne outbound multicanale (email, LinkedIn, telefono, WhatsApp).</li>
              <li>Setup di infrastruttura tecnica (domini, CRM, deliverability).</li>
              <li>Ricerca e profilazione di prospect.</li>
              <li>Consulenza strategica per l'espansione commerciale.</li>
            </ul>
            <p>I servizi specifici, i deliverable e le tempistiche vengono definiti nel contratto individuale (Proposta di Servizio) concordato con il cliente.</p>

            <h2 className="text-lg font-bold text-brand-text mt-8">3. Utilizzo del Sito</h2>
            <p>L'utente si impegna a:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Utilizzare il sito in conformità con la legislazione vigente.</li>
              <li>Non tentare di accedere in modo non autorizzato a sistemi o dati.</li>
              <li>Fornire informazioni veritiere nei moduli di contatto.</li>
              <li>Non riprodurre, distribuire o modificare i contenuti del sito senza autorizzazione scritta.</li>
            </ul>

            <h2 className="text-lg font-bold text-brand-text mt-8">4. Proprietà Intellettuale</h2>
            <p>Tutti i contenuti del sito (testi, grafica, loghi, software, design) sono di proprietà esclusiva di Storm X Digital S.R.L. o dei rispettivi licenzianti e sono protetti dalle leggi italiane e internazionali sulla proprietà intellettuale.</p>

            <h2 className="text-lg font-bold text-brand-text mt-8">5. Condizioni Commerciali</h2>
            <p>Le condizioni specifiche di ogni servizio (pricing, tempistiche, KPI, termini di pagamento) sono definite nella Proposta di Servizio individuale e non nei presenti Termini generali. Ogni Proposta di Servizio ha valore contrattuale una volta firmata da entrambe le parti.</p>

            <h2 className="text-lg font-bold text-brand-text mt-8">6. Limitazione di Responsabilità</h2>
            <p>Storm X Digital si impegna a fornire i servizi con la massima professionalità. Tuttavia:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>I risultati delle campagne outbound dipendono da molteplici fattori esterni non controllabili dalla Società.</li>
              <li>Storm X Digital non garantisce specifici volumi di vendita o fatturato.</li>
              <li>La Società non è responsabile per interruzioni del sito dovute a cause di forza maggiore o manutenzione.</li>
            </ul>

            <h2 className="text-lg font-bold text-brand-text mt-8">7. Riservatezza</h2>
            <p>Entrambe le parti si impegnano a mantenere la riservatezza delle informazioni commerciali e strategiche scambiate nell'ambito della collaborazione.</p>

            <h2 className="text-lg font-bold text-brand-text mt-8">8. Legge Applicabile e Foro Competente</h2>
            <p>I presenti Termini sono regolati dalla legge italiana. Per qualsiasi controversia derivante dall'interpretazione o dall'esecuzione dei presenti Termini, il Foro competente è quello di Trani (BA), Italia.</p>

            <h2 className="text-lg font-bold text-brand-text mt-8">9. Modifiche</h2>
            <p>Storm X Digital si riserva il diritto di modificare i presenti Termini in qualsiasi momento. Le modifiche saranno efficaci dalla data di pubblicazione su questa pagina.</p>

            <h2 className="text-lg font-bold text-brand-text mt-8">10. Contatti</h2>
            <p>Per domande relative ai presenti Termini, contattare: <strong>marcellodipierro@stormxdigital.com</strong></p>
          </div>
        ) : (
          <div className="prose-brand space-y-6 text-brand-muted text-sm leading-relaxed">
            <h2 className="text-lg font-bold text-brand-text mt-8">1. Introduction</h2>
            <p>These Terms of Service govern the use of the website stormxdigital.com and the services offered by <strong>Storm X Digital S.R.L.</strong> (hereinafter "Storm X", "we" or "the Company"), registered at Via Strada del Carro 24, 76011 Bisceglie (BA), Italy. VAT: 08789080721.</p>

            <h2 className="text-lg font-bold text-brand-text mt-8">2. Services Offered</h2>
            <p>Storm X Digital provides B2B outbound marketing services, including but not limited to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Design and management of multichannel outbound campaigns (email, LinkedIn, phone, WhatsApp).</li>
              <li>Technical infrastructure setup (domains, CRM, deliverability).</li>
              <li>Prospect research and profiling.</li>
              <li>Strategic consulting for commercial expansion.</li>
            </ul>
            <p>Specific services, deliverables, and timelines are defined in the individual contract (Service Proposal) agreed upon with the client.</p>

            <h2 className="text-lg font-bold text-brand-text mt-8">3. Website Usage</h2>
            <p>Users agree to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Use the site in compliance with applicable legislation.</li>
              <li>Not attempt unauthorized access to systems or data.</li>
              <li>Provide truthful information in contact forms.</li>
              <li>Not reproduce, distribute, or modify site content without written authorization.</li>
            </ul>

            <h2 className="text-lg font-bold text-brand-text mt-8">4. Intellectual Property</h2>
            <p>All site content (text, graphics, logos, software, design) is the exclusive property of Storm X Digital S.R.L. or its respective licensors and is protected by Italian and international intellectual property laws.</p>

            <h2 className="text-lg font-bold text-brand-text mt-8">5. Commercial Terms</h2>
            <p>Specific conditions for each service (pricing, timelines, KPIs, payment terms) are defined in the individual Service Proposal and not in these general Terms. Each Service Proposal has contractual value once signed by both parties.</p>

            <h2 className="text-lg font-bold text-brand-text mt-8">6. Limitation of Liability</h2>
            <p>Storm X Digital commits to providing services with the highest professionalism. However:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Outbound campaign results depend on multiple external factors beyond the Company's control.</li>
              <li>Storm X Digital does not guarantee specific sales volumes or revenue.</li>
              <li>The Company is not liable for site interruptions due to force majeure or maintenance.</li>
            </ul>

            <h2 className="text-lg font-bold text-brand-text mt-8">7. Confidentiality</h2>
            <p>Both parties commit to maintaining the confidentiality of commercial and strategic information exchanged during the collaboration.</p>

            <h2 className="text-lg font-bold text-brand-text mt-8">8. Governing Law and Jurisdiction</h2>
            <p>These Terms are governed by Italian law. For any disputes arising from the interpretation or execution of these Terms, the competent court is that of Trani (BA), Italy.</p>

            <h2 className="text-lg font-bold text-brand-text mt-8">9. Changes</h2>
            <p>Storm X Digital reserves the right to modify these Terms at any time. Changes will be effective from the date of publication on this page.</p>

            <h2 className="text-lg font-bold text-brand-text mt-8">10. Contact</h2>
            <p>For questions about these Terms, contact: <strong>marcellodipierro@stormxdigital.com</strong></p>
          </div>
        )}
      </div>
    </section>
  );
};

export default TermsOfService;
