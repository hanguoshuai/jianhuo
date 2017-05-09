<template lang="html">
  <div class="m-movielist">
    <Header :title="title" :isShowBack="true" />
    <section>
      <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" :autoFill="false" ref="loadmore">
        <router-link :key="index" :to="`/detail/${item.id}`" tag="dl" v-for="(item, index) in list">
          <dt>
            <img v-lazy.container="item.images.large"/>
          </dt>
          <dd>
            <h1 v-html="item.title"></h1>
            <p v-html="item.original_title"></p>
            <p v-html="(item.directors[0] && item.directors[0].name) || ''"></p>
          </dd>
          <dd class="yo-badge" v-html="item.rating.average"></dd>
        </router-link>
        <!-- <dl v-for="(item, index) in list">
        </dl> -->
      </mt-loadmore>
    </section>
  </div>
</template>

<script>
  import Vue from 'vue'
  import Header from './Header.vue'
  Vue.component('Header', Header)

  import { Indicator } from 'mint-ui';

  import { Lazyload } from 'mint-ui';
  Vue.use(Lazyload);

  import utilAxios from '../utils/axios'
  export default {
    data(){
      return {
        list: [],
        title: '',
        allLoaded: false
      }
    },

    methods: {
      loadTop: function () {
        let that = this
        let type = that.$route.params.type
        utilAxios.get({
          url: '/api/v2/movie/' + type + '?count=2&start=10',
          method: 'get',
          callback: function (res) {
            that.title = res.data.title
            that.list = res.data.subjects.concat(that.list)
            that.$refs.loadmore.onTopLoaded();
          }
        })
      },
      loadBottom: function () {
        let that = this
        let type = that.$route.params.type
        utilAxios.get({
          url: '/api/v2/movie/' + type + '?count=20&start=10',
          method: 'get',
          callback: function (res) {
            that.title = res.data.title
            that.list = that.list.concat(res.data.subjects)
            // this.allLoaded = true
            that.$refs.loadmore.onBottomLoaded()
          }
        })
      }
    },

    mounted: function () {
      let that = this
      let type = that.$route.params.type

      Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
      });

      utilAxios.get({
        url: '/api/v2/movie/' + type + '?count=10',
        method: 'get',
        callback: function (res) {
          that.title = res.data.title
          that.list = that.list.concat(res.data.subjects)
          Indicator.close()
        }
      })
    }
  }
</script>

<style lang="css">
</style>
