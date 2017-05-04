// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

require('./styles/app.scss')
Vue.config.productionTip = false
import index from './scripts/components/index.vue'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { 
    index:index
   }
})
