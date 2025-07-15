import { defineConfig, loadEnv } from 'vite'
import type { ConfigEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default ({ mode }: ConfigEnv) => {
  // carga .env.<mode> desde ./env
  const env = loadEnv(mode, path.resolve(__dirname, 'env'), 'VITE_')
  // prepara el objeto para injectar en define
  const defineEnv = Object.fromEntries(
    Object.entries(env).map(([k, v]) => [k, JSON.stringify(v)])
  )

  return defineConfig({
    define: {
      // expone las vars a process.env en el bundle
      'process.env': defineEnv
    },
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
        "@components": path.resolve(__dirname, "./src/components"),
        "@config": path.resolve(__dirname, "./src/config"),
        "@pages": path.resolve(__dirname, "./src/pages"),
        "@assets": path.resolve(__dirname, "./src/assets"),
        "@lib": path.resolve(__dirname, "./src/lib"),
        "@hooks": path.resolve(__dirname, "./src/hooks"),
        "@core": path.resolve(__dirname, "./src/core"),
        "@store": path.resolve(__dirname, "./src/config/store"),
        "@layouts": path.resolve(__dirname, "./src/layouts"),
      },
    },
  })
}