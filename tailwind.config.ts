import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textColor: {
        "custom-hue-1": "#be7c1a",
        "custom-hue-2": "#9dbe1a",
        "custom-hue-3": "#3bbe1a",
        "custom-hue-4": "#1abe5c",
        "custom-hue-5": "#1abebe",
        "custom-hue-6": "#1a5cbe",
        "custom-hue-7": "#3b1abe",
        "custom-hue-8": "#9d1abe",
        "custom-hue-9": "#be1a7c",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
