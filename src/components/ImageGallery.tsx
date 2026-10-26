import Image from 'next/image';

interface ImageGalleryProps {
  images?: string[];
  title?: string;
  subtitle?: string;
}

export default function ImageGallery({
  images = [
    '/images/chimney/construction-worker-building-stone-chimney-on-hous-2026-09-24-06-02-34-utc.webp',
    '/images/chimney/man-repairing-chimney-on-a-sunny-day-2026-09-23-00-08-00-utc.webp',
    '/images/chimney/two-men-installing-chimney-on-rooftop-on-sunny-day-2026-09-24-04-40-20-utc.webp',
    '/images/chimney/chimney-on-a-shingled-roof-against-blue-sky-2026-09-23-18-12-52-utc.webp',
    '/images/chimney/man-stoking-a-warm-fire-in-a-brick-fireplace-2026-09-23-16-39-11-utc.webp',
    '/images/chimney/brick-mason-working-on-chimney-repair-at-home-2026-09-23-20-03-34-utc.webp'
  ],
  title = "Our Work In The Field",
  subtitle = "Professional chimney sweeps, masonry restoration, and fireplace inspections across Fort Worth"
}: ImageGalleryProps) {
  return (
    <section className="py-16 bg-slate-100 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-1 block">
            Quality Craftsmanship
          </span>
          <h2 className="text-2xl sm:text-3xl font-black font-serif text-navy-950">
            {title}
          </h2>
          <div className="w-12 h-1 bg-amber-500 mx-auto mt-3 mb-3 rounded-full" />
          <p className="text-sm text-slate-600">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {images.slice(0, 6).map((img, idx) => (
            <div
              key={idx}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-navy-950 shadow-md border border-slate-200"
            >
              <Image
                src={img}
                alt="Chimney sweep and repair work in Fort Worth"
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-navy-950/20 group-hover:bg-transparent transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
