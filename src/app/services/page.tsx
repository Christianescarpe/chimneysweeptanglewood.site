import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { ArrowRight, Phone, ShieldCheck, Flame } from 'lucide-react';
import { siteData } from '@/lib/data';
import HeroBackgroundSlides from '@/components/HeroBackgroundSlides';

export const metadata: Metadata = {
  title: 'Our Chimney & Fireplace Services | Embercrest Chimney Sweep Tanglewood',
  description: 'Explore all professional chimney services in Fort Worth, TX. Cleaning, inspections, masonry repair, cap installation, crown repair, leak fixes, and dryer vent care.',
  alternates: {
    canonical: '/services',
  }
};

export default function ServicesPage() {
  const { services, business } = siteData;

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="relative bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 text-white py-16 sm:py-24 border-b border-navy-800 overflow-hidden">
        {/* Background Image Slides (70% Opacity) */}
        <HeroBackgroundSlides />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-800/80 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Complete Care For Your Chimney & Fireplace</span>
          </span>
          <h1 className="text-3xl sm:text-5xl font-black font-serif text-white tracking-tight uppercase mb-4">
            Chimney Services in Fort Worth, TX
          </h1>
          <div className="w-16 h-1 bg-amber-500 mx-auto mb-6 rounded-full" />
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
            From routine soot and creosote removal to complex masonry rebuilding, Embercrest Chimney Sweep Tanglewood delivers dependable solutions with plain-language reports.
          </p>
        </div>
      </section>

      {/* Grid of all services */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.slug}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-amber-400/50 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative aspect-[16/10] bg-navy-950 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-navy-950/80 backdrop-blur-md text-[11px] font-semibold text-amber-400 px-2.5 py-1 rounded-full border border-navy-700">
                      Fort Worth, TX
                    </div>
                  </div>

                  <div className="p-6">
                    <h2 className="text-xl font-bold font-serif text-navy-950 group-hover:text-amber-600 transition-colors mb-3">
                      <Link href={service.slug}>
                        {service.title.replace(' in Fort Worth, TX', '')}
                      </Link>
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 line-clamp-3">
                      {service.metaDescription}
                    </p>
                  </div>
                </div>

                <div className="px-6 py-4 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between">
                  <Link
                    href={service.slug}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-600 group-hover:text-amber-700"
                  >
                    <span>Service Details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <a
                    href={`tel:${business.phoneRaw}`}
                    className="text-xs font-semibold text-slate-500 hover:text-amber-600"
                  >
                    Call {business.phone}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-navy-950 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-black font-serif mb-4">
            Unsure Which Service Your Chimney Needs?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mb-8 font-light">
            Give us a call. We will discuss your situation and recommend only the services that are genuinely necessary.
          </p>
          <a
            href={`tel:${business.phoneRaw}`}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-lg bg-amber-600 hover:bg-amber-500 text-white font-bold text-sm uppercase tracking-wider transition-colors shadow-lg"
          >
            <Phone className="w-4 h-4 fill-white" />
            <span>Call (682) 350-5722</span>
          </a>
        </div>
      </section>
    </div>
  );
}
