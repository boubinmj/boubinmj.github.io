import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // User site: hosted at https://boubinmj.github.io/
  // base defaults to '/', so you can either omit it or write:
  // base: '/',
})
