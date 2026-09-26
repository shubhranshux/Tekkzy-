import type { Metadata } from "next";
import { SmoothScroll } from "@/components/smooth-scroll";
import { AppShell } from "@/components/app-shell";
import { Footer } from "@/components/footer";
import TekkBotFab from "@/components/tekkbot-fab";
import "@fontsource-variable/manrope/wght.css";
import "@fontsource-variable/space-grotesk/wght.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tekkzy — Intelligent Cloud Platform",
  description: "Build, operate and grow with Tekkzy.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#125af5" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(() => { try { const saved = localStorage.getItem('tekkzy-theme'); const theme = saved === 'dark' || saved === 'light' ? saved : (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'); document.documentElement.dataset.theme = theme; } catch (_) {} })();`,
          }}
        />
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
