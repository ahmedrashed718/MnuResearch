import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ArrowUpRight } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';
import Button from '../ui/Button';

function SpeakerCard({ speaker, onSelect }) {
  const { language, t } = useTranslation();
  const isAr = language === 'ar';

  const name = (isAr ? speaker.nameAr : speaker.nameEn) || speaker.nameAr || speaker.nameEn || '';
  const title = (isAr ? speaker.titleAr : speaker.titleEn) || speaker.titleAr || speaker.titleEn || '';
  const institution = (isAr ? speaker.institutionAr : speaker.institutionEn) || speaker.institutionAr || speaker.institutionEn || '';
  const topic = (isAr ? speaker.topicAr : speaker.topicEn) || speaker.topicAr || speaker.topicEn || '';
  const badge = (isAr ? speaker.badgeAr : speaker.badgeEn) || speaker.badgeAr || speaker.badgeEn || '';

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      onClick={() => onSelect(speaker)}
      className="group relative flex cursor-pointer flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-5 text-center shadow-xs transition-all duration-300 hover:border-gold-500/50 hover:shadow-xl hover:shadow-brand-950/10"
    >
      {/* Top Metallic Gold Accent Bar */}
      <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-brand-800 via-gold-400 to-emerald-700" />

      <div>
        {/* Large Centered Portrait Photo Avatar */}
        <div className="relative mx-auto mt-1 mb-3.5 size-32 sm:size-36">
          {/* Ambient Glow */}
          <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-brand-700/20 via-gold-500/30 to-emerald-500/20 blur-md transition-all duration-500 group-hover:scale-110" />

          {/* Photo Frame */}
          <div className="relative size-full overflow-hidden rounded-full border-4 border-white shadow-md transition-transform duration-500 group-hover:scale-105">
            <img
              src={speaker.image}
              alt={name}
              className="size-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
          </div>
        </div>

        {/* Badge Pill */}
        {badge && (
          <div className="inline-block rounded-full bg-brand-50/90 px-3 py-0.5 text-[10px] font-bold text-brand-800 border border-brand-200/60 mb-2">
            {badge}
          </div>
        )}

        {/* Doctor Name - High Contrast & Prominent */}
        <h3 className="text-base sm:text-lg font-black text-brand-950 leading-snug transition-colors duration-200 group-hover:text-brand-700">
          {name}
        </h3>

        {/* Academic Title & University */}
        <p className="mt-0.5 text-[11px] font-bold text-brand-700">{title}</p>
        <p className="mt-0.5 text-[11px] font-semibold text-slate-500">{institution}</p>

        {/* Presentation Topic Box */}
        <div className="mt-3 rounded-2xl bg-slate-50/90 p-3 border border-slate-100 transition-colors group-hover:border-brand-900/10 text-start">
          <div className="flex items-center gap-1.5 text-[10px] font-bold text-brand-900 mb-0.5">
            <BookOpen className="size-3 text-gold-600 shrink-0" />
            <span>{t('speakersPage.presentationTopic')}</span>
          </div>
          <p className="text-[11px] text-slate-700 leading-relaxed font-semibold line-clamp-2">
            "{topic}"
          </p>
        </div>
      </div>

      {/* Action Button */}
      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-center">
        <Button
          variant="outline"
          size="sm"
          onClick={(e) => {
            e.stopPropagation();
            onSelect(speaker);
          }}
          className="w-full h-8.5 rounded-xl border-brand-700/20 text-brand-800 hover:bg-brand-700 hover:text-white transition-all duration-200 gap-1.5 text-[11px] font-bold justify-center shadow-2xs"
        >
          <span>{t('speakersPage.viewProfile')}</span>
          <ArrowUpRight className="size-3.5" />
        </Button>
      </div>
    </motion.div>
  );
}

export default SpeakerCard;
