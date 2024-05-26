

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/page-1/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.Bkp7hBzC.js","_app/immutable/chunks/scheduler.vHzfJe-z.js","_app/immutable/chunks/index.0y2l35RB.js"];
export const stylesheets = [];
export const fonts = [];
