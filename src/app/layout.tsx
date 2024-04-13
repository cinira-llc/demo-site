import { PropsWithChildren } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Link from "next/link";
import { Calculator, CloudSun, Home, LineChart, Map, Settings, TowerControl, Waypoints } from "lucide-react";

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
      <header className="bg-background border-t bottom-0 fixed flex flex-row inset-x-0 px-2 w-full md:hidden">
        <Link href="./"
              className="flex h-9 w-9 items-center justify-center"
              title="Home">
          <Home />
          <span className="sr-only">Home</span>
        </Link>
        <Link href="./facilities"
              className="flex h-9 w-9 items-center justify-center"
              title="Facilities">
          <TowerControl />
          <span className="sr-only">Facilities</span>
        </Link>
        <Link href="./weather"
              className="flex h-9 w-9 items-center justify-center"
              title="Weather">
          <CloudSun />
          <span className="sr-only">Weather</span>
        </Link>
        <Link href="./charts"
              className="flex h-9 w-9 items-center justify-center"
              title="Charts">
          <Map />
          <span className="sr-only">Charts</span>
        </Link>
        <Link href="./procedures"
              className="flex h-9 w-9 items-center justify-center"
              title="Procedures">
          <Waypoints />
          <span className="sr-only">Procedures</span>
        </Link>
        <Link href="./performance"
              className="flex h-9 w-9 items-center justify-center"
              title="Performance">
          <LineChart />
          <span className="sr-only">Performance</span>
        </Link>
        <Link href="./calculators"
              className="flex h-9 w-9 items-center justify-center"
              title="Calculators">
          <Calculator />
          <span className="sr-only">Calculators</span>
        </Link>
        <div className="grow" />
        <Link href="./settings"
              className="flex h-9 w-9 items-center justify-center"
              title="Settings">
          <Settings />
          <span className="sr-only">Settings</span>
        </Link>
      </header>
      <nav className="hidden md:flex bg-background border-r fixed flex-col inset-y-0 left-0 h-full p-2">
        <Link href="./"
              className="flex h-12 w-12 items-center justify-center"
              title="Home">
          <Home />
          <span className="sr-only">Home</span>
        </Link>
        <Link href="./facilities"
              className="flex h-12 w-12 items-center justify-center"
              title="Facilities">
          <TowerControl />
          <span className="sr-only">Facilities</span>
        </Link>
        <Link href="./weather"
              className="flex h-12 w-12 items-center justify-center"
              title="Weather">
          <CloudSun />
          <span className="sr-only">Weather</span>
        </Link>
        <Link href="./charts"
              className="flex h-12 w-12 items-center justify-center"
              title="Charts">
          <Map />
          <span className="sr-only">Charts</span>
        </Link>
        <Link href="./procedures"
              className="flex h-12 w-12 items-center justify-center"
              title="Procedures">
          <Waypoints />
          <span className="sr-only">Procedures</span>
        </Link>
        <Link href="./performance"
              className="flex h-12 w-12 items-center justify-center"
              title="Performance">
          <LineChart />
          <span className="sr-only">Performance</span>
        </Link>
        <Link href="./calculators"
              className="flex h-12 w-12 items-center justify-center"
              title="Calculators">
          <Calculator />
          <span className="sr-only">Calculators</span>
        </Link>
        <span className="grow" />
        <Link href="./settings"
              className="flex h-12 w-12 items-center justify-center"
              title="Settings">
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
