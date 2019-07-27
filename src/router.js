import Vue from 'vue'
import Router from 'vue-router'
import index from './views/index.vue'
import travel from './views/travel.vue'
import bmi from './views/bmi.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/brianprofile',
      name: 'travel',
      component: travel
    },
    {
      path: '/travel',
      name: 'travel',
      component: travel
    },
    {
      path: '/bmi',
      name: 'bmi',
      component: bmi
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    }
  ]
})
