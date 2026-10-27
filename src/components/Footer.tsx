import Link from 'next/link';
import Image from 'next/image';
import { Phone, MapPin, Flame, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { siteData } from '@/lib/data';

export default function Footer() {
  const { business, services, locations, blogs } = siteData;

  return (
    <footer className="bg-navy-950 text-slate-300 pt-16 pb-12 border-t border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1: Company Profile */}
          <div className="space-y-4">
            <Link href="/" className="inline-block group" aria-label="Embercrest Chimney Sweep Tanglewood Home">
              <div className="relative h-16 sm:h-20 w-44 sm:w-52">
                <Image
                  src="/images/logo.webp"
                  alt="Embercrest Chimney Sweep Tanglewood"
                  fill
                  sizes="(max-width: 640px) 176px, 208px"
                  className="object-contain object-left group-hover:scale-105 transition-transform"
                />
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed">
              Embercrest Chimney Sweep Tanglewood helps Fort Worth homeowners keep their fireplaces and chimneys clean, safe, and ready for every season.
            </p>

            <div className="pt-2 space-y-2.5 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-500 mt-1 shrink-0" />
                <span className="text-slate-300">{business.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <a
                  href={`tel:${business.phoneRaw}`}
                  className="font-semibold text-white hover:text-amber-400 transition-colors"
                >
                  {business.phone}
                </a>
              </div>
            </div>

            <div className="pt-3">
              <a
                href={`tel:${business.phoneRaw}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-md"
              >
                <Phone className="w-3.5 h-3.5 fill-white" />
                <span>Call Us Today</span>
              </a>
            </div>
          </div>

          {/* Column 2: Chimney Services */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4 border-b border-navy-800 pb-2 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-amber-500" />
              <span>Core Services</span>
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              {services.slice(0, 8).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={service.slug}
                    className="text-slate-400 hover:text-amber-400 transition-colors flex items-center justify-between group py-0.5"
                  >
                    <span>{service.title.replace(' in Fort Worth, TX', '')}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-amber-400" />
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-amber-400 hover:text-amber-300 font-semibold inline-block pt-1 text-xs uppercase tracking-wider"
                >
                  View All 10 Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Service Locations */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4 border-b border-navy-800 pb-2 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-amber-500" />
              <span>Service Areas</span>
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              {locations.slice(0, 8).map((loc) => (
                <li key={loc.slug}>
                  <Link
                    href={loc.slug}
                    className="text-slate-400 hover:text-amber-400 transition-colors flex items-center justify-between group py-0.5"
                  >
                    <span>{loc.title.replace('Chimney Sweep in ', '')}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-amber-400" />
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/locations"
                  className="text-amber-400 hover:text-amber-300 font-semibold inline-block pt-1 text-xs uppercase tracking-wider"
                >
                  View All Locations →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Blog Articles & Guides */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4 border-b border-navy-800 pb-2">
              Recent Guides
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {blogs.slice(0, 5).map((blog) => (
                <li key={blog.slug}>
                  <Link
                    href={blog.slug}
                    className="text-slate-400 hover:text-amber-400 transition-colors line-clamp-2 leading-snug"
                  >
                    {blog.title}
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link
                  href="/blog"
                  className="text-amber-400 hover:text-amber-300 font-semibold inline-block text-xs uppercase tracking-wider"
                >
                  Browse All Guides →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Embedded Google Map Section (Explicitly requested by user) */}
        <div className="bg-navy-900 border border-navy-800 rounded-2xl p-4 sm:p-6 mb-12 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                <MapPin className="w-5 h-5 text-amber-500" />
                <span>Our Service Headquarters in Fort Worth</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-400">
                2925 Riverglen Dr, Fort Worth, TX 76109 • Proudly serving Tanglewood and surrounding communities
              </p>
            </div>
            <div>
              <a
                href={`tel:${business.phoneRaw}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs uppercase tracking-wider transition-colors shrink-0"
              >
                <Phone className="w-3.5 h-3.5 fill-white" />
                <span>{business.phone}</span>
              </a>
            </div>
          </div>

          {/* Responsive Map Container with exact iframe provided by user */}
          <div className="w-full h-80 sm:h-96 rounded-xl overflow-hidden shadow-inner border border-navy-700 bg-navy-950">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3357.120849093327!2d-97.389618!3d32.7094163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x81af90151c640691%3A0x7da6a4d7eaaf5b35!2sEmbercrest%20Chimney%20Sweep%20Tanglewood!5e0!3m2!1sen!2sph!4v1792998318292!5m2!1sen!2sph"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Embercrest Chimney Sweep Tanglewood Location"
              className="w-full h-full"
            />
          </div>
        </div>

        {/* Bottom Bar with CTA */}
        <div className="border-t border-navy-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Embercrest Chimney Sweep Tanglewood. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
            <Link href="/services" className="hover:text-amber-400 transition-colors">Services</Link>
            <Link href="/locations" className="hover:text-amber-400 transition-colors">Locations</Link>
            <Link href="/blog" className="hover:text-amber-400 transition-colors">Blog</Link>
            <Link href="/contact" className="hover:text-amber-400 transition-colors">Contact</Link>
            <a href={`tel:${business.phoneRaw}`} className="text-amber-400 font-semibold hover:underline">
              {business.phone}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
