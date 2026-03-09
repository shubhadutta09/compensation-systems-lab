import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

export const metadata: Metadata = {
  title: "The Compensation Systems Lab",
  description: "Applied compensation research using behavioral science, organizational psychology, labor economics, and analytics."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="page-wrap">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
