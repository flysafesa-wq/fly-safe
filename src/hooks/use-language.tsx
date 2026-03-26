import React, { createContext, useContext, useEffect, useState } from 'react';
import { i18n, Language } from '@/lib/i18n';

type LanguageContextType = {
  language: Language;
  t: typeof i18n.en;
  toggleLanguage: () => void;
  dir: 'rtl' | 'ltr';
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const params = new URLSearchParams(window.location.search);
    const urlLang = params.get('lang');
    if (urlLang === 'ar' || urlLang === 'en') return urlLang;
    const saved = localStorage.getItem('flysafe_lang');
    return (saved as Language) || 'ar';
  });

  useEffect(() => {
    localStorage.setItem('flysafe_lang', language);
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'ar' ? 'en' : 'ar');
  };

  const value = {
    language,
    t: i18n[language],
    toggleLanguage,
    dir: language === 'ar' ? 'rtl' : 'ltr' as const
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
