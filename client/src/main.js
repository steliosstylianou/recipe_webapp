import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/store/store'
import { sync } from 'vuex-router-sync'
import Buefy from 'buefy'

Vue.use(Buefy)

Vue.config.productionTip = false

sync(store, router)

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
