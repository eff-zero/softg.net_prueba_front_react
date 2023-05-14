import axios from 'axios';
import { BASE_BACKEND_URL, LOCAL_STORAGE_KEY } from './env';

let token = () => window.localStorage.getItem(LOCAL_STORAGE_KEY) || '';

console.log(token())

const api = () =>
  axios.create({
    baseURL: BASE_BACKEND_URL,
    headers: {
      authorization: `Bearer ${token()}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    withCredentials: true,
  });

export default api;
