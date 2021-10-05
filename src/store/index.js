import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    banks: '',
    all_rate: []
  },
  mutations: {
    get_banks(state, payload){
      state.banks = payload.banks
    },
    getRates(state, payload){
      state.all_rate = payload.all_rate
    }
  },
  actions: {
  },
  modules: {
  }
})
