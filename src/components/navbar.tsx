import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

import { ThemeToggleOptions } from "./layout";

export default function Navbar({
  themeToggle,
  setThemeToggle,
}: {
  themeToggle: ThemeToggleOptions | undefined;
  setThemeToggle: Dispatch<SetStateAction<ThemeToggleOptions | undefined>>;
}) {
  return (
    <nav className="flex items-center justify-between py-4">
      <div>
        <Link href="/">&#60;sc&#47;&#62;</Link>
      </div>
      <ul>
        <li className="flex items-center [&>*]:ml-4">
          <button
            className={`${
              themeToggle === "system" ? "bg-gray-300" : ""
            } p-2 rounded-full dark:invert`}
            onClick={() => setThemeToggle("system")}
          >
            <img src="/computer.svg" alt="Computer"></img>
          </button>
          <button
            className={`${
              themeToggle === "light" ? "bg-gray-300" : ""
            } p-2 rounded-full dark:invert`}
            onClick={() => setThemeToggle("light")}
          >
            <img src="/sun.svg" alt="Sun"></img>
          </button>
          <button
            className={`${
              themeToggle === "dark" ? "bg-gray-300" : ""
            } p-2 rounded-full dark:invert`}
            onClick={() => setThemeToggle("dark")}
          >
            <img src="/moon.svg" alt="Moon"></img>
          </button>
          <Link href="/">home</Link>
          <Link
            href="/projects"
            className="pointer-events-none line-through text-gray-700"
            aria-disabled="true"
            tabIndex={-1}
          >
            projects
          </Link>
        </li>
      </ul>
    </nav>
  );
}
