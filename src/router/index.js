import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/code/login/Login'
import Index from '@/code/index/Index'
import Temload from '@/content/temload/Temload'
import Actquery from '@/content/actquery/Actquery'
import Detail from '@/content/detail/Detail'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/Index',
      name: 'Index',
      component: Index,
      children : [
        {
          path: 'Temload',
          name: 'Temload',
          component: Temload
        },
        {
          path: 'Actquery',
          name: 'Actquery',
          component: Actquery
        },
        {
          path: '',
          name: 'Temload',
          component: Temload
        },
        {
          path: 'Detail',
          name: 'Detail',
          component: Detail
        }
      ]
    }
  ]
})

