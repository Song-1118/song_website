import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import Web from "../views/Web.vue"
import Error from "../views/Error.vue"
import Download from "../views/Download.vue";


const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/web',
        component: Web
    },
    {
        path: '/error',
        component: Error
    },
    {
        path: '/download',
        component: Download
    },// 在路由配置最后添加
    {
        path: '/:pathMatch(.*)*', // 捕获所有未匹配路径
        name: 'NotFound',
        component: () => import('../views/NotFound.vue'),
        meta: {
            title: '404 - 页面不存在'
        }
    }
]

// 3. 创建路由实例
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router