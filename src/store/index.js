import Vue from "vue";
import Vuex from "vuex";

import posts from "./posts";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    posts
  }
});

export default store;
