import { ResultCodesEnum, ResultCodeForCaptcha, instance } from './api'

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
