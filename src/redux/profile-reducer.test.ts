import { v1 } from 'uuid'
import { profileReducer, addPost, deletePost } from './profile-reducer'

const state = {
    posts: [
        { id: v1(), message: 'First post!!!!', likesCount: 17 },
        { id: v1(), message: 'Second post!!!!', likesCount: 7 },
    ],
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
        userId: 2,
        photos: {
            small: '',
            large: '',
        },
    },
}

it('length of posts should be incremented', () => {
    let action = addPost('tommy hilfiger')
    let newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(3)
})
it('message of new post should be as in action', () => {
    let action = addPost('tommy hilfiger')
    let newState = profileReducer(state, action)
    expect(newState.posts[2].message).toBe('tommy hilfiger')
})
it('after deleting length of messages should be decremented', () => {
    let action = deletePost(state.posts[0].id)
    let newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(1)
})
it(`after deleting length shouldn't be decremented if ID is incorrect`, () => {
    let action = deletePost('123123')
    let newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(2)
})
