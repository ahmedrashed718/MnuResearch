import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Sparkles, Bell, BookOpen, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Container from '../../components/ui/Container';
import PageHeroBanner from '../../components/common/PageHeroBanner';
import { useTranslation } from '../../hooks/useTranslation';

export default function Agenda() {
  const { language, t } = useTranslation();
  const isAr = language === 'ar';

  return (
    <div className="min-h-screen bg-[#f8fbf9] pt-3 sm:pt-6 pb-24">
      {/* Hero Banner */}
      <PageHeroBanner
        badge={isAr ? 'برنامج المؤتمر' : 'Conference Program'}
        title={isAr ? 'جدول الأعمال والأجندة' : 'Conference Agenda'}
        subtitle={
          isAr
            ? 'البرنامج الزمني والجلسات العلمية لمؤتمر البحث العلمي والابتكار الأول'
            : 'Detailed timetable and scientific session schedule for the 1st Student Research & Innovation Conference.'
        }
      />

      <Container className="mt-10 sm:mt-14 max-w-4xl">
        {/* Main TBA Status Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl border border-brand-900/10 bg-white p-8 sm:p-12 text-center shadow-xl shadow-slate-200/60"
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute -top-24 -right-24 size-64 rounded-full bg-amber-400/15 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 size-64 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />

          {/* Icon Badge */}
          <div className="mx-auto mb-6 flex size-20 items-center justify-center rounded-3xl bg-amber-50 border border-amber-200/80 shadow-md">
            <Clock className="size-10 text-amber-600 animate-pulse" />
          </div>

          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-xs font-black text-amber-700 shadow-xs mb-4">
            <Sparkles className="size-3.5 text-amber-500" />
            <span>{isAr ? 'سيتم الإعلان عنها قريباً' : 'To Be Announced'}</span>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-950 tracking-tight mb-4">
            {isAr ? 'أجندة المؤتمر قيد الاعتماد النهائي' : 'Conference Schedule To Be Announced'}
          </h2>

          {/* Description */}
          <p className="mx-auto max-w-2xl text-slate-600 font-medium text-sm sm:text-base leading-relaxed mb-8">
            {isAr
              ? 'يعمل اللجنة التنظيمية لمؤتمر جامعة المنوفية الأهلية على صياغة الجدول التفصيلي للجلسات العلمية، العروض التقديمية، والورش التفاعلية بكل دقة. سيتم نشر الأجندة الكاملة هنا قريباً جداً.'
              : 'The organizing committee of MNU 1st Student Research & Innovation Conference is finalizing the detailed timeline for scientific sessions, keynotes, and workshops. The complete agenda will be published here very soon.'}
          </p>

          {/* Event Dates & Location Box */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto mb-10 text-start">
            <div className="flex items-center gap-3.5 rounded-2xl border border-slate-200/80 bg-slate-50/80 p-4 shadow-xs">
              <div className="grid size-11 place-items-center rounded-xl bg-brand-700 text-white shrink-0">
                <Calendar className="size-5" />
              </div>
              <div>
                <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">{isAr ? 'تاريخ المؤتمر' : 'Conference Dates'}</p>
                <p className="text-sm font-black text-brand-950">{isAr ? '15 - 16 مايو 2026' : 'May 15 - 16, 2026'}</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 rounded-2xl border border-slate-200/80 bg-slate-50/80 p-4 shadow-xs">
              <div className="grid size-11 place-items-center rounded-xl bg-amber-500 text-white shrink-0">
                <Bell className="size-5" />
              </div>
              <div>
                <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">{isAr ? 'الحالة' : 'Status'}</p>
                <p className="text-sm font-black text-amber-700">{isAr ? 'جدول العروض (قريباً)' : 'TBA Schedule'}</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/registration"
              className="inline-flex h-12 items-center justify-center gap-2.5 rounded-full bg-brand-700 px-7 text-xs font-black text-white shadow-lg shadow-brand-900/20 transition-all hover:bg-brand-800 hover:scale-105"
            >
              <span>{isAr ? 'التسجيل في المؤتمر' : 'Register Now'}</span>
              <ArrowRight className="size-4 rtl:rotate-180" />
            </Link>

            <Link
              to="/research-topics"
              className="inline-flex h-12 items-center justify-center gap-2.5 rounded-full border border-slate-200 bg-white px-7 text-xs font-bold text-brand-900 shadow-xs transition-all hover:bg-slate-50"
            >
              <BookOpen className="size-4 text-amber-500" />
              <span>{isAr ? 'استكشف المحاور العلمية' : 'Explore Research Tracks'}</span>
            </Link>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}
