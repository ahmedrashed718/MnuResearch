import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useEffect, useId, useRef } from 'react';
import { createPortal } from 'react-dom';
import Button from './Button';
import { useTranslation } from '../../hooks/useTranslation';

function Modal({ isOpen, onClose, title, children, footer, maxWidthClass = 'max-w-lg' }) {
  const titleId = useId();
  const closeButtonRef = useRef(null);
  const { t } = useTranslation();

  useEffect(() => {
    if (!isOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 grid place-items-center overflow-y-auto p-4">
          <motion.button
            type="button"
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-xs"
            aria-label={t('actions.close')}
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className={`relative z-10 w-full ${maxWidthClass} overflow-hidden rounded-3xl bg-white shadow-2xl dir-auto`}
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
          >
            <div className="flex items-center justify-between border-b border-emerald-900/10 bg-emerald-950/5 px-6 py-4">
              <h2 id={titleId} className="text-xl font-bold text-slate-900">{title}</h2>
              <Button ref={closeButtonRef} variant="ghost" size="icon" onClick={onClose} aria-label={t('actions.close')} className="rounded-full hover:bg-emerald-900/10">
                <X className="size-5 text-slate-600" aria-hidden="true" />
              </Button>
            </div>
            <div className="px-6 py-6">{children}</div>
            {footer && <div className="border-t border-emerald-900/10 bg-slate-50 px-6 py-4">{footer}</div>}
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body,
  );
}

export default Modal;
