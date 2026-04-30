import { Page } from '@playwright/test';

export async function login(page: Page) {
  const email = process.env.ECHO4EVER_EMAIL;
  const password = process.env.ECHO4EVER_PASSWORD;

  if (!email || !password) {
    throw new Error('Missing ECHO4EVER_EMAIL or ECHO4EVER_PASSWORD in .env file');
  }

  await page.goto('/login');
  await page.waitForLoadState('networkidle');

  // Login form — selectors confirmed from live app
  await page.getByRole('textbox', { name: 'Email' }).fill(email);
  await page.getByRole('textbox', { name: 'Password' }).fill(password);
  await page.getByRole('button', { name: 'Sign In' }).click();

  // Redirects to /home after login
  await page.waitForURL('**/home**', { timeout: 15_000 });
  await page.waitForLoadState('networkidle');
}

/** Smooth scroll to an element so the recording looks natural */
export async function smoothScroll(page: Page, selector: string) {
  await page.evaluate((sel) => {
    document.querySelector(sel)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, selector);
  await page.waitForTimeout(800);
}

/** Pause for the viewer — use between actions so the video isn't rushed */
export async function pause(page: Page, ms = 1500) {
  await page.waitForTimeout(ms);
}

/** Type text character by character for a realistic typing effect */
export async function typeSlowly(page: Page, selector: string, text: string, delay = 60) {
  await page.click(selector);
  await page.type(selector, text, { delay });
}
