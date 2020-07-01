import { VueConstructor } from "vue";

declare module "vue/types/vue" {
  interface Vue {
    $cookiejs: CookieJs;
  }
}

class CookieJs {
  public setCookie(name: string, value: string) {
    const days = 30;
    const exp = new Date();
    exp.setTime(exp.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${escape(value)};expires=${exp.toUTCString()}`;
  }

  public getCookie(name: string) {
    const reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    const arr = document.cookie.match(reg);
    console.log(arr);
    if (Array.isArray(arr) && arr.length) {
      return unescape(arr[2]);
    }
    return null;
  }

  public deleteCookie(name: string) {
    const exp = new Date();
    exp.setTime(exp.getTime() - 1);
    const cookieValue = this.getCookie(name);
    if (cookieValue) {
      document.cookie = `${name}=${cookieValue};expires=${exp.toUTCString()}`;
    }
  }
}

export const cookieJs = {
  install: function<T>(Vue: VueConstructor, options?: T): void {
    Vue.prototype.$cookiejs = new CookieJs();
  }
};
