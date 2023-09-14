import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/houses': {
        target: 'http://localhost:3001',
        rewrite: (path) => path.startsWith('/houses') ? path : `/houses${path}`
      },
      '/plans': 'http://localhost:3001'
    }
  }
})
