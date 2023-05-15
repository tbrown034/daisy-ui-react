import "./globals.css";
import { Inter } from "next/font/google";
import Carousel from "./Layout/Carousel";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";
import Hero from "./Layout/Hero";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Daisy UI React",
  description: "Trying out Daisy React",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <Hero />
        <Carousel />
        {children}
        <Footer />
      </body>
    </html>
  );
}
