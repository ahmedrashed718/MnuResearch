import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '../../hooks/useTranslation';

function SpeakerCard({ speaker, onSelect }) {
  const { language } = useTranslation();
  const isAr = language === 'ar';

  const name = (isAr ? speaker.nameAr : speaker.nameEn) || speaker.nameAr || speaker.nameEn || '';
  const title = (isAr ? speaker.titleAr : speaker.titleEn) || speaker.titleAr || speaker.titleEn || '';

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.25 }}
      onClick={() => onSelect && onSelect(speaker)}
      className="group relative flex cursor-pointer flex-col items-center justify-center overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-6 text-center shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-gold-500/50 hover:shadow-xl hover:shadow-brand-950/10"
    >
      {/* Top Accent Line */}
      <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-brand-800 via-gold-400 to-emerald-700" />

      {/* Large Centered Portrait Photo Avatar */}
      <div className="relative mx-auto mb-4 size-32 sm:size-36">
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

      {/* Doctor Name - High Contrast & Prominent */}
      <h3 className="text-base sm:text-lg font-black text-brand-950 leading-snug transition-colors duration-200 group-hover:text-brand-700 line-clamp-1">
        {name}
      </h3>

      {/* Simple Academic Title */}
      <p className="mt-1 text-xs font-bold text-gold-700 line-clamp-1">
        {title}
      </p>
    </motion.div>
  );
}

export default SpeakerCard;
