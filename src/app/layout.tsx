import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// import components
import Header from "@/containers/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Photosnap multi page website",
  description: "Photosnap multi page website solution",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
