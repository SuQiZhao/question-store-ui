import request from '@/router/axios';


// 分页查询题目接口
//questionInfoPageParam：keyword,lastRowLimitValue,pageIndex,pageSize,pageSorts[asc,column]
export const getPageList = (questionInfoPageParam) => request({
    url: '/questionInfo/getPageList',
    method: 'post',
    data: {
        questionInfoPageParam
    }
});