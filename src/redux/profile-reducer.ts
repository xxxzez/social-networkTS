import { v1 } from 'uuid'
import { ActionsTypes, PostType, ProfilePageType } from '../Types'

export const addPostAC = (newPostText: string) => {
    return {
        type: 'ADD-POST',
        text: newPostText,
    } as const
}

export const onPostChangeAC = (newPostText: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        text: newPostText,
    } as const
}

const initialState = {
    posts: [
        { id: v1(), message: 'Second post!!!!', likesCount: 17 },
        { id: v1(), message: 'First post!!!!', likesCount: 7 },
    ],
    newPostText: '',
}

export const profileReducer = (
    state: ProfilePageType = initialState,
    action: ActionsTypes
): ProfilePageType => {
    switch (action.type) {
        case 'ADD-POST':
            let newPost: PostType = {
                id: v1(),
                message: action.text,
                likesCount: 0,
            }
            if (newPost.message.trim() === '') {
                return state
            }
            state.posts.unshift(newPost)
            state.newPostText = ''
            return state
        case 'UPDATE-NEW-POST-TEXT':
            state.newPostText = action.text

            return state
        default:
            return state
    }
}
