/*
 * @Author: qiye
 * @LastEditors: qiye
 * @description: page description
 * @Date: 2023-06-08 14:03:38
 * @LastEditTime: 2023-06-08 14:10:52
 */
import { defineStore } from 'pinia';
import type { IUserState } from './types';
import { removeToken } from '@/utils/auth';

const useUserStore = defineStore('user', {
  state: (): IUserState => ({
    
  }),

  getters: {
    userInfo(state: IUserState): IUserState {
      return { ...state };
    },
  },

  actions: {
    removeToken,
  },
});

export default useUserStore;
