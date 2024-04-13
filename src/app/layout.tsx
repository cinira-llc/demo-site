import { PropsWithChildren } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cinira Demo",
  description: "Cinira components demo.",
  other: {
    cinBuildSource: process.env["BUILD_SOURCE"]!,
    cinBuildTimestamp: process.env["BUILD_TIMESTAMP"]!,
    cinBuildVersion: process.env["npm_package_version"]!,
  },
};

export default function RootLayout(props: Readonly<PropsWithChildren>) {
  const { children } = props;
  return (
    <html lang="en">
    <body className={inter.className}>
    <Script src="/js/status.js" />
    <header />
    {children}
    </body>
    </html>
  );
}
