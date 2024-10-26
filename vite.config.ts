import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'

export default defineConfig({
  plugins: [react(),
    TanStackRouterVite(),],
      // @ts-ignore
    test: {
      globals: true,
      environment: 'jsdom', // pour tester les composants qui manipulent le DOM
      setupFiles: './vitest.setup.ts', // pour configurer les tests
    },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
