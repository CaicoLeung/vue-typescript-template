import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import qs from "qs";
import config from "@/config/index";
import store from "@/store";

const baseUrl = config.uriPrefix;
axios.defaults.withCredentials = true;
axios.defaults.timeout = 5000;

const http = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  }
});

const fileService = axios.create({
  timeout: 30000,
  baseURL: config.fileReqUrl,
  responseType: "blob"
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

fileService.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token = localStorage.getItem("token");
    token && (config.headers.token = token);
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
  get: async <T>(url: string, params?: any): Promise<T> => await (await http.get(url, { params })).data,
  download: async <T>(url: string, params?: any): Promise<T> => await (await fileService.get(url, { params })).data,
  post: async <T>(url: string, params: any): Promise<T> => await (await http.post(url, qs.stringify(params))).data,
  put: async <T>(url: string, params: any): Promise<T> => await (await http.put(url, qs.stringify(params))).data,
  patch: async <T>(url: string, params: any): Promise<T> => await (await http.patch(url, qs.stringify(params))).data,
  delete: async <T>(url: string): Promise<T> => await (await http.delete(url)).data
};
