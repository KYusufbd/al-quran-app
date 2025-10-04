import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import HiddenArea from "./components/hidden";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Al-Quran App",
  description: "Al-Quran Project By Sunnah Today",
};

export default function RootLayout({ children }) {
  return (
    <html id="html" lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-base-200`}
      >
        <Navbar />
        <HiddenArea />
        {children}
      </body>
    </html>
  );
}
