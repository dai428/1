import { createRouter, createWebHistory } from 'vue-router'
import BackendLayout from '@/components/BackendLayout.vue'

// 路由配置
const backendRoutes  = [
    {
        path: '/back',
        component: BackendLayout,
        children:[

        ]
    }
]

const router =  createRouter({
    history:createWebHistory(),
    routes:backendRoutes,
})

export default router