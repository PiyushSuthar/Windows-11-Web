import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'

// https://vitejs.dev/config/
export default defineConfig({
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: "Fragment",
    jsxInject: 'import {h, Fragment } from "preact"'
  },
  plugins: [preact()],
  alias: {
    react: 'preact/compat',
  },
})
