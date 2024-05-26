export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.BF9iKXZv.js","app":"_app/immutable/entry/app.D6GNUSEN.js","imports":["_app/immutable/entry/start.BF9iKXZv.js","_app/immutable/chunks/entry.CqN5AAa-.js","_app/immutable/chunks/scheduler.vHzfJe-z.js","_app/immutable/chunks/index.B8S65AIN.js","_app/immutable/entry/app.D6GNUSEN.js","_app/immutable/chunks/scheduler.vHzfJe-z.js","_app/immutable/chunks/index.0y2l35RB.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/page-1",
				pattern: /^\/page-1\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
