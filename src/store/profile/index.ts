import { Module } from "vuex";
import state from "./state";
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

const namespaced = true;

const profile: Module<IProfileState, IRootState> = {
  namespaced,
  state,
  getters,
  mutations,
  actions
};

export default profile;
