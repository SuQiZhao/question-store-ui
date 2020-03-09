import Vue from 'vue'
import VueRouter from 'vue-router'
import Wel from '../page/index/index.vue'
import Login from '../views/login/index.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/login',
    name: '登录页',
    component: Login
  },
  {
    path: '/wel',
    component: Wel,
    name: '主页',
    children: [{
        path: '/wel',
        component: () => import('../views/home/index.vue')
      },
      {
        path: '/usersetting',
        name: '个人资料设置',
        component: () => import('../views/settings/index.vue')
      },
        {
            path: '/changepwd',
            name: '密码修改',
            component: () => import('../views/settings/changePwd/index.vue')
        }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router