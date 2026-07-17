import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // 分包策略：拆分大数据块，提升缓存命中率
    chunkSizeWarningLimit: 300,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('/data/reflets/') || id.includes('/data/english/')) return 'textbook-data';
          if (id.includes('/data/curriculum')) return 'curriculum-data';
          if (id.includes('/data/articles')) return 'articles-data';
          if (id.includes('/data/vocabulary') || id.includes('/data/knowledge') || id.includes('/data/story') || id.includes('/data/pictureBooks')) return 'other-data';
        },
      },
    },
  },
})
