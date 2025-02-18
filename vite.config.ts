import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
const ARK_API_KEY = process.env.VITE_ARK_API_KEY;
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: 'esnext', // 启用现代浏览器特性
    assetsInlineLimit: 0 // 完整保留资源文件
  },
  server: {
    proxy: {
      '/ark-proxy': {
        target: 'https://ark.cn-beijing.volces.com/api/v3',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/ark-proxy/, ''),
        headers: {
          Authorization: `Bearer ${ARK_API_KEY}`
        }
      },
      '/qianfan': {
        target: 'https://qianfan.baidubce.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/qianfan/, ''),
      }
    }
  }
})
