import { v1 } from 'uuid'
import { ActionsTypes, PostType, ProfilePageType } from '../Types'

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
        case 'ADD-POST': {
            const stateCopy = { ...state }
            let newPost: PostType = {
                id: v1(),
                message: stateCopy.newPostText,
                likesCount: 0,
            }
            if (newPost.message.trim() === '') {
                return stateCopy
            }
            stateCopy.posts.unshift(newPost)
            stateCopy.newPostText = ''
            return stateCopy
        }
        case 'UPDATE-NEW-POST-TEXT': {
            const stateCopy = { ...state }
            stateCopy.newPostText = action.text
            return stateCopy
        }
        default:
            return state
    }
}
