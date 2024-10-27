

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/event/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.BxCYFqY-.js","_app/immutable/chunks/scheduler.BOwFYlz0.js","_app/immutable/chunks/index.Dy59Beth.js","_app/immutable/chunks/entry.DQJ37oId.js","_app/immutable/chunks/index.BCtDn-Ji.js","_app/immutable/chunks/events.BNOdUGot.js","_app/immutable/chunks/background.DFmoeKge.js","_app/immutable/chunks/navbar.DW8wy0cd.js","_app/immutable/chunks/event_form._ciOvrH2.js"];
export const stylesheets = ["_app/immutable/assets/navbar.85YXm_TJ.css"];
export const fonts = [];
