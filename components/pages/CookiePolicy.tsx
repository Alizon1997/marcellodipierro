import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const CookiePolicy: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section className="py-20 bg-brand-dark min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-brand-text mb-2">Cookie Policy</h1>
        <p className="text-sm text-brand-muted mb-10">
          {language === 'it' ? 'Ultimo aggiornamento: 12 Marzo 2026' : 'Last updated: March 12, 2026'}
        </p>

        {language === 'it' ? (
          <div className="prose-brand space-y-6 text-brand-muted text-sm leading-relaxed">
            <h2 className="text-lg font-bold text-brand-text mt-8">1. Cosa sono i Cookie</h2>
            <p>I cookie sono piccoli file di testo che vengono memorizzati sul dispositivo dell'utente quando visita un sito web. Vengono utilizzati per far funzionare il sito in modo efficiente e per fornire informazioni ai proprietari del sito.</p>

            <h2 className="text-lg font-bold text-brand-text mt-8">2. Cookie Utilizzati</h2>

            <h3 className="text-base font-bold text-brand-text mt-4">Cookie Tecnici (Necessari)</h3>
            <p>Questi cookie sono essenziali per il funzionamento del sito e non possono essere disattivati. Includono:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Cookie di sessione per la navigazione.</li>
              <li>Cookie per le preferenze di lingua.</li>
              <li>Cookie per la sicurezza del sito.</li>
            </ul>

            <h3 className="text-base font-bold text-brand-text mt-4">Cookie Analitici</h3>
            <p>Utilizziamo cookie analitici per comprendere come i visitatori interagiscono con il sito. Questi cookie raccolgono informazioni in forma anonima e aggregata. Servizi utilizzati:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Vercel Analytics:</strong> analisi delle performance e del traffico del sito.</li>
            </ul>

            <h3 className="text-base font-bold text-brand-text mt-4">Cookie di Terze Parti</h3>
            <p>Alcuni servizi di terze parti integrati nel sito possono impostare i propri cookie:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Cal.com:</strong> per la prenotazione di appuntamenti.</li>
              <li><strong>Supabase:</strong> per la gestione dei moduli di contatto.</li>
            </ul>

            <h2 className="text-lg font-bold text-brand-text mt-8">3. Gestione dei Cookie</h2>
            <p>L'utente può gestire le preferenze relative ai cookie direttamente attraverso le impostazioni del proprio browser. È possibile:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Accettare o rifiutare tutti i cookie.</li>
              <li>Essere avvisati ogni volta che viene impostato un cookie.</li>
              <li>Eliminare i cookie già memorizzati.</li>
            </ul>
            <p>La disattivazione dei cookie tecnici potrebbe compromettere il corretto funzionamento del sito.</p>

            <h2 className="text-lg font-bold text-brand-text mt-8">4. Durata dei Cookie</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Cookie di sessione:</strong> vengono eliminati alla chiusura del browser.</li>
              <li><strong>Cookie persistenti:</strong> rimangono sul dispositivo per un periodo definito (massimo 12 mesi).</li>
            </ul>

            <h2 className="text-lg font-bold text-brand-text mt-8">5. Contatti</h2>
            <p>Per domande relative alla nostra Cookie Policy, contattare: <strong>marcellodipierro@stormxdigital.com</strong></p>
          </div>
        ) : (
          <div className="prose-brand space-y-6 text-brand-muted text-sm leading-relaxed">
            <h2 className="text-lg font-bold text-brand-text mt-8">1. What Are Cookies</h2>
            <p>Cookies are small text files stored on a user's device when visiting a website. They are used to make the site function efficiently and to provide information to site owners.</p>

            <h2 className="text-lg font-bold text-brand-text mt-8">2. Cookies Used</h2>

            <h3 className="text-base font-bold text-brand-text mt-4">Technical Cookies (Necessary)</h3>
            <p>These cookies are essential for the site to function and cannot be disabled. They include:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Session cookies for navigation.</li>
              <li>Language preference cookies.</li>
              <li>Site security cookies.</li>
            </ul>

            <h3 className="text-base font-bold text-brand-text mt-4">Analytics Cookies</h3>
            <p>We use analytics cookies to understand how visitors interact with the site. These cookies collect information in an anonymous, aggregated form. Services used:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Vercel Analytics:</strong> site performance and traffic analysis.</li>
            </ul>

            <h3 className="text-base font-bold text-brand-text mt-4">Third-Party Cookies</h3>
            <p>Some third-party services integrated into the site may set their own cookies:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Cal.com:</strong> for appointment booking.</li>
              <li><strong>Supabase:</strong> for contact form management.</li>
            </ul>

            <h2 className="text-lg font-bold text-brand-text mt-8">3. Managing Cookies</h2>
            <p>Users can manage cookie preferences directly through their browser settings. You can:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Accept or reject all cookies.</li>
              <li>Be notified each time a cookie is set.</li>
              <li>Delete cookies already stored.</li>
            </ul>
            <p>Disabling technical cookies may compromise the proper functioning of the site.</p>

            <h2 className="text-lg font-bold text-brand-text mt-8">4. Cookie Duration</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Session cookies:</strong> deleted when the browser is closed.</li>
              <li><strong>Persistent cookies:</strong> remain on the device for a defined period (maximum 12 months).</li>
            </ul>

            <h2 className="text-lg font-bold text-brand-text mt-8">5. Contact</h2>
            <p>For questions about our Cookie Policy, contact: <strong>marcellodipierro@stormxdigital.com</strong></p>
          </div>
        )}
      </div>
    </section>
  );
};

export default CookiePolicy;
