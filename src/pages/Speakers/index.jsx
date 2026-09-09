import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Users } from 'lucide-react';
import Container from '../../components/ui/Container';
import SpeakerCard from '../../components/common/SpeakerCard';
import SpeakerModal from '../../components/common/SpeakerModal';
import { dummySpeakers } from '../../data/speakersData';
import { useTranslation } from '../../hooks/useTranslation';

// Official University Logo
import logo from '../../assets/images/logo.jpeg';

export default function Speakers() {
  const { language, t } = useTranslation();
  const isAr = language === 'ar';
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);

  return (
    <div className="min-h-screen bg-[#f8fbf9] pt-3 sm:pt-6 pb-24 selection:bg-brand-500 selection:text-white">
      
      {/* --- ULTRA-MODERN & CHIC HERO BANNER (OPTIMIZED FOR MOBILE & DESKTOP) --- */}
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
                  <span>{isAr ? 'نخبة العلماء والخبراء' : 'Distinguished Speakers & Experts'}</span>
                </div>

                {/* Main Page Title */}
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight tracking-tight">
                  {isAr ? (
                    <>
                      <span>متحدثو المؤتمر</span>{' '}
                      <span className="relative inline-block text-amber-400">
                        والرموز العلمية
                        <svg className="absolute -bottom-1.5 left-0 h-2.5 w-full text-amber-400" viewBox="0 0 300 12" preserveAspectRatio="none" aria-hidden="true">
                          <path d="M2 9C70 2 206 2 298 8" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                        </svg>
                      </span>
                    </>
                  ) : (
                    <>
                      <span>Conference Speakers</span>{' '}
                      <span className="relative inline-block text-amber-400">
                        & Keynote Pioneers
                        <svg className="absolute -bottom-1.5 left-0 h-2.5 w-full text-amber-400" viewBox="0 0 300 12" preserveAspectRatio="none" aria-hidden="true">
                          <path d="M2 9C70 2 206 2 298 8" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                        </svg>
                      </span>
                    </>
                  )}
                </h1>

                {/* Subtitle */}
                <p className="text-xs sm:text-sm text-amber-100/90 font-semibold leading-relaxed max-w-lg mx-auto md:mx-0">
                  {isAr
                    ? 'استكشف نخبة العلماء والباحثين والخبراء المشاركين في الجلسات العلمية بمؤتمر جامعة المنوفية الأهلية.'
                    : 'Meet the visionary scientists, innovators, and academic leaders sharing their expertise at the MNU Student Research Conference.'}
                </p>

              </div>

            </div>
          </motion.div>
        </Container>
      </section>

      {/* Main Content Area */}
      <Container className="mt-6">
        {/* Unified Speakers Section */}
        <section>
          <div className="flex items-center justify-between gap-4 mb-6 pb-2 border-b border-slate-200/60">
            <h2 className="text-lg sm:text-xl font-black text-brand-950 flex items-center gap-2.5">
              <Users className="size-5 text-amber-600" />
              <span>{isAr ? 'قائمة المتحدثين' : 'Conference Speakers'}</span>
              <span className="rounded-full bg-brand-100 px-3 py-0.5 text-xs font-extrabold text-brand-800">
                {dummySpeakers.length}
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {dummySpeakers.map((speaker) => (
              <SpeakerCard
                key={speaker.id}
                speaker={speaker}
                onSelect={setSelectedSpeaker}
              />
            ))}
          </div>
        </section>
      </Container>

      {/* Speaker Detail Modal */}
      <SpeakerModal
        speaker={selectedSpeaker}
        onClose={() => setSelectedSpeaker(null)}
      />
    </div>
  );
}
