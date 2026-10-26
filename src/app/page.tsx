import Image from 'next/image';
import Link from 'next/link';
import { 
  Phone, 
  MapPin, 
  MessageSquare, 
  Shield, 
  ThumbsUp, 
  Flame, 
  Search, 
  Wrench, 
  CheckCircle2, 
  ArrowRight, 
  Eye, 
  CheckCircle,
  HelpCircle,
  ShieldAlert,
  Calendar,
  Layers,
  Home as HomeIcon,
  Wind
} from 'lucide-react';
import { siteData } from '@/lib/data';
import HeroBackgroundSlides from '@/components/HeroBackgroundSlides';

export const metadata = {
  title: siteData.homepage.seoTitle,
  description: siteData.homepage.metaDescription,
  alternates: {
    canonical: '/',
  }
};

export default function HomePage() {
  const { business, services, locations } = siteData;

  // Exact data from Homepage in sheet_pages.csv
  const whyChoosePoints = [
    {
      title: "Clear communication.",
      desc: "We explain what we see, show you the condition of your chimney where possible, and talk through your options before any work begins.",
      icon: MessageSquare
    },
    {
      title: "Respect for your home.",
      desc: "We prepare the work area, protect floors and furnishings, and clean up when the job is finished.",
      icon: Shield
    },
    {
      title: "Honest recommendations.",
      desc: "If your chimney only needs a sweep, we will say so. If a repair is needed, we will explain why and what happens if it is delayed.",
      icon: ThumbsUp
    },
    {
      title: "Local knowledge.",
      desc: "Fort Worth homes range from established neighborhoods in Tanglewood to newer builds across Tarrant County, and chimneys vary just as much in age, materials, and condition.",
      icon: MapPin
    }
  ];

  const processSteps = [
    {
      step: "Step 1",
      title: "Preparation.",
      desc: "We lay down protective coverings around the fireplace and set up equipment to contain soot and debris.",
      icon: Shield
    },
    {
      step: "Step 2",
      title: "Visual check.",
      desc: "Before cleaning, we look at the firebox, damper, and accessible parts of the flue for obvious signs of damage or blockage.",
      icon: Eye
    },
    {
      step: "Step 3",
      title: "Cleaning.",
      desc: "Using brushes and vacuum equipment, we remove soot, creosote, and debris from the flue and firebox.",
      icon: Flame
    },
    {
      step: "Step 4",
      title: "Findings review.",
      desc: "We tell you what we noticed, including cracked masonry, a worn cap, water staining, or damper issues, and whether anything needs follow-up.",
      icon: CheckCircle2
    },
    {
      step: "Step 5",
      title: "Cleanup.",
      desc: "We remove debris, vacuum the work area, and leave your hearth tidy.",
      icon: CheckCircle
    }
  ];

  const problems = [
    {
      title: "Creosote and soot buildup",
      desc: "Every wood fire leaves residue behind. Creosote is a dark, tar-like or flaky deposit that can build up inside the flue. It is flammable, which is why regular cleaning matters for any wood-burning fireplace."
    },
    {
      title: "Chimney leaks",
      desc: "Water stains on the ceiling near the fireplace, damp smells, or rust inside the firebox can point to a leak. Causes include a missing cap, a cracked crown, or failing flashing."
    },
    {
      title: "Damaged or missing chimney caps",
      desc: "A cap keeps rain, animals, and debris out of the flue. When it rusts, shifts, or goes missing, problems tend to follow."
    },
    {
      title: "Deteriorating mortar and masonry",
      desc: "Crumbling mortar joints, loose bricks, and white staining on the outside of the chimney can signal moisture damage that deserves attention."
    },
    {
      title: "Draft and smoke issues",
      desc: "If smoke drifts into the room or your fire struggles to burn, the cause could be a blockage, a closed damper, or a flue problem that needs a closer look."
    }
  ];

  const faqs = [
    {
      q: "How often should I have my chimney inspected?",
      a: "Industry guidance generally recommends an inspection at least once a year for chimneys and fireplaces that are in regular use. You should also schedule one after a chimney fire, a major storm, or any change to your heating appliance."
    },
    {
      q: "How do I know if my chimney needs cleaning?",
      a: "Signs include visible soot or creosote, smoky or strong odors, poor draft, or a fire that is hard to start. Because buildup inside the flue is hard to see from the firebox, a professional visit is the surest way to find out."
    },
    {
      q: "Can you repair my chimney, or only clean it?",
      a: "We handle both. If your chimney needs repair, we will explain the problem and your options clearly."
    },
    {
      q: "How do I get an estimate?",
      a: "Call us or use our contact form. Tell us about your fireplace, what you have noticed, and the best time to reach you."
    }
  ];

  return (
    <div className="bg-white">
      {/* 1. HERO SECTION (Template Design + Sheet Content) */}
      <section className="relative bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 text-white pt-16 pb-24 lg:pt-24 lg:pb-32 overflow-hidden border-b border-navy-800">
        {/* Background Image Slides (70% Opacity) */}
        <HeroBackgroundSlides />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-800/80 border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-semibold tracking-wide uppercase">
            <MapPin className="w-4 h-4 text-amber-400" />
            <span>Tanglewood • Fort Worth, TX</span>
          </div>

          {/* Exact H1 from Sheet */}
          <h1 className="text-3xl sm:text-5xl xl:text-6xl font-black uppercase tracking-tight text-white font-serif leading-[1.15]">
            Professional Chimney Sweep in <span className="text-amber-500">Fort Worth, TX</span>
          </h1>

          {/* Exact Intro Paragraph from Sheet */}
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
            Embercrest Chimney Sweep Tanglewood helps local homeowners keep their fireplaces and chimneys clean, safe, and ready for every season. From routine sweeping to detailed inspections and masonry repairs, we explain what we find in plain language so you can make confident decisions about your home.
          </p>

          {/* Exact CTA Anchors & Links from Sheet */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              className="btn btn-primary w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-lg bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:from-amber-600 hover:to-amber-800 text-white font-black text-sm uppercase tracking-wider shadow-xl shadow-amber-600/30 hover:scale-105 active:scale-95 transition-all"
              href="tel:+16823505722"
            >
              <Phone className="w-4 h-4 fill-white" />
              <span>Call Now: (682) 350-5722</span>
            </a>
            <Link
              className="btn btn-secondary w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border-2 border-amber-500 hover:bg-amber-500 text-white font-bold text-sm uppercase tracking-wider transition-all"
              href="/contact/"
            >
              <span>Request an Estimate</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. OUR SERVICES SECTION (Template 3x3 Card Grid + Sheet Content & Links) */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-2 block">
              Professional Hearth Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 font-serif tracking-tight">
              Core Chimney Services in Fort Worth
            </h2>
            <div className="w-16 h-1 bg-amber-500 mx-auto mt-4 mb-4 rounded-full" />
            <p className="text-base sm:text-lg text-slate-600">
              A chimney does a hard job. It carries smoke, heat, and combustion gases out of your home while withstanding Texas heat, heavy rain, and sudden temperature swings. Over time, that takes a toll. Our services are built around the three needs we see most often.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Primary Card 1 from Sheet */}
            <div className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm hover:shadow-xl hover:border-amber-400 transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 mb-5">
                  <Flame className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-navy-950 mb-3 font-serif">
                  Chimney Cleaning
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Removal of soot, creosote, and debris from the flue and firebox. Learn more about{' '}
                  <Link href="/chimney-cleaning/" className="text-amber-600 font-bold underline hover:text-amber-700">
                    chimney cleaning in Fort Worth
                  </Link>.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100">
                <Link href="/chimney-cleaning/" className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-600 hover:text-amber-700">
                  <span>View Cleaning Details</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Primary Card 2 from Sheet */}
            <div className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm hover:shadow-xl hover:border-amber-400 transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 mb-5">
                  <Search className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-navy-950 mb-3 font-serif">
                  Chimney Inspection
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  A careful look at the flue, liner, masonry, cap, and firebox. See how a{' '}
                  <Link href="/chimney-inspection/" className="text-amber-600 font-bold underline hover:text-amber-700">
                    chimney inspection
                  </Link>{' '}
                  works.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100">
                <Link href="/chimney-inspection/" className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-600 hover:text-amber-700">
                  <span>View Inspection Details</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Primary Card 3 from Sheet */}
            <div className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm hover:shadow-xl hover:border-amber-400 transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 mb-5">
                  <Wrench className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-navy-950 mb-3 font-serif">
                  Chimney Repair
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Solutions for damaged caps, crowns, mortar joints, flashing, and leaks. Explore{' '}
                  <Link href="/chimney-repair/" className="text-amber-600 font-bold underline hover:text-amber-700">
                    chimney repair
                  </Link>{' '}
                  options.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100">
                <Link href="/chimney-repair/" className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-600 hover:text-amber-700">
                  <span>View Repair Options</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Additional Services from Sheet */}
            {services.filter(s => !['/chimney-cleaning/', '/chimney-inspection/', '/chimney-repair/'].includes(s.slug)).slice(0, 6).map((service) => (
              <div key={service.slug} className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm hover:shadow-xl hover:border-amber-400 transition-all flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 mb-5">
                    <Shield className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-navy-950 mb-3 font-serif">
                    {service.title.replace(' in Fort Worth, TX', '')}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6 line-clamp-3">
                    {service.metaDescription}
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100">
                  <Link href={service.slug} className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-600 hover:text-amber-700">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. WHY CHOOSE SECTION (Template Circular Badges + Sheet Content) */}
      <section className="py-20 bg-navy-950 text-white relative overflow-hidden border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-2 block">
              Dedicated Homeowner Values
            </span>
            <h2 className="text-3xl sm:text-4xl font-black font-serif tracking-tight text-white">
              Why Choose Embercrest Chimney Sweep Tanglewood?
            </h2>
            <div className="w-16 h-1 bg-amber-500 mx-auto mt-4 mb-4 rounded-full" />
            <p className="text-base sm:text-lg text-slate-300">
              Choosing a chimney company means inviting someone onto your roof and into your living room, so trust matters. We focus on the basics that homeowners tell us they value most:
            </p>
          </div>

          {/* 4 Circular Badges Matching Template */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChoosePoints.map((pt, idx) => {
              const Icon = pt.icon;
              return (
                <div
                  key={idx}
                  className="bg-navy-900/90 border border-navy-700/80 rounded-2xl p-6 text-center hover:border-amber-500 hover:bg-navy-900 transition-all flex flex-col items-center shadow-lg group"
                >
                  <div className="w-20 h-20 rounded-full bg-navy-950 border-2 border-amber-500/50 group-hover:border-amber-500 group-hover:scale-110 flex items-center justify-center text-amber-400 mb-6 shadow-inner transition-all duration-300">
                    <Icon className="w-9 h-9" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 font-serif">
                    {pt.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {pt.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. OUR PROCESS SECTION (Template 4/5 Step Workflow + Sheet Content) */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-2 block">
              Step-By-Step Standard
            </span>
            <h2 className="text-3xl sm:text-4xl font-black font-serif tracking-tight text-navy-950">
              Our Chimney Cleaning Process
            </h2>
            <div className="w-16 h-1 bg-amber-500 mx-auto mt-4 mb-4 rounded-full" />
            <p className="text-base sm:text-lg text-slate-600">
              A good cleaning is more than running a brush through the flue. Here is what you can expect when we visit your home:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {processSteps.map((st, idx) => {
              const Icon = st.icon;
              return (
                <div key={idx} className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col items-center text-center hover:border-amber-400 hover:shadow-md transition-all">
                  <div className="w-16 h-16 rounded-full bg-white border-2 border-amber-500 text-amber-600 flex items-center justify-center mb-4 shadow-sm">
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

      {/* 5. IMAGE SHOWCASE */}
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
              <Image src="/images/chimney/chimney-on-a-shingled-roof-against-blue-sky-2026-09-23-18-12-52-utc.webp" alt="Clean chimney cap and shingled roof" fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover hover:scale-105 transition-transform" />
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md">
              <Image src="/images/chimney/man-stoking-a-warm-fire-in-a-brick-fireplace-2026-09-23-16-39-11-utc.webp" alt="Warm fire in brick fireplace hearth" fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover hover:scale-105 transition-transform" />
            </div>
          </div>
        </div>
      </section>

      {/* 6. COMMON CHIMNEY PROBLEMS WE HELP SOLVE SECTION */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-2 block">
              Warning Signs & Diagnostics
            </span>
            <h2 className="text-3xl sm:text-4xl font-black font-serif text-navy-950">
              Common Chimney Problems We Help Solve
            </h2>
            <div className="w-16 h-1 bg-amber-500 mx-auto mt-4 mb-4 rounded-full" />
            <p className="text-base sm:text-lg text-slate-600">
              Many chimney problems start small and grow quietly. Knowing the warning signs helps you act early.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((prob, idx) => (
              <div key={idx} className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center mb-4">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-navy-950 mb-2 font-serif">
                  {prob.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {prob.desc}
                </p>
              </div>
            ))}

            {/* Direct Phone Call Action Card */}
            <div className="bg-gradient-to-br from-navy-900 to-navy-950 p-6 sm:p-8 rounded-xl text-white shadow-lg flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  Notice Any Signs?
                </span>
                <h3 className="text-xl font-bold font-serif mt-2 mb-3 text-white">
                  Schedule Your Inspection
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  Call our team to talk through what you have noticed with your fireplace or roofline.
                </p>
              </div>
              <a
                href="tel:+16823505722"
                className="inline-flex items-center justify-center gap-2 py-3 px-5 rounded-lg bg-amber-600 hover:bg-amber-500 text-white font-bold text-sm tracking-wide transition-all shadow-md"
              >
                <Phone className="w-4 h-4 fill-white" />
                <span>Call (682) 350-5722</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 7. WHEN SHOULD YOU SCHEDULE CHIMNEY SERVICE? (With CSIA External Link) */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-8 sm:p-12 shadow-sm">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-700 block mb-2">
              North Texas Seasonal Advice
            </span>
            <h2 className="text-2xl sm:text-3xl font-black font-serif text-navy-950 mb-4">
              When Should You Schedule Chimney Service?
            </h2>
            <div className="space-y-4 text-slate-700 text-base leading-relaxed">
              <p>
                Many homeowners in North Texas use their fireplaces only a few months of the year, so it is easy to forget about the chimney until the first cold snap. Scheduling service before the heating season gives you time to fix anything we find without rushing. The{' '}
                <a
                  href="https://www.csia.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-700 font-bold underline hover:text-amber-800"
                >
                  Chimney Safety Institute of America
                </a>{' '}
                offers helpful homeowner resources on chimney safety and maintenance, and it is a good place to learn more about why routine care matters.
              </p>
              <p>
                Beyond the seasonal tune-up, you should also call us if you notice a strange odor from the fireplace, debris falling into the firebox, visible damage on the roof, or animal noises in the flue. You should also call after a major storm or before buying or selling a home with a fireplace.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. SERVING TANGLEWOOD, FORT WORTH, AND NEARBY COMMUNITIES (All Location Anchors) */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-2 block">
              Local Service Coverage
            </span>
            <h2 className="text-3xl sm:text-4xl font-black font-serif text-navy-950">
              Serving Tanglewood, Fort Worth, and Nearby Communities
            </h2>
            <div className="w-16 h-1 bg-amber-500 mx-auto mt-4 mb-4 rounded-full" />
            <p className="text-base sm:text-lg text-slate-600">
              Embercrest Chimney Sweep Tanglewood is based at 2925 Riverglen Dr, Fort Worth, TX 76109, United States, and serves homeowners in the surrounding area:
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                href={loc.slug}
                className="group p-4 bg-white rounded-xl border border-slate-200 hover:border-amber-500 hover:shadow-md transition-all text-center flex flex-col items-center justify-center"
              >
                <MapPin className="w-5 h-5 text-amber-500 group-hover:scale-110 transition-transform mb-2" />
                <span className="text-xs sm:text-sm font-bold text-navy-950 group-hover:text-amber-600 transition-colors">
                  {loc.title.replace('Chimney Sweep in ', '')}
                </span>
                <span className="text-[10px] text-slate-400 mt-1 uppercase font-semibold">
                  View Area Guide →
                </span>
              </Link>
            ))}
          </div>

          <p className="text-center text-sm text-slate-500 mt-8">
            If you are unsure whether we cover your address, call us or send a message and we will let you know.
          </p>
        </div>
      </section>

      {/* 9. FREQUENTLY ASKED QUESTIONS */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-2 block">
              Homeowner Guidance
            </span>
            <h2 className="text-3xl sm:text-4xl font-black font-serif text-navy-950">
              Frequently Asked Questions
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

      {/* 10. READY TO SCHEDULE YOUR CHIMNEY SERVICE? (Bottom CTA Banner) */}
      <section className="py-20 bg-navy-950 text-white relative overflow-hidden text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-2 block">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-serif mb-4 text-white">
            Ready to Schedule Your Chimney Service?
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-8 font-light">
            Whether you need a routine sweep before winter or you are worried about a leak or damaged cap, Embercrest Chimney Sweep Tanglewood is here to help. Call us today or send a quick request, and we will get back to you with next steps.
          </p>
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
              href="/contact/"
            >
              <span>Request an Estimate</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
