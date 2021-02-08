import { ProfileType } from './../Types'
import axios from 'axios'

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '09428775-ee37-4314-b1ba-564d5848e89a',
    },
})

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance
            .get(`users?page=${currentPage}&count=${pageSize}`)
            .then((response) => {
                return response.data
            })
    },
    follow(userId: number) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`)
    },
}

export enum ResultCodesEnum {
    Success = 0,
    Error = 1,
}
export enum ResultCodeForCaptcha {
    CaptchaIsRequired = 10,
}

type MeResponseType = {
    resultCode: ResultCodesEnum
    messages: string[]
    data: {
        id: number
        email: string
        login: string
    }
}
type LoginResponseType = {
    resultCode: ResultCodesEnum | ResultCodeForCaptcha
    messages: string[]
    data: {
        userId: number
    }
}

export const authAPI = {
    getUserData() {
        return instance.get<MeResponseType>('auth/me').then((res) => res.data)
    },
    login(
        email: string,
        password: string,
        rememberMe: boolean = false,
        captcha: string | null = null
    ) {
        return instance
            .post<LoginResponseType>('auth/login', {
                email,
                password,
                rememberMe,
                captcha,
            })
            .then((res) => res.data)
    },
    logout() {
        return instance.delete('auth/login')
    },
}
export const securityAPI = {
    getCaptchaUrl() {
        return instance.get('security/get-captcha-url')
    },
}

export const profileAPI = {
    getProfile(userId: number) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId: number) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, { status: status })
    },
    savePhoto(photoFile: any) {
        const formData = new FormData()
        formData.append('image', photoFile)
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
    },
    saveProfile(data: ProfileType) {
        return instance.put('profile', data)
    },
}
