import type { ReactNode } from 'react';
import { createContext, useContext, useEffect, useState } from 'react';
import { en } from './en';
import type { Translations } from './pt';
import { pt } from './pt';

export type Lang = 'pt' | 'en';

const STORAGE_KEY = 'lang-v1';

const DICT: Record<Lang, Translations> = { pt, en };

function detectLang(): Lang {
  if (typeof window === 'undefined') return 'pt';
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === 'pt' || stored === 'en') return stored;
  const browserLang = window.navigator.language?.toLowerCase() ?? '';
  return browserLang.startsWith('pt') ? 'pt' : 'en';
}

type LangContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translations;
};

const LangContext = createContext<LangContextValue | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => detectLang());

  useEffect(() => {
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
    document.title = DICT[lang].meta.title;
    const descMeta = document.querySelector('meta[name="description"]');
    if (descMeta) descMeta.setAttribute('content', DICT[lang].meta.description);
  }, [lang]);

  const setLang = (next: Lang) => {
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
  };

  return (
    <LangContext.Provider value={{ lang, setLang, t: DICT[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export function useT(): LangContextValue {
  const ctx = useContext(LangContext);
  if (!ctx) {
    throw new Error('useT must be used within a LangProvider');
  }
  return ctx;
}
