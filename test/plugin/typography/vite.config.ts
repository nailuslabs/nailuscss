import { defineConfig } from 'vite';
import nailus from 'vite-plugin-nailuscss';
import markdown from 'vite-plugin-md';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    nailus(),
    markdown(),
  ],
});
