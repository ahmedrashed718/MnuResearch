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
  ArrowRight,
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

// Color theme mapping for category tags
const categoryThemes = {
  research: 'bg-emerald-50 text-emerald-800 border-emerald-200/80',
  arbitration: 'bg-indigo-50 text-indigo-800 border-indigo-200/80',
  registration: 'bg-blue-50 text-blue-800 border-blue-200/80',
  opening: 'bg-amber-50 text-amber-800 border-amber-200/80',
  awards: 'bg-gradient-to-r from-amber-50 to-yellow-50 text-amber-900 border-amber-300',
  speakers: 'bg-amber-500/10 text-amber-900 border-amber-300/80',
  competition: 'bg-purple-50 text-purple-800 border-purple-200/80',
  break: 'bg-slate-100 text-slate-700 border-slate-200',
  discussion: 'bg-teal-50 text-teal-800 border-teal-200/80',
  announcement: 'bg-rose-50 text-rose-800 border-rose-200/80',
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

      <Container className="mt-8 sm:mt-12 max-w-4xl">
        {/* --- LUXURIOUS SEGMENTED DAY SWITCHER (WIDE & UNWRAPPED) --- */}
        <div className="w-full max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 p-2 rounded-3xl bg-white border border-slate-200/90 shadow-lg shadow-slate-200/50">
            {/* All Days Tab */}
            <button
              type="button"
              onClick={() => setSelectedDayId('all')}
              className={`relative flex items-center justify-center gap-2 px-4 py-3 sm:py-3.5 rounded-2xl text-xs sm:text-sm font-black whitespace-nowrap transition-all duration-300 ${
                selectedDayId === 'all'
                  ? 'bg-[#022c20] text-white shadow-md shadow-brand-950/25 border border-amber-500/30'
                  : 'text-slate-600 hover:text-brand-950 hover:bg-slate-50'
              }`}
            >
              <Layers className={`size-4 ${selectedDayId === 'all' ? 'text-amber-400' : 'text-slate-400'}`} />
              <span>{isAr ? 'كافة الفعاليات (يومي 3 و4)' : 'Full Schedule'}</span>
            </button>

            {/* Day 1 Tab */}
            <button
              type="button"
              onClick={() => setSelectedDayId('day-1')}
              className={`relative flex items-center justify-center gap-2 px-4 py-3 sm:py-3.5 rounded-2xl text-xs sm:text-sm font-black whitespace-nowrap transition-all duration-300 ${
                selectedDayId === 'day-1'
                  ? 'bg-[#022c20] text-white shadow-md shadow-brand-950/25 border border-amber-500/30'
                  : 'text-slate-600 hover:text-brand-950 hover:bg-slate-50'
              }`}
            >
              <Calendar className={`size-4 ${selectedDayId === 'day-1' ? 'text-amber-400' : 'text-slate-400'}`} />
              <span>{isAr ? 'السبت 3 أكتوبر' : 'Saturday 3 Oct'}</span>
            </button>

            {/* Day 2 Tab */}
            <button
              type="button"
              onClick={() => setSelectedDayId('day-2')}
              className={`relative flex items-center justify-center gap-2 px-4 py-3 sm:py-3.5 rounded-2xl text-xs sm:text-sm font-black whitespace-nowrap transition-all duration-300 ${
                selectedDayId === 'day-2'
                  ? 'bg-[#022c20] text-white shadow-md shadow-brand-950/25 border border-amber-500/30'
                  : 'text-slate-600 hover:text-brand-950 hover:bg-slate-50'
              }`}
            >
              <Calendar className={`size-4 ${selectedDayId === 'day-2' ? 'text-amber-400' : 'text-slate-400'}`} />
              <span>{isAr ? 'الأحد 4 أكتوبر' : 'Sunday 4 Oct'}</span>
            </button>
          </div>
        </div>

        {/* --- DAYS SECTIONS --- */}
        <div className="space-y-14">
          {filteredDays.map((day) => (
            <motion.div
              key={day.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              {/* Day Header Showcase Banner */}
              <div
                style={{ backgroundColor: '#022c20' }}
                className="relative overflow-hidden rounded-3xl border-2 border-amber-500/35 bg-[#022c20] p-6 sm:p-7 text-white shadow-xl"
              >
                {/* Ambient glow decoration */}
                <div className="absolute -top-16 -right-16 size-48 rounded-full bg-amber-500/20 blur-2xl pointer-events-none" />
                <div className="absolute -bottom-16 -left-16 size-48 rounded-full bg-emerald-400/15 blur-2xl pointer-events-none" />

                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-5">
                  <div className="flex items-center gap-4">
                    <div className="flex size-14 shrink-0 flex-col items-center justify-center rounded-2xl border-2 border-amber-400/50 bg-gradient-to-b from-amber-400/20 to-amber-600/30 font-black text-amber-300 shadow-md">
                      <span className="text-[10px] uppercase tracking-wider text-amber-200">
                        {isAr ? 'اليوم' : 'Day'}
                      </span>
                      <span className="text-xl leading-none font-black text-white">
                        0{day.dayNumber}
                      </span>
                    </div>

                    <div>
                      <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 mb-1">
                        <Sparkles className="size-3.5 text-amber-400" />
                        <span>{isAr ? `فعاليات اليوم رقم ${day.dayNumber}` : `Day ${day.dayNumber} Program`}</span>
                      </div>
                      <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                        {isAr ? day.dateAr : day.dateEn}
                      </h2>
                    </div>
                  </div>

                  {/* Summary Pills */}
                  <div className="flex flex-wrap items-center gap-2.5 pt-2 md:pt-0 border-t md:border-t-0 border-white/10">
                    <div className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-3.5 py-2 text-xs font-bold text-amber-300 border border-white/10 backdrop-blur-xs">
                      <Clock className="size-3.5 text-amber-400" />
                      <span>{isAr ? `البدء: ${day.startTimeAr}` : `Start: ${day.startTimeEn}`}</span>
                    </div>

                    <div className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-3.5 py-2 text-xs font-bold text-white border border-white/10 backdrop-blur-xs">
                      <Timer className="size-3.5 text-emerald-400" />
                      <span>{isAr ? day.totalDurationAr : day.totalDurationEn}</span>
                    </div>

                    <div className="inline-flex items-center gap-2 rounded-xl bg-amber-400/20 px-3.5 py-2 text-xs font-black text-amber-200 border border-amber-400/30">
                      <span>{isAr ? day.sessionsCountAr : day.sessionsCountEn}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* --- TIME SCHEDULE CARDS --- */}
              <div className="space-y-4 pt-1">
                {day.items.map((item, idx) => {
                  const Icon = categoryIcons[item.category] || Clock;
                  const isSpeakers = item.category === 'speakers';
                  const isAwards = item.category === 'awards';
                  const isBreak = item.category === 'break';
                  const tagClass = categoryThemes[item.category] || 'bg-slate-100 text-slate-800 border-slate-200';

                  return (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: idx * 0.04 }}
                      className={`group relative overflow-hidden rounded-2xl sm:rounded-3xl border transition-all duration-300 shadow-xs hover:shadow-xl ${
                        isSpeakers
                          ? 'border-amber-400/70 bg-gradient-to-br from-amber-50/70 via-white to-amber-50/30 hover:border-amber-500'
                          : isAwards
                          ? 'border-yellow-300/80 bg-gradient-to-r from-amber-50/50 to-white hover:border-amber-400'
                          : isBreak
                          ? 'border-slate-200/90 bg-slate-50/70 hover:border-slate-300'
                          : 'border-slate-200/90 bg-white hover:border-brand-400/50'
                      }`}
                    >
                      {/* Top Accent Strip */}
                      <div className={`h-1.5 w-full ${
                        isSpeakers
                          ? 'bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600'
                          : isAwards
                          ? 'bg-gradient-to-r from-amber-400 to-yellow-500'
                          : 'bg-gradient-to-r from-brand-800 to-emerald-600'
                      }`} />

                      <div className="p-5 sm:p-6">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                          
                          {/* Main Title & Category Badge */}
                          <div className="flex items-start sm:items-center gap-3.5">
                            {/* Icon Box */}
                            <div className={`grid size-11 sm:size-12 shrink-0 place-items-center rounded-2xl shadow-xs transition-transform duration-300 group-hover:scale-105 ${
                              isSpeakers
                                ? 'bg-gradient-to-tr from-amber-600 to-amber-500 text-white shadow-amber-500/20'
                                : isAwards
                                ? 'bg-gradient-to-tr from-yellow-500 to-amber-600 text-white shadow-amber-500/20'
                                : 'bg-brand-50 text-brand-900 border border-brand-200/70'
                            }`}>
                              <Icon className="size-5 sm:size-6" />
                            </div>

                            <div className="space-y-1">
                              <div className="flex flex-wrap items-center gap-2">
                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-black border ${tagClass}`}>
                                  {isAr ? item.categoryLabelAr : item.categoryLabelEn}
                                </span>
                              </div>

                              <h3 className="text-base sm:text-lg lg:text-xl font-black text-brand-950 leading-snug">
                                {isAr ? item.titleAr : item.titleEn}
                              </h3>
                            </div>
                          </div>

                          {/* Time & Duration Badge Block */}
                          <div className="flex items-center gap-2.5 self-start sm:self-auto shrink-0 bg-slate-50 sm:bg-transparent p-2 sm:p-0 rounded-xl sm:rounded-none w-full sm:w-auto justify-between sm:justify-start border sm:border-0 border-slate-200/60">
                            {/* Time Clock */}
                            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white sm:bg-slate-100 text-slate-800 text-xs sm:text-sm font-extrabold border border-slate-200 shadow-2xs">
                              <Clock className="size-3.5 text-brand-700" />
                              <span dir="ltr">{isAr ? item.timeAr : item.timeEn}</span>
                            </div>

                            {/* Duration Badge */}
                            <div className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-amber-500 text-white text-xs font-black shadow-xs shadow-amber-500/20">
                              <span>{isAr ? item.durationAr : item.durationEn}</span>
                            </div>
                          </div>

                        </div>

                        {/* --- SPECIAL SPEAKERS GRID DISPLAY --- */}
                        {isSpeakers && item.speakersList && (
                          <div className="mt-5 pt-4 border-t border-amber-200/70">
                            <div className="flex items-center justify-between mb-3.5">
                              <span className="text-xs font-black text-amber-950 uppercase tracking-wider flex items-center gap-2">
                                <Users className="size-4 text-amber-700" />
                                <span>{isAr ? 'المتحدثون المشاركون في الجلسة:' : 'Featured Speakers:'}</span>
                              </span>
                              <span className="rounded-full bg-amber-500/20 px-2.5 py-0.5 text-[11px] font-extrabold text-amber-900 border border-amber-400/30">
                                {item.speakersList.length} {isAr ? 'متحدثين' : 'Speakers'}
                              </span>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                              {item.speakersList.map((speaker, sIdx) => (
                                <div
                                  key={sIdx}
                                  className="group/speaker flex items-center gap-3 p-3 rounded-2xl bg-white border border-amber-200/90 shadow-2xs transition-all duration-200 hover:border-amber-400 hover:shadow-md"
                                >
                                  {/* Speaker Photo / Icon */}
                                  <div className="relative size-11 shrink-0 overflow-hidden rounded-full border-2 border-amber-400/70 shadow-2xs bg-brand-900 flex items-center justify-center text-white">
                                    {speaker.avatar ? (
                                      <img
                                        src={speaker.avatar}
                                        alt={speaker.nameAr}
                                        className="size-full object-cover"
                                        loading="lazy"
                                      />
                                    ) : (
                                      <span className="text-xs font-black text-amber-300">
                                        د.ي
                                      </span>
                                    )}
                                  </div>

                                  <div className="min-w-0 flex-1">
                                    <h4 className="text-xs sm:text-sm font-black text-brand-950 truncate transition-colors group-hover/speaker:text-amber-800">
                                      {isAr ? speaker.nameAr : speaker.nameEn}
                                    </h4>
                                    <p className="text-[11px] font-bold text-amber-700 truncate">
                                      {isAr ? 'متحدث رئيسي' : 'Keynote Speaker'}
                                    </p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
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
