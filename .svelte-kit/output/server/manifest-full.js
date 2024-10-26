export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","favicon.png","sdgs/event_icon_1.png","sdgs/event_icon_2.png","sdgs/event_icon_3.png","sdgs/event_icon_4.png","sdgs/event_icon_5.png","sdgs/event_icon_6.png","sdgs/event_icon_7.png","sdgs/reten3.png","sdgs/sdg_icon_1.png","sdgs/sdg_icon_10.png","sdgs/sdg_icon_11.png","sdgs/sdg_icon_12.png","sdgs/sdg_icon_13.png","sdgs/sdg_icon_14.png","sdgs/sdg_icon_15.png","sdgs/sdg_icon_16.png","sdgs/sdg_icon_17.png","sdgs/sdg_icon_18.png","sdgs/sdg_icon_2.png","sdgs/sdg_icon_3.png","sdgs/sdg_icon_4.png","sdgs/sdg_icon_5.png","sdgs/sdg_icon_6.png","sdgs/sdg_icon_7.png","sdgs/sdg_icon_8.png","sdgs/sdg_icon_9.png","sdgs/sdg_icon_clear.png","sdgs/sdgs_icon.png","sdgs/shop_icon_1.png","sdgs/shop_icon_10.png","sdgs/shop_icon_2.png","sdgs/shop_icon_3.png","sdgs/shop_icon_4.png","sdgs/shop_icon_5.png","sdgs/shop_icon_6.png","sdgs/shop_icon_7.png","sdgs/shop_icon_8.png","sdgs/shop_icon_9.png","service-worker.js","user_1.png","volunteer_images/volunteer_1.jpg","volunteer_images/volunteer_2.jpg","volunteer_images/volunteer_3.jpg","volunteer_images/volunteer_4.jpg"]),
	mimeTypes: {".png":"image/png",".js":"text/javascript",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.6x8ml4do.js","app":"_app/immutable/entry/app.SyMENtkS.js","imports":["_app/immutable/entry/start.6x8ml4do.js","_app/immutable/chunks/entry.BAC_8CVY.js","_app/immutable/chunks/scheduler.BOwFYlz0.js","_app/immutable/chunks/index.BCtDn-Ji.js","_app/immutable/entry/app.SyMENtkS.js","_app/immutable/chunks/scheduler.BOwFYlz0.js","_app/immutable/chunks/index.Dy59Beth.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js')),
			__memo(() => import('./nodes/10.js')),
			__memo(() => import('./nodes/11.js')),
			__memo(() => import('./nodes/12.js')),
			__memo(() => import('./nodes/13.js')),
			__memo(() => import('./nodes/14.js')),
			__memo(() => import('./nodes/15.js'))
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
				id: "/attendance",
				pattern: /^\/attendance\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/event-list",
				pattern: /^\/event-list\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/event-list/[id]",
				pattern: /^\/event-list\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/event",
				pattern: /^\/event\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/event/[id]",
				pattern: /^\/event\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/home",
				pattern: /^\/home\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/home/profile-edit",
				pattern: /^\/home\/profile-edit\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/messages",
				pattern: /^\/messages\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/register",
				pattern: /^\/register\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/report",
				pattern: /^\/report\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/settings",
				pattern: /^\/settings\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/user/[userId]/history",
				pattern: /^\/user\/([^/]+?)\/history\/?$/,
				params: [{"name":"userId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 15 },
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
