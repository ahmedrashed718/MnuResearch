import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Image as ImageIcon, Sparkles, Film, ArrowRight, BookOpen, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import Container from '../../components/ui/Container';
import PageHeroBanner from '../../components/common/PageHeroBanner';
import { useTranslation } from '../../hooks/useTranslation';

export default function Gallery() {
  const { language } = useTranslation();
  const isAr = language === 'ar';

  return (
    <div className="min-h-screen bg-[#f8fbf9] pt-2 sm:pt-6 pb-16 sm:pb-24">
      {/* Hero Banner */}
      <PageHeroBanner
        badge={isAr ? 'المركز الإعلامي' : 'Media Center'}
        title={isAr ? 'معرض الصور والتغطيات' : 'Photo & Video Gallery'}
        subtitle={
          isAr
            ? 'التغطية المصورة والتوثيق الإعلامي الشامل لفاعليات مؤتمر جامعة المنوفية الأهلية'
            : 'Visual coverage and media highlights of the MNU 1st Student Research & Innovation Conference.'
        }
      />

      <Container className="mt-6 sm:mt-12 px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Main Ultra-Premium Coming Soon Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-3xl sm:rounded-[36px] border border-brand-900/10 bg-white/90 p-6 sm:p-10 lg:p-14 text-center shadow-2xl shadow-brand-900/10 backdrop-blur-md"
        >
          {/* Glowing Ambient Background Orbs */}
          <div className="absolute -top-32 -right-32 size-80 rounded-full bg-brand-500/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 size-80 rounded-full bg-amber-400/15 blur-3xl pointer-events-none" />
          <div className="hero-grid absolute inset-0 opacity-25 pointer-events-none" />

          {/* Animated Main Icon Shield */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="relative mx-auto mb-6 sm:mb-8 flex size-20 sm:size-24 items-center justify-center rounded-3xl bg-linear-to-br from-brand-700 to-brand-900 p-0.5 shadow-xl shadow-brand-900/25"
          >
            <div className="flex size-full items-center justify-center rounded-[22px] bg-white">
              <Camera className="size-9 sm:size-11 text-brand-700" />
            </div>
            <span className="absolute -bottom-1 -right-1 flex size-7 items-center justify-center rounded-full bg-amber-500 text-white shadow-md border-2 border-white">
              <Sparkles className="size-4" />
            </span>
          </motion.div>

          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-xs font-black text-amber-800 shadow-xs mb-4">
            <span className="size-2 rounded-full bg-amber-500 animate-ping" />
            <span>{isAr ? 'قريباً جداً' : 'Coming Soon'}</span>
          </div>

          {/* Main Headline */}
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-brand-950 tracking-tight leading-tight mb-4">
            {isAr ? 'معرض الصور والتغطيات التوثيقية' : 'Photo Gallery & Media Coverage'}
          </h2>

          {/* Subtitle / Description */}
          <p className="mx-auto max-w-2xl text-slate-600 font-medium text-xs sm:text-base leading-relaxed sm:leading-7 mb-8 sm:mb-10">
            {isAr
              ? 'نعمل حالياً على تجهيز المعرض الرقمي التفاعلي لنقل كافة لحظات المؤتمر، التغطيات الفوتوغرافية، الجلسات الافتتاحية، وتكريم الطلاب الباحثين فور انطلاق المؤتمر.'
              : 'We are preparing the digital media gallery to capture all conference moments, photo highlights, keynotes, and student research awards. Stay tuned!'}
          </p>

          {/* Responsive Preview Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-2xl mx-auto mb-8 sm:mb-12">
            <div className="flex items-center sm:flex-col justify-start sm:justify-center gap-3 rounded-2xl border border-slate-200/80 bg-slate-50/80 p-3.5 sm:p-5 text-start sm:text-center transition-all hover:bg-white hover:shadow-md hover:border-brand-700/30">
              <div className="grid size-10 sm:size-12 place-items-center rounded-xl bg-brand-100 text-brand-800 shrink-0">
                <ImageIcon className="size-5 sm:size-6" />
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-black text-brand-950">{isAr ? 'جلسات الافتتاح' : 'Keynote Sessions'}</h3>
                <p className="text-[11px] text-slate-500 font-medium">{isAr ? 'تغطية مصورة كاملة' : 'Full Photo Coverage'}</p>
              </div>
            </div>

            <div className="flex items-center sm:flex-col justify-start sm:justify-center gap-3 rounded-2xl border border-slate-200/80 bg-slate-50/80 p-3.5 sm:p-5 text-start sm:text-center transition-all hover:bg-white hover:shadow-md hover:border-amber-500/30">
              <div className="grid size-10 sm:size-12 place-items-center rounded-xl bg-amber-100 text-amber-800 shrink-0">
                <Film className="size-5 sm:size-6" />
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-black text-brand-950">{isAr ? 'ورش العمل' : 'Interactive Workshops'}</h3>
                <p className="text-[11px] text-slate-500 font-medium">{isAr ? 'صور الفاعليات والأنشطة' : 'Activities & Highlights'}</p>
              </div>
            </div>

            <div className="flex items-center sm:flex-col justify-start sm:justify-center gap-3 rounded-2xl border border-slate-200/80 bg-slate-50/80 p-3.5 sm:p-5 text-start sm:text-center transition-all hover:bg-white hover:shadow-md hover:border-emerald-500/30">
              <div className="grid size-10 sm:size-12 place-items-center rounded-xl bg-emerald-100 text-emerald-800 shrink-0">
                <Layers className="size-5 sm:size-6" />
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-black text-brand-950">{isAr ? 'تكريم الأبحاث' : 'Research Awards'}</h3>
                <p className="text-[11px] text-slate-500 font-medium">{isAr ? 'صور تكريم الطلاب' : 'Honors & Closing'}</p>
              </div>
            </div>
          </div>

          {/* Action Buttons Responsive Layout */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-xs sm:max-w-md mx-auto">
            <Link
              to="/"
              className="group flex h-12 w-full sm:w-auto items-center justify-center gap-2.5 rounded-full bg-brand-700 px-7 text-xs font-black text-white shadow-lg shadow-brand-900/20 transition-all hover:bg-brand-800 hover:scale-[1.02]"
            >
              <span>{isAr ? 'العودة للرئيسية' : 'Return Home'}</span>
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
            </Link>

            <Link
              to="/research-topics"
              className="flex h-12 w-full sm:w-auto items-center justify-center gap-2.5 rounded-full border border-brand-900/15 bg-white px-7 text-xs font-bold text-brand-900 shadow-xs transition-all hover:bg-slate-50 hover:border-brand-700/30"
            >
              <BookOpen className="size-4 text-amber-500" />
              <span>{isAr ? 'استكشف المحاور' : 'Explore Tracks'}</span>
            </Link>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}
