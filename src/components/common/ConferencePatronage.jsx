import React from 'react';
import { Crown, Sparkles, Award, Star } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';
import logo from '../../assets/images/logo.jpeg';

export default function ConferencePatronage({ patrons }) {
  const { language } = useTranslation();
  const isAr = language === 'ar';

  if (!patrons || patrons.length === 0) return null;

  const president = patrons.find((p) => p.isPresident) || patrons[0];
  const vicePresident = patrons.find((p) => !p.isPresident) || patrons[1];

  return (
    <section className="relative w-full">
      {/* --- SECTION HEADER: UNDER THE AUSPICES OF (تحت رعاية) --- */}
      <div className="flex flex-col items-center text-center mb-8 sm:mb-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/50 bg-gradient-to-r from-amber-500/15 via-amber-400/25 to-amber-500/15 px-4 py-1.5 text-xs sm:text-sm font-black text-amber-900 shadow-sm backdrop-blur-md">
          <Crown className="size-4 text-amber-600 animate-pulse" />
          <span>{isAr ? 'تحت رعاية المؤتمر' : 'Under the Auspices of the Conference'}</span>
        </div>

        <h2 className="mt-3 text-xl sm:text-2xl md:text-3xl font-black text-brand-950 tracking-tight flex items-center justify-center gap-2.5">
          <span>{isAr ? 'الرعاية الكريمة لقيادة الجامعة' : 'Distinguished University Patronage'}</span>
        </h2>
      </div>

      {/* --- ASYMMETRIC ROYAL PATRONAGE SHOWCASE (HIERARCHY) --- */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
        
        {/* ========================================================
            CARD 1: THE UNIVERSITY PRESIDENT (أ.د. أحمد فرج القاصد)
            Prominent Focal Point (7 Cols Desktop) - Maximum Prestige
           ======================================================== */}
        {president && (
          <div className="lg:col-span-7 relative group">
            <div className="relative h-full overflow-hidden rounded-3xl sm:rounded-[32px] border-2 border-amber-400/80 bg-gradient-to-br from-[#022c20] via-[#033b2b] to-[#011a13] p-6 sm:p-8 md:p-10 text-white shadow-[0_20px_60px_-15px_rgba(245,158,11,0.25)] transition-all duration-500 hover:border-amber-300 hover:shadow-[0_25px_70px_-10px_rgba(245,158,11,0.35)] flex flex-col justify-between">
              
              {/* Luxury Ambient Radial Glow & Texture */}
              <div className="absolute -top-24 -right-24 size-72 rounded-full bg-amber-400/20 blur-3xl pointer-events-none" />
              <div className="absolute -bottom-24 -left-24 size-72 rounded-full bg-emerald-400/15 blur-3xl pointer-events-none" />
              <div
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                  backgroundImage: `radial-gradient(rgba(245, 158, 11, 0.4) 1.5px, transparent 1.5px)`,
                  backgroundSize: '18px 18px',
                }}
              />

              {/* Watermark University Crest */}
              <div className="absolute -bottom-10 -right-10 size-48 opacity-5 pointer-events-none select-none">
                <img src={logo} alt="" className="size-full object-contain filter grayscale" />
              </div>

              {/* Corner Gold Flourishes (Geometric Accents) */}
              <div className="absolute top-3 left-3 size-4 border-t-2 border-l-2 border-amber-400/60 pointer-events-none" />
              <div className="absolute top-3 right-3 size-4 border-t-2 border-r-2 border-amber-400/60 pointer-events-none" />
              <div className="absolute bottom-3 left-3 size-4 border-b-2 border-l-2 border-amber-400/60 pointer-events-none" />
              <div className="absolute bottom-3 right-3 size-4 border-b-2 border-r-2 border-amber-400/60 pointer-events-none" />

              {/* Top VIP Crown Ribbon */}
              <div className="relative z-10 flex items-center justify-between gap-3 mb-6 pb-4 border-b border-amber-400/25">
                <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 px-4 py-1.5 text-xs sm:text-sm font-black text-brand-950 shadow-md">
                  <Crown className="size-4 text-brand-950 fill-brand-950" />
                  <span>{isAr ? 'راعي المؤتمر • رئيس الجامعة' : 'Conference Patron • President'}</span>
                </div>
                <div className="flex items-center gap-1 text-amber-300/80 text-xs font-bold">
                  <Star className="size-3.5 fill-amber-400 text-amber-400" />
                  <span className="hidden sm:inline">{isAr ? 'الرعاية السامية' : 'Supreme Patronage'}</span>
                </div>
              </div>

              {/* Card Main Body: Grand Layout */}
              <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-start gap-6 md:gap-8 my-auto">
                
                {/* Grand Presidential Medallion Portrait */}
                <div className="relative shrink-0 group/photo">
                  {/* Outer Animated Glow Aura */}
                  <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-amber-500/40 via-yellow-400/50 to-amber-600/30 blur-md pointer-events-none transition-all duration-700 group-hover:scale-105" />
                  
                  {/* Triple Ring Frame */}
                  <div className="relative size-36 sm:size-44 md:size-48 rounded-full p-1 bg-gradient-to-tr from-amber-300 via-yellow-400 to-amber-600 shadow-2xl">
                    <div className="size-full rounded-full p-1 bg-white">
                      <div className="size-full rounded-full overflow-hidden bg-slate-100">
                        <img
                          src={president.image || president.avatar}
                          alt={isAr ? president.nameAr : president.nameEn}
                          className="size-full object-cover object-top transition-transform duration-700 group-hover/photo:scale-105"
                          loading="eager"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Golden University Seal Badge Floating on Bottom */}
                  <div className="absolute -bottom-2.5 inset-x-0 flex justify-center">
                    <div className="inline-flex items-center gap-1 rounded-full bg-brand-950 border-2 border-amber-400 px-3 py-0.5 text-[11px] font-black text-amber-300 shadow-lg">
                      <span>{isAr ? 'جامعة المنوفية' : 'Menoufia Univ.'}</span>
                    </div>
                  </div>
                </div>

                {/* Presidential Credentials & Titles */}
                <div className="flex-1 text-center sm:text-start space-y-3 pt-2">
                  <div>
                    <span className="inline-block text-xs font-bold text-amber-300/90 tracking-wider uppercase mb-1">
                      {isAr ? 'الأستاذ الدكتور' : 'Professor Doctor'}
                    </span>
                    <h3 className="text-2xl sm:text-3xl md:text-3xl font-black text-white leading-tight tracking-tight">
                      {isAr ? president.nameAr : president.nameEn}
                    </h3>
                  </div>

                  <div className="inline-flex items-center gap-2 rounded-xl bg-amber-400/15 border border-amber-400/30 px-3.5 py-1.5 text-xs sm:text-sm font-black text-amber-300">
                    <Award className="size-4 text-amber-400 shrink-0" />
                    <span>{isAr ? president.titleAr : president.titleEn}</span>
                  </div>
                </div>

              </div>

            </div>
          </div>
        )}

        {/* ========================================================
            CARD 2: THE VICE PRESIDENT (أ.د. نانسي أسعد)
            Companion Prestige Card (5 Cols Desktop) - Dignified Luxury
           ======================================================== */}
        {vicePresident && (
          <div className="lg:col-span-5 relative group">
            <div className="relative h-full overflow-hidden rounded-3xl sm:rounded-[32px] border border-amber-400/50 bg-gradient-to-br from-[#022c20] via-[#012219] to-[#011710] p-6 sm:p-8 text-white shadow-xl transition-all duration-500 hover:border-amber-300 hover:shadow-2xl flex flex-col justify-between">
              
              {/* Ambient Glow */}
              <div className="absolute -top-20 -left-20 size-60 rounded-full bg-amber-500/15 blur-3xl pointer-events-none" />
              <div className="absolute -bottom-20 -right-20 size-60 rounded-full bg-emerald-500/15 blur-3xl pointer-events-none" />

              {/* Corner Accents */}
              <div className="absolute top-3 left-3 size-3.5 border-t border-l border-amber-400/40 pointer-events-none" />
              <div className="absolute top-3 right-3 size-3.5 border-t border-r border-amber-400/40 pointer-events-none" />
              <div className="absolute bottom-3 left-3 size-3.5 border-b border-l border-amber-400/40 pointer-events-none" />
              <div className="absolute bottom-3 right-3 size-3.5 border-b border-r border-amber-400/40 pointer-events-none" />

              {/* Top VIP Badge */}
              <div className="relative z-10 flex items-center justify-between gap-3 mb-6 pb-4 border-b border-amber-400/20">
                <div className="inline-flex items-center gap-2 rounded-full bg-amber-400/20 border border-amber-400/50 px-3.5 py-1 text-xs font-black text-amber-300">
                  <Sparkles className="size-3.5 text-amber-400" />
                  <span>{isAr ? 'رعاية المؤتمر • نائب رئيس الجامعة' : 'Patronage • Vice President'}</span>
                </div>
                <div className="size-2 rounded-full bg-amber-400" />
              </div>

              {/* Card Body */}
              <div className="relative z-10 flex flex-col items-center text-center space-y-4 my-auto">
                
                {/* Dignified Medallion Portrait */}
                <div className="relative group/photo">
                  <div className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-amber-400/30 to-emerald-400/30 blur-sm pointer-events-none transition-all duration-500 group-hover:scale-105" />
                  
                  <div className="relative size-32 sm:size-36 md:size-40 rounded-full p-1 bg-gradient-to-tr from-amber-400 to-amber-600 shadow-xl">
                    <div className="size-full rounded-full p-1 bg-white">
                      <div className="size-full rounded-full overflow-hidden bg-slate-100">
                        <img
                          src={vicePresident.image || vicePresident.avatar}
                          alt={isAr ? vicePresident.nameAr : vicePresident.nameEn}
                          className="size-full object-cover object-top transition-transform duration-700 group-hover/photo:scale-105"
                          loading="eager"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="absolute -bottom-2 inset-x-0 flex justify-center">
                    <div className="inline-flex items-center gap-1 rounded-full bg-brand-950 border border-amber-400/70 px-2.5 py-0.5 text-[10px] font-black text-amber-300 shadow-md">
                      <span>{isAr ? 'جامعة المنوفية' : 'Menoufia Univ.'}</span>
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-2 pt-2">
                  <span className="inline-block text-[11px] font-bold text-amber-300/80 uppercase">
                    {isAr ? 'الأستاذة الدكتورة' : 'Professor Doctor'}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
                    {isAr ? vicePresident.nameAr : vicePresident.nameEn}
                  </h3>

                  <div className="inline-flex items-center gap-1.5 rounded-lg bg-white/10 px-3 py-1 text-xs font-bold text-amber-300">
                    <Award className="size-3.5 text-amber-400" />
                    <span>{isAr ? vicePresident.titleAr : vicePresident.titleEn}</span>
                  </div>
                </div>

              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
