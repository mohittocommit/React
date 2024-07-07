// apiService.js
import { authApi } from './api';
import apiEndpoints from './constants';

console.log("apiEndpoints",apiEndpoints)

export const loginUser = async (userPayload) => {
    try {
        const response = await authApi.post(apiEndpoints.login, userPayload);
        return response;
    } catch (error) {
        return handleError(error);
    }
};

const handleError = (error) => {
    if (error.response) {
        console.error('API call failed. Response data:', error.response.data);
        console.error('API call failed. Response status:', error.response.status);
        console.error('API call failed. Response headers:', error.response.headers);
        return error.response;
    } else if (error.request) {
        console.error('API call failed. No response received:', error.request);
        return error.response;
    } else {
        console.error('API call failed. Error message:', error.message);
        return error;
    }
};
