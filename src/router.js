import Vue from 'vue'
import Router from 'vue-router'
import Kurs from './views/Kurs.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/:kurs',
      name: 'kurs',
      component: Kurs
    },
    {
      path: '/:kurs/:lekcija',
      name: 'lekcija',
      component: Kurs,
      props: true
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
