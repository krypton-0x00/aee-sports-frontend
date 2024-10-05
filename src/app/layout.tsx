import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Home/Navbar";
import { Footer } from "@/components/Home/Footer";
  

export const metadata: Metadata = {
  title: "Aee sports",
  description: "Let build something great",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
 
  return (
    <html lang="en">
      <body className={`bg-black text-textColor dark`}>
         
   
          <Navbar />
          {children}
          <Footer />
    
         
      </body>
    </html>
  );
}
