import request from '@/router/axios';

/**
 * 添加回答
 */
export const addAnswser = (params) => request({
    url: '/questionAnswser/add',
    method: 'post',
    data: params
});

/**
 * 获取回答分页
 */
export const findAnswserPage = (params) => request({
    url: '/questionAnswser/findAnswserPage',
    method: 'get',
    params: params
});