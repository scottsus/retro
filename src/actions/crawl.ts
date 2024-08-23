import { chromium } from "playwright";

async function crawl(url: string) {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: "networkidle" });

  const textContent = await page.evaluate(() => document.body.innerText);

  const images = await page.evaluate(() =>
    Array.from(document.images, (img) => {
      return { src: img.src, alt: img.alt };
    }),
  );

  const screenshotBuffer = await page.screenshot({
    fullPage: true,
  });

  const screenshotBlob = new Blob([screenshotBuffer], { type: "image/png" });

  await browser.close();

  return { textContent, images, screenshotBlob };
}

crawl("https://scottsus.dev").then((result) => {
  console.log(result.textContent);
  console.log(result.images);
  console.log("Screenshot returned as a Blob");
});
