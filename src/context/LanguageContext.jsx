import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../config/translations';

const LanguageContext = createContext();

export const SUPPORTED_LANGUAGES = [
  { code: 'es', label: 'ES' },
  { code: 'en', label: 'EN' },
  { code: 'it', label: 'IT' },
];

export const LanguageProvider = ({ children }) => {
  const [language, setLanguageState] = useState('es');

  useEffect(() => {
    const savedLang = localStorage.getItem('language');
    if (savedLang && (savedLang === 'es' || savedLang === 'en' || savedLang === 'it')) {
      setLanguageState(savedLang);
    } else {
      // Default strictly to 'es' as primary
      setLanguageState('es');
    }
  }, []);

  const setLanguage = (newLang) => {
    if (newLang === 'es' || newLang === 'en' || newLang === 'it') {
      setLanguageState(newLang);
      localStorage.setItem('language', newLang);
    }
  };

  const toggleLanguage = () => {
    const codes = ['es', 'en', 'it'];
    const nextIdx = (codes.indexOf(language) + 1) % codes.length;
    setLanguage(codes[nextIdx]);
  };

  const t = (path) => {
    const keys = path.split('.');
    let current = translations[language];
    for (const key of keys) {
      if (current && current[key] !== undefined) {
        current = current[key];
      } else {
        // Fallback to Spanish if key is not found in selected language
        let fallback = translations.es;
        for (const k of keys) {
          if (fallback && fallback[k] !== undefined) {
            fallback = fallback[k];
          } else {
            return path;
          }
        }
        return fallback;
      }
    }
    return current;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
