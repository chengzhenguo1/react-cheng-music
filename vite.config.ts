import { defineConfig } from 'vite'
import path from 'path'
// import fs from 'fs'

// import lessToJS from 'less-vars-to-js'
import reactRefresh from '@vitejs/plugin-react-refresh'
import vitePluginImp from 'vite-plugin-imp'

// less 转换成json 格式
/* const themeVariables = lessToJS(
  fs.readFileSync(path.resolve(__dirname, './src/styles/variables.css'), 'utf8')
) */


// 获取环境变量
// const env = process.argv[process.argv.length - 1]

export default defineConfig({
  resolve: {
    // 路径别名
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@store': path.resolve(__dirname, './src/store'),
      '@router': path.resolve(__dirname, './src/router'),
      '@components': path.resolve(__dirname, './src/components'),
      '@views': path.resolve(__dirname, './src/views')
    }
  },
  plugins: [
    reactRefresh(),
    vitePluginImp({
      // 按需引入
      libList: [
        {
          libName: "antd",
          style: (name) => `antd/lib/${name}/style/index.less`,
        },
      ],
    })
  ],
  css: {
    preprocessorOptions: {
      less: {
        // 支持内联 JavaScript
        javascriptEnabled: true,
        /* modifyVars: themeVariables */
      }
    }
  },
})
