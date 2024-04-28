import localFont from "next/font/local";

export const galinsFont = localFont({
  src: "./galins.otf",
  display: "swap",
  variable: "--font-galins",
  fallback: ["ui-serif"],
});
