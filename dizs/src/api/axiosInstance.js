import axios from "axios";

const axiosInstance = axios.create({
	baseURL: process.env.API_BASE_URL,
	headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json',
	}
})

// sending token to api
axios.interceptors.request.use(function (config) {
	const token = localStorage.getItem("token");
	if (token) {
		config.headers["Authorization"] = `Bearer ${token}`
	}
	return config;
});

export default axiosInstance