import { GetterTree } from "vuex";

const getters: GetterTree<IProfileState, IRootState> = {
  getName(state: IProfileState): string {
    return state.name;
  },
  getAge(state: IProfileState): number {
    return state.age;
  }
};

export default getters;
