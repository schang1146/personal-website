import type { Metadata } from "next";
import "./globals.css";

import Layout from "@/components/layout";

export const metadata: Metadata = {
  title: "Sammy Chang",
  description: "Sammy Chang's Personal Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Layout>{children}</Layout>;
}
