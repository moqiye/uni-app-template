/*
 * @Author: qiye
 * @LastEditors: qiye
 * @description: page description
 * @Date: 2023-06-08 11:52:57
 * @LastEditTime: 2023-06-08 15:47:12
 */
import { createSSRApp } from 'vue';
// import store from './store';
import App from './App.vue';

export function createApp() {
  const app = createSSRApp(App);
  // app.use(store);
  return {
    app,
  };
}
