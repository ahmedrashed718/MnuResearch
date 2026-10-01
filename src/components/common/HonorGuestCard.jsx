import React from 'react';
import { motion } from 'framer-motion';
import { Award, Sparkles } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';

export default function HonorGuestCard({ guest }) {
  const { language } = useTranslation();
  const isAr = language === 'ar';

  const name = (isAr ? guest.nameAr : guest.nameEn) || guest.nameAr || guest.nameEn || '';
  const title = (isAr ? guest.titleAr : guest.titleEn) || guest.titleAr || guest.titleEn || '';
  const institution = (isAr ? guest.institutionAr : guest.institutionEn) || guest.institutionAr || guest.institutionEn || '';
  const badge = (isAr ? guest.badgeAr : guest.badgeEn) || (isAr ? 'ضيف شرف المؤتمر' : 'Guest of Honor');

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.28 }}
      className="group relative flex flex-col items-center justify-between overflow-hidden rounded-3xl border-2 border-amber-400/40 bg-white p-6 sm:p-8 text-center shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:border-amber-500 hover:shadow-2xl hover:shadow-amber-950/15"
    >
      {/* Top Gold Gradient Bar */}
      <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-amber-600 via-amber-400 to-emerald-700" />

      {/* Decorative Subtle Corner Glow */}
      <div className="absolute -top-12 -right-12 size-32 rounded-full bg-amber-400/10 blur-2xl pointer-events-none group-hover:bg-amber-400/20 transition-all duration-500" />
      <div className="absolute -bottom-12 -left-12 size-32 rounded-full bg-emerald-500/10 blur-2xl pointer-events-none group-hover:bg-emerald-500/20 transition-all duration-500" />

      {/* Top VIP Badge */}
      <div className="mb-5 inline-flex items-center gap-1.5 rounded-full border border-amber-400/60 bg-gradient-to-r from-amber-500/15 via-amber-400/25 to-amber-500/15 px-3.5 py-1 text-xs font-black text-amber-900 shadow-2xs backdrop-blur-xs">
        <Award className="size-3.5 text-amber-600 fill-amber-500/20" />
        <span>{badge}</span>
      </div>

      {/* Prominent VIP Portrait Photo */}
      <div className="relative mx-auto mb-5 size-36 sm:size-40">
        {/* Ambient Halo Glow */}
        <div className="absolute -inset-2.5 rounded-full bg-gradient-to-tr from-brand-700/25 via-amber-400/40 to-emerald-500/25 blur-md transition-all duration-500 group-hover:scale-110" />

        {/* Double-Ringed Gold Frame */}
        <div className="relative size-full overflow-hidden rounded-full ring-4 ring-amber-400/50 border-4 border-white shadow-lg transition-transform duration-500 group-hover:scale-105">
          <img
            src={guest.image}
            alt={name}
            className="size-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
        </div>

        {/* Small Sparkle Badge at bottom of avatar */}
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 rounded-full bg-amber-500 text-white p-1 shadow-md border-2 border-white">
          <Sparkles className="size-3.5 fill-current" />
        </div>
      </div>

      {/* Guest Name & Title */}
      <div className="space-y-1.5 w-full">
        <h3 className="text-lg sm:text-xl font-black text-brand-950 leading-snug transition-colors duration-200 group-hover:text-brand-700">
          {name}
        </h3>

        <p className="text-xs sm:text-sm font-extrabold text-amber-600 leading-snug">
          {title}
        </p>

        {institution && (
          <p className="text-[11px] font-semibold text-slate-500">
            {institution}
          </p>
        )}
      </div>
    </motion.div>
  );
}
