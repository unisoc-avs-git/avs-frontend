

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.BL7jJYeD.js","_app/immutable/chunks/scheduler.BOwFYlz0.js","_app/immutable/chunks/index.Dy59Beth.js"];
export const stylesheets = ["_app/immutable/assets/0.CGTud05-.css"];
export const fonts = [];
