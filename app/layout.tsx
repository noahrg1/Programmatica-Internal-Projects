import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Programmatica Projects",
  description: "Internal projects hub for Programmatica.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
