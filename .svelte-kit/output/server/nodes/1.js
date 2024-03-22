

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.9d31c411.js","_app/immutable/chunks/index.db8f6be1.js","_app/immutable/chunks/singletons.28633004.js"];
export const stylesheets = [];
export const fonts = [];
