import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Building2, CheckCircle2, ExternalLink, Globe2, Handshake, Mail, Phone, Search, Sparkles, X } from 'lucide-react';
import Container from '../../components/ui/Container';
import { dummyPartners } from '../../data/partnersData';
import { useTranslation } from '../../hooks/useTranslation';

// Official University Logo
import logo from '../../assets/images/logo.jpeg';

export default function Partners() {
  const { language, t } = useTranslation();
  const isAr = language === 'ar';

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPartner, setSelectedPartner] = useState(null);
  const [isSponsorModalOpen, setIsSponsorModalOpen] = useState(false);

  // Filter Categories
  const categories = [
    { id: 'all', nameAr: 'جميع الشركاء', nameEn: 'All Partners' },
    { id: 'cloud', nameAr: 'الحوسبة والذكاء الاصطناعي', nameEn: 'Cloud & AI' },
    { id: 'hardware', nameAr: 'الأنظمة المدمجة والأجهزة', nameEn: 'Hardware & Systems' },
    { id: 'telco', nameAr: 'الاتصالات والشبكات', nameEn: 'Telecom & Security' },
    { id: 'publishing', nameAr: 'النشر والمراجع العلمية', nameEn: 'Publishing & Research' },
  ];

  // Filtered Partners Logic
  const filteredPartners = dummyPartners.filter((partner) => {
    const name = isAr ? partner.nameAr : partner.nameEn;
    const category = isAr ? partner.categoryAr : partner.categoryEn;
    const matchesSearch =
      name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      category.toLowerCase().includes(searchQuery.toLowerCase());

    if (selectedCategory === 'all') return matchesSearch;
    if (selectedCategory === 'cloud')
      return matchesSearch && (category.includes('سحابية') || category.includes('Cloud') || category.includes('AI'));
    if (selectedCategory === 'hardware')
      return matchesSearch && (category.includes('مدمجة') || category.includes('Hardware') || category.includes('طبي'));
    if (selectedCategory === 'telco')
      return matchesSearch && (category.includes('شبكات') || category.includes('Telecom') || category.includes('5G'));
    if (selectedCategory === 'publishing')
      return matchesSearch && (category.includes('النشر') || category.includes('Publishing') || category.includes('Scopus'));

    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#f8fbf9] pt-3 sm:pt-6 pb-24 selection:bg-brand-500 selection:text-white">
      
      {/* --- HERO BANNER --- */}
      <section className="py-1 sm:py-3">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            style={{ backgroundColor: '#022c20' }}
            className="relative overflow-hidden rounded-3xl border-2 border-amber-500/35 bg-[#022c20] p-5 sm:p-8 md:p-10 text-white shadow-2xl"
          >
            {/* Ambient Background Orbs */}
            <div className="absolute -top-20 -right-20 size-60 rounded-full bg-amber-500/25 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 size-60 rounded-full bg-emerald-400/20 blur-3xl pointer-events-none" />

            {/* ARTISTIC DOTTED MATRIX OVERLAY */}
            <div
              className="absolute inset-0 opacity-25 pointer-events-none"
              style={{
                backgroundImage: `radial-gradient(rgba(245, 158, 11, 0.45) 1.5px, transparent 1.5px)`,
                backgroundSize: '18px 18px',
              }}
            />

            {/* Content Layout */}
            <div className="relative z-10 flex flex-col items-center text-center md:flex-row md:items-center md:justify-between md:text-start gap-5 md:gap-8">
              
              {/* Floating Emblem Logo */}
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

              {/* Text Area */}
              <div className="space-y-3 max-w-2xl order-2 md:order-1">
                <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-500/20 px-3.5 py-1 text-xs font-black text-amber-300 shadow-sm backdrop-blur-md">
                  <Handshake className="size-3.5 text-amber-400" />
                  <span>{isAr ? 'الشركاء الدوليون والداعمون' : 'Global Partners & Sponsors'}</span>
                </div>

                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight tracking-tight">
                  {isAr ? (
                    <>
                      <span>الشركاء والرعاة</span>{' '}
                      <span className="relative inline-block text-amber-400">
                        الاستراتيجيون للمؤتمر
                        <svg className="absolute -bottom-1.5 left-0 h-2.5 w-full text-amber-400" viewBox="0 0 300 12" preserveAspectRatio="none" aria-hidden="true">
                          <path d="M2 9C70 2 206 2 298 8" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                        </svg>
                      </span>
                    </>
                  ) : (
                    <>
                      <span>Strategic Partners</span>{' '}
                      <span className="relative inline-block text-amber-400">
                        & Sponsors
                        <svg className="absolute -bottom-1.5 left-0 h-2.5 w-full text-amber-400" viewBox="0 0 300 12" preserveAspectRatio="none" aria-hidden="true">
                          <path d="M2 9C70 2 206 2 298 8" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                        </svg>
                      </span>
                    </>
                  )}
                </h1>

                <p className="text-xs sm:text-sm text-amber-100/90 font-semibold leading-relaxed max-w-lg mx-auto md:mx-0">
                  {isAr
                    ? 'نعتز بالشراكة الاستراتيجية مع كبرى المؤسسات التكنولوجية العالمية والجهات البحثية المرموقة لدعم البحث العلمي بجامعة المنوفية الأهلية.'
                    : 'Collaborating with premier international technology leaders and research funds to empower student innovation.'}
                </p>

              </div>

            </div>
          </motion.div>
        </Container>
      </section>

      {/* --- SEARCH & CATEGORY FILTERS --- */}
      <Container className="mt-8">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between border-b border-slate-200/80 pb-6">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 overflow-x-auto pb-1">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`rounded-full px-4 py-2 text-xs font-black transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-brand-700 text-white shadow-md shadow-brand-900/20'
                    : 'bg-white text-slate-700 hover:bg-brand-50 hover:text-brand-900 border border-slate-200/80'
                }`}
              >
                {isAr ? cat.nameAr : cat.nameEn}
              </button>
            ))}
          </div>

          {/* Search Bar Input */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="absolute start-3.5 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={isAr ? 'بحث عن شريك أو مجال...' : 'Search partner or field...'}
              className="w-full rounded-full border border-slate-200 bg-white py-2 pe-4 ps-10 text-xs font-semibold text-brand-950 placeholder:text-slate-400 focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-600/20 shadow-xs"
            />
          </div>

        </div>

        {/* --- PARTNERS GRID SHOWCASE --- */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredPartners.map((partner) => {
            const name = isAr ? partner.nameAr : partner.nameEn;
            const category = isAr ? partner.categoryAr : partner.categoryEn;

            return (
              <motion.div
                key={partner.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                onClick={() => setSelectedPartner(partner)}
                className="group cursor-pointer relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-2 hover:border-gold-500/50 hover:shadow-xl hover:shadow-brand-900/10"
              >
                {/* Subtle Hover Gradient Accent Line */}
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-700 via-gold-500 to-brand-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div>
                  <div className="flex items-center justify-between gap-3">
                    {/* Brand Vector Logo Box */}
                    <div className="flex h-16 w-36 items-center justify-start rounded-lg bg-white p-1 transition-transform duration-300 group-hover:scale-105">
                      <img
                        src={partner.logo}
                        alt={name}
                        className="h-full max-w-full object-contain object-start filter drop-shadow-xs"
                        loading="lazy"
                      />
                    </div>

                    <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-slate-50 text-slate-400 group-hover:bg-gold-50 group-hover:text-gold-600 transition-colors">
                      <Globe2 className="size-4" />
                    </div>
                  </div>

                  <div className="mt-4">
                    <h3 className="text-base font-black text-brand-950 line-clamp-1 transition-colors group-hover:text-brand-700">
                      {name}
                    </h3>
                    <p className="mt-1 text-xs font-bold text-gold-700 line-clamp-1">
                      {category}
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-between pt-3 border-t border-slate-100 text-xs font-bold text-brand-700 group-hover:text-brand-900">
                  <span>{isAr ? 'عرض تفاصيل التمويل والتعاون' : 'View Partnership Details'}</span>
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>

      {/* --- PARTNER DETAILS MODAL --- */}
      <AnimatePresence>
        {selectedPartner && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-950/70 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-white p-6 sm:p-8 shadow-2xl border border-slate-200"
            >
              <button
                onClick={() => setSelectedPartner(null)}
                className="absolute top-4 end-4 grid size-9 place-items-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 transition-colors"
              >
                <X className="size-5" />
              </button>

              <div className="flex items-center gap-4">
                <div className="flex h-16 w-36 shrink-0 items-center justify-center rounded-xl border border-slate-100 bg-white p-2 shadow-xs">
                  <img
                    src={selectedPartner.logo}
                    alt={selectedPartner.nameAr}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-black text-brand-950">
                    {isAr ? selectedPartner.nameAr : selectedPartner.nameEn}
                  </h3>
                  <p className="text-xs font-bold text-gold-700">
                    {isAr ? selectedPartner.categoryAr : selectedPartner.categoryEn}
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div className="rounded-2xl bg-slate-50 p-4 border border-slate-100">
                  <h4 className="text-xs font-extrabold text-brand-900 mb-1.5">
                    {isAr ? 'مجال التعاون والتمويل البحثي:' : 'Sponsorship & Research Scope:'}
                  </h4>
                  <p className="text-xs font-medium text-slate-700 leading-relaxed">
                    {isAr ? selectedPartner.descriptionAr : selectedPartner.descriptionEn}
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                    <CheckCircle2 className="size-4 text-emerald-600" />
                    <span>{isAr ? 'توفير التراخيص التقنية والبنية التحتية للأبحاث' : 'Providing technical licenses and research infra'}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                    <CheckCircle2 className="size-4 text-emerald-600" />
                    <span>{isAr ? 'دعم وتحكيم المشروعات الطلابية الفائزة' : 'Sponsoring winning student projects'}</span>
                  </div>
                </div>
              </div>

              <div className="mt-7 flex items-center justify-end gap-3">
                <button
                  onClick={() => setSelectedPartner(null)}
                  className="rounded-full px-5 py-2.5 text-xs font-bold text-slate-600 hover:bg-slate-100 transition-colors"
                >
                  {isAr ? 'إغلاق' : 'Close'}
                </button>
                <a
                  href="https://mnu.edu.eg"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-brand-700 hover:bg-brand-800 px-5 py-2.5 text-xs font-bold text-white shadow-md transition-colors"
                >
                  <span>{isAr ? 'زيارة الموقع الرسمي للشريك' : 'Visit Official Website'}</span>
                  <ExternalLink className="size-3.5" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* --- SPONSORSHIP APPLICATION MODAL --- */}
      <AnimatePresence>
        {isSponsorModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-950/70 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-md overflow-hidden rounded-3xl bg-white p-6 sm:p-8 shadow-2xl border border-slate-200"
            >
              <button
                onClick={() => setIsSponsorModalOpen(false)}
                className="absolute top-4 end-4 grid size-9 place-items-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 transition-colors"
              >
                <X className="size-5" />
              </button>

              <div className="text-center">
                <div className="mx-auto grid size-12 place-items-center rounded-full bg-gold-100 text-gold-700 mb-3">
                  <Handshake className="size-6" />
                </div>
                <h3 className="text-xl font-black text-brand-950">
                  {isAr ? 'طلب انضمام كشريك أو راعي' : 'Sponsorship Application'}
                </h3>
                <p className="mt-1 text-xs font-medium text-slate-600">
                  {isAr
                    ? 'يسعدنا انضمام مؤسستك لرعاية مؤتمر أبحاث الطلاب بجامعة المنوفية الأهلية.'
                    : 'We welcome your entity to join as an official sponsor.'}
                </p>
              </div>

              <form onSubmit={(e) => { e.preventDefault(); setIsSponsorModalOpen(false); alert(isAr ? 'تم إرسال طلبك بنجاح وسيتواصل معكم فريق الرعايات.' : 'Application submitted successfully!'); }} className="mt-5 space-y-3.5">
                <div>
                  <label className="block text-xs font-bold text-brand-950 mb-1">
                    {isAr ? 'اسم الشركة / المؤسسة:' : 'Organization Name:'}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={isAr ? 'مثال: شركة التكنولوجيا الحديثة' : 'e.g. Acme Tech'}
                    className="w-full rounded-xl border border-slate-200 p-2.5 text-xs font-medium focus:border-brand-600 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-brand-950 mb-1">
                    {isAr ? 'البريد الإلكتروني الرسمي:' : 'Official Email:'}
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="partner@company.com"
                    className="w-full rounded-xl border border-slate-200 p-2.5 text-xs font-medium focus:border-brand-600 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-brand-950 mb-1">
                    {isAr ? 'رقم الهاتف / التواصل:' : 'Phone Number:'}
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+20 100 000 0000"
                    className="w-full rounded-xl border border-slate-200 p-2.5 text-xs font-medium focus:border-brand-600 focus:outline-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full h-11 rounded-xl bg-brand-700 hover:bg-brand-800 text-white font-extrabold text-xs shadow-md transition-colors"
                  >
                    {isAr ? 'إرسال طلب الرعاية' : 'Submit Application'}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
