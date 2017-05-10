import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/scripts/components/index/index'
import Banner from '@/scripts/components/index/banner'
import List from '@/scripts/components/fenlei/list'
import Center from '@/scripts/components/center/center'
import Cart from '@/scripts/components/cart/cart'
import My from '@/scripts/components/my/my'
import centerDetail from '@/scripts/components/center/centerDetail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index,
      redirect:'banner',
      children: [
        {
          path: 'banner',
          component: Banner
        },
        {
          path:'list',
          component:List
        },
        {
          path:'center',
          component:Center,
        },
        {
          path:'cart',
          component:Cart
        },
        {
          path:'my',
          component:My
        }

      ]
    },
    {
      path:'/centerdetail',
      component:centerDetail
    }
  ]
})
