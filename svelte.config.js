import adapter from '@sveltejs/adapter-auto';
import { inject } from '@vercel/analytics';

// Make sure to call this only once in your app
inject();

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),

    // Override http methods in the Todo forms
    methodOverride: {
      allowed: ['PATCH', 'DELETE']
    },
    vite: {
      define: {
        'import.meta.env.VERCEL_ANALYTICS_ID': JSON.stringify(process.env.VERCEL_ANALYTICS_ID)
      }
    }
  }
};

export default config;