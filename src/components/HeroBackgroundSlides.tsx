'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface HeroBackgroundSlidesProps {
  images?: string[];
  initialImage?: string;
  interval?: number;
}

const defaultSlides = [
  '/images/chimney/chimney-on-a-shingled-roof-against-blue-sky-2026-09-23-18-12-52-utc.webp',
  '/images/chimney/brick-mason-working-on-chimney-repair-at-home-2026-09-23-20-03-34-utc.webp',
  '/images/chimney/man-repairing-chimney-on-a-sunny-day-2026-09-23-00-08-00-utc.webp',
  '/images/chimney/construction-workers-installing-chimney-on-suburba-2026-09-24-02-49-04-utc.webp',
  '/images/chimney/two-men-installing-chimney-on-rooftop-on-sunny-day-2026-09-24-04-40-20-utc.webp',
  '/images/chimney/rooftop-chimneys-and-tiles-on-sunny-day-2026-09-21-11-23-51-utc.webp',
  '/images/chimney/construction-worker-building-stone-chimney-on-hous-2026-09-24-06-02-34-utc.webp'
];

export default function HeroBackgroundSlides({
  images,
  initialImage,
  interval = 5000,
}: HeroBackgroundSlidesProps) {
  // Build slide array, ensuring initialImage is first if provided
  const slideList = (() => {
    const list = images && images.length > 0 ? [...images] : [...defaultSlides];
    if (initialImage && !list.includes(initialImage)) {
      list.unshift(initialImage);
    } else if (initialImage && list.includes(initialImage)) {
      const idx = list.indexOf(initialImage);
      list.splice(idx, 1);
      list.unshift(initialImage);
    }
    return list;
  })();

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (slideList.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slideList.length);
    }, interval);

    return () => clearInterval(timer);
  }, [slideList.length, interval]);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
      {/* 70% opacity image background slide container */}
      <div className="absolute inset-0 opacity-70">
        {slideList.map((src, index) => {
          const isActive = index === currentIndex;
          return (
            <div
              key={src}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={src}
                alt="Embercrest Chimney Background Slide"
                fill
                priority={index === 0}
                sizes="100vw"
                className={`object-cover object-center transform transition-transform duration-[6000ms] ease-out ${
                  isActive ? 'scale-105' : 'scale-100'
                }`}
              />
            </div>
          );
        })}
      </div>

      {/* Subtle overlay gradients for optimal text legibility and contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950/85 via-navy-950/60 to-navy-950/85" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950/70 via-transparent to-navy-950/90" />

      {/* Slide indicators */}
      {slideList.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 pointer-events-auto">
          {slideList.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === currentIndex
                  ? 'w-6 bg-amber-500 shadow-sm shadow-amber-500/50'
                  : 'w-2 bg-white/40 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}