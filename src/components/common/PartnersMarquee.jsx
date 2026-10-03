import React, { useEffect, useRef } from 'react';
import { ArrowRight, Globe2, Handshake } from 'lucide-react';
import { Link } from 'react-router-dom';
import { dummyPartners } from '../../data/partnersData';
import { useTranslation } from '../../hooks/useTranslation';
import Container from '../ui/Container';

export default function PartnersMarquee() {
  const { language } = useTranslation();
  const isAr = language === 'ar';
  
  const sectionRef = useRef(null);
  const scrollRef = useRef(null);
  const isInteractingRef = useRef(false);
  const resumeTimeoutRef = useRef(null);
  const isVisibleRef = useRef(true);

  // Direction: 1 for forward, -1 for backward
  const directionRef = useRef(1);
  const isWaitingAtEndRef = useRef(false);
  const edgeTimeoutRef = useRef(null);

  // Each partner appears once (no repetition)
  const partnersList = dummyPartners;

  // Pause helper
  const pauseAutoScroll = () => {
    isInteractingRef.current = true;
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
      resumeTimeoutRef.current = null;
    }
    if (edgeTimeoutRef.current) {
      clearTimeout(edgeTimeoutRef.current);
      edgeTimeoutRef.current = null;
    }
    isWaitingAtEndRef.current = false;
  };

  // Smart Resume helper (waits after touch/inertia ends before resuming)
  const scheduleResume = (delay = 2200) => {
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
    }
    resumeTimeoutRef.current = setTimeout(() => {
      if (scrollRef.current) {
        const container = scrollRef.current;
        const currentScroll = Math.abs(container.scrollLeft);
        const maxScroll = container.scrollWidth - container.clientWidth;
        if (currentScroll >= maxScroll - 10) {
          directionRef.current = -1;
        } else if (currentScroll <= 10) {
          directionRef.current = 1;
        }
      }
      isWaitingAtEndRef.current = false;
      isInteractingRef.current = false;
    }, delay);
  };

  // IntersectionObserver: Only animate when visible on screen to save mobile battery
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisibleRef.current = entry.isIntersecting;
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  // Butter-smooth 60-120fps auto-scroll engine with gentle ping-pong (no duplicate items)
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animId;
    const speed = 0.7; // Optimal readable auto-scroll speed

    const step = () => {
      if (!isInteractingRef.current && isVisibleRef.current && !isWaitingAtEndRef.current && container) {
        const maxScroll = container.scrollWidth - container.clientWidth;

        if (maxScroll > 2) {
          const currentScroll = Math.abs(container.scrollLeft);

          if (directionRef.current === 1) {
            // Moving towards the end
            if (currentScroll >= maxScroll - 2) {
              isWaitingAtEndRef.current = true;
              if (edgeTimeoutRef.current) clearTimeout(edgeTimeoutRef.current);
              edgeTimeoutRef.current = setTimeout(() => {
                directionRef.current = -1;
                isWaitingAtEndRef.current = false;
              }, 2200);
            } else {
              container.scrollLeft += (isAr ? -speed : speed);
            }
          } else {
            // Moving back towards the start
            if (currentScroll <= 2) {
              isWaitingAtEndRef.current = true;
              if (edgeTimeoutRef.current) clearTimeout(edgeTimeoutRef.current);
              edgeTimeoutRef.current = setTimeout(() => {
                directionRef.current = 1;
                isWaitingAtEndRef.current = false;
              }, 2200);
            } else {
              container.scrollLeft += (isAr ? speed : -speed);
            }
          }
        }
      }
      animId = requestAnimationFrame(step);
    };

    animId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(animId);
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
      if (edgeTimeoutRef.current) clearTimeout(edgeTimeoutRef.current);
    };
  }, [isAr]);

  // Smart Wheel Listener: Vertical wheel scrolls page naturally, Horizontal wheel scrolls cards
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const onWheel = (e) => {
      const isHorizontal = Math.abs(e.deltaX) > Math.abs(e.deltaY) || e.shiftKey;

      if (isHorizontal) {
        // Horizontal scroll: scroll between the cards
        e.preventDefault();
        pauseAutoScroll();
        const delta = Math.abs(e.deltaX) > 0 ? e.deltaX : e.deltaY;
        container.scrollLeft += (isAr ? -delta : delta);
        scheduleResume(2000);
      }
      // Vertical scroll: do NOT call preventDefault!
      // The browser natively and smoothly scrolls the main page up and down.
    };

    container.addEventListener('wheel', onWheel, { passive: false });
    return () => {
      container.removeEventListener('wheel', onWheel);
    };
  }, [isAr]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#f4f8f5] py-14 sm:py-20 border-t border-brand-900/5 select-none"
    >
      <Container>
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end mb-8 sm:mb-10">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-700/20 bg-white/90 px-3.5 py-1.5 text-xs font-bold text-brand-800 shadow-sm backdrop-blur">
              <Handshake className="size-3.5 text-gold-600" />
              <span>{isAr ? 'الشركاء والرعاة الرسميون' : 'Official Partners & Sponsors'}</span>
            </div>
            <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-brand-950">
              {isAr ? 'الشركاء والجهات الداعمة للمؤتمر' : 'Conference Partners & Supporters'}
            </h2>
            <p className="mt-2 max-w-xl text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
              {isAr
                ? 'شراكات استراتيجية لدعم الابتكار والأنشطة الطلابية بالمؤتمر الطلابي الأول لجامعة المنوفية الأهلية.'
                : 'Strategic partnerships supporting student innovation and interactive conference activities.'}
            </p>
          </div>

          <Link
            to="/partners"
            className="group inline-flex items-center gap-2 text-xs sm:text-sm font-black text-brand-800 transition-colors hover:text-brand-950"
          >
            <span>{isAr ? 'استعرض تفاصيل الرعاية' : 'View Sponsorship Details'}</span>
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1 text-amber-600" />
          </Link>
        </div>

        {/* --- SMART TOUCH & AUTO-SCROLL CONTAINER --- */}
        <div className="relative w-full overflow-hidden py-2 -mx-2 px-2">
          {/* Left & Right Gradient Shadows for seamless fade effect */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-6 sm:w-10 bg-gradient-to-r from-[#f4f8f5] to-transparent opacity-75" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-6 sm:w-10 bg-gradient-to-l from-[#f4f8f5] to-transparent opacity-75" />

          <div
            ref={scrollRef}
            className="flex w-full overflow-x-auto overflow-y-hidden scrollbar-none gap-5 sm:gap-6 py-3 px-2 sm:px-4 cursor-grab active:cursor-grabbing select-none"
            style={{
              WebkitOverflowScrolling: 'touch',
              touchAction: 'pan-x pan-y',
            }}
          // Mouse interaction (Desktop)
          onMouseEnter={pauseAutoScroll}
          onMouseLeave={() => scheduleResume(400)}
          
          // Smart Touch interaction (Mobile)
          onTouchStart={pauseAutoScroll}
          onTouchMove={pauseAutoScroll}
          onTouchEnd={() => scheduleResume(2200)}
          onTouchCancel={() => scheduleResume(1500)}

          // Detect momentum scroll settling on mobile
          onScroll={() => {
            if (isInteractingRef.current) {
              scheduleResume(2000);
            }
          }}
        >
          {partnersList.map((partner) => {
            const name = isAr ? partner.nameAr : partner.nameEn;
            const category = isAr ? partner.categoryAr : partner.categoryEn;
            const desc = isAr ? partner.descriptionAr : partner.descriptionEn;

            return (
              <div
                key={partner.id}
                className="group relative flex w-[270px] sm:w-[320px] shrink-0 flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-5 sm:p-7 shadow-xs transition-all duration-300 hover:-translate-y-2 hover:border-gold-500/50 hover:shadow-xl hover:shadow-brand-900/10"
              >
                {/* Top Subtle Gradient Accent Line on Hover */}
                <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-brand-700 via-gold-500 to-brand-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div>
                  <div className="flex items-center justify-between gap-4">
                    {/* Brand Vector Logo Box */}
                    <div className="flex h-14 sm:h-16 w-36 items-center justify-start rounded-xl bg-white p-1 transition-transform duration-300 group-hover:scale-105">
                      <img
                        src={partner.logo}
                        alt={name}
                        className="h-full max-w-full object-contain object-start filter drop-shadow-xs pointer-events-none"
                        loading="lazy"
                      />
                    </div>

                    {partner.website && partner.website !== '#' ? (
                      <a
                        href={partner.website}
                        target="_blank"
                        rel="noreferrer"
                        className="flex size-9 shrink-0 items-center justify-center rounded-full bg-slate-50 text-slate-400 group-hover:bg-gold-50 group-hover:text-gold-600 transition-colors"
                        title={name}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Globe2 className="size-4" />
                      </a>
                    ) : (
                      <div
                        className="flex size-9 shrink-0 items-center justify-center rounded-full bg-slate-50 text-slate-400"
                        title={name}
                      >
                        <Globe2 className="size-4" />
                      </div>
                    )}
                  </div>

                  {/* Partner Name & Category */}
                  <div className="mt-4">
                    <h3 className="text-base sm:text-xl font-black text-brand-950 transition-colors group-hover:text-brand-700 line-clamp-1">
                      {name}
                    </h3>
                    <p className="mt-1 text-xs font-bold text-amber-700 line-clamp-1">
                      {category}
                    </p>
                    <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed font-medium line-clamp-3">
                      {desc}
                    </p>
                  </div>
                </div>

                <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between">
                  {partner.website && partner.website !== '#' ? (
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-black text-brand-700 hover:text-brand-950 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span>{isAr ? (partner.websiteLabelAr || 'الموقع الرسمي') : (partner.websiteLabelEn || 'Official Website')}</span>
                      <ArrowRight className="size-3.5 rtl:rotate-180 text-amber-600" />
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500">
                      <span>{isAr ? 'شريك وراعي معتمد' : 'Verified Partner'}</span>
                    </span>
                  )}
                  <span className="text-[11px] font-bold text-slate-400">
                    {isAr ? 'راعي رسمي' : 'Official Sponsor'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  </section>
);
}
