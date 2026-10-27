import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingCallButton from '@/components/FloatingCallButton';
import { siteData } from '@/lib/data';

export const metadata: Metadata = {
  title: siteData.homepage.seoTitle,
  description: siteData.homepage.metaDescription,
  metadataBase: new URL('https://www.chimneysweeptanglewood.site'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: siteData.homepage.seoTitle,
    description: siteData.homepage.metaDescription,
    url: 'https://www.chimneysweeptanglewood.site',
    siteName: siteData.business.name,
    locale: 'en_US',
    type: 'website',
  },
  verification: {
    google: 'bgTXj6oT53WwNahdRMw8RImKd1y0IT_Rrjnu-VrjkhY',
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="google-site-verification" content="bgTXj6oT53WwNahdRMw8RImKd1y0IT_Rrjnu-VrjkhY" />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-slate-800 antialiased selection:bg-amber-500 selection:text-white">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <FloatingCallButton />
      </body>
    </html>
  );
}
