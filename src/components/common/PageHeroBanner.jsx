import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import Container from '../ui/Container';
import { useTranslation } from '../../hooks/useTranslation';

// Official University Logo
import logo from '../../assets/images/logo.jpeg';

function PageHeroBanner({ badge, title, subtitle }) {
  const { language, t } = useTranslation();
  const isAr = language === 'ar';

  return (
    <section className="py-1 sm:py-3">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          style={{ backgroundColor: '#022c20' }}
          className="relative overflow-hidden rounded-3xl border-2 border-amber-500/35 bg-[#022c20] p-5 sm:p-8 md:p-10 text-white shadow-2xl"
        >
          {/* Background Ambient Warm Amber & Emerald Glow Orbs */}
          <div className="absolute -top-20 -right-20 size-60 rounded-full bg-amber-500/25 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 size-60 rounded-full bg-emerald-400/20 blur-3xl pointer-events-none" />

          {/* ARTISTIC DOTTED MATRIX PATTERN OVERLAY */}
          <div
            className="absolute inset-0 opacity-25 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(rgba(245, 158, 11, 0.45) 1.5px, transparent 1.5px)`,
              backgroundSize: '18px 18px',
            }}
          />

          {/* Main Content Layout */}
          <div className="relative z-10 flex flex-col items-center text-center md:flex-row md:items-center md:justify-between md:text-start gap-5 md:gap-8">
            
            {/* Floating University Logo Emblem (Top on Mobile, Side on Desktop) */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="shrink-0 relative order-1 md:order-2"
            >
              <div className="absolute -inset-2 rounded-full bg-amber-400/25 blur-md pointer-events-none" />
              <div className="relative size-20 sm:size-24 md:size-28 shrink-0 overflow-hidden rounded-full border-4 border-amber-400/70 bg-white p-1 shadow-2xl">
                <img
                  src={logo}
                  alt={t('universityName')}
                  className="size-full rounded-full object-cover"
                />
              </div>
            </motion.div>

            {/* Text Content */}
            <div className="space-y-3 max-w-2xl order-2 md:order-1">
              
              {/* Top Gold Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-500/20 px-3.5 py-1 text-xs font-black text-amber-300 shadow-sm backdrop-blur-md">
                <Sparkles className="size-3.5 text-amber-400" />
                <span>{badge || (isAr ? 'جامعة المنوفية الأهلية' : 'Menoufia National University')}</span>
              </div>

              {/* Main Page Title */}
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight tracking-tight">
                <span className="relative inline-block text-amber-400">
                  {title}
                  <svg className="absolute -bottom-1.5 left-0 h-2.5 w-full text-amber-400" viewBox="0 0 300 12" preserveAspectRatio="none" aria-hidden="true">
                    <path d="M2 9C70 2 206 2 298 8" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                </span>
              </h1>

              {/* Subtitle */}
              {subtitle && (
                <p className="text-xs sm:text-sm text-amber-100/90 font-semibold leading-relaxed max-w-lg mx-auto md:mx-0">
                  {subtitle}
                </p>
              )}

            </div>

          </div>
        </motion.div>
      </Container>
    </section>
  );
}

export default PageHeroBanner;
