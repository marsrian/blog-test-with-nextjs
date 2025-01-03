import { ThemeProvider } from "next-themes";
import Header from "./components/Header";
import "./globals.css";
import ThemeCom from "./components/ThemeCom";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeModeScript } from "flowbite-react";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <head>
          <ThemeModeScript />
        </head>
        <body className="">
          <ThemeProvider>
            <ThemeCom>
              <Header />
              {children}
              {/* <Footer /> */}
            </ThemeCom>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
