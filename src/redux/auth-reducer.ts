import { authAPI, securityAPI } from './../api/api'
import { ActionsTypes, AuthType } from '../Types'
import { stopSubmit } from 'redux-form'

const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl:
        'https://social-network.samuraijs.com/HelpApp/HelpApp/Captcha?w=200&h=100&c=U3W3qnfSKjrGMvo4ANo9ag%3D%3D',
}

export const authReducer = (
    state: AuthType = initialState,
    action: ActionsTypes
): AuthType => {
    switch (action.type) {
        case 'SET-USER-DATA':
        case 'GET-CAPTCHA-URL-SUCCESS':
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state
    }
}
export const setAuthUserData = (
    id: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
) => {
    return {
        type: 'SET-USER-DATA',
        payload: { id, email, login, isAuth },
    } as const
}
export const getCaptchaUrlSuccess = (captchaUrl: string) => {
    return {
        type: 'GET-CAPTCHA-URL-SUCCESS',
        payload: { captchaUrl },
    } as const
}

export const getAuthUserData = () => async (dispatch: any) => {
    const response = await authAPI.getUserData()
    if (response.data.resultCode === 0) {
        let { id, login, email } = response.data.data
        dispatch(setAuthUserData(id, email, login, true))
    }
}

export const login = (
    email: string,
    password: string,
    rememberMe: boolean,
    captcha: string | null
): any => async (dispatch: any) => {
    const response = await authAPI.login(email, password, rememberMe, captcha)
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptchaUrl)
        }
        let message =
            response.data.messages.length > 0
                ? response.data.messages[0]
                : 'Some error'
        dispatch(
            stopSubmit('login', {
                _error: message,
            })
        )
    }
}
export const getCaptchaUrl = (): any => async (dispatch: any) => {
    const response = await securityAPI.getCaptchaUrl()
    const captchaUrl = response.data.url
    dispatch(getCaptchaUrlSuccess(captchaUrl))
}

export const logout = () => async (dispatch: any) => {
    const response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}
