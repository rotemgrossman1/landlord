import { defaultLocale, getDirection, isLocale, locales } from './i18n';

describe('i18n', () => {
  it('defaults to Hebrew', () => {
    expect(defaultLocale).toBe('he');
    expect(locales).toContain('he');
  });

  it('maps Hebrew to rtl and English to ltr', () => {
    expect(getDirection('he')).toBe('rtl');
    expect(getDirection('en')).toBe('ltr');
  });

  it('rejects unknown locales', () => {
    expect(isLocale('he')).toBe(true);
    expect(isLocale('fr')).toBe(false);
  });
});
