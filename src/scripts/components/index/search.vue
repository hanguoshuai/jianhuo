<template lang="html">
  <div class="searchPage">
    <div class="search-top">
      <p>
        <input type="text" name="" value="" placeholder='搜索您想要的商品' @keyup.enter='search'>
        <router-link tag='span' to='/'>取消</router-link>
      </p>
    </div>
  <div class="show" v-if='show'>
    <div class="hot-search">
      <h5>热门搜索</h5>
      <ul>
        <li>防晒</li>
        <li>驱蚊</li>
        <li>卫生巾</li>
        <li>化妆水</li>
        <li>面膜</li>
        <li>唇膏</li>
        <li>酵素</li>
        <li>纸尿裤</li>
        <li>奶粉</li>
        <li>洗发沐浴</li>
      </ul>
    </div>
    <div class="recommoned">
      <h5>商品推荐</h5>
      <ul>
        <router-link to="/" tag="li" v-for="item in recommoned">
          <img :src="'http://image01.ccigmall.com/p1/'+item.imageurl" />
          <h4>{{item.highlightedPname}}</h4>

            <span>￥{{item.promotion_price}}</span>
            <i>市场价:{{item.domestic_price}}</i>

        </router-link>
      </ul>
    </div>
  </div>


  <!-- 搜索出来的商品 -->
<searchedgoods v-if='!show'/>
  </div>
</template>

<script>

import Vue from 'vue'
import utilsAxios from '../../router/utils/axios.js'

import searchedgoods from './searchedgoods.vue'
Vue.component('searchedgoods',searchedgoods)
export default {
  data(){
    return {
      recommoned:[],
      searchedgoods:[],
      show:true,

      search:function(){
        this.show = false;

      }
    }
  },
  mounted:function(){
    let that = this
    utilsAxios.get({
      url:'/api/view/productMix/findProductInfosToJson?key=3333',
      method:'get',
      callback:function(res){
        that.recommoned = res.data.data;
        console.log(that.recommoned)
      }
    })
  }
}

</script>

<style lang="scss">



</style>
