import http from "./index";

class Api {
  public test() {
    return http.get('/users');
  }
}

export default new Api();
