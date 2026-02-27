import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { TRANSLATIONS } from '../../constants';
import Logo from '../ui/Logo';

const Footer: React.FC = () => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];

  return (
    <footer className="bg-brand-dark text-brand-muted py-16 border-t border-brand-border relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-brand-accent/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-14">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-5">
              <Logo className="h-10 w-auto" />
            </div>
            <p className="text-sm text-brand-muted leading-relaxed mb-4">
              {t.UI.footerText}
            </p>
            {/* GDPR badge */}
            <span className="inline-flex items-center gap-1.5 text-xs text-green-600 bg-green-500/10 border border-green-500/20 px-2.5 py-1 rounded-full font-medium">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
              GDPR Compliant
            </span>
          </div>

          <div>
            <h4 className="text-brand-text text-xs font-bold uppercase tracking-widest mb-5">{language === 'it' ? 'Azienda' : 'Company'}</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-brand-accent transition-colors hover:translate-x-0.5 inline-block">{language === 'it' ? 'Chi Siamo' : 'About Us'}</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors hover:translate-x-0.5 inline-block">{language === 'it' ? 'Carriere' : 'Careers'}</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors hover:translate-x-0.5 inline-block">{language === 'it' ? 'Contatti' : 'Contact'}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-brand-text text-xs font-bold uppercase tracking-widest mb-5">{language === 'it' ? 'Risorse' : 'Resources'}</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="/blog" className="hover:text-brand-accent transition-colors hover:translate-x-0.5 inline-block">Blog</a></li>
              <li><a href="#case-studies" className="hover:text-brand-accent transition-colors hover:translate-x-0.5 inline-block">{language === 'it' ? 'Casi Studio' : 'Case Studies'}</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors hover:translate-x-0.5 inline-block">{language === 'it' ? 'Calcolatore ROI' : 'ROI Calculator'}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-brand-text text-xs font-bold uppercase tracking-widest mb-5">{language === 'it' ? 'Legale' : 'Legal'}</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-brand-accent transition-colors hover:translate-x-0.5 inline-block">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors hover:translate-x-0.5 inline-block">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors hover:translate-x-0.5 inline-block">{language === 'it' ? 'Termini di Servizio' : 'Terms of Service'}</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-brand-border">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-brand-muted">
            <div className="space-y-1">
              <p className="font-bold text-brand-text tracking-wide">STORM X DIGITAL S.R.L.</p>
              <p>VAT/P.Iva: 08789080721 | PEC: stormxdigital@pec.it</p>
              <p>Via Strada del Carro 24 — 76011 Bisceglie (BA), Italy</p>
            </div>
            <p className="opacity-50">© {new Date().getFullYear()} StormX Digital SRL. {t.UI.rights}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;