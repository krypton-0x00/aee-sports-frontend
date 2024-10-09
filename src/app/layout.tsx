import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Home/Navbar";
import { Footer } from "@/components/Home/Footer";
import RecoilContextProvider from "@/Recoil/RecoilContextProvider";
  

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
         
      <RecoilContextProvider>
           <Navbar />
           {children}
           <Footer />
      </RecoilContextProvider>
    
         
      </body>
    </html>
  );
}
