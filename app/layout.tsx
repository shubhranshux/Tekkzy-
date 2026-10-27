import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import { SmoothScroll } from "@/components/smooth-scroll";
import { AppShell } from "@/components/app-shell";
import { Footer } from "@/components/footer";
import TekkBotFab from "@/components/tekkbot-fab";
import "@fontsource-variable/manrope/wght.css";
import "@fontsource-variable/space-grotesk/wght.css";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tekkzy — Intelligent Cloud Platform",
  description: "Build, operate and grow with Tekkzy.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={bricolage.variable} suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#125af5" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&display=swap" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.cdnfonts.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://fonts.cdnfonts.com/css/proxima-nova" />
      </head>
      <body>
        <SmoothScroll>
          <AppShell>
            <main className="site-page" style={{ minHeight: 'calc(100vh - 82px - 200px)' }}>
              {children}
            </main>
            <Footer />
            <TekkBotFab />
          </AppShell>
        </SmoothScroll>
      </body>
    </html>
  );
}
