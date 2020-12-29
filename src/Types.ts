import {
    follow,
    setCurrentPage,
    setToggleIsFetching,
    setTotalUsersCount,
    setUsers,
    unfollow,
} from './redux/users-reducer'
import { onNewMessageChange, addNewMessage } from './redux/dialogs-reducer'
import {
    addPostAC,
    onPostChangeAC,
    setUserProfile,
} from './redux/profile-reducer'

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
    aboutMe: string | null | undefined
    contacts: ProfileContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string | null | undefined
    fullName: string | null | undefined
    userId: number
    photos: ProfilePhotosType
} | null

export type ProfilePhotosType = {
    small: string | null | undefined | HTMLImageElement
    large: string | null | undefined | HTMLImageElement
}
export type ProfileContactsType = {
    facebook: string | null | undefined
    website: string | null | undefined
    vk: string | null | undefined
    twitter: string | null | undefined
    instagram: string | null | undefined
    youtube: string | null | undefined
    github: string | null | undefined
    mainLink: string | null | undefined
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
    isFetching: boolean
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
    | ReturnType<typeof setToggleIsFetching>
    | ReturnType<typeof setUserProfile>
