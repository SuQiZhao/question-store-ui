import request from '@/router/axios';


export const login = (params) => request({
    url: '/login',
    method: 'post',
    params: params
});