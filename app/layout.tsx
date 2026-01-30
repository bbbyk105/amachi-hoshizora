import "./globals.css";
import { Inter } from "next/font/google";
import { CartProvider } from "@/store/cart";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  title: "AMACHI HOSHISORA EUR",
  description:
    "Japanese sake and traditional ceramics. AMACHI HOSHISORA — European store, all prices in EUR.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={inter.variable}>
      <body className="min-h-screen font-sans antialiased bg-background text-foreground">
        <CartProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </CartProvider>
      </body>
    </html>
  );
}
