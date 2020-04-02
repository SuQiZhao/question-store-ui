import axios from 'axios';
import { baseUrl } from '@/config/env';
import { Message } from 'element-ui';
import router from '@/router/index'
axios.defaults.timeout = 10000;
axios.defaults.baseURL = baseUrl;
//跨域请求，允许保存cookie
axios.defaults.withCredentials = true;

//默认头请求添加token
let AUTH_TOKEN=(function(){
    return window.sessionStorage.getItem("token");
})();
axios.defaults.headers.common['token'] = AUTH_TOKEN;

// axios请求拦截 无token不操作
// axios.interceptors.request.use(function (config) {
//     let token = window.sessionStorage.getItem("token")
//     if (token) {
//         //将token放到请求头发送给服务器,将tokenkey放在请求头中
//         config.headers.token = token;
//         //也可以这种写法
//         // config.headers['accessToken'] = Token;
//         return config;
//     }})


/**
 * 统一处理响应拦截处理方式，
 */
axios.interceptors.response.use(success => {
    if (success.status && success.status == 200 && success.data.status == 500) {
        Message.error({ message: success.data.msg })
        return;
    }
    if (success.data.msg) {
        Message.success({ message: success.data.msg })
    }
    return success.data;
}, error => {
    if (error.response.status == 504 || error.response.status == 404) {
        Message.error({ message: '服务器被吃了( ╯□╰ )' })
    } else if (error.response.status == 403) {
        Message.error({ message: '权限不足，请联系管理员' })
    } else if (error.response.status == 401) {
        Message.error({ message: '尚未登录，请登录' })
        router.replace('/login');
    } else {
        if (error.response.data.msg) {
            Message.error({ message: error.response.data.msg })
        } else {
            Message.error({ message: '未知错误!' })
        }
    }
    return;
})
export default axios;