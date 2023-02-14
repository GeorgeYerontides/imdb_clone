'use client'

import Header from "@/components/Header/Header";
import "./globals.css";
import Providers from "./Providers";
import Navbar from "@/components/Navbar/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers >
          <Header />
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
