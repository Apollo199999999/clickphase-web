export { matchers } from './client-matchers.js';

export const components = [
	() => import("..\\..\\src\\routes\\__layout.svelte"),
	() => import("..\\..\\src\\routes\\__error.svelte"),
	() => import("..\\..\\src\\routes\\aboutcontact.svelte"),
	() => import("..\\..\\src\\routes\\animationsvideos.svelte"),
	() => import("..\\..\\src\\routes\\dynawin.svelte"),
	() => import("..\\..\\src\\routes\\granny-keyboard.svelte"),
	() => import("..\\..\\src\\routes\\index.svelte"),
	() => import("..\\..\\src\\routes\\launcherx.svelte"),
	() => import("..\\..\\src\\routes\\p5js-paint-app.svelte"),
	() => import("..\\..\\src\\routes\\software.svelte")
];

export const dictionary = {
	"": [[0, 6], [1]],
	"aboutcontact": [[0, 2], [1]],
	"animationsvideos": [[0, 3], [1]],
	"dynawin": [[0, 4], [1]],
	"granny-keyboard": [[0, 5], [1]],
	"launcherx": [[0, 7], [1]],
	"p5js-paint-app": [[0, 8], [1]],
	"software": [[0, 9], [1]]
};