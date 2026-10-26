import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingCallButton from '@/components/FloatingCallButton';
import { siteData } from '@/lib/data';

export const metadata: Metadata = {
  title: {
    default: siteData.homepage.seoTitle,
    template: `%s | ${siteData.business.name}`
  },
  description: siteData.homepage.metaDescription,
  metadataBase: new URL('https://chimneysweeptanglewood.site'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: siteData.homepage.seoTitle,
    description: siteData.homepage.metaDescription,
    url: 'https://chimneysweeptanglewood.site',
    siteName: siteData.business.name,
    locale: 'en_US',
    type: 'website',
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
