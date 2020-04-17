import Vue from 'vue'
import App from './App.vue'
import router from './router'
import plugin from './plugin/plugin'

Vue.config.productionTip = false

new Vue({
  router,
  plugin,
  render: h => h(App)
}).$mount('#app')
