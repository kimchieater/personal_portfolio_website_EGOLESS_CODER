import type { Metadata } from "next";

import "./globals.css";



export const metadata: Metadata = {
  title: "Egoless Coding",
  description: "I Make Stuff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-neutral-950">
        {children}
        </body>
    </html>
  );
}
