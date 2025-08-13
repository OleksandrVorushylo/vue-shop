import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import viteImagemin from 'vite-plugin-imagemin'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
    viteImagemin(
      viteImagemin({
        webp: {
          quality: 75,
        },
      }),
    ),
  ],
  server: {
    proxy: {
      '/api': {
        target: 'https://refinedghost-eu.backendless.app',
        changeOrigin: true,
        // без переписывания, чтобы /api осталось в пути
      },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    devSourcemap: true,
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "@/styles/utils/all" as *;
          @use "@/styles/base/variables.scss" as *;
        `,
      },
    },
  },
})
