import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
/// <reference types="vite-plugin-svgr/client" />
export default defineConfig({
  plugins: [svgr(), react()],
  server: {
    port: 3001,
    open: true,
  },
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
});
