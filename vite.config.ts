import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import cssModule from './css-module-watcher'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), cssModule()],
})
