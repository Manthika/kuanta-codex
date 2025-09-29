import en from './locale_en.json';
import ko from './locale_ko.json';

const dictionaries = {
  en,
  ko,
} as const;

export type SupportedLocale = keyof typeof dictionaries;
export type Translations = (typeof dictionaries)[SupportedLocale];

export const FALLBACK_LOCALE: SupportedLocale = 'en';

export function getTranslations(locale: string | undefined): Translations {
  if (locale && locale in dictionaries) {
    return dictionaries[locale as SupportedLocale];
  }

  return dictionaries[FALLBACK_LOCALE];
}
