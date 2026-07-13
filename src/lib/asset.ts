/**
 * Prefix a public/ asset path with the current Vite base URL so it resolves
 * correctly under both dev (`/`) and production (`/Portf-lio/`).
 */
export function asset(path: string): string {
  const base = import.meta.env.BASE_URL;
  return `${base}${path.replace(/^\//, '')}`;
}
