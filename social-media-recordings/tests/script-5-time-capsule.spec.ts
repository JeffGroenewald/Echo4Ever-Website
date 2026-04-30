import { test } from '@playwright/test';
import { login, smoothScroll, pause, typeSlowly } from '../helpers/login';

/**
 * SCRIPT 5 — "Time Capsule Demo" (THE MONEY SHOT)
 *
 * This is the highest-conversion post. Record this first.
 *
 * Full walkthrough:
 *   1. Navigate to Time Capsules
 *   2. Click "+ Create Time Capsule"
 *   3. Type a title and message (slow typing for visual effect)
 *   4. "On a specific date" is already selected by default
 *   5. Fill in a future date
 *   6. Click "Seal Capsule"
 *   7. Show the sealed capsule in the list
 *
 * TIP: Before running, have at least one other sealed capsule already
 *      in your account so the list looks populated.
 */

test('Script 5 — Time Capsule creation demo', async ({ page }) => {
  await login(page);
  await pause(page, 2000);

  // ─────────────────────────────────────────────
  // SCENE 1: Navigate to Time Capsules
  // ─────────────────────────────────────────────
  await page.getByRole('button', { name: 'Open menu' }).click();
  await pause(page, 600);
  await page.getByRole('link', { name: 'Time Capsules' }).click();
  await page.waitForURL('**/time-capsules**');
  await page.waitForLoadState('networkidle');
  await pause(page, 2500);

  // Show existing capsules if any
  await smoothScroll(page, 'main');
  await pause(page, 2000);

  // Scroll back to top
  await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'smooth' }));
  await pause(page, 1000);

  // ─────────────────────────────────────────────
  // SCENE 2: Click "+ Create Time Capsule"
  // ─────────────────────────────────────────────
  await page.getByRole('button', { name: '+ Create Time Capsule' }).click();
  await pause(page, 2000);

  // ─────────────────────────────────────────────
  // SCENE 3: Type the title (slow typing for visual effect)
  // ─────────────────────────────────────────────
  // The title input has placeholder "To my daughter on her 30th birthday"
  await typeSlowly(
    page,
    'input[placeholder="To my daughter on her 30th birthday"]',
    'To my son, on your 18th birthday',
    70
  );
  await pause(page, 1500);

  // ─────────────────────────────────────────────
  // SCENE 4: Type the message
  // ─────────────────────────────────────────────
  // The message textarea has placeholder "A message to include with this capsule…"
  await typeSlowly(
    page,
    'textarea[placeholder="A message to include with this capsule…"]',
    "I'm recording this while you're still 6 years old, running around the house in your superhero cape. I want you to know that no matter what happens, I am so incredibly proud of the person you're becoming. This capsule has a video of us at the beach last summer — your laugh in that video is my favourite sound in the world. I love you more than words. — Dad",
    40
  );
  await pause(page, 2500);

  // ─────────────────────────────────────────────
  // SCENE 5: Unlock type — "On a specific date" is already selected
  // ─────────────────────────────────────────────
  // The radio "📅 On a specific date" is checked by default — just pause to show it
  await smoothScroll(page, 'input[type="radio"]');
  await pause(page, 2000);

  // ─────────────────────────────────────────────
  // SCENE 6: Fill in the unlock date — December 15, 2037
  // ─────────────────────────────────────────────
  // The date input is a textbox below "Unlock date" label
  const dateInput = page.getByRole('textbox').last();
  await dateInput.click();
  await pause(page, 500);
  await dateInput.fill('2037-12-15');
  await pause(page, 2000);

  // ─────────────────────────────────────────────
  // SCENE 7: Seal the capsule — the big moment
  // ─────────────────────────────────────────────
  await smoothScroll(page, 'button:has-text("Seal Capsule")');
  await pause(page, 1500);

  await page.getByRole('button', { name: 'Seal Capsule' }).click();
  await pause(page, 1000);

  // Handle confirmation dialog if one appears
  const confirmButton = page.getByRole('button', { name: /confirm|yes/i });
  if (await confirmButton.isVisible({ timeout: 3000 }).catch(() => false)) {
    await pause(page, 1000);
    await confirmButton.click();
  }

  // Wait for seal animation
  await pause(page, 3000);

  // ─────────────────────────────────────────────
  // SCENE 8: Show the sealed capsule — locked, untouchable
  // ─────────────────────────────────────────────
  await page.waitForLoadState('networkidle');
  await pause(page, 2000);

  // Scroll to show the sealed capsule in the list
  await page.evaluate(() => window.scrollBy({ top: 300, behavior: 'smooth' }));
  await pause(page, 2000);

  // ─────────────────────────────────────────────
  // SCENE 9: Final emotional beat — linger
  // ─────────────────────────────────────────────
  // "Even if I'm not here to say it myself"
  await pause(page, 4000);
});
