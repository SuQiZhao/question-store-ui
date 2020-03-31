import request from '@/router/axios';


export const login = (username,password) => request({
    url: '/login',
    method: 'post',
    data: {
        username,
        password
    }
});


export const getSysUserInfo = () => request({
    url: '/getSysUserInfo',
    method: 'get',
    params: {}
});