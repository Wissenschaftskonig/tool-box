import type { Metadata } from "next";
import "./globals.css";
import { centuryGothic } from "../styles/fonts";
import ThemeContextProvider from "@/components/ThemeContextProvider";

export const metadata: Metadata = {
  title: "ToolBox",
  description: "A collection of components and styles",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-white dark:bg-black ${centuryGothic.className}`}>
        <ThemeContextProvider>{children}</ThemeContextProvider>
      </body>
    </html>
  );
}
