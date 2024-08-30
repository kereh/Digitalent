import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { TRPCReactProvider } from "~/trpc/react";

import HeaderComponent from "~/components/header/header-component";
import ThemeProvider from "~/components/theme/theme-provider";
import Footer from "~/components/footer/footer";

export const metadata: Metadata = {
  title: "Motor ID",
  description: "Website kendaraan motor",
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
          disableTransitionOnChange
        >
          <TRPCReactProvider>
            <div className="flex h-screen flex-col">
              <div>
                <HeaderComponent />
              </div>
              <div className="container flex-1 py-4 mb-10">{children}</div>
              <Footer/>
            </div>
          </TRPCReactProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
