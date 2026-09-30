import React from 'react';
import Modal from '../ui/Modal';
import Button from '../ui/Button';
import { useTranslation } from '../../hooks/useTranslation';

function SpeakerModal({ speaker, onClose }) {
  const { language, t } = useTranslation();
  const isAr = language === 'ar';

  if (!speaker) return null;

  const name = (isAr ? speaker.nameAr : speaker.nameEn) || speaker.nameAr || speaker.nameEn || '';
  const title = (isAr ? speaker.titleAr : speaker.titleEn) || speaker.titleAr || speaker.titleEn || '';
  const bio = (isAr ? speaker.bioAr : speaker.bioEn) || speaker.bioAr || speaker.bioEn || '';
  const displayImage = speaker.poster || speaker.image;

  return (
    <Modal
      isOpen={!!speaker}
      onClose={onClose}
      title={name}
      maxWidthClass="max-w-lg md:max-w-3xl lg:max-w-4xl"
      footer={
        <div className="flex items-center justify-end w-full">
          <Button
            variant="secondary"
            onClick={onClose}
            className="rounded-xl px-6 py-2 font-bold text-xs bg-slate-200 text-slate-800 hover:bg-slate-300 transition-colors"
          >
            {t('actions.close') || (isAr ? 'إغلاق' : 'Close')}
          </Button>
        </div>
      }
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-8 items-center">
        {/* الصورة / البوستر الرسمي للمتحدث */}
        {displayImage && (
          <div className="md:col-span-5 lg:col-span-5 flex justify-center">
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-900/5 p-1.5 shadow-sm max-w-[280px] sm:max-w-[320px] md:max-w-none w-full flex justify-center">
              <img
                src={displayImage}
                alt={name}
                className="w-full max-h-[38vh] sm:max-h-[45vh] md:max-h-[62vh] object-contain rounded-xl shadow-xs"
                loading="lazy"
              />
            </div>
          </div>
        )}

        {/* تفاصيل المتحدث: الاسم، التوصيف، والنبذة البسيطة */}
        <div className={`space-y-3.5 text-center md:text-start ${displayImage ? 'md:col-span-7 lg:col-span-7' : 'md:col-span-12'}`}>
          <div className="space-y-1.5">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-brand-950 leading-tight">
              {name}
            </h3>

            {title && (
              <p className="text-xs sm:text-sm lg:text-base font-bold text-amber-600">
                {title}
              </p>
            )}
          </div>

          {bio && (
            <div className="rounded-2xl bg-slate-50 border border-slate-200/90 p-4 sm:p-5 text-xs sm:text-sm text-slate-700 leading-relaxed font-medium text-start whitespace-pre-line shadow-2xs">
              {bio}
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
}

export default SpeakerModal;
