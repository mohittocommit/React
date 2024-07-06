import axiosInstance from "./axiosInstance";
import endPoints  from "./apiEndpoints";

const useApi = {
    login: async (payload) => {
        const response = await axiosInstance.post(endPoints.login, payload)
        return response.data
    },
    signup: async (payload) => {
        const response = await axiosInstance.post(endPoints.signup, payload)
        return response.data
    },
    forgotPassword: async (payload) => {
        const response = await axiosInstance.post(endPoints.forgotPassword, payload)
        return response.data
    },
    create: async (endpoint, payload) => {
        const response = await axiosInstance.post(endpoint, payload)
        return response.data
    },
    read: async (endpoint, payload={}) => {
        const response = await axiosInstance.get(endpoint, payload)
        return response.data
    },
    update: async (endpoint, payload) => {
        const response = await axiosInstance.put(endpoint, payload)
        return response.data
    },
    delete: async (endpoint, payload) => {
        const response = await axiosInstance.delete(endpoint, payload)
        return response.data
    }
}

export default useApi