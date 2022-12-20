import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

// 1. 定义路由组件
const Home = () => import('../views/Home.vue')

// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
const routes = [
    {
        path: '/',
        redirect: '/home'
    },

    {
        path: '/home',
        name: "home",
        component: Home
    },
]

// 3. 创建路由实例并传递 `routes` 配置
const router = createRouter({
    // 4. 使用 hash 模式。
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})

export default router