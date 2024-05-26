

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.CLAGLAhF.js","_app/immutable/chunks/scheduler.vHzfJe-z.js","_app/immutable/chunks/index.0y2l35RB.js"];
export const stylesheets = [];
export const fonts = [];
