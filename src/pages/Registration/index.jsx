import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  CheckCircle2,
  ChevronDown,
  Download,
  FileCheck,
  FileText,
  GraduationCap,
  Layers,
  Mail,
  Phone,
  Sparkles,
  Upload,
  User
} from 'lucide-react';
import Container from '../../components/ui/Container';
import { useTranslation } from '../../hooks/useTranslation';

// Official University Logo
import logo from '../../assets/images/logo.jpeg';

export default function Registration() {
  const { language, t } = useTranslation();
  const isAr = language === 'ar';

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [registrationCode, setRegistrationCode] = useState('');

  // Form Fields strictly as specified in the notebook
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    sameForWhatsApp: true,
    email: '',
    college: 'computers',
    level: 'level3',
    submissionType: 'abstract', // 'abstract' or 'fullPaper'
    attachedFile: null,
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

  const handleFileUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, attachedFile: e.target.files[0] }));
    }
  };

  const handleStep1Next = (e) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.phoneNumber || !formData.email) {
      alert(isAr ? 'يرجى إكمال جميع الحقول المطلوبة' : 'Please complete all required fields');
      return;
    }
    setCurrentStep(2);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const generatedCode = 'MNU-CONF-2026-' + Math.floor(100000 + Math.random() * 900000);
    setRegistrationCode(generatedCode);
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
                  <Sparkles className="size-3.5 text-amber-400" />
                  <span>{isAr ? 'نموذج التسجيل وتقديم الأبحاث' : 'Registration & Submission Form'}</span>
                </div>

                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight">
                  {isAr ? (
                    <>
                      <span>تسجيل المشاركة في</span>{' '}
                      <span className="text-amber-400">المؤتمر العلمي الأول</span>
                    </>
                  ) : (
                    <>
                      <span>Registration for</span>{' '}
                      <span className="text-amber-400">1st Student Research Conf</span>
                    </>
                  )}
                </h1>

                <p className="text-xs sm:text-sm text-amber-100/90 font-medium">
                  {isAr
                    ? 'استكمل بيانات التسجيل وإرفاق ملخص أو ورقة البحث الخاصة بك بخطوات بسيطة.'
                    : 'Complete your registration and submit your research paper or abstract seamlessly.'}
                </p>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* --- FORM CONTAINER --- */}
      <Container className="mt-8">
        {isSubmitted ? (
          /* --- DIGITAL CONFIRMATION PASS --- */
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mx-auto max-w-xl rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-2xl text-center"
          >
            <div className="mx-auto grid size-16 place-items-center rounded-full bg-emerald-100 text-emerald-600 mb-3 shadow-inner">
              <CheckCircle2 className="size-8" />
            </div>

            <h2 className="text-2xl font-black text-brand-950">
              {isAr ? `أهلاً بك، ${formData.firstName} ${formData.lastName}` : `Welcome, ${formData.firstName} ${formData.lastName}`}
            </h2>
            <p className="mt-1 text-xs text-slate-600 font-medium">
              {isAr ? 'تم استلام طلب التسجيل والملف بنجاح!' : 'Your registration & submission has been received successfully!'}
            </p>

            <div className="mt-6 rounded-2xl border-2 border-amber-500/40 bg-[#022c20] p-5 text-white text-start shadow-xl relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                  <img src={logo} alt="" className="size-8 rounded-full bg-white p-0.5" />
                  <span className="text-xs font-bold text-amber-300">جامعة المنوفية الأهلية</span>
                </div>
                <span className="text-xs font-black text-amber-400 rounded-lg bg-amber-500/20 border border-amber-400/30 px-2.5 py-1">
                  {registrationCode}
                </span>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="block text-[10px] text-amber-200/70 font-semibold">{isAr ? 'الاسم:' : 'Name:'}</span>
                  <span className="font-extrabold text-white">{formData.firstName} {formData.lastName}</span>
                </div>
                <div>
                  <span className="block text-[10px] text-amber-200/70 font-semibold">{isAr ? 'النوع:' : 'Submission:'}</span>
                  <span className="font-bold text-amber-300">
                    {formData.submissionType === 'abstract'
                      ? isAr ? 'ملخص بحثي فقط' : 'Abstract Only'
                      : isAr ? 'ورقة بحثية كاملة' : 'Full Paper'}
                  </span>
                </div>
                <div>
                  <span className="block text-[10px] text-amber-200/70 font-semibold">{isAr ? 'الكلية:' : 'College:'}</span>
                  <span className="font-semibold text-slate-200">
                    {colleges.find((c) => c.id === formData.college)?.[isAr ? 'nameAr' : 'nameEn']}
                  </span>
                </div>
                <div>
                  <span className="block text-[10px] text-amber-200/70 font-semibold">{isAr ? 'المستوى:' : 'Level:'}</span>
                  <span className="font-semibold text-slate-200">
                    {levels.find((l) => l.id === formData.level)?.[isAr ? 'nameAr' : 'nameEn']}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={() => window.print()}
                className="w-full sm:w-auto h-12 px-6 rounded-xl bg-gradient-to-r from-brand-700 to-brand-600 hover:from-brand-800 hover:to-brand-700 text-white font-extrabold text-xs shadow-md shadow-brand-900/15 flex items-center justify-center gap-2 transition-all active:scale-95"
              >
                <Download className="size-4" />
                <span>{isAr ? 'طباعة / حفظ بطاقة التسجيل' : 'Download Pass'}</span>
              </button>
              
              <button
                onClick={() => { setIsSubmitted(false); setCurrentStep(1); }}
                className="w-full sm:w-auto h-12 px-6 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors"
              >
                {isAr ? 'تسجيل جديد' : 'New Registration'}
              </button>
            </div>
          </motion.div>
        ) : (
          /* --- REDESIGNED FORM CARD --- */
          <div className="mx-auto max-w-2xl">
            
            {/* Elegant Step Indicator Bar */}
            <div className="mb-6 rounded-2xl bg-white p-3.5 border border-slate-200/80 shadow-md">
              <div className="flex items-center justify-between gap-2 px-2">
                
                {/* Step 1 Indicator */}
                <div className="flex items-center gap-2.5">
                  <div className={`grid size-9 place-items-center rounded-xl text-xs font-black transition-all ${
                    currentStep === 1
                      ? 'bg-gradient-to-r from-brand-700 to-brand-600 text-white shadow-md shadow-brand-700/25 ring-2 ring-brand-700/20'
                      : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                  }`}>
                    {currentStep > 1 ? <CheckCircle2 className="size-5" /> : 1}
                  </div>
                  <div>
                    <span className={`block text-xs font-black ${currentStep === 1 ? 'text-brand-950' : 'text-slate-500'}`}>
                      {isAr ? 'بيانات التسجيل' : 'Registration'}
                    </span>
                    <span className="block text-[10px] text-slate-400 font-medium">Step 1</span>
                  </div>
                </div>

                {/* Connecting Progress Line */}
                <div className="flex-1 mx-2 h-1.5 rounded-full bg-slate-100 overflow-hidden">
                  <div className={`h-full bg-gradient-to-r from-brand-600 to-amber-500 transition-all duration-500 ${
                    currentStep === 2 ? 'w-full' : 'w-1/2'
                  }`} />
                </div>

                {/* Step 2 Indicator */}
                <div className="flex items-center gap-2.5">
                  <div className={`grid size-9 place-items-center rounded-xl text-xs font-black transition-all ${
                    currentStep === 2
                      ? 'bg-gradient-to-r from-brand-700 to-brand-600 text-white shadow-md shadow-brand-700/25 ring-2 ring-brand-700/20'
                      : 'bg-slate-100 text-slate-400 border border-slate-200'
                  }`}>
                    2
                  </div>
                  <div>
                    <span className={`block text-xs font-black ${currentStep === 2 ? 'text-brand-950' : 'text-slate-400'}`}>
                      {isAr ? 'تقديم البحث' : 'Submission'}
                    </span>
                    <span className="block text-[10px] text-slate-400 font-medium">Step 2</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Main Form Container */}
            <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-10 shadow-xl relative overflow-hidden">
              
              {/* Top Accent Line */}
              <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-brand-700 via-amber-400 to-brand-700" />
              
              {/* PAGE 1: REGISTRATION */}
              {currentStep === 1 && (
                <form onSubmit={handleStep1Next} className="space-y-5">
                  <div className="border-b border-slate-100 pb-3 mb-2">
                    <h2 className="text-lg font-black text-brand-950 flex items-center gap-2">
                      <User className="size-5 text-brand-700" />
                      <span>{isAr ? 'الخطوة الأولى: بيانات التسجيل (Registration)' : 'Step 1: Registration Details'}</span>
                    </h2>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {isAr ? 'يرجى إدخال البيانات الشخصية والأكاديمية بدقة.' : 'Please provide accurate personal and academic information.'}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    {/* First Name */}
                    <div>
                      <label className="block text-xs font-extrabold text-brand-950 mb-1.5">
                        {isAr ? 'الاسم الأول (First Name)' : 'First Name'} <span className="text-amber-500">*</span>
                      </label>
                      <div className="relative flex items-center">
                        <User className="absolute left-3.5 rtl:left-auto rtl:right-3.5 size-4 text-slate-400 pointer-events-none" />
                        <input
                          type="text"
                          name="firstName"
                          required
                          value={formData.firstName}
                          onChange={handleInputChange}
                          placeholder="e.g. Ahmed"
                          className="w-full rounded-xl border border-slate-200/90 bg-slate-50/50 py-3 pl-10 pr-3.5 rtl:pl-3.5 rtl:pr-10 text-xs font-extrabold text-brand-950 placeholder:text-slate-400 placeholder:font-normal transition-all duration-200 focus:border-brand-600 focus:bg-white focus:ring-4 focus:ring-brand-500/10 focus:outline-none shadow-xs"
                        />
                      </div>
                    </div>

                    {/* Last Name */}
                    <div>
                      <label className="block text-xs font-extrabold text-brand-950 mb-1.5">
                        {isAr ? 'الاسم الأخير (Last Name)' : 'Last Name'} <span className="text-amber-500">*</span>
                      </label>
                      <div className="relative flex items-center">
                        <User className="absolute left-3.5 rtl:left-auto rtl:right-3.5 size-4 text-slate-400 pointer-events-none" />
                        <input
                          type="text"
                          name="lastName"
                          required
                          value={formData.lastName}
                          onChange={handleInputChange}
                          placeholder="e.g. Mahmoud"
                          className="w-full rounded-xl border border-slate-200/90 bg-slate-50/50 py-3 pl-10 pr-3.5 rtl:pl-3.5 rtl:pr-10 text-xs font-extrabold text-brand-950 placeholder:text-slate-400 placeholder:font-normal transition-all duration-200 focus:border-brand-600 focus:bg-white focus:ring-4 focus:ring-brand-500/10 focus:outline-none shadow-xs"
                        />
                      </div>
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs font-extrabold text-brand-950 mb-1.5">
                        {isAr ? 'رقم الهاتف (Phone Number)' : 'Phone Number'} <span className="text-amber-500">*</span>
                      </label>
                      <div className="relative flex items-center">
                        <Phone className="absolute left-3.5 rtl:left-auto rtl:right-3.5 size-4 text-slate-400 pointer-events-none" />
                        <input
                          type="tel"
                          name="phoneNumber"
                          required
                          value={formData.phoneNumber}
                          onChange={handleInputChange}
                          placeholder="+20 100 000 0000"
                          dir="ltr"
                          className="w-full rounded-xl border border-slate-200/90 bg-slate-50/50 py-3 pl-10 pr-3.5 rtl:pl-3.5 rtl:pr-10 text-xs font-extrabold text-brand-950 placeholder:text-slate-400 placeholder:font-normal transition-all duration-200 focus:border-brand-600 focus:bg-white focus:ring-4 focus:ring-brand-500/10 focus:outline-none shadow-xs text-left rtl:text-right"
                        />
                      </div>
                      
                      {/* Custom Checkbox: Same for WhatsApp */}
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
                      <label className="block text-xs font-extrabold text-brand-950 mb-1.5">
                        {isAr ? 'البريد الإلكتروني (Email)' : 'Email Address'} <span className="text-amber-500">*</span>
                      </label>
                      <div className="relative flex items-center">
                        <Mail className="absolute left-3.5 rtl:left-auto rtl:right-3.5 size-4 text-slate-400 pointer-events-none" />
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="student@mnu.edu.eg"
                          className="w-full rounded-xl border border-slate-200/90 bg-slate-50/50 py-3 pl-10 pr-3.5 rtl:pl-3.5 rtl:pr-10 text-xs font-extrabold text-brand-950 placeholder:text-slate-400 placeholder:font-normal transition-all duration-200 focus:border-brand-600 focus:bg-white focus:ring-4 focus:ring-brand-500/10 focus:outline-none shadow-xs"
                        />
                      </div>
                    </div>

                    {/* Custom Styled College Dropdown */}
                    <div>
                      <label className="block text-xs font-extrabold text-brand-950 mb-1.5">
                        {isAr ? 'الكلية (College)' : 'College'} <span className="text-amber-500">*</span>
                      </label>
                      <div className="relative flex items-center">
                        <Building2 className="absolute left-3.5 rtl:left-auto rtl:right-3.5 size-4 text-brand-700 pointer-events-none z-10" />
                        <select
                          name="college"
                          value={formData.college}
                          onChange={handleInputChange}
                          className="w-full appearance-none rounded-xl border border-slate-200/90 bg-slate-50/50 py-3 pl-10 pr-10 rtl:pl-10 rtl:pr-10 text-xs font-extrabold text-brand-950 transition-all duration-200 focus:border-brand-600 focus:bg-white focus:ring-4 focus:ring-brand-500/10 focus:outline-none shadow-xs cursor-pointer"
                        >
                          {colleges.map((c) => (
                            <option key={c.id} value={c.id}>
                              {isAr ? c.nameAr : c.nameEn}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-3.5 rtl:right-auto rtl:left-3.5 size-4 text-slate-400 pointer-events-none z-10 transition-transform" />
                      </div>
                    </div>

                    {/* Custom Styled Level Dropdown */}
                    <div>
                      <label className="block text-xs font-extrabold text-brand-950 mb-1.5">
                        {isAr ? 'المستوى / الفرقة (Academic Level)' : 'Academic Level'} <span className="text-amber-500">*</span>
                      </label>
                      <div className="relative flex items-center">
                        <Layers className="absolute left-3.5 rtl:left-auto rtl:right-3.5 size-4 text-brand-700 pointer-events-none z-10" />
                        <select
                          name="level"
                          value={formData.level}
                          onChange={handleInputChange}
                          className="w-full appearance-none rounded-xl border border-slate-200/90 bg-slate-50/50 py-3 pl-10 pr-10 rtl:pl-10 rtl:pr-10 text-xs font-extrabold text-brand-950 transition-all duration-200 focus:border-brand-600 focus:bg-white focus:ring-4 focus:ring-brand-500/10 focus:outline-none shadow-xs cursor-pointer"
                        >
                          {levels.map((l) => (
                            <option key={l.id} value={l.id}>
                              {isAr ? l.nameAr : l.nameEn}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-3.5 rtl:right-auto rtl:left-3.5 size-4 text-slate-400 pointer-events-none z-10 transition-transform" />
                      </div>
                    </div>

                  </div>

                  {/* Next Button */}
                  <div className="pt-4 flex justify-end">
                    <button
                      type="submit"
                      className="h-12 px-8 rounded-xl bg-gradient-to-r from-brand-700 to-brand-600 hover:from-brand-800 hover:to-brand-700 text-white font-extrabold text-xs shadow-md shadow-brand-900/15 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
                    >
                      <span>{isAr ? 'التالي (Next)' : 'Next Step'}</span>
                      <ArrowRight className="size-4 rtl:rotate-180" />
                    </button>
                  </div>
                </form>
              )}

              {/* PAGE 2: SUBMISSION */}
              {currentStep === 2 && (
                <form onSubmit={handleSubmitForm} className="space-y-6">
                  <div className="border-b border-slate-100 pb-3 mb-2">
                    <h2 className="text-lg font-black text-brand-950 flex items-center gap-2">
                      <FileCheck className="size-5 text-brand-700" />
                      <span>{isAr ? 'الخطوة الثانية: تقديم البحث (Submission)' : 'Step 2: Research Submission'}</span>
                    </h2>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {isAr ? 'اختر نوع المشاركة وارفع ملف البحث الخاص بك.' : 'Select submission category and upload your document.'}
                    </p>
                  </div>

                  {/* Submission Type Custom Cards */}
                  <div>
                    <label className="block text-xs font-extrabold text-brand-950 mb-3">
                      {isAr ? 'اختر نوع التقديم (Select Submission Type):' : 'Select Submission Type:'} <span className="text-amber-500">*</span>
                    </label>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <label
                        className={`relative flex flex-col justify-between rounded-2xl border-2 p-4 cursor-pointer transition-all duration-200 ${
                          formData.submissionType === 'abstract'
                            ? 'border-brand-600 bg-brand-50/60 shadow-md shadow-brand-900/5 ring-1 ring-brand-600/30'
                            : 'border-slate-200/90 bg-white hover:border-slate-300 hover:bg-slate-50/40'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="space-y-1">
                            <span className="block text-xs font-black text-brand-950">
                              Abstract Only (ملخص فقط)
                            </span>
                            <span className="block text-[11px] font-semibold text-slate-500 leading-relaxed">
                              ملخص البحث فقط للمراجعة والتقييم الأولي (Initial Review)
                            </span>
                          </div>
                          <input
                            type="radio"
                            name="submissionType"
                            value="abstract"
                            checked={formData.submissionType === 'abstract'}
                            onChange={handleInputChange}
                            className="mt-0.5 size-4 text-brand-600 accent-brand-600 focus:ring-brand-500"
                          />
                        </div>
                        <div className="mt-3 pt-2 border-t border-slate-200/60 flex items-center gap-1.5 text-[10px] font-bold text-brand-700">
                          <FileText className="size-3.5" />
                          <span>Short Manuscript</span>
                        </div>
                      </label>

                      <label
                        className={`relative flex flex-col justify-between rounded-2xl border-2 p-4 cursor-pointer transition-all duration-200 ${
                          formData.submissionType === 'fullPaper'
                            ? 'border-brand-600 bg-brand-50/60 shadow-md shadow-brand-900/5 ring-1 ring-brand-600/30'
                            : 'border-slate-200/90 bg-white hover:border-slate-300 hover:bg-slate-50/40'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="space-y-1">
                            <span className="block text-xs font-black text-brand-950">
                              Full Paper (ورقة كاملة)
                            </span>
                            <span className="block text-[11px] font-semibold text-slate-500 leading-relaxed">
                              الورقة البحثية كاملة ومجهزة للمراجعة النهائية (Full Paper)
                            </span>
                          </div>
                          <input
                            type="radio"
                            name="submissionType"
                            value="fullPaper"
                            checked={formData.submissionType === 'fullPaper'}
                            onChange={handleInputChange}
                            className="mt-0.5 size-4 text-brand-600 accent-brand-600 focus:ring-brand-500"
                          />
                        </div>
                        <div className="mt-3 pt-2 border-t border-slate-200/60 flex items-center gap-1.5 text-[10px] font-bold text-amber-700">
                          <Sparkles className="size-3.5" />
                          <span>Complete Article</span>
                        </div>
                      </label>
                    </div>
                  </div>

                  {/* Redesigned File Upload Zone */}
                  <div>
                    <label className="block text-xs font-extrabold text-brand-950 mb-2">
                      {isAr ? 'رفع ملف البحث (Upload Manuscript):' : 'Upload Manuscript File:'} <span className="text-amber-500">*</span>
                    </label>

                    <div className="relative group flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50/80 p-7 text-center transition-all duration-200 hover:border-brand-600 hover:bg-brand-50/30">
                      <div className="grid size-14 place-items-center rounded-2xl bg-white text-brand-700 shadow-md border border-slate-200/80 mb-3 group-hover:scale-110 transition-transform">
                        {formData.attachedFile ? <FileCheck className="size-7 text-emerald-600" /> : <Upload className="size-7" />}
                      </div>
                      
                      <p className="text-xs font-black text-brand-950 max-w-sm truncate px-2">
                        {formData.attachedFile
                          ? formData.attachedFile.name
                          : (isAr ? 'اضغط هنا لرفع الملف (PDF / DOCX)' : 'Click or drag file here to upload (PDF / DOCX)')}
                      </p>
                      
                      <p className="text-[10px] text-slate-500 font-semibold mt-1">
                        PDF, DOCX, DOC (Maximum file size: 15MB)
                      </p>

                      {formData.attachedFile && (
                        <span className="mt-2 inline-flex items-center gap-1 rounded-md bg-emerald-100 px-2.5 py-0.5 text-[10px] font-black text-emerald-800">
                          <CheckCircle2 className="size-3" /> File Attached
                        </span>
                      )}

                      <input
                        type="file"
                        required={!formData.attachedFile}
                        accept=".pdf,.docx,.doc"
                        onChange={handleFileUpload}
                        className="absolute inset-0 opacity-0 cursor-pointer"
                      />
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 flex items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(1)}
                      className="h-12 px-6 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors flex items-center gap-2"
                    >
                      <ArrowLeft className="size-4 rtl:rotate-180" />
                      <span>{isAr ? 'الرجوع (Back)' : 'Back'}</span>
                    </button>

                    <button
                      type="submit"
                      className="h-12 px-8 rounded-xl bg-gradient-to-r from-brand-700 via-brand-600 to-brand-700 hover:from-brand-800 hover:to-brand-700 text-white font-extrabold text-xs shadow-lg shadow-brand-900/20 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
                    >
                      <CheckCircle2 className="size-4 text-amber-300" />
                      <span>{isAr ? 'إرسال التسجيل والملف' : 'Submit Registration'}</span>
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>
        )}
      </Container>
    </div>
  );
}
