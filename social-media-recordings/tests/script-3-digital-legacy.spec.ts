import { test } from '@playwright/test';
import { login, smoothScroll, pause } from '../helpers/login';

/**
 * SCRIPT 3 — "What happens to your photos when you die?"
 *
 * Records clips of:
 *   1. Dashboard showing the organised vault
 *   2. Photos page — folders and upload
 *   3. Videos & Audio section
 *   4. Heritage Custodian / Family page
 *   5. Life Story section
 */

test('Script 3 — Digital Legacy app walkthrough', async ({ page }) => {
  await login(page);
  await pause(page, 2000);

  // ─────────────────────────────────────────────
  // CLIP 1: Dashboard — clean, organised vault
  // ─────────────────────────────────────────────
  await pause(page, 3000);

  // ─────────────────────────────────────────────
  // CLIP 2: Navigate to Photographs
  // ─────────────────────────────────────────────
  await page.getByRole('button', { name: 'Open menu' }).click();
  await pause(page, 600);
  await page.getByRole('link', { name: 'Photographs' }).click();
  await page.waitForURL('**/photographs**');
  await page.waitForLoadState('networkidle');
  await pause(page, 2500);

  // Show the folder structure
  await page.locator('text=All Photos').click();
  await pause(page, 2000);

  // Show upload button
  await smoothScroll(page, 'button:has-text("Upload Photo")');
  await pause(page, 2000);

  // ─────────────────────────────────────────────
  // CLIP 3: Navigate to Videos & Audio
  // ─────────────────────────────────────────────
  await page.getByRole('button', { name: 'Open menu' }).click();
  await pause(page, 600);
  await page.getByRole('link', { name: 'Videos & Audio' }).click();
  await page.waitForURL('**/videos-audio**');
  await page.waitForLoadState('networkidle');
  await pause(page, 2500);

  // Show the media library with folders
  await page.locator('text=All Videos & Audio').click();
  await pause(page, 2000);

  // ─────────────────────────────────────────────
  // CLIP 4: Navigate to Family / Heritage Custodian
  // ─────────────────────────────────────────────
  await page.getByRole('button', { name: 'Open menu' }).click();
  await pause(page, 600);
  await page.getByRole('link', { name: 'Family' }).click();
  await page.waitForURL('**/family**');
  await page.waitForLoadState('networkidle');
  await pause(page, 2500);

  // Scroll to show Heritage Custodian section
  await page.evaluate(() => window.scrollBy({ top: 400, behavior: 'smooth' }));
  await pause(page, 2000);
  await page.evaluate(() => window.scrollBy({ top: 400, behavior: 'smooth' }));
  await pause(page, 2500);

  // ─────────────────────────────────────────────
  // CLIP 5: Life Story — written memories
  // ─────────────────────────────────────────────
  await page.getByRole('button', { name: 'Open menu' }).click();
  await pause(page, 600);
  await page.getByRole('link', { name: 'Life Story' }).click();
  await page.waitForURL('**/life-story**');
  await page.waitForLoadState('networkidle');
  await pause(page, 2500);

  await smoothScroll(page, 'button:has-text("Add Section")');
  await pause(page, 2000);

  // ─────────────────────────────────────────────
  // CLIP 6: Return to Home — final shot
  // ─────────────────────────────────────────────
  await page.getByRole('button', { name: 'Open menu' }).click();
  await pause(page, 600);
  await page.getByRole('link', { name: 'Home' }).click();
  await page.waitForURL('**/home**');
  await page.waitForLoadState('networkidle');
  await pause(page, 3000);
});
