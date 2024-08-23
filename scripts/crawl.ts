import { chromium } from "playwright";

export async function crawl(url: string) {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: "networkidle" });

  const text = await page.evaluate(() => document.body.innerText);
  const images = (await page.evaluate(() =>
    Array.from(document.images, (img) => {
      // TODO: check the urls
      // TODO: check the extensions
      if (img.src.toLowerCase().endsWith(".svg")) {
        return null;
      }

      return { src: img.src, alt: img.alt };
    }).filter(Boolean),
  )) as { src: string; alt: string }[];

  console.log("Images:", images);

  await browser.close();

  return { text, images };
}
