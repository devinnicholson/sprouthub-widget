const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

async function capture(theme) {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  const url = `https://sprouthub-widget.vercel.app/?user=devinnicholson&theme=${theme}`;
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.setViewportSize({ width: 300, height: 200 });
  await page.waitForTimeout(1500);

  const buffer = await page.screenshot({ type: 'png' });
  const filename = `preview-${theme}.png`;

  fs.mkdirSync('public', { recursive: true });
  fs.writeFileSync(path.join('public', filename), buffer);
  await browser.close();

  console.log(`✅ ${filename} saved`);
}

(async () => {
  await capture('light');
  await capture('dark');
})();

