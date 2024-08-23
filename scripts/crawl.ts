import { chromium } from "playwright";

export async function crawl(url: string) {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: "networkidle" });

  const text = await page.evaluate(() => document.body.innerText);
  const images = await page.evaluate(() =>
    Array.from(document.images, (img) => {
      return { src: img.src, alt: img.alt };
    }),
  );

  await browser.close();

  return { text, images };
}
