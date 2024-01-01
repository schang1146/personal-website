import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sammy Chang",
  description: "Sammy Chang's Personal Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} min-h-screen flex flex-col mx-auto px-6 text-black dark:text-white bg-white dark:bg-black`}
      >
        <Navbar></Navbar>
        <main>{children}</main>
      </body>
    </html>
  );
}
