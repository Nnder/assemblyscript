import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: 'esnext', // or 'chrome89', 'firefox90', etc.
  },
  plugins: [react()],
})
