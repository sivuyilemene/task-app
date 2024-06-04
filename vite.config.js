import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
console.log('Loaded vitest config');
// https://vitejs.dev/config/
export default defineConfig({
 base: "/",
 plugins: [react()],
 preview: {
  port: 8080,
  strictPort: true,
 },
 server: {
  port: 8080,
  strictPort: true,
  host: true,
  origin: "http://0.0.0.0:8080",
 },
 test: {
    globals: true,
    environment: "jsdom",
    setupFiles: './src/setupTests.js',
    exclude: [
        '**/node_modules/**',
        '**/dist/**',
        '**/cypress/**',
        '**/.{idea,git,cache,output,temp}/**',
        './src/config/**',
      ],
    coverage: {
        exclude: [
            '*.config.js',
             "*.cjs", 
             "./src/main.jsx"
        ],
        reporter: ['text', 'json-summary', 'json'],
        reportOnFailure: true
    }
  }
});