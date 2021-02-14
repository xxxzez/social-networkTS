import { ResultCodeForCaptchaEnum, ResultCodesEnum } from './../api/api'
import { FormAction, stopSubmit } from 'redux-form'
import { BaseThunkType, InferActionsTypes } from './store'
import { authAPI } from '../api/auth-api'
import { securityAPI } from '../api/security-api'

const initialState = {
    id: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null,
}

export const authReducer = (
    state = initialState,
    action: ActionsTypes
): InitialStateType => {
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

export const actions = {
    setAuthUserData: (
        id: number | null,
        email: string | null,
        login: string | null,
        isAuth: boolean
    ) =>
        ({
            type: 'SET-USER-DATA',
            payload: { id, email, login, isAuth },
        } as const),
    getCaptchaUrlSuccess: (captchaUrl: string) =>
        ({
            type: 'GET-CAPTCHA-URL-SUCCESS',
            payload: { captchaUrl },
        } as const),
}

export const getAuthUserData = (): ThunkType => async (dispatch) => {
    const meData = await authAPI.getUserData()
    if (meData.resultCode === ResultCodesEnum.Success) {
        let { id, login, email } = meData.data
        dispatch(actions.setAuthUserData(id, email, login, true))
    }
}

export const login = (
    email: string,
    password: string,
    rememberMe: boolean,
    captcha: string | null
): ThunkType => async (dispatch) => {
    const data = await authAPI.login(email, password, rememberMe, captcha)
    if (data.resultCode === ResultCodesEnum.Success) {
        dispatch(getAuthUserData())
    } else {
        if (data.resultCode === ResultCodeForCaptchaEnum.CaptchaIsRequired) {
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
    const data = await securityAPI.getCaptchaUrl()
    const captchaUrl = data.url
    dispatch(actions.getCaptchaUrlSuccess(captchaUrl))
}

export const logout = (): ThunkType => async (dispatch) => {
    const response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(actions.setAuthUserData(null, null, null, false))
    }
}

type InitialStateType = typeof initialState
type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsTypes | FormAction>
