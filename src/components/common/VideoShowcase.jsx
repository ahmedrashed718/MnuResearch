import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Play,
  Sparkles,
  ArrowUpRight,
  Share2,
  Check,
  Award,
  Video,
  ShieldCheck,
} from 'lucide-react';
import Container from '../ui/Container';
import { conferenceVideosData } from '../../data/videosData';
import { useTranslation } from '../../hooks/useTranslation';
import logo from '../../assets/images/logo.jpeg';
import videoCoverBackdrop from '../../assets/images/video_cover_backdrop.jpg';

export default function VideoShowcase() {
  const { language } = useTranslation();
  const isAr = language === 'ar';

  const [activeVideo, setActiveVideo] = useState(conferenceVideosData[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [copied, setCopied] = useState(false);

  // Cinematic Conference Hall Stage Backdrop
  const coverImage = videoCoverBackdrop;

  const handleSelectVideo = (video) => {
    setActiveVideo(video);
    setIsPlaying(true);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: isAr ? activeVideo.titleAr : activeVideo.titleEn,
          url: window.location.href,
        })
        .catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const activeTitle = isAr ? activeVideo.titleAr : activeVideo.titleEn;
  const activeSpeaker = isAr ? activeVideo.speakerAr : activeVideo.speakerEn;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#011912] via-[#02241a] to-[#01140e] py-12 sm:py-20 text-white border-y border-amber-500/25">
      {/* Dynamic Theater Glow & Spotlights */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[340px] sm:w-[700px] lg:w-[1000px] h-[300px] sm:h-[450px] bg-gradient-to-b from-amber-400/20 via-emerald-400/10 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -start-28 size-60 sm:size-96 rounded-full bg-emerald-500/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -end-28 size-60 sm:size-96 rounded-full bg-amber-500/15 blur-3xl pointer-events-none" />

      {/* Subtle Micro-Grid */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(245, 158, 11, 0.45) 1.5px, transparent 1.5px)`,
          backgroundSize: '24px 24px',
        }}
      />

      <Container className="relative z-10 max-w-5xl px-3 sm:px-6 lg:px-8">
        {/* --- HEADER (Concise, Elegant & Perfectly Balanced) --- */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-10">
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/40 bg-gradient-to-r from-amber-500/20 via-amber-400/15 to-amber-500/20 px-3.5 py-1 text-[11px] sm:text-xs font-black text-amber-300 shadow-sm backdrop-blur-md"
          >
            <Sparkles className="size-3 text-amber-400 animate-pulse" />
            <span>{isAr ? 'المركز المرئي للمؤتمر' : 'Conference Media Center'}</span>
          </motion.div>

          <h2 className="mt-2.5 text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight leading-snug">
            {conferenceVideosData.length > 1 ? (
              isAr ? (
                <>
                  <span>كلمة الافتتاح</span>{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200">
                    والعروض التعريفية
                  </span>
                </>
              ) : (
                <>
                  <span>Keynote Speech &</span>{' '}
                  <span className="text-amber-400">Highlights</span>
                </>
              )
            ) : (
              isAr ? (
                <>
                  <span>الكلمة الافتتاحية</span>{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200">
                    لرئيس الجامعة
                  </span>
                </>
              ) : (
                <>
                  <span>Keynote Address by</span>{' '}
                  <span className="text-amber-400">University President</span>
                </>
              )
            )}
          </h2>
        </div>

        {/* --- DYNAMIC TABS (Automatically visible when multiple videos exist) --- */}
        {conferenceVideosData.length > 1 && (
          <div className="flex items-center justify-center p-1 mb-5 sm:mb-7 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md max-w-md mx-auto gap-1">
            {conferenceVideosData.map((video, idx) => {
              const isCurrent = video.id === activeVideo.id;
              const shortTitle = isAr ? video.shortTitleAr : video.shortTitleEn;

              return (
                <button
                  key={video.id}
                  type="button"
                  onClick={() => handleSelectVideo(video)}
                  className={`relative flex-1 flex items-center justify-center gap-1.5 py-2 sm:py-2.5 px-3 rounded-lg sm:rounded-xl text-[11px] sm:text-xs font-black transition-all duration-200 cursor-pointer ${
                    isCurrent
                      ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-brand-950 shadow-md shadow-amber-500/25'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {idx === 0 ? (
                    <Award className="size-3.5 sm:size-4 shrink-0" />
                  ) : (
                    <Video className="size-3.5 sm:size-4 shrink-0" />
                  )}
                  <span className="truncate">{shortTitle}</span>
                </button>
              );
            })}
          </div>
        )}

        {/* --- LUXURY CINEMA STAGE (Surround Glow on Desktop & Flawless Mobile Ergonomics) --- */}
        <div className="relative group/player mx-auto">
          {/* Ambient Dynamic Backlight Ring */}
          <div className="absolute -inset-1 sm:-inset-2 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-amber-500/25 via-emerald-500/20 to-amber-500/25 blur-xl sm:blur-2xl opacity-75 group-hover/player:opacity-100 transition-opacity duration-500 -z-10" />

          {/* Unified Console Chassis */}
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-amber-400/40 bg-gradient-to-b from-[#022c20] via-[#011f17] to-[#01140e] shadow-[0_25px_80px_-15px_rgba(0,0,0,0.95)]">
            
            {/* Top Studio Control Bar */}
            <div className="flex items-center justify-between px-3.5 py-2 sm:px-6 sm:py-2.5 border-b border-white/10 bg-black/50 backdrop-blur-md">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <span className="size-2 sm:size-2.5 rounded-full bg-red-500/90 shadow-sm" />
                  <span className="size-2 sm:size-2.5 rounded-full bg-amber-400/90 shadow-sm" />
                  <span className="size-2 sm:size-2.5 rounded-full bg-emerald-400/90 shadow-sm" />
                </div>
                <span className="ms-1 sm:ms-2 text-[10px] sm:text-xs font-black text-slate-200">
                  {isAr ? 'جامعة المنوفية الأهلية • البث الرسمي' : 'MNU Official Broadcast'}
                </span>
              </div>
            </div>

            {/* 16:9 Screen Frame with Real Video & High-Quality Cover */}
            <div className="relative aspect-[16/9] w-full bg-black overflow-hidden select-none">
              {isPlaying ? (
                activeVideo.videoSrc ? (
                  <video
                    key={activeVideo.id}
                    src={activeVideo.videoSrc}
                    controls
                    autoPlay
                    playsInline
                    controlsList="nodownload"
                    className="size-full object-contain bg-black"
                  />
                ) : (
                  <iframe
                    key={activeVideo.id}
                    src={`https://www.youtube-nocookie.com/embed/${activeVideo.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                    title={activeTitle}
                    className="size-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                )
              ) : (
                /* Seamless High-End Poster Overlay with Conference Logo */
                <div
                  onClick={() => setIsPlaying(true)}
                  className="relative size-full flex flex-col items-center justify-between p-3.5 sm:p-7 text-center cursor-pointer group/overlay select-none overflow-hidden"
                >
                  {/* High-Resolution Image Backdrop */}
                  <img
                    src={coverImage}
                    alt={activeTitle}
                    loading="eager"
                    className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover/overlay:scale-105 pointer-events-none"
                  />

                  {/* Subtle Cinematic Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/55 pointer-events-none" />

                  {/* Top Row: Official Conference Crest & Badge */}
                  <div className="relative z-10 w-full flex items-center justify-between">
                    <div className="flex items-center gap-2 sm:gap-2.5 rounded-full bg-black/60 border border-amber-400/40 px-2.5 py-1 sm:px-3 sm:py-1.5 backdrop-blur-md shadow-md">
                      <img
                        src={logo}
                        alt="MNU Conference Logo"
                        className="size-5 sm:size-7 rounded-full object-cover bg-white p-0.5 border border-amber-400"
                      />
                      <span className="text-[10px] sm:text-xs font-bold text-amber-300">
                        {isAr ? 'المؤتمر الطلابي الأول للبحث العلمي' : '1st Student Research Conference'}
                      </span>
                    </div>

                    <div className="hidden sm:inline-flex items-center gap-1 rounded-full bg-emerald-500/20 border border-emerald-400/35 px-2.5 py-1 text-[11px] font-black text-emerald-300 backdrop-blur-md">
                      <Sparkles className="size-3 text-emerald-400 animate-pulse" />
                      <span>{isAr ? 'فيديو حصري' : 'Exclusive'}</span>
                    </div>
                  </div>

                  {/* Center Area: Conference Emblem + Ultra-Glow Magnetic Play Button */}
                  <div className="relative z-10 flex flex-col items-center justify-center my-auto">
                    {/* Conference Logo Jewel with Ambient Glow */}
                    <div className="relative mb-2 sm:mb-3">
                      <div className="size-16 sm:size-24 lg:size-28 rounded-full p-1 bg-white shadow-[0_0_40px_rgba(245,158,11,0.5)] border-2 border-amber-400">
                        <img
                          src={logo}
                          alt="Conference Logo"
                          className="size-full object-contain rounded-full"
                        />
                      </div>
                    </div>

                    {/* Golden Magnetic Play Button */}
                    <motion.div
                      whileHover={{ scale: 1.12 }}
                      whileTap={{ scale: 0.94 }}
                      className="relative flex size-13 sm:size-18 lg:size-20 items-center justify-center rounded-full bg-gradient-to-tr from-amber-500 via-amber-400 to-amber-300 text-brand-950 shadow-[0_0_35px_rgba(245,158,11,0.7)] group-hover/overlay:shadow-[0_0_60px_rgba(245,158,11,1)] transition-all duration-300"
                    >
                      <span className="absolute -inset-2 sm:-inset-2.5 rounded-full border-2 border-amber-400/60 animate-ping opacity-60 pointer-events-none" />
                      <Play className="size-6 sm:size-8 lg:size-9 fill-current ms-0.5 sm:ms-1" />
                    </motion.div>
                  </div>

                  {/* Bottom Area: Keynote Title & Speaker */}
                  <div className="relative z-10 max-w-sm sm:max-w-xl px-2">
                    <h3 className="text-sm sm:text-lg lg:text-xl font-black text-white drop-shadow-md line-clamp-1 leading-snug">
                      {activeTitle}
                    </h3>
                    <p className="mt-0.5 sm:mt-1 text-[11px] sm:text-xs text-amber-300 font-bold flex items-center justify-center gap-1.5">
                      <span>{activeSpeaker}</span>
                      <span>•</span>
                      <span className="underline underline-offset-4 decoration-amber-400/60">
                        {isAr ? 'انقر للتشغيل والاستماع' : 'Click to Play'}
                      </span>
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Integrated Console Footer (Polished for Desktop & Mobile) */}
            <div className="px-3.5 py-3 sm:px-6 sm:py-3.5 bg-gradient-to-r from-black/85 via-[#012117]/90 to-black/85 backdrop-blur-xl border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              {/* Speaker Identity */}
              <div className="flex items-center gap-2.5 sm:gap-3.5 min-w-0">
                <div className="relative size-10 sm:size-11 shrink-0 rounded-xl overflow-hidden border-2 border-amber-400/60 bg-white p-0.5 shadow-md shadow-amber-500/10">
                  <img src={logo} alt="" className="size-full object-cover rounded-lg" />
                  <span className="absolute bottom-0 end-0 size-2 sm:size-2.5 rounded-full bg-emerald-400 ring-2 ring-brand-950" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <h4 className="text-xs sm:text-sm font-black text-white truncate leading-tight">
                      {activeTitle}
                    </h4>
                    <ShieldCheck className="size-3.5 sm:size-4 text-emerald-400 shrink-0" />
                  </div>
                  <p className="text-[10px] sm:text-xs text-amber-300 font-bold truncate mt-0.5">
                    {activeSpeaker}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 pt-2 sm:pt-0 border-t sm:border-t-0 border-white/10 shrink-0">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLScuuKS6INAUHp5jmeQuRtNyEAiwLGhO2JdAzWhwstdL42GmMg/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial inline-flex h-9 sm:h-10 items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 px-4 text-xs font-black text-brand-950 shadow-md shadow-amber-500/25 transition-all hover:scale-105 active:scale-95"
                >
                  <span>{isAr ? 'سجل في المؤتمر' : 'Register Now'}</span>
                  <ArrowUpRight className="size-3.5 rtl:-rotate-90" />
                </a>

                <button
                  type="button"
                  onClick={handleShare}
                  className="inline-flex h-9 sm:h-10 items-center justify-center gap-1.5 rounded-xl border border-white/15 bg-white/10 hover:bg-white/20 px-3 text-xs font-bold text-white transition-all cursor-pointer"
                  title={isAr ? 'مشاركة' : 'Share'}
                >
                  {copied ? (
                    <>
                      <Check className="size-3.5 text-emerald-400" />
                      <span className="text-[11px]">{isAr ? 'تم النسخ' : 'Copied'}</span>
                    </>
                  ) : (
                    <>
                      <Share2 className="size-3.5 text-amber-300" />
                      <span className="text-[11px]">{isAr ? 'مشاركة' : 'Share'}</span>
                    </>
                  )}
                </button>
              </div>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}

