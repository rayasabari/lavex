import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'
import './assets/tailwind.css'
import axios from 'axios'
axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://api.lavex.test/'

store.dispatch('auth/me').finally(() => {
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
})

Vue.config.productionTip = false

