import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Bazar Dor",
  description: "Daily market price tracking web app",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="bn"

    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
