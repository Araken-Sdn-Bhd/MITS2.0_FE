// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Routes from './routes'
import axios from 'axios';
import VueAxios from 'vue-axios'

Vue.use(VueRouter)

Vue.prototype.$axios = axios
Vue.prototype.$vueaxios = VueAxios
Vue.use(VueAxios, axios)

const router = new VueRouter ({
  routes: Routes,
  mode: 'history'
})

import VueFormGenerator from 'vue-form-generator'
import 'vue-form-generator/dist/vfg.css'
Vue.use(VueFormGenerator)

require('cleave.js')
require('cleave.js/dist/addons/cleave-phone.my')

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import 'bootstrap/dist/js/bootstrap.js'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

import Multiselect from 'vue-multiselect'
Vue.component('multiselect', Multiselect)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router
})
