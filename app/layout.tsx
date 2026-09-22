import type { Metadata } from "next";
import { Schibsted_Grotesk, Martian_Mono, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

import LetterGlitch from "@/components/LetterGlitch";
import Aurora from "@/components/Aurora";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const mchibstedGrotesk = Schibsted_Grotesk({
  variable: "--font-schibsted-grotesk",
  subsets: ["latin"],
});

const martianMono = Martian_Mono({
  variable: "--font-martian-mono  ",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DevFlow",
  description: "Built for dev events",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn(
        "min-h-screen",
        "antialiased",
        mchibstedGrotesk.variable,
        martianMono.variable,
        "font-sans",
        geist.variable,
      )}
    >
      <div className="absolute inset-0 top-0 z-[-1] min-h-screen">
        {/* <LetterGlitch
          glitchSpeed={50}
          centerVignette={true}
          outerVignette={false}
          smooth
          speed={10}
          colors={["#2b4539", "#61dca3", "#61b3dc"]}
          showCenterVignette
          showOuterVignette={false}
        /> */}

        <Aurora
          colorStops={["#7cff67", "#B497CF", "#5227FF"]}
          blend={0.5}
          amplitude={1.0}
          speed={1}
        />
      </div>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
