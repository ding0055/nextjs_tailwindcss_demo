import { Inter } from "next/font/google";
import "./globals.css";
import "./customer.css";
import Header from "@/components/Header";
import Providers from "./Providers";
import Search from "@/components/Search";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NestJS Demo",
  description: "This is for demo nextjs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <Header />
          <Search />
          {children}
        </Providers>
      </body>
    </html>
  );
}
