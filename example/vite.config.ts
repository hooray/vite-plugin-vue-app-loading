import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import appLoading from 'vite-plugin-vue-app-loading'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), appLoading()],
})
