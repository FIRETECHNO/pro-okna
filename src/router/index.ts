import { createRouter, createWebHistory } from 'vue-router'
import WindowsView from '@/views/WindowsView.vue'
import BalconyView from '@/views/BalconyView.vue'
import WindowsRepairView from '@/views/WindowsRepairView.vue'
import PaymentView from '@/views/PaymentView.vue'

const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 200,
      }
    }
    if (savedPosition) return savedPosition
    return { top: 0 }
  },
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'windows',
      component: WindowsView,
    },
    {
      path: '/balcony',
      name: 'Balcony',
      component: BalconyView,
    },
    {
      path: '/windows-repair',
      name: 'WindowsRepair',
      component: WindowsRepairView,
    },
    {
      path: '/payment',
      name: 'Payment',
      component: PaymentView,
    },
    {
      path: '/country-windows',
      name: 'CountryWindows',
      component: () => import('@/views/windowsServices/CountryWindows.vue'),
    },
    // {
    //   path: '/country-windows',
    //   name: 'CountryWindows',
    //   component: () => import('@/views/windowsServices/CountryWindows.vue'),
    // },
    {
      path: '/glazing',
      name: 'Glazing',
      component: () => import('@/views/windowsServices/Glazing.vue'),
    },
    {
      path: '/installation-windows',
      name: 'InstallationWindows',
      component: () => import('@/views/windowsServices/InstallationWindows.vue'),
    },
    {
      path: '/custom-windows',
      name: 'CustomWindows',
      component: () => import('@/views/windowsServices/CustomWindows.vue'),
    },
    {
      path: '/additional-products',
      name: 'AdditionalProducts',
      component: () => import('@/views/balconyServices/AdditionalProducts.vue'),
    },
    {
      path: '/glazing-balconies',
      name: 'GlazingBalconies',
      component: () => import('@/views/balconyServices/GlazingBalconies.vue'),
    },
    // {
    //   path: '/insulation-balconies',
    //   name: 'InsulationBalconies',
    //   component: () => import('@/views/balconyServices/InsulationBalconies.vue'),
    // },
    {
      path: '/interior-decoration',
      name: 'InteriorDecoration',
      component: () => import('@/views/balconyServices/InteriorDecoration.vue'),
    },
  ],
})

export default router
