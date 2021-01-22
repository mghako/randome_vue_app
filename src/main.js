import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import "./assets/styles/tailwind.css"
import "tailwindcss/tailwind.css"
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

Vue.config.productionTip = false

Vue.prototype.axios = axios

new Vue({
  render: h => h(App),
}).$mount('#app')
