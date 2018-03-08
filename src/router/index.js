import Vue from 'vue'
import Router from 'vue-router'
import Drugs from '@/components/drugs'
import DrugDetail from '@/components/drugDetail'
import Home from '@/components/font/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Drugs',
      component: Drugs
    },{
      path: '/drugs',
      name: 'Drugs',
      component: Drugs
    },{
      path: '/drugDetail',
      name: 'DrugDetail',
      component: DrugDetail
    },{
      path: '/home',
      name: 'Home',
      component: Home
    }
  ]
})
