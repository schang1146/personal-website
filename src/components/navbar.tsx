import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

import { ThemeToggleOptions } from "./layout";

export default function Navbar({
  setThemeToggle,
}: {
  setThemeToggle: Dispatch<SetStateAction<ThemeToggleOptions>>;
}) {
  return (
    <nav className="flex items-center justify-between py-4">
      <div>
        <Link href="/">&#60;sc&#47;&#62;</Link>
      </div>
      <ul>
        <li className="[&>*]:ml-4">
          <button onClick={() => setThemeToggle("system")}>system</button>
          <button onClick={() => setThemeToggle("light")}>light</button>
          <button onClick={() => setThemeToggle("dark")}>dark</button>
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
