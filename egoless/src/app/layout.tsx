import type { Metadata } from "next";
import { Montserrat } from 'next/font/google';
import "./globals.css";
import Nav from "./component/nav/page";
import MyWork from "./myWork/page";



const monserrat = Montserrat({
  weight: ['300', '400', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Mathew Jason* Jeong",
  description: "I Make Stuff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth overflow-x-hidden">
      <body className={`${monserrat.className} overflow-x-hidden bg-neutral-800 relative`}>
        <Nav></Nav>
        {children}
        </body>
    </html>
  );
}
