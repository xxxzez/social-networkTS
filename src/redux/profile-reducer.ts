import { stopSubmit } from 'redux-form'
import { ThunkAction } from 'redux-thunk'
import { v1 } from 'uuid'
import { profileAPI } from '../api/profile-api'
import {
    ProfileReducerActionsTypes,
    ProfilePageType,
    ProfilePhotosType,
    ProfileType,
} from '../Types'
import { AppStateType } from './store'

export const addPost = (newPostBody: string) => {
    return {
        type: 'ADD-POST',
        newPostBody,
    } as const
}
export const deletePost = (postId: string) => {
    return {
        type: 'DELETE-POST',
        postId,
    } as const
}
export const setStatus = (status: string) => {
    return {
        type: 'SET-STATUS',
        status,
    } as const
}
export const setUserProfile = (profile: ProfileType) => {
    return {
        type: 'SET-USER-PROFILE',
        profile,
    } as const
}
export const savePhotoSuccess = (photos: ProfilePhotosType) => {
    return {
        type: 'SAVE-PHOTO-SUCCESS',
        photos,
    } as const
}

type ThunkType = ThunkAction<
    Promise<void>,
    AppStateType,
    unknown,
    ProfileReducerActionsTypes
>
export const getProfile = (userId: number): ThunkType => async (dispatch) => {
    const response = await profileAPI.getProfile(userId)
    dispatch(setUserProfile(response.data))
}

export const getStatus = (userId: number): ThunkType => async (dispatch) => {
    const response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data))
}
export const updateStatus = (status: string): ThunkType => async (dispatch) => {
    try {
        const response = await profileAPI.updateStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status))
        }
    } catch (error) {
        alert('Cant update your status')
    }
}
export const savePhoto = (file: any): ThunkType => async (dispatch) => {
    const response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
}
export const saveProfile = (profile: any) => async (
    dispatch: any,
    getState: any
) => {
    const userId = getState().auth.id
    const response = await profileAPI.saveProfile(profile)
    if (response.data.resultCode === 0) {
        dispatch(getProfile(userId))
    } else {
        dispatch(
            stopSubmit('edit-profile', { _error: response.data.messages[0] })
        )
        return Promise.reject(response.data.messages[0])
    }
}

const initialState = {
    posts: [],
    status: '',
    profile: {
        aboutMe: '',
        contacts: {
            facebook: '',
            website: '',
            vk: '',
            twitter: '',
            instagram: '',
            youtube: '',
            github: '',
            mainLink: '',
        },
        lookingForAJob: true,
        lookingForAJobDescription: '',
        fullName: '',
        userId: 8250,
        photos: {
            small: '',
            large: '',
        },
    },
}

export const profileReducer = (
    state: ProfilePageType = initialState,
    action: ProfileReducerActionsTypes
): ProfilePageType => {
    switch (action.type) {
        case 'ADD-POST':
            if (action.newPostBody.trim() === '') {
                return state
            }
            return {
                ...state,
                posts: [
                    ...state.posts,
                    {
                        id: v1(),
                        message: action.newPostBody,
                        likesCount: 0,
                    },
                ],
            }
        case 'DELETE-POST':
            return {
                ...state,
                posts: state.posts.filter((p) => p.id !== action.postId),
            }
        case 'SET-USER-PROFILE':
            return {
                ...state,
                profile: action.profile,
            }
        case 'SET-STATUS':
            return {
                ...state,
                status: action.status,
            }
        case 'SAVE-PHOTO-SUCCESS':
            return {
                ...state,
                profile: { ...state.profile, photos: action.photos },
            }
        default:
            return state
    }
}
