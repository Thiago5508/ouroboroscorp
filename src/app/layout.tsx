import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Montserrat,} from 'next/font/google';
import Temp from "@/components/Temp";
import Whatsapp from "@/components/Whatsapp";
import { SpeedInsights } from "@vercel/speed-insights/next"

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
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
        className={`${montserrat.className} npm${geistSans.variable} ${geistMono.variable} antialiased bg-white pt-28`}
      >

        <Header />
        <Temp/>
        {children}
        <Whatsapp/>
        <Footer />

      </body>
    </html>
  );
}
