import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/scripts/components/index/index'
import Banner from '@/scripts/components/index/banner'
import List from '@/scripts/components/fenlei/list'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index,
      redirect:'Banner',
      children: [
        {
          path: 'banner',
          component: Banner
        },
        {
          path:'list',
          component:List
        }
      ]
    }
  ]
})
