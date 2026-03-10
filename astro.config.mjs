// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import Icons from 'unplugin-icons/vite'
import basicSsl from '@vitejs/plugin-basic-ssl';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
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