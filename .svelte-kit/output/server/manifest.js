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
		client: {"start":"_app/immutable/entry/start.5a6e870d.js","app":"_app/immutable/entry/app.4f52f2a9.js","imports":["_app/immutable/entry/start.5a6e870d.js","_app/immutable/chunks/index.db8f6be1.js","_app/immutable/chunks/singletons.28633004.js","_app/immutable/entry/app.4f52f2a9.js","_app/immutable/chunks/index.db8f6be1.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
