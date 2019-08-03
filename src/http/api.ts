import http from "./index";
import { VueConstructor } from "vue";

declare module "vue/types/vue" {
  interface Vue {
    $api: any;
  }
}

class Api {
  public test(param?: any) {
    return http.get("/urldata", param);
  }
}

export const Server = {
  install: function<T>(Vue: VueConstructor, options?: T): void {
    Vue.prototype.$api = new Api();
  }
};
