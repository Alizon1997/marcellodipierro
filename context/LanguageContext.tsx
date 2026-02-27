import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

type Language = 'it' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Initialize directly from localStorage to avoid flash of wrong language
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('language');
      return saved === 'en' ? 'en' : 'it';
    } catch {
      return 'it';
    }
  });

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
  }, []);

  // Use functional state update to avoid stale closure issues with rapid clicks
  const toggleLanguage = useCallback(() => {
    setLanguageState(prev => {
      const next = prev === 'it' ? 'en' : 'it';
      localStorage.setItem('language', next);
      document.documentElement.lang = next;
      return next;
    });
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
