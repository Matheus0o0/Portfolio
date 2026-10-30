import { useEffect, useRef, useState } from 'react';
import { useT } from '../i18n/context';
import { asset } from '../lib/asset';
import { SectionHeading } from './SectionHeading';
import { siteProjects, type SiteProject } from '../siteProjects';

export function FrontendGallery({ catalog = false }: { catalog?: boolean }) {
  const { lang } = useT();
  const pt = lang === 'pt';
  const [filter, setFilter] = useState('all');
  const [limit, setLimit] = useState(6);
  const [active, setActive] = useState<SiteProject | null>(null);
  const [fullImage, setFullImage] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const categories = [{ id: 'all', label: pt ? 'Todos' : 'All' }, { id: 'fitness', label: 'Fitness' }, { id: 'wellness', label: pt ? 'Saúde e bem-estar' : 'Health & wellness' }, { id: 'retail', label: pt ? 'Lojas' : 'Retail' }];
  const filtered = siteProjects.filter(p => filter === 'all' || p.category === filter);
  const visible = catalog ? filtered.slice(0, limit) : siteProjects.filter(p => p.featured).slice(0, 3);

  useEffect(() => {
    if (!active) return;
    const node = dialog.current;
    const overflow = document.body.style.overflow;
    node?.showModal();
    document.body.style.overflow = 'hidden';
    return () => { node?.close(); document.body.style.overflow = overflow; };
  }, [active]);

  function close() { setActive(null); setFullImage(false); }

  return (
    <section id="frontend" className={`section site-gallery${catalog ? ' site-catalog' : ''}`}>
      {catalog ? <header className="catalog-heading">
        <a href="#frontend" className="project-back">← {pt ? 'Voltar ao portfólio' : 'Back to portfolio'}</a>
        <h1>{pt ? 'Sites e experiências.' : 'Websites & experiences.'}</h1>
        <p>{pt ? 'Uma seleção do que eu desenho e desenvolvo. Explore os projetos e veja cada experiência em detalhe.' : 'A selection of what I design and build. Explore the projects and take a closer look at each experience.'}</p>
      </header> : <SectionHeading eyebrow="frontend_experience" title={pt ? 'Sites que eu crio.' : 'Websites I build.'} description={pt ? 'Do conceito ao código: uma seleção dos meus estudos autorais de interfaces e landing pages.' : 'From concept to code: selected independent interface and landing page studies.'} />}
      {catalog && <div className="catalog-toolbar"><div className="catalog-filters" role="group" aria-label={pt ? 'Filtrar projetos' : 'Filter projects'}>
        {categories.map(c => <button key={c.id} type="button" aria-pressed={filter === c.id} onClick={() => { setFilter(c.id); setLimit(6); }}>{c.label}</button>)}
      </div><p className="project-count" role="status">{filtered.length} {pt ? 'projetos' : 'projects'}</p></div>}
      <ul className="site-project-grid">
        {visible.map(project => <li key={project.id}>
          <button type="button" className="site-project-card" onClick={() => { setFullImage(false); setActive(project); }} aria-label={`${pt ? 'Ver projeto' : 'View project'} ${project.name}`}>
            <div className="site-project-cover"><img src={asset(project.cover)} alt={`${pt ? 'Interface de' : 'Interface for'} ${project.name}`} width="800" height="600" loading="lazy" decoding="async" /><span className="project-open" aria-hidden="true">↗</span></div>
            <div className="site-project-caption"><h2>{project.name}</h2><p>{project.summary[lang]}</p><span>{pt ? 'Ver projeto' : 'View project'} ↗</span></div>
          </button>
        </li>)}
      </ul>
      <div className="catalog-bottom">{catalog ? limit < filtered.length && <button className="project-action" type="button" onClick={() => setLimit(n => n + 6)}>{pt ? 'Carregar mais projetos' : 'Load more projects'}</button> : <a className="project-action" href="#/projetos">{pt ? 'Ver todos os projetos' : 'View all projects'} <span aria-hidden="true">↗</span></a>}</div>
      {active && <dialog ref={dialog} className="project-dialog" aria-labelledby="project-dialog-title" onCancel={close} onClose={close} onClick={e => { if (e.target === e.currentTarget) close(); }}>
        <div className="project-dialog-content">
          <div className="project-dialog-header"><h2 id="project-dialog-title">{active.name}</h2><button type="button" className="project-dismiss" onClick={close} aria-label={pt ? 'Fechar projeto' : 'Close project'} autoFocus>×</button></div>
          <p>{active.summary[lang]}</p>
          <p>{active.description?.[lang] ?? (pt ? 'Estudo autoral de landing page, do conceito visual ao código final.' : 'An independent landing page study, from visual concept to final code.')}</p>
          <div className="project-media"><img key={`${active.id}-${fullImage}`} src={asset(fullImage ? active.image : active.cover)} alt={active.name} width={fullImage ? undefined : 800} height={fullImage ? undefined : 600} decoding="async" /></div>
          <div className="project-links">
            <button type="button" className="project-action" onClick={() => setFullImage(v => !v)}>{fullImage ? (pt ? 'Ver capa' : 'View cover') : (pt ? 'Ver página completa' : 'View full screenshot')}</button>
            {active.liveUrl && <a className="project-action" href={active.liveUrl} target="_blank" rel="noopener noreferrer">{pt ? 'Acessar site' : 'Visit website'} ↗</a>}
            {active.repositoryUrl && <a className="project-action" href={active.repositoryUrl} target="_blank" rel="noopener noreferrer">{pt ? 'Ver código' : 'View code'} ↗</a>}
          </div>
          {active.video && <video controls preload="none" poster={asset(active.cover)} src={asset(active.video)} aria-label={pt ? `Demonstração de ${active.name}` : `${active.name} demo`} />}
        </div>
      </dialog>}
    </section>
  );
}
