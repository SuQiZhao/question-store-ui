import request from '@/router/axios';


export const login = (username,password) => request({
    url: '/login',
    method: 'post',
    data: {
        username,
        password
    }
});