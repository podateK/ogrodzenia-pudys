import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ogrodzenia Pudys | Bramy, Balustrady, Ogrodzenia",
  description: "Produkcja i montaż ogrodzeń, bram i balustrad. Solidność i jakość od lat.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" className={inter.className}>
      <body className="flex flex-col min-h-screen bg-slate-50 text-slate-900 antialiased">
        <Header />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
