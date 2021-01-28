import {
    follow,
    setCurrentPage,
    toggleIsFetching,
    setTotalUsersCount,
    setUsers,
    toggleFollowingProgress,
    unfollow,
} from './redux/users-reducer'
import { onNewMessageChange, addNewMessage } from './redux/dialogs-reducer'
import {
    addPostAC,
    onPostChangeAC,
    setUserProfile,
} from './redux/profile-reducer'
import { setAuthUserData } from './redux/auth-reducer'

export type PostType = {
    id: string
    message: string
    likesCount: number
}
export type MessageType = {
    id: string
    message: string
}
export type DialogType = {
    id: string
    name: string
}
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
    profile: ProfileType
}
export type ProfileType = {
    aboutMe: string
    contacts: ProfileContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: ProfilePhotosType
} | null

export type ProfilePhotosType = {
    small: string | null
    large: string | null
}
export type ProfileContactsType = {
    facebook: string
    website: string
    vk: string
    twitter: string
    instagram: string
    youtube: string
    github: string
    mainLink: string
}

export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageBody: string
}

export type AuthType = {
    id: number
    email: string
    login: string
    isAuth: boolean
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    usersPage: UsersPageType
    auth: AuthType
}

export type LocationType = {
    city: string
    country: string
}
export type PhotosTypes = {
    small: string | null
    large: string | null
}
export type UserType = {
    id: number
    name: string
    status: string
    location: LocationType
    followed: boolean
    photos: PhotosTypes
}

export type UsersPageType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}
export type ActionsTypes =
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof onPostChangeAC>
    | ReturnType<typeof onNewMessageChange>
    | ReturnType<typeof addNewMessage>
    | ReturnType<typeof follow>
    | ReturnType<typeof unfollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setAuthUserData>
    | ReturnType<typeof toggleFollowingProgress>
