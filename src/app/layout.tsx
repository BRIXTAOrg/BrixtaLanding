// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/commons/navBar";
import Footer from "@/components/commons/footer";

export const metadata: Metadata = {
  title: "Brixta | Site & Supply",
  description: "Fixed construction crews and scheduled raw material deliveries.",
  icons: { icon: "/brixta.ico" }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className="antialiased min-h-screen flex flex-col">
        <NavBar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}