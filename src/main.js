import Vue from 'vue'
import App from './App.vue'
import router from './router' /* add */

import '@/assets/scss/reset.scss'   /* コンポーネントに取り込んでいないscssファイル */
import '@/assets/scss/main.scss'   /* コンポーネントに取り込んでいないscssファイル */

Vue.config.productionTip = false

new Vue({
  router,  /* add */
  render: h => h(App),
}).$mount('#app')
