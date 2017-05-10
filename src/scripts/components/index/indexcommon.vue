<template lang="html">
      <ul>
        <li v-for='(item,index) in dataList'>
          <img :src="'http://image01.ccigmall.com/p1/'+item.imageurl" />
          <h4>{{item.highlightedPname}}</h4>
          <h6>
            <span>￥{{item.promotion_price}}</span>
            <i>￥{{item.domestic_price}}</i>
          </h6>
        </li>
        <li class='showmore'>
            <h3>查看更多</h3>
            <h5>more</h5>
        </li>
      </ul>
</template>
<script>
import utilAxios from '../../router/utils/axios'
export default {

  data(){
    return {
      dataList:[]
    }
  },
  props:['uri'],
  mounted:function(){
    let that = this
    utilAxios.get({
      url:'mock/indexdata',
      method:'get',
      callback:function(res){
        that.dataList = res.data.splice(eval(that.uri)*8,8)
      }
    })
  }
}
</script>

<style lang="css">
</style>
