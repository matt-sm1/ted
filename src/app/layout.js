import { Chakra_Petch } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const chakraPetch = Chakra_Petch({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-chakra-petch",
});

export const metadata = {
  title: "Investing Wars",
  description:
    "Competitive trading challenges, market simulation, and strategy-based gameplay for modern investors.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${chakraPetch.variable} bg-background text-foreground`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}