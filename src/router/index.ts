import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import VHome from '@/components/VHome.vue'
import VLogin from '@/components/VLogin.vue'
import VRegister from '@/components/VRegister.vue'

const routes: Array<RouteRecordRaw > = [
  {path: '', component : VHome },
  {path: '/login', component: VLogin},
  {path: '/register', component: VRegister}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
