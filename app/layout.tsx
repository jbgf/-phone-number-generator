import React from 'react';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Inspector } from 'react-dev-inspector'
import Benifit from './images/content/DSC00229-tinypng.jpg'

import cn from 'classnames'
import Link from "next/link";
import Image from "next/image";
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { GoogleAnalytics } from '@next/third-parties/google'
import { BrandTitles_Output } from './const';
import DevTKD from './server-components/dev-tdk';
import { generateDescription, generateTitle } from '@/util';
const inter = Inter({ subsets: ["latin"] });
export const BODY_PADDING = "px-4 sm:px-6"

export const metadata: Metadata = {
  title: generateTitle(),
  description: generateDescription(),
  icons: [
    {rel: "icon", url: "/favicon.ico" }/* ,
    {rel: "icon", url: "/favicon-32x32.png" },
    { 
      rel: "apple-touch-icon", 
      url: "/apple-touch-icon.png" 
    } */
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isDev = process.env.NODE_ENV === "development"
  const Wrapper = isDev ? Inspector : React.Fragment;
  // console.log(process.env.NODE_ENV, `process.env.env`)
  return (
    <html lang="en">
      <Wrapper>
      <body className={cn(inter.className, "antialiased bg-gray-100")}>
      <header
          className={cn(
            "h-80 bg-transparent top-0 left-0 z-20 w-full py-3 flex flex-row flex-nowrap justify-between mx-autox items-stretch animate-in fade-in slide-in-from-top-4 duration-1000 ease-in-out",
            BODY_PADDING
          )}
          style={{backgroundImage: `url(${Benifit.src})`, backgroundPosition: 'bottom'}}
        >
          <Link
            className="pt-20 text-white text-lg font-medium flex flex-row flex-nowrap justify-center gap-x-1.5 pr-1.5 leading-none rounded-lg"
            href="/"
          >
            
            <h1 className="italic">Random Phone Number Generator</h1>
          </Link>

          
        </header>
        <main className={cn("min-h-screen flex items-stretch flex-col pb-28 max-w-5xl mx-auto", BODY_PADDING)}>
          <AntdRegistry>{children}</AntdRegistry>
        </main>
        {/* <Providers /> */}
      </body>
      </Wrapper>
      <GoogleAnalytics gaId="G-FL3XTQJHV4" />
      <DevTKD />
    </html>
  );
}
