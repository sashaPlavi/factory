import Vuex from "vuex";
import Vue from "vue";
import fields from "./modules/fields";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    fields,
  },
});
