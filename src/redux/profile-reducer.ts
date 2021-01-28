import { v1 } from 'uuid'
import { profileAPI } from '../api/api'
import { ActionsTypes, ProfilePageType, ProfileType } from '../Types'

export const addPostAC = () => {
    return {
        type: 'ADD-POST',
    } as const
}
export const onPostChangeAC = (newPostText: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        text: newPostText,
    } as const
}
export const setUserProfile = (profile: ProfileType) => {
    return {
        type: 'SET-USER-PROFILE',
        profile: profile,
    } as const
}

export const setUserProfileTC = (userId: number) => {
    return (dispatch: any) => {
        profileAPI.getUserProfile(userId).then((response) => {
            dispatch(setUserProfile(response.data))
        })
    }
}

const initialState = {
    posts: [
        { id: v1(), message: 'First post!!!!', likesCount: 17 },
        { id: v1(), message: 'Second post!!!!', likesCount: 7 },
    ],
    newPostText: '',
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
            if (state.newPostText.trim() === '') {
                return state
            }
            return {
                ...state,
                posts: [
                    ...state.posts,
                    { id: v1(), message: state.newPostText, likesCount: 0 },
                ],
                newPostText: '',
            }

        case 'UPDATE-NEW-POST-TEXT':
            return {
                ...state,
                newPostText: action.text,
            }
        case 'SET-USER-PROFILE':
            return {
                ...state,
                profile: action.profile,
            }

        default:
            return state
    }
}
