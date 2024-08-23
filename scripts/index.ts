import * as fs from "fs";
import * as path from "path";
import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Please enter a URL: ", async (url) => {
  const distDir = "./public";
  const filePath = path.join(distDir, "url.txt");

  try {
    await fs.promises.mkdir(distDir, { recursive: true });
    await fs.promises.writeFile(filePath, url);

    console.log(`👍  URL has been saved to ${filePath}`);
  } catch (err) {
    console.error("👎 Error saving URL:", err);
  } finally {
    rl.close();
  }
});
