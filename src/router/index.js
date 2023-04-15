import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      // redirect: '/home',
      name: 'home',
      component: () => import('../components/HomePage.vue')
    },
    {
      path: '/photo',
      name: 'photo',
      component: () => import('../components/PhotoPage.vue')
    },
    {
      path: '/fav',
      name: 'favourites',
      component: () => import('../components/FavouritesPage.vue')
    }
  ]
})

export default router
