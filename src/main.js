// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

Vue.config.productionTip = false


require('./styles/app.scss')

import Vue from 'vue'

/* eslint-disable no-new */
import router from './scripts/router'
new Vue({
  el: '#app',
  router,
  template:"<router-view></router-view>"

})
