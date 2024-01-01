import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-4">
      <div>
        <Link href="/">&#60;sc&#47;&#62;</Link>
      </div>
      <ul>
        <li className="[&>*]:ml-4">
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
