const { init } = require('../handler.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set(["OE_front_2.png","OE_front_4.png","ddc_header.jpg","eyebeambox.gif","favicon.png","fonts/EyebeamSans-Medium.woff","fonts/EyebeamSans-Medium.woff2","stock.svg","support_header.jpg"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg",".gif":"image/gif",".woff":"font/woff",".woff2":"font/woff2",".svg":"image/svg+xml"},
	_: {
		entry: {"file":"start-dc3a2561.js","js":["start-dc3a2561.js","chunks/index-fa94c728.js","chunks/index-6da00ed5.js","chunks/singletons-d1fb5791.js"],"css":[]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/5.js')),
			() => Promise.resolve().then(() => require('../server/nodes/6.js')),
			() => Promise.resolve().then(() => require('../server/nodes/13.js')),
			() => Promise.resolve().then(() => require('../server/nodes/27.js')),
			() => Promise.resolve().then(() => require('../server/nodes/25.js')),
			() => Promise.resolve().then(() => require('../server/nodes/2.js')),
			() => Promise.resolve().then(() => require('../server/nodes/4.js')),
			() => Promise.resolve().then(() => require('../server/nodes/9.js')),
			() => Promise.resolve().then(() => require('../server/nodes/12.js')),
			() => Promise.resolve().then(() => require('../server/nodes/14.js')),
			() => Promise.resolve().then(() => require('../server/nodes/16.js')),
			() => Promise.resolve().then(() => require('../server/nodes/18.js')),
			() => Promise.resolve().then(() => require('../server/nodes/20.js')),
			() => Promise.resolve().then(() => require('../server/nodes/23.js')),
			() => Promise.resolve().then(() => require('../server/nodes/26.js'))
		],
		routes: [
			{
				type: 'page',
				id: "events",
				pattern: /^\/events\/?$/,
				names: [],
				types: [],
				path: "/events",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				id: "everything",
				pattern: /^\/everything\/?$/,
				names: [],
				types: [],
				path: "/everything",
				shadow: () => Promise.resolve().then(() => require('../server/entries/endpoints/everything/index.js')),
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				id: "notes",
				pattern: /^\/notes\/?$/,
				names: [],
				types: [],
				path: "/notes",
				shadow: null,
				a: [0,4],
				b: [1]
			},
			{
				type: 'page',
				id: "videos",
				pattern: /^\/videos\/?$/,
				names: [],
				types: [],
				path: "/videos",
				shadow: null,
				a: [0,5],
				b: [1]
			},
			{
				type: 'page',
				id: "support/supportBlock",
				pattern: /^\/support\/supportBlock\/?$/,
				names: [],
				types: [],
				path: "/support/supportBlock",
				shadow: null,
				a: [0,6],
				b: [1]
			},
			{
				type: 'page',
				id: "about/[slug]",
				pattern: /^\/about\/([^/]+?)\/?$/,
				names: ["slug"],
				types: [null],
				path: null,
				shadow: () => Promise.resolve().then(() => require('../server/entries/endpoints/about/_slug_.js')),
				a: [0,7],
				b: [1]
			},
			{
				type: 'page',
				id: "events/[slug]",
				pattern: /^\/events\/([^/]+?)\/?$/,
				names: ["slug"],
				types: [null],
				path: null,
				shadow: () => Promise.resolve().then(() => require('../server/entries/endpoints/events/_slug_.js')),
				a: [0,8],
				b: [1]
			},
			{
				type: 'page',
				id: "journal/[slug]",
				pattern: /^\/journal\/([^/]+?)\/?$/,
				names: ["slug"],
				types: [null],
				path: null,
				shadow: () => Promise.resolve().then(() => require('../server/entries/endpoints/journal/_slug_.js')),
				a: [0,9],
				b: [1]
			},
			{
				type: 'page',
				id: "notes/[slug]",
				pattern: /^\/notes\/([^/]+?)\/?$/,
				names: ["slug"],
				types: [null],
				path: null,
				shadow: () => Promise.resolve().then(() => require('../server/entries/endpoints/notes/_slug_.js')),
				a: [0,10],
				b: [1]
			},
			{
				type: 'page',
				id: "people/[slug]",
				pattern: /^\/people\/([^/]+?)\/?$/,
				names: ["slug"],
				types: [null],
				path: null,
				shadow: () => Promise.resolve().then(() => require('../server/entries/endpoints/people/_slug_.js')),
				a: [0,11],
				b: [1]
			},
			{
				type: 'page',
				id: "press-and-news/[slug]",
				pattern: /^\/press-and-news\/([^/]+?)\/?$/,
				names: ["slug"],
				types: [null],
				path: null,
				shadow: () => Promise.resolve().then(() => require('../server/entries/endpoints/press-and-news/_slug_.js')),
				a: [0,12],
				b: [1]
			},
			{
				type: 'page',
				id: "programs/[slug]",
				pattern: /^\/programs\/([^/]+?)\/?$/,
				names: ["slug"],
				types: [null],
				path: null,
				shadow: () => Promise.resolve().then(() => require('../server/entries/endpoints/programs/_slug_.js')),
				a: [0,13],
				b: [1]
			},
			{
				type: 'page',
				id: "projects/[slug]",
				pattern: /^\/projects\/([^/]+?)\/?$/,
				names: ["slug"],
				types: [null],
				path: null,
				shadow: () => Promise.resolve().then(() => require('../server/entries/endpoints/projects/_slug_.js')),
				a: [0,14],
				b: [1]
			},
			{
				type: 'page',
				id: "support/[slug]",
				pattern: /^\/support\/([^/]+?)\/?$/,
				names: ["slug"],
				types: [null],
				path: null,
				shadow: () => Promise.resolve().then(() => require('../server/entries/endpoints/support/_slug_.js')),
				a: [0,15],
				b: [1]
			},
			{
				type: 'page',
				id: "videos/[slug]",
				pattern: /^\/videos\/([^/]+?)\/?$/,
				names: ["slug"],
				types: [null],
				path: null,
				shadow: () => Promise.resolve().then(() => require('../server/entries/endpoints/videos/_slug_.js')),
				a: [0,16],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
