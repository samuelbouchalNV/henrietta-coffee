import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const screenshotDir = path.join(__dirname, 'temporary screenshots');
if (!fs.existsSync(screenshotDir)) fs.mkdirSync(screenshotDir, { recursive: true });

const url   = process.argv[2] || 'http://localhost:3000';
const label = process.argv[3] ? `-${process.argv[3]}` : '';

// Find next available number
let n = 1;
while (fs.existsSync(path.join(screenshotDir, `screenshot-${n}${label}.png`))) n++;
const outPath = path.join(screenshotDir, `screenshot-${n}${label}.png`);

const browser = await puppeteer.launch({
  executablePath: 'C:/Users/samue/.cache/puppeteer/chrome/win64-148.0.7778.97/chrome-win64/chrome.exe',
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
await new Promise(r => setTimeout(r, 800));

// Scroll through page to trigger IntersectionObserver animations
const pageHeight = await page.evaluate(() => document.body.scrollHeight);
const steps = Math.ceil(pageHeight / 600);
for (let i = 0; i <= steps; i++) {
  await page.evaluate((step) => window.scrollTo(0, step * 600), i);
  await new Promise(r => setTimeout(r, 120));
}
await page.evaluate(() => window.scrollTo(0, 0));
await new Promise(r => setTimeout(r, 600));
await page.screenshot({ path: outPath, fullPage: true });
await browser.close();
console.log(`Screenshot saved: ${outPath}`);
