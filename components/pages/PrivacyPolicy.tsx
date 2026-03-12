import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const PrivacyPolicy: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section className="py-20 bg-brand-dark min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-brand-text mb-2">Privacy Policy</h1>
        <p className="text-sm text-brand-muted mb-10">
          {language === 'it' ? 'Ultimo aggiornamento: 12 Marzo 2026' : 'Last updated: March 12, 2026'}
        </p>

        {language === 'it' ? (
          <div className="prose-brand space-y-6 text-brand-muted text-sm leading-relaxed">
            <h2 className="text-lg font-bold text-brand-text mt-8">1. Titolare del Trattamento</h2>
            <p>Il titolare del trattamento dei dati personali è <strong>Storm X Digital S.R.L.</strong>, con sede legale in Via Strada del Carro 24, 76011 Bisceglie (BA), Italia. P.IVA: 08789080721. PEC: stormxdigital@pec.it.</p>

            <h2 className="text-lg font-bold text-brand-text mt-8">2. Dati Raccolti</h2>
            <p>Raccogliamo le seguenti categorie di dati personali:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Dati di contatto:</strong> nome, cognome, email, numero di telefono, nome dell'azienda — forniti volontariamente tramite i moduli sul sito.</li>
              <li><strong>Dati di navigazione:</strong> indirizzo IP, tipo di browser, pagine visitate, durata della sessione — raccolti automaticamente tramite cookie e tecnologie simili.</li>
              <li><strong>Dati di comunicazione:</strong> contenuto dei messaggi inviati tramite i moduli di contatto o email.</li>
            </ul>

            <h2 className="text-lg font-bold text-brand-text mt-8">3. Finalità del Trattamento</h2>
            <p>I dati personali sono trattati per le seguenti finalità:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Rispondere alle richieste di contatto e fornire informazioni sui servizi.</li>
              <li>Gestire le relazioni commerciali e l'erogazione dei servizi.</li>
              <li>Inviare comunicazioni di marketing (previo consenso esplicito).</li>
              <li>Analisi statistiche anonime per migliorare il sito e i servizi.</li>
              <li>Adempiere agli obblighi di legge.</li>
            </ul>

            <h2 className="text-lg font-bold text-brand-text mt-8">4. Base Giuridica</h2>
            <p>Il trattamento dei dati si basa su: consenso dell'interessato, esecuzione di un contratto o misure precontrattuali, legittimo interesse del titolare, adempimento di obblighi legali.</p>

            <h2 className="text-lg font-bold text-brand-text mt-8">5. Conservazione dei Dati</h2>
            <p>I dati personali sono conservati per il tempo strettamente necessario alle finalità per cui sono stati raccolti e comunque non oltre 24 mesi dall'ultimo contatto, salvo obblighi di legge che ne richiedano una conservazione più lunga.</p>

            <h2 className="text-lg font-bold text-brand-text mt-8">6. Condivisione dei Dati</h2>
            <p>I dati personali non vengono venduti a terzi. Possono essere condivisi con:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Fornitori di servizi tecnologici (hosting, CRM, email marketing) che agiscono come responsabili del trattamento.</li>
              <li>Autorità competenti, quando richiesto dalla legge.</li>
            </ul>

            <h2 className="text-lg font-bold text-brand-text mt-8">7. Diritti dell'Interessato</h2>
            <p>Ai sensi del Regolamento UE 2016/679 (GDPR), l'interessato ha diritto di:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Accedere ai propri dati personali.</li>
              <li>Richiedere la rettifica o la cancellazione dei dati.</li>
              <li>Opporsi al trattamento o richiederne la limitazione.</li>
              <li>Richiedere la portabilità dei dati.</li>
              <li>Revocare il consenso in qualsiasi momento.</li>
              <li>Proporre reclamo al Garante per la Protezione dei Dati Personali.</li>
            </ul>
            <p>Per esercitare i propri diritti, scrivere a: <strong>marcellodipierro@stormxdigital.com</strong></p>

            <h2 className="text-lg font-bold text-brand-text mt-8">8. Trasferimento dei Dati</h2>
            <p>Alcuni dei nostri fornitori di servizi possono essere situati al di fuori dello Spazio Economico Europeo. In tali casi, il trasferimento dei dati avviene nel rispetto delle garanzie previste dal GDPR (clausole contrattuali standard, decisioni di adeguatezza).</p>

            <h2 className="text-lg font-bold text-brand-text mt-8">9. Sicurezza</h2>
            <p>Adottiamo misure tecniche e organizzative adeguate per proteggere i dati personali da accessi non autorizzati, perdita, distruzione o alterazione.</p>

            <h2 className="text-lg font-bold text-brand-text mt-8">10. Modifiche</h2>
            <p>Ci riserviamo il diritto di aggiornare questa Privacy Policy. Eventuali modifiche saranno pubblicate su questa pagina con indicazione della data di ultimo aggiornamento.</p>
          </div>
        ) : (
          <div className="prose-brand space-y-6 text-brand-muted text-sm leading-relaxed">
            <h2 className="text-lg font-bold text-brand-text mt-8">1. Data Controller</h2>
            <p>The data controller is <strong>Storm X Digital S.R.L.</strong>, registered at Via Strada del Carro 24, 76011 Bisceglie (BA), Italy. VAT: 08789080721. PEC: stormxdigital@pec.it.</p>

            <h2 className="text-lg font-bold text-brand-text mt-8">2. Data Collected</h2>
            <p>We collect the following categories of personal data:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Contact data:</strong> name, email, phone number, company name — provided voluntarily through forms on the site.</li>
              <li><strong>Browsing data:</strong> IP address, browser type, pages visited, session duration — collected automatically through cookies and similar technologies.</li>
              <li><strong>Communication data:</strong> content of messages sent through contact forms or email.</li>
            </ul>

            <h2 className="text-lg font-bold text-brand-text mt-8">3. Purpose of Processing</h2>
            <p>Personal data is processed for the following purposes:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Responding to contact requests and providing information about services.</li>
              <li>Managing commercial relationships and service delivery.</li>
              <li>Sending marketing communications (with explicit consent).</li>
              <li>Anonymous statistical analysis to improve the site and services.</li>
              <li>Compliance with legal obligations.</li>
            </ul>

            <h2 className="text-lg font-bold text-brand-text mt-8">4. Legal Basis</h2>
            <p>Data processing is based on: consent of the data subject, performance of a contract or pre-contractual measures, legitimate interest of the controller, compliance with legal obligations.</p>

            <h2 className="text-lg font-bold text-brand-text mt-8">5. Data Retention</h2>
            <p>Personal data is retained for the time strictly necessary for the purposes for which it was collected and in any case no longer than 24 months from the last contact, unless legal obligations require longer retention.</p>

            <h2 className="text-lg font-bold text-brand-text mt-8">6. Data Sharing</h2>
            <p>Personal data is not sold to third parties. It may be shared with:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Technology service providers (hosting, CRM, email marketing) acting as data processors.</li>
              <li>Competent authorities, when required by law.</li>
            </ul>

            <h2 className="text-lg font-bold text-brand-text mt-8">7. Data Subject Rights</h2>
            <p>Under EU Regulation 2016/679 (GDPR), data subjects have the right to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Access their personal data.</li>
              <li>Request rectification or deletion of data.</li>
              <li>Object to processing or request its restriction.</li>
              <li>Request data portability.</li>
              <li>Withdraw consent at any time.</li>
              <li>Lodge a complaint with the relevant Data Protection Authority.</li>
            </ul>
            <p>To exercise your rights, write to: <strong>marcellodipierro@stormxdigital.com</strong></p>

            <h2 className="text-lg font-bold text-brand-text mt-8">8. Data Transfers</h2>
            <p>Some of our service providers may be located outside the European Economic Area. In such cases, data transfers are carried out in compliance with GDPR safeguards (standard contractual clauses, adequacy decisions).</p>

            <h2 className="text-lg font-bold text-brand-text mt-8">9. Security</h2>
            <p>We adopt appropriate technical and organizational measures to protect personal data from unauthorized access, loss, destruction, or alteration.</p>

            <h2 className="text-lg font-bold text-brand-text mt-8">10. Changes</h2>
            <p>We reserve the right to update this Privacy Policy. Any changes will be published on this page with an indication of the last update date.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default PrivacyPolicy;
