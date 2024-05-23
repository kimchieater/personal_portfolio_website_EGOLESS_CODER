import type { Metadata } from "next";
import { Montserrat } from 'next/font/google';
import "./globals.css";
import Nav from "./component/nav/page";




const monserrat = Montserrat({
  weight: ['300', '400', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

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
    <html lang="en" className="!scroll-smooth">
      <body className={`${monserrat.className} overflow-x-hidden bg-red-600`}>
        <Nav></Nav>
        {children}
        </body>
    </html>
  );
}
