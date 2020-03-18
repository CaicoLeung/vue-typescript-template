import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import qs from "qs";
import config from "@/config/index";
import store from "@/store";

const baseUrl = config.uriPrefix;
axios.defaults.withCredentials = true;

const http = axios.create({
  timeout: 5000,
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/x-www-form-urlencodeed;charset=UTF-8;",
    "Access-Control-Allow-Origin": "*"
  }
});

const form = axios.create({
  timeout: 30000,
  baseURL: baseUrl,
  headers: {
    "Content-Type": "multipart/form-data;"
  }
});

http.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token = store.state.token;
    token && (config.headers.Authorization = token);
    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

http.interceptors.response.use((response: AxiosResponse) => {
  const { status } = response;
  if ((status >= 200 && status <= 300) || status === 305) {
    return Promise.resolve(response);
  } else {
    return Promise.reject(response);
  }
});

export default {
  get(url: string, params?: any) {
    return new Promise(async resolve => {
      const response: AxiosResponse = await http.get(url, { params });
      resolve(response);
    });
  },
  post(url: string, params: any) {
    return new Promise(async resolve => {
      const response: AxiosResponse = await http.post(url, qs.stringify(params));
      resolve(response);
    });
  },
  form(url: string, params: any) {
    return new Promise(async resolve => {
      const response: AxiosResponse = await form.post(url, params);
      resolve(response);
    });
  }
};
