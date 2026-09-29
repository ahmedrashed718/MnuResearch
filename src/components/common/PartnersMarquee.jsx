import React from 'react';
import { ArrowRight, Globe2, Handshake } from 'lucide-react';
import { Link } from 'react-router-dom';
import { dummyPartners } from '../../data/partnersData';
import { useTranslation } from '../../hooks/useTranslation';
import Container from '../ui/Container';

export default function PartnersMarquee() {
  const { language } = useTranslation();
  const isAr = language === 'ar';

  return (
    <section className="relative overflow-hidden bg-[#f4f8f5] py-16 lg:py-20 border-t border-brand-900/5">
      <Container>
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end mb-10">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-700/20 bg-white/90 px-3.5 py-1.5 text-xs font-bold text-brand-800 shadow-sm backdrop-blur">
              <Handshake className="size-3.5 text-gold-600" />
              <span>{isAr ? 'الشركاء والرعاة الرسميون' : 'Official Partners & Sponsors'}</span>
            </div>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-brand-950 sm:text-4xl">
              {isAr ? 'الشركاء والجهات الداعمة للمؤتمر' : 'Conference Partners & Supporters'}
            </h2>
            <p className="mt-2 max-w-xl text-base text-slate-600">
              {isAr
                ? 'شراكات استراتيجية لدعم الابتكار والأنشطة الطلابية بالمؤتمر الطلابي الأول لجامعة المنوفية الأهلية.'
                : 'Strategic partnerships supporting student innovation and interactive conference activities.'}
            </p>
          </div>

          <Link
            to="/partners"
            className="group inline-flex items-center gap-2 text-sm font-bold text-brand-700 transition-colors hover:text-brand-900"
          >
            <span>{isAr ? 'استعرض تفاصيل الرعاية' : 'View Sponsorship Details'}</span>
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
          </Link>
        </div>

        {/* Sponsor Cards Showcase - No repetition */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {dummyPartners.map((partner) => {
            const name = isAr ? partner.nameAr : partner.nameEn;
            const category = isAr ? partner.categoryAr : partner.categoryEn;
            const desc = isAr ? partner.descriptionAr : partner.descriptionEn;

            return (
              <div
                key={partner.id}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-gold-500/50 hover:shadow-xl hover:shadow-brand-900/10"
              >
                {/* Top Subtle Gradient Accent Line on Hover */}
                <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-brand-700 via-gold-500 to-brand-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div>
                  <div className="flex items-center justify-between gap-4">
                    {/* Brand Vector Logo Box */}
                    <div className="flex h-16 w-40 items-center justify-start rounded-xl bg-white p-1 transition-transform duration-300 group-hover:scale-105">
                      <img
                        src={partner.logo}
                        alt={name}
                        className="h-full max-w-full object-contain object-start filter drop-shadow-xs"
                        loading="lazy"
                      />
                    </div>

                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noreferrer"
                      className="flex size-9 shrink-0 items-center justify-center rounded-full bg-slate-50 text-slate-400 group-hover:bg-gold-50 group-hover:text-gold-600 transition-colors"
                      title={name}
                    >
                      <Globe2 className="size-4" />
                    </a>
                  </div>

                  {/* Partner Name & Category */}
                  <div className="mt-5">
                    <h3 className="text-xl font-black text-brand-950 transition-colors group-hover:text-brand-700">
                      {name}
                    </h3>
                    <p className="mt-1 text-xs font-bold text-gold-700">
                      {category}
                    </p>
                    <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                      {desc}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <a
                    href={partner.website}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-black text-brand-700 hover:text-brand-900 transition-colors"
                  >
                    <span>{isAr ? 'زيارة الموقع الرسمي' : 'Official Website'}</span>
                    <ArrowRight className="size-3.5 rtl:rotate-180" />
                  </a>
                  <span className="text-[11px] font-bold text-slate-400">
                    {isAr ? 'راعي رسمي' : 'Official Sponsor'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
