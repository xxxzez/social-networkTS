import { v1 } from 'uuid'
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

const initialState = {
    posts: [
        { id: v1(), message: 'First post!!!!', likesCount: 17 },
        { id: v1(), message: 'Second post!!!!', likesCount: 7 },
    ],
    newPostText: '',
    profile: null,
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
