const { init } = require('../handler.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set(["ddc_header.jpg","eyebeambox.gif","favicon.png","fonts/EyebeamSans-Medium.woff","fonts/EyebeamSans-Medium.woff2","stock.svg","support_header.jpg"]),
	mimeTypes: {".jpg":"image/jpeg",".gif":"image/gif",".png":"image/png",".woff":"font/woff",".woff2":"font/woff2",".svg":"image/svg+xml"},
	_: {
		entry: {"file":"start-4c5095a9.js","js":["start-4c5095a9.js","chunks/index-14ce4b0f.js","chunks/index-d2fd927e.js","chunks/singletons-d1fb5791.js"],"css":[]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/2.js')),
			() => Promise.resolve().then(() => require('../server/nodes/4.js')),
			() => Promise.resolve().then(() => require('../server/nodes/9.js')),
			() => Promise.resolve().then(() => require('../server/nodes/12.js')),
			() => Promise.resolve().then(() => require('../server/nodes/14.js')),
			() => Promise.resolve().then(() => require('../server/nodes/16.js')),
			() => Promise.resolve().then(() => require('../server/nodes/18.js')),
			() => Promise.resolve().then(() => require('../server/nodes/20.js')),
			() => Promise.resolve().then(() => require('../server/nodes/25.js'))
		],
		routes: [
			{
				type: 'page',
				id: "about/[slug]",
				pattern: /^\/about\/([^/]+?)\/?$/,
				names: ["slug"],
				types: [null],
				path: null,
				shadow: () => Promise.resolve().then(() => require('../server/entries/endpoints/about/_slug_.js')),
				a: [0,2],
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
				a: [0,3],
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
				a: [0,4],
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
				a: [0,5],
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
				a: [0,6],
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
				a: [0,7],
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
				a: [0,8],
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
				a: [0,9],
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
				a: [0,10],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
