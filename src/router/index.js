import Vue from 'vue'
import VueRouter from 'vue-router'
import Wel from '../page/index/index.vue'
import Login from '../views/login/index.vue'
import Index from '../views/index/index.vue'

Vue.use(VueRouter);

const routes = [{
    path: '/login',
    name: '登录页',
    component: Login
},
    {
        path: '/',
        component: Index,
        redirect: '/index',
        children: [{
            path: '/index',
            component: () => import('../views/index/body.vue')
        }, {
            path: '/tiku',
            component: () => import('../views/tiku/index.vue')
        }, {
            path: '/guide',
            component: () => import('../views/guide/index.vue')
        }, {
            path: '/news',
            component: () => import('../views/news/index.vue')
        }, {
            path: '/answer',
            component: () => import('../views/answer/index.vue')
        }]
    },
    {
        path: '/wel',
        component: Wel,
        // name: '个人主页',
        children: [{
            path: '/home',
            name: '个人中心',
            component: () => import('../views/home/index.vue')
        },
            {
                path: '/myAnswser',
                name: '全 部 提 问',
                component: () => import('../views/myAnswser/index.vue')
            },
            {
                path: '/usersetting',
                name: '个 人 资 料 设 置',
                component: () => import('../views/settings/index.vue')
            },
            {
                path: '/changepwd',
                name: '密 码 修 改',
                component: () => import('../views/settings/changePwd/index.vue')
            },
            {
                path: '/questionadd',
                name: '发布 - 问答',
                component: () => import('../views/questionAdd/index.vue')
            },
            {
                path: '/questiondetail',
                name: '问答 - 详情',
                component: () => import('../views/detailInfo/index.vue')
            },
            {
                path: '/notice',
                name: '通 知 公 告',
                component: () => import('../views/notice/index.vue')
            },
            {
                path: '/addnotice',
                name: '新增通知公告',
                component: () => import('../views/notice/add.vue')
            },
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
];

const router = new VueRouter({
    routes
});

export default router