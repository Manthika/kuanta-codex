import en from './locale_en.json';
import ko from './locale_ko.json';

const dictionaries = {
  en,
  ko,
} as const;

export type SupportedLocale = keyof typeof dictionaries;
export type Translations = (typeof dictionaries)[SupportedLocale];

export const FALLBACK_LOCALE: SupportedLocale = 'en';

export function resolveLocale(locale: string | undefined): SupportedLocale {
  if (locale && locale in dictionaries) {
    return locale as SupportedLocale;
  }

  return FALLBACK_LOCALE;
}

export function getTranslations(locale: string | undefined): Translations {
  return dictionaries[resolveLocale(locale)];
}
