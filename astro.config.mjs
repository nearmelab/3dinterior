// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import Icons from 'unplugin-icons/vite'
import basicSsl from '@vitejs/plugin-basic-ssl';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  image: {
   // Enable responsive images by default
   responsiveStyles: true,
   // Configure remote image sources for optimization
   domains: ['lh3.googleusercontent.com', 'images.unsplash.com'],
   // Sharp is the default service, no need to specify
 },

  vite: {
    plugins: [
      basicSsl(),
      tailwindcss(),
    Icons({
        compiler: 'astro',
      }),
    ],
  },

  adapter: cloudflare(),
});