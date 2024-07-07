import axios from 'axios';
import { apiBaseUrl } from '../config';

const authApi = axios.create({
	baseURL: apiBaseUrl,
	headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json',
	}
});

const api = axios.create({
	baseURL: apiBaseUrl,
	headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json',
	}
});

// Add a request interceptor to include the token in headers
api.interceptors.request.use(
	async (config) => {
		const token = localStorage.getItem("token");
		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}
		return config;
	},
	(error) => {
		return Promise.reject(error);
	},
);

export { api, authApi };