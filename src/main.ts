import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Nav from '@/components/nav.vue'
import Layout from '@/components/layout.vue'

Vue.config.productionTip = false

Vue.component('Nav',Nav)
Vue.component('Layout',Layout)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')