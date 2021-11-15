import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      pending_wallet_balance: '',
      wallet_balance: '',
      username: '',
      logo: '' ,
      email: ''
    },
    headsUp: {
      transport_rate: '',
      profile: '',
      account: '',
      team: ''
    },
    banks: '',
    all_rate: [],
    orders: [],
    notifications: ''
  },
  mutations: {
    get_banks(state, payload){
      state.banks = payload.banks
    },
    getRates(state, payload){
      state.all_rate = payload.all_rate
    },
    storeOrders(state, payload){
      state.orders = payload.orders
    },
    store_notifications(state, payload){
      state.notifications = payload.notifications
    },
    storeProfile(state, payload){
      state.user.pending_wallet_balance = payload.pending_wallet_balance,
      state.user.wallet_balance = payload.wallet_balance 
    },
    updateSteps(state, payload){
      state.headsUp.account = payload.account,
      state.headsUp.transport_rate = payload.transport_rate,
      state.headsUp.team = payload.team,
      state.headsUp.profile = payload.profile
    },
    profileDetails(state, payload){
      state.user.logo = payload.logo,
      state.user.email = payload.email,
      state.user.username = payload.username
    }
  },
  actions: {
  },
  modules: {
  }
})
