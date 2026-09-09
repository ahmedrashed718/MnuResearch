import React from 'react';
import Container from '../ui/Container';
import PageHeroBanner from './PageHeroBanner';
import { useTranslation } from '../../hooks/useTranslation';

function PagePlaceholder({ titleKey, descriptionKey }) {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-[#f8fbf9] pt-3 sm:pt-6 pb-24">
      <PageHeroBanner
        title={t(titleKey)}
        subtitle={descriptionKey ? t(descriptionKey) : undefined}
      />
      <Container className="mt-12 text-center text-slate-500 font-medium text-sm">
        {/* Placeholder content section */}
      </Container>
    </div>
  );
}

export default PagePlaceholder;
