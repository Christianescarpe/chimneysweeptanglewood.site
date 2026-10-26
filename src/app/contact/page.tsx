import Link from 'next/link';
import type { Metadata } from 'next';
import { Phone, MapPin, Clock, Flame } from 'lucide-react';
import { siteData } from '@/lib/data';
import HeroBackgroundSlides from '@/components/HeroBackgroundSlides';

export const metadata: Metadata = {
  title: 'Contact Embercrest Chimney Sweep Tanglewood | Fort Worth, TX',
  description: 'Call Embercrest Chimney Sweep Tanglewood at (682) 350-5722 for chimney cleaning, inspection, and masonry repair in Fort Worth, TX.',
  alternates: {
    canonical: '/contact/',
  }
};

export default function ContactPage() {
  const { business } = siteData;

  return (
    <div className="bg-white">
      {/* Hero Header */}
      <section className="relative bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 text-white py-16 sm:py-20 border-b border-navy-800 overflow-hidden">
        {/* Background Image Slides (70% Opacity) */}
        <HeroBackgroundSlides />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <nav className="mb-4 flex items-center justify-center gap-2 text-xs text-slate-400">
            <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-amber-400 font-medium">Contact</span>
          </nav>
          <h1 className="text-3xl sm:text-5xl font-black font-serif text-white tracking-tight uppercase mb-4">
            Contact Embercrest Chimney Sweep
          </h1>
          <div className="w-16 h-1 bg-amber-500 mx-auto mb-6 rounded-full" />
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
            Ready to schedule chimney sweeping, safety inspections, or repairs? Call our Fort Worth team directly for immediate assistance.
          </p>
        </div>
      </section>

      {/* Direct Contact Card with Phone CTA (No contact forms) */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 shadow-sm text-center">
            <div className="w-16 h-16 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center mx-auto mb-6">
              <Phone className="w-8 h-8" />
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-navy-950 mb-3">
              Request an Estimate or Schedule Service
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto mb-8 leading-relaxed">
              We handle scheduling and estimates by phone so we can quickly discuss your fireplace type, answer questions, and arrange service without delay.
            </p>

            {/* Direct Phone CTA Button */}
            <div className="mb-10">
              <a
                href={`tel:${business.phoneRaw}`}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:from-amber-600 hover:to-amber-800 text-white font-black text-lg uppercase tracking-wider shadow-xl shadow-amber-600/30 hover:scale-105 active:scale-95 transition-all"
              >
                <Phone className="w-5 h-5 fill-white" />
                <span>Call {business.phone}</span>
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left border-t border-slate-200 pt-8">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-600 shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-navy-950 text-sm">Headquarters Address</h3>
                  <p className="text-xs text-slate-600 mt-1">{business.address}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-amber-600 shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-navy-950 text-sm">Service Hours</h3>
                  <p className="text-xs text-slate-600 mt-1">Monday – Saturday: 8:00 AM – 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
