import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '.env') });

export default defineConfig({
  testDir: './tests',
  timeout: 120_000,
  use: {
    baseURL: 'https://app.echo4ever.com',
    viewport: { width: 1080, height: 1920 },
    video: {
      mode: 'on',
      size: { width: 1080, height: 1920 },
    },
    launchOptions: {
      slowMo: 400, // Smooth, watchable pace for recordings
    },
    colorScheme: 'dark', // Dark mode looks better on social media
  },
  outputDir: './recordings',
  projects: [
    {
      name: 'social-media',
      use: {
        browserName: 'chromium',
        deviceScaleFactor: 1,
      },
    },
  ],
});
