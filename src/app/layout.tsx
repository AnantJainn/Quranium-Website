import type { Metadata } from "next";
import { Inknut_Antiqua } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Import Inknut Antiqua font with specific weights
const inknutAntiqua = Inknut_Antiqua({
  subsets: ["latin"],
  weight: ["300", "400", "500"], // Added 300 for lighter weight
});

export const metadata: Metadata = {
  title: "Quranium",
  description: "Website for Quranium",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-[#E6E6E6] text-slate-950">
      <body className={`${inknutAntiqua.className} min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
