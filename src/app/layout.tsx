import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Suspense } from "react";
import NavbarWithTicker from "@/components/layout/NavbarWithTicker";



export const metadata: Metadata = {
  title: "Bazar Dor",
  description: "Daily market price tracking web app",
};

export default   function RootLayout({ children }: LayoutProps<"/">) {
  
  return (
    <html
      lang="bn"

    >
      <body className="min-h-screen flex flex-col">
        <Suspense fallback={<Navbar products={[]} />}>
  <NavbarWithTicker />
</Suspense>
        
        {children}
        
        <Footer />
        </body>
    </html>
  );
}
