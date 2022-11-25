import { BACKEND_URL, REQUES_TIMEOUT } from '../const';
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { getToken } from './token';

export const createApi = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUES_TIMEOUT,
  });
  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const token = getToken();
      if (token && config.headers) {
        config.headers['x-token'] = token;
      }
      return config;
    }
  );
  return api;
};
