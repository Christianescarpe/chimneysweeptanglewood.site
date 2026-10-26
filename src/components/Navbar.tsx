'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Phone, Flame, Menu, X, ChevronDown, MapPin, Clock } from 'lucide-react';
import { siteData } from '@/lib/data';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);

  const { business, services, locations } = siteData;

  return (
    <header className="sticky top-0 z-50 w-full shadow-lg">
      {/* Top announcement / phone bar */}
      <div className="bg-navy-950 text-slate-300 text-xs sm:text-sm py-2 px-4 border-b border-navy-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-amber-500 font-medium">
              <MapPin className="w-3.5 h-3.5" />
              <span>Tanglewood, Fort Worth & Tarrant County, TX</span>
            </span>
            <span className="hidden md:flex items-center gap-1 text-slate-400">
              <Clock className="w-3.5 h-3.5" />
              <span>Mon - Sat: 8:00 AM - 6:00 PM</span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${business.phoneRaw}`}
              className="flex items-center gap-1.5 font-bold text-white hover:text-amber-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              <span>Call Us: {business.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-navy-900 border-b border-navy-800 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center shadow-md shadow-amber-900/30 group-hover:scale-105 transition-transform">
                <Flame className="w-7 h-7 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-black tracking-wider text-white uppercase font-serif">
                  EMBERCREST
                </span>
                <span className="text-[10px] sm:text-xs font-semibold tracking-widest text-amber-400 uppercase -mt-1">
                  CHIMNEY SWEEP • TANGLEWOOD
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              <Link
                href="/"
                className="px-3 py-2 text-sm font-semibold text-slate-200 hover:text-amber-400 transition-colors"
              >
                Home
              </Link>

              {/* Services Dropdown */}
              <div className="relative group" onMouseLeave={() => setServicesOpen(false)}>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  onMouseEnter={() => setServicesOpen(true)}
                  className="flex items-center gap-1 px-3 py-2 text-sm font-semibold text-slate-200 hover:text-amber-400 transition-colors"
                >
                  <span>Services</span>
                  <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                </button>

                <div className="absolute left-0 mt-1 w-72 rounded-xl bg-navy-950/95 backdrop-blur-xl border border-navy-700 shadow-2xl py-2 hidden group-hover:block transition-all z-50">
                  <div className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-amber-500 border-b border-navy-800">
                    Our Chimney Services
                  </div>
                  <div className="max-h-96 overflow-y-auto py-1">
                    {services.map((s) => (
                      <Link
                        key={s.slug}
                        href={s.slug}
                        className="block px-4 py-2 text-xs sm:text-sm text-slate-300 hover:bg-navy-800 hover:text-amber-400 transition-colors"
                      >
                        {s.title.replace(' in Fort Worth, TX', '')}
                      </Link>
                    ))}
                  </div>
                  <div className="p-2 border-t border-navy-800 bg-navy-900/50">
                    <Link
                      href="/services"
                      className="block text-center text-xs font-semibold text-amber-400 hover:underline py-1"
                    >
                      View All Services →
                    </Link>
                  </div>
                </div>
              </div>

              {/* Locations Dropdown */}
              <div className="relative group" onMouseLeave={() => setLocationsOpen(false)}>
                <button
                  onClick={() => setLocationsOpen(!locationsOpen)}
                  onMouseEnter={() => setLocationsOpen(true)}
                  className="flex items-center gap-1 px-3 py-2 text-sm font-semibold text-slate-200 hover:text-amber-400 transition-colors"
                >
                  <span>Service Areas</span>
                  <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                </button>

                <div className="absolute left-0 mt-1 w-64 rounded-xl bg-navy-950/95 backdrop-blur-xl border border-navy-700 shadow-2xl py-2 hidden group-hover:block transition-all z-50">
                  <div className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-amber-500 border-b border-navy-800">
                    Fort Worth Neighborhoods
                  </div>
                  <div className="max-h-96 overflow-y-auto py-1">
                    {locations.map((loc) => (
                      <Link
                        key={loc.slug}
                        href={loc.slug}
                        className="block px-4 py-2 text-xs sm:text-sm text-slate-300 hover:bg-navy-800 hover:text-amber-400 transition-colors"
                      >
                        {loc.title.replace('Chimney Sweep in ', '')}
                      </Link>
                    ))}
                  </div>
                  <div className="p-2 border-t border-navy-800 bg-navy-900/50">
                    <Link
                      href="/locations"
                      className="block text-center text-xs font-semibold text-amber-400 hover:underline py-1"
                    >
                      View All Locations →
                    </Link>
                  </div>
                </div>
              </div>

              {/* Blogs link */}
              <Link
                href="/blog"
                className="px-3 py-2 text-sm font-semibold text-slate-200 hover:text-amber-400 transition-colors"
              >
                Blog & Guides
              </Link>

              {/* Contact link */}
              <Link
                href="/contact"
                className="px-3 py-2 text-sm font-semibold text-slate-200 hover:text-amber-400 transition-colors"
              >
                Contact
              </Link>
            </div>

            {/* Desktop CTA Phone Button */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={`tel:${business.phoneRaw}`}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-md bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold text-sm tracking-wide shadow-lg shadow-amber-600/30 hover:scale-105 active:scale-95 transition-all"
              >
                <Phone className="w-4 h-4 fill-white" />
                <span>Call {business.phone}</span>
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-md text-slate-300 hover:text-white hover:bg-navy-800 focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-navy-950 border-b border-navy-800 px-4 pt-3 pb-6 space-y-3">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-semibold text-white hover:bg-navy-800 hover:text-amber-400"
            >
              Home
            </Link>

            {/* Services Accordion */}
            <div>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-semibold text-white hover:bg-navy-800"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesOpen && (
                <div className="pl-4 pr-2 py-2 space-y-1 bg-navy-900/60 rounded-lg mt-1">
                  {services.map((s) => (
                    <Link
                      key={s.slug}
                      href={s.slug}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-3 py-1.5 text-sm text-slate-300 hover:text-amber-400"
                    >
                      {s.title.replace(' in Fort Worth, TX', '')}
                    </Link>
                  ))}
                  <Link
                    href="/services"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-1.5 text-xs font-semibold text-amber-400 underline"
                  >
                    View All Services →
                  </Link>
                </div>
              )}
            </div>

            {/* Locations Accordion */}
            <div>
              <button
                onClick={() => setLocationsOpen(!locationsOpen)}
                className="w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-semibold text-white hover:bg-navy-800"
              >
                <span>Locations</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${locationsOpen ? 'rotate-180' : ''}`} />
              </button>
              {locationsOpen && (
                <div className="pl-4 pr-2 py-2 space-y-1 bg-navy-900/60 rounded-lg mt-1">
                  {locations.map((loc) => (
                    <Link
                      key={loc.slug}
                      href={loc.slug}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-3 py-1.5 text-sm text-slate-300 hover:text-amber-400"
                    >
                      {loc.title.replace('Chimney Sweep in ', '')}
                    </Link>
                  ))}
                  <Link
                    href="/locations"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-1.5 text-xs font-semibold text-amber-400 underline"
                  >
                    View All Locations →
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/blog"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-semibold text-white hover:bg-navy-800 hover:text-amber-400"
            >
              Blog & Fireplace Guides
            </Link>

            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-semibold text-white hover:bg-navy-800 hover:text-amber-400"
            >
              Contact Us
            </Link>

            {/* Mobile Call CTA */}
            <div className="pt-2">
              <a
                href={`tel:${business.phoneRaw}`}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-md bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold text-center shadow-md"
              >
                <Phone className="w-4 h-4 fill-white" />
                <span>Call Now: {business.phone}</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
