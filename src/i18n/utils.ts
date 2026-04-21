import type { Locale } from './languages';
import { defaultLocale, locales, languages } from './languages';
import { translations } from './translations';

export function getTranslations(lang: string) {
  const locale = locales.includes(lang as Locale) ? (lang as Locale) : defaultLocale;
  return translations[locale];
}

export function getLocalePath(path: string, lang: string) {
  if (lang === defaultLocale) return path;
  return `/${lang}${path}`;
}

export function getDir(lang: string) {
  const locale = lang as Locale;
  return languages[locale]?.dir || 'ltr';
}

export function getNonDefaultLocales() {
  return locales.filter((l) => l !== defaultLocale);
}

export { defaultLocale, locales, languages };
export type { Locale };
