import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import { AuthProvider } from "@/providers/auth";
import { ModalProvider } from "@/providers/modal";
import Footer from "@/components/Footer";
import { Nunito } from 'next/font/google';
import Head from "next/head";

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
  description: "Empresa voltado ao ramo de WEBDesign,Websistemas e desenvolvimento Web/App",
  keywords: "OubCorp, Ouroboros Corporation, WebDesign, Websistemas, Desenvolvimento Web, Desenvolvimento App, Web Solutions, oubcorp, oub",
  verification:{
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
      <Head>
        {/* Meta tags personalizadas */}
        <meta name="author" content="OubCorp - Ouroboros Corporation" />
        <link rel="canonical" href="https://ouroboroscorp.vercel.app" />
        <meta name="robots" content="index, follow"></meta>
      </Head>
      <body
        className={`${nunito.className} npm${geistSans.variable} ${geistMono.variable} antialiased bg-custom pt-28`}
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
