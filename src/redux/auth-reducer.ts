import {
    authAPI,
    ResultCodeForCaptcha,
    ResultCodesEnum,
    securityAPI,
} from './../api/api'
import { AuthReducerActionsTypes, AuthType } from '../Types'
import { stopSubmit } from 'redux-form'
import { AppStateType } from './store'
import { ThunkAction } from 'redux-thunk'

const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null,
}

export const authReducer = (
    state: AuthType = initialState,
    action: AuthReducerActionsTypes
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
type ThunkType = ThunkAction<
    Promise<void>,
    AppStateType,
    unknown,
    AuthReducerActionsTypes
>
export const getAuthUserData = (): ThunkType => async (dispatch) => {
    const meData = await authAPI.getUserData()
    if (meData.resultCode === ResultCodesEnum.Success) {
        let { id, login, email } = meData.data
        dispatch(setAuthUserData(id, email, login, true))
    }
}

export const login = (
    email: string,
    password: string,
    rememberMe: boolean,
    captcha: string | null
): any => async (dispatch: any) => {
    const data = await authAPI.login(email, password, rememberMe, captcha)
    if (data.resultCode === ResultCodesEnum.Success) {
        dispatch(getAuthUserData())
    } else {
        if (data.resultCode === ResultCodeForCaptcha.CaptchaIsRequired) {
            dispatch(getCaptchaUrl())
        }
        const message =
            data.messages.length > 0 ? data.messages[0] : 'Some error'
        dispatch(
            stopSubmit('login', {
                _error: message,
            })
        )
    }
}
export const getCaptchaUrl = (): ThunkType => async (dispatch) => {
    const response = await securityAPI.getCaptchaUrl()
    const captchaUrl = response.data.url
    dispatch(getCaptchaUrlSuccess(captchaUrl))
}

export const logout = (): ThunkType => async (dispatch) => {
    const response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}
