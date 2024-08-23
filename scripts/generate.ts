import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

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
            Use mono fonts whenever possible to add to the "retro" feel.
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
            - IF I SEE A <a> TAG THERE MY WHOLE FAMILY WILL DIE SO PLEASE DON'T USE IT!
        `,
      },
      {
        role: "user",
        content: [
          { type: "text", text: `Analyze this webpage:\n\n${text}` },
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

  const generatedCode = response.choices[0]?.message.content;
  if (!generatedCode) {
    console.error("Error generating code.");
    return "";
  }

  const codeMatch = generatedCode.match(/```tsx\s*([\s\S]*?)\s*```/);
  const code = codeMatch ? codeMatch[1]?.trim() : null;
  if (!code) {
    console.error("No code found in the generated content.");
    return "";
  }

  return code;
}
