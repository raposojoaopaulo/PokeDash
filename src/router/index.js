import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/pokemon/:id',
      name: 'view-pokemon',
      component: () => import('../views/ViewPokemon.vue')
    },
    {
      path: '/pokemon/:pokemonName',
      name: 'search-pokemon',
      component: HomeView,
      props: true
    },
  ]
})

export default router
