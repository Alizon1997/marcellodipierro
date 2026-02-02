import React, { useEffect, useState } from 'react';
import { Mic, CheckCheck, Smartphone, Lock, Shield, UserCheck } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { TRANSLATIONS } from '../../constants';

const WhatsAppStrategy: React.FC = () => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];
  const { chat } = t.WHATSAPP;

  // Animation States: 
  // 0: Locked/Black
  // 1: Notification
  // 2: Chat UI Open (Empty)
  // 3: Typing 'Us'
  // 4: Message Sent + Voice Note
  // 5: Typing 'Prospect'
  // 6: Reply Received (Success)
  const [step, setStep] = useState(0);

  useEffect(() => {
    const sequence = async () => {
      while (true) {
        setStep(0); // Reset
        await new Promise(r => setTimeout(r, 1000));
        
        setStep(1); // Notification
        await new Promise(r => setTimeout(r, 2500));
        
        setStep(2); // Open App
        await new Promise(r => setTimeout(r, 1000));
        
        setStep(3); // Typing Us
        await new Promise(r => setTimeout(r, 1500));
        
        setStep(4); // Sent
        await new Promise(r => setTimeout(r, 2500));
        
        setStep(5); // Typing Prospect
        await new Promise(r => setTimeout(r, 2000));
        
        setStep(6); // Reply
        await new Promise(r => setTimeout(r, 5000)); // Hold success state
      }
    };
    sequence();
  }, []);

  return (
    <section className="py-24 bg-brand-dark border-t border-brand-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Strategy Copy */}
          <div className="order-2 lg:order-1">
            <h2 className="text-xs font-bold font-mono text-brand-accent uppercase tracking-widest mb-3">
              {t.WHATSAPP.label}
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {language === 'it' 
                ? <>Non è spam.<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-text to-brand-muted">È business alla velocità della luce.</span></>
                : <>It's not spam.<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-text to-brand-muted">It's business at light speed.</span></>
              }
            </h3>
            <p className="text-brand-muted text-lg mb-10 leading-relaxed">
              {t.WHATSAPP.subheadline}
            </p>

            <div className="space-y-8">
              {t.WHATSAPP.pillars.map((pillar, idx) => (
                <div key={idx} className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-10 h-10 bg-brand-surfaceHighlight rounded-lg flex items-center justify-center border border-brand-border">
                      {idx === 0 && <Shield className="w-5 h-5 text-green-500" />}
                      {idx === 1 && <Mic className="w-5 h-5 text-brand-accent" />}
                      {idx === 2 && <UserCheck className="w-5 h-5 text-yellow-500" />}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">{pillar.title}</h4>
                    <p className="text-sm text-brand-muted mt-1">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: 3D Phone Animation */}
          <div className="order-1 lg:order-2 flex justify-center perspective-1000">
            <div className="relative w-[300px] h-[600px] bg-brand-surface border-[8px] border-[#2A2B35] rounded-[3rem] shadow-2xl overflow-hidden transform rotate-y-[-10deg] hover:rotate-y-0 transition-transform duration-500 shadow-glow-lg">
              
              {/* Phone Notch/Status Bar */}
              <div className="absolute top-0 left-0 right-0 h-6 bg-[#2A2B35] z-30 flex justify-center rounded-b-xl mx-16">
                 <div className="w-16 h-4 bg-black rounded-b-lg"></div>
              </div>
              
              {/* SCREEN CONTENT */}
              <div className="w-full h-full bg-[#0b141a] relative font-sans">
                
                {/* STATE 0: LOCKED SCREEN */}
                <div className={`absolute inset-0 bg-black z-20 flex flex-col items-center pt-20 transition-opacity duration-500 ${step >= 2 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                   <div className="text-white text-5xl font-thin tracking-tighter">{chat.time}</div>
                   <div className="text-gray-400 text-sm mt-2">{chat.date}</div>
                   
                   {/* NOTIFICATION */}
                   <div className={`mt-12 w-[90%] bg-brand-surfaceHighlight/90 backdrop-blur rounded-xl p-3 shadow-lg border border-brand-border transform transition-all duration-500 ${step >= 1 ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center space-x-1">
                          <div className="w-4 h-4 bg-[#25D366] rounded-sm flex items-center justify-center"><Smartphone className="w-2 h-2 text-white" /></div>
                          <span className="text-[10px] text-gray-300 uppercase font-bold">WhatsApp</span>
                        </div>
                        <span className="text-[10px] text-gray-400">Adesso</span>
                      </div>
                      <div className="font-bold text-white text-sm">{chat.sender}</div>
                      <div className="text-gray-300 text-xs">{chat.notification}</div>
                   </div>

                   <div className="mt-auto mb-8 flex flex-col items-center animate-pulse">
                      <Lock className="w-4 h-4 text-white mb-2" />
                      <span className="text-[10px] text-gray-500">{chat.unlock}</span>
                   </div>
                </div>

                {/* STATE 2+: CHAT INTERFACE */}
                <div className={`absolute inset-0 flex flex-col transition-opacity duration-300 ${step >= 2 ? 'opacity-100' : 'opacity-0'}`}>
                  
                  {/* Chat Header */}
                  <div className="bg-[#1f2c34] p-3 pt-10 flex items-center space-x-3 shadow-md z-10">
                    <div className="w-8 h-8 bg-brand-accent rounded-full flex items-center justify-center text-white font-bold text-sm">M</div>
                    <div>
                      <div className="text-white text-sm font-bold">{chat.sender}</div>
                      <div className="text-green-500 text-[10px]">{chat.status}</div>
                    </div>
                  </div>

                  {/* Chat Body */}
                  <div className="flex-1 p-4 bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] bg-opacity-10 overflow-y-auto space-y-4">
                    
                    {/* ENCRYPTION NOTICE */}
                    <div className="flex justify-center my-4">
                      <div className="bg-[#1f2c34] text-[#ffd279] text-[9px] px-2 py-1 rounded-lg text-center shadow-sm">
                        {chat.encryption}
                      </div>
                    </div>

                    {/* US: TYPING INDICATOR */}
                    {step === 3 && (
                      <div className="flex justify-end animate-fade-in-up">
                         <div className="bg-[#005c4b] p-3 rounded-lg rounded-tr-none shadow-sm min-w-[60px]">
                            <div className="flex space-x-1">
                              <div className="w-1.5 h-1.5 bg-white/50 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                              <div className="w-1.5 h-1.5 bg-white/50 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                              <div className="w-1.5 h-1.5 bg-white/50 rounded-full animate-bounce"></div>
                            </div>
                         </div>
                      </div>
                    )}

                    {/* US: MESSAGE 1 (TEXT) */}
                    {step >= 4 && (
                      <div className="flex justify-end animate-fade-in-up">
                        <div className="bg-[#005c4b] text-white text-sm p-2 px-3 rounded-lg rounded-tr-none shadow-sm max-w-[85%] relative">
                          <p>{chat.message1}</p>
                          <div className="flex justify-end items-center mt-1 space-x-1">
                            <span className="text-[9px] text-white/60">09:42</span>
                            <CheckCheck className={`w-3 h-3 ${step >= 6 ? 'text-brand-accent' : 'text-gray-400'}`} />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* US: VOICE NOTE */}
                    {step >= 4 && (
                      <div className="flex justify-end animate-fade-in-up [animation-delay:200ms]">
                         <div className="bg-[#005c4b] p-3 rounded-lg rounded-tr-none shadow-sm w-[200px] flex items-center space-x-3">
                            <div className="w-8 h-8 rounded-full bg-brand-accent/20 flex items-center justify-center">
                               <Mic className="w-4 h-4 text-brand-accent fill-current" />
                            </div>
                            <div className="flex-1">
                               <div className="h-1 bg-white/30 rounded w-full flex items-center overflow-hidden">
                                  <div className="h-full bg-brand-accent w-[60%]"></div>
                               </div>
                               <div className="flex justify-between text-[9px] text-white/70 mt-1">
                                  <span>{chat.voiceTime}</span>
                                  <div className="flex items-center space-x-1">
                                    <span>09:42</span>
                                    <CheckCheck className={`w-3 h-3 ${step >= 6 ? 'text-brand-accent' : 'text-gray-400'}`} />
                                  </div>
                               </div>
                            </div>
                         </div>
                      </div>
                    )}

                     {/* PROSPECT: TYPING INDICATOR */}
                     {step === 5 && (
                      <div className="flex justify-start animate-fade-in-up">
                         <div className="bg-[#202c33] p-3 rounded-lg rounded-tl-none shadow-sm min-w-[60px]">
                            <div className="flex space-x-1">
                              <div className="w-1.5 h-1.5 bg-white/50 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                              <div className="w-1.5 h-1.5 bg-white/50 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                              <div className="w-1.5 h-1.5 bg-white/50 rounded-full animate-bounce"></div>
                            </div>
                         </div>
                      </div>
                    )}

                    {/* PROSPECT: REPLY */}
                    {step >= 6 && (
                      <div className="flex justify-start animate-fade-in-up">
                         <div className="bg-[#202c33] text-white text-sm p-2 px-3 rounded-lg rounded-tl-none shadow-sm max-w-[80%]">
                            <p>{chat.reply}</p>
                            <span className="text-[9px] text-white/60 block text-right mt-1">09:45</span>
                         </div>
                      </div>
                    )}

                  </div>

                  {/* Input Area */}
                  <div className="bg-[#1f2c34] p-2 flex items-center space-x-2">
                     <div className="bg-[#2A3942] rounded-full p-2 flex-1 h-9 flex items-center px-4">
                       <span className="text-gray-500 text-xs">{chat.inputPlaceholder}</span>
                     </div>
                     <div className="w-9 h-9 bg-[#005c4b] rounded-full flex items-center justify-center">
                       <Mic className="w-4 h-4 text-white" />
                     </div>
                  </div>

                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhatsAppStrategy;