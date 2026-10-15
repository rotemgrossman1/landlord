# Sitemap and build status

Keep the Status column in sync with each spec's front matter. Phase = build order (see HOW-TO-WORK.md).

## Pages

| Route (he)                              | Route (en)            | Spec                                                                       | Status | Phase |
| --------------------------------------- | --------------------- | -------------------------------------------------------------------------- | ------ | ----- |
| `/`                                     | `/en`                 | [P-01 Home](../specs/pages/P-01-home.md)                                   | draft  | 1     |
| `/services`                             | `/en/services`        | [P-02 Services index](../specs/pages/P-02-services-index.md)               | draft  | 1     |
| `/services/[slug]`                      | `/en/services/[slug]` | [P-03 Service page template](../specs/pages/P-03-service-template.md)      | draft  | 1     |
| `/pricing`                              | `/en/pricing`         | [P-04 Pricing](../specs/pages/P-04-pricing.md)                             | draft  | 2     |
| `/landlord-safe`                        | `/en/landlord-safe`   | [P-05 Landlord Safe](../specs/pages/P-05-landlord-safe.md)                 | draft  | 1     |
| `/about`                                | `/en/about`           | [P-06 About & team](../specs/pages/P-06-about.md)                          | draft  | 1     |
| `/reviews`                              | `/en/reviews`         | [P-07 Clients & reviews](../specs/pages/P-07-clients-reviews.md)           | draft  | 2     |
| `/case-studies`, `/case-studies/[slug]` | `/en/…`               | [P-08 Case studies](../specs/pages/P-08-case-studies.md)                   | draft  | 2     |
| `/guide`                                | `/en/guide`           | [P-09 Knowledge hub & owner's guide](../specs/pages/P-09-knowledge-hub.md) | draft  | 3     |
| `/blog/[slug]`                          | `/en/blog/[slug]`     | [P-10 Article template](../specs/pages/P-10-article-template.md)           | draft  | 3     |
| `/faq`                                  | `/en/faq`             | [P-11 FAQ](../specs/pages/P-11-faq.md)                                     | draft  | 1     |
| `/areas`, `/areas/[city]`               | `/en/areas/…`         | [P-12 Service areas & city template](../specs/pages/P-12-city-template.md) | draft  | 3     |
| `/investors`                            | `/en/investors`       | [P-13 Investors](../specs/pages/P-13-investors.md)                         | draft  | 3     |
| `/contact`                              | `/en/contact`         | [P-14 Contact](../specs/pages/P-14-contact.md)                             | draft  | 1     |
| `/privacy`, `/terms`, `/accessibility`  | `/en/…`               | [P-15 Legal pages](../specs/pages/P-15-legal.md)                           | draft  | 1     |
| (any unknown URL)                       |                       | [P-16 404](../specs/pages/P-16-not-found.md)                               | draft  | 1     |

## Foundation features

| Spec                                                                                   | Status | Phase |
| -------------------------------------------------------------------------------------- | ------ | ----- |
| [F-01 Project setup](../specs/foundation/F-01-project-setup.md)                        | built  | 0     |
| [F-02 Design system](../specs/foundation/F-02-design-system.md)                        | draft  | 0     |
| [F-03 Content, facts & flags](../specs/foundation/F-03-content-and-facts.md)           | draft  | 0     |
| [F-04 SEO & structured data](../specs/foundation/F-04-seo-and-schema.md)               | draft  | 0     |
| [F-05 Middleware, routing & i18n](../specs/foundation/F-05-middleware-routing-i18n.md) | draft  | 0     |
| [F-06 Lead API & integrations](../specs/foundation/F-06-lead-api-integrations.md)      | draft  | 1     |
| [F-07 Analytics & consent](../specs/foundation/F-07-analytics-consent.md)              | draft  | 1     |
| [F-08 Accessibility](../specs/foundation/F-08-accessibility.md)                        | draft  | 0     |
| [F-09 Deployment & launch](../specs/foundation/F-09-deployment-launch.md)              | draft  | 4     |

## Components

| Spec                                                                      | Used on                      | Status | Phase |
| ------------------------------------------------------------------------- | ---------------------------- | ------ | ----- |
| [C-01 Header](../specs/components/C-01-header.md)                         | all                          | draft  | 0     |
| [C-02 Footer](../specs/components/C-02-footer.md)                         | all                          | draft  | 0     |
| [C-03 Sticky contact bar](../specs/components/C-03-sticky-contact-bar.md) | all (mobile)                 | draft  | 1     |
| [C-04 Hero](../specs/components/C-04-hero.md)                             | P-01, P-02, P-03, P-05, P-13 | draft  | 1     |
| [C-05 How it works](../specs/components/C-05-how-it-works.md)             | P-01, P-03, P-05             | draft  | 1     |
| [C-06 Stats strip](../specs/components/C-06-stats-strip.md)               | P-01, P-06, P-13             | draft  | 1     |
| [C-07 Service cards](../specs/components/C-07-service-cards.md)           | P-01, P-02                   | draft  | 1     |
| [C-08 Comparison table](../specs/components/C-08-comparison-table.md)     | P-04, P-05                   | draft  | 2     |
| [C-09 Testimonials](../specs/components/C-09-testimonials.md)             | P-01, P-03, P-07             | draft  | 2     |
| [C-10 Google reviews strip](../specs/components/C-10-google-reviews.md)   | all                          | draft  | 2     |
| [C-11 Case study card](../specs/components/C-11-case-study-card.md)       | P-01, P-07, P-08             | draft  | 2     |
| [C-12 Team grid](../specs/components/C-12-team-grid.md)                   | P-06                         | draft  | 1     |
| [C-13 FAQ accordion](../specs/components/C-13-faq-accordion.md)           | P-03, P-05, P-11, P-12       | draft  | 1     |
| [C-14 Lead form](../specs/components/C-14-lead-form.md)                   | P-14, C-15                   | draft  | 1     |
| [C-15 CTA band](../specs/components/C-15-cta-band.md)                     | most pages                   | draft  | 1     |
| [C-16 Breadcrumbs](../specs/components/C-16-breadcrumbs.md)               | all except home              | draft  | 1     |
| [C-17 Service areas](../specs/components/C-17-service-areas.md)           | P-01, P-12, P-14             | draft  | 2     |
| [C-18 Language switcher](../specs/components/C-18-language-switcher.md)   | C-01                         | draft  | 3     |
