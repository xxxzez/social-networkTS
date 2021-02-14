import { PostType } from './../Types'
import { FormAction, stopSubmit } from 'redux-form'
import { v1 } from 'uuid'
import { profileAPI } from '../api/profile-api'
import { ProfilePhotosType, ProfileType } from '../Types'
import { BaseThunkType, InferActionsTypes } from './store'

export const actions = {
    addPost: (newPostBody: string) =>
        ({
            type: 'ADD-POST',
            newPostBody,
        } as const),
    deletePost: (postId: string) =>
        ({
            type: 'DELETE-POST',
            postId,
        } as const),
    setStatus: (status: string) =>
        ({
            type: 'SET-STATUS',
            status,
        } as const),
    setUserProfile: (profile: ProfileType) =>
        ({
            type: 'SET-USER-PROFILE',
            profile,
        } as const),
    savePhotoSuccess: (photos: ProfilePhotosType) =>
        ({
            type: 'SAVE-PHOTO-SUCCESS',
            photos,
        } as const),
}

export const getProfile = (userId: number): ThunkType => async (dispatch) => {
    const data = await profileAPI.getProfile(userId)
    dispatch(actions.setUserProfile(data))
}

export const getStatus = (userId: number): ThunkType => async (dispatch) => {
    const data = await profileAPI.getStatus(userId)
    dispatch(actions.setStatus(data))
}
export const updateStatus = (status: string): ThunkType => async (dispatch) => {
    try {
        const data = await profileAPI.updateStatus(status)
        if (data.resultCode === 0) {
            dispatch(actions.setStatus(status))
        }
    } catch (error) {
        alert('Cant update your status')
    }
}
export const savePhoto = (file: File): ThunkType => async (dispatch) => {
    const data = await profileAPI.savePhoto(file)
    if (data.resultCode === 0) {
        dispatch(actions.savePhotoSuccess(data.data.photos))
    }
}
export const saveProfile = (profile: ProfileType): ThunkType => async (
    dispatch,
    getState
) => {
    const userId = getState().auth.id
    const data = await profileAPI.saveProfile(profile)
    if (data.resultCode === 0) {
        dispatch(getProfile(userId))
    } else {
        dispatch(stopSubmit('edit-profile', { _error: data.messages[0] }))
        return Promise.reject(data.messages[0])
    }
}

const initialState = {
    posts: [] as PostType[],
    status: '',
    profile: null as ProfileType | null,
}

export const profileReducer = (
    state = initialState,
    action: ActionsTypes
): InitialStateType => {
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

type InitialStateType = typeof initialState
type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsTypes | FormAction>
