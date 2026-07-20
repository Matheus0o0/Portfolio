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

export default function App() {
  const { t } = useT();

  return (
    <>
      <BootIntro />
      <CursorSpotlight />
      <a href="#top" className="skip-link">
        {t.nav.skipLink}
      </a>
      <Nav />
      <main className="main">
        <Hero />
        <About />
        <Certificates />
        <Projects />
        <Stack />
        <FrontendGallery />
        <N8nGallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
