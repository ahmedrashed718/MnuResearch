import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  BookOpen
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Container from '../../components/ui/Container';
import { researchTopicsData } from '../../data/topicsData';
import { useTranslation } from '../../hooks/useTranslation';
import logo from '../../assets/images/logo.jpeg';

export default function ResearchTopics() {
  const { language, t } = useTranslation();
  const isAr = language === 'ar';

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
              <div className="space-y-3 max-w-2xl order-2 md:order-1">
                <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-500/20 px-3.5 py-1 text-xs font-black text-amber-300 backdrop-blur-md shadow-xs">
                  <BookOpen className="size-3.5 text-amber-400" />
                  <span>{isAr ? 'المجالات والمحاور العلمية' : 'Conference Research Tracks'}</span>
                </div>

                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight">
                  {isAr ? (
                    <>
                      <span>المحاور البحثية لـ</span>{' '}
                      <span className="text-amber-400">المؤتمر الطلابي الأول</span>
                    </>
                  ) : (
                    <>
                      <span>Research Tracks for</span>{' '}
                      <span className="text-amber-400">1st Student Research Conf</span>
                    </>
                  )}
                </h1>

                <p className="text-xs sm:text-sm text-amber-100/90 font-medium leading-relaxed">
                  {isAr
                    ? 'استكشف كافة التخصصات والمسارات الأكاديمية المشاركة في المؤتمر وتعرف على التفاصيل البحثية لكل مجال وكيفية التقديم.'
                    : 'Explore all academic tracks, research disciplines, and submission topics for the MNU 1st Student Research Conference.'}
                </p>
              </div>

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
            </div>
          </motion.div>
        </Container>
      </section>

      {/* --- TRACKS & SUB-TOPICS DETAILED CARDS --- */}
      <Container className="mt-8">
        <div className="space-y-10">
          {researchTopicsData.map((track) => {
              const TrackIcon = track.icon;

              return (
                <motion.div
                  key={track.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-xl relative overflow-hidden"
                >
                  {/* Accent Side Line */}
                  <div className="absolute inset-y-0 right-0 rtl:right-0 rtl:left-auto left-auto w-2 bg-gradient-to-b from-brand-700 via-amber-400 to-brand-700" />

                  {/* Track Main Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-6">
                    <div className="flex items-start gap-4">
                      <div className={`grid size-14 shrink-0 place-items-center rounded-2xl ${track.iconBg} shadow-lg`}>
                        <TrackIcon className="size-7 text-white" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className={`inline-block rounded-md px-2.5 py-0.5 text-[10px] font-black border ${track.badgeBg}`}>
                            {isAr ? track.tagAr : track.tagEn}
                          </span>
                        </div>
                        <h2 className="text-xl sm:text-2xl font-black text-brand-950 mt-1">
                          {isAr ? track.titleAr : track.titleEn}
                        </h2>
                        <p className="text-xs text-slate-600 font-medium mt-0.5">
                          {isAr ? track.subtitleAr : track.subtitleEn}
                        </p>
                      </div>
                    </div>

                    {/* Action button to submit under this track */}
                    <Link
                      to="/registration"
                      className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-700 to-brand-600 px-5 text-xs font-black text-white shadow-md shadow-brand-900/15 hover:from-brand-800 hover:to-brand-700 transition-all shrink-0"
                    >
                      <span>{isAr ? 'قدم بحثك في هذا المجال' : 'Submit Research in this Track'}</span>
                      <ArrowRight className="size-3.5 rtl:rotate-180" />
                    </Link>
                  </div>

                  {/* Sub-Topics Cards Grid */}
                  <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                    {track.topics.map((subTopic) => {
                      const SubIcon = subTopic.icon;

                      return (
                        <div
                          key={subTopic.id}
                          className="group rounded-2xl border border-slate-200/80 bg-slate-50/50 p-5 transition-all duration-200 hover:border-brand-600/40 hover:bg-white hover:shadow-md"
                        >
                          <div className="grid size-10 place-items-center rounded-xl bg-white text-brand-700 shadow-sm border border-slate-200/80 mb-3 group-hover:bg-brand-700 group-hover:text-white transition-colors">
                            <SubIcon className="size-5" />
                          </div>

                          <h3 className="text-sm font-black text-brand-950 group-hover:text-brand-700 transition-colors">
                            {isAr ? subTopic.titleAr : subTopic.titleEn}
                          </h3>

                          <p className="text-xs text-slate-600 font-medium leading-relaxed mt-1.5">
                            {isAr ? subTopic.descAr : subTopic.descEn}
                          </p>
                        </div>
                      );
                    })}
                  </div>

                </motion.div>
              );
            })}
        </div>
      </Container>

    </div>
  );
}
