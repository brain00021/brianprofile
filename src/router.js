import Vue from 'vue'
import Router from 'vue-router'
import travel from './views/travel.vue'
import bmi from './views/bmi.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'travel',
      component: travel
    },
    {
      path: '/brianprofile',
      name: 'travel',
      component: travel
    },
    {
      path: '/brianprofile/travel',
      name: 'travel',
      component: travel
    },
    {
      path: '/brianprofile/bmi',
      name: 'bmi',
      component: bmi
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
