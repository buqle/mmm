import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/view/Index';
import Home from '@/components/Home'
import List from '@/components/List'
import Order from '@/view/Order';
import Getdata from '@/view/Getdata';
import Slots from '@/view/Slots';
import Vshows from '@/view/Vshows';
import ToDos from '@/view/ToDos';
import Directive from '@/view/Directive';
import Tweet from '@/view/Tweet';
import Actlist from '@/view/Actlist';
import Actives from '@/view/Actives'
Vue.use(Router)

export default new Router({
  //mode: 'history',//去掉#{} //打包的时候要注释掉不然渲染不出来
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index

    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/order',
      name: 'order',
      component: Order
    },
    {
      path: '/data',
      name: 'data',
      component: Getdata
    },
    {
      path: '/slots',
      name: 'slots',
      component:Slots
    },
    {
      path: '/vshows',
      name: 'vshows',
      component:Vshows
    }
    ,
    {
      path: '/todos',
      name: 'todos',
      component:ToDos
    }
    ,
    {
      path: '/tives',
      name: 'tives',
      component:Directive
    }
    ,
    {
      path: '/tweet',
      name: 'tives',
      component:Tweet
    }
    ,
    {
      path: '/actlist/:id&act=:name',
      name: 'act',
      component:Actlist
    }
    ,
    {
      path: '/actives',
      name: 'actives',
      component:Actives
    }
  ]
})
