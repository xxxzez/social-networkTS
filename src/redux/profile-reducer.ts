import { ActionsTypes, PostType, ProfilePageType } from '../Types'

export const profileReducer = (
    state: ProfilePageType,
    action: ActionsTypes
): ProfilePageType => {
    switch (action.type) {
        case 'ADD-POST':
            let newPost: PostType = {
                id: Math.random(),
                message: action.text,
                likesCount: 0,
            }
            if (newPost.message.trim() === '') {
                return state
            }
            state.posts.push(newPost)
            state.newPostText = ''

            return state
        case 'UPDATE-NEW-POST-TEXT':
            state.newPostText = action.text

            return state
        default:
            return state
    }
}
