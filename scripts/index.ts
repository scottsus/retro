import { promises as fs } from "fs";
import path from "path";
import * as readline from "readline";
import { isValidUrl } from "~/lib/utils";
import ora from "ora";

import { crawl } from "./crawl";
import { generateCode } from "./generate";
import { onlyChosenExtensions, updateNextConfig } from "./images";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Please enter a URL: ", async (url) => {
  if (!isValidUrl(url)) {
    console.error("❌ Invalid URL. Please enter a valid URL.");
    rl.close();
    return;
  }

  const spinner = ora("🎨 Generating page...");
  try {
    spinner.start();

    const { text, images: unfiltered } = await crawl(url);
    const images = await onlyChosenExtensions({ images: unfiltered });
    await updateNextConfig({ images: unfiltered });

    const code = await generateCode({ text, images });
    const outputPath = path.join(process.cwd(), "src", "app", "page.tsx");
    await fs
      .writeFile(outputPath, code, "utf8")
      .then(() =>
        console.log(`Generated code has been written to ${outputPath}`),
      );

    spinner.succeed("✨ Page generation complete!");

    console.log(`Please run

    yarn dev
      
and visit http://localhost:3000 to see your results.
    `);
  } catch (err) {
    spinner.fail(`Error: ${err}`);
  } finally {
    rl.close();
  }
});
