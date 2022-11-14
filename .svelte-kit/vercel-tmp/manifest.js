export const manifest = {
	appDir: "_app",
	assets: new Set(["FluentSystemIcons-Regular.ttf","MicaDark.png","MicaLight.png","app-images/dynawin/DynaWinImage.jpg","app-images/dynawin/logoDark.png","app-images/dynawin/logoLight.png","app-images/granny-keyboard/GrannyKeyboardImage.png","app-images/granny-keyboard/logoDark.png","app-images/granny-keyboard/logoLight.png","app-images/launcherx/LauncherXImage.png","app-images/launcherx/logoDark.png","app-images/launcherx/logoLight.png","app-images/p5js-paint-app/p5jsPaintAppImage.png","favicon.ico","logo-img.png","screenshots/dynawin/DynamicThemeDark.png","screenshots/dynawin/DynamicThemeLight.png","screenshots/dynawin/DynamicWallpaperDark.png","screenshots/dynawin/DynamicWallpaperLight.png","screenshots/dynawin/WindowDark.png","screenshots/dynawin/WindowLight.png","screenshots/granny-keyboard/Window.png","screenshots/launcherx/WindowDark.png","screenshots/launcherx/WindowLight.png","screenshots/p5js-paint-app/Window.png","sitemap.xml","youtube-profiles/clickphase.png","youtube-profiles/granny.png","youtube-profiles/matthias-wang.jpg"]),
	mimeTypes: {".ttf":"font/ttf",".png":"image/png",".jpg":"image/jpeg",".ico":"image/vnd.microsoft.icon",".xml":"application/xml"},
	_: {
		entry: {"file":"start-01655fc5.js","js":["start-01655fc5.js","chunks/index-a7d8ca41.js","chunks/index-adad17a3.js"],"css":[]},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/6.js'),
			() => import('../output/server/nodes/2.js'),
			() => import('../output/server/nodes/3.js'),
			() => import('../output/server/nodes/4.js'),
			() => import('../output/server/nodes/5.js'),
			() => import('../output/server/nodes/7.js'),
			() => import('../output/server/nodes/8.js'),
			() => import('../output/server/nodes/9.js')
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				id: "aboutcontact",
				pattern: /^\/aboutcontact\/?$/,
				names: [],
				types: [],
				path: "/aboutcontact",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				id: "animationsvideos",
				pattern: /^\/animationsvideos\/?$/,
				names: [],
				types: [],
				path: "/animationsvideos",
				shadow: null,
				a: [0,4],
				b: [1]
			},
			{
				type: 'page',
				id: "dynawin",
				pattern: /^\/dynawin\/?$/,
				names: [],
				types: [],
				path: "/dynawin",
				shadow: null,
				a: [0,5],
				b: [1]
			},
			{
				type: 'page',
				id: "granny-keyboard",
				pattern: /^\/granny-keyboard\/?$/,
				names: [],
				types: [],
				path: "/granny-keyboard",
				shadow: null,
				a: [0,6],
				b: [1]
			},
			{
				type: 'page',
				id: "launcherx",
				pattern: /^\/launcherx\/?$/,
				names: [],
				types: [],
				path: "/launcherx",
				shadow: null,
				a: [0,7],
				b: [1]
			},
			{
				type: 'page',
				id: "p5js-paint-app",
				pattern: /^\/p5js-paint-app\/?$/,
				names: [],
				types: [],
				path: "/p5js-paint-app",
				shadow: null,
				a: [0,8],
				b: [1]
			},
			{
				type: 'page',
				id: "software",
				pattern: /^\/software\/?$/,
				names: [],
				types: [],
				path: "/software",
				shadow: null,
				a: [0,9],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
