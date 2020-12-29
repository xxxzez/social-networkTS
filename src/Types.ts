import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
} from './redux/users-reducer'
import {
    updateNewMessageTextAC,
    sendMessageTextAC,
} from './redux/dialogs-reducer'
import { addPostAC, onPostChangeAC } from './redux/profile-reducer'

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
}
export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageBody: string
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    usersPage: UsersPageType
}

export type LocationType = {
    city: string
    country: string
}
export type PhotosTypes = {
    small: string | null | undefined
    large: string | null | undefined
}
export type UserType = {
    id: string
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
}
export type ActionsTypes =
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof onPostChangeAC>
    | ReturnType<typeof updateNewMessageTextAC>
    | ReturnType<typeof sendMessageTextAC>
    | ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setTotalUsersCountAC>
