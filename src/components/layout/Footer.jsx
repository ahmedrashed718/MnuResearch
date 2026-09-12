import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUp,
  ArrowUpRight,
  BookOpen,
  Calendar,
  FileText,
  Mail,
  MapPin,
  Sparkles,
} from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.jpeg';
import { useTranslation } from '../../hooks/useTranslation';
import { publicNavigation } from '../../routes/routeConfig';
import Container from '../ui/Container';

function Footer() {
  const { language, t } = useTranslation();
  const isAr = language === 'ar';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{ backgroundColor: '#022c20' }}
      className="relative w-full border-t-2 border-amber-500/35 bg-[#022c20] text-white shadow-2xl overflow-hidden"
    >
      {/* Background Ambient Warm Amber & Emerald Glow Orbs */}
      <div className="absolute -top-32 -right-32 size-96 rounded-full bg-amber-500/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 size-96 rounded-full bg-emerald-400/15 blur-3xl pointer-events-none" />

      {/* ARTISTIC DOTTED MATRIX PATTERN OVERLAY (Full Width) */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(245, 158, 11, 0.45) 1.5px, transparent 1.5px)`,
          backgroundSize: '18px 18px',
        }}
      />

      <Container className="relative z-10 py-6 sm:py-12">
        
        {/* --- COMPACT MINIMAL MOBILE FOOTER (Visible on Mobile & Tablet < lg) --- */}
        <div className="block lg:hidden space-y-4 text-center">
          
          {/* Centered University Emblem Logo */}
          <div className="flex flex-col items-center">
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="relative mb-3"
            >
              <div className="absolute -inset-2 rounded-full bg-amber-400/25 blur-md pointer-events-none" />
              <div className="relative size-20 shrink-0 overflow-hidden rounded-full border-4 border-amber-400/90 bg-white p-1 shadow-xl">
                <img
                  src={logo}
                  alt={t('universityName')}
                  className="size-full rounded-full object-cover"
                />
              </div>
            </motion.div>

            {/* University Name & Conference Title */}
            <h3 className="text-base font-black text-white leading-tight">
              {t('universityName')}
            </h3>
            <p className="text-[11px] font-extrabold text-amber-400 mt-1">
              {t('appName')}
            </p>

            {/* Concise Official Address Line */}
            <p className="mt-2 text-[11px] font-medium text-amber-100/80 leading-relaxed max-w-xs mx-auto">
              {isAr
                ? 'طريق مصر إسكندرية الزراعي - طوخ طنبشا - بركة السبع - المنوفية'
                : 'Alexandria Agricultural Road, Toukh Tanbisha, Berket El Sabaa, Menoufia'}
            </p>
          </div>

          {/* Compact Mobile Bottom Bar */}
          <div className="pt-3 border-t border-amber-500/20 flex items-center justify-between gap-3 text-[11px] font-semibold text-amber-100/70">
            <p className="text-start">
              &copy; {new Date().getFullYear()} <span className="text-amber-400 font-bold">{t('universityName')}</span>
            </p>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 rounded-full border border-amber-400/40 bg-amber-500/20 px-3 py-1 text-[11px] font-black text-amber-300 active:scale-95 transition-transform"
            >
              <span>{isAr ? 'الأعلى' : 'Top'}</span>
              <ArrowUp className="size-3" />
            </button>
          </div>

        </div>

        {/* --- DESKTOP FOOTER DESIGN (Visible on Large Screens >= lg) --- */}
        <div className="hidden lg:block space-y-10">
          
          {/* Main Footer Grid */}
          <div className="grid grid-cols-12 gap-10">
            
            {/* Column 1: University Identity & Branding (5 cols) */}
            <div className="col-span-5 space-y-4">
              <div className="flex items-center gap-4">
                {/* ENLARGED LOGO FOR DESKTOP */}
                <div className="relative size-24 shrink-0 overflow-hidden rounded-full border-4 border-amber-400/90 bg-white p-1.5 shadow-2xl">
                  <img
                    src={logo}
                    alt={t('universityName')}
                    className="size-full rounded-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-black text-white leading-snug">
                    {t('universityName')}
                  </h3>
                  <p className="text-xs font-extrabold text-amber-400 mt-1">
                    {isAr ? 'قطاع الشؤون الأكاديمية والبحث العلمي' : 'Academic & Research Affairs'}
                  </p>
                  <div className="mt-2.5 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-500/15 px-3.5 py-1 text-xs font-extrabold text-amber-300 backdrop-blur-md">
                    <Sparkles className="size-3.5 text-amber-400" />
                    <span>{t('appName')}</span>
                  </div>
                </div>
              </div>

              <p className="text-xs text-amber-100/80 font-medium leading-relaxed max-w-md">
                {isAr
                  ? 'منصة علمية رائدة تجمع طلاب جامعة المنوفية الأهلية لعرض أبحاثهم المبتكرة وتبادل الخبرات مع نخبة من العلماء والباحثين.'
                  : 'A premier academic platform gathering MNU students to present groundbreaking research and engage with distinguished scholars.'}
              </p>

              {/* Quick Action Badges */}
              <div className="flex flex-wrap gap-2.5 pt-1">
                <Link
                  to="/registration"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 px-5 py-2.5 text-xs font-black text-brand-950 shadow-md transition-all hover:scale-105 hover:shadow-amber-500/25"
                >
                  <span>{t('actions.registerNow')}</span>
                  <ArrowUpRight className="size-3.5 rtl:-rotate-90" />
                </Link>
                <Link
                  to="/guidelines"
                  className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-white/10 px-5 py-2.5 text-xs font-bold text-amber-100 backdrop-blur-md transition-all hover:bg-white/20 hover:text-white"
                >
                  <FileText className="size-3.5 text-amber-400" />
                  <span>{isAr ? 'الارشادات' : 'Guidelines'}</span>
                </Link>
              </div>
            </div>

            {/* Column 2: Quick Links (3 cols) */}
            <div className="col-span-3 space-y-3">
              <h4 className="text-sm font-black text-[#f59e0b] tracking-wider uppercase flex items-center gap-2 border-b border-amber-500/20 pb-2">
                <BookOpen className="size-4 text-amber-400" />
                <span>{isAr ? 'روابط الموقع' : 'Quick Links'}</span>
              </h4>
              <ul className="grid grid-cols-1 gap-2.5 text-xs font-bold text-amber-100/90">
                {publicNavigation.map((item) => (
                  <li key={item.path}>
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `inline-flex items-center gap-2 transition-all hover:text-amber-400 hover:translate-x-1 rtl:hover:-translate-x-1 ${
                          isActive ? 'text-amber-400 font-black' : ''
                        }`
                      }
                    >
                      <span className="size-1.5 rounded-full bg-amber-400/60" />
                      <span>{t(item.labelKey)}</span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Event & Official Venue Details (4 cols) */}
            <div className="col-span-4 space-y-4">
              <h4 className="text-sm font-black text-[#f59e0b] tracking-wider uppercase flex items-center gap-2 border-b border-amber-500/20 pb-2">
                <MapPin className="size-4 text-amber-400" />
                <span>{isAr ? 'تفاصيل المقر والعنوان الرسمي' : 'Official Venue & Address'}</span>
              </h4>

              <div className="grid grid-cols-2 gap-3 text-xs">
                {/* Dates Card */}
                <div className="rounded-2xl border border-amber-400/20 bg-white/5 p-3.5 backdrop-blur-md">
                  <div className="flex items-center gap-2 text-amber-300 font-extrabold mb-1">
                    <Calendar className="size-4 text-amber-400" />
                    <span>{isAr ? 'موعد المؤتمر' : 'Dates'}</span>
                  </div>
                  <p className="text-white font-bold">15 - 16 مايو 2026</p>
                  <p className="text-[11px] text-amber-100/70">{isAr ? 'جلسات علمية' : 'Keynote sessions'}</p>
                </div>

                {/* Venue Card */}
                <div className="rounded-2xl border border-amber-400/20 bg-white/5 p-3.5 backdrop-blur-md">
                  <div className="flex items-center gap-2 text-amber-300 font-extrabold mb-1">
                    <MapPin className="size-4 text-amber-400" />
                    <span>{isAr ? 'مقر المؤتمر' : 'Venue'}</span>
                  </div>
                  <p className="text-white font-bold">{t('universityName')}</p>
                  <p className="text-[11px] text-amber-100/70">{isAr ? 'المجمع الأكاديمي' : 'Campus'}</p>
                </div>
              </div>

              {/* Official University Address Box */}
              <div className="rounded-2xl border border-amber-400/25 bg-amber-500/10 p-4 text-xs text-amber-100/95 leading-relaxed flex items-start gap-3 backdrop-blur-md">
                <MapPin className="size-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-black text-amber-300 block mb-1 text-xs">
                    {isAr ? 'العنوان الرسمي لجامعة المنوفية الأهلية:' : 'Official Address:'}
                  </span>
                  <span className="font-bold text-white block">
                    {isAr
                      ? 'طريق مصر إسكندرية الزراعي - مدينة طوخ طنبشا - مركز بركة السبع - محافظة المنوفية - مصر.'
                      : 'Alexandria Agricultural Road, Toukh Tanbisha, Berket El Sabaa, Menoufia Governorate, Egypt.'}
                  </span>
                </div>
              </div>

            </div>

          </div>

          {/* Desktop Bottom Bar */}
          <div className="pt-6 border-t border-amber-500/20 flex items-center justify-between gap-4 text-xs font-semibold text-amber-100/70">
            <p>
              &copy; {new Date().getFullYear()} <span className="text-amber-400 font-bold">{t('universityName')}</span>. {isAr ? 'جميع الحقوق محفوظة.' : 'All rights reserved.'}
            </p>

            <div className="flex items-center gap-4">
              <span className="text-[11px] text-amber-200/60">
                {isAr ? 'المؤتمر العلمي الأول للبحوث والابتكارات الطلابية' : '1st Student Research & Innovation Conference'}
              </span>

              <button
                type="button"
                onClick={scrollToTop}
                className="group inline-flex items-center gap-1.5 rounded-full border border-amber-400/40 bg-amber-500/20 px-3.5 py-1.5 text-xs font-black text-amber-300 transition-all hover:bg-amber-400 hover:text-brand-950 hover:shadow-md"
                aria-label={isAr ? 'الرجوع للأعلى' : 'Scroll to top'}
              >
                <span>{isAr ? 'الأعلى' : 'Top'}</span>
                <ArrowUp className="size-3.5 transition-transform group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>

        </div>

      </Container>
    </footer>
  );
}

export default Footer;
