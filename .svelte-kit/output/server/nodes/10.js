

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/login/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/10.Dvdan3tc.js","_app/immutable/chunks/scheduler.BOwFYlz0.js","_app/immutable/chunks/index.Dy59Beth.js","_app/immutable/chunks/background.DFmoeKge.js"];
export const stylesheets = ["_app/immutable/assets/10.GoKKQokH.css"];
export const fonts = [];
