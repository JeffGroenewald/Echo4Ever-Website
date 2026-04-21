export const defaultLocale = 'en';
export const locales = ['en', 'pt', 'es', 'fr', 'de', 'zh', 'ja', 'hi', 'ar', 'mi'] as const;
export type Locale = (typeof locales)[number];

export const languages: Record<Locale, { name: string; nativeName: string; dir: 'ltr' | 'rtl' }> = {
  en: { name: 'English', nativeName: 'English', dir: 'ltr' },
  pt: { name: 'Portuguese', nativeName: 'Português', dir: 'ltr' },
  es: { name: 'Spanish', nativeName: 'Español', dir: 'ltr' },
  fr: { name: 'French', nativeName: 'Français', dir: 'ltr' },
  de: { name: 'German', nativeName: 'Deutsch', dir: 'ltr' },
  zh: { name: 'Chinese', nativeName: '中文', dir: 'ltr' },
  ja: { name: 'Japanese', nativeName: '日本語', dir: 'ltr' },
  hi: { name: 'Hindi', nativeName: 'हिन्दी', dir: 'ltr' },
  ar: { name: 'Arabic', nativeName: 'العربية', dir: 'rtl' },
  mi: { name: 'Māori', nativeName: 'Te Reo Māori', dir: 'ltr' },
};
