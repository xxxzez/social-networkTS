import { v1 } from 'uuid'
import { profileReducer, addPostAC, deletePost } from './profile-reducer'

const state = {
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

it('length of posts should be incremented', () => {
    let action = addPostAC('tommy hilfiger')
    let newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(3)
})

it('message of new post should be as in action', () => {
    let action = addPostAC('tommy hilfiger')
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
