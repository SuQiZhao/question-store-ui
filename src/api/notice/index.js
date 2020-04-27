import request from '@/router/axios';

/**
 * 通知公告查询分页
 */
export const getNoticeMsgPage = (params) => request({
    url: '/noticeMsg/getPageList',
    method: 'post',
    data: {}
});