import { useEffect, useState } from 'react';
import { About } from './components/About';
import { BootIntro } from './components/BootIntro';
import { Certificates } from './components/Certificates';
import { Contact } from './components/Contact';
import { CursorSpotlight } from './components/CursorSpotlight';
import { Footer } from './components/Footer';
import { FrontendGallery } from './components/FrontendGallery';
import { Hero } from './components/Hero';
import { N8nGallery } from './components/N8nGallery';
import { Nav } from './components/Nav';
import { Projects } from './components/Projects';
import { Stack } from './components/Stack';
import { useT } from './i18n/context';
import './App.css';
import './project-gallery.css';

export default function App() {
  const { t } = useT();
  const [catalog, setCatalog] = useState(() => window.location.hash === '#/projetos');
  useEffect(() => {
    const navigate = () => {
      const next = window.location.hash === '#/projetos';
      setCatalog(next);
      requestAnimationFrame(() => {
        if (next) window.scrollTo(0, 0);
        else document.getElementById(window.location.hash.slice(1) || 'top')?.scrollIntoView();
      });
    };
    window.addEventListener('hashchange', navigate);
    return () => window.removeEventListener('hashchange', navigate);
  }, []);

  return (
    <>
      {!catalog && <BootIntro />}
      <CursorSpotlight />
      <a href="#top" className="skip-link">
        {t.nav.skipLink}
      </a>
      <Nav />
      <main className="main">
        {catalog ? <FrontendGallery key="catalog" catalog /> : <>
        <Hero />
        <About />
        <Certificates />
        <Projects />
        <Stack />
        <FrontendGallery />
        <N8nGallery />
        <Contact />
        </>}
      </main>
      <Footer />
    </>
  );
}
