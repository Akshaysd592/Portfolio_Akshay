import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {FloatingDockDemo} from '@/components/Navbar'
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Akshay Dhobale",
  description: "Portfolio Web App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ThemeProvider
            
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
        
         <FloatingDockDemo/>
         
        {children}
       </ThemeProvider>
        </body>
    </html>
  );
}
