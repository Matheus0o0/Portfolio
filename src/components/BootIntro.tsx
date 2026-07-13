import { useEffect, useRef, useState } from 'react';

const BOOT_LINES = [
  { prompt: '$', text: './portfolio.sh --boot', delay: 300 },
  { prompt: '>', text: 'loading modules...', delay: 400 },
  { prompt: '>', text: 'init automations   [OK]', delay: 320 },
  { prompt: '>', text: 'init ai_agents     [OK]', delay: 320 },
  { prompt: '>', text: 'init integrations  [OK]', delay: 320 },
  { prompt: '>', text: 'mounting portfolio...', delay: 400 },
  { prompt: '>', text: 'ready █', delay: 400 },
] as const;

const SESSION_KEY = 'boot-shown-v1';

export function BootIntro() {
  const [visible, setVisible] = useState(() => {
    if (typeof window === 'undefined') return false;
    if (sessionStorage.getItem(SESSION_KEY)) return false;
    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
    return !reduced;
  });
  const [step, setStep] = useState(0);
  const [fading, setFading] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  const finish = () => {
    setFading(true);
    window.setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem(SESSION_KEY, '1');
    }, 350);
  };

  useEffect(() => {
    if (!visible) return;

    document.body.style.overflow = 'hidden';

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') {
        finish();
      }
    };
    document.addEventListener('keydown', onKey);

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKey);
    };
  }, [visible]);

  useEffect(() => {
    if (!visible) return;
    if (step >= BOOT_LINES.length) {
      timeoutRef.current = window.setTimeout(finish, 600);
      return () => {
        if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
      };
    }
    timeoutRef.current = window.setTimeout(() => {
      setStep((s) => s + 1);
    }, BOOT_LINES[step].delay);
    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, [step, visible]);

  if (!visible) return null;

  return (
    <div
      className={`boot-intro${fading ? ' boot-intro--fade' : ''}`}
      role="dialog"
      aria-label="Boot sequence"
      aria-live="polite"
    >
      <div className="boot-scanlines" aria-hidden="true" />
      <div className="boot-inner">
        <header className="boot-head mono">
          <span className="boot-brand">
            <span className="boot-brand-caret">❯</span> matheus_amorim.io
          </span>
          <button
            type="button"
            className="boot-skip mono"
            onClick={finish}
            aria-label="Pular introdução"
          >
            skip [esc]
          </button>
        </header>

        <div className="boot-terminal mono">
          {BOOT_LINES.slice(0, step).map((line, i) => (
            <p key={i} className="boot-line">
              <span className="boot-prompt">{line.prompt}</span>
              <span className="boot-text"> {line.text}</span>
            </p>
          ))}
          {step < BOOT_LINES.length && (
            <p className="boot-line boot-line--typing">
              <span className="boot-prompt">
                {BOOT_LINES[step].prompt}
              </span>
              <span className="boot-text"> {BOOT_LINES[step].text}</span>
              <span className="boot-cursor" aria-hidden="true" />
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
