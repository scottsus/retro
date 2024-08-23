import { chromium } from "playwright";

const DIST_DIR = "./artifacts";

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

  const screenshot = await page.screenshot({
    path: `${DIST_DIR}/screenshot.png`,
    fullPage: true,
  });

  await browser.close();

  return { textContent, images, screenshot };
}

crawl("https://scottsus.dev").then((result) => {
  console.log(result.textContent);
  console.log(result.images);
  console.log("Screenshot saved as screenshot.png");
});
