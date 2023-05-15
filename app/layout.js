import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";

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
        {children}
        <Footer />
      </body>
    </html>
  );
}
