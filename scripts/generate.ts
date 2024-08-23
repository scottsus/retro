import { extractFromBackticks } from "~/lib/utils";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const MAX_TEXT_LEN = 10_000;
const MAX_IMAGES_LEN = 1_000;
const MAX_IMAGES = 15;

export async function generateCode({
  text,
  images,
}: {
  text: string;
  images: {
    src: string;
    alt: string;
  }[];
}): Promise<string> {
  const imagesSliced = images.slice(0, MAX_IMAGES);
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
            Use mono fonts whenever possible to add to the "retro" feel. Also add some emojis to make it fun!
            You don't need to use all the text, or all the info. Don't try to recreate the webpage exactly.
            Instead, give your take on how it should be using a subset of the text and images.
            
            Here are some requirements:
            - must adhere to Next 14 principles
            - DON'T USE ANY HOOKS
            - must use tailwind for styling
            - make sure to include hover effects over buttons and links
            - must compile
            - don't add comments, just do {OPENING TRIPLE BACKTICKS}tsx {CODE}{CLOSING TRIPLE BACKTICKS}
            
            PAY SPECIAL ATTENTION TO THESE:
            - IMAGES MUST USES SOURCES GIVEN IN THE PROMPT. DON'T ASSUME WE HAVE ACCESS TO ANY OTHER SOURCES!
            - YOU ARE NOT ALLOWED TO USE THE <a> TAG. PLEASE USE THE <Link> TAG INSTEAD. THIS IS EXTREMELY IMPORTANT!
            - IF I SEE A <a> TAG THERE MY WHOLE FAMILY WILL DIE SO PLEASE DON'T USE IT!

            **NEVER USE THE <a> TAG AND ONLY USE GIVEN IMAGE SOURCES**!!!
        `,
      },
      {
        role: "user",
        content: [
          {
            type: "text",
            text: `Analyze this webpage:\n\n${text.slice(0, MAX_TEXT_LEN)}`,
          },
          ...imagesSliced.map(
            (img) =>
              ({
                type: "image_url",
                image_url: { url: img.src },
              }) as const,
          ),
          {
            type: "text",
            text: `These are the links to the images above, and their alts: 
                [${imagesSliced.map((image) => `${image.alt}: ${image.src}`).slice(0, MAX_IMAGES_LEN)}]
            `,
          },
          {
            type: "text",
            text: "REMEMBER TO NEVER USE THE <a> TAG AND ONLY USE GIVEN IMAGE SOURCES! MY LIFE DEPENDS ON IT!",
          },
        ],
      },
    ],
  });

  const generation = response.choices[0]?.message.content;
  if (!generation) {
    console.error("Error generating code.");
    return "";
  }

  const code = extractFromBackticks(generation, { tsx: true });
  if (!code) {
    console.error("No code found in the generated content.");
    return "";
  }

  return code;
}
