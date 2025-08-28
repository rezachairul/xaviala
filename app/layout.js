import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { alexBrush, montserrat, poppins } from "./fonts";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Xaviala | Senja Xaviala",
  description: "Web Profile of Xaviala",
  icons: {
    icon: "/logo-xaviala.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${alexBrush.variable} ${montserrat.variable} ${poppins.variable}`}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
