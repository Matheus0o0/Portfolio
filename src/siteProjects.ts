type Localized = { pt: string; en: string };
export type SiteProject = {
  id: string;
  name: string;
  category: 'fitness' | 'wellness' | 'retail';
  summary: Localized;
  description?: Localized;
  cover: string;
  image: string;
  featured?: boolean;
  liveUrl?: string;
  repositoryUrl?: string;
  video?: string;
};

// Add projects here; use lightweight 800 × 600 WebP covers.
// Optional links and videos appear only when a real destination is provided.
const entries: Omit<SiteProject, 'cover' | 'image'>[] = [
  { id: 'fibrado-gym', name: 'Fibrado Gym', category: 'fitness', summary: { pt: 'Academia · Musculação', en: 'Gym · Strength training' }, featured: true },
  { id: 'jhonees-fitness', name: 'Jhonees Fitness', category: 'fitness', summary: { pt: 'Academia · Musculação', en: 'Gym · Strength training' }, featured: true },
  { id: 'garota-fitness', name: 'Garota Fitness', category: 'fitness', summary: { pt: 'Academia · Público feminino', en: 'Gym · Women’s fitness' }, featured: true },
  { id: 'studio-zero-7', name: 'Studio Zero 7', category: 'fitness', summary: { pt: 'Studio boutique', en: 'Boutique studio' } },
];
export const siteProjects: SiteProject[] = entries.map(project => ({ ...project, cover: `/screenshots/covers/${project.id}.webp`, image: `/screenshots/${project.id}.png` }));
