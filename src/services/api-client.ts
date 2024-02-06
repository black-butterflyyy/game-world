import axios, { AxiosRequestConfig, CanceledError } from 'axios';

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

export { CanceledError };


const axiosInstance = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '042a13fc067e4f6093264fcdb4e3e685',
  },
});

export default class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig = {}) =>
    axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
}

