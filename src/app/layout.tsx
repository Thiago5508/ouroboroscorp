import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Nunito } from 'next/font/google';
import Head from "next/head";
import { Inter } from 'next/font/google';
import Temp from "@/components/Temp";

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
const inter = Inter({
  subsets: ['latin'],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: "OubCorp - Ouroboros Corporation",
  description: "Empresa voltado ao ramo de WEBDesign,Websistemas e desenvolvimento Web/App",
  authors: [
    { name: "OubCorp - Ouroboros Corporation" }
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords: "OubCorp, Ouroboros Corporation, WebDesign, Websistemas, Desenvolvimento Web, Desenvolvimento App, Web Solutions, oubcorp, oub",
  metadataBase: new URL("https://www.oubcorp.store/"),
  verification: {
    google: "wLMyYixsFwDgjWP_ozzh0rtskIlHb-_bBJzZEq97AEQ",
  },
  icons: {
    icon: "/favicon.ico", // Caminho para o favicon
  },
  openGraph: {
    title: 'OubCorp - Ouroboros Corporation',
    description: 'Empresa voltada ao ramo de WebDesign, Websistemas e desenvolvimento Web/App',
    url: 'https://ouroboroscorp.vercel.app',
    siteName: 'OubCorp',
    images: [
      {
        url: '/og-image.webp',
        width: 800,
        height: 600,
        alt: 'OubCorp Logo',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@oubcorp',
    creator: '@oubcorp',
    images: [
      {
        url: '/og-image.webp',
        alt: 'OubCorp Logo',
      },
    ],
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
        className={`${inter.className} npm${geistSans.variable} ${geistMono.variable} antialiased bg-white pt-28`}
      >

        <Header />
        <Temp/>
        {children}
        <Footer />

      </body>
    </html>
  );
}
