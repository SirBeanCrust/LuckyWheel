import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  esbuild: {
    jsxInject: `import React from 'react';`, // Inject React import into JSX files
  },
  plugins: [react()],
})
