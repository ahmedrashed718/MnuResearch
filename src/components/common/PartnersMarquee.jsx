import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Globe2, Handshake } from 'lucide-react';
import { Link } from 'react-router-dom';
import { dummyPartners } from '../../data/partnersData';
import { useTranslation } from '../../hooks/useTranslation';
import Container from '../ui/Container';

export default function PartnersMarquee() {
  const { language, t } = useTranslation();
  const scrollRef = useRef(null);
  const [isInteracting, setIsInteracting] = useState(false);
  const isAr = language === 'ar';

  // Duplicate items 4 times to guarantee a 100% seamless, unbroken infinite loop
  const marqueeItems = [
    ...dummyPartners,
    ...dummyPartners,
    ...dummyPartners,
    ...dummyPartners,
  ];

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animId;
    const speed = 0.75; // Ultra-smooth 60-120fps auto scroll speed

    const step = () => {
      if (!isInteracting && container) {
        if (isAr) {
          container.scrollLeft -= speed;
          if (Math.abs(container.scrollLeft) >= container.scrollWidth / 2) {
            container.scrollLeft = 0;
          }
        } else {
          container.scrollLeft += speed;
          if (container.scrollLeft >= container.scrollWidth / 2) {
            container.scrollLeft = 0;
          }
        }
      }
      animId = requestAnimationFrame(step);
    };

    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [isInteracting, isAr]);

  return (
    <section className="relative overflow-hidden bg-[#f4f8f5] py-16 lg:py-20 border-t border-brand-900/5">
      <Container className="mb-8 sm:mb-10">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-700/20 bg-white/90 px-3.5 py-1.5 text-xs font-bold text-brand-800 shadow-sm backdrop-blur">
              <Handshake className="size-3.5 text-gold-600" />
              <span>{isAr ? 'الشركاء الدوليون والرعاة' : 'Global Partners & Sponsors'}</span>
            </div>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-brand-950 sm:text-4xl">
              {isAr ? 'الشركاء والجهات الداعمة للمؤتمر' : 'Conference Partners & Supporters'}
            </h2>
            <p className="mt-2 max-w-xl text-base text-slate-600">
              {isAr
                ? 'شراكات استراتيجية مع كبرى الشركات العالمية والمؤسسات الأكاديمية والبحثية المرموقة.'
                : 'Strategic partnerships with leading international technology firms and research institutions.'}
            </p>
          </div>

          <Link
            to="/partners"
            className="group inline-flex items-center gap-2 text-sm font-bold text-brand-700 transition-colors hover:text-brand-900"
          >
            <span>{isAr ? 'استعرض كافة الشركاء' : 'View all partners'}</span>
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
          </Link>
        </div>
      </Container>

      {/* 100% Butter-Smooth Hardware-Accelerated Touch Marquee */}
      <div className="relative w-full overflow-hidden py-3">
        {/* Left & Right Gradient Shadows for seamless fade effect */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#f4f8f5] to-transparent sm:w-28 lg:w-36" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#f4f8f5] to-transparent sm:w-28 lg:w-36" />

        <div
          ref={scrollRef}
          className="flex w-full overflow-x-auto scrollbar-none gap-6 px-4 sm:px-6 lg:px-8 touch-pan-x py-2 select-none"
          style={{
            WebkitOverflowScrolling: 'touch',
          }}
          onMouseEnter={() => setIsInteracting(true)}
          onMouseLeave={() => setIsInteracting(false)}
          onTouchStart={() => setIsInteracting(true)}
          onTouchEnd={() => setIsInteracting(false)}
        >
          {marqueeItems.map((partner, idx) => {
            const name = isAr ? partner.nameAr : partner.nameEn;
            const category = isAr ? partner.categoryAr : partner.categoryEn;

            return (
              <div
                key={`${partner.id}-${idx}`}
                className="group relative flex w-[260px] sm:w-[300px] shrink-0 flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-gold-500/50 hover:shadow-xl hover:shadow-brand-900/10"
              >
                {/* Top Subtle Gradient Accent Line on Hover */}
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-700 via-gold-500 to-brand-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Brand Logo Container */}
                <div>
                  <div className="flex items-center justify-between gap-3">
                    {/* Brand Vector Logo Box */}
                    <div className="flex h-14 w-36 items-center justify-start rounded-lg bg-white p-1 transition-transform duration-300 group-hover:scale-105">
                      <img
                        src={partner.logo}
                        alt={name}
                        className="h-full max-w-full object-contain object-start filter drop-shadow-xs"
                        loading="lazy"
                      />
                    </div>

                    <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-slate-50 text-slate-400 group-hover:bg-gold-50 group-hover:text-gold-600 transition-colors">
                      <Globe2 className="size-3.5" />
                    </div>
                  </div>

                  {/* Partner Name & Domain Category */}
                  <div className="mt-3">
                    <h3 className="text-base font-black text-brand-950 line-clamp-1 transition-colors group-hover:text-brand-700">
                      {name}
                    </h3>
                    <p className="mt-0.5 text-xs font-bold text-gold-700 line-clamp-1">
                      {category}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
