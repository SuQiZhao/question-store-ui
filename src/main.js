import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './plugins/element.js'
import Avue from '@smallwei/avue';
import '@smallwei/avue/lib/index.css';
//安装Avue
Vue.use(Avue);
// 安装路由
Vue.use(router);

// 安装 ElementUI
Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
