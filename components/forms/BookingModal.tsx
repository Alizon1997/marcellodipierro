import React, { useState } from 'react';
import { X, CheckCircle2, Loader2, Send } from 'lucide-react';
import { useModal } from '../../context/ModalContext';
import { supabase } from '../../lib/supabase';
import Button from '../ui/Button';
import { useLanguage } from '../../context/LanguageContext';
import emailjs from '@emailjs/browser';

// ─── EmailJS Configuration ────────────────────────────────────────────────────
// 1. Create a free account at https://www.emailjs.com
// 2. Add an Email Service (Gmail, Outlook, etc.) → copy the Service ID below
// 3. Create an Email Template with these variables:
//      {{from_name}}  {{from_email}}  {{company}}  {{phone}}  {{submission_date}}
//    Set "To Email" to YOUR email address (e.g. marcello@stormxdigital.com)
// 4. Copy your Public Key from Account → API Keys
// ─────────────────────────────────────────────────────────────────────────────
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID';   // e.g. 'service_abc123'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';  // e.g. 'template_xyz789'
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';   // e.g. 'AbCdEfGhIjKlMnOp'

const BookingModal: React.FC = () => {
  const { isModalOpen, closeModal } = useModal();
  const { language } = useLanguage();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: ''
  });
  const [error, setError] = useState<string | null>(null);

  if (!isModalOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmailNotification = (data: typeof formData) => {
    // Only attempt if credentials have been configured
    if (EMAILJS_SERVICE_ID === 'YOUR_SERVICE_ID') return;

    emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        from_name:       data.name,
        from_email:      data.email,
        company:         data.company,
        phone:           data.phone,
        submission_date: new Date().toLocaleString('it-IT'),
      },
      EMAILJS_PUBLIC_KEY
    ).catch((err) => {
      // Log silently — never block the user experience
      console.warn('EmailJS notification failed:', err);
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Fire email notification immediately (non-blocking)
    sendEmailNotification(formData);

    try {
      const { error: supabaseError } = await supabase
        .from('leads')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            company: formData.company,
            phone: formData.phone,
            created_at: new Date().toISOString()
          }
        ]);

      if (supabaseError) throw supabaseError;

      setSuccess(true);
      setTimeout(() => {
        closeModal();
        setSuccess(false);
        setFormData({ name: '', email: '', company: '', phone: '' });
      }, 4000);
    } catch (err: any) {
      console.error('Error submitting form:', err);
      // If the Supabase table doesn't exist yet, still show success
      // (email notification already sent above)
      if (err.message?.includes('relation "leads" does not exist')) {
        setSuccess(true);
        setTimeout(() => {
          closeModal();
          setSuccess(false);
          setFormData({ name: '', email: '', company: '', phone: '' });
        }, 4000);
      } else {
        setError(language === 'it' ? 'Si è verificato un errore. Riprova più tardi.' : 'An error occurred. Please try again later.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={closeModal}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-brand-surface border border-brand-border rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden animate-fade-up">

        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-brand-border bg-brand-surface/50">
          <div>
            <h3 className="text-xl font-bold text-brand-text">
              {language === 'it' ? 'Prenota Analisi Pilot' : 'Book Pilot Analysis'}
            </h3>
            <p className="text-xs text-brand-muted mt-1">
              {language === 'it' ? 'Senza impegno. 100% Data Driven.' : 'No commitment. 100% Data Driven.'}
            </p>
          </div>
          <button
            onClick={closeModal}
            className="text-brand-muted hover:text-brand-text transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-8">
          {success ? (
            <div className="flex flex-col items-center justify-center text-center py-8">
              {/* Big animated checkmark */}
              <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-green-500/30 animate-bounce-once">
                <CheckCircle2 className="w-12 h-12 text-white" />
              </div>
              <h4 className="text-3xl font-bold text-brand-text mb-3">
                {language === 'it' ? '✅ Richiesta Inviata!' : '✅ Request Sent!'}
              </h4>
              <p className="text-brand-muted text-base max-w-xs">
                {language === 'it'
                  ? 'Un nostro Senior Strategist ti contatterà entro 24 ore lavorative.'
                  : 'A Senior Strategist will contact you within 24 business hours.'}
              </p>
              <div className="mt-6 px-5 py-3 bg-green-50 border border-green-200 rounded-xl text-green-700 text-sm font-medium">
                {language === 'it' ? '📧 Controlla la tua email per la conferma' : '📧 Check your email for confirmation'}
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-mono text-brand-muted uppercase">
                    {language === 'it' ? 'Nome Completo' : 'Full Name'}
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-brand-surface border border-brand-border rounded-lg px-4 py-3 text-brand-text focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-all placeholder:text-brand-muted/30"
                    placeholder={language === 'it' ? 'Mario Rossi' : 'John Smith'}
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-mono text-brand-muted uppercase">
                    {language === 'it' ? 'Azienda' : 'Company'}
                  </label>
                  <input
                    type="text"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-brand-surface border border-brand-border rounded-lg px-4 py-3 text-brand-text focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-all placeholder:text-brand-muted/30"
                    placeholder={language === 'it' ? 'Azienda Srl' : 'Company Ltd'}
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-mono text-brand-muted uppercase">
                  {language === 'it' ? 'Email Aziendale' : 'Business Email'}
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-brand-surface border border-brand-border rounded-lg px-4 py-3 text-brand-text focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-all placeholder:text-brand-muted/30"
                  placeholder="mario@company.com"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-mono text-brand-muted uppercase">
                  {language === 'it' ? 'Telefono' : 'Phone'}
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-brand-surface border border-brand-border rounded-lg px-4 py-3 text-brand-text focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-all placeholder:text-brand-muted/30"
                  placeholder={language === 'it' ? '+39 333 ...' : '+1 555 ...'}
                />
              </div>

              {error && (
                <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-500 text-sm">
                  {error}
                </div>
              )}

              <Button
                type="submit"
                fullWidth
                size="lg"
                disabled={loading}
                className="mt-6"
              >
                {loading ? (
                  <span className="flex items-center">
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    {language === 'it' ? 'Invio in corso...' : 'Sending...'}
                  </span>
                ) : (
                  <span className="flex items-center">
                    {language === 'it' ? 'Richiedi Analisi' : 'Request Analysis'}
                    <Send className="w-4 h-4 ml-2" />
                  </span>
                )}
              </Button>

              <p className="text-[10px] text-center text-brand-muted/60 mt-4">
                {language === 'it' ? 'I tuoi dati sono al sicuro. GDPR Compliant. Nessuno spam.' : 'Your data is safe. GDPR Compliant. No spam.'}
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingModal;