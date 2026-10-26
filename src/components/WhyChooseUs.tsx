import { MessageSquare, Shield, ThumbsUp, MapPin } from 'lucide-react';
import { siteData } from '@/lib/data';

export default function WhyChooseUs() {
  const { business } = siteData;

  const points = [
    {
      icon: MessageSquare,
      title: "Clear Communication",
      desc: "We explain what we see, show you the condition of your chimney where possible, and talk through your options before any work begins."
    },
    {
      icon: Shield,
      title: "Respect For Your Home",
      desc: "We prepare the work area, protect floors and furnishings, and clean up thoroughly when the job is finished."
    },
    {
      icon: ThumbsUp,
      title: "Honest Recommendations",
      desc: "If your chimney only needs a sweep, we will say so. If a repair is needed, we will explain why and what happens if it is delayed."
    },
    {
      icon: MapPin,
      title: "Local Knowledge",
      desc: "Fort Worth homes range from established neighborhoods in Tanglewood to newer builds across Tarrant County, with chimneys varying in age, materials, and condition."
    }
  ];

  return (
    <section className="py-20 bg-navy-950 text-white relative overflow-hidden border-b border-navy-800">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(217,119,6,0.15),rgba(255,255,255,0))]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-2 block">
            Dedicated To Homeowner Trust
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-serif tracking-tight text-white">
            Why Choose Embercrest
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto mt-4 mb-4 rounded-full" />
          <p className="text-base sm:text-lg text-slate-300">
            Choosing a chimney company means inviting someone onto your roof and into your living room, so trust matters. We focus on the basics that homeowners tell us they value most.
          </p>
        </div>

        {/* 4 Badges Grid matching the template's circular icon badges */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <div
                key={idx}
                className="bg-navy-900/80 border border-navy-700/80 rounded-2xl p-6 text-center hover:border-amber-500/50 hover:bg-navy-900 transition-all duration-300 flex flex-col items-center shadow-lg group"
              >
                {/* Circular badge */}
                <div className="w-20 h-20 rounded-full bg-navy-950 border-2 border-amber-500/40 group-hover:border-amber-500 group-hover:scale-110 flex items-center justify-center text-amber-400 mb-6 shadow-inner transition-all duration-300">
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

        {/* CTA Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-navy-900 to-navy-850 border border-navy-700 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white font-serif">
              Ready to speak with our chimney specialists?
            </h3>
            <p className="text-sm text-slate-400 mt-1">
              Call Embercrest Chimney Sweep Tanglewood for honest advice and straightforward pricing.
            </p>
          </div>
          <a
            href={`tel:${business.phoneRaw}`}
            className="shrink-0 inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-amber-600 hover:bg-amber-500 text-white font-bold text-sm uppercase tracking-wider transition-all shadow-lg shadow-amber-600/20"
          >
            <span>Call {business.phone}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
