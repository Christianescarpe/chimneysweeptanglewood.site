import Link from 'next/link';
import { Flame, Home, Phone } from 'lucide-react';
import { siteData } from '@/lib/data';

export default function NotFound() {
  const { business } = siteData;

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-slate-50 px-4 py-20 text-center">
      <div className="max-w-md mx-auto space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-amber-500 text-white flex items-center justify-center mx-auto shadow-lg shadow-amber-500/30">
          <Flame className="w-10 h-10" />
        </div>
        <h1 className="text-4xl font-black font-serif text-navy-950">
          Page Not Found
        </h1>
        <p className="text-sm text-slate-600 leading-relaxed">
          The chimney page you are looking for does not exist or may have moved. Please return to our homepage or give us a call directly.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-navy-900 text-white font-bold text-xs uppercase tracking-wider hover:bg-navy-800 transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Go To Homepage</span>
          </Link>
          <a
            href={`tel:${business.phoneRaw}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-amber-600 text-white font-bold text-xs uppercase tracking-wider hover:bg-amber-500 transition-colors shadow-md"
          >
            <Phone className="w-4 h-4 fill-white" />
            <span>Call (682) 350-5722</span>
          </a>
        </div>
      </div>
    </div>
  );
}
