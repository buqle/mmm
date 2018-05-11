import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import List from '@/components/List'
import Order from '@/view/Order';
import Getdata from '@/view/Getdata'
Vue.use(Router)

export default new Router({
  mode: 'history',//去掉#
  routes: [
    {
      path: '/home/:id',
      name: 'Home',
      component: Home,
      children:[{
        path:'order',
        component:Order
      }]

    },
  /*  {
      path: '/order',
      name: 'order',
      component: Order
    },*/
    {
      path: '/data',
      name: 'data',
      component: Getdata
    }
  ]
})
