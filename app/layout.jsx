// RootLayout.js (your existing layout file)
import localFont from "next/font/local";
import Heebo from "next/font/local";
import Litarata from "next/font/local";
import "./globals.css";
import ThreeVerticalLines from "./components/ThreeVerticalLines";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const litarata = localFont({
  src: "./fonts/Literata-VariableFont_opsz,wght.ttf",
  variable: "--font-geist-mono",
  weight: "100 200 300 400 500 600 700 800 900",
});
const heebo = localFont({
  src: "./fonts/Heebo-SemiBold.ttf",
  variable: "--font-geist-mono",
  weight: "100 200 300 400 500 600 700 800 900",
});

export const metadata = {
  title: "Web Coronet",
  description: "Web Coronet | A Trusted Service Agency",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${heebo} ${litarata} antialiased relative  bg-[#F7F7F7]`}>
        <Header />
        <ThreeVerticalLines /> {/* Add the vertical lines component */}
        <div className="w-10/12 max-w-screen-2xl mx-auto">
          {children}
        </div>
        <Footer/>
      </body>
    </html>
  );
}