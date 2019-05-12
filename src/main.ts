import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import api from "./http/api";

Vue.config.productionTip = false;
Vue.prototype.$API = api;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
