import { defineConfig } from 'vite'
import { resolve } from "path";
import react from '@vitejs/plugin-react-swc'
import { viteUtoolsPlugin } from '@ver5/vite-plugin-utools'
import { vitePluginForArco } from '@arco-plugins/vite-react'
import { viteStaticCopy } from 'vite-plugin-static-copy'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vitePluginForArco(),
    viteUtoolsPlugin({
      external: ['electron'],
      configFile: 'utools/plugin.json',
      preload: { name: 'preload' }
    }),
    // viteStaticCopy({
    //   targets: [
    //     {
    //       src: 'node_modules/vite-plugin-static-copy/node_modules/chokidar',
    //       dest: 'chokidar'
    //     }
    //   ]
    // })
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  }
})
