import { chromium } from '@playwright/test';
import path from 'path';
import fs from 'fs';

/**
 * Exports all carousel slides as 1080x1080 PNG images
 * ready to upload directly to Instagram/Facebook/LinkedIn.
 *
 * Run: npx tsx export-slides.ts
 *
 * Output: slides/ folder with numbered PNGs for each post.
 */

async function exportSlides() {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1080, height: 1080 },
    deviceScaleFactor: 1,
  });

  const outputDir = path.join(__dirname, 'slides');
  if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir);

  const posts = [
    { file: 'post-3-carousel.html', name: 'post-3-digital-legacy' },
    { file: 'post-4-carousel.html', name: 'post-4-opposite-social-media' },
    { file: 'post-5-carousel.html', name: 'post-5-time-capsule' },
  ];

  for (const post of posts) {
    const page = await context.newPage();
    const filePath = path.join(__dirname, post.file);

    // Read the HTML and convert logo images to base64 data URIs
    let html = fs.readFileSync(filePath, 'utf-8');
    const logoPath = path.join(__dirname, '..', 'public', 'images', 'logo.png');
    const logoBase64 = fs.readFileSync(logoPath).toString('base64');
    const logoDataUri = `data:image/png;base64,${logoBase64}`;
    html = html.replace(/src="[^"]*logo\.png"/g, `src="${logoDataUri}"`);

    // Also handle nautilus background
    const nautilusPath = path.join(__dirname, '..', 'public', 'images', 'nautilus-blueprint.jpg');
    const nautilusBase64 = fs.readFileSync(nautilusPath).toString('base64');
    const nautilusDataUri = `data:image/jpeg;base64,${nautilusBase64}`;
    html = html.replace(/url\([^)]*nautilus-blueprint\.jpg[^)]*\)/g, `url('${nautilusDataUri}')`);

    await page.setContent(html, { waitUntil: 'networkidle' });

    const slides = await page.locator('.slide').all();
    console.log(`\n${post.name}: ${slides.length} slides`);

    for (let i = 0; i < slides.length; i++) {
      const slideDir = path.join(outputDir, post.name);
      if (!fs.existsSync(slideDir)) fs.mkdirSync(slideDir, { recursive: true });

      await slides[i].screenshot({
        path: path.join(slideDir, `slide-${i + 1}.png`),
      });
      console.log(`  ✓ slide-${i + 1}.png`);
    }

    await page.close();
  }

  await browser.close();
  console.log(`\nDone! All slides saved to: ${outputDir}`);
}

exportSlides();
