import type { Config } from "tailwindcss";

const config = {
  content: [
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFA552",
        primaryLight: "#FFD1A1",
        dark: "#2C2C2C",
        light: "#FAF9F6",
        darkBg: "#1F1F1F",
      },
    },
  },
  safelist: [
    'bg-[--background]',
    'text-[--foreground]',
    'bg-[--primary]',
    'text-[--primary-foreground]',
    'bg-[--card]',
    'text-[--card-foreground]',
    'text-[--muted-foreground]',
  ],
  plugins: [],
} as unknown as Config;

export default config;
