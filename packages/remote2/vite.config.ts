import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'
import path from 'path'
// @ts-ignore
import { dependencies }  from './package.json';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "remoteAppL",
      filename: "remoteEntry.js",
      exposes: {
        './AppL': './src/main'
      },
      shared: {
        ...dependencies,
        react: {
          requiredVersion: dependencies['react'],
        },
        'react-dom': {
          requiredVersion: dependencies['react-dom'],
        },
      }
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
    // rollupOptions: {
    //   output: {
    //     format: 'esm',
    //     entryFileNames: 'assets/[name].js',
    //     minifyInternalExports: false,
    //   },
    // },
  }
})
