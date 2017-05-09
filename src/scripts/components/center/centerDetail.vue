<template lang="html">
  <div class="centerDetail">
    <header class='h-detail'>
      <router-link tag='span' to='/center' class="h-detail_left yo-ico">&#xf07d;</router-link>
      <span class="h-center_center">尖货详情</span>
      <span class="h-detail_right yo-ico">&#xf04a;</span>
    </header>
    <div class="cont">

      <div class="article">
        <h2 class="m-tip_title" v-text='Dtitle'></h2>
        <h3 class="mTipTxt">
          <img class="lazy" :src="DconImg">
        </h3>
        <p class="m-tip_txt" v-html="DconOne"></p>
        <h3 class="mTipTxt">
          <img class="lazy" :src="DadvImg">
        </h3>
        <p class="m-tip_txt" v-html="DadvCon"></p>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import utilAxios from '../../router/utils/axios'
export default {
  data(){
    return {
      dataSource: [],
      brr:{},
      Dtitle:'',
      DconImg:'',
      DconOne:'',
      DadvImg:'',
      DadvCon:''
    }
  },

  props: ['uri', 'isRefresh','index'],

  mounted: function () {
    let that = this
    // console.log(that.isRefresh);
    utilAxios.get({
      url: 'mock/center1',
      method: 'get',
      callback: function (res) {
        that.Dtitle=res.data.title;
        that.DconImg=res.data.conImg;
        that.DconOne=res.data.conOne;
        that.DadvImg=res.data.advImg;
        that.DadvCon=res.data.advCon;
        // console.log(res)
        // console.log(that.title);
      }
    })
  }
}
</script>

<style lang="css">
</style>
