import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import viteCompression from 'vite-plugin-compression';
import million from 'million/compiler'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [million.vite({
    auto: true,
    mode: 'preact',
  }), viteCompression({
    algorithm: 'brotliCompress'
  }), preact()],
})
