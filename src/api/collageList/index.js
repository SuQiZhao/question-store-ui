import request from '@/router/axios';

/**
 * 模糊搜索全国大学信息
 */
export const getCollageName = (collageName) => request({
    url: '/collageList/getCollageName',
    method: 'get',
    params:{collageName}
});