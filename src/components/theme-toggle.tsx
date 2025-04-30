import { Dispatch, SetStateAction } from "react";

export type Theme = "light" | "dark";
export type ThemeToggleOptions = "light" | "dark" | "system";

export default function ThemeToggle({
  themeToggle,
  setThemeToggle,
}: {
  themeToggle: ThemeToggleOptions | undefined;
  setThemeToggle: Dispatch<SetStateAction<ThemeToggleOptions | undefined>>;
}) {
  return (
    <div>
      <button
        className={`${
          themeToggle === "system" ? "bg-gray-300" : ""
        } p-2 rounded-full`}
        onClick={() => setThemeToggle("system")}
      >
        <img src="/computer.svg" alt="Computer"></img>
      </button>
      <button
        className={`${
          themeToggle === "light" ? "bg-gray-300" : ""
        } p-2 rounded-full`}
        onClick={() => setThemeToggle("light")}
      >
        <img src="/sun.svg" alt="Sun"></img>
      </button>
      <button
        className={`${
          themeToggle === "dark" ? "bg-gray-300" : ""
        } p-2 rounded-full`}
        onClick={() => setThemeToggle("dark")}
      >
        <img src="/moon.svg" alt="Moon"></img>
      </button>
    </div>
  );
}
