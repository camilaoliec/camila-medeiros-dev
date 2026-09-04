import type { Metadata } from "next";
import { Roboto, Big_Shoulders } from "next/font/google";
import localFont from 'next/font/local'

import "./globals.css";
import { Toaster } from "sonner";

const awe = localFont({
  src: '../fonts/AwesomeW.woff2',
  variable: "--font-awe",
  display: 'swap',
});

const bobo = localFont({
  src: '../fonts/Bobogie-Groovy.otf',
  variable: "--font-bobo",
  display: 'swap',
});

export const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto',
})

export const bigS = Big_Shoulders({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-bigS',
})

export const metadata: Metadata = {
  title: "Camila Medeiros",
  description: "Developpeuse Web - Front-end",
};

export default function RootLayout({
  children, 
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr" 
      className={`${roboto.variable} ${awe.variable} ${bobo.variable} ${bigS.variable} antialiased`}
    >
      <body className="min-h-dvh flex flex-col">
        {children}
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
