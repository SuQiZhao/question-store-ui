import request from '@/router/axios';

/**
 * 通知公告查询分页
 */
export const findNoticePage = (params) => request({
    url: '/noticeMsg/findNoticePage',
    method: 'get',
    params:params
});

/**
 * 新增通知公告
 */
export const addNotice = (params) => request({
    url: '/noticeMsg/add',
    method: 'post',
    data: params
});

/**
 * 修改通知公告
 */
export const updateNotice = (params) => request({
    url: '/noticeMsg/update',
    method: 'post',
    data: params
});

/**
 * 关闭通知公告
 */
export const deleteNotice = (id) => request({
    url: '/noticeMsg/delete/{id}',
    method: 'post',
    data: id
});