import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import Fields from "./components/Fields";

import Statistic from "./components/Statistic";
import store from "./store";

Vue.config.productionTip = false;
Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: Fields },
    { path: "/statistic", component: Statistic },
  ],
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
