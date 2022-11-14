const c = [
	() => import("..\\..\\src\\routes\\__layout.svelte"),
	() => import("..\\runtime\\components\\error.svelte"),
	() => import("..\\..\\src\\routes\\index.svelte"),
	() => import("..\\..\\src\\routes\\animationsvideos.svelte"),
	() => import("..\\..\\src\\routes\\aboutcontact.svelte"),
	() => import("..\\..\\src\\routes\\software.svelte")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// src/routes/animationsvideos.svelte
	[/^\/animationsvideos\/?$/, [c[0], c[3]], [c[1]]],

	// src/routes/aboutcontact.svelte
	[/^\/aboutcontact\/?$/, [c[0], c[4]], [c[1]]],

	// src/routes/software.svelte
	[/^\/software\/?$/, [c[0], c[5]], [c[1]]]
];

// we import the root layout/error components eagerly, so that
// connectivity errors after initialisation don't nuke the app
export const fallback = [c[0](), c[1]()];