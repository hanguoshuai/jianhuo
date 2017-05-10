<template lang="html">
  <div class="more-exciting">
    <h2>更多精彩</h2>
    <ul>
      <li v-for='(item,index) in more'>
        <img :src="'http://image01.ccigmall.com/p1/'+item.imageurl" />
        <h4>{{item.highlightedPname}}</h4>
        <h6>
          <span>￥{{item.promotion_price}}</span>
          <i>￥{{item.domestic_price}}</i>
        </h6>
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue'
import utilsAxios from '../../router/utils/axios.js'
export default {
  data(){
    return {
      more:[]
    }
  },
  mounted:function(){
    let that = this
    utilsAxios.get({
      url:'mock/indexdata',
      method:'get',
      callback:function(res){
        that.more = res.data.splice(80)
        console.log(that.more)
      }
    })
  }
}
</script>

<style lang="css">
</style>
