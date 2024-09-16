"use client";

import { Inter } from "next/font/google";
import { useEffect, useState } from "react";

import Navbar from "./navbar";
import { Theme, ThemeToggleOptions } from "./theme-toggle";
import Footer from "./footer";

const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>();
  const [themeToggle, setThemeToggle] = useState<ThemeToggleOptions>();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setThemeToggle(
        (localStorage.getItem("themeToggle") as ThemeToggleOptions) ?? "system"
      );
    }
  }, []);

  useEffect(() => {
    if (!themeToggle) {
      return;
    }

    localStorage.setItem("themeToggle", themeToggle);
    function mediaQueryDarkModeHandler(event: MediaQueryListEvent) {
      event.matches ? setTheme("dark") : setTheme("light");
    }

    let mediaQueryDarkMode: MediaQueryList | null = null;

    if (themeToggle === "dark") {
      setTheme("dark");
    }
    if (themeToggle === "light") {
      setTheme("light");
    }
    if (themeToggle === "system") {
      mediaQueryDarkMode = window.matchMedia("(prefers-color-scheme: dark)");
      mediaQueryDarkMode.matches ? setTheme("dark") : setTheme("light");
      mediaQueryDarkMode.addEventListener("change", mediaQueryDarkModeHandler);
    }

    return () => {
      if (mediaQueryDarkMode !== null) {
        mediaQueryDarkMode.removeEventListener(
          "change",
          mediaQueryDarkModeHandler
        );
      }
    };
  }, [themeToggle]);

  return (
    <html lang="en" className={theme ?? "dark"}>
      <body
        className={`${inter.className} min-h-screen flex flex-col mx-auto px-6 text-black dark:text-white bg-white dark:bg-black`}
      >
        <Navbar
          themeToggle={themeToggle}
          setThemeToggle={setThemeToggle}
        ></Navbar>
        <main className="">{children}</main>
        <Footer></Footer>
      </body>
    </html>
  );
}
