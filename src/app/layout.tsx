import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import { AuthProvider } from "@/providers/auth";
import { ModalProvider } from "@/providers/modal";
import Footer from "@/components/Footer";
import { Nunito } from 'next/font/google';

const nunito = Nunito({
  subsets: ['latin'], // Subconjunto de caracteres que você deseja suportar
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"], // Pesos das fontes que você quer usar (400 = normal, 700 = bold)
});
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "OubCorp - Ouroboros Corporation",
  description: "Empresa voltado ao ramo de WEBDesing,Websistemas e desenvolvimento Web/App",
  verification:{
    google: "wLMyYixsFwDgjWP_ozzh0rtskIlHb-_bBJzZEq97AEQ",
  },
  icons: {
    icon: "../../public/favicon.png", // Caminho para o favicon
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunito.className} npm${geistSans.variable} ${geistMono.variable} antialiased bg-custom`}
      >
        <AuthProvider>
          <ModalProvider>
            <Header/>
            {children}
            <Footer/>
          </ModalProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
