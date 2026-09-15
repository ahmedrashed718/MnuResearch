import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Building2,
  CheckCircle2,
  ChevronDown,
  Layers,
  Mail,
  Phone,
  Ticket,
  User,
  MapPin,
  Calendar,
  BadgeCheck,
  Printer,
  ExternalLink,
  Send
} from 'lucide-react';
import Container from '../../components/ui/Container';
import { useTranslation } from '../../hooks/useTranslation';

// Official University Logo
import logo from '../../assets/images/logo.jpeg';

export default function Registration() {
  const { language, t } = useTranslation();
  const isAr = language === 'ar';

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [registrationCode, setRegistrationCode] = useState('');

  // Form Fields for Attendance Registration only
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    sameForWhatsApp: true,
    email: '',
    college: 'computers',
    level: 'level3',
  });

  // Colleges List
  const colleges = [
    { id: 'computers', nameAr: 'كلية الحاسبات والذكاء الاصطناعي', nameEn: 'Faculty of Computers & AI' },
    { id: 'engineering', nameAr: 'كلية الهندسة', nameEn: 'Faculty of Engineering' },
    { id: 'medicine', nameAr: 'كلية الطب البشري', nameEn: 'Faculty of Medicine' },
    { id: 'health', nameAr: 'كلية تكنولوجيا العلوم الصحية', nameEn: 'Faculty of Health Sciences' },
    { id: 'physio', nameAr: 'كلية العلاج الطبيعي', nameEn: 'Faculty of Physical Therapy' },
    { id: 'nursing', nameAr: 'كلية التمريض', nameEn: 'Faculty of Nursing' },
    { id: 'business', nameAr: 'كلية العلوم الإدارية والتجارة', nameEn: 'Faculty of Business Administration' },
    { id: 'other', nameAr: 'كلية / جامعة أخرى', nameEn: 'Other Faculty / University' },
  ];

  // Levels List
  const levels = [
    { id: 'level1', nameAr: 'المستوى / الفرقة الأولى', nameEn: 'Level 1' },
    { id: 'level2', nameAr: 'المستوى / الفرقة الثانية', nameEn: 'Level 2' },
    { id: 'level3', nameAr: 'المستوى / الفرقة الثالثة', nameEn: 'Level 3' },
    { id: 'level4', nameAr: 'المستوى / الفرقة الرابعة (التخرج)', nameEn: 'Level 4 (Senior)' },
    { id: 'postgraduate', nameAr: 'دراسات عليا / خريج', nameEn: 'Postgraduate / Alumni' },
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (!formData.firstName.trim() || !formData.lastName.trim() || !formData.phoneNumber.trim() || !formData.email.trim()) {
      alert(isAr ? 'يرجى إكمال جميع الحقول المطلوبة' : 'Please complete all required fields');
      return;
    }
    const generatedCode = 'MNU-ATTEND-2026-' + Math.floor(100000 + Math.random() * 900000);
    setRegistrationCode(generatedCode);
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReset = () => {
    setFormData({
      firstName: '',
      lastName: '',
      phoneNumber: '',
      sameForWhatsApp: true,
      email: '',
      college: 'computers',
      level: 'level3',
    });
    setIsSubmitted(false);
    setRegistrationCode('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePrint = () => {
    window.print();
  };

  const selectedCollege = colleges.find((c) => c.id === formData.college);
  const selectedLevel = levels.find((l) => l.id === formData.level);

  return (
    <div className="min-h-screen bg-[#f8fbf9] pt-3 sm:pt-6 pb-24 selection:bg-brand-500 selection:text-white print:min-h-0 print:bg-white print:p-0 print:m-0">
      
      {/* --- HERO BANNER (HIDDEN ON PRINT) --- */}
      <section className="py-1 sm:py-3 no-print">
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
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="shrink-0 relative order-1 md:order-2"
              >
                <div className="absolute -inset-3 rounded-full bg-amber-400/25 blur-md pointer-events-none" />
                <div className="relative size-20 sm:size-24 md:size-28 shrink-0 overflow-hidden rounded-full border-4 border-amber-400/80 bg-white p-1 shadow-2xl">
                  <img
                    src={logo}
                    alt={t('universityName')}
                    className="size-full rounded-full object-cover"
                  />
                </div>
              </motion.div>

              <div className="space-y-2 max-w-xl order-2 md:order-1">
                <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-500/20 px-3.5 py-1 text-xs font-black text-amber-300 backdrop-blur-md shadow-xs">
                  <Ticket className="size-3.5 text-amber-400" />
                  <span>{isAr ? 'نموذج تسجيل الحضور' : 'Attendance Registration Form'}</span>
                </div>

                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight">
                  {isAr ? (
                    <>
                      <span>تسجيل حضور</span>{' '}
                      <span className="text-amber-400">المؤتمر العلمي الأول</span>
                    </>
                  ) : (
                    <>
                      <span>Attendance Registration for</span>{' '}
                      <span className="text-amber-400">1st Student Research Conf</span>
                    </>
                  )}
                </h1>

                <p className="text-xs sm:text-sm text-amber-100/90 font-medium">
                  {isAr
                    ? 'سجّل بياناتك لحضور فعاليات وجلسات المؤتمر وتأكيد حجز مقعدك واستلام بطاقة الحضور.'
                    : 'Register your details to attend conference sessions, reserve your seat, and receive your attendance pass.'}
                </p>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* --- CONTENT CONTAINER --- */}
      <Container className="mt-8 print:m-0 print:p-0 print:max-w-full">
        {isSubmitted ? (
          /* --- PASS CARD VIEW --- */
          <div className="mx-auto max-w-xl print:max-w-xl print:mx-auto">
            
            {/* Screen-Only Header Notice */}
            <div className="text-center no-print mb-6">
              <div className="mx-auto grid size-16 place-items-center rounded-full bg-emerald-100 text-emerald-600 mb-3 shadow-inner">
                <CheckCircle2 className="size-8" />
              </div>

              <h2 className="text-2xl font-black text-brand-950">
                {isAr ? `أهلاً بك، ${formData.firstName} ${formData.lastName}` : `Welcome, ${formData.firstName} ${formData.lastName}`}
              </h2>
              <p className="mt-1 text-xs text-slate-600 font-medium">
                {isAr ? 'تم تأكيد تسجيل حضورك في المؤتمر بنجاح!' : 'Your attendance registration has been confirmed successfully!'}
              </p>
            </div>

            {/* --- THE CARD (EXACT VIEW ON SCREEN & IN PRINT) --- */}
            <div
              style={{ backgroundColor: '#022c20' }}
              className="rounded-3xl border-2 border-amber-500/40 bg-[#022c20] p-6 sm:p-7 text-white text-start shadow-2xl relative overflow-hidden print:shadow-none print:border-amber-600/70 print:bg-[#022c20] print:text-white print:m-0 print:w-full print-exact"
            >
              <div className="absolute -top-12 -right-12 size-36 rounded-full bg-amber-500/15 blur-2xl pointer-events-none no-print" />
              
              {/* Card Top Header */}
              <div className="flex items-center justify-between border-b border-white/15 pb-4">
                <div className="flex items-center gap-3">
                  <img src={logo} alt="" className="size-10 sm:size-11 rounded-full bg-white p-0.5 shadow-sm shrink-0" />
                  <div>
                    <span className="block text-xs sm:text-sm font-bold text-amber-300">جامعة المنوفية الأهلية</span>
                    <span className="block text-[10px] sm:text-xs text-slate-300 font-medium">
                      {isAr ? 'بطاقة حضور المؤتمر العلمي' : 'Conference Attendance Pass'}
                    </span>
                  </div>
                </div>
                <div className="text-end shrink-0">
                  <span className="inline-block text-xs sm:text-sm font-black text-amber-400 rounded-lg bg-amber-500/20 border border-amber-400/30 px-3 py-1 font-mono tracking-wider">
                    {registrationCode}
                  </span>
                </div>
              </div>

              {/* Card Details Grid */}
              <div className="mt-5 grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="block text-[10px] sm:text-xs text-amber-200/70 font-semibold mb-0.5">
                    {isAr ? 'اسم الحاضر:' : 'Attendee Name:'}
                  </span>
                  <span className="font-extrabold text-white text-sm sm:text-base">
                    {formData.firstName} {formData.lastName}
                  </span>
                </div>
                <div>
                  <span className="block text-[10px] sm:text-xs text-amber-200/70 font-semibold mb-0.5">
                    {isAr ? 'صفة المشاركة:' : 'Role:'}
                  </span>
                  <span className="font-bold text-amber-300 flex items-center gap-1 text-xs sm:text-sm">
                    <BadgeCheck className="size-3.5 sm:size-4" />
                    <span>{isAr ? 'حضور مؤتمر (Attendee)' : 'Conference Attendee'}</span>
                  </span>
                </div>
                <div>
                  <span className="block text-[10px] sm:text-xs text-amber-200/70 font-semibold mb-0.5">
                    {isAr ? 'الكلية / الجهة:' : 'College / Entity:'}
                  </span>
                  <span className="font-semibold text-slate-200 text-xs sm:text-sm">
                    {selectedCollege?.[isAr ? 'nameAr' : 'nameEn']}
                  </span>
                </div>
                <div>
                  <span className="block text-[10px] sm:text-xs text-amber-200/70 font-semibold mb-0.5">
                    {isAr ? 'المستوى الأكاديمي:' : 'Level:'}
                  </span>
                  <span className="font-semibold text-slate-200 text-xs sm:text-sm">
                    {selectedLevel?.[isAr ? 'nameAr' : 'nameEn']}
                  </span>
                </div>
                <div className="col-span-2 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] sm:text-xs text-slate-300">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="size-3.5 text-amber-400" />
                    <span>{isAr ? 'المقر الرئيسي - جامعة المنوفية الأهلية' : 'MNU Main Campus'}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="size-3.5 text-amber-400" />
                    <span>{isAr ? '1 أغسطس 2026' : 'August 1, 2026'}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Screen-Only Action Buttons */}
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 no-print">
              <button
                type="button"
                onClick={handlePrint}
                className="w-full sm:w-auto h-12 px-6 rounded-xl bg-gradient-to-r from-brand-700 to-brand-600 hover:from-brand-800 hover:to-brand-700 text-white font-extrabold text-xs shadow-md shadow-brand-900/15 flex items-center justify-center gap-2 transition-all active:scale-95 cursor-pointer"
              >
                <Printer className="size-4" />
                <span>{isAr ? 'طباعة / حفظ بطاقة الحضور' : 'Print / Download Pass'}</span>
              </button>
              
              <button
                type="button"
                onClick={handleReset}
                className="w-full sm:w-auto h-12 px-6 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors cursor-pointer"
              >
                {isAr ? 'تسجيل حضور جديد' : 'New Registration'}
              </button>
            </div>

          </div>
        ) : (
          /* --- STREAMLINED ATTENDANCE REGISTRATION FORM --- */
          <div className="mx-auto max-w-2xl print:max-w-full">
            
            {/* Form Container */}
            <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-10 shadow-xl relative overflow-hidden print:border-none print:shadow-none print:p-0">
              
              {/* Top Accent Line (Hidden on Print) */}
              <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-brand-700 via-amber-400 to-brand-700 no-print" />

              {/* Attendance Info Notice */}
              <div className="mb-4 rounded-2xl border border-amber-200/80 bg-gradient-to-r from-amber-50 to-emerald-50/50 p-4 flex items-start gap-3 print:border-slate-300 print:bg-slate-50">
                <div className="grid size-9 shrink-0 place-items-center rounded-xl bg-amber-500/20 text-amber-800 mt-0.5 no-print">
                  <Ticket className="size-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xs font-black text-brand-950 print:text-slate-900">
                    {isAr ? 'التسجيل مخصص للحضور فقط' : 'Registration is for Attendance Only'}
                  </h3>
                  <p className="text-[11px] text-slate-600 leading-relaxed print:text-slate-800">
                    {isAr
                      ? 'يتيح لك هذا التسجيل حضور جلسات المؤتمر والندوات وورش العمل المصاحبة. لا يتطلب التسجيل تقديم أي أوراق بحثية أو رفع ملفات.'
                      : 'This registration reserves your seat to attend scientific sessions, keynotes, and workshops. No document upload or paper submission required.'}
                  </p>
                </div>
              </div>

              {/* Research Submission Callout Banner (Screen Only) */}
              <div className="mb-6 rounded-2xl border border-emerald-200 bg-emerald-50/70 p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 no-print">
                <div className="space-y-0.5">
                  <span className="text-[11px] font-black text-emerald-800 block">
                    {isAr ? 'هل تود تقديم ورقة بحثية أو المشاركة في المعرض؟' : 'Interested in submitting research or exhibiting?'}
                  </span>
                  <p className="text-[10px] text-slate-600 font-medium">
                    {isAr
                      ? 'تُرسل الأبحاث عبر quality@mnu.edu.eg ويُملأ نموذج المشاركة الإلكتروني المعتمد.'
                      : 'Submit papers to quality@mnu.edu.eg and fill out the official participation form.'}
                  </p>
                </div>

                <a
                  href="https://forms.office.com/r/Cnbi3kRcdD"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-[11px] font-bold shadow-xs transition-all shrink-0 self-start sm:self-auto cursor-pointer"
                >
                  <span>{isAr ? 'استمارة تقديم الأبحاث' : 'Research Submission Form'}</span>
                  <ExternalLink className="size-3" />
                </a>
              </div>

              <form onSubmit={handleSubmitForm} className="space-y-5">
                <div className="border-b border-slate-100 pb-3 mb-2 print:border-slate-300">
                  <h2 className="text-base sm:text-lg font-black text-brand-950 flex items-center gap-2 print:text-slate-900">
                    <User className="size-5 text-brand-700 no-print" />
                    <span>{isAr ? 'بيانات الحضور' : 'Attendee Information'}</span>
                  </h2>
                  <p className="text-xs text-slate-500 mt-0.5 print:text-slate-600">
                    {isAr ? 'يرجى إدخال بياناتك بدقة لإصدار بطاقة الحضور الخاصة بك.' : 'Please enter your accurate details to generate your attendance pass.'}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* First Name */}
                  <div>
                    <label className="block text-xs font-extrabold text-brand-950 mb-1.5 print:text-slate-900">
                      {isAr ? 'الاسم الأول (First Name)' : 'First Name'} <span className="text-amber-500">*</span>
                    </label>
                    <div className="relative flex items-center">
                      <User className="absolute left-3.5 rtl:left-auto rtl:right-3.5 size-4 text-slate-400 pointer-events-none no-print" />
                      <input
                        type="text"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder={isAr ? 'مثال: أحمد' : 'e.g. Ahmed'}
                        className="w-full rounded-xl border border-slate-200/90 bg-slate-50/50 py-3 pl-10 pr-3.5 rtl:pl-3.5 rtl:pr-10 text-xs font-extrabold text-brand-950 placeholder:text-slate-400 placeholder:font-normal transition-all duration-200 focus:border-brand-600 focus:bg-white focus:ring-4 focus:ring-brand-500/10 focus:outline-none shadow-xs print:bg-white print:border-slate-300"
                      />
                    </div>
                  </div>

                  {/* Last Name */}
                  <div>
                    <label className="block text-xs font-extrabold text-brand-950 mb-1.5 print:text-slate-900">
                      {isAr ? 'الاسم الأخير (Last Name)' : 'Last Name'} <span className="text-amber-500">*</span>
                    </label>
                    <div className="relative flex items-center">
                      <User className="absolute left-3.5 rtl:left-auto rtl:right-3.5 size-4 text-slate-400 pointer-events-none no-print" />
                      <input
                        type="text"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder={isAr ? 'مثال: محمود' : 'e.g. Mahmoud'}
                        className="w-full rounded-xl border border-slate-200/90 bg-slate-50/50 py-3 pl-10 pr-3.5 rtl:pl-3.5 rtl:pr-10 text-xs font-extrabold text-brand-950 placeholder:text-slate-400 placeholder:font-normal transition-all duration-200 focus:border-brand-600 focus:bg-white focus:ring-4 focus:ring-brand-500/10 focus:outline-none shadow-xs print:bg-white print:border-slate-300"
                      />
                    </div>
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-xs font-extrabold text-brand-950 mb-1.5 print:text-slate-900">
                      {isAr ? 'رقم الهاتف (Phone Number)' : 'Phone Number'} <span className="text-amber-500">*</span>
                    </label>
                    <div className="relative flex items-center">
                      <Phone className="absolute left-3.5 rtl:left-auto rtl:right-3.5 size-4 text-slate-400 pointer-events-none no-print" />
                      <input
                        type="tel"
                        name="phoneNumber"
                        required
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        placeholder="+20 100 000 0000"
                        dir="ltr"
                        className="w-full rounded-xl border border-slate-200/90 bg-slate-50/50 py-3 pl-10 pr-3.5 rtl:pl-3.5 rtl:pr-10 text-xs font-extrabold text-brand-950 placeholder:text-slate-400 placeholder:font-normal transition-all duration-200 focus:border-brand-600 focus:bg-white focus:ring-4 focus:ring-brand-500/10 focus:outline-none shadow-xs text-left rtl:text-right print:bg-white print:border-slate-300"
                      />
                    </div>
                    
                    {/* Checkbox: Same for WhatsApp */}
                    <label className="mt-2.5 inline-flex items-center gap-2.5 text-xs font-extrabold text-slate-700 cursor-pointer select-none group">
                      <input
                        type="checkbox"
                        name="sameForWhatsApp"
                        checked={formData.sameForWhatsApp}
                        onChange={handleInputChange}
                        className="size-4 rounded-md border-slate-300 text-brand-600 focus:ring-brand-500/30 accent-brand-600 cursor-pointer"
                      />
                      <span className="group-hover:text-brand-900 transition-colors">
                        {isAr ? '✓ نفس رقم الواتساب (Same for WhatsApp)' : '✓ Same number for WhatsApp'}
                      </span>
                    </label>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-extrabold text-brand-950 mb-1.5 print:text-slate-900">
                      {isAr ? 'البريد الإلكتروني (Email)' : 'Email Address'} <span className="text-amber-500">*</span>
                    </label>
                    <div className="relative flex items-center">
                      <Mail className="absolute left-3.5 rtl:left-auto rtl:right-3.5 size-4 text-slate-400 pointer-events-none no-print" />
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="student@mnu.edu.eg"
                        className="w-full rounded-xl border border-slate-200/90 bg-slate-50/50 py-3 pl-10 pr-3.5 rtl:pl-3.5 rtl:pr-10 text-xs font-extrabold text-brand-950 placeholder:text-slate-400 placeholder:font-normal transition-all duration-200 focus:border-brand-600 focus:bg-white focus:ring-4 focus:ring-brand-500/10 focus:outline-none shadow-xs print:bg-white print:border-slate-300"
                      />
                    </div>
                  </div>

                  {/* College Dropdown */}
                  <div>
                    <label className="block text-xs font-extrabold text-brand-950 mb-1.5 print:text-slate-900">
                      {isAr ? 'الكلية (College)' : 'College'} <span className="text-amber-500">*</span>
                    </label>
                    <div className="relative flex items-center">
                      <Building2 className="absolute left-3.5 rtl:left-auto rtl:right-3.5 size-4 text-brand-700 pointer-events-none z-10 no-print" />
                      <select
                        name="college"
                        value={formData.college}
                        onChange={handleInputChange}
                        className="w-full appearance-none rounded-xl border border-slate-200/90 bg-slate-50/50 py-3 pl-10 pr-10 rtl:pl-10 rtl:pr-10 text-xs font-extrabold text-brand-950 transition-all duration-200 focus:border-brand-600 focus:bg-white focus:ring-4 focus:ring-brand-500/10 focus:outline-none shadow-xs cursor-pointer print:bg-white print:border-slate-300 print:appearance-auto"
                      >
                        {colleges.map((c) => (
                          <option key={c.id} value={c.id}>
                            {isAr ? c.nameAr : c.nameEn}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3.5 rtl:right-auto rtl:left-3.5 size-4 text-slate-400 pointer-events-none z-10 transition-transform no-print" />
                    </div>
                  </div>

                  {/* Level Dropdown */}
                  <div>
                    <label className="block text-xs font-extrabold text-brand-950 mb-1.5 print:text-slate-900">
                      {isAr ? 'المستوى / الفرقة (Academic Level)' : 'Academic Level'} <span className="text-amber-500">*</span>
                    </label>
                    <div className="relative flex items-center">
                      <Layers className="absolute left-3.5 rtl:left-auto rtl:right-3.5 size-4 text-brand-700 pointer-events-none z-10 no-print" />
                      <select
                        name="level"
                        value={formData.level}
                        onChange={handleInputChange}
                        className="w-full appearance-none rounded-xl border border-slate-200/90 bg-slate-50/50 py-3 pl-10 pr-10 rtl:pl-10 rtl:pr-10 text-xs font-extrabold text-brand-950 transition-all duration-200 focus:border-brand-600 focus:bg-white focus:ring-4 focus:ring-brand-500/10 focus:outline-none shadow-xs cursor-pointer print:bg-white print:border-slate-300 print:appearance-auto"
                      >
                        {levels.map((l) => (
                          <option key={l.id} value={l.id}>
                            {isAr ? l.nameAr : l.nameEn}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3.5 rtl:right-auto rtl:left-3.5 size-4 text-slate-400 pointer-events-none z-10 transition-transform no-print" />
                    </div>
                  </div>

                </div>

                {/* Submit Button (Hidden on Print) */}
                <div className="pt-5 flex justify-end no-print">
                  <button
                    type="submit"
                    className="w-full sm:w-auto h-12 px-8 rounded-xl bg-gradient-to-r from-brand-700 via-brand-600 to-brand-700 hover:from-brand-800 hover:to-brand-700 text-white font-extrabold text-xs shadow-lg shadow-brand-900/20 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <CheckCircle2 className="size-4 text-amber-300" />
                    <span>{isAr ? 'تأكيد تسجيل الحضور والحصول على البطاقة' : 'Confirm Attendance & Get Pass'}</span>
                  </button>
                </div>
              </form>

            </div>
          </div>
        )}
      </Container>
    </div>
  );
}
