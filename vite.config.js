import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path, { dirname } from 'path'
import { config } from 'process'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '/@': path.resolve(__dirname, '/src'),
      '/@components': path.resolve(__dirname, './src/components'),
      '/@app_modules': path.resolve(__dirname, './src/modules'),
      '/@store': path.resolve(__dirname, '/src/store'),
    },
  },
  plugins: [vue()],
})
// module.exports = {
//   chainWebpack : config => {
//     configplugins.delete('prefetch');
//   }
// };

