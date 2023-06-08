/*
 * @Author: qiye
 * @LastEditors: qiye
 * @description: page description
 * @Date: 2023-06-08 15:28:54
 * @LastEditTime: 2023-06-08 15:34:08
 */
import http from '@/utils/http';

const login = (params: any) => http.post('/system/login', params);

const logout = () => http.get('/system/logout');

export default {};
