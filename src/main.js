import Vue from 'vue'
import App from './App.vue'
import router from './router'
import pokemon from './pokemon-data.js'

Vue.config.productionTip = false

let data = {
  pokemons: pokemon,
  cart: []
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
