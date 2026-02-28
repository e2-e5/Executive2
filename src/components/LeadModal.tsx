import React, {useEffect, useRef, useState} from 'react';
import {X} from 'lucide-react';

type LeadModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

type Status = 'idle' | 'submitting' | 'success' | 'error';

const errorMessages: Record<string, string> = {
  name_and_contact_required: 'Укажите ФИО и хотя бы один контакт: телефон или Telegram.',
  google_script_not_configured: 'Интеграция Google Sheets не настроена.',
  google_script_request_failed: 'Сервис Google временно недоступен.',
  google_script_error: 'Не удалось сохранить заявку.',
  google_script_invalid_response: 'Google Script вернул неожиданный ответ.',
};

const formatPhoneInput = (rawValue: string) => {
  let digits = rawValue.replace(/\D/g, '');

  if (digits.startsWith('8')) {
    digits = `7${digits.slice(1)}`;
  } else if (!digits.startsWith('7')) {
    digits = `7${digits}`;
  }

  digits = digits.slice(0, 11);
  const local = digits.slice(1);

  let result = '+7';
  if (local.length > 0) result += ` (${local.slice(0, 3)}`;
  if (local.length >= 3) result += ')';
  if (local.length > 3) result += ` ${local.slice(3, 6)}`;
  if (local.length > 6) result += `-${local.slice(6, 8)}`;
  if (local.length > 8) result += `-${local.slice(8, 10)}`;
  return result;
};

const normalizePhone = (value: string) => {
  const digits = value.replace(/\D/g, '');
  if (digits.length === 11 && digits.startsWith('7')) {
    return `+${digits}`;
  }
  return '';
};

const normalizeTelegram = (value: string) => {
  const trimmed = value.trim();
  if (!trimmed) return '';
  const withoutUrl = trimmed
    .replace(/^https?:\/\/t\.me\//i, '')
    .replace(/^t\.me\//i, '')
    .replace(/^@+/, '');
  return withoutUrl ? `@${withoutUrl}` : '';
};

export function LeadModal({isOpen, onClose}: LeadModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [telegram, setTelegram] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');
  const closeTimerRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isOpen) {
      setName('');
      setPhone('');
      setTelegram('');
      setStatus('idle');
      setError('');
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = prevOverflow;
      if (closeTimerRef.current) {
        window.clearTimeout(closeTimerRef.current);
      }
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const safeName = name.trim();
    const safePhone = normalizePhone(phone);
    const safeTelegram = normalizeTelegram(telegram);
    const safeContact = [safePhone ? `phone: ${safePhone}` : '', safeTelegram ? `telegram: ${safeTelegram}` : '']
      .filter(Boolean)
      .join(' | ');

    if (!safeName || !safeContact) {
      setStatus('error');
      setError(errorMessages.name_and_contact_required);
      return;
    }

    setStatus('submitting');
    setError('');

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: safeName,
          phone: safePhone,
          telegram: safeTelegram,
          contact: safeContact,
        }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        const message =
          typeof data?.error === 'string' && errorMessages[data.error]
            ? errorMessages[data.error]
            : 'Не удалось отправить заявку. Попробуйте позже.';
        setStatus('error');
        setError(message);
        return;
      }

      setStatus('success');
      closeTimerRef.current = window.setTimeout(() => onClose(), 2500);
    } catch (_error) {
      setStatus('error');
      setError('Не удалось отправить заявку. Попробуйте позже.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      ></div>
      <div className="relative w-full max-w-lg rounded-2xl border border-white/10 bg-[#0a1114] p-8 shadow-[0_0_40px_rgba(0,0,0,0.45)]">
        <button
          type="button"
          className="absolute right-4 top-4 text-white/60 hover:text-white transition"
          onClick={onClose}
          aria-label="Закрыть"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="mb-6">
          <p className="text-xs uppercase tracking-[0.2em] text-primary/70 font-semibold">Запись на встречу</p>
          <h3 className="text-2xl md:text-3xl font-bold text-white mt-2">Оставьте контакты</h3>
          <p className="text-slate-400 mt-2">Ответим в течение рабочего дня.</p>
        </div>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <label className="flex flex-col gap-2 text-sm text-slate-300">
            ФИО
            <input
              className="h-12 rounded-lg bg-white/5 border border-white/10 px-4 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/60"
              placeholder="Иван Петров"
              value={name}
              onChange={(event) => setName(event.target.value)}
              disabled={status === 'submitting'}
              required
            />
          </label>
          <label className="flex flex-col gap-2 text-sm text-slate-300">
            Телефон
            <input
              className="h-12 rounded-lg bg-white/5 border border-white/10 px-4 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/60"
              placeholder="+7 (999) 123-45-67"
              value={phone}
              onChange={(event) => setPhone(formatPhoneInput(event.target.value))}
              type="tel"
              inputMode="tel"
              disabled={status === 'submitting'}
            />
          </label>
          <label className="flex flex-col gap-2 text-sm text-slate-300">
            Telegram
            <input
              className="h-12 rounded-lg bg-white/5 border border-white/10 px-4 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/60"
              placeholder="@username"
              value={telegram}
              onChange={(event) => setTelegram(event.target.value)}
              disabled={status === 'submitting'}
            />
          </label>

          {status === 'error' && error ? (
            <div className="text-sm text-red-300 bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3">
              {error}
            </div>
          ) : null}

          {status === 'success' ? (
            <div className="text-sm text-emerald-200 bg-emerald-500/10 border border-emerald-500/20 rounded-lg px-4 py-3">
              Заявка отправлена. Свяжемся с вами в течение рабочего дня.
            </div>
          ) : null}

          <button
            type="submit"
            className="mt-2 h-12 rounded-lg bg-primary text-[#0a1114] font-bold hover:bg-primary-hover transition disabled:opacity-60 disabled:cursor-not-allowed"
            disabled={status === 'submitting'}
          >
            {status === 'submitting' ? 'Отправка...' : 'Отправить заявку'}
          </button>
        </form>
      </div>
    </div>
  );
}
