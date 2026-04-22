import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../config/translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('es');

  useEffect(() => {
    const savedLang = localStorage.getItem('language');
    if (savedLang) {
      setLanguage(savedLang);
    } else {
      const browserLang = navigator.language.split('-')[0];
      if (browserLang === 'en' || browserLang === 'es') {
        setLanguage(browserLang);
      }
    }
  }, []);

  const toggleLanguage = () => {
    const newLang = language === 'es' ? 'en' : 'es';
    setLanguage(newLang);
    localStorage.setItem('language', newLang);
  };

  const t = (path) => {
    const keys = path.split('.');
    let result = translations[language];
    for (const key of keys) {
      if (result[key]) {
        result = result[key];
      } else {
        return path;
      }
    }
    return result;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
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
