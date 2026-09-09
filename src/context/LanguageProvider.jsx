import { useCallback, useEffect, useMemo, useState } from 'react';
import { STORAGE_KEYS } from '../constants';
import { translations } from '../data/translations';
import { LanguageContext } from './language-context';

function getInitialLanguage() {
  const savedLanguage = localStorage.getItem(STORAGE_KEYS.language);
  return savedLanguage === 'ar' || savedLanguage === 'en' ? savedLanguage : 'en';
}

function getNestedValue(source, path) {
  return path.split('.').reduce((value, key) => value?.[key], source);
}

export default function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(getInitialLanguage);

  useEffect(() => {
    const direction = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
    document.documentElement.dir = direction;
    document.title = `${translations[language].appName} | ${translations[language].universityName}`;
    localStorage.setItem(STORAGE_KEYS.language, language);
  }, [language]);

  const t = useCallback(
    (key) => getNestedValue(translations[language], key) ?? key,
    [language],
  );

  const value = useMemo(
    () => ({
      language,
      direction: language === 'ar' ? 'rtl' : 'ltr',
      setLanguage,
      toggleLanguage: () => setLanguage((current) => (current === 'en' ? 'ar' : 'en')),
      t,
    }),
    [language, t],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

