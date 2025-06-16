import React from 'react';
import type { Metadata } from "next";
import "./globals.css";
import Script from 'next/script'

import cn from 'classnames'
import { GoogleAnalytics } from '@next/third-parties/google'
import { BrandTitles_Output } from './const';
import DevTKD from './server-components/dev-tdk';
import { generateDescription, generateTitle } from '@/util';
import { BODY_PADDING } from './constants/styles';
import { ToastProvider } from './components/toast';
import Header from './components/header';

export const metadata: Metadata = {
  title: generateTitle(),
  description: generateDescription(),
  alternates: {
    canonical: 'https://www.phonenumbergenerator.app', // 请替换为您的实际域名
  },
  icons: [
    { rel: "icon", url: "/favicon.ico" }/* ,
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
  // 检查当前是否为开发环境
  const isDevelopment = process.env.NODE_ENV === 'development';
  const shouldLoadAnalytics = !isDevelopment;

  // console.log(process.env.NODE_ENV, `process.env.env`)
  return (
    <html lang="en">
      <head>
        {/* TrustBox script */}
        <Script
          type="text/javascript"
          src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
          async
        />
        {/* End TrustBox script */}
      </head>
      <body className={cn("antialiased bg-gray-100")}>
        <Header />
          <main className={cn("min-h-screen flex items-stretch flex-col pb-28 max-w-5xl mx-auto", BODY_PADDING)}>
          <ToastProvider>
            {children}
          </ToastProvider>
          </main>
          {/* <Providers /> */}
      </body>
      {shouldLoadAnalytics && <>
        <Script type="text/javascript" id="clarity-script">
          {`(function(c,l,a,r,i,t,y){
            c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments) };
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "s07jp0whpq");
          `}
        </Script>
        <GoogleAnalytics gaId="G-FL3XTQJHV4" />
      </>}
      {/* <DevTKD /> */}
    </html>
  );
}
