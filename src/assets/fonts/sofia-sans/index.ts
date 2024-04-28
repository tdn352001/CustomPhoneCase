import localFont from "next/font/local";

export const sofiaFont = localFont({
  src: [
    {
      path: "./SofiaSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./SofiaSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },

    {
      path: "./SofiaSans-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./SofiaSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  fallback: ["ui-sans-serif"],
  display: "swap",
  variable: "--font-sofia",
});
