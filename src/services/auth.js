import { STORAGE_KEYS } from '../constants';
import api from './api';

export const authService = {
  async login(credentials) {
    const { data } = await api.post('/auth/login', credentials);
    this.setSession(data);
    return data;
  },

  async register(payload) {
    const { data } = await api.post('/auth/register', payload);
    return data;
  },

  async getCurrentUser() {
    const { data } = await api.get('/auth/me');
    return data;
  },

  setSession({ accessToken, user }) {
    if (accessToken) localStorage.setItem(STORAGE_KEYS.accessToken, accessToken);
    if (user) localStorage.setItem(STORAGE_KEYS.user, JSON.stringify(user));
  },

  getStoredUser() {
    const storedUser = localStorage.getItem(STORAGE_KEYS.user);
    if (!storedUser) return null;

    try {
      return JSON.parse(storedUser);
    } catch {
      localStorage.removeItem(STORAGE_KEYS.user);
      return null;
    }
  },

  getToken() {
    return localStorage.getItem(STORAGE_KEYS.accessToken);
  },

  logout() {
    localStorage.removeItem(STORAGE_KEYS.accessToken);
    localStorage.removeItem(STORAGE_KEYS.user);
  },
};
