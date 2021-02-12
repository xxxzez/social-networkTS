import { UserType } from './../Types'
import axios from 'axios'

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '09428775-ee37-4314-b1ba-564d5848e89a',
    },
})

export enum ResultCodesEnum {
    Success = 0,
    Error = 1,
}
export enum ResultCodeForCaptcha {
    CaptchaIsRequired = 10,
}

export type GetItemsType = {
    items: UserType[]
    totalCount: number
    error: string | null
}
