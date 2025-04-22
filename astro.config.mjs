import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      // Configure Tailwind CSS options here
      config: { path: './tailwind.config.cjs' }
    })
  ],
  site: 'https://harleyandson.com', // Replace with your actual domain
  trailingSlash: 'always',
  build: {
    assets: '_assets'
  },
  server: {
    port: 3000
  },
  vite: {
    css: {
      // Pre-processors options
      preprocessorOptions: {
        // Configure scss/sass options here
      }
    }
  }
});
