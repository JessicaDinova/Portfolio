

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.56694eca.js","_app/immutable/chunks/index.c51a8d2f.js","_app/immutable/chunks/singletons.a9a8d99a.js"];
export const stylesheets = [];
export const fonts = [];
