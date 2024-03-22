

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.1b76b593.js","_app/immutable/chunks/index.db8f6be1.js"];
export const stylesheets = ["_app/immutable/assets/0.166ac106.css"];
export const fonts = [];
