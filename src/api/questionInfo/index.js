import request from '@/router/axios';


/**
 * 首页最新问题查询接口
 */
//questionInfoPageParam：keyword,lastRowLimitValue,pageIndex,pageSize,pageSorts[asc,column]
export const getPageListByCreateTime = () => request({
    url: '/questionInfo/getPageList',
    method: 'post',
    data: {
    }
});


/**
 * 热门问题查询接口
 */
export const getHotQuestionList = () => request({
    url: '/questionInfo/getHotQuestionList',
    method: 'get',
    params: {
    }
});

/**
 * 热门问题查询接口
 */
export const getQuestionCount = () => request({
    url: '/questionInfo/getQuestionCount',
    method: 'get',
    params: {
    }
});