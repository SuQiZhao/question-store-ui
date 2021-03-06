import request from '@/router/axios';


export const login = (username, password) => request({
    url: '/login',
    method: 'post',
    data: {
        username,
        password
    }
});

export const login_v1_1 = (username, password) => request({
    url: '/login_v1_1',
    method: 'post',
    data: {
        username,
        password
    }
});


export const getUserInfo_v1_1 = () => request({
    url: '/getUserInfo_v1_1',
    method: 'get',
    params: {}
});

export const logout = () => request({
    url: '/logout',
    method: 'post',
    data: {}
});

export const updateUser = (user) => request({
    url: '/user/update',
    method: 'post',
    data: user
});

export const getUser = (id) => request({
    url: '/user/info',
    method: 'get',
    params: {id}
});

export const findUserPage = (params) => request({
    url: '/user/findUserPage',
    method: 'get',
    params: params
});

export const addUser = (user) => request({
    url: '/user/add',
    method: 'post',
    data: user
});



