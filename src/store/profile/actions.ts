import { ActionTree } from "vuex";

const actions: ActionTree<IProfileState, IRootState> = {
  setName({ commit }, payload: string) {
    commit("setName", payload);
  },
  setAge({ commit }, payload: number) {
    commit("setAge", payload);
  }
};

export default actions;
