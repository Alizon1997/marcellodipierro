import React from 'react';
import Button from '../ui/Button';
import { ShieldCheck } from 'lucide-react';
import { useModal } from '../../context/ModalContext';
import { useLanguage } from '../../context/LanguageContext';
import { TRANSLATIONS } from '../../constants';

const Pricing: React.FC = () => {
  const { openModal } = useModal();
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];

  return (
    <section id="servizi" className="py-20 md:py-32 bg-brand-dark border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
             {language === 'it' ? 'Offerta Pilot' : 'Pilot Offer'}
          </h2>
          <p className="text-brand-muted max-w-2xl mx-auto">
            {language === 'it' 
              ? "Un'offerta irrazionale per validare il nostro metodo sulla tua azienda."
              : "An irrational offer to validate our method on your company."}
            <br className="hidden md:block"/> 
            {language === 'it' 
              ? "Nessun contratto a lungo termine. Solo risultati."
              : "No long-term contracts. Just results."}
          </p>
        </div>

        {/* Value Stack Component */}
        <div className="max-w-xl mx-auto">
          {/* Receipt Top Edge Decoration (Optional visual flare) */}
          <div className="h-2 bg-brand-surface w-full rounded-t-xl border-x border-t border-brand-border opacity-50 mx-auto w-[98%]"></div>

          <div className="bg-brand-surface border border-brand-border rounded-xl p-8 md:p-12 shadow-2xl relative overflow-hidden font-mono group hover:border-brand-accent/30 transition-colors duration-500">
            
            {/* Top Glow */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-accent to-transparent opacity-50"></div>
            
            {/* Receipt Header */}
            <div className="text-center mb-10">
               <div className="inline-block border border-brand-border rounded px-3 py-1 text-xs text-brand-muted tracking-widest uppercase mb-4">
                 Statement #2024-PLT
               </div>
               <h3 className="text-xl text-white uppercase tracking-widest">
                 {language === 'it' ? 'Riepilogo Valore' : 'Value Summary'}
               </h3>
               <p className="text-xs text-brand-muted mt-2">Storm X Digital Outbound System</p>
            </div>

            {/* Line Items */}
            <div className="space-y-5 text-sm md:text-base">
              
              {/* Item 1 */}
              <div className="flex items-baseline w-full group/item">
                <span className="text-brand-muted whitespace-nowrap group-hover/item:text-white transition-colors">
                    {language === 'it' ? 'Setup tecnico & domini' : 'Technical Setup & Domains'}
                </span>
                <span className="flex-grow mx-3 border-b border-dotted border-brand-border/60 relative -top-1"></span>
                <span className="text-white whitespace-nowrap">€ 300 <span className="text-green-500 text-xs ml-1">({language === 'it' ? 'Incluso' : 'Included'})</span></span>
              </div>

              {/* Item 2 */}
              <div className="flex items-baseline w-full group/item">
                <span className="text-brand-muted whitespace-nowrap group-hover/item:text-white transition-colors">
                    {language === 'it' ? 'Gestione campagne multicanale' : 'Multichannel Campaign Mgmt'}
                </span>
                <span className="flex-grow mx-3 border-b border-dotted border-brand-border/60 relative -top-1"></span>
                <span className="text-white whitespace-nowrap">€ 1.000 <span className="text-green-500 text-xs ml-1">({language === 'it' ? 'Incluso' : 'Included'})</span></span>
              </div>

              {/* Item 3 */}
              <div className="flex items-baseline w-full group/item">
                <span className="text-brand-muted whitespace-nowrap group-hover/item:text-white transition-colors">
                    {language === 'it' ? 'Human Cold Calling Pro' : 'Human Cold Calling Pro'}
                </span>
                <span className="flex-grow mx-3 border-b border-dotted border-brand-border/60 relative -top-1"></span>
                <span className="text-white whitespace-nowrap">€ 1.000 <span className="text-green-500 text-xs ml-1">({language === 'it' ? 'Incluso' : 'Included'})</span></span>
              </div>

              {/* Item 4 */}
              <div className="flex items-baseline w-full group/item">
                <span className="text-brand-muted whitespace-nowrap group-hover/item:text-white transition-colors">
                    {language === 'it' ? 'Data Intelligence' : 'Data Intelligence'}
                </span>
                <span className="flex-grow mx-3 border-b border-dotted border-brand-border/60 relative -top-1"></span>
                <span className="text-white whitespace-nowrap">€ 500 <span className="text-green-500 text-xs ml-1">({language === 'it' ? 'Incluso' : 'Included'})</span></span>
              </div>

            </div>

            {/* Divider */}
            <div className="my-8 border-t-2 border-dashed border-brand-border relative">
              <div className="absolute -left-14 -top-3 w-6 h-6 bg-brand-dark rounded-full"></div>
              <div className="absolute -right-14 -top-3 w-6 h-6 bg-brand-dark rounded-full"></div>
            </div>

            {/* Totals Calculation */}
            <div className="flex flex-col items-center space-y-1">
               <div className="w-full flex justify-between items-center text-brand-muted text-sm px-4">
                  <span className="uppercase tracking-widest">{t.UI.totalValue}</span>
                  <span className="line-through decoration-red-500 decoration-[2px] text-lg opacity-60">€ 3.700</span>
               </div>
               
               <div className="w-full bg-brand-surfaceHighlight/50 rounded-lg p-6 mt-4 border border-brand-border flex flex-col items-center justify-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-brand-accent/10 rounded-full blur-2xl"></div>
                  <span className="text-brand-accent text-xs uppercase font-bold tracking-[0.2em] mb-2">{t.UI.yourPrice}</span>
                  <div className="text-6xl md:text-7xl font-bold text-brand-accent tracking-tighter drop-shadow-lg">
                    €750<span className="text-lg md:text-xl text-brand-muted font-normal align-baseline ml-1">{t.UI.month}</span>
                  </div>
               </div>
            </div>

            {/* CTA Section inside receipt */}
            <div className="mt-8">
              <Button 
                fullWidth 
                size="lg" 
                onClick={openModal}
                className="h-14 text-lg font-mono shadow-glow hover:shadow-glow-lg transition-all transform hover:-translate-y-1"
              >
                {t.UI.activatePilot}
              </Button>
              <div className="flex justify-center items-center mt-4 text-xs text-brand-muted space-x-2">
                <ShieldCheck className="w-4 h-4 text-brand-accent" />
                <span>{t.UI.guarantee}</span>
              </div>
            </div>

          </div>
          
          {/* Receipt Shadow */}
          <div className="mx-auto w-[90%] h-4 bg-black/40 blur-xl rounded-[100%]"></div>
        </div>

        {/* Alternative Links */}
        <div className="mt-16 text-center">
            <p className="text-sm text-brand-muted">
                {language === 'it' ? 'Hai esigenze Enterprise?' : 'Enterprise Needs?'}{' '}
                <a href="#" className="text-white hover:text-brand-accent border-b border-brand-border hover:border-brand-accent transition-colors pb-0.5">
                    {language === 'it' ? 'Scarica il listino completo.' : 'Download full price list.'}
                </a>
            </p>
        </div>

      </div>
    </section>
  );
};

export default Pricing;