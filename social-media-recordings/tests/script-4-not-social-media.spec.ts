import { test } from '@playwright/test';
import { login, smoothScroll, pause } from '../helpers/login';

/**
 * SCRIPT 4 — "This isn't social media"
 *
 * Fast-paced recording showing the clean, private interface.
 * Clips needed:
 *   1. Clean dashboard (no ads, no followers, no feed)
 *   2. Photos section — organised, private
 *   3. Videos & Audio with player
 *   4. Family sharing (invite-only, no public)
 *   5. Life Story
 */

test('Script 4 — Clean private interface showcase', async ({ page }) => {
  await login(page);
  await pause(page, 1500);

  // ─────────────────────────────────────────────
  // CLIP 1: Dashboard — clean, no clutter, no ads
  // ─────────────────────────────────────────────
  await pause(page, 3000);

  // Slow scroll down the dashboard
  await page.evaluate(() => window.scrollBy({ top: 400, behavior: 'smooth' }));
  await pause(page, 2000);
  await page.evaluate(() => window.scrollBy({ top: 400, behavior: 'smooth' }));
  await pause(page, 2000);

  // Scroll back to top
  await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'smooth' }));
  await pause(page, 1500);

  // ─────────────────────────────────────────────
  // CLIP 2: Photos — organised, beautiful, private
  // ─────────────────────────────────────────────
  await page.getByRole('button', { name: 'Open menu' }).click();
  await pause(page, 600);
  await page.getByRole('link', { name: 'Photographs' }).click();
  await page.waitForURL('**/photographs**');
  await page.waitForLoadState('networkidle');
  await pause(page, 2500);

  // Show the folder structure and photos
  await page.locator('text=All Photos').click();
  await pause(page, 2500);

  // ─────────────────────────────────────────────
  // CLIP 3: Videos & Audio — show the player
  // ─────────────────────────────────────────────
  await page.getByRole('button', { name: 'Open menu' }).click();
  await pause(page, 600);
  await page.getByRole('link', { name: 'Videos & Audio' }).click();
  await page.waitForURL('**/videos-audio**');
  await page.waitForLoadState('networkidle');
  await pause(page, 2500);

  // Show the video/audio library
  await page.locator('text=All Videos & Audio').click();
  await pause(page, 2500);

  // ─────────────────────────────────────────────
  // CLIP 4: Family Sharing — invite only, no public
  // ─────────────────────────────────────────────
  await page.getByRole('button', { name: 'Open menu' }).click();
  await pause(page, 600);
  await page.getByRole('link', { name: 'Family' }).click();
  await page.waitForURL('**/family**');
  await page.waitForLoadState('networkidle');
  await pause(page, 2500);

  // Scroll to show invite-only family list
  await page.evaluate(() => window.scrollBy({ top: 400, behavior: 'smooth' }));
  await pause(page, 2500);

  // ─────────────────────────────────────────────
  // CLIP 5: Life Story — "These belong somewhere safe"
  // ─────────────────────────────────────────────
  await page.getByRole('button', { name: 'Open menu' }).click();
  await pause(page, 600);
  await page.getByRole('link', { name: 'Life Story' }).click();
  await page.waitForURL('**/life-story**');
  await page.waitForLoadState('networkidle');
  await pause(page, 2000);

  // Scroll through Life Story sections
  await page.evaluate(() => window.scrollBy({ top: 500, behavior: 'smooth' }));
  await pause(page, 2000);
  await page.evaluate(() => window.scrollBy({ top: 500, behavior: 'smooth' }));
  await pause(page, 3000);

  // ─────────────────────────────────────────────
  // CLIP 6: Back to Home — final shot
  // ─────────────────────────────────────────────
  await page.getByRole('button', { name: 'Open menu' }).click();
  await pause(page, 600);
  await page.getByRole('link', { name: 'Home' }).click();
  await page.waitForURL('**/home**');
  await page.waitForLoadState('networkidle');
  await pause(page, 3000);
});
