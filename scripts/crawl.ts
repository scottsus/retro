"use server";

import { promises as fs } from "fs";
import path from "path";
import OpenAI from "openai";
import ora from "ora";
import { chromium } from "playwright";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function crawl(url: string) {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: "networkidle" });

  const textContent = await page.evaluate(() => document.body.innerText);

  const images = (await page.evaluate(() =>
    Array.from(document.images, (img) => {
      // Check if the image is an SVG and skip it if so
      if (img.src.toLowerCase().endsWith(".svg")) {
        return null;
      }

      return { src: img.src, alt: img.alt };
    }).filter(Boolean),
  )) as { src: string; alt: string }[];

  console.log("Images:", images);

  const screenshotBuffer = await page.screenshot({
    fullPage: true,
  });

  const screenshotBlob = new Blob([screenshotBuffer], { type: "image/png" });

  await browser.close();

  // Create the chat completion request
  const response = await openai.chat.completions.create({
    model: "gpt-4o-2024-08-06",
    messages: [
      {
        role: "system",
        content: `
          You are a master in Next.js and TS, and a brilliant web designer.
          In particular, your forte lies in giving a "retro" feel to a website while retaining its beauty.
          
          Given an existing webpage with some text, images and their alts, and other info,
          Write brilliant tsx code that generates an modern, yet "retro" feel to the webpage.
          You don't need to use all the text, or all the info. Don't try to recreate the webpage exactly.
          Instead, give your take on how it should be using a subset of the text and images.
          
          Here are some requirements:
          - must adhere to Next 14 principles - if you're using any 'use' hooks, remember to add "use client"
          - must use tailwind for styling
          - images must use sources given in the prompt
          - must compile
          - don't add comments, just do {OPENING TRIPLE BACKTICKS}tsx {CODE}{CLOSING TRIPLE BACKTICKS}
          
          PAY SPECIAL ATTENTION TO THESE:
          - YOU ARE NOT ALLOWED TO USE THE <a> TAG. PLEASE USE THE <Link> TAG INSTEAD. THIS IS IMPORTANT!
        `,
      },
      {
        role: "user",
        content: [
          { type: "text", text: `Analyze this webpage:\n\n${textContent}` },
          ...images.map(
            (img) =>
              ({
                type: "image_url",
                image_url: { url: img.src },
              }) as const,
          ),
          {
            type: "text",
            text: `These are the links to the images above, and their alts: [${images.map((image) => `${image.alt}: ${image.src}`)}]`,
          },
        ],
      },
    ],
  });

  // return response.choices[0];
  // Write response.choices[0] to src/app/page.tsx

  const generatedCode = response.choices[0]?.message.content;
  if (!generatedCode) {
    console.error("Error generating code.");
    return;
  }

  // Extract the code from the content, removing the code fence markers
  const codeMatch = generatedCode.match(/```tsx\s*([\s\S]*?)\s*```/);
  const extractedCode = codeMatch ? codeMatch[1]?.trim() : null;

  if (!extractedCode) {
    console.error("No code found in the generated content.");
    return;
  }

  const outputPath = path.join(process.cwd(), "src", "app", "page.tsx");

  try {
    await fs.writeFile(outputPath, extractedCode, "utf8");
    console.log(`Generated code has been written to ${outputPath}`);
  } catch (error) {
    console.error(`Error writing to file: ${error}`);
  }

  return "Done ✨";
}

const spinner = ora("Crawling and generating page...").start();

crawl("https://scottsus.dev")
  .then((text) => {
    spinner.succeed("Crawling and page generation complete!");
    console.log(text);
  })
  .catch((err) => {
    spinner.fail("An error occurred");
    console.error(err);
  });
