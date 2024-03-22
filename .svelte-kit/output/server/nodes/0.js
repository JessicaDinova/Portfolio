

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.1bcc0df7.js","_app/immutable/chunks/index.c51a8d2f.js"];
export const stylesheets = ["_app/immutable/assets/0.5fb1a969.css"];
export const fonts = [];
