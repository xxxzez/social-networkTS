import { renderEntireTree } from '../render'
import { RootStateType, PostType } from '../Types'

export const state: RootStateType = {
    profilePage: {
        posts: [
            { id: 1, message: 'First post!!!!', likesCount: 17 },
            { id: 2, message: 'Some bullshit', likesCount: 7 },
        ],
        newPostText: '',
    },
    dialogsPage: {
        dialogs: [
            { id: 1, name: 'Dashiki' },
            { id: 2, name: 'Tommy' },
            { id: 3, name: 'Vlad' },
            { id: 4, name: 'Igor' },
            { id: 5, name: 'Andrew' },
        ],
        messages: [
            { id: 1, message: 'Whats going on' },
            { id: 2, message: 'Hello amigo' },
            { id: 3, message: 'My last message' },
            { id: 4, message: 'Miss me?' },
            { id: 5, message: 'See u tomorrow' },
        ],
    },
}

export const addPost = (text: string) => {
    let newPost: PostType = {
        id: Math.random(),
        message: text,
        likesCount: 0,
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    renderEntireTree(state)
}
export const updateNewPostText = (text: string) => {
    state.profilePage.newPostText = text
    renderEntireTree(state)
}
