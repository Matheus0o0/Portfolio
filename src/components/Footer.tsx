import { useT } from '../i18n/context';

export function Footer() {
  const { t } = useT();
  const year = new Date().getFullYear();

  return (
    <footer className="footer mono">
      <div className="footer-inner">
        <p>{t.footer.built}</p>
        <p className="footer-copy">
          {t.footer.copyPrefix} {year} {t.footer.copySuffix}
        </p>
      </div>
    </footer>
  );
}
