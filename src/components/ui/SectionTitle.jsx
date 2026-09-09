import { classNames } from '../../utils/classNames';

function SectionTitle({ eyebrow, title, description, align = 'left', className }) {
  const centered = align === 'center';

  return (
    <div className={classNames(centered && 'mx-auto text-center', className)}>
      {eyebrow && (
        <p className="mb-2 text-sm font-bold uppercase tracking-widest text-brand-600">
          {eyebrow}
        </p>
      )}
      <h1 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
        {title}
      </h1>
      {description && (
        <p className={classNames('mt-4 max-w-2xl text-base leading-7 text-slate-600', centered && 'mx-auto')}>
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionTitle;
