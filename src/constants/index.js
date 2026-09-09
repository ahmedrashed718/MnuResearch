export const APP_NAME = '1st Student Research & Innovation Conference';
export const UNIVERSITY_NAME = 'Menoufia National University';

export const STORAGE_KEYS = Object.freeze({
  accessToken: 'mnu_conference_access_token',
  user: 'mnu_conference_user',
  language: 'mnu_conference_language',
});

export const API_CONFIG = Object.freeze({
  baseURL: import.meta.env.VITE_API_URL || '/api',
  timeout: 15000,
});

export const USER_ROLES = Object.freeze({
  student: 'student',
  admin: 'admin',
});
