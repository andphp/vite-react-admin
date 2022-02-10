import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { createStyleImportPlugin, AntdResolve } from "vite-plugin-style-import";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    createStyleImportPlugin({
      // 当前版本有坑 https://github.com/vbenjs/vite-plugin-style-import/issues/66
      // 目前是我是安装了 consola
      resolves: [AntdResolve()],
    }),
  ],
  resolve: {
    alias: {
      pages: resolve(__dirname, "src/pages"),
      components: resolve(__dirname, "src/components"),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        // 支持内联 JavaScript
        javascriptEnabled: true,
        // modifyVars是在全局less文件后面添加变量的配置。modifyVars对应的对象属性名会加上@追加到less文件后。
        modifyVars: {
          "primary-color": "hotpink",
        },
      },
    },
  },
});
