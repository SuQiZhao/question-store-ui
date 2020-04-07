import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './plugins/element.js';
import Avue from '@smallwei/avue';
import '@smallwei/avue/lib/index.css';
import 'babel-polyfill';
import axios from './router/axios';
import VueAxios from 'vue-axios';
//使用axios
//配置请求的根路径，用于接口访问根路径+接口名称
Vue.use(VueAxios, axios);
//安装Avue
Vue.use(Avue);
// 安装路由
Vue.use(router);
// 安装 ElementUI
Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
