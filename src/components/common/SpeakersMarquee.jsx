import { motion } from 'framer-motion';
import { ArrowRight, Award, GraduationCap, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { dummySpeakers } from '../../data/speakersData';
import { useTranslation } from '../../hooks/useTranslation';
import Container from '../ui/Container';

export default function SpeakersMarquee() {
  const { language, t } = useTranslation();
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  // Duplicate items 4 times to guarantee a 100% seamless, unbroken infinite loop
  const marqueeItems = [
    ...dummySpeakers,
    ...dummySpeakers,
    ...dummySpeakers,
    ...dummySpeakers,
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f8fbf9] via-white to-[#f8fbf9] py-16 lg:py-20 border-t border-brand-900/5">
      <Container className="mb-8 sm:mb-10">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-gold-500/20 bg-gold-50/80 px-3.5 py-1.5 text-xs font-bold text-gold-700 shadow-sm backdrop-blur">
              <Sparkles className="size-3.5 text-gold-600" />
              {t('home.speakersBadge')}
            </div>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-brand-950 sm:text-4xl">
              {t('home.speakersTitle')}
            </h2>
            <p className="mt-2 max-w-xl text-base text-slate-600">
              {t('home.speakersSubtitle')}
            </p>
          </div>

          <Link
            to="/speakers"
            className="group inline-flex items-center gap-2 text-sm font-bold text-brand-700 transition-colors hover:text-brand-900"
          >
            {t('home.viewAllSpeakers')}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
          </Link>
        </div>
      </Container>

      {/* Infinite Marquee Wrapper */}
      <div 
        className="relative w-full overflow-hidden py-2 select-none"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => {
          if (!isDragging) setIsPaused(false);
        }}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => {
          if (!isDragging) setIsPaused(false);
        }}
      >
        {/* Left & Right Gradient Shadows for seamless fade effect */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#f8fbf9] to-transparent sm:w-28 lg:w-36" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#f8fbf9] to-transparent sm:w-28 lg:w-36" />

        <motion.div
          drag="x"
          dragConstraints={{ left: -1200, right: 1200 }}
          dragElastic={0.1}
          onDragStart={() => {
            setIsDragging(true);
            setIsPaused(true);
          }}
          onDragEnd={() => {
            setIsDragging(false);
            setIsPaused(false);
          }}
          className="flex w-max gap-6 px-4 sm:px-6 lg:px-8 cursor-grab active:cursor-grabbing"
          animate={
            isDragging
              ? {}
              : {
                  x: language === 'ar' ? ['0%', '50%'] : ['0%', '-50%'],
                }
          }
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 180,
              ease: 'linear',
            },
          }}
          style={{
            animationPlayState: isPaused || isDragging ? 'paused' : 'running',
            willChange: 'transform',
          }}
        >
          {marqueeItems.map((speaker, idx) => {
            const name = language === 'ar' ? speaker.nameAr : speaker.nameEn;
            const title = language === 'ar' ? speaker.titleAr : speaker.titleEn;
            const institution = language === 'ar' ? speaker.institutionAr : speaker.institutionEn;
            const topic = language === 'ar' ? speaker.topicAr : speaker.topicEn;
            const badge = language === 'ar' ? speaker.badgeAr : speaker.badgeEn;

            return (
              <div
                key={`${speaker.id}-${idx}`}
                className="group relative w-[300px] shrink-0 overflow-hidden rounded-3xl border border-brand-900/10 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-gold-500/40 hover:shadow-xl hover:shadow-gold-500/10 sm:w-[320px]"
              >
                {/* Top Badge */}
                <div className="absolute top-4 end-4 z-10">
                  <span className="inline-flex items-center gap-1 rounded-full border border-gold-500/30 bg-white/90 px-3 py-1 text-[11px] font-bold text-gold-700 shadow-sm backdrop-blur">
                    <Award className="size-3 text-gold-500" />
                    {badge}
                  </span>
                </div>

                {/* Speaker Avatar */}
                <div className="relative mb-5 mx-auto size-28 overflow-hidden rounded-full border-4 border-gold-500/20 shadow-inner group-hover:border-gold-500/50 transition-colors">
                  <img
                    src={speaker.image}
                    alt={name}
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>

                {/* Speaker Info */}
                <div className="text-center">
                  <h3 className="text-lg font-bold text-brand-950 transition-colors group-hover:text-brand-700">
                    {name}
                  </h3>
                  <p className="mt-1 text-xs font-semibold text-gold-700">
                    {title}
                  </p>
                  
                  <div className="mt-2.5 flex items-center justify-center gap-1.5 text-xs text-slate-500">
                    <GraduationCap className="size-3.5 shrink-0 text-brand-600" />
                    <span className="truncate">{institution}</span>
                  </div>

                  {/* Research Topic Pill */}
                  <div className="mt-4 rounded-xl bg-slate-50 p-2.5 text-center border border-slate-100 group-hover:border-gold-500/20 group-hover:bg-gold-50/40 transition-colors">
                    <p className="text-[11px] font-medium text-slate-600 line-clamp-2 leading-relaxed">
                      <span className="font-bold text-brand-800 me-1">💬</span>
                      "{topic}"
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
