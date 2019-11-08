import * as server from './server.js';
import puppeteer from 'puppeteer';

const port = 12345;
server.createServer(port);

function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

async function element(page, selector) {
  while (true) {
    const element = await page.$(selector);
    if (element) {
      return element;
    }
    await sleep(100);
  }
}


(async () => {
  const args = [
      '--enable-browser-navigation',
      '--allow-insecure-localhost',
      `http://localhost:${port}`,
  ];
  const browser = await puppeteer.launch({
    headless: false,
    args,
  });

  const page = (await browser.pages())[0];
  const button = await element(page, 'button');
  await sleep(1000);
  await button.click();
})();
