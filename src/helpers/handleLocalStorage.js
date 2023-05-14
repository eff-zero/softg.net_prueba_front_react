import { LOCAL_STORAGE_KEY } from '../env';

const setToken = (token) => localStorage.setItem(LOCAL_STORAGE_KEY, token);
const getToken = () => localStorage.getItem(LOCAL_STORAGE_KEY);
const clearToken = () => localStorage.clear();

export { setToken, clearToken, getToken };
