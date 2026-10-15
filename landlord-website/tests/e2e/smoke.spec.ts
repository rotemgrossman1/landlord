import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

test('home page is Hebrew, right-to-left and accessible', async ({ page }) => {
  const response = await page.goto('/');
  expect(response?.status()).toBe(200);

  const html = page.locator('html');
  await expect(html).toHaveAttribute('lang', 'he');
  await expect(html).toHaveAttribute('dir', 'rtl');

  const results = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
    .analyze();
  expect(results.violations).toEqual([]);
});

test('home page HTML is served without JavaScript', async ({ request }) => {
  const res = await request.get('/');
  const body = await res.text();
  expect(body).toMatch(/<html[^>]*lang="he"/);
  expect(body).toMatch(/<html[^>]*dir="rtl"/);
});
