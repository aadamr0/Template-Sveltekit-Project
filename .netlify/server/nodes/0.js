import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.CqiTs2aD.js","_app/immutable/chunks/scheduler.vHzfJe-z.js","_app/immutable/chunks/index.0y2l35RB.js","_app/immutable/chunks/index.B8S65AIN.js"];
export const stylesheets = ["_app/immutable/assets/0.dd2fEao_.css"];
export const fonts = [];
