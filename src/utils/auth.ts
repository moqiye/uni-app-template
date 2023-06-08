/*
 * @Author: qiye
 * @LastEditors: qiye
 * @description: page description
 * @Date: 2023-06-08 14:38:09
 * @LastEditTime: 2023-06-08 16:42:11
 */
const TOKEN_KEY = 'token';

export const getToken = () => {
  return uni.getStorageSync(TOKEN_KEY);
};
export const setToken = (token: string) => {
  uni.setStorageSync(TOKEN_KEY, token);
};

export const removeToken = () => {
  uni.removeStorageSync(TOKEN_KEY);
};
