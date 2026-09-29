import React from 'react';
import { motion } from 'framer-motion';
import {
  ExternalLink,
  FileText,
  Mail,
  Calendar,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import Container from '../../components/ui/Container';
import { useTranslation } from '../../hooks/useTranslation';

// Official University Logo
import logo from '../../assets/images/logo.jpeg';

export default function Registration() {
  const { language, t } = useTranslation();
  const isAr = language === 'ar';
  const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLScuuKS6INAUHp5jmeQuRtNyEAiwLGhO2JdAzWhwstdL42GmMg/viewform';

  return (
    <div className="min-h-screen bg-[#f8fbf9] pt-3 sm:pt-6 pb-24 selection:bg-brand-500 selection:text-white">
      {/* --- HERO BANNER --- */}
      <section className="py-1 sm:py-3">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            style={{ backgroundColor: '#022c20' }}
            className="relative overflow-hidden rounded-3xl border-2 border-amber-500/35 bg-[#022c20] p-6 sm:p-10 text-white shadow-2xl"
          >
            <div className="absolute -top-24 -right-24 size-72 rounded-full bg-amber-500/25 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 size-72 rounded-full bg-emerald-400/20 blur-3xl pointer-events-none" />

            <div
              className="absolute inset-0 opacity-25 pointer-events-none"
              style={{
                backgroundImage: `radial-gradient(rgba(245, 158, 11, 0.45) 1.5px, transparent 1.5px)`,
                backgroundSize: '18px 18px',
              }}
            />

            <div className="relative z-10 flex flex-col items-center text-center md:flex-row md:items-center md:justify-between md:text-start gap-6">
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="shrink-0 relative order-1 md:order-2"
              >
                <div className="absolute -inset-3 rounded-full bg-amber-400/25 blur-md pointer-events-none" />
                <div className="relative size-20 sm:size-24 md:size-28 shrink-0 overflow-hidden rounded-full border-4 border-amber-400/80 bg-white p-1 shadow-2xl">
                  <img
                    src={logo}
                    alt={t('universityName')}
                    className="size-full rounded-full object-cover"
                  />
                </div>
              </motion.div>

              <div className="space-y-2 max-w-xl order-2 md:order-1">
                <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-500/20 px-3.5 py-1 text-xs font-black text-amber-300 backdrop-blur-md shadow-xs">
                  <FileText className="size-3.5 text-amber-400" />
                  <span>{isAr ? 'استمارة التسجيل والمشاركة الرسمية' : 'Official Conference Registration'}</span>
                </div>

                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight">
                  {isAr ? (
                    <>
                      <span>التسجيل في</span>{' '}
                      <span className="text-amber-400">المؤتمر الطلابي الأول</span>
                    </>
                  ) : (
                    <>
                      <span>Registration for</span>{' '}
                      <span className="text-amber-400">1st Student Conference</span>
                    </>
                  )}
                </h1>

                <p className="text-xs sm:text-sm text-amber-100/90 font-medium">
                  {isAr
                    ? 'يتم استقبال طلبات المشاركة والحضور وتقديم الأبحاث العلمية عبر الاستمارة الإلكترونية الرسمية المعتمدة لجامعة المنوفية الأهلية.'
                    : 'Submissions for attendance, research participation, and posters are accepted through the official MNU registration form.'}
                </p>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* --- CONTENT CONTAINER --- */}
      <Container className="mt-8 max-w-4xl">
        <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-10 shadow-xl relative overflow-hidden">
          {/* Top Accent Line */}
          <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-brand-700 via-amber-400 to-brand-700" />

          {/* Registration Announcement Box */}
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <div className="mx-auto grid size-16 place-items-center rounded-2xl bg-amber-50 text-amber-600 border border-amber-200/80 shadow-sm">
              <Sparkles className="size-8" />
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-brand-950">
              {isAr ? 'استمارة التسجيل الإلكترونية الرسمية' : 'Official Online Registration Form'}
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
              {isAr
                ? 'يرجى النقر على الزر أدناه لتعبئة استمارة التسجيل الرسمية المعتمدة للمؤتمر وتسجيل بياناتك الأكاديمية والبحثية.'
                : 'Click the button below to open and fill out the official registration form for the conference.'}
            </p>

            {/* Main Action Button */}
            <div className="pt-2 pb-4">
              <a
                href={formUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-14 items-center justify-center gap-3 rounded-full bg-gradient-to-r from-brand-700 via-brand-600 to-brand-700 px-8 sm:px-10 text-sm font-black text-white shadow-xl shadow-brand-900/25 transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl hover:from-brand-800 hover:to-brand-700 active:scale-95"
              >
                <span>{isAr ? 'فتح استمارة التسجيل الآن' : 'Open Registration Form Now'}</span>
                <ExternalLink className="size-4.5" />
              </a>
            </div>
          </div>

          {/* Information & Guidelines Grid */}
          <div className="mt-8 pt-8 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-semibold text-slate-700">
            <div className="rounded-2xl border border-slate-200/80 bg-slate-50/80 p-4 space-y-1.5">
              <div className="flex items-center gap-2 text-brand-700 font-black">
                <CheckCircle2 className="size-4 text-emerald-600" />
                <span>{isAr ? 'المشاركة والأبحاث' : 'Participation'}</span>
              </div>
              <p className="text-[11px] text-slate-600 leading-relaxed font-normal">
                {isAr
                  ? 'متاح لجميع طلاب جامعة المنوفية الأهلية والجامعات المصرية تقديم أبحاثهم ومشاريعهم.'
                  : 'Open for students to submit research papers, innovation prototypes, and posters.'}
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200/80 bg-slate-50/80 p-4 space-y-1.5">
              <div className="flex items-center gap-2 text-brand-700 font-black">
                <Calendar className="size-4 text-amber-600" />
                <span>{isAr ? 'موعد انعقاد المؤتمر' : 'Conference Date'}</span>
              </div>
              <p className="text-[11px] text-slate-600 leading-relaxed font-normal">
                {isAr ? '4 أكتوبر 2026 حضورياً بمقر جامعة المنوفية الأهلية.' : 'October 4, 2026 in-person at MNU campus.'}
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200/80 bg-slate-50/80 p-4 space-y-1.5">
              <div className="flex items-center gap-2 text-brand-700 font-black">
                <Mail className="size-4 text-blue-600" />
                <span>{isAr ? 'إرسال الأبحاث كاملة' : 'Submitting Full Papers'}</span>
              </div>
              <p className="text-[11px] text-slate-600 leading-relaxed font-normal">
                {isAr
                  ? 'تُرسل الأوراق والأبحاث الكاملة إلى: quality@mnu.edu.eg'
                  : 'Submit full manuscripts to: quality@mnu.edu.eg'}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
