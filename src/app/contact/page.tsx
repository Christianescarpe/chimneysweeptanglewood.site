import Link from 'next/link';
import type { Metadata } from 'next';
import { 
  Phone, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  ArrowRight, 
  ExternalLink,
  Flame,
  CheckCircle2
} from 'lucide-react';
import { siteData } from '@/lib/data';
import HeroBackgroundSlides from '@/components/HeroBackgroundSlides';

export const metadata: Metadata = {
  title: 'Contact Embercrest Chimney Sweep Tanglewood | Phone, Address & Map',
  description: 'Contact Embercrest Chimney Sweep in Tanglewood, Fort Worth, TX. Call (682) 350-5722 for chimney cleaning, inspection, and repair. 2925 Riverglen Dr with map and directions.',
  alternates: {
    canonical: '/contact/',
  },
  openGraph: {
    title: 'Contact Embercrest Chimney Sweep Tanglewood | Fort Worth, TX',
    description: 'Call (682) 350-5722 for chimney sweeping, inspection, and repair in Fort Worth. Located at 2925 Riverglen Dr, Fort Worth, TX 76109.',
    url: 'https://chimneysweeptanglewood.site/contact/',
  }
};

export default function ContactPage() {
  const { business, locations } = siteData;

  const mapDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=Embercrest+Chimney+Sweep+Tanglewood+2925+Riverglen+Dr+Fort+Worth+TX+76109`;

  return (
    <div className="bg-white">
      {/* 1. HERO HEADER WITH 70% OPACITY BACKGROUND SLIDES */}
      <section className="relative bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 text-white pt-16 pb-24 lg:pt-24 lg:pb-32 overflow-hidden border-b border-navy-800">
        <HeroBackgroundSlides />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <nav className="flex items-center justify-center gap-2 text-xs sm:text-sm text-slate-400">
            <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-amber-400 font-medium">Contact</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-800/80 border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-semibold tracking-wide uppercase">
            <MapPin className="w-4 h-4 text-amber-400" />
            <span>Tanglewood • Fort Worth, TX</span>
          </div>

          <h1 className="text-3xl sm:text-5xl xl:text-6xl font-black uppercase tracking-tight text-white font-serif leading-[1.15]">
            Contact Embercrest Chimney Sweep
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-light">
            Ready to schedule chimney sweeping, safety inspections, or masonry repairs? Call our Fort Worth team directly for immediate assistance.
          </p>

          {/* Direct CTA Phone Button */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              className="btn btn-primary w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-lg bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:from-amber-600 hover:to-amber-800 text-white font-black text-sm uppercase tracking-wider shadow-xl shadow-amber-600/30 hover:scale-105 active:scale-95 transition-all"
              href={`tel:${business.phoneRaw}`}
            >
              <Phone className="w-4 h-4 fill-white" />
              <span>Call Now: {business.phone}</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. CONTACT INFORMATION CARDS (Phone, Address, Hours) */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-2 block">
              Direct Communication
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 font-serif tracking-tight">
              Get in Touch with Our Team
            </h2>
            <div className="w-16 h-1 bg-amber-500 mx-auto mt-4 mb-4 rounded-full" />
            <p className="text-base sm:text-lg text-slate-600">
              We handle scheduling and estimates by phone so we can quickly discuss your fireplace type, answer questions, and arrange service without delay.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Phone Card */}
            <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-xl hover:border-amber-400 transition-all flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center mb-6 shadow-sm">
                  <Phone className="w-7 h-7" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-600 block mb-1">
                  Immediate Response
                </span>
                <h3 className="text-2xl font-bold font-serif text-navy-950 mb-3">
                  Phone Support
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Call our local line for scheduling, fireplace maintenance questions, or free estimates.
                </p>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 mb-6">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Direct Dial</p>
                  <a
                    href={`tel:${business.phoneRaw}`}
                    className="text-xl sm:text-2xl font-black text-navy-950 hover:text-amber-600 transition-colors font-mono"
                  >
                    {business.phone}
                  </a>
                </div>
              </div>

              <div>
                <a
                  href={`tel:${business.phoneRaw}`}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm uppercase tracking-wider transition-all shadow-md shadow-amber-500/20"
                >
                  <Phone className="w-4 h-4 fill-white" />
                  <span>Call Us Now</span>
                </a>
              </div>
            </div>

            {/* Address Card */}
            <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-xl hover:border-amber-400 transition-all flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center mb-6 shadow-sm">
                  <MapPin className="w-7 h-7" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-600 block mb-1">
                  Service Headquarters
                </span>
                <h3 className="text-2xl font-bold font-serif text-navy-950 mb-3">
                  Physical Location
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Our dispatch and field service office is based in the heart of Tanglewood, Fort Worth.
                </p>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 mb-6">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Address</p>
                  <p className="text-base font-bold text-navy-950">
                    {business.address}
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Near Trinity River Trails • Tanglewood
                  </p>
                </div>
              </div>

              <div>
                <a
                  href={mapDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg border-2 border-navy-950 hover:bg-navy-950 hover:text-white text-navy-950 font-bold text-sm uppercase tracking-wider transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Get Driving Directions</span>
                </a>
              </div>
            </div>

            {/* Hours Card */}
            <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-xl hover:border-amber-400 transition-all flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center mb-6 shadow-sm">
                  <Clock className="w-7 h-7" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-600 block mb-1">
                  Availability
                </span>
                <h3 className="text-2xl font-bold font-serif text-navy-950 mb-3">
                  Operating Hours
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Standard chimney inspections, sweeping appointments, and emergency calls during the week.
                </p>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 mb-6 space-y-2 text-sm">
                  <div className="flex justify-between items-center text-slate-700">
                    <span className="font-semibold text-navy-950">Mon – Sat:</span>
                    <span>8:00 AM – 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center text-slate-500">
                    <span className="font-semibold">Sunday:</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 p-3 rounded-lg">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Open for Phone Scheduling Monday–Saturday</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. VISIBLE GOOGLE MAP SECTION */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-2 block">
              Location &amp; Service Radius
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 font-serif tracking-tight">
              Find Us in Tanglewood, Fort Worth
            </h2>
            <div className="w-16 h-1 bg-amber-500 mx-auto mt-4 mb-4 rounded-full" />
            <p className="text-base sm:text-lg text-slate-600">
              Conveniently located at 2925 Riverglen Dr, our technicians provide prompt chimney service throughout Tanglewood and all surrounding Fort Worth neighborhoods.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-4 sm:p-8 shadow-xl">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-6 pb-6 border-b border-slate-200">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-amber-600 shrink-0" />
                  <h3 className="text-xl sm:text-2xl font-bold font-serif text-navy-950">
                    Embercrest Chimney Sweep Tanglewood
                  </h3>
                </div>
                <p className="text-slate-600 text-sm sm:text-base pl-7">
                  {business.address} • (682) 350-5722
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={`tel:${business.phoneRaw}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:from-amber-600 hover:to-amber-800 text-white font-bold text-sm uppercase tracking-wider shadow-md shadow-amber-600/20 transition-all"
                >
                  <Phone className="w-4 h-4 fill-white" />
                  <span>Call {business.phone}</span>
                </a>
                <a
                  href={mapDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-slate-300 hover:border-amber-500 hover:text-amber-600 text-navy-950 font-bold text-sm uppercase tracking-wider transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Google Maps</span>
                </a>
              </div>
            </div>

            {/* High-visibility Responsive Google Map Iframe */}
            <div className="w-full h-[400px] sm:h-[480px] lg:h-[540px] rounded-2xl overflow-hidden border border-slate-300 shadow-md bg-slate-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3357.120849093327!2d-97.389618!3d32.7094163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x81af90151c640691%3A0x7da6a4d7eaaf5b35!2sEmbercrest%20Chimney%20Sweep%20Tanglewood!5e0!3m2!1sen!2sph!4v1792998318292!5m2!1sen!2sph"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Embercrest Chimney Sweep Tanglewood Google Map"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. COMMUNITIES WE SERVE */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-2 block">
            Fort Worth Coverage
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-serif text-navy-950 mb-4">
            Serving Tanglewood &amp; Surrounding Neighborhoods
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto mb-8 rounded-full" />
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                href={loc.slug}
                className="location-link"
              >
                {loc.title.replace('Chimney Sweep in ', '')}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. BOTTOM CTA BANNER (Phone Only - No Forms) */}
      <section className="py-20 bg-navy-950 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-2 block">
            Ready to Schedule?
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-serif mb-4 text-white">
            Call Embercrest Chimney Sweep Today
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-8 font-light leading-relaxed">
            Ensure your hearth is clean, safe, and draft-ready. Speak directly with our Fort Worth specialists.
          </p>
          <div className="flex justify-center">
            <a
              className="btn btn-primary inline-flex items-center justify-center gap-3 px-10 py-5 rounded-lg bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:from-amber-600 hover:to-amber-800 text-white font-black text-lg uppercase tracking-wider shadow-xl shadow-amber-600/30 hover:scale-105 active:scale-95 transition-all"
              href={`tel:${business.phoneRaw}`}
            >
              <Phone className="w-5 h-5 fill-white" />
              <span>Call Now: {business.phone}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}