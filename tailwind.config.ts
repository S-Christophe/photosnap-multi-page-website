import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        pinterest: "#FFC593",
        instagram: "#BC7198",
        facebook: "#5A77FF",
        "light-grey": "#DFDFDF",
      },
      fontFamily: {
        DmSans: ["DmSans"],
        DmSansBold: ["DmSans-Bold"],
      },
    },
  },
  plugins: [],
};
export default config;
