import { classNames } from '../../utils/classNames';
import { useTranslation } from '../../hooks/useTranslation';

function Loading({ fullScreen = false, label, className }) {
  const { t } = useTranslation();

  return (
    <div
      className={classNames(
        'flex items-center justify-center gap-3 text-sm font-medium text-slate-600',
        fullScreen ? 'min-h-screen' : 'min-h-40',
        className,
      )}
      role="status"
      aria-live="polite"
    >
      <span className="size-6 animate-spin rounded-full border-2 border-brand-600 border-r-transparent" />
      <span>{label || t('common.loading')}</span>
    </div>
  );
}

export default Loading;
