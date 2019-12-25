// import './firebase';
import Vue from 'vue'
import App from './App.vue'
// import VueFire from 'vuefire'
import router from './router'

import Sticky from 'vue-sticky-directive'

// Vue.use(VueFire);
Vue.use(Sticky);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
