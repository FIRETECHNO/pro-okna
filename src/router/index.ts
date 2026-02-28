import { createRouter, createWebHistory } from 'vue-router'
import WindowsView from '@/views/WindowsView.vue'
import BalconyView from '@/views/BalconyView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{
    path: '/',
    name: 'windows',
    component: WindowsView
  },
  {
    path: "/balcony",
    name: "Balcony",
    component: BalconyView
  }
  ],
})

export default router
