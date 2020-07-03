import http from "./index";
import { VueConstructor } from "vue";

declare module "vue/types/vue" {
  interface Vue {
    $api: any;
  }
}

class Api {
  TestModule = {
    test: (
      id: number
    ): Promise<{
      completed: boolean;
      id: number;
      title: string;
      userId: number;
    }> => http.get(`/todos/${id}`)
  };
}

export const Server = {
  install: function<T>(Vue: VueConstructor, options?: T): void {
    Vue.prototype.$api = new Api();
  }
};
