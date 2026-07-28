import type { Metadata } from "next";
import { Courier_Prime } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

const courierPrime = Courier_Prime({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-courier",
});

export const metadata: Metadata = {
  title: "Neha | Portfolio",
  description:
    "AI/ML Enthusiast & Data Science Developer — Integrated M.Sc. Chemistry @ NIT Rourkela",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${courierPrime.variable} font-[family-name:var(--font-courier)] bg-zinc-950 text-zinc-100 antialiased`}>
        <Sidebar />
        <main className="md:ml-[260px]">{children}</main>
      </body>
    </html>
  );
}
