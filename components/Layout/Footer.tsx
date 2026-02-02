import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { TRANSLATIONS } from '../../constants';
import Logo from '../ui/Logo';

const Footer: React.FC = () => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];

  return (
    <footer className="bg-brand-dark text-brand-muted py-12 border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
               <Logo className="h-10 w-auto" />
            </div>
            <p className="text-sm text-brand-muted mb-4">
              {t.UI.footerText}
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">{language === 'it' ? 'Azienda' : 'Company'}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-brand-accent transition-colors">{language === 'it' ? 'Chi Siamo' : 'About Us'}</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">{language === 'it' ? 'Carriere' : 'Careers'}</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">{language === 'it' ? 'Contatti' : 'Contact'}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">{language === 'it' ? 'Risorse' : 'Resources'}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-brand-accent transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">{language === 'it' ? 'Casi Studio' : 'Case Studies'}</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">{language === 'it' ? 'Calcolatore ROI' : 'ROI Calculator'}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">{language === 'it' ? 'Legale' : 'Legal'}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-brand-accent transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">{language === 'it' ? 'Termini di Servizio' : 'Terms of Service'}</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-brand-border flex flex-col items-center text-center space-y-3 text-xs text-brand-muted">
          <p className="font-semibold text-brand-text">STORM X DIGITAL S.R.L.</p>
          <p>VAT/P.Iva: 08789080721 | PEC: stormxdigital@pec.it</p>
          <p>ADDRESS: STRADA DEL CARRO 24 - 76011 - BISCEGLIE (BA).</p>
          <p className="mt-4 opacity-60">© {new Date().getFullYear()} StormX Digital SRL. {t.UI.rights}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;