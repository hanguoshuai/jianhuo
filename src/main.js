// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

Vue.config.productionTip = false

require('./styles/app.scss')

import Vue from 'vue'

import index from './scripts/router'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template:"<router-view></router-view>"
})
