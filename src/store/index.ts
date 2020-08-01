import Vue from "vue";
import Vuex from "vuex";
import profile from "./profile";
import state from './profile/state';

Vue.use(Vuex);

export default new Vuex.Store<IRootState>({
  state: {
    count: 0,
    token: "",
    entryUrl: ""
  },
  mutations: {
    incrementHandle(state: IRootState) {
      state.count++;
    }
  },
  modules: {
    profile
  }
});
