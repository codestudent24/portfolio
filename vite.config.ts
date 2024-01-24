import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: 'https://codestudent24.github.io/portfolio/',
  // base: 'dist/',
  plugins: [react()],
})
