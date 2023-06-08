/*
 * @Author: qiye
 * @LastEditors: qiye
 * @description: page description
 * @Date: 2023-06-08 11:52:57
 * @LastEditTime: 2023-06-08 16:49:15
 */
/// <reference types="vite/client" />

declare module '*.vue' {
  import { DefineComponent } from 'vue';

  const component: DefineComponent<{}, {}, any>;
  export default component;
}
