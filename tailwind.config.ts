import type { Config } from "tailwindcss";
import daisyui from "daisyui";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        light: {
          primary: "#007BFF",
          secondary: "#57626f",
          accent: "#1fb2a6",
          neutral: "#2a323c",
          "base-100": "#fff",
          info: "#3abff8",
          success: "#36d399",
          warning: "#fbbd23",
          error: "#AC2C1C",
        },
        dark: {
          primary: "#80b3ff",
          secondary: "#c2c9d1",
          accent: "#70e2d7",
          neutral: "#d9e1e8",
          "base-100": "#1c2128",
          info: "#9fd9ff",
          success: "#a7f3d0",
          warning: "#fde68a",
          error: "#ff7d6b",
        },
      },
    ],
  },
  plugins: [daisyui],
};
export default config;
