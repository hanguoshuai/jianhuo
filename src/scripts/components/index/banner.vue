<template lang="html">
  <div class="outer">
    <div class='head'>
        <h2 class="title">尖货</h2>
        <span class="regret yo-ico">&#xe610;</span>
        <span class="affirm yo-ico">&#xf067;</span>
    </div>
<div class="indexOut">


        <header class='yo-header  yo-header-a'>
            <h2 class="title">尖货</h2>
            <span class="regret yo-ico">&#xe610;</span>
            <span class="affirm yo-ico">&#xf067;</span>
        </header>
  <mt-swipe :auto="6000">
    <mt-swipe-item>
        <img src="http://cms.91xsj.com/img/2017/04/19/a3f5f4c0edba4d8ca64ecc3fa9eda64d.jpg">
    </mt-swipe-item>
    <mt-swipe-item>
        <img src="http://cms.91xsj.com/img/2017/05/02/f5a70e0610794e279f72b39a389fd4f1.jpg">
    </mt-swipe-item>
    <mt-swipe-item>
        <img src="http://cms.91xsj.com/img/2017/05/02/e212ca8023bc4070a1ff5ce498e7251d.jpg">
    </mt-swipe-item>
    <mt-swipe-item>
        <img src="http://cms.91xsj.com/img/2017/05/02/cc938a729faf4e7e8b65535a0ec5b06e.jpg">
    </mt-swipe-item>
    <mt-swipe-item>
        <img src="http://cms.91xsj.com/img/2017/04/26/ec796e6e7b844ae2a6b0dcfc57489236.jpg">
    </mt-swipe-item>
  </mt-swipe>

  <homenav />
  <globalGoods />
  <indexList />
  <moreexciting />
  </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Swipe, SwipeItem } from 'mint-ui'

  import Homenav from './home_nav.vue'
  Vue.component('homenav',Homenav)

  import globalGoods from './globalGoods.vue'
  Vue.component('globalGoods',globalGoods)

  import IndexList from './indexList.vue'
  Vue.component('indexList',IndexList)

  import MoreExciting from './moregoods.vue'
  Vue.component('moreexciting',MoreExciting)

  Vue.component(Swipe.name, Swipe)
  Vue.component(SwipeItem.name, SwipeItem)
  export default {

  }
</script>

<!-- /*<style lang="css">
</style>*/ -->
