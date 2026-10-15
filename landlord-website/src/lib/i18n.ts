/** Locales the site is built for. `en` is added by F-05 only if Q14 = yes. */
export const locales = ['he'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'he';

const rtlLocales: ReadonlySet<string> = new Set(['he']);

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function getDirection(locale: string): 'rtl' | 'ltr' {
  return rtlLocales.has(locale) ? 'rtl' : 'ltr';
}
