/*
 * @Author: qiye
 * @LastEditors: qiye
 * @description: page description
 * @Date: 2023-06-08 14:02:28
 * @LastEditTime: 2023-06-08 14:14:52
 */
import { createPinia } from 'pinia';
import useUserStore from './modules/user';

const pinia = createPinia();

export default pinia;

export { useUserStore };
