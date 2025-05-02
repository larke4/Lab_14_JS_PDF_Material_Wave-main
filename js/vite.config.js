import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  root: '.',  // Корень проекта — текущая папка, а не src/
  build: {
    outDir: 'dist',
  },
})
