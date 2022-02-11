import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    registeration: {
      merchant_id: ''
    },
    user: {
      pending_wallet_balance: '',
      wallet_balance: '',
      username: '',
      logo: '' ,
      email: '',
      is_verified: '',
      has_added_asset: '',
      has_added_team: '',
      has_set_profile: '',
      has_set_rate: '',
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
    store_merchant_id(state, payload){
      state.registeration.merchant_id = payload.merchant_id
    },
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
      state.user.username = payload.username,
      state.user.wallet_balance = payload.wallet_balance,
      state.user.pending_wallet_balance = payload.pending_wallet_balance,
      state.user.is_verified = payload.is_verified,
      state.user.has_added_asset = payload.has_added_asset,
      state.user.has_added_team = payload.has_added_team,
      state.user.has_set_profile = payload.has_set_profile,
      state.user.has_set_rate = payload.has_set_rate
    }
  },
  actions: {
  },
  modules: {
  }
})
