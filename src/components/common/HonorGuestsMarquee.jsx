import React, { useEffect, useRef, useState } from 'react';
import { Award, ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';
import HonorGuestCard from './HonorGuestCard';

export default function HonorGuestsMarquee({ guests }) {
  const { language } = useTranslation();
  const isAr = language === 'ar';

  const sectionRef = useRef(null);
  const scrollRef = useRef(null);
  const isInteractingRef = useRef(false);
  const resumeTimeoutRef = useRef(null);
  const isVisibleRef = useRef(true);
  const touchStartPos = useRef({ x: 0, y: 0 });

  // Direction: 1 for forward, -1 for backward
  const directionRef = useRef(1);
  const isWaitingAtEndRef = useRef(false);
  const edgeTimeoutRef = useRef(null);

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

  // Smart Resume helper
  const scheduleResume = (delay = 2400) => {
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

  // Manual scroll with buttons
  const scrollManual = (offset) => {
    pauseAutoScroll();
    if (scrollRef.current) {
      const scrollAmount = isAr ? -offset : offset;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
    scheduleResume(3000);
  };

  // IntersectionObserver: Only animate when visible on screen
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

  // Smooth auto-scroll engine
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animId;
    const speed = 0.65; // Gentle readable pace

    const step = () => {
      if (!isInteractingRef.current && isVisibleRef.current && !isWaitingAtEndRef.current && container) {
        const maxScroll = container.scrollWidth - container.clientWidth;

        if (maxScroll > 2) {
          const currentScroll = Math.abs(container.scrollLeft);

          if (directionRef.current === 1) {
            // Forward
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
            // Backward
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

  // Mouse dragging state
  const isMouseDownRef = useRef(false);
  const mouseStartXRef = useRef(0);
  const scrollStartXRef = useRef(0);

  const handleMouseDown = (e) => {
    isMouseDownRef.current = true;
    mouseStartXRef.current = e.pageX - scrollRef.current.offsetLeft;
    scrollStartXRef.current = scrollRef.current.scrollLeft;
    pauseAutoScroll();
  };

  const handleMouseMove = (e) => {
    if (!isMouseDownRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - mouseStartXRef.current) * 1.3;
    scrollRef.current.scrollLeft = scrollStartXRef.current - walk;
  };

  const handleMouseUpOrLeave = () => {
    if (isMouseDownRef.current) {
      isMouseDownRef.current = false;
      scheduleResume(2000);
    }
  };

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

  if (!guests || guests.length === 0) return null;

  return (
    <section ref={sectionRef} className="relative w-full">
      {/* Section Header with Navigation Controls */}
      <div className="flex items-center justify-between gap-4 mb-6 pb-2.5 border-b border-amber-300/50">
        <h2 className="text-lg sm:text-xl font-black text-brand-950 flex items-center gap-2.5">
          <div className="flex size-7 items-center justify-center rounded-lg bg-amber-500/15 border border-amber-400/40 text-amber-600">
            <Award className="size-4" />
          </div>
          <span>{isAr ? 'ضيوف شرف المؤتمر' : 'Guests of Honor'}</span>
          <span className="rounded-full bg-amber-100/80 border border-amber-300/60 px-2.5 py-0.5 text-xs font-black text-amber-900">
            {guests.length}
          </span>
        </h2>

        {/* Navigation Arrows for smooth manual sliding */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => scrollManual(-320)}
            className="flex size-8 items-center justify-center rounded-full border border-amber-400/40 bg-white text-amber-800 shadow-2xs hover:bg-amber-500 hover:text-white transition-all active:scale-95"
            aria-label="Previous Guest"
          >
            {isAr ? <ChevronRight className="size-4" /> : <ChevronLeft className="size-4" />}
          </button>
          <button
            type="button"
            onClick={() => scrollManual(320)}
            className="flex size-8 items-center justify-center rounded-full border border-amber-400/40 bg-white text-amber-800 shadow-2xs hover:bg-amber-500 hover:text-white transition-all active:scale-95"
            aria-label="Next Guest"
          >
            {isAr ? <ChevronLeft className="size-4" /> : <ChevronRight className="size-4" />}
          </button>
        </div>
      </div>

      {/* Horizontal Scrolling Track Container */}
      <div className="relative w-full overflow-hidden py-2 -mx-2 px-2">
        {/* Soft Side Gradient Fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-6 sm:w-10 bg-gradient-to-r from-[#f8fbf9] to-transparent opacity-75" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-6 sm:w-10 bg-gradient-to-l from-[#f8fbf9] to-transparent opacity-75" />

        <div
          ref={scrollRef}
          className="flex w-full overflow-x-auto overflow-y-hidden scrollbar-none gap-5 sm:gap-6 py-3 px-2 sm:px-4 cursor-grab active:cursor-grabbing select-none"
          style={{
            WebkitOverflowScrolling: 'touch',
            touchAction: 'pan-x pan-y',
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={() => {
            handleMouseUpOrLeave();
            scheduleResume(500);
          }}
          onMouseEnter={pauseAutoScroll}
          onTouchStart={(e) => {
            pauseAutoScroll();
            if (e.touches && e.touches[0]) {
              touchStartPos.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
            }
          }}
          onTouchMove={() => pauseAutoScroll()}
          onTouchEnd={() => scheduleResume(2200)}
          onTouchCancel={() => scheduleResume(1500)}
        >
          {guests.map((guest) => (
            <div
              key={guest.id}
              className="w-[280px] sm:w-[310px] md:w-[330px] shrink-0 select-none"
            >
              <HonorGuestCard guest={guest} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
