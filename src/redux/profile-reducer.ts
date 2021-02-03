import { v1 } from 'uuid'
import { profileAPI } from '../api/api'
import { ActionsTypes, ProfilePageType, ProfileType } from '../Types'

export const addPostAC = (newPostBody: string) => {
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
        profile: profile,
    } as const
}

export const getProfile = (userId: number) => {
    return (dispatch: any) => {
        profileAPI.getProfile(userId).then((response) => {
            dispatch(setUserProfile(response.data))
        })
    }
}
export const getStatus = (userId: number) => {
    return (dispatch: any) => {
        profileAPI.getStatus(userId).then((response) => {
            dispatch(setStatus(response.data))
        })
    }
}
export const updateStatus = (status: string) => {
    return (dispatch: any) => {
        profileAPI.updateStatus(status).then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })
    }
}

const initialState = {
    posts: [
        { id: v1(), message: 'First post!!!!', likesCount: 17 },
        { id: v1(), message: 'Second post!!!!', likesCount: 7 },
    ],
    status: '',
    profile: {
        aboutMe: 'я не cool guy 1001%',
        contacts: {
            facebook: 'facebook.com',
            website: '',
            vk: 'vk.com/vk',
            twitter: 'https://twitter.com/@sdf',
            instagram: 'instagram.com/sds',
            youtube: 'null',
            github: 'github.com',
            mainLink: 'null',
        },
        lookingForAJob: true,
        lookingForAJobDescription: 'не ищу, а cool',
        fullName: 'Matvei Bohush',
        userId: 2,
        photos: {
            small:
                'https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0',
            large:
                'https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0',
        },
    },
}

export const profileReducer = (
    state: ProfilePageType = initialState,
    action: ActionsTypes
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
                    { id: v1(), message: action.newPostBody, likesCount: 0 },
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

        default:
            return state
    }
}
