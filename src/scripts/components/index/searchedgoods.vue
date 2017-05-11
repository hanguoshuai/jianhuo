<template lang="html">
  <div class="searchedgoods">
    <router-link to="/" tag="dl" v-for='item in data'>
      <dt><img :src="'http://image01.ccigmall.com/p1/'+item.imageurl" alt=""></dt>
      <dd>
        <h1>
          <img :src="'http://image01.ccigmall.com/p1/'+item.countryImg" alt="">
          <span>{{item.cyid}}</span>
          <span>{{item.proStyleDescribe}}</span>
        </h1>
        <p>{{item.highlightedPname}}</p>
        <p>市场价：<i>￥{{item.domestic_price}}</i></p>
        <p>￥{{item.promotion_price}}</p>
      </dd>
    </router-link>
  </div>
</template>

<script>
import Vue from 'vue'
import utilsAxios from '../../router/utils/axios.js'
export default {
  data(){
    return {
      data:[]
    }
  },
  mounted:function(){
    let that = this
    utilsAxios.get({
      url:'mock/indexdata',
      method:'get',
      callback:function(res){
        that.data = res.data.splice(0,20)
      }
    })
  }
}
</script>

<style lang="css">
</style>
