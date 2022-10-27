import {AppDispatch} from "../store/store"
import {authActions} from "../store/slices/authSlice"
import {RefreshDto} from "../dtos/auth/RefreshDto";
import {api} from "../api/api";
import {RegistrationDto} from "../dtos/auth/RegistrationDto";
import {LoginDto} from "../dtos/auth/LoginDto";


export class AuthService {

    static async checkAuth(dispatch: AppDispatch) {
        try {
            const user = await this.refresh()
            dispatch(authActions.setUser(user))
        } catch (e) {
            dispatch(authActions.setUser(null))
        } finally {
            dispatch(authActions.setLoader(false))
        }
    }

    static async registration(email: string, name: string, password: string) {
        const res = await api.post<RegistrationDto>('/api/auth/registration', {email, name, password})
        this.saveToken(res.data.token)
        return res.data.user
    }

    static async login(email: string, password: string) {
        const res = await api.post<LoginDto>('/api/auth/login', {email, password})
        this.saveToken(res.data.token)
        return res.data.user
    }

    static async refresh() {
        const res = await api.get<RefreshDto>('/api/auth/refresh')
        this.saveToken(res.data.token)
        return res.data.user
    }

    static async logout(dispatch: AppDispatch) {
        await api.post('/api/auth/logout')
        localStorage.removeItem('token')
        dispatch(authActions.setUser(null))
    }

    static getToken() {
        return localStorage.getItem('token')
    }

    static saveToken(token: string) {
        localStorage.setItem('token', token)
    }


}