import { promises as fs } from "fs";
import path from "path";
import { openai } from "@ai-sdk/openai";
import { extractFromBackticks } from "~/lib/utils";
import { generateObject } from "ai";
import { z } from "zod";

/**
 * Uses AI to filter out unsupported extensions as they might come with
 * additional parameters and a simple `endsWith` does not work.
 */
export async function onlyChosenExtensions({
  images,
}: {
  images: {
    src: string;
    alt: string;
  }[];
}) {
  const supportedExtensions = ["png", "jpeg", "jpg", "gif", "webp"];

  const checkImage = async (image: { src: string; alt: string }) => {
    const res = await generateObject({
      model: openai("gpt-4o-mini"),
      system: `
        Given an image source, potentially with parameters after its file extension type,
        determine if the source matches one of the following supported extensions:
        ${supportedExtensions.join(", ")}

        If it does not match the above extensions, return isSupportedExtensions: false.
        Otherwise, return isSupportedExtensions: true.
      `,
      prompt: image.src,
      schema: z.object({
        isSupportedExtension: z.boolean(),
      }),
    });

    return res.object.isSupportedExtension ? image : null;
  };

  const results = await Promise.all(images.map(checkImage));
  return results.filter(
    (image): image is { src: string; alt: string } => image !== null,
  );
}

/**
 * Updates next.config.js with the image base urls
 */
export async function updateNextConfig({
  images,
}: {
  images: {
    src: string;
    alt: string;
  }[];
}) {
  const urls = images.map((image) => image.src);
  const urlRes = await generateObject({
    model: openai("gpt-4o-mini"),
    system: `
      Given a list of image sources, give me their base urls so I can reference them
      in my Next.js app by including them in my next.config.js.
    `,
    prompt: urls.join(", "),
    schema: z.object({
      baseUrls: z.array(z.string()),
    }),
  });

  const baseNextConfig = `
    await import("./src/env.js");

    /** @type {import("next").NextConfig} */
    const config = {
      images: {
        domains: [],
      },
    };

    export default config;
  `;
  const configRes = await generateObject({
    model: openai("gpt-4o"),
    system: `
      Given a base next.config.js and a list of image urls to be included, rewrite the config
      file to include the urls inside the images.domains array.

      // next.config.js
      ${baseNextConfig}

      Use the following style: {OPENING TRIPLE BACKTICKS}js CODE{CLOSING TRIPLE BACKTICKS} and
      don't give any additional comments.
    `,
    prompt: urlRes.object.baseUrls.join(", "),
    schema: z.object({
      newNextConfig: z.string(),
    }),
  });

  const code = extractFromBackticks(configRes.object.newNextConfig, {
    js: true,
  });
  if (!code) {
    throw new Error("Unable to update next.config.js");
  }

  const fileName = "next.config.js";
  const outputPath = path.join(process.cwd(), fileName);
  await fs
    .writeFile(outputPath, code, "utf8")
    .then(() => console.log(`Successfully updated ${fileName}`));
}
