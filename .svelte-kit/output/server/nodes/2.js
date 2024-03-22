

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.3972bc14.js","_app/immutable/chunks/index.c51a8d2f.js"];
export const stylesheets = [];
export const fonts = [];
