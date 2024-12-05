import wasm from 'vite-plugin-wasm';
import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'


export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, './');
  return {
    plugins: [react(), wasm()],
    server: {
      proxy: {
        '/api': {
          target: env.VITE_API_HOST,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      }
    }
  }
})