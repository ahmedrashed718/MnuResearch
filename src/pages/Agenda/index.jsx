import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar,
  Clock,
  Sparkles,
  Users,
  Award,
  FileText,
  Coffee,
  MessageSquare,
  HelpCircle,
  ClipboardCheck,
  UserCheck,
  Layers,
  GraduationCap,
  Timer
} from 'lucide-react';
import Container from '../../components/ui/Container';
import PageHeroBanner from '../../components/common/PageHeroBanner';
import { agendaData } from '../../data/agendaData';
import { useTranslation } from '../../hooks/useTranslation';

// Icon mapping per category
const categoryIcons = {
  research: FileText,
  arbitration: ClipboardCheck,
  registration: UserCheck,
  opening: Sparkles,
  awards: Award,
  speakers: Users,
  competition: HelpCircle,
  break: Coffee,
  discussion: MessageSquare,
  announcement: GraduationCap,
};

// Color theme mapping for category tags & accents
const categoryThemes = {
  research: {
    tag: 'bg-emerald-50 text-emerald-800 border-emerald-200/80',
    node: 'bg-emerald-600 ring-emerald-100',
    iconBg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  },
  arbitration: {
    tag: 'bg-indigo-50 text-indigo-800 border-indigo-200/80',
    node: 'bg-indigo-600 ring-indigo-100',
    iconBg: 'bg-indigo-50 text-indigo-700 border-indigo-200',
  },
  registration: {
    tag: 'bg-blue-50 text-blue-800 border-blue-200/80',
    node: 'bg-blue-600 ring-blue-100',
    iconBg: 'bg-blue-50 text-blue-700 border-blue-200',
  },
  opening: {
    tag: 'bg-amber-50 text-amber-800 border-amber-200/80',
    node: 'bg-amber-500 ring-amber-100',
    iconBg: 'bg-amber-50 text-amber-700 border-amber-200',
  },
  awards: {
    tag: 'bg-gradient-to-r from-amber-50 to-yellow-50 text-amber-900 border-amber-300',
    node: 'bg-amber-500 ring-amber-100',
    iconBg: 'bg-gradient-to-tr from-amber-500 to-yellow-400 text-white shadow-xs',
  },
  speakers: {
    tag: 'bg-amber-500/10 text-amber-900 border-amber-300/80',
    node: 'bg-amber-500 ring-amber-200',
    iconBg: 'bg-gradient-to-tr from-amber-600 to-amber-500 text-white shadow-xs',
  },
  competition: {
    tag: 'bg-purple-50 text-purple-800 border-purple-200/80',
    node: 'bg-purple-600 ring-purple-100',
    iconBg: 'bg-purple-50 text-purple-700 border-purple-200',
  },
  break: {
    tag: 'bg-slate-100 text-slate-700 border-slate-200',
    node: 'bg-slate-400 ring-slate-100',
    iconBg: 'bg-slate-100 text-slate-600 border-slate-200',
  },
  discussion: {
    tag: 'bg-teal-50 text-teal-800 border-teal-200/80',
    node: 'bg-teal-600 ring-teal-100',
    iconBg: 'bg-teal-50 text-teal-700 border-teal-200',
  },
  announcement: {
    tag: 'bg-rose-50 text-rose-800 border-rose-200/80',
    node: 'bg-rose-500 ring-rose-100',
    iconBg: 'bg-rose-50 text-rose-700 border-rose-200',
  },
};

export default function Agenda() {
  const { language } = useTranslation();
  const isAr = language === 'ar';
  const [selectedDayId, setSelectedDayId] = useState('all');

  const filteredDays = selectedDayId === 'all'
    ? agendaData
    : agendaData.filter((d) => d.id === selectedDayId);

  return (
    <div className="min-h-screen bg-[#f8fbf9] pt-3 sm:pt-6 pb-24 selection:bg-brand-500 selection:text-white">
      {/* Hero Banner */}
      <PageHeroBanner
        badge={isAr ? 'البرنامج الزمني المعتمد' : 'Official Conference Schedule'}
        title={isAr ? 'أجندة المؤتمر البحثي الأول' : '1st Research Conference Agenda'}
        subtitle={
          isAr
            ? 'الجدول الزمني المعتمد لكافة الجلسات العلمية والفعاليات على مدار يومي المؤتمر'
            : 'Official chronological program for all scientific sessions and keynote events across conference days.'
        }
      />

      <Container className="mt-6 sm:mt-12 max-w-4xl px-3 sm:px-6">
        {/* --- STICKY MOBILE-OPTIMIZED DAY SWITCHER TABS --- */}
        <div className="sticky top-16 sm:top-20 z-20 w-full max-w-xl mx-auto mb-6 sm:mb-12">
          <div className="grid grid-cols-3 gap-1 sm:gap-2 p-1.5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-md shadow-slate-200/60">
            {/* All Days Tab */}
            <button
              type="button"
              onClick={() => setSelectedDayId('all')}
              className={`relative flex items-center justify-center gap-1.5 py-2 sm:py-3 px-2 sm:px-4 rounded-xl text-xs sm:text-sm font-black transition-all duration-200 cursor-pointer ${
                selectedDayId === 'all'
                  ? 'bg-[#022c20] text-white shadow-sm border border-amber-500/30'
                  : 'text-slate-600 hover:text-brand-950 hover:bg-slate-50'
              }`}
            >
              <Layers className={`size-3.5 sm:size-4 shrink-0 ${selectedDayId === 'all' ? 'text-amber-400' : 'text-slate-400'}`} />
              <span className="hidden sm:inline">{isAr ? 'كافة الفعاليات (يومي 3 و4)' : 'Full Schedule'}</span>
              <span className="inline sm:hidden">{isAr ? 'الكل' : 'All'}</span>
            </button>

            {/* Day 1 Tab */}
            <button
              type="button"
              onClick={() => setSelectedDayId('day-1')}
              className={`relative flex items-center justify-center gap-1.5 py-2 sm:py-3 px-2 sm:px-4 rounded-xl text-xs sm:text-sm font-black transition-all duration-200 cursor-pointer ${
                selectedDayId === 'day-1'
                  ? 'bg-[#022c20] text-white shadow-sm border border-amber-500/30'
                  : 'text-slate-600 hover:text-brand-950 hover:bg-slate-50'
              }`}
            >
              <Calendar className={`size-3.5 sm:size-4 shrink-0 ${selectedDayId === 'day-1' ? 'text-amber-400' : 'text-slate-400'}`} />
              <span className="hidden sm:inline">{isAr ? 'السبت 3 أكتوبر' : 'Saturday 3 Oct'}</span>
              <span className="inline sm:hidden">{isAr ? 'السبت 3' : 'Sat 3'}</span>
            </button>

            {/* Day 2 Tab */}
            <button
              type="button"
              onClick={() => setSelectedDayId('day-2')}
              className={`relative flex items-center justify-center gap-1.5 py-2 sm:py-3 px-2 sm:px-4 rounded-xl text-xs sm:text-sm font-black transition-all duration-200 cursor-pointer ${
                selectedDayId === 'day-2'
                  ? 'bg-[#022c20] text-white shadow-sm border border-amber-500/30'
                  : 'text-slate-600 hover:text-brand-950 hover:bg-slate-50'
              }`}
            >
              <Calendar className={`size-3.5 sm:size-4 shrink-0 ${selectedDayId === 'day-2' ? 'text-amber-400' : 'text-slate-400'}`} />
              <span className="hidden sm:inline">{isAr ? 'الأحد 4 أكتوبر' : 'Sunday 4 Oct'}</span>
              <span className="inline sm:hidden">{isAr ? 'الأحد 4' : 'Sun 4'}</span>
            </button>
          </div>
        </div>

        {/* --- DAYS SECTIONS --- */}
        <div className="space-y-10 sm:space-y-14">
          {filteredDays.map((day) => (
            <motion.div
              key={day.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="space-y-4 sm:space-y-6"
            >
              {/* Day Header Showcase Banner */}
              <div
                style={{ backgroundColor: '#022c20' }}
                className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-amber-500/35 bg-[#022c20] p-4 sm:p-7 text-white shadow-lg"
              >
                {/* Ambient glow decoration */}
                <div className="absolute -top-12 -right-12 size-36 sm:size-48 rounded-full bg-amber-500/20 blur-2xl pointer-events-none" />
                <div className="absolute -bottom-12 -left-12 size-36 sm:size-48 rounded-full bg-emerald-400/15 blur-2xl pointer-events-none" />

                <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-5">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="flex size-11 sm:size-14 shrink-0 flex-col items-center justify-center rounded-xl sm:rounded-2xl border-2 border-amber-400/50 bg-gradient-to-b from-amber-400/20 to-amber-600/30 font-black text-amber-300 shadow-sm">
                      <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-amber-200">
                        {isAr ? 'اليوم' : 'Day'}
                      </span>
                      <span className="text-base sm:text-xl leading-none font-black text-white">
                        0{day.dayNumber}
                      </span>
                    </div>

                    <div>
                      <div className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-bold text-amber-400 mb-0.5">
                        <Sparkles className="size-3 sm:size-3.5 text-amber-400" />
                        <span>{isAr ? `فعاليات اليوم رقم ${day.dayNumber}` : `Day ${day.dayNumber} Schedule`}</span>
                      </div>
                      <h2 className="text-base sm:text-2xl font-black text-white tracking-tight">
                        {isAr ? day.dateAr : day.dateEn}
                      </h2>
                    </div>
                  </div>

                  {/* Summary Pills */}
                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2.5 pt-1.5 sm:pt-0 border-t sm:border-t-0 border-white/10 text-[11px] sm:text-xs">
                    <div className="inline-flex items-center gap-1.5 rounded-lg sm:rounded-xl bg-white/10 px-2.5 sm:px-3.5 py-1 sm:py-1.5 font-bold text-amber-300 border border-white/10">
                      <Clock className="size-3 sm:size-3.5 text-amber-400" />
                      <span>{isAr ? `البدء: ${day.startTimeAr}` : `Start: ${day.startTimeEn}`}</span>
                    </div>

                    <div className="inline-flex items-center gap-1.5 rounded-lg sm:rounded-xl bg-white/10 px-2.5 sm:px-3.5 py-1 sm:py-1.5 font-bold text-white border border-white/10">
                      <Timer className="size-3 sm:size-3.5 text-emerald-400" />
                      <span>{isAr ? day.totalDurationAr : day.totalDurationEn}</span>
                    </div>

                    <div className="inline-flex items-center gap-1 rounded-lg sm:rounded-xl bg-amber-400/20 px-2 sm:px-3 py-1 sm:py-1.5 font-black text-amber-200 border border-amber-400/30">
                      <span>{isAr ? day.sessionsCountAr : day.sessionsCountEn}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* --- TIME SCHEDULE CARDS (WITH INTEGRATED MOBILE STEM) --- */}
              <div className="relative pl-3 sm:pl-6 rtl:pl-0 rtl:pr-3 rtl:sm:pr-6 border-l-2 rtl:border-l-0 rtl:border-r-2 border-brand-900/15 space-y-3 sm:space-y-4 my-2">
                {day.items.map((item, idx) => {
                  const Icon = categoryIcons[item.category] || Clock;
                  const isSpeakers = item.category === 'speakers';
                  const isAwards = item.category === 'awards';
                  const isBreak = item.category === 'break';
                  const theme = categoryThemes[item.category] || {
                    tag: 'bg-slate-100 text-slate-800 border-slate-200',
                    node: 'bg-slate-400 ring-slate-100',
                    iconBg: 'bg-brand-50 text-brand-900 border-brand-200',
                  };

                  return (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.25, delay: idx * 0.03 }}
                      className="relative group"
                    >
                      {/* Timeline Node Dot */}
                      <div className={`absolute -left-[19px] sm:-left-[31px] rtl:left-auto rtl:-right-[19px] rtl:sm:-right-[31px] top-4 sm:top-5 size-3 sm:size-4 rounded-full border-2 sm:border-3 border-white ring-4 transition-transform duration-200 group-hover:scale-125 ${theme.node}`} />

                      {/* Card Chassis */}
                      <div className={`overflow-hidden rounded-2xl sm:rounded-3xl border transition-all duration-300 shadow-2xs hover:shadow-lg ${
                        isSpeakers
                          ? 'border-amber-400/80 bg-gradient-to-br from-amber-50/60 via-white to-amber-50/30'
                          : isAwards
                          ? 'border-yellow-300 bg-gradient-to-r from-amber-50/40 to-white'
                          : isBreak
                          ? 'border-slate-200 bg-slate-50/60'
                          : 'border-slate-200 bg-white hover:border-brand-400/60'
                      }`}>
                        {/* Top Gradient Line */}
                        <div className={`h-1 w-full ${
                          isSpeakers
                            ? 'bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600'
                            : isAwards
                            ? 'bg-gradient-to-r from-amber-400 to-yellow-500'
                            : 'bg-gradient-to-r from-brand-800 to-emerald-600'
                        }`} />

                        <div className="p-3.5 sm:p-5">
                          {/* Top Row on Mobile: Category & Time Badges */}
                          <div className="flex items-center justify-between gap-2 mb-2">
                            <span className={`inline-flex items-center px-2 sm:px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-black border ${theme.tag}`}>
                              {isAr ? item.categoryLabelAr : item.categoryLabelEn}
                            </span>

                            {/* Time & Duration Compact Pill */}
                            <div className="flex items-center gap-1.5 shrink-0">
                              <span className="inline-flex items-center gap-1 px-2 sm:px-2.5 py-0.5 rounded-lg bg-slate-100 text-slate-800 text-[11px] sm:text-xs font-bold border border-slate-200/70">
                                <Clock className="size-3 text-brand-700" />
                                <span dir="ltr">{isAr ? item.timeAr : item.timeEn}</span>
                              </span>

                              <span className="inline-flex items-center px-2 py-0.5 rounded-lg bg-amber-500 text-white text-[10px] sm:text-[11px] font-black">
                                {isAr ? item.durationAr : item.durationEn}
                              </span>
                            </div>
                          </div>

                          {/* Title & Icon Row */}
                          <div className="flex items-center gap-2.5 sm:gap-3.5 mt-1">
                            <div className={`grid size-9 sm:size-11 shrink-0 place-items-center rounded-xl sm:rounded-2xl ${theme.iconBg}`}>
                              <Icon className="size-4 sm:size-5" />
                            </div>

                            <h3 className="text-sm sm:text-lg font-black text-brand-950 leading-snug">
                              {isAr ? item.titleAr : item.titleEn}
                            </h3>
                          </div>

                          {/* --- SPECIAL SPEAKERS LIST --- */}
                          {isSpeakers && item.speakersList && (
                            <div className="mt-3.5 pt-3 border-t border-amber-200/70">
                              <div className="flex items-center justify-between mb-2">
                                <span className="text-[11px] sm:text-xs font-black text-amber-950 uppercase tracking-wider flex items-center gap-1.5">
                                  <Users className="size-3.5 text-amber-700" />
                                  <span>{isAr ? 'المتحدثون المشاركون:' : 'Featured Speakers:'}</span>
                                </span>
                                <span className="rounded-full bg-amber-500/20 px-2 py-0.5 text-[10px] sm:text-[11px] font-extrabold text-amber-900 border border-amber-400/30">
                                  {item.speakersList.length} {isAr ? 'متحدثين' : 'Speakers'}
                                </span>
                              </div>

                              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                                {item.speakersList.map((speaker, sIdx) => (
                                  <div
                                    key={sIdx}
                                    className="flex items-center gap-2.5 p-2 sm:p-2.5 rounded-xl sm:rounded-2xl bg-white border border-amber-200/90 shadow-2xs"
                                  >
                                    {/* Avatar */}
                                    <div className="relative size-8 sm:size-10 shrink-0 overflow-hidden rounded-full border-2 border-amber-400/70 shadow-2xs bg-brand-900 flex items-center justify-center text-white">
                                      {speaker.avatar ? (
                                        <img
                                          src={speaker.avatar}
                                          alt={speaker.nameAr}
                                          className="size-full object-cover"
                                          loading="lazy"
                                        />
                                      ) : (
                                        <span className="text-[10px] sm:text-xs font-black text-amber-300">
                                          د.ي
                                        </span>
                                      )}
                                    </div>

                                    <div className="min-w-0 flex-1">
                                      <h4 className="text-xs sm:text-sm font-black text-brand-950 truncate">
                                        {isAr ? speaker.nameAr : speaker.nameEn}
                                      </h4>
                                      <p className="text-[10px] sm:text-[11px] font-bold text-amber-700 truncate">
                                        {isAr ? 'متحدث رئيسي' : 'Keynote Speaker'}
                                      </p>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  );
}
