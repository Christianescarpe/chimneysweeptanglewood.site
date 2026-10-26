import { Shield, Eye, Flame, CheckCircle, ArrowRight } from 'lucide-react';

export default function ProcessStepper() {
  const steps = [
    {
      step: 'Step 1',
      title: 'Preparation',
      desc: 'We lay down protective coverings around the fireplace and set up equipment to contain soot and debris.',
      icon: Shield
    },
    {
      step: 'Step 2',
      title: 'Visual Check',
      desc: 'Before cleaning, we look at the firebox, damper, and accessible parts of the flue for obvious signs of damage or blockage.',
      icon: Eye
    },
    {
      step: 'Step 3',
      title: 'Cleaning',
      desc: 'Using specialized brushes and vacuum equipment, we remove soot, creosote, and debris from the flue and firebox.',
      icon: Flame
    },
    {
      step: 'Step 4',
      title: 'Findings Review & Cleanup',
      desc: 'We tell you what we noticed, remove all debris, vacuum the work area, and leave your hearth tidy.',
      icon: CheckCircle
    }
  ];

  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-2 block">
            Systematic & Thorough
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-serif tracking-tight text-navy-950">
            Our Chimney Cleaning Process
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto mt-4 mb-4 rounded-full" />
          <p className="text-base sm:text-lg text-slate-600">
            A good cleaning is more than running a brush through the flue. Here is what you can expect when we visit your home:
          </p>
        </div>

        {/* 4 Process Steps with connecting line */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((st, idx) => {
            const Icon = st.icon;
            return (
              <div key={idx} className="relative flex flex-col items-center text-center group">
                {/* Arrow connector between steps for desktop */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-1/2 w-full h-[2px] bg-slate-200 z-0">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 text-slate-400">
                      <ArrowRight className="w-4 h-4 -mr-2" />
                    </div>
                  </div>
                )}

                {/* Step Circle */}
                <div className="relative z-10 w-24 h-24 rounded-full bg-slate-50 border-2 border-amber-500/50 group-hover:border-amber-500 group-hover:scale-105 group-hover:bg-amber-50 flex items-center justify-center text-amber-600 shadow-sm transition-all duration-300 mb-6">
                  <Icon className="w-10 h-10" />
                  <span className="absolute -bottom-2 px-2.5 py-0.5 rounded-full bg-navy-950 text-white text-[10px] font-bold uppercase tracking-wider">
                    {st.step}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-navy-950 mb-2 font-serif">
                  {st.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {st.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
