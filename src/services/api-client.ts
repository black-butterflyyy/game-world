import axios, { CanceledError } from 'axios';

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '042a13fc067e4f6093264fcdb4e3e685',
  },
});

export { CanceledError };
