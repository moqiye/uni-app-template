/*
 * @Author: qiye
 * @LastEditors: qiye
 * @description: page description
 * @Date: 2023-06-08 14:36:58
 * @LastEditTime: 2023-06-08 15:33:51
 */
// src/utils/http/request.js

import { getToken } from '@/utils/auth';
import { useUserStore } from '@/store';
import type {IResponse} from '@/types/global';

let baseUrl = import.meta.env.VITE_APP_API_BASE_URL;


const request = ({
  url = '',
  data = {},
  method = 'GET',
  header = { token: getToken() },
  hideLoading = true,
  hideMessage = false,
}: {
    url: string, 
    data: any, 
    method: "POST" | "OPTIONS" | "GET" | "HEAD" | "PUT" | "DELETE" | "TRACE" | "CONNECT" | undefined , 
    header: any,
    hideLoading: boolean, 
    hideMessage: boolean
  }) => {
  const userStore = useUserStore();
  
  return new Promise((resolve, reject) => {
    if (!hideLoading) {
      uni.showLoading({});
    }
    uni.request({
      timeout: 60000,
      method,
      url: baseUrl + url,
      data,
      header,
      success(response) {
        if (!hideLoading) {
        	uni.hideLoading();
        }
        let res: IResponse<any> = <IResponse<any>>response.data;
        // 请求成功，状态码不等于0，报错处理
        if (res.code !== 200) {
          if (hideMessage) {
            reject(res || 'Error');
          } else {
       
            uni.showToast({
              title: `${res.msg}`,
              icon: 'none',
              duration: 3000,
            });
            reject(res || 'Error');
          }
        } else {
          // 成功直接返回promise
          resolve(res);
        }
      },
      fail(err) {
        reject(err);
      },
    });
  });
};

const get = (url: string, data: any = {}, options: {hideLoading: boolean; hideMessage: boolean} = {hideLoading: true, hideMessage: false}) => request({
  url,
  data,
  method: 'GET',
  header: { token: getToken() },
  hideLoading: options.hideLoading,
  hideMessage: options.hideMessage,
});

const post = (url: string, data: any, options: {hideLoading: boolean; hideMessage: boolean} = {hideLoading: true, hideMessage: false})  => request({
  url,
  data,
  method: 'POST',
  header: { token: getToken() },
  hideLoading: options.hideLoading,
  hideMessage: options.hideMessage,
});

const http = {
  request,
  get,
  post,
}

export default http;

