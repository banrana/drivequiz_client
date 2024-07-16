import axios from 'axios';

const API_URL = 'http://localhost:3000';

const api = axios.create({
  baseURL: API_URL,
  withCredentials: true
});

export const login = (username, password) => api.post('/auth/login', { username, password });
export const register = (username, email, password) => api.post('/auth/register', { username, email, password });
export const logout = () => api.post('/auth/logout');
export const getProfile = () => api.get('/auth/profile');
export const updateProfile = (data) => api.post('/auth/profile', data);
export const changePassword = (oldPassword, newPassword) => api.post('/auth/changePassword', { oldPassword, newPassword });
export const resetPassword = (token, password) => api.post(`/auth/resetPassword/${token}`, { password });
export const forgotPassword = (email) => api.post('/auth/forgotPassword', { email });

export const getQuizzes = () => api.get('/api/quizzes');
export const getQuiz = (id) => api.get(`/api/quizzes/${id}`);
export const submitQuizResult = (quizId, answers) => api.post('/api/results/submit', { quizId, answers });

export default api;