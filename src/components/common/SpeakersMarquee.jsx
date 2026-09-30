import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { dummySpeakers } from '../../data/speakersData';
import { useTranslation } from '../../hooks/useTranslation';
import Container from '../ui/Container';
import SpeakerCard from './SpeakerCard';
import SpeakerModal from './SpeakerModal';

export default function SpeakersMarquee() {
  const { language, t } = useTranslation();
  const isAr = language === 'ar';

  const sectionRef = useRef(null);
  const scrollRef = useRef(null);
  const isInteractingRef = useRef(false);
  const resumeTimeoutRef = useRef(null);
  const isVisibleRef = useRef(true);
  const hasDraggedRef = useRef(false);
  const touchStartPos = useRef({ x: 0, y: 0 });

  // Direction: 1 for forward, -1 for backward
  const directionRef = useRef(1);
  const isWaitingAtEndRef = useRef(false);
  const edgeTimeoutRef = useRef(null);

  const [selectedSpeaker, setSelectedSpeaker] = useState(null);

  // Each speaker appears once (no repetition)
  const speakersList = dummySpeakers;

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

  const handleSpeakerClick = (speaker) => {
    if (!hasDraggedRef.current) {
      setSelectedSpeaker(speaker);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-b from-[#f8fbf9] via-white to-[#f8fbf9] py-14 sm:py-20 border-t border-brand-900/5 select-none"
    >
      <Container className="mb-8 sm:mb-10">
        {/* Section Header */}
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/25 bg-amber-50/90 px-3.5 py-1.5 text-xs font-bold text-amber-800 shadow-xs backdrop-blur">
              <Sparkles className="size-3.5 text-amber-600" />
              <span>{t('home.speakersBadge')}</span>
            </div>
            <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-brand-950">
              {t('home.speakersTitle')}
            </h2>
            <p className="mt-2 max-w-xl text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
              {t('home.speakersSubtitle')}
            </p>
          </div>

          <Link
            to="/speakers"
            className="group inline-flex items-center gap-2 text-xs sm:text-sm font-black text-brand-800 transition-colors hover:text-brand-950"
          >
            <span>{t('home.viewAllSpeakers')}</span>
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1 text-amber-600" />
          </Link>
        </div>
      </Container>

      {/* --- SMART TOUCH & AUTO-SCROLLING SPEAKERS TRACK --- */}
      <div className="relative w-full overflow-hidden py-2">
        {/* Left & Right Gradient Shadows for seamless fade effect */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-4 sm:w-8 bg-gradient-to-r from-[#f8fbf9] to-transparent opacity-60" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-4 sm:w-8 bg-gradient-to-l from-[#f8fbf9] to-transparent opacity-60" />

        <div
          ref={scrollRef}
          className="flex w-full overflow-x-auto scrollbar-none gap-5 sm:gap-6 px-4 sm:px-6 lg:px-8 py-2 touch-pan-x cursor-grab active:cursor-grabbing"
          style={{
            WebkitOverflowScrolling: 'touch',
            overscrollBehaviorX: 'contain',
          }}
          // Mouse interaction (Desktop)
          onMouseEnter={pauseAutoScroll}
          onMouseLeave={() => scheduleResume(400)}

          // Smart Touch interaction (Mobile)
          onTouchStart={(e) => {
            pauseAutoScroll();
            hasDraggedRef.current = false;
            if (e.touches && e.touches[0]) {
              touchStartPos.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
            }
          }}
          onTouchMove={(e) => {
            pauseAutoScroll();
            if (e.touches && e.touches[0]) {
              const diffX = Math.abs(e.touches[0].clientX - touchStartPos.current.x);
              const diffY = Math.abs(e.touches[0].clientY - touchStartPos.current.y);
              if (diffX > 6 || diffY > 6) {
                hasDraggedRef.current = true;
              }
            }
          }}
          onTouchEnd={() => {
            scheduleResume(2200);
            setTimeout(() => {
              hasDraggedRef.current = false;
            }, 150);
          }}
          onTouchCancel={() => scheduleResume(1500)}

          // Detect momentum scroll settling on mobile
          onScroll={() => {
            if (isInteractingRef.current) {
              scheduleResume(2000);
            }
          }}
        >
          {speakersList.map((speaker) => (
            <div
              key={speaker.id}
              className="w-[230px] sm:w-[270px] shrink-0"
              onClick={() => handleSpeakerClick(speaker)}
            >
              <SpeakerCard
                speaker={speaker}
                onSelect={() => handleSpeakerClick(speaker)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Speaker Detail Modal */}
      <SpeakerModal
        speaker={selectedSpeaker}
        onClose={() => setSelectedSpeaker(null)}
      />
    </section>
  );
}
