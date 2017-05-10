<template lang="html">

    <div class="indexdata">
      <a href="#"><img src="http://cms.91xsj.com/img/2016/08/29/cfe206a6747942b1bd2f20c1886223ec.jpg" alt=""></a>
      <div class="indexlist">
        <indexlist uri='0'></indexlist>
      </div>
      <a href="#"><img src="http://cms.91xsj.com/img/2016/08/29/239ecdf46bb24fa3a6f52b8bd4762d9b.jpg" alt=""></a>
      <div class="indexlist">
        <indexlist uri='1'></indexlist>
      </div>
      <a href="#"><img src="http://cms.91xsj.com/img/2017/01/04/7d6834a5aaf54701b701626782a1b7c4.jpg" alt=""></a>
      <div class="indexlist">
        <indexlist uri='2'></indexlist>
      </div>
      <a href="#"><img src="http://cms.91xsj.com/img/2016/08/04/15d246e82c6c473c83d0c39cf2060252.jpg" alt=""></a>
      <div class="indexlist">
        <indexlist uri='3'></indexlist>
      </div>
      <a href="#"><img src="http://cms.91xsj.com/img/2016/09/29/1f6768a1fdee49ca864008b6bc04b849.jpg" alt=""></a>
      <div class="indexlist">
        <indexlist uri='4'></indexlist>
      </div>
      <a href="#"><img src="http://cms.91xsj.com/img/2016/08/04/6217207053d347ce9bed9a974f5c2667.jpg" alt=""></a>
      <div class="indexlist">
        <indexlist uri='5'></indexlist>
      </div>
      <a href="#"><img src="http://cms.91xsj.com/img/2016/12/29/7606139136cf409aa64e6377134d988a.jpg" alt=""></a>
      <div class="indexlist">
        <indexlist uri='6'></indexlist>
      </div>
      <a href="#"><img src="http://cms.91xsj.com/img/2016/08/04/b771222e8f784d8da55ba85645eadb26.jpg" alt=""></a>
      <div class="indexlist">
        <indexlist uri='7'></indexlist>
      </div>
      <a href="#"><img src="http://cms.91xsj.com/img/2016/08/04/93225e8f0e1c4ea1b79c95ce21473470.jpg" alt=""></a>
      <div class="indexlist">
        <indexlist uri='8'></indexlist>
      </div>
      <a href="#"><img src="http://cms.91xsj.com/img/2017/03/29/bced0e7f98164c3eb6031a68d37a82bc.jpg" alt=""></a>
      <div class="indexlist">
        <indexlist uri='9'></indexlist>
      </div>
    </div>


</template>

<script>
import Vue from 'vue'
import utilAxios from '../../router/utils/axios.js'

import dataList from './indexcommon.vue'
Vue.component('indexlist',dataList)

export default {
  data(){
    return {

    }
  },
  mounted:function(){
    // utilAxios.get({
    //   url:'mock/indexdata',
    //   method:'get',
    //   callback:function(res){
    //     this.arr = res.data;
    //     console.log(this.arr);
    //   }
    // })

  }

}
</script>

<style lang="css">
</style>
