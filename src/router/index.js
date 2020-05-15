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
                path: '/myQuestion',
                name: '全部提问',
                component: () => import('../views/myQuestions/index.vue')
            },
            {
                path: '/myAnswser',
                name: '全部回答',
                component: () => import('../views/myAnswser/index.vue')
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
                name: '通知公告',
                component: () => import('../views/notice/index.vue')
            },
            {
                path: '/noticedetail',
                name: '通知公告详情',
                component: () => import('../views/notice/detail.vue')
            },
            {
                path: '/addnotice',
                name: '新增通知公告',
                component: () => import('../views/notice/add.vue')
            },
            {
                path: '/accountManage',
                name: '账号管理',
                component: () => import('../views/accountManage/index.vue')
            },
            {
                path: '/search',
                name: '搜索',
                component: () => import('../views/search/index.vue')
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