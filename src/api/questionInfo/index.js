import request from '@/router/axios';


// 分页查询题目接口
//questionInfoPageParam：keyword,lastRowLimitValue,pageIndex,pageSize,pageSorts[asc,column]
export const getPageListByCreateTime = () => request({
    url: '/questionInfo/getPageList',
    method: 'post',
    data: {
    }
});