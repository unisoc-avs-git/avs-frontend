

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.oPgeJZZY.js","_app/immutable/chunks/scheduler.BOwFYlz0.js","_app/immutable/chunks/index.Dy59Beth.js"];
export const stylesheets = ["_app/immutable/assets/2.BvVLsAdr.css"];
export const fonts = [];
