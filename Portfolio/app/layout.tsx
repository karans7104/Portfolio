import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import StarsClient from "@/components/client/StarsClient";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "My portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#030014] overflow-y-scroll overflow-x-hidden max-w-[1855px] mx-auto">
        <StarsClient />
        <Navbar />
        <Footer />
        {children}
      </body>
    </html>
  );
}
