import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/frontend/",
  plugins: [svelte()],
  server: {
    port: 8080
  },
})
