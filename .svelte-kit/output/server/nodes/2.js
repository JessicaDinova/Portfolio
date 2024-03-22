

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.75f9be3b.js","_app/immutable/chunks/index.db8f6be1.js"];
export const stylesheets = [];
export const fonts = [];
