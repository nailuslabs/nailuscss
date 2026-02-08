import typography from '../../../packages-engine/core/src/plugin/typography';
import { defineConfig } from '../../../packages-engine/core/src/helpers';

export default defineConfig({
  darkMode: 'class',
  plugins: [
    typography({
      rtl: true,
      dark: true,
    }),
  ],
});

