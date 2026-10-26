import Image from 'next/image';
import { Phone, Shield, Sparkles, CheckCircle2 } from 'lucide-react';
import { siteData } from '@/lib/data';

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  image?: string;
  badge?: string;
}

export default function HeroSection({
  title = "PREMIUM CHIMNEY & FIREPLACE SERVICES.",
  subtitle = "Embercrest Chimney Sweep Tanglewood helps local homeowners keep their fireplaces and chimneys clean, safe, and ready for every season. Routine sweeping, detailed inspections, and expert repairs in Fort Worth, TX.",
  image = "/images/chimney/brick-mason-working-on-chimney-repair-at-home-2026-09-23-20-03-34-utc.webp",
  badge = "PROFESSIONAL CHIMNEY CARE IN FORT WORTH, TX"
}: HeroSectionProps) {
  const { business } = siteData;

  return (
    <section className="relative bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 text-white pt-12 pb-20 lg:pt-20 lg:pb-28 overflow-hidden border-b border-navy-800">
      {/* Background subtle light flare */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Heading, Subtext, Phone CTA */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {badge && (
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-800/80 border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-semibold tracking-wide uppercase">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>{badge}</span>
              </div>
            )}

            <h1 className="text-3xl sm:text-5xl xl:text-6xl font-black uppercase tracking-tight text-white font-serif leading-[1.15]">
              {title.includes('&') ? (
                <>
                  {title.split('&')[0]} &{' '}
                  <span className="text-amber-500">{title.split('&')[1]}</span>
                </>
              ) : (
                <>
                  <span className="text-white">{title}</span>
                </>
              )}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              {subtitle}
            </p>

            {/* Only Phone Button on CTA as strictly requested */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href={`tel:${business.phoneRaw}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-lg bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:from-amber-600 hover:to-amber-800 text-white font-black text-base uppercase tracking-wider shadow-xl shadow-amber-600/30 hover:scale-105 active:scale-95 transition-all group"
              >
                <Phone className="w-5 h-5 fill-white group-hover:rotate-12 transition-transform" />
                <span>Call Now: {business.phone}</span>
              </a>
            </div>

            {/* Trust points */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs sm:text-sm text-slate-300 border-t border-navy-800">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Plain-Language Reports</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Respect For Your Home</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Tanglewood & Fort Worth</span>
              </div>
            </div>
          </div>

          {/* Right Column: High Quality Converted WebP Hero Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative glowing ring */}
              <div className="absolute -inset-2 bg-gradient-to-r from-amber-500 to-amber-700 rounded-2xl opacity-30 blur-lg" />

              <div className="relative rounded-2xl overflow-hidden border-2 border-navy-700 shadow-2xl bg-navy-950 aspect-[4/3] sm:aspect-[5/4] lg:aspect-[4/3]">
                <Image
                  src={image}
                  alt="Chimney sweep technician at work on rooftop in Fort Worth"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-lg bg-navy-900/90 backdrop-blur-md border border-navy-700 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-white uppercase tracking-wider">
                      Embercrest Chimney Care
                    </p>
                    <p className="text-[11px] text-amber-400">
                      Fort Worth, TX • 2925 Riverglen Dr
                    </p>
                  </div>
                  <a
                    href={`tel:${business.phoneRaw}`}
                    className="p-2 rounded bg-amber-500 text-white hover:bg-amber-600 transition-colors"
                    aria-label="Call now"
                  >
                    <Phone className="w-4 h-4 fill-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
