import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import { tool } from "./utils";

Vue.config.productionTip = false;
// @ts-ignore
console.color = tool.colorLog

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
