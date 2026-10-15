import type { Locale } from '@/lib/i18n';

// DRAFT — temporary until F-03 creates the real content structure.
// The brand name is TBD in docs/FACTS.md (brand.nameHe, Q12); F-03 replaces this with getFact().
export const site: Record<Locale, { title: string }> = {
  he: { title: 'לנדלורד' }, // DRAFT — TBD (Q12)
};
