import { PropsWithChildren } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Link from "next/link";
import { Calculator, Home, LineChart, Map, Settings, Waypoints } from "lucide-react";

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
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <header className="bg-background border-b fixed flex flex-row inset-x-0 top-0 w-full md:hidden">
        <Link href="./"
              className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full text-lg font-semibold">
          <Home />
          <span className="sr-only">Home</span>
        </Link>
        <Link href="./calculators"
              className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full text-lg font-semibold">
          <Calculator />
          <span className="sr-only">Calculators</span>
        </Link>
        <Link href="./performance"
              className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full text-lg font-semibold">
          <LineChart />
          <span className="sr-only">Performance</span>
        </Link>
        <Link href="./charts"
              className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full text-lg font-semibold">
          <Map />
          <span className="sr-only">Charts</span>
        </Link>
        <Link href="./procedures"
              className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full text-lg font-semibold">
          <Waypoints />
          <span className="sr-only">Procedures</span>
        </Link>
        <span className="grow"/>
        <Link href="./settings"
              className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full text-lg font-semibold">
          <Settings />
          <span className="sr-only">Settings</span>
        </Link>
      </header>
      <nav className="hidden md:flex bg-background border-r fixed flex-col inset-y-0 left-0 h-full">
        <Link href="./"
              className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full text-lg font-semibold">
          <Home />
          <span className="sr-only">Home</span>
        </Link>
        <Link href="./calculators"
              className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full text-lg font-semibold">
          <Calculator />
          <span className="sr-only">Calculators</span>
        </Link>
        <Link href="./performance"
              className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full text-lg font-semibold">
          <LineChart />
          <span className="sr-only">Performance</span>
        </Link>
        <Link href="./charts"
              className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full text-lg font-semibold">
          <Map />
          <span className="sr-only">Charts</span>
        </Link>
        <Link href="./procedures"
              className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full text-lg font-semibold">
          <Waypoints />
          <span className="sr-only">Procedures</span>
        </Link>
        <span className="grow" />
        <Link href="./settings"
              className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full text-lg font-semibold">
          <Settings />
          <span className="sr-only">Settings</span>
        </Link>
      </nav>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {children}
      </main>
    </div>
    </body>
    </html>
  );
}
