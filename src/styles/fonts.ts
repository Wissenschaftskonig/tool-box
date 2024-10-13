import localFont from "next/font/local";

const centuryGothic = localFont({
  src: [
    {
      path: "./fonts/CenturyRegular.ttf",
      style: "normal",
    },
    {
      path: "./fonts/CenturyItalic.ttf",
      style: "italic",
    },
    {
      path: "./fonts/CenturyBold.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/CenturyBoldItalic.ttf",
      weight: "900",
      style: "italic",
    },
  ],
});

export { centuryGothic };
