import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import CxltToastr from 'cxlt-vue2-toastr'
import 'cxlt-vue2-toastr/dist/css/cxlt-vue2-toastr.css'
import * as VueGoogleMaps from "vue2-google-maps";
import VueCountryCode from "vue-country-code";

Vue.config.productionTip = false
var toastrConfigs = {
  position: 'top right',
  showDuration: 3000,
  timeOut: 8000,
  progressBar: true,
  closeButton: true
}
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyAFbHM1j8bJmZ5cqqyFM48HkKMAldFq6qc",
    libraries: "places",
  },
}).use(CxltToastr, toastrConfigs).use(VueCountryCode);
// Vue.use(VueToastr, {});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
