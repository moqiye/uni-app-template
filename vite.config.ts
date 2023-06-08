import { defineConfig, loadEnv } from 'vite';
import uni from '@dcloudio/vite-plugin-uni';
import path from 'path';
import AutoImport from 'unplugin-auto-import/vite';

export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return defineConfig({
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
      sourcemap: env.VITE_BUILD_SOURCEMAP === 'true',
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: env.VITE_BUILD_DROP_CONSOLE === 'true', // 去除 console
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

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [uni()],
// });
