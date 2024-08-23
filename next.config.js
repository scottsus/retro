// next.config.js

await import("./src/env.js");

/** @type {import("next").NextConfig} */
const config = {
  images: {
    domains: ["www.ycombinator.com", "bookface-static.ycombinator.com", "img.youtube.com"],
  },
};

export default config;