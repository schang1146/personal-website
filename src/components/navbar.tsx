import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

import ThemeToggle, { ThemeToggleOptions } from "./theme-toggle";

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
        <input placeholder="Test Input"></input>
      </div>
      <ul className="flex items-center gap-4">
        <li>
          <ThemeToggle
            themeToggle={themeToggle}
            setThemeToggle={setThemeToggle}
          ></ThemeToggle>
        </li>
        <ul className="flex gap-4">
          <li>
            <Link href="/">home</Link>
          </li>
          <li>
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
      </ul>
    </nav>
  );
}
