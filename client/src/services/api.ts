import axios, { AxiosResponse } from 'axios';
import { ApiResponse, Project, Skill, ContactForm, Contact, AuthResponse, User, PaginatedResponse, ProjectFilters, SkillFilters } from '../types';

// Create axios instance
const api = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/';
    }
    return Promise.reject(error);
  }
);

// API functions
export const apiService = {
  // Health check
  health: (): Promise<AxiosResponse<ApiResponse>> => 
    api.get('/health'),

  // Projects
  getProjects: (filters?: ProjectFilters): Promise<AxiosResponse<ApiResponse<PaginatedResponse<Project>>>> =>
    api.get('/projects', { params: filters }),
  
  getProject: (id: string): Promise<AxiosResponse<ApiResponse<Project>>> =>
    api.get(`/projects/${id}`),
  
  getFeaturedProjects: (): Promise<AxiosResponse<ApiResponse<Project[]>>> =>
    api.get('/projects/featured'),
  
  createProject: (project: Partial<Project>): Promise<AxiosResponse<ApiResponse<Project>>> =>
    api.post('/projects', project),
  
  updateProject: (id: string, project: Partial<Project>): Promise<AxiosResponse<ApiResponse<Project>>> =>
    api.put(`/projects/${id}`, project),
  
  deleteProject: (id: string): Promise<AxiosResponse<ApiResponse>> =>
    api.delete(`/projects/${id}`),

  // Skills
  getSkills: (filters?: SkillFilters): Promise<AxiosResponse<ApiResponse<PaginatedResponse<Skill>>>> =>
    api.get('/skills', { params: filters }),
  
  getSkill: (id: string): Promise<AxiosResponse<ApiResponse<Skill>>> =>
    api.get(`/skills/${id}`),
  
  getFeaturedSkills: (): Promise<AxiosResponse<ApiResponse<Skill[]>>> =>
    api.get('/skills/featured'),
  
  getSkillsByCategory: (category: string): Promise<AxiosResponse<ApiResponse<Skill[]>>> =>
    api.get(`/skills/category/${category}`),
  
  createSkill: (skill: Partial<Skill>): Promise<AxiosResponse<ApiResponse<Skill>>> =>
    api.post('/skills', skill),
  
  updateSkill: (id: string, skill: Partial<Skill>): Promise<AxiosResponse<ApiResponse<Skill>>> =>
    api.put(`/skills/${id}`, skill),
  
  deleteSkill: (id: string): Promise<AxiosResponse<ApiResponse>> =>
    api.delete(`/skills/${id}`),

  // Contact
  submitContact: (contact: ContactForm): Promise<AxiosResponse<ApiResponse<Contact>>> =>
    api.post('/contact', contact),
  
  getContacts: (page?: number, limit?: number, status?: string): Promise<AxiosResponse<ApiResponse<PaginatedResponse<Contact>>>> =>
    api.get('/contact', { params: { page, limit, status } }),
  
  getContact: (id: string): Promise<AxiosResponse<ApiResponse<Contact>>> =>
    api.get(`/contact/${id}`),
  
  updateContactStatus: (id: string, status: string): Promise<AxiosResponse<ApiResponse<Contact>>> =>
    api.put(`/contact/${id}/status`, { status }),
  
  deleteContact: (id: string): Promise<AxiosResponse<ApiResponse>> =>
    api.delete(`/contact/${id}`),

  // Auth
  register: (userData: { username: string; email: string; password: string }): Promise<AxiosResponse<ApiResponse<AuthResponse>>> =>
    api.post('/auth/register', userData),
  
  login: (credentials: { email: string; password: string }): Promise<AxiosResponse<ApiResponse<AuthResponse>>> =>
    api.post('/auth/login', credentials),
  
  getMe: (): Promise<AxiosResponse<ApiResponse<User>>> =>
    api.get('/auth/me'),
  
  updateProfile: (userData: Partial<User>): Promise<AxiosResponse<ApiResponse<User>>> =>
    api.put('/auth/profile', userData),
};

export default api;
