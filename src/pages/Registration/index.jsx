import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Download,
  FileCheck,
  FileText,
  Upload,
  QrCode,
  Sparkles
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
                <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-500/20 px-3.5 py-1 text-xs font-black text-amber-300 backdrop-blur-md">
                  <Sparkles className="size-3.5 text-amber-400" />
                  <span>{isAr ? 'نموذج التسجيل وتقديم الأبحاث' : 'Registration & Submission'}</span>
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
                    ? 'استكمل بيانات التسجيل وإرفاق ملخص أو ورقة البحث الخاصة بك.'
                    : 'Complete your registration and submit your research paper or abstract.'}
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
            className="mx-auto max-w-xl rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-2xl text-center"
          >
            <div className="mx-auto grid size-16 place-items-center rounded-full bg-emerald-100 text-emerald-600 mb-3">
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
                <span className="text-xs font-black text-amber-400 rounded-md bg-white/10 px-2 py-0.5">
                  {registrationCode}
                </span>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="block text-[10px] text-slate-400 font-semibold">{isAr ? 'الاسم:' : 'Name:'}</span>
                  <span className="font-extrabold text-white">{formData.firstName} {formData.lastName}</span>
                </div>
                <div>
                  <span className="block text-[10px] text-slate-400 font-semibold">{isAr ? 'النوع:' : 'Submission:'}</span>
                  <span className="font-bold text-amber-300">
                    {formData.submissionType === 'abstract'
                      ? isAr ? 'ملخص بحثي فقط' : 'Abstract Only'
                      : isAr ? 'ورقة بحثية كاملة' : 'Full Paper'}
                  </span>
                </div>
                <div>
                  <span className="block text-[10px] text-slate-400 font-semibold">{isAr ? 'الكلية:' : 'College:'}</span>
                  <span className="font-semibold text-slate-200">
                    {colleges.find((c) => c.id === formData.college)?.[isAr ? 'nameAr' : 'nameEn']}
                  </span>
                </div>
                <div>
                  <span className="block text-[10px] text-slate-400 font-semibold">{isAr ? 'المستوى:' : 'Level:'}</span>
                  <span className="font-semibold text-slate-200">
                    {levels.find((l) => l.id === formData.level)?.[isAr ? 'nameAr' : 'nameEn']}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={() => window.print()}
                className="w-full sm:w-auto h-11 px-6 rounded-full bg-brand-700 hover:bg-brand-800 text-white font-extrabold text-xs shadow-md flex items-center justify-center gap-2 transition-colors"
              >
                <Download className="size-4" />
                <span>{isAr ? 'طباعة / حفظ بطاقة التسجيل' : 'Download Pass'}</span>
              </button>
              
              <button
                onClick={() => { setIsSubmitted(false); setCurrentStep(1); }}
                className="w-full sm:w-auto h-11 px-6 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors"
              >
                {isAr ? 'تسجيل جديد' : 'New Registration'}
              </button>
            </div>
          </motion.div>
        ) : (
          /* --- STRICT FORM BASED ON NOTEBOOK --- */
          <div className="mx-auto max-w-2xl">
            
            {/* Step Indicators */}
            <div className="mb-6 flex items-center justify-center gap-3">
              <div className={`flex items-center gap-2 text-xs font-black ${currentStep === 1 ? 'text-brand-700' : 'text-slate-400'}`}>
                <span className={`grid size-7 place-items-center rounded-full text-xs ${currentStep === 1 ? 'bg-brand-700 text-white' : 'bg-slate-200 text-slate-700'}`}>1</span>
                <span>{isAr ? 'بيانات التسجيل (Registration)' : 'Registration'}</span>
              </div>
              <div className="h-0.5 w-10 bg-slate-200" />
              <div className={`flex items-center gap-2 text-xs font-black ${currentStep === 2 ? 'text-brand-700' : 'text-slate-400'}`}>
                <span className={`grid size-7 place-items-center rounded-full text-xs ${currentStep === 2 ? 'bg-brand-700 text-white' : 'bg-slate-200 text-slate-700'}`}>2</span>
                <span>{isAr ? 'تقديم البحث (Submission)' : 'Submission'}</span>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-10 shadow-xl">
              
              {/* PAGE 1: REGISTRATION */}
              {currentStep === 1 && (
                <form onSubmit={handleStep1Next} className="space-y-4">
                  <div className="border-b border-slate-100 pb-3 mb-4">
                    <h2 className="text-lg font-black text-brand-950">
                      {isAr ? 'الخطوة الأولى: بيانات التسجيل (Registration)' : 'Step 1: Registration'}
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* First Name */}
                    <div>
                      <label className="block text-xs font-bold text-brand-950 mb-1">
                        First name (الاسم الأول) *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="e.g. Ahmed"
                        className="w-full rounded-xl border border-slate-200 p-3 text-xs font-semibold focus:border-brand-600 focus:outline-none"
                      />
                    </div>

                    {/* Last Name */}
                    <div>
                      <label className="block text-xs font-bold text-brand-950 mb-1">
                        Last name (الاسم الأخير) *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="e.g. Mahmoud"
                        className="w-full rounded-xl border border-slate-200 p-3 text-xs font-semibold focus:border-brand-600 focus:outline-none"
                      />
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs font-bold text-brand-950 mb-1">
                        Phone Number (رقم الهاتف) *
                      </label>
                      <input
                        type="tel"
                        name="phoneNumber"
                        required
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        placeholder="+20 100 000 0000"
                        className="w-full rounded-xl border border-slate-200 p-3 text-xs font-semibold focus:border-brand-600 focus:outline-none"
                      />
                      
                      {/* Checkbox: Same for WhatsApp */}
                      <label className="mt-2 flex items-center gap-2 text-xs font-bold text-slate-600 cursor-pointer">
                        <input
                          type="checkbox"
                          name="sameForWhatsApp"
                          checked={formData.sameForWhatsApp}
                          onChange={handleInputChange}
                          className="size-4 rounded border-slate-300 text-brand-700 focus:ring-brand-600"
                        />
                        <span>✓ Same for WhatsApp (نفس رقم الواتساب)</span>
                      </label>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-bold text-brand-950 mb-1">
                        Email (البريد الإلكتروني) *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="student@mnu.edu.eg"
                        className="w-full rounded-xl border border-slate-200 p-3 text-xs font-semibold focus:border-brand-600 focus:outline-none"
                      />
                    </div>

                    {/* College */}
                    <div>
                      <label className="block text-xs font-bold text-brand-950 mb-1">
                        College (الكلية) *
                      </label>
                      <select
                        name="college"
                        value={formData.college}
                        onChange={handleInputChange}
                        className="w-full rounded-xl border border-slate-200 p-3 text-xs font-semibold focus:border-brand-600 focus:outline-none bg-white"
                      >
                        {colleges.map((c) => (
                          <option key={c.id} value={c.id}>
                            {isAr ? c.nameAr : c.nameEn}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Level */}
                    <div>
                      <label className="block text-xs font-bold text-brand-950 mb-1">
                        Level (المستوى / الفرقة) *
                      </label>
                      <select
                        name="level"
                        value={formData.level}
                        onChange={handleInputChange}
                        className="w-full rounded-xl border border-slate-200 p-3 text-xs font-semibold focus:border-brand-600 focus:outline-none bg-white"
                      >
                        {levels.map((l) => (
                          <option key={l.id} value={l.id}>
                            {isAr ? l.nameAr : l.nameEn}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Next Button */}
                  <div className="pt-4 flex justify-end">
                    <button
                      type="submit"
                      className="h-12 px-8 rounded-full bg-brand-700 hover:bg-brand-800 text-white font-extrabold text-xs shadow-md transition-colors flex items-center gap-2"
                    >
                      <span>Next (التالي)</span>
                      <ArrowRight className="size-4 rtl:rotate-180" />
                    </button>
                  </div>
                </form>
              )}

              {/* PAGE 2: SUBMISSION */}
              {currentStep === 2 && (
                <form onSubmit={handleSubmitForm} className="space-y-6">
                  <div className="border-b border-slate-100 pb-3 mb-4">
                    <h2 className="text-lg font-black text-brand-950">
                      {isAr ? 'الخطوة الثانية: تقديم البحث (Submission)' : 'Step 2: Submission'}
                    </h2>
                  </div>

                  {/* Submission Type Radio Options */}
                  <div>
                    <label className="block text-xs font-extrabold text-brand-950 mb-3">
                      Select Submission Type (اختر نوع التقديم): *
                    </label>

                    <div className="space-y-3">
                      <label
                        className={`flex items-start gap-3 rounded-2xl border-2 p-4 cursor-pointer transition-all ${
                          formData.submissionType === 'abstract'
                            ? 'border-brand-700 bg-brand-50/70 shadow-xs'
                            : 'border-slate-200 bg-white hover:border-slate-300'
                        }`}
                      >
                        <input
                          type="radio"
                          name="submissionType"
                          value="abstract"
                          checked={formData.submissionType === 'abstract'}
                          onChange={handleInputChange}
                          className="mt-1 size-4 text-brand-700 focus:ring-brand-600"
                        />
                        <div>
                          <span className="block text-xs font-black text-brand-950">
                            Abstract only (initial review)
                          </span>
                          <span className="block text-[11px] font-semibold text-slate-500">
                            ملخص البحث فقط (للمراجعة والتقييم الأولية)
                          </span>
                        </div>
                      </label>

                      <label
                        className={`flex items-start gap-3 rounded-2xl border-2 p-4 cursor-pointer transition-all ${
                          formData.submissionType === 'fullPaper'
                            ? 'border-brand-700 bg-brand-50/70 shadow-xs'
                            : 'border-slate-200 bg-white hover:border-slate-300'
                        }`}
                      >
                        <input
                          type="radio"
                          name="submissionType"
                          value="fullPaper"
                          checked={formData.submissionType === 'fullPaper'}
                          onChange={handleInputChange}
                          className="mt-1 size-4 text-brand-700 focus:ring-brand-600"
                        />
                        <div>
                          <span className="block text-xs font-black text-brand-950">
                            Full paper (complete manuscript upload)
                          </span>
                          <span className="block text-[11px] font-semibold text-slate-500">
                            الورقة البحثية كاملة (مخطوطة مجهزة بالكامل)
                          </span>
                        </div>
                      </label>
                    </div>
                  </div>

                  {/* Upload Field */}
                  <div>
                    <label className="block text-xs font-extrabold text-brand-950 mb-2">
                      Upload File (رفع ملف البحث): *
                    </label>

                    <div className="relative flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 p-6 text-center transition-colors hover:border-brand-600 hover:bg-brand-50/40">
                      <Upload className="size-8 text-brand-700 mb-2" />
                      <p className="text-xs font-bold text-brand-950">
                        {formData.attachedFile
                          ? formData.attachedFile.name
                          : (isAr ? 'اضغط هنا لرفع الملف (PDF / DOCX)' : 'Click to upload manuscript file (PDF / DOCX)')}
                      </p>
                      <span className="text-[10px] text-slate-500 mt-1">PDF, DOCX, DOC (Max: 15MB)</span>
                      <input
                        type="file"
                        required={!formData.attachedFile}
                        accept=".pdf,.docx,.doc"
                        onChange={handleFileUpload}
                        className="absolute inset-0 opacity-0 cursor-pointer"
                      />
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="pt-4 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(1)}
                      className="h-12 px-6 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors flex items-center gap-2"
                    >
                      <ArrowLeft className="size-4 rtl:rotate-180" />
                      <span>Back (الرجوع)</span>
                    </button>

                    <button
                      type="submit"
                      className="h-12 px-8 rounded-full bg-brand-700 hover:bg-brand-800 text-white font-extrabold text-xs shadow-md transition-colors flex items-center gap-2"
                    >
                      <CheckCircle2 className="size-4" />
                      <span>Submit (إرسال التسجيل)</span>
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
