import { promises as fs } from "fs";
import path from "path";
import * as readline from "readline";
import ora from "ora";

import { crawl } from "./crawl";
import { generateCode } from "./generate";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Please enter a URL: ", async (url) => {
  const spinner = ora("🎨 Generating page...");
  try {
    spinner.start();

    const webAssets = await crawl(url);
    const code = await generateCode(webAssets);
    const outputPath = path.join(process.cwd(), "src", "app", "page.tsx");
    await fs
      .writeFile(outputPath, code, "utf8")
      .then(() =>
        console.log(`Generated code has been written to ${outputPath}`),
      );

    spinner.succeed("✨ Page generation complete!");
    console.log("Please visit http://localhost:3000 to see your results.");
  } catch (err) {
    spinner.fail(`Error: ${err}`);
  } finally {
    rl.close();
  }
});
