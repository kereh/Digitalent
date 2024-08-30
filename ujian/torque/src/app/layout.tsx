import { type Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { TRPCReactProvider } from "@/trpc/react";
import { Toaster } from "@/components/ui/toaster";

import ThemeProvider from "@/components/theme/theme-provider";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer";

import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Torque",
  description:
    "Fueled by Passion, Driven by Torque Where Every Ride is a Testament to Power and Brotherhood.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable}`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <TRPCReactProvider>
            <main className="flex h-screen flex-col">
              <header>
                <Navbar />
              </header>
              <main className="container flex-1 px-6 md:px-16">{children}</main>
              <Footer />
            </main>
          </TRPCReactProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
