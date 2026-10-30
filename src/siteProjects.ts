type Localized = { pt: string; en: string };
export type SiteProject = {
  id: string;
  name: string;
  category: 'fitness' | 'wellness' | 'retail' | 'legal' | 'food';
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
  { id: 'spin-up', name: 'Spin Up Studio', category: 'fitness', summary: { pt: 'Studio boutique · Spinning e movimento', en: 'Boutique studio · Spinning & movement' }, description: { pt: 'Site para studio boutique de Salvador, com modalidades, planos, agenda de aulas e unidades.', en: 'A website for a boutique studio in Salvador, featuring classes, plans, schedules and locations.' }, featured: true },
  { id: 'leila-gordiano', name: 'Leila Gordiano Gomes', category: 'legal', summary: { pt: 'Advocacia · Site institucional', en: 'Law firm · Corporate website' }, description: { pt: 'Site institucional para escritório de advocacia em Conceição do Coité, com áreas de atuação, equipe e canais de atendimento.', en: 'A law firm website in Conceição do Coité, presenting practice areas, the team and contact channels.' }, featured: true },
  { id: 'hikaro', name: 'Hikaro Express', category: 'food', summary: { pt: 'Gastronomia · Culinária japonesa', en: 'Food · Japanese cuisine' }, description: { pt: 'Landing page de culinária japonesa com apresentação do restaurante, cardápio e acesso ao delivery.', en: 'A Japanese cuisine landing page presenting the restaurant, menu and delivery access.' }, featured: true },
  { id: 'agity-pilates', name: 'Agity Pilates', category: 'wellness', summary: { pt: 'Pilates e fisioterapia · Santana, São Paulo', en: 'Pilates & physical therapy · Santana, São Paulo' }, description: { pt: 'Site para studio de Pilates e fisioterapia, apresentando o método, o espaço, a equipe e os canais para agendar uma aula.', en: 'A Pilates and physical therapy studio website presenting its approach, facilities, team and class booking channels.' } },
  { id: 'fibrado-gym', name: 'Fibrado Gym', category: 'fitness', summary: { pt: 'Academia · Musculação', en: 'Gym · Strength training' } },
  { id: 'jhonees-fitness', name: 'Jhonees Fitness', category: 'fitness', summary: { pt: 'Academia · Musculação', en: 'Gym · Strength training' } },
  { id: 'garota-fitness', name: 'Garota Fitness', category: 'fitness', summary: { pt: 'Academia · Público feminino', en: 'Gym · Women’s fitness' } },
  { id: 'studio-zero-7', name: 'Studio Zero 7', category: 'fitness', summary: { pt: 'Studio boutique', en: 'Boutique studio' } },
];
export const siteProjects: SiteProject[] = entries.map(project => ({ ...project, cover: `/screenshots/covers/${project.id}.webp`, image: `/screenshots/${project.id}.png` }));
