import React from 'react';
import { motion } from 'framer-motion';
import {
  Award,
  BookOpen,
  Calendar,
  CheckCircle2,
  ExternalLink,
  Flame,
  Globe2,
  GraduationCap,
  Lightbulb,
  MapPin,
  Medal,
  Presentation,
  ShieldCheck,
  Sparkles,
  Target,
  Trophy,
  Users
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Container from '../../components/ui/Container';
import { useTranslation } from '../../hooks/useTranslation';
import logo from '../../assets/images/logo.jpeg';

export default function About() {
  const { language } = useTranslation();
  const isAr = language === 'ar';

  const objectives = [
    {
      id: 1,
      icon: GraduationCap,
      title: isAr ? 'إعداد جيل من الباحثين المتميزين' : 'Preparing a Generation of Distinguished Researchers',
      desc: isAr
        ? 'تدريب الطلاب على إجراء البحوث ذات المستوى الرفيع مما يؤهلهم للمشاركة في مجال البحث والنشر العلمي، ويعزز قدراتهم على العمل الجماعي والقيادي والتنافسي.'
        : 'Training students to conduct high-caliber research, qualifying them for publication, and fostering teamwork, leadership, and competitiveness.',
      color: 'from-emerald-600 to-teal-700',
      bgLight: 'bg-emerald-50/80',
      borderAccent: 'border-emerald-200',
    },
    {
      id: 2,
      icon: BookOpen,
      title: isAr ? 'إثراء مجال البحث العلمي في الجامعة' : 'Enriching University Scientific Research',
      desc: isAr
        ? 'الارتقاء بمستوى التعليم الجامعي من خلال مخرجات بحثية مبتكرة تنعكس إيجابياً على المنظومة الأكاديمية والعملية بالجامعة.'
        : 'Elevating university education standards through innovative research outputs that positively reflect on academic and practical systems.',
      color: 'from-blue-600 to-indigo-700',
      bgLight: 'bg-blue-50/80',
      borderAccent: 'border-blue-200',
    },
    {
      id: 3,
      icon: Lightbulb,
      title: isAr ? 'مواكبة التقنيات الرقمية الحديثة' : 'Keeping Pace with Digital Technologies',
      desc: isAr
        ? 'مواكبة التقدم في مجالات التقنيات الرقمية والعمل على تفعيلها المباشر في تنمية مهارات البحث العلمي والابتكار الطلابي.'
        : 'Keeping up with digital technology advances and actively applying them to advance scientific research skills and student innovation.',
      color: 'from-amber-600 to-orange-700',
      bgLight: 'bg-amber-50/80',
      borderAccent: 'border-amber-200',
    },
    {
      id: 4,
      icon: Users,
      title: isAr ? 'تبادل الآراء ومناقشة الابتكارات' : 'Exchanging Ideas & Discussing Innovations',
      desc: isAr
        ? 'إتاحة منصة تفاعلية حية لتبادل الآراء والأفكار العلمية ومناقشة الابتكارات الطلابية المقدمة أمام لجان تحكيم علمية متخصصة.'
        : 'Providing an interactive platform to exchange ideas and discuss student innovations before specialized academic judging panels.',
      color: 'from-purple-600 to-fuchsia-700',
      bgLight: 'bg-purple-50/80',
      borderAccent: 'border-purple-200',
    },
  ];

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
            className="relative overflow-hidden rounded-3xl border-2 border-amber-500/35 bg-[#022c20] p-6 sm:p-10 text-white shadow-2xl"
          >
            <div className="absolute -top-24 -right-24 size-72 rounded-full bg-amber-500/25 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 size-72 rounded-full bg-emerald-400/20 blur-3xl pointer-events-none" />

            <div
              className="absolute inset-0 opacity-25 pointer-events-none"
              style={{
                backgroundImage: `radial-gradient(rgba(245, 158, 11, 0.45) 1.5px, transparent 1.5px)`,
                backgroundSize: '18px 18px',
              }}
            />

            <div className="relative z-10 flex flex-col items-center text-center md:flex-row md:items-center md:justify-between md:text-start gap-6">
              <div className="space-y-3 max-w-2xl order-2 md:order-1">
                <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-500/20 px-3.5 py-1 text-xs font-black text-amber-300 backdrop-blur-md shadow-xs">
                  <Sparkles className="size-3.5 text-amber-400" />
                  <span>{isAr ? 'وحدة الأبحاث الطلابية • جامعة المنوفية الأهلية' : 'Student Research Unit • MNU'}</span>
                </div>

                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight">
                  {isAr ? (
                    <>
                      <span>المؤتمر الطلابي العلمي الأول الدولي</span>{' '}
                      <span className="text-amber-400 block sm:inline">"علماء المستقبل"</span>
                    </>
                  ) : (
                    <>
                      <span>1st International Student Scientific Conference</span>{' '}
                      <span className="text-amber-400 block sm:inline">"Future Scientists"</span>
                    </>
                  )}
                </h1>

                <p className="text-xs sm:text-sm text-amber-100/90 font-medium leading-relaxed">
                  {isAr
                    ? 'في ضوء حرص الدولة على تشجيع الباحثين، تعقد جامعة المنوفية الأهلية هذا اللقاء العلمي الطلابي الرائد لتكريم العقول الشابة وعرض الابتكارات العلمية المتميزة.'
                    : 'Reflecting the national commitment to empowering researchers, MNU hosts this premier scientific gathering to foster innovation and honor outstanding student research.'}
                </p>

                {/* Event Highlights Chips */}
                <div className="flex flex-wrap items-center gap-2.5 pt-1 text-xs font-extrabold text-amber-200">
                  <div className="flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1.5 border border-white/10 backdrop-blur-sm">
                    <Calendar className="size-3.5 text-amber-400" />
                    <span>{isAr ? '1 أغسطس 2026' : 'August 1, 2026'}</span>
                  </div>
                  <div className="flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1.5 border border-white/10 backdrop-blur-sm">
                    <MapPin className="size-3.5 text-amber-400" />
                    <span>{isAr ? 'حضورياً بمقر الجامعة' : 'In-Person at MNU Campus'}</span>
                  </div>
                </div>
              </div>

              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="shrink-0 relative order-1 md:order-2"
              >
                <div className="absolute -inset-3 rounded-full bg-amber-400/25 blur-md pointer-events-none" />
                <div className="relative size-24 sm:size-28 md:size-32 shrink-0 overflow-hidden rounded-full border-4 border-amber-400/80 bg-white p-1.5 shadow-2xl">
                  <img
                    src={logo}
                    alt="جامعة المنوفية الأهلية"
                    className="size-full rounded-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* --- MAIN BODY CONTENT --- */}
      <Container className="mt-10 space-y-12 max-w-6xl">
        
        {/* --- SECTION 1: فكرة المؤتمر --- */}
        <section className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-10 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-emerald-100/60 to-transparent rounded-bl-full pointer-events-none" />
          
          <div className="flex items-center gap-3 mb-4">
            <div className="grid size-11 place-items-center rounded-2xl bg-brand-700 text-white shadow-md shadow-brand-900/20">
              <Globe2 className="size-6" />
            </div>
            <div>
              <span className="block text-[11px] font-black text-amber-600 uppercase tracking-wider">
                {isAr ? 'أولاً: الرؤية والانطلاقة' : 'Part I: Concept & Vision'}
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-brand-950">
                {isAr ? 'فكرة المؤتمر العلمي' : 'Conference Concept'}
              </h2>
            </div>
          </div>

          <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed text-sm sm:text-base font-medium space-y-3">
            <p>
              {isAr
                ? 'في ضوء حرص الدولة على تشجيع الباحثين، تعقد جامعة المنوفية الأهلية المؤتمر الطلابي العلمي الأول الدولي "علماء المستقبل" لطلاب الجامعة، وهو لقاء علمي ينظمه وحدة الأبحاث الطلابية وذلك في 1 أغسطس 2026 والذي سيُعقد حضورياً في مقر الجامعة.'
                : 'In light of the state’s commitment to encouraging researchers, Menoufia National University is convening the 1st International Student Scientific Conference "Future Scientists" for university students. This prestigious scientific gathering is organized by the Student Research Unit on August 1, 2026, held in-person on campus.'}
            </p>
            <p>
              {isAr
                ? 'يقدم فيه الطلاب الأبحاث العلمية وفقاً للتخصصات المعلنة، ويقوم الطلاب بعرض أبحاثهم في المؤتمر، كما سيتم إقامة معرض علمي لأعمال الطلاب، وسوف تُقدم جوائز قيمة للبحوث والأعمال العلمية المتميزة.'
                : 'Students submit and present their scientific papers across declared disciplines, followed by a dedicated student research exhibition showcasing prototypes and creative works, with generous awards granted for outstanding scientific achievements.'}
            </p>
          </div>

          {/* Key Facts Banner */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-slate-100">
            <div className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-4">
              <span className="block text-[11px] font-bold text-slate-500">{isAr ? 'الجهة المنظمة:' : 'Organizer:'}</span>
              <span className="text-xs sm:text-sm font-black text-brand-950 mt-0.5 block">{isAr ? 'وحدة الأبحاث الطلابية' : 'Student Research Unit'}</span>
            </div>
            <div className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-4">
              <span className="block text-[11px] font-bold text-slate-500">{isAr ? 'تاريخ الانعقاد:' : 'Event Date:'}</span>
              <span className="text-xs sm:text-sm font-black text-brand-950 mt-0.5 block">{isAr ? '1 أغسطس 2026' : 'August 1, 2026'}</span>
            </div>
            <div className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-4">
              <span className="block text-[11px] font-bold text-slate-500">{isAr ? 'صيغة الحضور:' : 'Format:'}</span>
              <span className="text-xs sm:text-sm font-black text-brand-950 mt-0.5 block">{isAr ? 'حضورياً في مقر الجامعة' : 'In-Person at MNU Campus'}</span>
            </div>
          </div>
        </section>

        {/* --- SECTION 2: أهداف المؤتمر --- */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="grid size-11 place-items-center rounded-2xl bg-amber-500 text-white shadow-md shadow-amber-500/20">
              <Target className="size-6" />
            </div>
            <div>
              <span className="block text-[11px] font-black text-amber-600 uppercase tracking-wider">
                {isAr ? 'ثانياً: الرسالة والغايات' : 'Part II: Goals'}
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-brand-950">
                {isAr ? 'أهداف المؤتمر' : 'Conference Objectives'}
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {objectives.map((obj) => {
              const Icon = obj.icon;
              return (
                <div
                  key={obj.id}
                  className={`rounded-3xl border ${obj.borderAccent} ${obj.bgLight} p-6 sm:p-7 shadow-sm transition-all hover:shadow-md flex flex-col justify-between`}
                >
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`grid size-10 place-items-center rounded-xl bg-gradient-to-r ${obj.color} text-white shadow-sm`}>
                        <Icon className="size-5" />
                      </div>
                      <span className="text-xs font-black text-slate-500">
                        {isAr ? `الهدف رقم ${obj.id}` : `Goal 0${obj.id}`}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-black text-brand-950 mb-2">
                      {obj.title}
                    </h3>
                    
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                      {obj.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* --- SECTION 3: جوائز المؤتمر --- */}
        <section className="rounded-3xl border-2 border-amber-400/40 bg-gradient-to-b from-amber-50/50 via-white to-amber-50/30 p-6 sm:p-10 shadow-lg relative overflow-hidden">
          <div className="flex items-center gap-3 mb-6">
            <div className="grid size-11 place-items-center rounded-2xl bg-amber-600 text-white shadow-md shadow-amber-600/20">
              <Trophy className="size-6" />
            </div>
            <div>
              <span className="block text-[11px] font-black text-amber-700 uppercase tracking-wider">
                {isAr ? 'ثالثاً: التكريم والتقدير' : 'Part III: Awards & Recognition'}
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-brand-950">
                {isAr ? 'جوائز المؤتمر والأعمال المتميزة' : 'Conference Awards & Prizes'}
              </h2>
            </div>
          </div>

          {/* Categories Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            
            {/* Category 1: Best Paper */}
            <div className="rounded-2xl border border-amber-300 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-2 text-amber-700 mb-2 font-black text-xs">
                <Medal className="size-4" />
                <span>{isAr ? 'جوائز أفضل بحث' : 'Best Research Awards'}</span>
              </div>
              <h4 className="text-base font-black text-brand-950 mb-1">
                {isAr ? 'عدد (3) جوائز للأبحاث' : '3 Best Paper Awards'}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {isAr ? 'مركز أول — مركز ثاني — مركز ثالث وفق معايير التقييم الأكاديمي.' : '1st, 2nd, and 3rd places based on peer-review evaluation.'}
              </p>
            </div>

            {/* Category 2: Best Poster / Presentation */}
            <div className="rounded-2xl border border-blue-300 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-2 text-blue-700 mb-2 font-black text-xs">
                <Presentation className="size-4" />
                <span>{isAr ? 'أفضل عرض تقديمي / بوستر' : 'Best Presentation / Poster'}</span>
              </div>
              <h4 className="text-base font-black text-brand-950 mb-1">
                {isAr ? 'عدد (3) جوائز للعروض' : '3 Presentation Awards'}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {isAr ? 'أول — ثاني — ثالث لأفضل إلقاء وعرض علمي للملصقات والبوسترات.' : '1st, 2nd, and 3rd for best oral presentation and poster display.'}
              </p>
            </div>

            {/* Category 3: Scientific Innovation */}
            <div className="rounded-2xl border border-emerald-300 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-2 text-emerald-700 mb-2 font-black text-xs">
                <Flame className="size-4" />
                <span>{isAr ? 'أفضل الابتكارات العلمية' : 'Best Scientific Innovation'}</span>
              </div>
              <h4 className="text-base font-black text-brand-950 mb-1">
                {isAr ? 'عدد (1) جائزة ابتكار' : '1 Innovation Award'}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {isAr ? 'يشترط تقديم نموذج أولي تطبيقي للابتكار (Prototype).' : 'Requires presenting a working functional Prototype.'}
              </p>
            </div>

          </div>

          {/* Financial Values Table / Grid */}
          <div className="rounded-2xl border border-amber-300/80 bg-white p-5 sm:p-6 shadow-sm">
            <h4 className="text-xs font-black uppercase text-amber-800 tracking-wider mb-4">
              {isAr ? 'القيمة المالية للجوائز المعتمدة:' : 'Official Award Monetary Values:'}
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="rounded-xl border border-amber-200 bg-amber-50/70 p-4 text-center">
                <span className="block text-[11px] font-bold text-amber-800">
                  {isAr ? 'المركز الأول وجائزة الابتكار' : '1st Place & Innovation Award'}
                </span>
                <span className="text-xl sm:text-2xl font-black text-brand-950 mt-1 block">
                  1200 {isAr ? 'جنيهاً مصرياً' : 'EGP'}
                </span>
                <span className="text-[10px] text-slate-500 font-semibold">{isAr ? 'فقط لا غير' : 'Only'}</span>
              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 text-center">
                <span className="block text-[11px] font-bold text-slate-700">
                  {isAr ? 'المركز الثاني' : '2nd Place Award'}
                </span>
                <span className="text-xl sm:text-2xl font-black text-brand-950 mt-1 block">
                  1000 {isAr ? 'جنيهاً مصرياً' : 'EGP'}
                </span>
                <span className="text-[10px] text-slate-500 font-semibold">{isAr ? 'فقط لا غير' : 'Only'}</span>
              </div>

              <div className="rounded-xl border border-amber-200/60 bg-amber-50/40 p-4 text-center">
                <span className="block text-[11px] font-bold text-amber-800">
                  {isAr ? 'المركز الثالث' : '3rd Place Award'}
                </span>
                <span className="text-xl sm:text-2xl font-black text-brand-950 mt-1 block">
                  800 {isAr ? 'جنيهاً مصرياً' : 'EGP'}
                </span>
                <span className="text-[10px] text-slate-500 font-semibold">{isAr ? 'فقط لا غير' : 'Only'}</span>
              </div>
            </div>

            {/* Participation Certificate Note */}
            <div className="mt-5 rounded-xl border border-emerald-300 bg-emerald-50/80 p-4 flex items-center gap-3">
              <CheckCircle2 className="size-6 text-emerald-700 shrink-0" />
              <p className="text-xs sm:text-sm font-black text-emerald-950">
                {isAr
                  ? 'سيكون هناك شهادة مشاركة معتمدة لجميع الطلاب المشاركين في المؤتمر.'
                  : 'An official verified Certificate of Participation will be awarded to all participating students.'}
              </p>
            </div>
          </div>

        </section>

        {/* --- FAST ACTION NAVIGATION FOOTER --- */}
        <section className="rounded-3xl border border-slate-200 bg-gradient-to-r from-brand-950 to-brand-900 p-8 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-start">
            <h3 className="text-lg sm:text-xl font-black text-white">
              {isAr ? 'هل أنت مستعد للمشاركة بأبحاثك؟' : 'Ready to Submit Your Research?'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              {isAr
                ? 'تعرف على الشروط وضوابط كتابة المقالات، أو قم بملء استمارة المشاركة الإلكترونية مباشرة.'
                : 'Explore guidelines and submission criteria, or fill out the official online participation form.'}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://forms.office.com/r/Cnbi3kRcdD"
              target="_blank"
              rel="noopener noreferrer"
              className="h-12 px-6 rounded-xl bg-amber-400 hover:bg-amber-300 text-brand-950 font-black text-xs shadow-lg shadow-amber-400/20 flex items-center gap-2 transition-all cursor-pointer"
            >
              <span>{isAr ? 'استمارة المشاركة الرسمية' : 'Official Submission Form'}</span>
              <ExternalLink className="size-4" />
            </a>

            <Link
              to="/guidelines"
              className="h-12 px-6 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-extrabold text-xs flex items-center gap-2 transition-all"
            >
              <span>{isAr ? 'شروط وإرشادات الأبحاث' : 'Author Guidelines'}</span>
            </Link>
          </div>
        </section>

      </Container>
    </div>
  );
}
