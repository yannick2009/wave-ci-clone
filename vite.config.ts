import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    cssMinify: "lightningcss"
  },
  resolve: {
    alias: {
      "@components": "/src/components",
      "@context": "/src/context",
      "@pages": "/src/pages",
      "@store": "/src/store",
      "@utils": "/src/utils",
      "@assets": "/src/assets",
      "@sass": "/src/sass",
      "@layouts": "/src/layouts",
    }
  }
})
