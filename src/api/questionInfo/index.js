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
 * 题目统计接口
 */
export const getQuestionCount = () => request({
    url: '/questionInfo/getQuestionCount',
    method: 'get',
    params: {
    }
});

/**
 * 新增问题接口
 */
export const addQuestion = (questionInfo) => request({
    url: '/questionInfo/add',
    method: 'post',
    data: questionInfo
});

/**
 * 查询问题分页接口
 */
export const getQuestionPage = (params) => request({
    url: '/questionInfo/getQuestionPage',
    method: 'get',
    params: params
});

/**
 * 条件查询问题分页接口
 */
export const findQuestionPage = (params) => request({
    url: '/questionInfo/findQuestionPage',
    method: 'get',
    params: params
});

/**
 * 修改问题接口
 */
export const updateQuestion = (questionInfo) => request({
    url: '/questionInfo/update',
    method: 'post',
    data: questionInfo
});

/**
 * id查询问题接口
 */
export const getQuestionInfo = (id) => request({
    url: '/questionInfo/info',
    method: 'get',
    params: {id}
});

/**
 * 查询问题分页接口
 */
export const getSameQuestions = (questionTitle) => request({
    url: '/questionInfo/getSameQuestions',
    method: 'get',
    params: {questionTitle}
});