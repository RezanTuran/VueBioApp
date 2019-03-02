import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/sökfilm',
      name: 'sökfilm',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: function () { 
        return import(/* webpackChunkName: "about" */ './views/Sökfilm.vue')
      }
    },
    {
      path: '/filmer',
      name: 'filmer',
      component: function () { 
        return import(/* webpackChunkName: "about" */ './views/Filmer.vue')
      }
    },
    {
      path: '/kundservice',
      name: 'kundservice',
      component: function () { 
        return import(/* webpackChunkName: "about" */ './views/Kundservice.vue')
      }
    },
    {
      path: '/bokafilm',
      name: 'bokafilm',
      component: function () { 
        return import(/* webpackChunkName: "about" */ './views/Bokafilm.vue')
      }
    },
  ]
});
