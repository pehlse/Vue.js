import Vue from 'vue'
import Router from 'vue-router'
import App from '../src/App.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: App
    }
  ]
})
