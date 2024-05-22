/// <reference types='vite/client' />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  server: {
    origin: 'https://javapepper.github.io/six-cities',
  },
})
