import Link from 'next/link';
import { 
  Flame, 
  Search, 
  Wrench, 
  Shield, 
  Wind, 
  Hammer, 
  Layers, 
  Home, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { siteData } from '@/lib/data';

// Helper to pick an icon based on service slug
function getServiceIcon(slug: string) {
  if (slug.includes('cleaning')) return Flame;
  if (slug.includes('inspection')) return Search;
  if (slug.includes('repair')) return Wrench;
  if (slug.includes('cap')) return Shield;
  if (slug.includes('crown')) return Home;
  if (slug.includes('leak')) return Layers;
  if (slug.includes('relining')) return Layers;
  if (slug.includes('masonry')) return Hammer;
  if (slug.includes('smoke-chamber')) return Sparkles;
  if (slug.includes('dryer')) return Wind;
  return Wrench;
}

export default function ServicesGrid() {
  const { services } = siteData;

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-2 block">
            Comprehensive Chimney Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 font-serif tracking-tight">
            Our Services
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto mt-4 mb-4 rounded-full" />
          <p className="text-base sm:text-lg text-slate-600">
            A chimney does a hard job. It carries smoke, heat, and combustion gases out of your home while withstanding Texas heat, heavy rain, and sudden temperature swings.
          </p>
        </div>

        {/* 3x3 Grid of Service Cards matching template */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service) => {
            const Icon = getServiceIcon(service.slug);
            const cleanTitle = service.title.replace(' in Fort Worth, TX', '');

            return (
              <div
                key={service.slug}
                className="group bg-white rounded-xl border border-slate-200/80 p-6 sm:p-8 shadow-sm hover:shadow-xl hover:border-amber-400/50 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Icon badge */}
                  <div className="w-12 h-12 rounded-xl bg-amber-50 group-hover:bg-amber-500 border border-amber-200/60 flex items-center justify-center text-amber-600 group-hover:text-white transition-colors duration-300 mb-5 shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-navy-950 group-hover:text-amber-600 transition-colors mb-3 font-serif">
                    {cleanTitle}
                  </h3>

                  {/* Meta description / snippet */}
                  <p className="text-sm text-slate-600 leading-relaxed mb-6 line-clamp-3">
                    {service.metaDescription}
                  </p>
                </div>

                {/* Footer link */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={service.slug}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-600 group-hover:text-amber-700 group-hover:translate-x-1 transition-all"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <span className="text-[11px] font-medium text-slate-400">
                    Fort Worth, TX
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Bar */}
        <div className="mt-14 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-navy-900 text-navy-950 font-bold text-sm uppercase tracking-wider hover:bg-navy-900 hover:text-white transition-all shadow-sm"
          >
            <span>Explore All Specialized Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
