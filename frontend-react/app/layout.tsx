import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/landing/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Merix - Clinical Trial Enrollment",
  description: "Specialized AI solution for oncology clinical trials that combines precision patient matching based on biomarkers and genomic data with proactive retention management.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="pt-[72px]">{children}</main>
      </body>
    </html>
  );
}
