import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { 
  Phone, 
  MapPin, 
  ArrowRight, 
  HelpCircle, 
  ShieldCheck, 
  Flame, 
  Search, 
  Wrench, 
  CheckCircle2, 
  Shield, 
  Eye, 
  CheckCircle,
  ExternalLink
} from 'lucide-react';
import { siteData, getServiceBySlug, getLocationBySlug } from '@/lib/data';
import HeroBackgroundSlides from '@/components/HeroBackgroundSlides';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const serviceParams = siteData.services.map(s => ({
    slug: s.slug.replace(/^\/|\/$/g, '')
  }));

  const locationParams = siteData.locations.map(l => ({
    slug: l.slug.replace(/^\/|\/$/g, '')
  }));

  return [...serviceParams, ...locationParams];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getServiceBySlug(slug) || getLocationBySlug(slug);

  if (!page) {
    return { title: 'Page Not Found' };
  }

  return {
    title: page.seoTitle,
    description: page.metaDescription,
    alternates: {
      canonical: page.slug,
    },
    openGraph: {
      title: page.seoTitle,
      description: page.metaDescription,
      url: `https://chimneysweeptanglewood.site${page.slug}`,
    }
  };
}

const serviceImagesList = [
  '/images/chimney/brick-mason-working-on-chimney-repair-at-home-2026-09-23-20-03-34-utc.webp',
  '/images/chimney/construction-workers-installing-chimney-on-suburba-2026-09-24-02-49-04-utc.webp',
  '/images/chimney/chimney-on-a-shingled-roof-against-blue-sky-2026-09-23-18-12-52-utc.webp',
  '/images/chimney/man-repairing-chimney-on-a-sunny-day-2026-09-23-00-08-00-utc.webp',
  '/images/chimney/skilled-male-construction-worker-building-a-brick-2026-09-25-05-43-26-utc.webp',
  '/images/chimney/two-men-installing-chimney-on-rooftop-on-sunny-day-2026-09-24-04-40-20-utc.webp',
  '/images/chimney/worker-cutting-sheet-metal-duct-with-snips-outdoor-2026-09-24-11-18-37-utc.webp',
  '/images/chimney/construction-worker-building-stone-chimney-on-hous-2026-09-24-06-02-34-utc.webp',
  '/images/chimney/man-stoking-a-warm-fire-in-a-brick-fireplace-2026-09-23-16-39-11-utc.webp',
  '/images/chimney/rooftop-chimneys-and-tiles-on-sunny-day-2026-09-21-11-23-51-utc.webp'
];

export default async function SlugPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getServiceBySlug(slug) || getLocationBySlug(slug);

  if (!page) {
    notFound();
  }

  const { business, services, locations } = siteData;
  const isLocation = page.type === 'Location Page';
  const html = page.contentHtml;

  /* ==========================================================================
     LOCATION PAGE RENDERING (Exact Homepage Design Layout + All Anchors & Links)
     ========================================================================== */
  if (isLocation) {
    // 1. Hero
    const heroMatch = html.match(/<section[^>]*class=["']hero["'][^>]*>([\s\S]*?)<\/section>/i);
    const heroInner = heroMatch ? heroMatch[1] : '';
    const heroH1 = (heroInner.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i) || [])[1] || page.title;
    const heroP = (heroInner.match(/<p>([\s\S]*?)<\/p>/i) || [])[1] || page.metaDescription;

    // 2. Local Focus
    const localFocusMatch = html.match(/<section[^>]*class=["']local-focus["'][^>]*>([\s\S]*?)<\/section>/i);
    const localFocusInner = localFocusMatch ? localFocusMatch[1] : '';
    const localFocusH2 = (localFocusInner.match(/<h2[^>]*>([\s\S]*?)<\/h2>/i) || [])[1] || '';
    const localFocusBody = localFocusInner.replace(/<h2[^>]*>[\s\S]*?<\/h2>/i, '').trim();

    // 3. Services
    const servicesMatch = html.match(/<section[^>]*class=["']services["'][^>]*>([\s\S]*?)<\/section>/i);
    const servicesInner = servicesMatch ? servicesMatch[1] : '';
    const servicesH2 = (servicesInner.match(/<h2[^>]*>([\s\S]*?)<\/h2>/i) || [])[1] || 'Core Chimney Services';
    const cardMatches = [...servicesInner.matchAll(/<div[^>]*class=["']card["'][^>]*>([\s\S]*?)<\/div>/gi)];
    const serviceCards = cardMatches.map((m, idx) => {
      const cardHtml = m[1];
      const cardTitle = (cardHtml.match(/<h3[^>]*>([\s\S]*?)<\/h3>/i) || [])[1] || '';
      const cardP = (cardHtml.match(/<p>([\s\S]*?)<\/p>/i) || [])[1] || '';
      
      // Extract target link and anchor from card body or fall back to internalLinks
      const linkMatch = cardP.match(/<a[^>]*href=["']([^"']*)["'][^>]*>([\s\S]*?)<\/a>/i);
      const targetLink = linkMatch ? linkMatch[1] : (page.internalLinks?.[idx]?.link || '/services/');
      const targetAnchor = linkMatch ? linkMatch[2].trim() : (page.internalLinks?.[idx]?.anchor || 'Learn More');

      const icons = [Flame, Search, Wrench];
      const Icon = icons[idx % icons.length];
      return { 
        title: cardTitle.trim(), 
        bodyHtml: cardP.trim(), 
        targetLink, 
        targetAnchor, 
        Icon 
      };
    });

    // 4. Process
    const processMatch = html.match(/<section[^>]*class=["']process["'][^>]*>([\s\S]*?)<\/section>/i);
    const processInner = processMatch ? processMatch[1] : '';
    const processH2 = (processInner.match(/<h2[^>]*>([\s\S]*?)<\/h2>/i) || [])[1] || 'Our Chimney Cleaning Process';
    const processP = (processInner.match(/<p>([\s\S]*?)<\/p>/i) || [])[1] || '';
    const liMatches = [...processInner.matchAll(/<li[^>]*>([\s\S]*?)<\/li>/gi)];
    const processIcons = [Shield, Eye, Flame, CheckCircle2, CheckCircle];
    const processSteps = liMatches.map((m, idx) => {
      const liHtml = m[1];
      const strongMatch = liHtml.match(/<strong[^>]*>([\s\S]*?)<\/strong>/i);
      const title = strongMatch ? strongMatch[1].replace(/:$/, '').trim() : `Step ${idx + 1}`;
      const desc = liHtml.replace(/<strong[^>]*>[\s\S]*?<\/strong>/i, '').replace(/^[:\s-]+/, '').trim();
      const Icon = processIcons[idx % processIcons.length];
      return { step: `Step ${idx + 1}`, title, desc, Icon };
    });

    // 5. Safety
    const safetyMatch = html.match(/<section[^>]*class=["']safety["'][^>]*>([\s\S]*?)<\/section>/i);
    const safetyInner = safetyMatch ? safetyMatch[1] : '';
    const safetyH2 = (safetyInner.match(/<h2[^>]*>([\s\S]*?)<\/h2>/i) || [])[1] || 'Why Annual Inspections Matter in North Texas';
    const safetyBody = safetyInner.replace(/<h2[^>]*>[\s\S]*?<\/h2>/i, '').trim();

    // 6. FAQ
    const faqMatch = html.match(/<section[^>]*class=["']faq["'][^>]*>([\s\S]*?)<\/section>/i);
    const faqInner = faqMatch ? faqMatch[1] : '';
    const faqH2 = (faqInner.match(/<h2[^>]*>([\s\S]*?)<\/h2>/i) || [])[1] || 'Frequently Asked Questions';
    const h3Matches = [...faqInner.matchAll(/<h3[^>]*>([\s\S]*?)<\/h3>\s*<p>([\s\S]*?)<\/p>/gi)];
    const faqs = h3Matches.map(m => ({ q: m[1].trim(), a: m[2].trim() }));

    // 7. CTA
    const ctaMatch = html.match(/<section[^>]*class=["']cta["'][^>]*>([\s\S]*?)<\/section>/i);
    const ctaInner = ctaMatch ? ctaMatch[1] : '';
    const ctaH2 = (ctaInner.match(/<h2[^>]*>([\s\S]*?)<\/h2>/i) || [])[1] || 'Book Your Chimney Sweep Today';
    const ctaPMatch = ctaInner.match(/<p>([\s\S]*?)<\/p>/i);
    const ctaP = ctaPMatch ? ctaPMatch[1] : '';
    
    // Extract exact secondary CTA button text and link from the sheet
    const ctaSecBtnMatch = ctaInner.match(/<a[^>]*class=["'][^"']*btn-secondary[^"']*["'][^>]*href=["']([^"']*)["'][^>]*>([\s\S]*?)<\/a>/i);
    const ctaSecHref = ctaSecBtnMatch ? ctaSecBtnMatch[1] : '/contact/';
    const ctaSecText = ctaSecBtnMatch ? ctaSecBtnMatch[2].trim() : 'Schedule Service';

    const neighborhoodName = page.title.replace('Chimney Sweep in ', '');

    return (
      <div className="bg-white">
        {/* 1. HERO SECTION (Identical to Homepage Design) */}
        <section className="relative bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 text-white pt-16 pb-24 lg:pt-24 lg:pb-32 overflow-hidden border-b border-navy-800">
          {/* Background Image Slides (70% Opacity) */}
          <HeroBackgroundSlides initialImage={page.image} />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
            <nav className="flex items-center justify-center gap-2 text-xs sm:text-sm text-slate-400">
              <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
              <span>/</span>
              <Link href="/locations" className="hover:text-amber-400 transition-colors">Locations</Link>
              <span>/</span>
              <span className="text-amber-400 font-medium truncate max-w-xs">{neighborhoodName}</span>
            </nav>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-800/80 border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-semibold tracking-wide uppercase">
              <MapPin className="w-4 h-4 text-amber-400" />
              <span>{neighborhoodName} • Fort Worth, TX</span>
            </div>

            <h1 className="text-3xl sm:text-5xl xl:text-6xl font-black uppercase tracking-tight text-white font-serif leading-[1.15]">
              {heroH1}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
              {heroP}
            </p>

            {/* Direct CTA Buttons from Sheet */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                className="btn btn-primary w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-lg bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:from-amber-600 hover:to-amber-800 text-white font-black text-sm uppercase tracking-wider shadow-xl shadow-amber-600/30 hover:scale-105 active:scale-95 transition-all"
                href="tel:+16823505722"
              >
                <Phone className="w-4 h-4 fill-white" />
                <span>Call (682) 350-5722</span>
              </a>
              <Link
                className="btn btn-secondary w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border-2 border-amber-500 hover:bg-amber-500 text-white font-bold text-sm uppercase tracking-wider transition-all"
                href={ctaSecHref}
              >
                <span>{ctaSecText}</span>
              </Link>
            </div>
          </div>
        </section>

        {/* 2. LOCAL FOCUS SECTION (White Background, Centered Serif Heading) */}
        {localFocusBody && (
          <section className="py-20 bg-white border-b border-slate-200">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <span className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-2 block">
                  Neighborhood Focus
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 font-serif tracking-tight">
                  {localFocusH2}
                </h2>
                <div className="w-16 h-1 bg-amber-500 mx-auto mt-4 rounded-full" />
              </div>
              <div
                className="prose-content text-slate-700 text-base sm:text-lg leading-relaxed space-y-4 max-w-4xl mx-auto"
                dangerouslySetInnerHTML={{ __html: localFocusBody }}
              />
            </div>
          </section>
        )}

        {/* 3. CORE SERVICES SECTION (Slate-50 Background, 3-Card Grid Matching Homepage with Explicit Clickable Anchors) */}
        {serviceCards.length > 0 && (
          <section className="py-20 bg-slate-50 border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-2 block">
                  Specialized Solutions
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 font-serif tracking-tight">
                  {servicesH2}
                </h2>
                <div className="w-16 h-1 bg-amber-500 mx-auto mt-4 rounded-full" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {serviceCards.map((card, idx) => {
                  const Icon = card.Icon;
                  return (
                    <div
                      key={idx}
                      className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm hover:shadow-xl hover:border-amber-400 transition-all flex flex-col justify-between"
                    >
                      <div>
                        <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 mb-5">
                          <Icon className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-navy-950 mb-3 font-serif">
                          {card.title}
                        </h3>
                        <div
                          className="text-sm text-slate-600 leading-relaxed mb-6"
                          dangerouslySetInnerHTML={{ __html: card.bodyHtml }}
                        />
                      </div>
                      
                      {/* Explicit, high-contrast anchor link matching sheet */}
                      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                        <Link 
                          href={card.targetLink}
                          className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-600 hover:text-amber-700 transition-colors group"
                        >
                          <span className="underline underline-offset-2 decoration-amber-400 group-hover:decoration-amber-600">
                            {card.targetAnchor}
                          </span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* 4. ESSENTIAL ANCHORS & RESOURCES DIRECTORY (Guarantees ALL Sheet Anchors & Links are 100% Present & Visible) */}
        <section className="py-12 bg-white border-b border-slate-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-slate-50 via-amber-50/20 to-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-200">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-amber-600 block">
                    {neighborhoodName} Reference Directory
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold font-serif text-navy-950">
                    Official Service &amp; Safety Links
                  </h3>
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-amber-100 text-amber-800 border border-amber-200 w-fit">
                  Verified Local Resources
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {page.internalLinks?.map((il, idx) => (
                  <Link
                    key={idx}
                    href={il.link}
                    className="group flex flex-col justify-between p-4 rounded-xl bg-white border border-slate-200 hover:border-amber-500 hover:shadow-md transition-all text-decoration-none"
                  >
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-amber-600 block mb-1">
                        Service Anchor {idx + 1}
                      </span>
                      <p className="text-sm font-bold text-navy-950 group-hover:text-amber-600 transition-colors capitalize">
                        {il.anchor}
                      </p>
                    </div>
                    <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400 group-hover:text-amber-600">
                      <span className="font-mono text-[11px] truncate">{il.link}</span>
                      <ArrowRight className="w-3.5 h-3.5 shrink-0 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}

                {page.externalLink?.link && (
                  <a
                    href={page.externalLink.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col justify-between p-4 rounded-xl bg-white border border-slate-200 hover:border-amber-500 hover:shadow-md transition-all text-decoration-none"
                  >
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 block mb-1">
                        Safety Authority
                      </span>
                      <p className="text-sm font-bold text-navy-950 group-hover:text-amber-600 transition-colors">
                        {page.externalLink.anchor}
                      </p>
                    </div>
                    <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400 group-hover:text-amber-600">
                      <span className="font-mono text-[11px] truncate">{page.externalLink.link.replace(/^https?:\/\//, '')}</span>
                      <ExternalLink className="w-3.5 h-3.5 shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* 5. PROCESS SECTION (White Background, 5-Step Cards Matching Homepage) */}
        {processSteps.length > 0 && (
          <section className="py-20 bg-slate-50 border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-2 block">
                  Our Service Protocol
                </span>
                <h2 className="text-3xl sm:text-4xl font-black font-serif tracking-tight text-navy-950">
                  {processH2}
                </h2>
                <div className="w-16 h-1 bg-amber-500 mx-auto mt-4 mb-4 rounded-full" />
                {processP && (
                  <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto">
                    {processP}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {processSteps.map((st, idx) => {
                  const Icon = st.Icon;
                  return (
                    <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col items-center text-center hover:border-amber-400 hover:shadow-md transition-all">
                      <div className="w-16 h-16 rounded-full bg-slate-50 border-2 border-amber-500 text-amber-600 flex items-center justify-center mb-4 shadow-sm">
                        <Icon className="w-8 h-8" />
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full bg-navy-950 text-white text-[10px] font-bold uppercase tracking-wider mb-2">
                        {st.step}
                      </span>
                      <h3 className="text-base font-bold text-navy-950 mb-2 font-serif">
                        {st.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {st.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* 6. SAFETY & CSIA/NFPA GUIDANCE SECTION (Callout Card Matching Homepage) */}
        {safetyBody && (
          <section className="py-20 bg-white border-b border-slate-200">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-8 sm:p-12 shadow-sm">
                <span className="text-xs font-bold uppercase tracking-widest text-amber-700 block mb-2">
                  Safety Standards
                </span>
                <h2 className="text-2xl sm:text-3xl font-black font-serif text-navy-950 mb-4">
                  {safetyH2}
                </h2>
                <div
                  className="prose-content text-slate-700 space-y-4 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: safetyBody }}
                />
                {page.externalLink?.link && (
                  <div className="mt-6 pt-4 border-t border-amber-200/80 flex items-center gap-2">
                    <span className="text-xs text-slate-600 font-medium">Official Reference:</span>
                    <a
                      href={page.externalLink.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-amber-700 hover:text-amber-800 underline decoration-amber-500"
                    >
                      <span>{page.externalLink.anchor}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* 7. IMAGE SHOWCASE GALLERY (Matching Homepage) */}
        <section className="py-16 bg-slate-100 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md">
                <Image src="/images/chimney/construction-worker-building-stone-chimney-on-hous-2026-09-24-06-02-34-utc.webp" alt="Chimney construction" fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover hover:scale-105 transition-transform" />
              </div>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md">
                <Image src="/images/chimney/man-repairing-chimney-on-a-sunny-day-2026-09-23-00-08-00-utc.webp" alt="Rooftop chimney repair" fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover hover:scale-105 transition-transform" />
              </div>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md">
                <Image src="/images/chimney/chimney-on-a-shingled-roof-against-blue-sky-2026-09-23-18-12-52-utc.webp" alt="Clean chimney cap" fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover hover:scale-105 transition-transform" />
              </div>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md">
                <Image src="/images/chimney/man-stoking-a-warm-fire-in-a-brick-fireplace-2026-09-23-16-39-11-utc.webp" alt="Fireplace hearth" fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover hover:scale-105 transition-transform" />
              </div>
            </div>
          </div>
        </section>

        {/* 8. FAQ SECTION (Structured Cards Matching Homepage) */}
        {faqs.length > 0 && (
          <section className="py-20 bg-white border-b border-slate-200">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <span className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-2 block">
                  Frequently Asked Questions
                </span>
                <h2 className="text-3xl sm:text-4xl font-black font-serif text-navy-950">
                  {faqH2}
                </h2>
                <div className="w-16 h-1 bg-amber-500 mx-auto mt-4 rounded-full" />
              </div>

              <div className="space-y-6">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="p-6 rounded-xl border border-slate-200 bg-slate-50/70 hover:bg-white hover:shadow-md transition-all">
                    <h3 className="text-lg font-bold text-navy-950 mb-2 font-serif flex items-start gap-3">
                      <HelpCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                      <span>{faq.q}</span>
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 pl-8 leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* 9. OTHER COMMUNITIES WE SERVE (Badge Grid Matching Homepage) */}
        <section className="py-20 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-2 block">
              Fort Worth Coverage
            </span>
            <h2 className="text-3xl sm:text-4xl font-black font-serif text-navy-950 mb-4">
              Other Neighborhoods We Serve
            </h2>
            <div className="w-16 h-1 bg-amber-500 mx-auto mb-8 rounded-full" />
            <div className="flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto">
              {locations.filter(l => l.slug !== page.slug).map(loc => (
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

        {/* 10. BOTTOM CTA BANNER (Deep Navy Banner Matching Homepage with Exact Sheet Button Anchor) */}
        <section className="py-20 bg-navy-950 text-white text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-2 block">
              {neighborhoodName} Service
            </span>
            <h2 className="text-3xl sm:text-4xl font-black font-serif mb-4 text-white">
              {ctaH2}
            </h2>
            {ctaP && (
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-8 font-light leading-relaxed">
                {ctaP}
              </p>
            )}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                className="btn btn-primary inline-flex items-center justify-center gap-3 px-8 py-4 rounded-lg bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:from-amber-600 hover:to-amber-800 text-white font-black text-base uppercase tracking-wider shadow-xl shadow-amber-600/30 hover:scale-105 active:scale-95 transition-all"
                href="tel:+16823505722"
              >
                <Phone className="w-5 h-5 fill-white" />
                <span>Call (682) 350-5722</span>
              </a>
              <Link
                className="btn btn-secondary inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border-2 border-amber-500 hover:bg-amber-500 text-white font-bold text-base uppercase tracking-wider transition-all"
                href={ctaSecHref}
              >
                <span>{ctaSecText}</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }

  /* ==========================================================================
     SERVICE PAGE RENDERING (Exact Homepage Design Layout + 2-Column Sections with Image & Content)
     ========================================================================== */
  const h1Match = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  const serviceH1 = h1Match ? h1Match[1].trim() : page.title;

  const firstH2Idx = html.indexOf('<h2');
  let heroIntroHtml = '';
  let bodyRestHtml = html;
  if (firstH2Idx !== -1) {
    heroIntroHtml = html.slice(0, firstH2Idx).replace(/<h1[^>]*>[\s\S]*?<\/h1>/i, '').trim();
    bodyRestHtml = html.slice(firstH2Idx);
  }

  const firstPMatch = heroIntroHtml.match(/<p>([\s\S]*?)<\/p>/i);
  const heroIntroP = firstPMatch ? firstPMatch[1].trim() : page.metaDescription;

  const h2Parts = bodyRestHtml.split(/(?=<h2[^>]*>)/i).filter(p => p.trim());
  const allH2Sections = h2Parts.map(part => {
    const titleMatch = part.match(/<h2[^>]*>([\s\S]*?)<\/h2>/i);
    const title = titleMatch ? titleMatch[1].trim() : '';
    const content = part.replace(/<h2[^>]*>[\s\S]*?<\/h2>/i, '').trim();
    return { title, content, raw: part };
  });

  const lastSection = allH2Sections.length > 0 ? allH2Sections[allH2Sections.length - 1] : null;
  const middleSections = allH2Sections.slice(0, allH2Sections.length - 1);

  // Extract secondary CTA button text from last section
  let lastSecHref = '/contact/';
  let lastSecText = 'Request an Estimate';
  if (lastSection) {
    const lastSecBtnMatch = lastSection.content.match(/<a[^>]*href=["']([^"']*)["'][^>]*>([\s\S]*?)<\/a>/i);
    if (lastSecBtnMatch) {
      if (!lastSecBtnMatch[1].startsWith('tel:')) {
        lastSecHref = lastSecBtnMatch[1];
        lastSecText = lastSecBtnMatch[2].trim();
      }
    }
  }

  return (
    <div className="bg-white">
      {/* 1. HERO SECTION (Identical to Homepage Design) */}
      <section className="relative bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 text-white pt-16 pb-24 lg:pt-24 lg:pb-32 overflow-hidden border-b border-navy-800">
        {/* Background Image Slides (70% Opacity) */}
        <HeroBackgroundSlides initialImage={page.image} />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <nav className="flex items-center justify-center gap-2 text-xs sm:text-sm text-slate-400">
            <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-amber-400 transition-colors">Services</Link>
            <span>/</span>
            <span className="text-amber-400 font-medium truncate max-w-xs">{page.title.replace(' in Fort Worth, TX', '')}</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-800/80 border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-semibold tracking-wide uppercase">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>Specialized Chimney Care • Fort Worth, TX</span>
          </div>

          <h1 className="text-3xl sm:text-5xl xl:text-6xl font-black uppercase tracking-tight text-white font-serif leading-[1.15]">
            {serviceH1}
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
            {heroIntroP}
          </p>

          {/* Direct CTA Buttons from Sheet */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              className="btn btn-primary w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-lg bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:from-amber-600 hover:to-amber-800 text-white font-black text-sm uppercase tracking-wider shadow-xl shadow-amber-600/30 hover:scale-105 active:scale-95 transition-all"
              href="tel:+16823505722"
            >
              <Phone className="w-4 h-4 fill-white" />
              <span>Call (682) 350-5722</span>
            </a>
            <Link
              className="btn btn-secondary w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border-2 border-amber-500 hover:bg-amber-500 text-white font-bold text-sm uppercase tracking-wider transition-all"
              href={lastSecHref}
            >
              <span>{lastSecText}</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. DEDICATED SERVICE LINKS & RESOURCES DIRECTORY (Guarantees ALL Sheet Anchors & Links are 100% Present & Visible) */}
      <section className="py-10 bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-amber-600 block">
                  Service Navigation &amp; Guidance
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-navy-950">
                  Related Services &amp; Official Standards
                </h3>
              </div>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200 w-fit">
                Essential Chimney Links
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {page.internalLinks?.map((il, idx) => (
                <Link
                  key={idx}
                  href={il.link}
                  className="group flex flex-col justify-between p-4 rounded-xl bg-slate-50/70 border border-slate-200 hover:border-amber-500 hover:bg-white hover:shadow-md transition-all text-decoration-none"
                >
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-600 block mb-1">
                      Internal Service
                    </span>
                    <p className="text-sm font-bold text-navy-950 group-hover:text-amber-600 transition-colors capitalize">
                      {il.anchor}
                    </p>
                  </div>
                  <div className="pt-3 mt-3 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-400 group-hover:text-amber-600">
                    <span className="font-mono text-[11px] truncate">{il.link}</span>
                    <ArrowRight className="w-3.5 h-3.5 shrink-0 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}

              {page.externalLink?.link && (
                <a
                  href={page.externalLink.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col justify-between p-4 rounded-xl bg-slate-50/70 border border-slate-200 hover:border-amber-500 hover:bg-white hover:shadow-md transition-all text-decoration-none"
                >
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 block mb-1">
                      Safety Standard
                    </span>
                    <p className="text-sm font-bold text-navy-950 group-hover:text-amber-600 transition-colors">
                      {page.externalLink.anchor}
                    </p>
                  </div>
                  <div className="pt-3 mt-3 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-400 group-hover:text-amber-600">
                    <span className="font-mono text-[11px] truncate">{page.externalLink.link.replace(/^https?:\/\//, '')}</span>
                    <ExternalLink className="w-3.5 h-3.5 shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 3. STRUCTURED SERVICE SECTIONS (Alternating with 2 COLUMNS: 1st column with an image, other column with content) */}
      {middleSections.map((sec, idx) => {
        const isSlate = idx % 2 === 1;
        const isFaq = sec.title.toLowerCase().includes('question') || sec.title.toLowerCase().includes('faq');
        
        // Make sections with 2 columns: 1st column image, 2nd column content
        // (Even-indexed sections and short pages sections are 2 columns)
        const isTwoColumn = !isFaq && (idx % 2 === 0 || middleSections.length <= 3);
        const sectionImg = serviceImagesList[(idx * 2) % serviceImagesList.length];

        if (isTwoColumn) {
          return (
            <section
              key={idx}
              className={`py-20 border-b border-slate-200 ${isSlate ? 'bg-slate-50' : 'bg-white'}`}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  {/* 1st Column: Image */}
                  <div className="lg:col-span-5 relative">
                    <div className="relative mx-auto max-w-md lg:max-w-none">
                      <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-100 aspect-[4/3] group">
                        <Image
                          src={sectionImg}
                          alt={sec.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 40vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
                        <div className="absolute bottom-3 left-3 right-3 px-3.5 py-2.5 rounded-lg bg-navy-900/90 backdrop-blur-sm border border-navy-700/60 text-white flex items-center justify-between">
                          <div>
                            <p className="text-xs font-bold uppercase tracking-wider text-white">
                              Embercrest Hearth Specialists
                            </p>
                            <p className="text-[11px] text-amber-400">
                              Fort Worth Certified Chimney Care
                            </p>
                          </div>
                          <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 2nd Column: Content */}
                  <div className="lg:col-span-7 space-y-5">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-widest text-amber-600 block mb-2">
                        Service Inspection &amp; Execution
                      </span>
                      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black font-serif text-navy-950 leading-tight">
                        {sec.title}
                      </h2>
                      <div className="w-16 h-1 bg-amber-500 mt-3 rounded-full" />
                    </div>

                    <div
                      className="prose-content text-slate-700 text-base leading-relaxed space-y-4"
                      dangerouslySetInnerHTML={{ __html: sec.content }}
                    />
                  </div>
                </div>
              </div>
            </section>
          );
        }

        // Full-width layout for other sections (e.g. FAQs or alternating content)
        return (
          <section
            key={idx}
            className={`py-20 border-b border-slate-200 ${isSlate ? 'bg-slate-50' : 'bg-white'}`}
          >
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <span className="text-xs font-bold uppercase tracking-widest text-amber-600 block mb-2">
                  Service Standard
                </span>
                <h2 className="text-3xl sm:text-4xl font-black font-serif text-navy-950">
                  {sec.title}
                </h2>
                <div className="w-16 h-1 bg-amber-500 mx-auto mt-4 rounded-full" />
              </div>

              {isFaq ? (
                <div
                  className="homepage-sheet"
                  dangerouslySetInnerHTML={{ __html: sec.content }}
                />
              ) : (
                <div
                  className="prose-content text-slate-700 leading-relaxed space-y-4"
                  dangerouslySetInnerHTML={{ __html: sec.content }}
                />
              )}
            </div>
          </section>
        );
      })}

      {/* 4. FIELD SHOWCASE GALLERY (Matching Homepage) */}
      <section className="py-16 bg-slate-100 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md">
              <Image src="/images/chimney/construction-worker-building-stone-chimney-on-hous-2026-09-24-06-02-34-utc.webp" alt="Masonry chimney construction" fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover hover:scale-105 transition-transform" />
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md">
              <Image src="/images/chimney/man-repairing-chimney-on-a-sunny-day-2026-09-23-00-08-00-utc.webp" alt="Technician on roof repairing chimney" fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover hover:scale-105 transition-transform" />
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md">
              <Image src="/images/chimney/chimney-on-a-shingled-roof-against-blue-sky-2026-09-23-18-12-52-utc.webp" alt="Clean chimney cap" fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover hover:scale-105 transition-transform" />
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md">
              <Image src="/images/chimney/man-stoking-a-warm-fire-in-a-brick-fireplace-2026-09-23-16-39-11-utc.webp" alt="Fireplace hearth" fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover hover:scale-105 transition-transform" />
            </div>
          </div>
        </div>
      </section>

      {/* 5. OTHER CORE SERVICES (3x3 Card Grid Matching Homepage) */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-2 block">
              Complete Hearth Care
            </span>
            <h2 className="text-3xl sm:text-4xl font-black font-serif text-navy-950">
              Other Core Chimney Services
            </h2>
            <div className="w-16 h-1 bg-amber-500 mx-auto mt-4 mb-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.filter(s => s.slug !== page.slug).slice(0, 6).map((srv) => (
              <div key={srv.slug} className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm hover:shadow-xl hover:border-amber-400 transition-all flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 mb-5">
                    <Wrench className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-navy-950 mb-3 font-serif">
                    {srv.title.replace(' in Fort Worth, TX', '')}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6 line-clamp-3">
                    {srv.metaDescription}
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100">
                  <Link href={srv.slug} className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-600 hover:text-amber-700">
                    <span>View Service Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SERVING TANGLEWOOD & NEARBY COMMUNITIES (Badge Grid Matching Homepage) */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-2 block">
            Local Service Areas
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-serif text-navy-950 mb-4">
            Serving Tanglewood, Fort Worth, and Nearby Communities
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto mb-8 rounded-full" />
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto">
            {locations.map(loc => (
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

      {/* 7. BOTTOM CTA BANNER (Deep Navy Banner Matching Homepage with Service's Closing H2 and Sheet Button) */}
      {lastSection && (
        <section className="py-20 bg-navy-950 text-white text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-black font-serif mb-4 text-white">
              {lastSection.title}
            </h2>
            <div
              className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-8 font-light leading-relaxed"
              dangerouslySetInnerHTML={{ __html: lastSection.content }}
            />
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                className="btn btn-primary inline-flex items-center justify-center gap-3 px-8 py-4 rounded-lg bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:from-amber-600 hover:to-amber-800 text-white font-black text-base uppercase tracking-wider shadow-xl shadow-amber-600/30 hover:scale-105 active:scale-95 transition-all"
                href="tel:+16823505722"
              >
                <Phone className="w-5 h-5 fill-white" />
                <span>Call (682) 350-5722</span>
              </a>
              <Link
                className="btn btn-secondary inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border-2 border-amber-500 hover:bg-amber-500 text-white font-bold text-base uppercase tracking-wider transition-all"
                href={lastSecHref}
              >
                <span>{lastSecText}</span>
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}