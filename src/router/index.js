import Vue from 'vue'
import Router from 'vue-router'
import Main from '../components/Main'

Vue.use(Router)
export default new Router({
    mode: 'history',
    routes:[{
        name: 'main',
        path: '/',
        component: Main
      }]
})