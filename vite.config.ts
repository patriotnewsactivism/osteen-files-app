import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  esbuild: {
    loader: 'jsx',
    include: /src.*\.[jt]sx?$/,
    // This allows JSX in .js files
    exclude: []
  }
})
