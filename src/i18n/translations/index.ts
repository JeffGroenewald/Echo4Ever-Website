import type { Locale } from '../languages';
import type { Translations } from './en';
import en from './en';
import pt from './pt';
import es from './es';
import fr from './fr';
import de from './de';
import zh from './zh';
import ja from './ja';
import hi from './hi';
import ar from './ar';
import mi from './mi';

export const translations: Record<Locale, Translations> = {
  en, pt, es, fr, de, zh, ja, hi, ar, mi,
};
