import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowUpRight,
  Award,
  BookOpen,
  Calendar,
  FileText,
  Home as HomeIcon,
  Image as ImageIcon,
  Info,
  Languages,
  Mail,
  Menu,
  Sparkles,
  Users,
  X
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.jpeg';
import { useTranslation } from '../../hooks/useTranslation';
import { publicNavigation } from '../../routes/routeConfig';
import Button from '../ui/Button';
import Container from '../ui/Container';
import Modal from '../ui/Modal';

// Icon mapping for mobile navigation links
const navIcons = {
  '/': HomeIcon,
  '/about': Info,
  '/agenda': Calendar,
  '/speakers': Users,
  '/research-topics': BookOpen,
  '/workshops': Sparkles,
  '/partners': Award,
  '/gallery': ImageIcon,
  '/contact': Mail,
};

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showLanguageConfirm, setShowLanguageConfirm] = useState(false);
  const { language, t, toggleLanguage } = useTranslation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  const navLinkClass = ({ isActive }) =>
    `group relative isolate overflow-hidden rounded-full px-4 py-2 text-sm font-black transition-all duration-300 ${
      isActive
        ? 'bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-brand-950 shadow-[0_6px_20px_-4px_rgba(245,158,11,0.45)] border border-amber-200/60 scale-[1.02]'
        : 'text-brand-950 font-extrabold hover:-translate-y-0.5 hover:bg-amber-500/10 hover:text-brand-800 hover:shadow-sm'
    }`;

  const confirmLanguageChange = () => {
    toggleLanguage();
    setShowLanguageConfirm(false);
    setIsOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-all duration-300 ${
        isScrolled
          ? 'border-gold-600/15 bg-[#fffdf8]/90 shadow-[0_12px_38px_-22px_rgba(112,75,16,0.42)] backdrop-blur-xl'
          : 'border-gold-500/10 bg-[#fffdf8]/75 backdrop-blur-md'
      }`}
    >
      <div className="h-1 bg-gradient-to-r from-brand-800 via-amber-400 to-brand-800" />
      <Container className="flex min-h-[68px] sm:min-h-[76px] items-center justify-between gap-2 sm:gap-5">
        <NavLink
          to="/"
          className="group flex min-w-0 items-center gap-2 sm:gap-3"
          onClick={() => setIsOpen(false)}
          aria-label={`${t('appName')} ${t('nav.home')}`}
        >
          <span className="relative size-12 sm:size-16 shrink-0 overflow-hidden rounded-full border-2 border-brand-700/20 bg-white shadow-sm transition-transform duration-300 group-hover:scale-105">
            <img src={logo} alt="" className="size-full object-cover" />
          </span>
          <span className="min-w-0 flex flex-col justify-center">
            <span className="block text-[12.5px] sm:text-base font-black tracking-tight text-brand-900 leading-tight">
              {t('universityName')}
            </span>
            <span className="block text-[10.5px] sm:text-xs font-extrabold text-amber-600 leading-tight tracking-tight">
              <span className="sm:hidden">
                {language === 'ar' ? 'المؤتمر الطلابي للبحث العلمي والابتكار' : t('appName')}
              </span>
              <span className="hidden sm:inline">
                {t('appName')}
              </span>
            </span>
          </span>
        </NavLink>

        {/* Desktop Navigation */}
        <nav
          className="hidden items-center gap-0.5 rounded-full border-2 border-brand-700/80 bg-white/95 p-1.5 shadow-[0_12px_32px_-8px_rgba(3,75,54,0.45),0_4px_14px_rgba(3,75,54,0.2)] backdrop-blur-xl xl:flex"
          aria-label={t('actions.mainNavigation')}
        >
          {publicNavigation.map((item) => (
            <NavLink key={item.path} to={item.path} className={navLinkClass}>
              {t(item.labelKey)}
              <span className="absolute inset-x-4 bottom-0 h-0.5 origin-center scale-x-0 rounded-full bg-gradient-to-r from-brand-700 to-brand-900 transition-transform duration-300 group-hover:scale-x-100" />
            </NavLink>
          ))}
          <NavLink
            to="/registration"
            className="group relative ms-2 inline-flex h-10 items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-brand-700 to-brand-600 px-5 text-sm font-extrabold text-white shadow-lg shadow-brand-900/15 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-brand-900/20"
          >
            <span className="absolute inset-y-0 -left-10 w-8 skew-x-[-20deg] bg-white/20 blur-sm transition-transform duration-700 group-hover:translate-x-44" />
            <span className="relative">{t('actions.registerNow')}</span>
            <ArrowUpRight className="relative size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:-rotate-90 rtl:group-hover:-translate-x-0.5" aria-hidden="true" />
          </NavLink>
          <button
            type="button"
            onClick={() => setShowLanguageConfirm(true)}
            className="group ms-1 inline-flex h-10 items-center gap-2 rounded-full border border-brand-900/15 bg-white px-3.5 text-xs font-extrabold text-brand-900 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-700/50 hover:bg-slate-50 hover:shadow-md"
            aria-label={t('actions.changeLanguage')}
          >
            <Languages className="size-4 text-brand-700 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" aria-hidden="true" />
            {language === 'en' ? 'AR' : 'EN'}
          </button>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          className="grid size-10 sm:size-11 shrink-0 place-items-center rounded-full border-2 border-brand-700/80 bg-white text-brand-950 shadow-md transition-all hover:bg-brand-50 xl:hidden"
          aria-label={isOpen ? t('actions.closeNavigation') : t('actions.openNavigation')}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X className="size-5 text-brand-950" aria-hidden="true" /> : <Menu className="size-5 text-brand-950" aria-hidden="true" />}
        </button>
      </Container>

      {/* --- REDESIGNED HIGH-END MOBILE DROPDOWN DRAWER --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            className="absolute inset-x-0 top-full border-b-2 border-brand-700/80 bg-white/95 shadow-2xl backdrop-blur-2xl xl:hidden max-h-[85vh] overflow-y-auto"
            aria-label={t('actions.mainNavigation')}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            <Container className="py-4 sm:py-5">
              {/* Navigation Items Grid with Icons */}
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {publicNavigation.map((item) => {
                  const Icon = navIcons[item.path] || Sparkles;

                  return (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      className={({ isActive }) =>
                        `flex items-center gap-2 rounded-xl px-3 py-2.5 text-[11px] sm:text-xs transition-all duration-200 ${
                          isActive
                            ? 'border-2 border-amber-400/80 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-brand-950 shadow-md font-black'
                            : 'border border-slate-200/90 bg-white text-brand-950 font-extrabold hover:border-brand-700/40 hover:bg-amber-50/50'
                        }`
                      }
                      onClick={() => setIsOpen(false)}
                    >
                      {({ isActive }) => (
                        <>
                          <span
                            className={`grid size-6.5 sm:size-7 shrink-0 place-items-center rounded-lg ${
                              isActive ? 'bg-brand-950 text-amber-400' : 'bg-amber-100 text-brand-900'
                            }`}
                          >
                            <Icon className="size-3.5" aria-hidden="true" />
                          </span>
                          <span className="truncate">{t(item.labelKey)}</span>
                        </>
                      )}
                    </NavLink>
                  );
                })}
              </div>

              {/* Action Buttons Section with Harmonious Brand Styling */}
              <div className="mt-4 grid grid-cols-2 gap-2 pt-3 border-t border-brand-900/10">
                <NavLink
                  to="/registration"
                  className="flex h-[44px] sm:h-[48px] items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-brand-700 to-brand-600 px-3 text-xs font-black text-white shadow-md transition-all hover:bg-brand-800 group border border-brand-700"
                  onClick={() => setIsOpen(false)}
                >
                  <span>{t('actions.registerNow')}</span>
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:-rotate-90 rtl:group-hover:-translate-x-0.5" aria-hidden="true" />
                </NavLink>

                <button
                  type="button"
                  onClick={() => setShowLanguageConfirm(true)}
                  className="flex h-[44px] sm:h-[48px] items-center justify-center gap-1.5 rounded-xl border border-brand-900/15 bg-white px-3 text-xs font-extrabold text-brand-900 shadow-xs transition-all hover:border-brand-700/50 hover:bg-slate-50"
                >
                  <Languages className="size-4 text-brand-700 shrink-0" aria-hidden="true" />
                  <span className="truncate">{language === 'en' ? 'العربية' : 'English'}</span>
                </button>
              </div>
            </Container>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Language Confirmation Modal */}
      <Modal
        isOpen={showLanguageConfirm}
        onClose={() => setShowLanguageConfirm(false)}
        title={t('actions.languageConfirmTitle')}
        footer={
          <div className="flex justify-end gap-3">
            <Button variant="ghost" onClick={() => setShowLanguageConfirm(false)}>
              {t('actions.cancel')}
            </Button>
            <Button onClick={confirmLanguageChange}>
              {t('actions.confirm')}
            </Button>
          </div>
        }
      >
        <div className="flex items-start gap-4">
          <span className="grid size-11 shrink-0 place-items-center rounded-full bg-gold-50 text-gold-600">
            <Languages className="size-5" aria-hidden="true" />
          </span>
          <p className="pt-2 text-sm leading-7 text-slate-600">
            {language === 'en'
              ? t('actions.languageConfirmArabic')
              : t('actions.languageConfirmEnglish')}
          </p>
        </div>
      </Modal>
    </header>
  );
}

export default Header;
