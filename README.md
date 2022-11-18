# clickphase-web
The official GitHub repository for ClickPhase's new website, located at https://clickphase.vercel.app. This new website replaces our old website created using Weebly, originally located at https://clickphase.weebly.com, but is now archived [here](https://clickphase-old.vercel.app).

![ClickPhase website](https://i.imgur.com/B8TDFq8.png)

## Overview
This repository contains the source code for ClickPhase's new website. The site is written using SvelteKit, and deployed with Vercel.

## Building this project

After you have cloned/forked this repository and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```
## Compiling a production version
We currently use [SvelteKit's auto adapter](https://www.npmjs.com/package/@sveltejs/adapter-auto) module, which is then deployed to Vercel. 
To create a production version:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

## License
clickphase-web is licensed under the MIT License, which you can view [here](https://github.com/Apollo199999999/clickphase-web/blob/main/LICENSE)

Copyright &copy; 2020-present ClickPhase
