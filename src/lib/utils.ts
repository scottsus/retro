import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function extractFromBackticks(
  generation: string,
  opts?: { tsx?: boolean; js?: boolean },
) {
  let codeMatch;
  if (opts?.tsx) {
    codeMatch = generation.match(/```tsx\s*([\s\S]*?)\s*```/);
  } else if (opts?.js) {
    codeMatch = generation.match(/```js\s*([\s\S]*?)\s*```/);
  } else {
    codeMatch = generation.match(/```\s*([\s\S]*?)\s*```/);
  }

  return codeMatch ? codeMatch[1]?.trim() : null;
}

export function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch (error) {
    return false;
  }
}
