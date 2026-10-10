import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";



export const metadata: Metadata = {
  title: "Bazar Dor",
  description: "Daily market price tracking web app",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="bn"

    >
      <body className="min-h-screen flex flex-col">
        <Navbar />
        
        {children}
        
        <Footer />
        </body>
    </html>
  );
}
