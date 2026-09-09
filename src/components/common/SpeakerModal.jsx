import React from 'react';
import { BookOpen, Clock, MapPin, GraduationCap, FileText, CheckCircle2, Sparkles } from 'lucide-react';
import Modal from '../ui/Modal';
import Button from '../ui/Button';
import { useTranslation } from '../../hooks/useTranslation';

function SpeakerModal({ speaker, onClose }) {
  const { language, t } = useTranslation();
  const isAr = language === 'ar';

  if (!speaker) return null;

  const name = (isAr ? speaker.nameAr : speaker.nameEn) || speaker.nameAr || speaker.nameEn || '';
  const title = (isAr ? speaker.titleAr : speaker.titleEn) || speaker.titleAr || speaker.titleEn || '';
  const institution = (isAr ? speaker.institutionAr : speaker.institutionEn) || speaker.institutionAr || speaker.institutionEn || '';
  const topic = (isAr ? speaker.topicAr : speaker.topicEn) || speaker.topicAr || speaker.topicEn || '';
  const badge = (isAr ? speaker.badgeAr : speaker.badgeEn) || speaker.badgeAr || speaker.badgeEn || '';
  const bio = (isAr ? speaker.bioAr : speaker.bioEn) || speaker.bioAr || speaker.bioEn || '';
  const sessionTime = (isAr ? speaker.sessionTimeAr : speaker.sessionTimeEn) || speaker.sessionTimeAr || speaker.sessionTimeEn || '';
  const hall = (isAr ? speaker.hallAr : speaker.hallEn) || speaker.hallAr || speaker.hallEn || '';

  return (
    <Modal
      isOpen={!!speaker}
      onClose={onClose}
      title={isAr ? 'السيرة الذاتية والتفاصيل' : 'Speaker Profile & Details'}
      maxWidthClass="max-w-2xl"
      footer={
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-slate-500 font-semibold">
            <CheckCircle2 className="size-4 text-brand-600" />
            <span>{t('universityName')}</span>
          </div>
          <Button
            variant="secondary"
            onClick={onClose}
            className="rounded-xl px-6 font-bold text-xs bg-slate-200 text-slate-800 hover:bg-slate-300"
          >
            {t('actions.close')}
          </Button>
        </div>
      }
    >
      <div className="space-y-6">
        
        {/* --- LUXURY PROFILE HEADER CARD --- */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-950 p-6 text-center text-white shadow-xl">
          {/* Ambient Glow Orbs */}
          <div className="absolute -top-12 -right-12 size-40 rounded-full bg-gold-500/20 blur-2xl" />
          <div className="absolute -bottom-12 -left-12 size-40 rounded-full bg-emerald-400/20 blur-2xl" />

          <div className="relative z-10 flex flex-col items-center space-y-3">
            
            {/* Prominent Portrait Photo */}
            <div className="relative size-28 sm:size-32">
              <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-gold-400 to-amber-500/40 blur-sm" />
              <img
                src={speaker.image}
                alt={name}
                className="relative size-full rounded-full object-cover border-4 border-white shadow-xl"
              />
            </div>

            {/* Badge Pill */}
            {badge && (
              <span className="inline-block rounded-full bg-gold-500/20 px-3.5 py-1 text-xs font-extrabold text-gold-300 border border-gold-400/30">
                {badge}
              </span>
            )}

            {/* Doctor's Name - Bold & Crystal Clear */}
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-snug">
              {name}
            </h3>

            {/* Title & Institution */}
            <p className="text-sm font-bold text-brand-200 max-w-md">{title}</p>
            <div className="flex items-center justify-center gap-1.5 text-xs text-slate-300 font-semibold pt-0.5">
              <GraduationCap className="size-4 text-gold-400 shrink-0" />
              <span>{institution}</span>
            </div>

          </div>
        </div>

        {/* --- SCHEDULE & HALL VENUE CARDS --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex items-center gap-3.5 rounded-2xl bg-brand-50/80 p-4 border border-brand-200/70 shadow-2xs">
            <div className="grid size-10 place-items-center rounded-xl bg-brand-700 text-white shrink-0 shadow-xs">
              <Clock className="size-5" />
            </div>
            <div>
              <p className="text-[11px] font-bold text-brand-800 uppercase tracking-wider">{t('speakersPage.sessionInfo')}</p>
              <p className="text-xs sm:text-sm font-black text-slate-900">{sessionTime}</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 rounded-2xl bg-gold-50/80 p-4 border border-gold-200/70 shadow-2xs">
            <div className="grid size-10 place-items-center rounded-xl bg-gold-600 text-white shrink-0 shadow-xs">
              <MapPin className="size-5" />
            </div>
            <div>
              <p className="text-[11px] font-bold text-gold-900 uppercase tracking-wider">{t('speakersPage.hallLocation')}</p>
              <p className="text-xs sm:text-sm font-black text-slate-900">{hall}</p>
            </div>
          </div>
        </div>

        {/* --- PRESENTATION TOPIC CARD --- */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold text-brand-900">
            <BookOpen className="size-4 text-gold-600" />
            <span>{t('speakersPage.presentationTopic')}</span>
          </div>
          <p className="text-sm sm:text-base font-extrabold text-slate-900 leading-relaxed bg-slate-50 p-3.5 rounded-xl border border-slate-100">
            "{topic}"
          </p>
        </div>

        {/* --- ACADEMIC BIO CARD --- */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
            <FileText className="size-4 text-brand-700" />
            <span>{t('speakersPage.academicBio')}</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal bg-white p-4.5 rounded-2xl border border-slate-200 shadow-2xs">
            {bio}
          </p>
        </div>

      </div>
    </Modal>
  );
}

export default SpeakerModal;
