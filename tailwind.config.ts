/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/theme";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-linear":
          "linear-gradient(140deg, #c80000 0%, #620000 50%, #ffffff 100%)",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      animation: {
        hideSideBarText: ".1s ease-in-out hideSideBarText forwards",
        closeSideBar: ".4s ease-in-out closeSideBar both",
        openSideBar: "1s ease-in-out openSideBar initial",
        moveIn: "1s ease-in-out moveIn forwards",
      },

      width: {
        "full-minus-56": "calc(100% - 14rem)",
        "full-minus-20": "calc(100% - 5rem)",
      },

      colors: {
        black: "rgb(30, 30, 30)",
        blackLight: "rgb(30, 30, 30, 0.4)",
        primary: "rgb(200, 0, 0)",
        primaryLight: "rgb(200, 0, 0, 0.4)",
        bgPrimary: "rgba(200, 0, 0, 0.01)",
        sideBarPrimary: "rgba(200, 0, 0, 0.05)",
        darkBgPrimary: "rgba(200, 0, 0, 0.03)",
        greyOff: "rgb(211, 211, 211)",
        grey: "rgb(217, 217, 217)",
        success: "rgb(0, 128, 0)",
        greenLightest: "rgba(0, 128, 0, 0.1)",
        white: "rgb(255, 255, 255)",
        deepBlack: "rgb(0, 0, 0)",
        orange: "rgb(242, 72, 34)",
        orangeLightest: "rgba(242, 72, 34, 0.1)",
        orangeLineLight: "rgba(242, 72, 34, 0.3)",
        graphBg: "rgb(248, 242, 242)",
        darkGraphBg: "rgb(86, 86, 86)",
        graphLine: "rgb(230, 175, 175)",
        blue: "rgb(0, 35, 123)",
        blueLight: "rgb(0,35,123, 0.4)",
        yellow: "rgb(255, 255, 0)",
        yellowLight: "rgb(255, 255, 0, 0.4)",
        pending: "rgb(255, 168, 0)",
        sunColor: "rgb(255, 199,0)",
        tableHead: "rgba(200, 0, 0, 0.11)",
        tableColorI: "rgba(243, 239, 235, 0.62)",
        dateColor: "rgb(144, 139, 120)",
      },
    },
  },
  plugins: [require("daisyui"), nextui()],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["[data-theme=light]"],
          primary: "rgb(200, 0, 0)",
          secondary: "oklch(69.71% 0.329 342.55)",
          "secondary-content": "oklch(98.71% 0.0106 342.55)",
          accent: "oklch(76.76% 0.184 183.61)",
          neutral: "#2B3440",
          "neutral-content": "#D7DDE4",
          "base-100": "oklch(100% 0 0)",
          "base-200": "#F2F2F2",
          "base-300": "#E5E6E6",
          "base-content": "#1f2937",
        },
      },
      {
        dark: {
          ...require("daisyui/src/theming/themes")["[data-theme=dark]"],
          primary: "rgb(200, 0, 0)",
          secondary: "oklch(74.8% 0.26 342.55)",
          accent: "oklch(74.51% 0.167 183.61)",
          neutral: "#2a323c",
          "neutral-content": "#A6ADBB",
          "base-100": "#1d232a",
          "base-200": "#191e24",
          "base-300": "#15191e",
          "base-content": "#A6ADBB",
        },
      },
    ],
  },
};
export default config;
