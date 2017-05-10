<template lang="html">


    <div class="m-center">
      <mt-swipe :auto="6000">
        <mt-swipe-item>
          <img src="Http://image01.ccigmall.com/p0/group1/M00/01/22/CgAyAld2QJmAH1wQAAFdzX-4xTo087.jpg">
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="Http://image01.ccigmall.com/p0/group1/M00/01/22/CgAyAld2QJmAH1wQAAFdzX-4xTo087.jpg">
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="Http://image01.ccigmall.com/p0/group1/M00/01/22/CgAyAld2QJmAH1wQAAFdzX-4xTo087.jpg">
        </mt-swipe-item>
      </mt-swipe>
      <div class="title">
        <h2 class="t_title"></h2>
      </div>
      <ul class="article">
        <router-link tag='li' to='/centerdetail' class="m-tip" v-for="(item,index) in arr" :key="index">
            <h2 class="m-tip_title" v-text="item.title"></h2>
            <h3 class="mTipTxt">
              <img class="lazy" :src="item.img">
            </h3>
            <p class="m-tip_txt" v-html="item.content"></p>
            <p class="m-tip_share" id="m_share">
              <span class="selected m-heart" id="dianzan">
                <span class="sh1"></span>
                <span v-text="item.zan"></span>
              </span>
            </p>
        </router-link>
      </ul>
    </div>

</template>

<script>
import Vue from 'vue'
import { Swipe, SwipeItem } from 'mint-ui'
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
import utilAxios from '../../router/utils/axios'
export default {
  data(){
    return {
      dataSource: [],
      arr:''
    }
  },
  methods: {
    zan: function () {
      var m_share = document.getElementById('m_share');
      m_share.onclick = function preventDefa(e){
        if(window.event){
          //IE中阻止函数器默认动作的方式
          window.event.returnValue = false;
        }
        else{
          //阻止默认浏览器动作(W3C)
          e.preventDefault();
        }
      }
    }
  },
  props: ['uri', 'isRefresh'],

  mounted: function () {
    let that = this
    // console.log(that.isRefresh);
    utilAxios.get({
      url: 'mock/center',
      method: 'get',
      callback: function (res) {
        that.arr=res.data
        // console.log(that.title);
      }
    })
  }
}
window.onload=function(){
  var btn = document.getElementById('btn');
}
</script>

<style lang="css">


</style>
