import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FileText,
  CheckCircle2,
  AlertCircle,
  Clock,
  BookOpen,
  Layers,
  BarChart3,
  Search,
  Type,
  Sparkles
} from 'lucide-react';
import Container from '../../components/ui/Container';
import PageHeroBanner from '../../components/common/PageHeroBanner';
import { useTranslation } from '../../hooks/useTranslation';

export default function Guidelines() {
  const { language } = useTranslation();
  const isAr = language === 'ar';
  const [activeTab, setActiveTab] = useState('all');

  // Accepted research types
  const researchTypes = [
    {
      id: 'research-article',
      number: '1',
      title: isAr ? 'المقالة البحثية الأصلية' : 'Research Article',
      subtitle: isAr ? 'Research Article' : 'Original Empirical Study',
      badge: isAr ? 'دراسة أصلية' : 'Original Research',
      color: 'from-emerald-600 to-teal-700',
      borderAccent: 'border-emerald-500/30',
      bgLight: 'bg-emerald-50/70',
      textColor: 'text-emerald-800',
      referencesLimit: isAr ? 'لا يزيد عن (50) مرجع' : 'Max 50 references',
    },
    {
      id: 'review',
      number: '2',
      title: isAr ? 'المقالة المرجعية' : 'Literature Review',
      subtitle: isAr ? 'Review' : 'Narrative & Critical Review',
      badge: isAr ? 'مراجعة أدبيات' : 'Literature Review',
      color: 'from-blue-600 to-indigo-700',
      borderAccent: 'border-blue-500/30',
      bgLight: 'bg-blue-50/70',
      textColor: 'text-blue-800',
      referencesLimit: isAr ? 'لا يزيد عن (70) مرجع' : 'Max 70 references',
    },
    {
      id: 'systematic-review',
      number: '3',
      title: isAr ? 'المراجعة المنهجية' : 'Systematic Review',
      subtitle: isAr ? 'Systematic Review' : 'Protocol-Driven Synthesis',
      badge: isAr ? 'منهجية معيارية' : 'Standard Methodology',
      color: 'from-amber-600 to-orange-700',
      borderAccent: 'border-amber-500/30',
      bgLight: 'bg-amber-50/70',
      textColor: 'text-amber-800',
      referencesLimit: isAr ? 'قائمة كاملة بجميع الدراسات' : 'All included studies',
    },
    {
      id: 'meta-analysis',
      number: '4',
      title: isAr ? 'التحليل البعدي / التلوي' : 'Meta-analysis',
      subtitle: isAr ? 'Meta-analysis' : 'Quantitative Aggregation',
      badge: isAr ? 'تحليل إحصائي' : 'Statistical Synthesis',
      color: 'from-purple-600 to-fuchsia-700',
      borderAccent: 'border-purple-500/30',
      bgLight: 'bg-purple-50/70',
      textColor: 'text-purple-800',
      referencesLimit: isAr ? 'تجميع لدراستين أو أكثر' : 'Pooled multi-study data',
    },
  ];

  // Standard paper structural elements
  const researchArticleSections = isAr
    ? [
        { label: 'العنوان', en: 'Title' },
        { label: 'الملخص', en: 'Abstract' },
        { label: 'الكلمات المفتاحية', en: 'Keywords' },
        { label: 'المقدمة', en: 'Introduction' },
        { label: 'المنهجية', en: 'Methods' },
        { label: 'النتائج', en: 'Results' },
        { label: 'المناقشة', en: 'Discussion' },
        { label: 'الخاتمة', en: 'Conclusion' },
        { label: 'المراجع', en: 'References' },
      ]
    : [
        { label: 'Title', en: 'Title' },
        { label: 'Abstract', en: 'Abstract' },
        { label: 'Keywords', en: 'Keywords' },
        { label: 'Introduction', en: 'Introduction' },
        { label: 'Methods', en: 'Methods' },
        { label: 'Results', en: 'Results' },
        { label: 'Discussion', en: 'Discussion' },
        { label: 'Conclusion', en: 'Conclusion' },
        { label: 'References', en: 'References' },
      ];

  const systematicReviewSections = isAr
    ? [
        { label: 'العنوان', en: 'Title' },
        { label: 'الملخص', en: 'Abstract' },
        { label: 'الكلمات المفتاحية', en: 'Keywords' },
        { label: 'المقدمة', en: 'Introduction' },
        { label: 'المنهجية (تشمل الاستراتيجية، الاختيار، الاستخراج، وتقييم التحيز)', en: 'Methods' },
        { label: 'النتائج', en: 'Results' },
        { label: 'المناقشة', en: 'Discussion' },
        { label: 'الخاتمة', en: 'Conclusion' },
        { label: 'المراجع', en: 'References' },
      ]
    : [
        { label: 'Title', en: 'Title' },
        { label: 'Abstract', en: 'Abstract' },
        { label: 'Keywords', en: 'Keywords' },
        { label: 'Introduction', en: 'Introduction' },
        { label: 'Methods (Search, Selection, Extraction, Bias Assessment)', en: 'Methods' },
        { label: 'Results', en: 'Results' },
        { label: 'Discussion', en: 'Discussion' },
        { label: 'Conclusion', en: 'Conclusion' },
        { label: 'References', en: 'References' },
      ];

  return (
    <div className="min-h-screen bg-[#f8fbf9] pt-2 sm:pt-5 pb-20 selection:bg-amber-400 selection:text-brand-950 font-sans">
      {/* --- HERO BANNER --- */}
      <PageHeroBanner
        badge={isAr ? 'مركز ضمان الجودة • وحدة الأبحاث الطلابية' : 'Quality Assurance Center • Student Research Unit'}
        title={isAr ? 'إرشادات وضوابط تقديم الأبحاث العلمية' : 'Guidelines & Regulations for Research Submissions'}
        subtitle={
          isAr
            ? 'الدليل الرسمي الشامل لشروط ومعايير وضوابط نشر وتقديم الأوراق البحثية للمؤتمر الطلابي الأول للبحث العلمي والابتكار'
            : 'Official comprehensive guidelines, formatting standards, and structural regulations for research submissions.'
        }
      />

      <Container className="mt-6 sm:mt-10 px-4 sm:px-6 lg:px-8 max-w-6xl space-y-10">

        {/* --- SECTION 1: RESEARCH TYPES SUMMARY CARDS --- */}
        <section>
          <div className="mb-5 flex items-center justify-between">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 text-xs font-black text-amber-600 uppercase tracking-wider">
                <Sparkles className="size-3.5" />
                <span>{isAr ? 'أنواع الأبحاث' : 'Categories'}</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-brand-950 tracking-tight">
                {isAr ? 'أنواع الأبحاث المسموح باستقبالها' : 'Accepted Research Types'}
              </h2>
            </div>
            <span className="rounded-full bg-brand-900/5 px-3 py-1 text-xs font-bold text-brand-900">
              {isAr ? '4 مسارات بحثية' : '4 Research Categories'}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {researchTypes.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.08 }}
                className={`relative rounded-2xl border p-5 bg-white shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between ${item.borderAccent}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`flex size-8 items-center justify-center rounded-xl bg-gradient-to-br ${item.color} text-white text-sm font-black shadow-sm`}>
                      {item.number}
                    </span>
                    <span className={`text-[11px] font-extrabold px-2.5 py-0.5 rounded-full ${item.bgLight} ${item.textColor}`}>
                      {item.badge}
                    </span>
                  </div>
                  <h3 className="text-base font-black text-brand-950 mb-1 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs font-bold text-slate-400 mb-3">
                    {item.subtitle}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-semibold">{isAr ? 'المراجع:' : 'References:'}</span>
                  <span className="font-extrabold text-brand-900">{item.referencesLimit}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- SECTION 2: GENERAL SUBMISSION GUIDELINES & TYPOGRAPHY --- */}
        <section className="rounded-3xl border-2 border-brand-900/10 bg-white p-6 sm:p-8 lg:p-10 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-slate-100">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 text-xs font-black text-amber-600 uppercase tracking-wide">
                  <AlertCircle className="size-3.5" />
                  <span>{isAr ? 'إرشادات عامة للمتقدمين بأبحاث' : 'General Submission Guidelines'}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-brand-950">
                  {isAr ? 'يجب أن تلتزم جميع المقالات المقدمة بالآتي:' : 'All submitted manuscripts must strictly adhere to:'}
                </h3>
              </div>
              <div className="inline-flex items-center gap-2 rounded-xl bg-amber-500/10 border border-amber-500/20 px-3.5 py-2 text-xs font-black text-amber-900 self-start sm:self-auto">
                <CheckCircle2 className="size-4 text-amber-600" />
                <span>{isAr ? 'لغة الأبحاث: اللغة الإنجليزية' : 'Language: English Only'}</span>
              </div>
            </div>

            {/* Typography & Spacing Cards */}
            <div className="mt-6">
              <h4 className="text-sm font-black text-brand-950 uppercase tracking-wider mb-4 flex items-center gap-2">
                <Type className="size-4 text-brand-700" />
                <span>{isAr ? 'قواعد تنسيق الخطوط والمسافات' : 'Font & Spacing Standards'}</span>
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3.5">
                {/* 1. Paper Title */}
                <div className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-4 transition-all hover:bg-white hover:shadow-xs">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-black uppercase text-amber-600">{isAr ? 'عنوان البحث' : 'Paper Title'}</span>
                    <span className="text-xs font-black px-2 py-0.5 rounded-md bg-amber-500/15 text-amber-800 font-mono">16 pt</span>
                  </div>
                  <p className="text-sm font-black text-brand-950 font-serif">Times New Roman</p>
                  <p className="text-xs text-slate-600 mt-1 font-semibold leading-relaxed">
                    {isAr ? 'يكتب عنوان البحث بخط (Times New Roman) بحجم (16).' : 'Paper title written in Times New Roman, font size 16.'}
                  </p>
                </div>

                {/* 2. Authors & Supervisor */}
                <div className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-4 transition-all hover:bg-white hover:shadow-xs">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-black uppercase text-emerald-600">{isAr ? 'الباحثون والمشرف' : 'Authors & Supervisor'}</span>
                    <span className="text-xs font-black px-2 py-0.5 rounded-md bg-emerald-500/15 text-emerald-800 font-mono">14 pt BOLD</span>
                  </div>
                  <p className="text-sm font-black text-brand-950 font-serif">Times New Roman</p>
                  <p className="text-xs text-slate-600 mt-1 font-semibold leading-relaxed">
                    {isAr ? 'اسم الباحث أو الباحثين والمشرف وبياناتهم بخط (14) BOLD.' : 'Author(s) and supervisor names and metadata in 14 pt BOLD.'}
                  </p>
                </div>

                {/* 3. Body & Headings */}
                <div className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-4 transition-all hover:bg-white hover:shadow-xs">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-black uppercase text-blue-600">{isAr ? 'متن البحث والعناوين' : 'Body & Headings'}</span>
                    <span className="text-xs font-black px-2 py-0.5 rounded-md bg-blue-500/15 text-blue-800 font-mono">12 pt</span>
                  </div>
                  <p className="text-sm font-black text-brand-950 font-serif">Times New Roman</p>
                  <p className="text-xs text-slate-600 mt-1 font-semibold leading-relaxed">
                    {isAr ? 'يكتب البحث بخط (12)، والعناوين بخط (12) BOLD.' : 'Body text in 12 regular; subheadings in 12 BOLD.'}
                  </p>
                </div>

                {/* 4. Spacing & Keywords */}
                <div className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-4 transition-all hover:bg-white hover:shadow-xs">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-black uppercase text-purple-600">{isAr ? 'المسافة والكلمات' : 'Spacing & Keywords'}</span>
                    <span className="text-xs font-black px-2 py-0.5 rounded-md bg-purple-500/15 text-purple-800 font-mono">1.5 Lines</span>
                  </div>
                  <p className="text-sm font-black text-brand-950">
                    {isAr ? 'المسافة بين الأسطر: 1.5' : 'Line Spacing: 1.5'}
                  </p>
                  <p className="text-xs text-slate-600 mt-1 font-semibold leading-relaxed">
                    {isAr ? 'الكلمات المفتاحية: من 3 إلى 5 كلمات مفتاحية.' : 'Keywords: 3 to 5 relevant index terms.'}
                  </p>
                </div>
              </div>
            </div>

            {/* Mandatory Submissions Checklist */}
            <div className="mt-6 pt-6 border-t border-slate-100">
              <h4 className="text-sm font-black text-brand-950 uppercase tracking-wider mb-4 flex items-center gap-2">
                <CheckCircle2 className="size-4 text-emerald-600" />
                <span>{isAr ? 'ضوابط إضافية ملزمة للمؤتمر' : 'Mandatory Conference Requirements'}</span>
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* 1. Affiliation Details */}
                <div className="flex items-start gap-3 rounded-2xl bg-amber-500/5 border border-amber-500/20 p-4">
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-amber-500 text-white font-black text-xs">
                    1
                  </span>
                  <div>
                    <h5 className="text-sm font-black text-brand-950 mb-1">
                      {isAr ? 'بيانات الباحثين والمؤسسة' : 'Author & Affiliation Details'}
                    </h5>
                    <p className="text-xs text-slate-600 leading-relaxed font-medium">
                      {isAr
                        ? 'يُدرج بعد عنوان البحث البيانات الكاملة للباحثين والكلية والجامعة التي ينتمون لها والبريد الإلكتروني الخاص بهم.'
                        : 'Full author names, college/faculty, affiliated university, and institutional email must be placed beneath the title.'}
                    </p>
                  </div>
                </div>

                {/* 2. Presentation Time */}
                <div className="flex items-start gap-3 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 p-4">
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-emerald-600 text-white font-black text-xs">
                    2
                  </span>
                  <div>
                    <h5 className="text-sm font-black text-brand-950 mb-1 flex items-center gap-2">
                      <span>{isAr ? 'مدة العرض التقديمي (15 دقيقة)' : 'Oral Presentation (15 min)'}</span>
                      <span className="inline-flex items-center gap-1 text-[10px] font-black bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">
                        <Clock className="size-3" />
                        {isAr ? '15 دقيقة' : '15 min max'}
                      </span>
                    </h5>
                    <p className="text-xs text-slate-600 leading-relaxed font-medium">
                      {isAr
                        ? 'يُقدّم الباحث عرضاً تقديمياً يناقش فيه أفكار البحث في حالة اختياره للإلقاء، على ألا تتجاوز مدة العرض (15) دقيقة.'
                        : 'Selected presenters will deliver an oral presentation discussing paper insights, strictly within a 15-minute timeframe.'}
                    </p>
                  </div>
                </div>

                {/* 3. Language Quality */}
                <div className="flex items-start gap-3 rounded-2xl bg-blue-500/5 border border-blue-500/20 p-4">
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white font-black text-xs">
                    3
                  </span>
                  <div>
                    <h5 className="text-sm font-black text-brand-950 mb-1">
                      {isAr ? 'سلامة اللغة والتدقيق الإملائي' : 'Linguistic Integrity & Editing'}
                    </h5>
                    <p className="text-xs text-slate-600 leading-relaxed font-medium">
                      {isAr
                        ? 'يجب مراعاة سلامة اللغة نحوياً وخلوها من الأخطاء الإملائية والأسلوبية مع صياغة أكاديمية رصينة.'
                        : 'Manuscripts must adhere to sound grammatical academic English, free from typographical or syntactical errors.'}
                    </p>
                  </div>
                </div>

                {/* 4. English Submission */}
                <div className="flex items-start gap-3 rounded-2xl bg-purple-500/5 border border-purple-500/20 p-4">
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-purple-600 text-white font-black text-xs">
                    4
                  </span>
                  <div>
                    <h5 className="text-sm font-black text-brand-950 mb-1">
                      {isAr ? 'تقديم الأبحاث باللغة الإنجليزية' : 'English Submission Requirement'}
                    </h5>
                    <p className="text-xs text-slate-600 leading-relaxed font-medium">
                      {isAr
                        ? 'تُقدّم جميع الأبحاث باللغة الإنجليزية حصراً في كافة محاور ومسارات المؤتمر الطلابي.'
                        : 'All papers across every track of the student research conference must be submitted in English.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* --- SECTION 3: DETAILED GUIDELINES BY RESEARCH CATEGORY --- */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 text-xs font-black text-amber-600 uppercase">
                <BookOpen className="size-3.5" />
                <span>{isAr ? 'التفاصيل والمعايير التفصيلية' : 'Detailed Specifications'}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-brand-950">
                {isAr ? 'ضوابط وتفاصيل كل نوع من الأبحاث' : 'Detailed Requirements by Research Type'}
              </h3>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-1.5 rounded-xl bg-slate-200/70 p-1 text-xs font-bold">
              <button
                type="button"
                onClick={() => setActiveTab('all')}
                className={`rounded-lg px-3 py-1.5 transition-all cursor-pointer ${
                  activeTab === 'all'
                    ? 'bg-white font-black text-brand-950 shadow-xs'
                    : 'text-slate-600 hover:text-brand-900'
                }`}
              >
                {isAr ? 'الكل' : 'All'}
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('research-article')}
                className={`rounded-lg px-3 py-1.5 transition-all cursor-pointer ${
                  activeTab === 'research-article'
                    ? 'bg-white font-black text-emerald-800 shadow-xs'
                    : 'text-slate-600 hover:text-emerald-800'
                }`}
              >
                {isAr ? 'مقالة بحثية (Research Article)' : 'Research Article'}
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('review')}
                className={`rounded-lg px-3 py-1.5 transition-all cursor-pointer ${
                  activeTab === 'review'
                    ? 'bg-white font-black text-blue-800 shadow-xs'
                    : 'text-slate-600 hover:text-blue-800'
                }`}
              >
                {isAr ? 'مراجعة أدبيات (Review)' : 'Review'}
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('systematic-review')}
                className={`rounded-lg px-3 py-1.5 transition-all cursor-pointer ${
                  activeTab === 'systematic-review'
                    ? 'bg-white font-black text-amber-800 shadow-xs'
                    : 'text-slate-600 hover:text-amber-800'
                }`}
              >
                {isAr ? 'مراجعة منهجية (Systematic Review)' : 'Systematic Review'}
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('meta-analysis')}
                className={`rounded-lg px-3 py-1.5 transition-all cursor-pointer ${
                  activeTab === 'meta-analysis'
                    ? 'bg-white font-black text-purple-800 shadow-xs'
                    : 'text-slate-600 hover:text-purple-800'
                }`}
              >
                {isAr ? 'تحليل تلوي (Meta-analysis)' : 'Meta-analysis'}
              </button>
            </div>
          </div>

          <div className="space-y-6">

            {/* 1. RESEARCH ARTICLE */}
            {(activeTab === 'all' || activeTab === 'research-article') && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-3xl border border-emerald-500/30 bg-white p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <span className="flex size-10 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-700 text-white font-black text-lg shadow-md shadow-emerald-700/20">
                      1
                    </span>
                    <div>
                      <h4 className="text-lg sm:text-xl font-black text-brand-950">
                        {isAr ? 'فيما يخص المقالة البحثية (Research Article)' : 'Specifications for: Research Article'}
                      </h4>
                      <p className="text-xs font-extrabold text-emerald-700">
                        {isAr ? 'دراسة تطبيقية أو نظرية أصيلة مدعمة بالبيانات' : 'Original Empirical & Theoretical Research Study'}
                      </p>
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-black text-emerald-800 self-start sm:self-auto">
                    <span>{isAr ? 'عدد المراجع: لا يزيد عن (50) مرجع' : 'References: Max 50'}</span>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
                  {/* Left: Required Structure */}
                  <div className="lg:col-span-7 space-y-4">
                    <h5 className="text-xs font-black uppercase text-slate-500 tracking-wider flex items-center gap-1.5">
                      <Layers className="size-3.5 text-emerald-600" />
                      <span>{isAr ? 'يجب أن يشمل البحث الترتيب التالي:' : 'Mandatory Manuscript Structure:'}</span>
                    </h5>

                    <div className="flex flex-wrap gap-2">
                      {researchArticleSections.map((item, idx) => (
                        <span
                          key={item.en}
                          className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-50/70 border border-emerald-200/80 px-3 py-1.5 text-xs font-extrabold text-emerald-900 shadow-2xs"
                        >
                          <span className="size-4 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px] font-black">
                            {idx + 1}
                          </span>
                          <span>{item.label}</span>
                          {isAr && item.label !== item.en && (
                            <span className="text-[10px] font-medium text-emerald-700 font-mono">({item.en})</span>
                          )}
                        </span>
                      ))}
                    </div>

                    <div className="rounded-2xl bg-slate-50 p-4 border border-slate-200/70 mt-3">
                      <p className="text-xs font-bold text-slate-700 leading-relaxed">
                        <strong className="text-brand-950 font-black">
                          {isAr ? 'الحد الأقصى للمراجع: ' : 'Reference Ceiling: '}
                        </strong>
                        {isAr
                          ? 'يجب ألا يتجاوز عدد المراجع (50) مرجعاً علمياً موثقاً بدقة طبقاً للمعايير الأكاديمية.'
                          : 'Total cited references must not exceed 50 peer-reviewed sources.'}
                      </p>
                    </div>
                  </div>

                  {/* Right: Abstract Specifications */}
                  <div className="lg:col-span-5 rounded-2xl bg-gradient-to-br from-emerald-500/10 via-teal-500/5 to-transparent border border-emerald-500/20 p-5 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-black uppercase text-emerald-800 flex items-center gap-1.5">
                          <FileText className="size-3.5" />
                          {isAr ? 'محتوى الملخص (Abstract)' : 'Abstract Content'}
                        </span>
                        <span className="text-[11px] font-black bg-emerald-600 text-white px-2.5 py-0.5 rounded-md">
                          {isAr ? 'حتى 250 كلمة' : 'Max 250 words'}
                        </span>
                      </div>

                      <p className="text-xs font-bold text-slate-700 leading-relaxed mb-3">
                        {isAr
                          ? 'يحتوي الملخص فيما لا يزيد عن 250 كلمة على الآتي:'
                          : 'The abstract must strictly stay within 250 words and include:'}
                      </p>

                      <ul className="space-y-2 text-xs font-bold text-brand-950">
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="size-3.5 text-emerald-600 shrink-0" />
                          <span>{isAr ? 'مقدمة مختصرة (Short Introduction)' : 'Short Introduction'}</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="size-3.5 text-emerald-600 shrink-0" />
                          <span>{isAr ? 'تلخيص للمشكلة (Problem Summary)' : 'Problem Summary'}</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="size-3.5 text-emerald-600 shrink-0" />
                          <span>{isAr ? 'أهم الأهداف (Key Objectives)' : 'Key Objectives'}</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="size-3.5 text-emerald-600 shrink-0" />
                          <span>{isAr ? 'أهم النتائج (Main Findings)' : 'Main Findings'}</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="size-3.5 text-emerald-600 shrink-0" />
                          <span>{isAr ? 'الكلمات المفتاحية (Keywords: 3 - 5)' : 'Keywords (3 - 5 terms)'}</span>
                        </li>
                      </ul>
                    </div>

                    <div className="mt-4 pt-3 border-t border-emerald-500/20 text-[11px] text-emerald-900 font-semibold">
                      {isAr ? 'مراعاة الدقة والإيجاز والتركيز على القيمة التطبيقية للبحث.' : 'Focus on scientific clarity, novelty, and concise outcomes.'}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* 2. REVIEW */}
            {(activeTab === 'all' || activeTab === 'review') && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-3xl border border-blue-500/30 bg-white p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <span className="flex size-10 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white font-black text-lg shadow-md shadow-blue-700/20">
                      2
                    </span>
                    <div>
                      <h4 className="text-lg sm:text-xl font-black text-brand-950">
                        {isAr ? 'فيما يخص المقالة المرجعية (Review)' : 'Specifications for: Literature Review'}
                      </h4>
                      <p className="text-xs font-extrabold text-blue-700">
                        {isAr ? 'تحليل ونقد شامل للأدبيات العلمية المتاحة' : 'Comprehensive & Critical Analysis of Current Literature'}
                      </p>
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 border border-blue-200 px-3.5 py-1 text-xs font-black text-blue-800 self-start sm:self-auto">
                    <span>{isAr ? 'عدد المراجع: لا يزيد عن (70) مرجع' : 'References: Max 70'}</span>
                  </div>
                </div>

                <div className="mt-5 space-y-4">
                  {/* Objective */}
                  <div className="rounded-2xl bg-blue-50/60 p-4 border border-blue-200/70 flex items-start gap-3">
                    <BookOpen className="size-5 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <h5 className="text-xs font-black uppercase text-blue-900">
                        {isAr ? 'الهدف الأساسي' : 'Core Objective'}
                      </h5>
                      <p className="text-sm font-bold text-brand-950 mt-0.5">
                        {isAr
                          ? 'يُقدّم ملخصاً شاملاً للأبحاث الحالية حول موضوع مُحدّد.'
                          : 'Provides a comprehensive and critical synthesis of existing research on a formulated scientific topic.'}
                      </p>
                    </div>
                  </div>

                  {/* 4 Pillars of Review */}
                  <div>
                    <h5 className="text-xs font-black uppercase text-slate-500 tracking-wider mb-3">
                      {isAr ? 'يشمل البحث المكونات التالية:' : 'The Review Must Contain:'}
                    </h5>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                      <div className="rounded-2xl border border-slate-200 p-4 bg-slate-50/70">
                        <span className="text-xs font-black text-blue-700 block mb-1">
                          {isAr ? '1. الملخص (Abstract)' : '1. Abstract'}
                        </span>
                        <p className="text-xs text-slate-700 font-semibold leading-relaxed">
                          {isAr
                            ? 'ملخّص مُنظّم (لا يزيد عن 250 كلمة) يُحدد غرض المراجعة، ونتائجها الرئيسية، وخاتمتها.'
                            : 'Structured abstract (max 250 words) defining the review purpose, primary synthesized outcomes, and conclusion.'}
                        </p>
                      </div>

                      <div className="rounded-2xl border border-slate-200 p-4 bg-slate-50/70">
                        <span className="text-xs font-black text-blue-700 block mb-1">
                          {isAr ? '2. المقدمة (Introduction)' : '2. Introduction'}
                        </span>
                        <p className="text-xs text-slate-700 font-semibold leading-relaxed">
                          {isAr
                            ? 'تُقدّم معلومات أساسية وتوضح بدقة غرض المراجعة ونطاقها العلمي.'
                            : 'Furnishes fundamental context, clearly delineating the purpose and scientific boundaries of the review.'}
                        </p>
                      </div>

                      <div className="rounded-2xl border border-slate-200 p-4 bg-slate-50/70">
                        <span className="text-xs font-black text-blue-700 block mb-1">
                          {isAr ? '3. متن المراجعة (Body of Review)' : '3. Body of Review'}
                        </span>
                        <p className="text-xs text-slate-700 font-semibold leading-relaxed">
                          {isAr
                            ? 'مُنظّم موضوعياً أو زمنياً لمناقشة الأدبيات. يجب استخدام العناوين الفرعية لتوجيه القارئ.'
                            : 'Arranged thematically or chronologically. Subheadings must be utilized to navigate the reader through literature streams.'}
                        </p>
                      </div>

                      <div className="rounded-2xl border border-slate-200 p-4 bg-slate-50/70">
                        <span className="text-xs font-black text-blue-700 block mb-1">
                          {isAr ? '4. الخاتمة (Conclusion)' : '4. Conclusion'}
                        </span>
                        <p className="text-xs text-slate-700 font-semibold leading-relaxed">
                          {isAr
                            ? 'تُلخّص النقاط الرئيسية وتقترح اتجاهات بحثية مستقبلية واعدة.'
                            : 'Recapitulates primary findings and proposes fertile prospective research trajectories.'}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Main Requirement Alert */}
                  <div className="rounded-2xl bg-amber-500/10 border-2 border-amber-500/30 p-4 flex items-start gap-3">
                    <AlertCircle className="size-5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-black uppercase text-amber-900 block mb-0.5">
                        {isAr ? 'المتطلب الرئيسي للمراجعة' : 'Primary Requirement'}
                      </span>
                      <p className="text-xs sm:text-sm font-bold text-amber-950 leading-relaxed">
                        {isAr
                          ? 'يجب أن تُظهر المراجعة فهماً عميقاً للموضوع وأن تُقدّم تحليلاً نقدياً للأدبيات المتاحة، وليس مجرد مُلخّص سردي.'
                          : 'The review must exhibit deep subject mastery and deliver a critical analysis of literature—not merely a descriptive narrative summary.'}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* 3. SYSTEMATIC REVIEW */}
            {(activeTab === 'all' || activeTab === 'systematic-review') && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-3xl border border-amber-500/30 bg-white p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <span className="flex size-10 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-600 to-orange-700 text-white font-black text-lg shadow-md shadow-amber-700/20">
                      3
                    </span>
                    <div>
                      <h4 className="text-lg sm:text-xl font-black text-brand-950">
                        {isAr ? 'فيما يخص المراجعة المنهجية (Systematic Review)' : 'Specifications for: Systematic Review'}
                      </h4>
                      <p className="text-xs font-extrabold text-amber-700">
                        {isAr ? 'منهجية معيارية شفافة وقابلة للتكرار' : 'Exhaustive, Protocol-Driven & Transparent Synthesis'}
                      </p>
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 border border-amber-200 px-3.5 py-1 text-xs font-black text-amber-900 self-start sm:self-auto">
                    <span>{isAr ? 'المراجع: قائمة كاملة بجميع الدراسات' : 'References: All included studies'}</span>
                  </div>
                </div>

                <div className="mt-5 space-y-4">
                  {/* Objective */}
                  <div className="rounded-2xl bg-amber-50/60 p-4 border border-amber-200/70 flex items-start gap-3">
                    <Search className="size-5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <h5 className="text-xs font-black uppercase text-amber-900">
                        {isAr ? 'المنهجية والمعايير' : 'Methodological Standards'}
                      </h5>
                      <p className="text-sm font-bold text-brand-950 mt-0.5">
                        {isAr
                          ? 'تُستخدم منهجية دقيقة وواضحة لتحديد جميع الأبحاث ذات الصلة بمسألة مُحدّدة، واختيارها، وتقييمها نقدياً.'
                          : 'Employs an exhaustive, reproducible methodology to identify, screen, and critically appraise all relevant evidence addressing a specific question.'}
                      </p>
                    </div>
                  </div>

                  {/* Components */}
                  <div>
                    <h5 className="text-xs font-black uppercase text-slate-500 tracking-wider mb-2">
                      {isAr ? 'يشمل البحث الهيكل الآتي:' : 'Manuscript Components:'}
                    </h5>

                    <div className="rounded-2xl border border-slate-200 p-4 bg-slate-50/70 space-y-3">
                      <div className="flex flex-wrap gap-2 text-xs font-extrabold">
                        {['Title', 'Abstract', 'Keywords', 'Introduction', 'Results', 'Discussion', 'Conclusion', 'References'].map((t) => (
                          <span key={t} className="rounded-lg bg-white border border-slate-200 px-2.5 py-1 text-brand-900 shadow-2xs">
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* Explicit Methods Breakdown */}
                      <div className="rounded-xl bg-amber-50 border border-amber-200 p-3">
                        <span className="text-xs font-black text-amber-900 block mb-2">
                          {isAr
                            ? 'قسم المنهجية (Methods) يجب أن يشتمل بالضرورة على الأقسام الأربعة التالية:'
                            : 'The Methods section must explicitly contain the following four components:'}
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
                          <div className="bg-white rounded-lg p-2.5 border border-amber-200/80 text-center shadow-2xs">
                            <span className="block text-xs font-black text-brand-950">
                              {isAr ? 'استراتيجية البحث' : 'Search Strategy'}
                            </span>
                            <span className="text-[10px] text-slate-500 font-mono">Search Strategy</span>
                          </div>
                          <div className="bg-white rounded-lg p-2.5 border border-amber-200/80 text-center shadow-2xs">
                            <span className="block text-xs font-black text-brand-950">
                              {isAr ? 'اختيار الدراسات' : 'Study Selection'}
                            </span>
                            <span className="text-[10px] text-slate-500 font-mono">Study Selection</span>
                          </div>
                          <div className="bg-white rounded-lg p-2.5 border border-amber-200/80 text-center shadow-2xs">
                            <span className="block text-xs font-black text-brand-950">
                              {isAr ? 'استخراج البيانات' : 'Data Extraction'}
                            </span>
                            <span className="text-[10px] text-slate-500 font-mono">Data Extraction</span>
                          </div>
                          <div className="bg-white rounded-lg p-2.5 border border-amber-200/80 text-center shadow-2xs">
                            <span className="block text-xs font-black text-brand-950">
                              {isAr ? 'تقييم خطر التحيز' : 'Risk of Bias Assessment'}
                            </span>
                            <span className="text-[10px] text-slate-500 font-mono">Risk of Bias</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Main Requirement */}
                  <div className="rounded-2xl bg-amber-500/10 border-2 border-amber-500/30 p-4 flex items-start gap-3">
                    <CheckCircle2 className="size-5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-black uppercase text-amber-900 block mb-0.5">
                        {isAr ? 'المتطلب الرئيسي (Reproducibility)' : 'Primary Requirement'}
                      </span>
                      <p className="text-xs sm:text-sm font-bold text-amber-950 leading-relaxed">
                        {isAr
                          ? 'يجب أن تكون قابلة للتكرار (Reproducible)، ويجب أن تكون جميع الطرق والخطوات شفافة وموثقة بوضوح تام.'
                          : 'The review must be strictly reproducible. All search queries, databases, screening criteria, and tools must be transparently documented.'}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* 4. META-ANALYSIS */}
            {(activeTab === 'all' || activeTab === 'meta-analysis') && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-3xl border border-purple-500/30 bg-white p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <span className="flex size-10 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 to-fuchsia-700 text-white font-black text-lg shadow-md shadow-purple-700/20">
                      4
                    </span>
                    <div>
                      <h4 className="text-lg sm:text-xl font-black text-brand-950">
                        {isAr ? 'فيما يخص التحليل البعدي / التلوي (Meta-analysis)' : 'Specifications for: Meta-analysis'}
                      </h4>
                      <p className="text-xs font-extrabold text-purple-700">
                        {isAr ? 'دمج إحصائي كمي لنتائج دراسات متعددة' : 'Quantitative Statistical Synthesis of Multi-Study Outcomes'}
                      </p>
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-purple-50 border border-purple-200 px-3.5 py-1 text-xs font-black text-purple-800 self-start sm:self-auto">
                    <span>{isAr ? 'يُقدّم بالتزامن مع Systematic review' : 'Paired with Systematic Review'}</span>
                  </div>
                </div>

                <div className="mt-5 space-y-4">
                  {/* Definition */}
                  <div className="rounded-2xl bg-purple-50/60 p-4 border border-purple-200/70 flex items-start gap-3">
                    <BarChart3 className="size-5 text-purple-600 shrink-0 mt-0.5" />
                    <div>
                      <h5 className="text-xs font-black uppercase text-purple-900">
                        {isAr ? 'الهدف والشرط الأساسي' : 'Core Purpose & Prerequisite'}
                      </h5>
                      <p className="text-sm font-bold text-brand-950 mt-0.5">
                        {isAr
                          ? 'يُقدّم دمج نتائج دراسات متعددة، ويجب تقديمه بالضرورة بالتزامن مع مراجعة منهجية (Systematic review).'
                          : 'Delivers quantitative aggregation of multiple study findings. Must be submitted concurrently alongside a systematic review.'}
                      </p>
                    </div>
                  </div>

                  {/* Components */}
                  <div>
                    <h5 className="text-xs font-black uppercase text-slate-500 tracking-wider mb-2">
                      {isAr ? 'يشمل البحث التفاصيل الإلزامية الآتية:' : 'Manuscript Components:'}
                    </h5>

                    <div className="rounded-2xl border border-slate-200 p-4 bg-slate-50/70 space-y-3">
                      <div className="flex flex-wrap gap-2 text-xs font-extrabold">
                        {['Title', 'Abstract', 'Keywords', 'Introduction', 'Discussion', 'Conclusion', 'References'].map((t) => (
                          <span key={t} className="rounded-lg bg-white border border-slate-200 px-2.5 py-1 text-brand-900 shadow-2xs">
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* Methods & Results Highlights */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="rounded-xl bg-purple-50 border border-purple-200 p-3.5">
                          <span className="text-xs font-black text-purple-900 block mb-1">
                            {isAr ? 'المنهجية (Methods) تتضمن:' : 'Methods must include:'}
                          </span>
                          <p className="text-xs text-purple-950 font-bold leading-relaxed">
                            Search Strategy, Study Selection, Data Extraction, Risk of Bias Assessment, Statistical analysis.
                          </p>
                        </div>

                        <div className="rounded-xl bg-purple-50 border border-purple-200 p-3.5">
                          <span className="text-xs font-black text-purple-900 block mb-1">
                            {isAr ? 'النتائج (Results) تتضمن:' : 'Results must feature:'}
                          </span>
                          <p className="text-xs text-purple-950 font-bold leading-relaxed">
                            {isAr
                              ? 'مخططات Forest plots وإحصاءات عدم التجانس / التباين (heterogeneity statistics).'
                              : 'Forest plots and heterogeneity statistics (I², Cochran Q).'}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Main Requirement */}
                  <div className="rounded-2xl bg-purple-500/10 border-2 border-purple-500/30 p-4 flex items-start gap-3">
                    <CheckCircle2 className="size-5 text-purple-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-black uppercase text-purple-900 block mb-0.5">
                        {isAr ? 'المتطلب الرئيسي' : 'Primary Requirement'}
                      </span>
                      <p className="text-xs sm:text-sm font-bold text-purple-950 leading-relaxed">
                        {isAr
                          ? 'يجب أن يتضمن التحليل التلوي تجميعاً إحصائياً للبيانات من دراستين أو أكثر على الأقل تم تحديدها من خلال مراجعة منهجية.'
                          : 'Meta-analysis must feature statistical pooling of numerical data from at least two or more studies identified via a systematic review.'}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

          </div>
        </section>

      </Container>
    </div>
  );
}
