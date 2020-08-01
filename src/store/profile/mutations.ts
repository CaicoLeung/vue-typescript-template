import { MutationTree } from "vuex";

const mutations: MutationTree<IProfileState> = {
  setName: (state: IProfileState, payload: string) => (state.name = payload),
  setAge: (state: IProfileState, payload: number) => (state.age = payload)
};

export default mutations;
