import { forwardRef, useId } from 'react';
import { classNames } from '../../utils/classNames';

const Input = forwardRef(function Input(
  { id, label, error, hint, className, containerClassName, required, ...props },
  ref,
) {
  const generatedId = useId();
  const inputId = id || generatedId;
  const descriptionId = error || hint ? `${inputId}-description` : undefined;

  return (
    <div className={containerClassName}>
      {label && (
        <label htmlFor={inputId} className="mb-2 block text-sm font-semibold text-slate-700">
          {label}
          {required && <span className="ml-1 text-red-600" aria-hidden="true">*</span>}
        </label>
      )}
      <input
        ref={ref}
        id={inputId}
        required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={descriptionId}
        className={classNames(
          'block h-11 w-full rounded-lg border bg-white px-3 text-slate-900 shadow-sm placeholder:text-slate-400 disabled:cursor-not-allowed disabled:bg-slate-100',
          error ? 'border-red-500' : 'border-slate-300 hover:border-slate-400',
          className,
        )}
        {...props}
      />
      {(error || hint) && (
        <p id={descriptionId} className={classNames('mt-1.5 text-sm', error ? 'text-red-600' : 'text-slate-500')}>
          {error || hint}
        </p>
      )}
    </div>
  );
});

export default Input;
