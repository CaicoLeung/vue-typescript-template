import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import { Server } from "./http/api";
import { cookieJs } from "@/utils/cookieJs";

Vue.config.productionTip = false;
Vue.use(Server);
Vue.use(cookieJs);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
