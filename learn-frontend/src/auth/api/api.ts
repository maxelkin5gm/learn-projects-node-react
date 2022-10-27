import {AuthService} from "../services/AuthService";
import axios from "axios";
import {RefreshDto} from "../dtos/auth/RefreshDto";


export const API_URL = 'http://localhost:8080'

export const api = axios.create({
    withCredentials: true,
    baseURL: API_URL
})

api.interceptors.request.use((config: any) => {
    config.headers.Authorization = `Bearer ${AuthService.getToken()}`
    return config
})

api.interceptors.response.use((config) => {
    return config;
},async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && error.config && !error.config._isRetry) {
        originalRequest._isRetry = true;
        try {
            const res = await axios.get<RefreshDto>(`${API_URL}/api/auth/refresh`)
            AuthService.saveToken(res.data.token)
            return api.request(originalRequest);
        } catch (e) {
            console.log('НЕ АВТОРИЗОВАН')
        }
    }
    throw error;
})




