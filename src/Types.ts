import { AppStateType } from './redux/store'
import {
    followSuccess,
    setCurrentPage,
    toggleIsFetching,
    setTotalUsersCount,
    setUsers,
    toggleFollowingProgress,
    unfollowSuccess,
} from './redux/users-reducer'
import { addNewMessage } from './redux/dialogs-reducer'
import {
    addPost,
    deletePost,
    savePhotoSuccess,
    setStatus,
    setUserProfile,
} from './redux/profile-reducer'
import { getCaptchaUrlSuccess, setAuthUserData } from './redux/auth-reducer'
import { initializedSuccess } from './redux/app-reducer'
import { Dispatch } from 'redux'

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
    profile: ProfileType
    status: string
}
export type ProfileType = {
    aboutMe: string
    contacts: ProfileContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: ProfilePhotosType
}

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
}

export type AuthType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
    captchaUrl: string | null
}
export type AppReducerType = {
    initialized: boolean
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

export type GetStateType = () => AppStateType
export type UsersDispatchType = Dispatch<UsersReducersActionsTypes>
export type ProfileDispatchType = Dispatch<ProfileReducerActionsTypes>
export type AuthDispatchType = Dispatch<AuthReducerActionsTypes>
export type AppDispatchType = Dispatch<AppReducerActionsTypes>
export type DialogsDispatchType = Dispatch<DialogsReducerActionsTypes>

export type UsersReducersActionsTypes =
    | ReturnType<typeof followSuccess>
    | ReturnType<typeof unfollowSuccess>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof toggleFollowingProgress>

export type ProfileReducerActionsTypes =
    | ReturnType<typeof addPost>
    | ReturnType<typeof deletePost>
    | ReturnType<typeof setStatus>
    | ReturnType<typeof savePhotoSuccess>
    | ReturnType<typeof setUserProfile>

export type AuthReducerActionsTypes =
    | ReturnType<typeof getCaptchaUrlSuccess>
    | ReturnType<typeof setAuthUserData>

export type AppReducerActionsTypes = ReturnType<typeof initializedSuccess>
export type DialogsReducerActionsTypes = ReturnType<typeof addNewMessage>
