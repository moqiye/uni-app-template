/*
 * @Author: qiye
 * @LastEditors: qiye
 * @description: page description
 * @Date: 2023-06-08 16:07:51
 * @LastEditTime: 2023-06-08 16:48:07
 */
import { defineConfig, loadEnv } from 'vite';
import uni from '@dcloudio/vite-plugin-uni';
import path from 'node:path';
import AutoImport from 'unplugin-auto-import/vite';

export default ({ mode }) => {
  const environment = loadEnv(mode, process.cwd());

  return defineConfig({
    base: './',
    plugins: [
      uni(),
      AutoImport({
        imports: ['vue', 'uni-app'],
        // 可以选择auto-import.d.ts生成的位置，使用ts建议设置为'src/auto-import.d.ts'
        dts: 'src/auto-import.d.ts',
        // 自动生成'eslintrc-auto-import.json'文件，在'.eslintrc.cjs'的'extends'中引入解决报错
        eslintrc: {
          enabled: true,
        },
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        // '@img': path.resolve(__dirname, 'src/static/images'),
      },
    },
    build: {
      sourcemap: environment.VITE_BUILD_SOURCEMAP === 'true',

      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: environment.VITE_BUILD_DROP_CONSOLE === 'true', // 去除 console
        },
      },
      chunkSizeWarningLimit: 1500, // chunk 大小警告的限制（以 kbs 为单位）
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/styles/vars.scss";`,
        },
      },
    },
  });
};
