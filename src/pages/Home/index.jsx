import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Lightbulb, MapPin, Microscope, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.jpeg';
import mnuCutoutVector from 'C:/Users/Admin/.gemini/antigravity-ide/brain/063f25c3-7a53-47d6-ac35-9380c4ca420c/mnu_cutout_vector_lineart_1788944273620.png';
import SpeakersMarquee from '../../components/common/SpeakersMarquee';
import PartnersMarquee from '../../components/common/PartnersMarquee';
import Container from '../../components/ui/Container';
import { useTranslation } from '../../hooks/useTranslation';

const principles = [
  {
    labelKey: 'home.inspire',
    icon: Sparkles,
    badgeBg: 'bg-amber-100/90 text-amber-700 border border-amber-300/50',
    hoverClass: 'hover:border-amber-400/60 hover:bg-amber-50/50',
  },
  {
    labelKey: 'home.innovate',
    icon: Lightbulb,
    badgeBg: 'bg-emerald-100/90 text-emerald-700 border border-emerald-300/50',
    hoverClass: 'hover:border-emerald-400/60 hover:bg-emerald-50/50',
  },
  {
    labelKey: 'home.impact',
    icon: Microscope,
    badgeBg: 'bg-brand-100/90 text-brand-800 border border-brand-300/50',
    hoverClass: 'hover:border-brand-600/60 hover:bg-brand-50/50',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function Home() {
  const { language, t } = useTranslation();

  return (
    <>
      <section className="relative isolate min-h-[calc(100vh-80px)] overflow-hidden bg-[#f8fbf9]">
        {/* Background Canvas */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <img
            src={mnuCutoutVector}
            alt=""
            className="absolute inset-0 size-full object-contain object-center opacity-30 mix-blend-multiply filter contrast-125 brightness-105"
          />
          <div className="absolute -left-32 top-10 size-[420px] rounded-full bg-brand-100/60 blur-3xl" />
          <div className="absolute -right-32 bottom-0 size-[480px] rounded-full bg-gold-100/70 blur-3xl" />
          <div className="hero-grid absolute inset-0 opacity-40" />
        </div>

        {/* --- ULTRA-CLEAN MODERN MOBILE HERO (No heavy boxes/borders) --- */}
        <Container className="block py-8 text-center lg:hidden">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            {/* Top Centered Floating University Logo */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative mb-5 size-28 overflow-hidden rounded-full border-4 border-gold-500/30 bg-white p-1.5 shadow-xl shadow-gold-500/10"
            >
              <img
                src={logo}
                alt={t('universityName')}
                className="size-full rounded-full object-cover"
              />
            </motion.div>

            {/* University Tag Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-700/15 bg-white/90 px-4 py-1.5 text-xs font-bold text-brand-700 shadow-sm backdrop-blur">
              <span className="size-2 rounded-full bg-gold-500 shadow-[0_0_0_4px_rgba(201,151,36,0.15)]" />
              {t('universityName')}
            </div>

            {/* Main Mobile Headline */}
            <h1 className="mt-5 max-w-sm text-3xl font-extrabold leading-snug tracking-tight text-brand-950">
              {t('home.titlePrefix')}{' '}
              <span className="relative inline-block text-brand-700">
                {t('home.titleHighlight')}
                <svg className="absolute -bottom-1.5 left-0 h-2.5 w-full text-gold-400" viewBox="0 0 300 12" preserveAspectRatio="none" aria-hidden="true">
                  <path d="M2 9C70 2 206 2 298 8" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>{' '}
              {t('home.titleSuffix')}
            </h1>

            {/* Subtitle */}
            <p className="mt-4 max-w-xs text-sm leading-7 text-slate-600 font-medium">
              {t('home.introduction')}
            </p>

            {/* Date & Venue Chips */}
            <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-xs font-bold text-brand-900">
              <div className="flex items-center gap-1.5 rounded-full border border-gold-500/20 bg-white/90 px-4 py-2 shadow-sm backdrop-blur">
                <Calendar className="size-3.5 text-gold-600" />
                <span>{language === 'ar' ? '15 - 16 مايو 2026' : 'May 15 - 16, 2026'}</span>
              </div>
              <div className="flex items-center gap-1.5 rounded-full border border-gold-500/20 bg-white/90 px-4 py-2 shadow-sm backdrop-blur">
                <MapPin className="size-3.5 text-gold-600" />
                <span>{language === 'ar' ? 'جامعة المنوفية الأهلية' : 'MNU Campus'}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-7 flex w-full max-w-xs flex-col gap-3">
              <Link
                to="/registration"
                className="group flex h-[52px] w-full items-center justify-center gap-2.5 rounded-full bg-brand-700 text-sm font-extrabold text-white shadow-xl shadow-brand-900/20 transition-all hover:bg-brand-800"
              >
                {t('actions.registerNow')}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
              </Link>
              <Link
                to="/research-topics"
                className="flex h-[52px] w-full items-center justify-center rounded-full border border-brand-900/15 bg-white/90 text-sm font-bold text-brand-800 shadow-sm backdrop-blur transition-all hover:bg-white"
              >
                {t('actions.exploreTopics')}
              </Link>
            </div>

            {/* Core Principles (Mobile Subtle Compact Floating Pills) */}
            <div className="mt-7 flex flex-wrap items-center justify-center gap-2.5 border-t border-brand-900/10 pt-5">
              {principles.map(({ labelKey, icon: Icon, badgeBg, hoverClass }) => (
                <div
                  key={labelKey}
                  className={`inline-flex items-center gap-2 rounded-full border border-slate-200/90 bg-white/90 px-3.5 py-1.5 text-xs font-black text-brand-950 shadow-xs backdrop-blur-md transition-all duration-300 ${hoverClass}`}
                >
                  <span className={`grid size-6.5 place-items-center rounded-full ${badgeBg} shadow-2xs`}>
                    <Icon className="size-3 shrink-0" aria-hidden="true" />
                  </span>
                  <span>{t(labelKey)}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </Container>

        {/* --- DESKTOP HERO DESIGN (Visible on Large Screens >= lg) --- */}
        <Container className="hidden min-h-[calc(100vh-80px)] items-center gap-14 py-20 lg:grid lg:grid-cols-[1.08fr_0.92fr]">
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.12 }}
            className="relative z-10"
          >
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.55 }}
              className="inline-flex items-center gap-2 rounded-full border border-brand-700/10 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-brand-700 shadow-sm backdrop-blur rtl:tracking-normal"
            >
              <span className="size-2 rounded-full bg-gold-500 shadow-[0_0_0_5px_rgba(201,151,36,0.12)]" />
              {t('universityName')}
            </motion.div>

            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="mt-7 max-w-3xl text-6xl font-extrabold leading-[1.12] tracking-[-0.035em] text-brand-950 rtl:tracking-normal lg:text-7xl"
            >
              {t('home.titlePrefix')}{' '}
              <span className="relative inline-block text-brand-700">
                {t('home.titleHighlight')}
                <svg className="absolute -bottom-2 left-0 h-3 w-full text-gold-400" viewBox="0 0 300 12" preserveAspectRatio="none" aria-hidden="true">
                  <path d="M2 9C70 2 206 2 298 8" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>{' '}
              {t('home.titleSuffix')}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="mt-8 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl"
            >
              {t('home.introduction')}
            </motion.p>

            <motion.div variants={fadeUp} transition={{ duration: 0.6 }} className="mt-9 flex flex-row gap-3">
              <Link
                to="/registration"
                className="group inline-flex h-[52px] items-center justify-center gap-3 rounded-full bg-brand-700 px-7 text-sm font-bold text-white shadow-xl shadow-brand-900/20 transition-all hover:-translate-y-1 hover:bg-brand-800 hover:shadow-2xl"
              >
                {t('actions.registerNow')}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" aria-hidden="true" />
              </Link>
              <Link
                to="/research-topics"
                className="inline-flex h-[52px] items-center justify-center rounded-full border border-brand-900/15 bg-white/80 px-7 text-sm font-bold text-brand-800 shadow-sm backdrop-blur transition-all hover:-translate-y-1 hover:border-brand-700/30 hover:bg-white"
              >
                {t('actions.exploreTopics')}
              </Link>
            </motion.div>

            {/* Core Principles Badges Section (Desktop Subtle Compact Floating Pills) */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="mt-10 flex flex-wrap items-center gap-3.5 border-t border-brand-900/10 pt-6"
            >
              {principles.map(({ labelKey, icon: Icon, badgeBg, hoverClass }) => (
                <div
                  key={labelKey}
                  className={`inline-flex items-center gap-2.5 rounded-full border border-slate-200/90 bg-white/90 px-4 py-2 text-xs font-black text-brand-950 shadow-xs backdrop-blur-md transition-all duration-300 ${hoverClass} hover:-translate-y-0.5 hover:shadow-md cursor-pointer`}
                >
                  <span className={`grid size-7 place-items-center rounded-full ${badgeBg} shadow-2xs`}>
                    <Icon className="size-3.5 shrink-0" aria-hidden="true" />
                  </span>
                  <span>{t(labelKey)}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Desktop Right Floating Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto flex items-center justify-center ms-auto"
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <img
                src={logo}
                alt={t('universityName')}
                className="size-96 rounded-full object-contain shadow-2xl transition-transform duration-500 hover:scale-105"
                fetchPriority="high"
              />
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* Speakers Marquee */}
      <SpeakersMarquee />

      {/* Partners & Sponsors Marquee */}
      <PartnersMarquee />
    </>
  );
}

export default Home;
