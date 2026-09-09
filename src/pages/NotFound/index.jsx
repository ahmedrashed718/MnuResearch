import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Container from '../../components/ui/Container';
import { useTranslation } from '../../hooks/useTranslation';

function NotFound() {
  const { t } = useTranslation();

  return (
    <main className="grid min-h-screen place-items-center bg-slate-50 py-16">
      <Container className="text-center">
        <p className="text-7xl font-bold text-brand-600">404</p>
        <h1 className="mt-4 text-3xl font-bold text-slate-950">{t('errors.pageNotFound')}</h1>
        <p className="mt-3 text-slate-600">
          {t('errors.pageNotFoundDescription')}
        </p>
        <Link
          to="/"
          className="mt-7 inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-brand-600 px-5 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
        >
          <ArrowLeft className="size-4 rtl:rotate-180" aria-hidden="true" />
          {t('actions.returnHome')}
        </Link>
      </Container>
    </main>
  );
}

export default NotFound;
