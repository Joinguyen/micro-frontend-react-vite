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
      name: "remoteAppC",
      filename: "remoteEntry.js",
      exposes: {
        './AppC': './src/main',
        './Main': './src/bootstrap'
      },
      shared: []
      // {
      //   ...dependencies,
      //   'react': {
      //     requiredVersion: dependencies['react'],
      //   },
      //   'react-dom': {
      //     requiredVersion: dependencies['react-dom'],
      //   },
      // }
    })
  ],
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, './node_modules/bootstrap'),
      '~animate.css': path.resolve(__dirname, './node_modules/animate.css'),
    }
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