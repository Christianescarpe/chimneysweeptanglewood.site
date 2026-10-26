'use client';

import { Phone } from 'lucide-react';
import { siteData } from '@/lib/data';

export default function FloatingCallButton() {
  const { business } = siteData;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 p-3 bg-navy-950/95 backdrop-blur-md border-t border-navy-800 lg:hidden shadow-2xl">
      <div className="max-w-md mx-auto flex items-center justify-between gap-3">
        <div className="flex flex-col">
          <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider">
            Fast Local Service
          </span>
          <span className="text-xs text-white font-medium">
            Tanglewood & Fort Worth, TX
          </span>
        </div>
        <a
          href={`tel:${business.phoneRaw}`}
          className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 active:from-amber-600 active:to-amber-700 text-white font-bold text-sm shadow-lg shadow-amber-600/30"
        >
          <Phone className="w-4 h-4 fill-white" />
          <span>Call {business.phone}</span>
        </a>
      </div>
    </div>
  );
}
